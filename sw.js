const CACHE_PREFIX = 'gym738-cache-';
const CACHE_NAME = `${CACHE_PREFIX}v12`;
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './app.js',
  './graphite.css',
  './rhythm.css',
  './rhythm.js',
  './rhythm-form.js',
  './app.css',
  './views.js',
  './views.css',
  './apple-touch-icon.png',
  './icon-512.png'
];
const APP_SCOPE = new URL(self.registration.scope);
const APP_SHELL = new URL('./index.html', APP_SCOPE).href;
const ASSET_URLS = new Set(ASSETS.map(asset => new URL(asset, APP_SCOPE).href));

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    // Bypass the HTTP cache so a new worker installs the current app shell.
    await cache.addAll([...ASSET_URLS].map(url => new Request(url, { cache: 'reload' })));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    // App-shell caches only; unrelated caches and saved workouts are untouched.
    await Promise.all(keys
      .filter(key => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME)
      .map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== APP_SCOPE.origin ||
      !url.pathname.startsWith(APP_SCOPE.pathname)) return;

  // Only the static app files are cached, never arbitrary API or user data.
  url.search = '';
  const isAsset = ASSET_URLS.has(url.href);
  const isNavigation = request.mode === 'navigate';
  // Nested diaries have their own worker and must never receive this app shell.
  if (!isAsset) return;

  event.respondWith((async () => {
    try {
      const response = await fetch(request);
      if (isAsset && response.status === 200 && response.type === 'basic') {
        // A cache quota/write failure must not break an otherwise successful load.
        const copy = response.clone();
        await caches.open(CACHE_NAME)
          .then(cache => cache.put(url.href, copy))
          .catch(() => {});
      }
      return response;
    } catch {
      const cache = await caches.open(CACHE_NAME);
      const cached = isAsset ? await cache.match(url.href) : undefined;
      if (cached) return cached;
      // HTML is a fallback for page navigation, never for scripts or images.
      if (isNavigation) {
        const shell = await cache.match(APP_SHELL);
        if (shell) return shell;
      }
      return Response.error();
    }
  })());
});
