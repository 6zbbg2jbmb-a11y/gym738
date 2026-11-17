// ==========================================
    // 1. ПРОГРАММА ТРЕНИРОВОК (UPPER / LOWER)
    // ==========================================
    const PROGRAM = {
      upperA: {
        id: 'upperA',
        title: 'Пн • Верх А (Базовая сила)',
        subtitle: 'Толщина спины, жимовая база и длинные головки рук',
        warmupNote: 'Разминка: 2–3 подхода перед первым упражнением на мышцу без утомления.',
        exercises: [
          {
            id: 'ua_bench',
            name: 'Жим штанги лежа на горизонтальной скамье',
            sets: 3,
            minReps: 5,
            maxReps: 8,
            rir: 'RIR 2',
            restSec: 180,
            restLabel: '3 мин',
            muscle: 'Грудь',
            step: 2.5,
            note: 'СОЛО (183 см): ставь скамью в раму с упорами на 2 см ниже груди с мостом (или жми без замков на строгом RIR 2). Локти под углом 45–60° к корпусу, лопатки сведены.'
          },
          {
            id: 'ua_row',
            name: 'Тяга Т-грифа с упором грудью / Тяга штанги',
            variants: ['Тяга Т-грифа с упором грудью ✅', 'Тяга штанги в наклоне'],
            sets: 3,
            minReps: 6,
            maxReps: 10,
            rir: 'RIR 1–2',
            restSec: 150,
            restLabel: '2.5 мин',
            muscle: 'Спина',
            step: 2.5,
            note: 'СОЛО (183 см): упор грудью — лучший выбор, он бережет поясницу перед днем ног. Внизу позволяй весу вытянуть лопатки вперед (растяжение), затем мощно тяни локти назад.'
          },
          {
            id: 'ua_ohp_db',
            name: 'Жим гантелей сидя (угол скамьи 75–80°)',
            sets: 3,
            minReps: 8,
            maxReps: 10,
            rir: 'RIR 1–2',
            restSec: 150,
            restLabel: '2.5 мин',
            muscle: 'Плечи',
            step: 2,
            note: 'СОЛО: закидывай гантели поочередно толчком колен. Локти выведи вперед на 30–45° (не в линию с ушами!). Опускай глубоко до плеч. В конце прими гантели обратно на колени (не бросай на пол!).'
          },
          {
            id: 'ua_lat_pulldown',
            name: 'Тяга верхнего блока к груди',
            variants: ['Средний хват к груди ✅', 'Широкий хват к груди'],
            sets: 3,
            minReps: 8,
            maxReps: 12,
            rir: 'RIR 1',
            restSec: 120,
            restLabel: '2 мин',
            muscle: 'Широчайшие',
            step: 2.5,
            note: 'СОЛО: используй лямки! Хват чуть шире плеч дает лучшую амплитуду. Вверху позволяй лопаткам тянуться за рукоятью вверх (растяжение широчайших).'
          },
          {
            id: 'ua_incline_curl',
            name: 'Сгибания на бицепс: Наклонная скамья / Блок',
            variants: ['Гантели сидя на наклонной 45–60° ✅', 'Нижний блок стоя спиной'],
            sets: 3,
            minReps: 8,
            maxReps: 12,
            rir: 'RIR 0–1',
            restSec: 90,
            restLabel: '1.5 мин',
            muscle: 'Бицепс',
            step: 1,
            note: 'ПРОСТАЯ ТЕХНИКА: сидя на скамье 45–60°, прижми лопатки и затылок, свесь руки вертикально вниз — бицепс уже растянут без возни с тросом! Сгибай руки, не выводя локти вперед.'
          },
          {
            id: 'ua_overhead_ext',
            name: 'Разгибания на трицепс из-за головы',
            variants: ['Блок с канатом (ролик у пояса) ✅', 'С гантелью сидя двумя руками'],
            sets: 3,
            minReps: 10,
            maxReps: 12,
            rir: 'RIR 0–1',
            restSec: 90,
            restLabel: '1.5 мин',
            muscle: 'Трицепс',
            step: 2.5,
            note: 'ЧТОБЫ БЫЛО УДОБНО: на блоке ставь ролик на высоту ПОЯСА (не в пол!), бери канат и разворачивайся. Либо сядь на скамью 75° и делай из-за головы с одной гантелью двумя руками!'
          }
        ]
      },
      lowerA: {
        id: 'lowerA',
        title: 'Вт • Низ А (Квадрицепс и база)',
        subtitle: 'Глубокий присед, румынская тяга и бицепс бедра сидя',
        warmupNote: 'Разомни колени и таз + 2–3 разминочных подхода в приседаниях.',
        exercises: [
          {
            id: 'la_squat',
            name: 'Глубокий Гакк-присед / Присед со штангой',
            variants: ['Глубокий Гакк-присед ✅', 'Приседания со штангой в раме'],
            sets: 3,
            minReps: 5,
            maxReps: 8,
            rir: 'RIR 2',
            restSec: 210,
            restLabel: '3.5 мин',
            muscle: 'Квадрицепс',
            step: 2.5,
            note: 'СОЛО (183 см): Гакк-присед идеален — спина прижата, стопоры под руками. Если со штангой — ставь упоры в раме и подложи блинчики 1.25–2.5 кг под пятки для глубокого седа с ровной спиной.'
          },
          {
            id: 'la_rdl',
            name: 'Румынская тяга со штангой (с лямками)',
            sets: 3,
            minReps: 8,
            maxReps: 10,
            rir: 'RIR 2',
            restSec: 180,
            restLabel: '3 мин',
            muscle: 'Бицепс бедра',
            step: 2.5,
            note: 'СОЛО: снимай штангу со стоек на уровне бедер и обязательно надевай лямки! Колени чуть согнуты, уводи таз строго назад (штанга скользит по ногам до середины голени).'
          },
          {
            id: 'la_leg_press',
            name: 'Жим ногами (стопы внизу платформы)',
            sets: 3,
            minReps: 10,
            maxReps: 12,
            rir: 'RIR 1',
            restSec: 150,
            restLabel: '2.5 мин',
            muscle: 'Квадрицепс',
            step: 5,
            note: 'СОЛО: проверь нижние страховочные отбойники! Ставь стопы в нижнюю часть платформы. Опускай максимально глубоко, но не отрывай крестец и поясницу от сиденья.'
          },
          {
            id: 'la_seated_curl',
            name: 'Сгибания ног в тренажере СИДЯ',
            sets: 3,
            minReps: 10,
            maxReps: 15,
            rir: 'RIR 0–1',
            restSec: 120,
            restLabel: '2 мин',
            muscle: 'Бицепс бедра',
            step: 2.5,
            note: 'СОЛО: плотно зажми бедра верхней подушкой. Сидячий вариант дает на 30–40% больше роста, чем лежа. В 3-м подходе после отказа сделай 3–4 частичных повторения в начале амплитуды.'
          },
          {
            id: 'la_calf_standing',
            name: 'Подъемы на носки стоя (тренажер / Смит)',
            sets: 4,
            minReps: 10,
            maxReps: 15,
            rir: 'RIR 0–1',
            restSec: 90,
            restLabel: '1.5 мин',
            muscle: 'Икры',
            step: 2.5,
            note: 'Главный секрет икр: опусти пятки максимально вниз и держи паузу 2 секунды в нижней точке (убирает пружину ахиллова сухожилия).'
          },
          {
            id: 'la_abs',
            name: 'Скручивания «Молитва» / Подъемы ног в висе',
            variants: ['Скручивания на блоке («Молитва») ✅', 'Подъемы ног в висе'],
            sets: 3,
            minReps: 10,
            maxReps: 15,
            rir: 'RIR 1',
            restSec: 90,
            restLabel: '1.5 мин',
            muscle: 'Пресс',
            step: 2.5,
            note: 'В «Молитве» зафиксируй таз и скручивай именно грудной отдел позвоночника к тазу (ребра к лобковой кости), плавно растягивая пресс вверху.'
          }
        ]
      },
      upperB: {
        id: 'upperB',
        title: 'Чт • Верх Б (Гипертрофия)',
        subtitle: 'Верх груди, ширина спины и средняя дельта в растяжении',
        warmupNote: '2–3 разминочных подхода перед жимом и подтягиваниями.',
        exercises: [
          {
            id: 'ub_incline_db',
            name: 'Жим гантелей на наклонной скамье (30°)',
            sets: 3,
            minReps: 8,
            maxReps: 10,
            rir: 'RIR 1–2',
            restSec: 165,
            restLabel: '2.5–3 мин',
            muscle: 'Верх груди',
            step: 2,
            note: 'СОЛО: угол строго 30° (1–2 деления вверх). Закидывай гантели коленями, локти под углом 45–60° к ребрам. Опускай глубоко с паузой 0.5 сек в растяжении. В конце прими гантели на колени и сядь.'
          },
          {
            id: 'ub_pullups',
            name: 'Подтягивания (с доп. весом или своим)',
            sets: 3,
            minReps: 6,
            maxReps: 10,
            rir: 'RIR 1–2',
            restSec: 165,
            restLabel: '2.5–3 мин',
            muscle: 'Широчайшие',
            step: 2.5,
            note: 'Хват чуть шире плеч (можно с лямками). Внизу полное растяжение, вверху тянись грудью к турнику. Если со своим весом — пиши 0 кг (или 73 кг).'
          },
          {
            id: 'ub_dips_hammer',
            name: 'Жим в Хаммере / Отжимания на брусьях с весом',
            variants: ['Жим в тренажере Хаммер ✅', 'Брусья с весом (наклон вперед)'],
            sets: 3,
            minReps: 8,
            maxReps: 12,
            rir: 'RIR 1',
            restSec: 120,
            restLabel: '2 мин',
            muscle: 'Грудь / Трицепс',
            step: 2.5,
            note: 'СОЛО: Хаммер безопаснее для плеч на RIR 1. На брусьях наклоняй корпус вперед на 25° и опускайся до угла 90° в локтях без дискомфорта в плечах.'
          },
          {
            id: 'ub_cable_row',
            name: 'Тяга горизонтального блока к поясу',
            sets: 3,
            minReps: 10,
            maxReps: 12,
            rir: 'RIR 1',
            restSec: 120,
            restLabel: '2 мин',
            muscle: 'Середина спины',
            step: 2.5,
            note: 'С лямками! На негативной фазе не качай поясницей, но подавай плечи и лопатки вперед (растягивая трапеции и ромбовидные под нагрузкой), затем своди лопатки и тяни к поясу.'
          },
          {
            id: 'ub_cable_lateral',
            name: 'Махи в сторону: Нижний блок / Гантели сидя',
            variants: ['Махи на блоке (ролик у кисти) ✅', 'Махи с гантелями сидя (наклон 15°)'],
            sets: 4,
            minReps: 12,
            maxReps: 15,
            rir: 'RIR 0–1',
            restSec: 90,
            restLabel: '1.5 мин',
            muscle: 'Средняя дельта',
            step: 1.25,
            note: 'На блоке: ставь ролик на высоту кисти/колена и держись за стойку. Если на блоке неудобный шаг плиток — сядь на скамью (наклон 15° вперед) и веди гантели чуть вперед на 30° в плоскости лопатки.'
          },
          {
            id: 'ub_preacher_curl',
            name: 'Сгибания с EZ-штангой на скамье Скотта',
            sets: 3,
            minReps: 8,
            maxReps: 12,
            rir: 'RIR 0–1',
            restSec: 90,
            restLabel: '1.5 мин',
            muscle: 'Бицепс',
            step: 2.5,
            note: 'СОЛО: подмышки плотно на краю подушки. Опускай EZ-гриф медленно (2–3 сек) почти до конца (оставляя микро-угол 5° в локте, без рывка снизу!).'
          }
        ]
      },
      lowerB: {
        id: 'lowerB',
        title: 'Пт • Низ Б (Задняя цепь и руки)',
        subtitle: 'Детализация бедер, ягодиц, задней дельты и трицепса',
        warmupNote: 'Болгарские приседы — для гипертрофии без нагрузки на поясницу; Становая — для силы.',
        exercises: [
          {
            id: 'lb_main',
            name: 'Болгарские сплит-приседы / Становая тяга',
            variants: ['Болгарские приседы с опорой рукой (8–10) ✅', 'Становая тяга (5–6)'],
            sets: 3,
            minReps: 8,
            maxReps: 10,
            altMinReps: 5,
            altMaxReps: 6,
            rir: 'RIR 2',
            restSec: 180,
            restLabel: '3 мин',
            muscle: 'Бедра / Ягодицы',
            step: 2,
            note: 'СОЛО-ЛАЙФХАК: возьми тяжелую гантель (с лямкой) в ОДНУ руку (со стороны задней ноги), а свободной рукой держись за стойку рамы! Баланс 100%, при отказе просто опусти гантель на пол.'
          },
          {
            id: 'lb_leg_ext',
            name: 'Разгибания ног в тренажере сидя',
            sets: 3,
            minReps: 10,
            maxReps: 15,
            rir: 'RIR 0–1',
            restSec: 120,
            restLabel: '2 мин',
            muscle: 'Квадрицепс',
            step: 2.5,
            note: 'Отодвинь спинку тренажера чуть назад (полулежа, угол в тазу 100–110°) — это растягивает и полноценно включает прямую мышцу бедра.'
          },
          {
            id: 'lb_hyper_curl',
            name: 'Сгибания ног / Гиперэкстензия с весом',
            variants: ['Сгибания ног лежа/сидя ✅', 'Гиперэкстензия (круглая спина)'],
            sets: 3,
            minReps: 10,
            maxReps: 12,
            rir: 'RIR 1',
            restSec: 120,
            restLabel: '2 мин',
            muscle: 'Ягодицы / Бицепс бедра',
            step: 2.5,
            note: 'Сгибания голени тренируют короткую головку бицепса бедра (она не работает в тягах). В гиперэкстензии скругли верх спины и поднимайся строго за счет сжатия ягодиц.'
          },
          {
            id: 'lb_skullcrusher',
            name: 'Французский жим с EZ-штангой (за голову)',
            sets: 3,
            minReps: 8,
            maxReps: 12,
            rir: 'RIR 1',
            restSec: 120,
            restLabel: '2 мин',
            muscle: 'Трицепс',
            step: 2.5,
            note: 'СОЛО: уводи плечи чуть назад (15–20°) и опускай гриф ЗА макушку головы (растяжение длинной головки, бережет локти). При отказе опусти гриф на грудь, выжми от груди и сядь.'
          },
          {
            id: 'lb_facepull',
            name: 'Обратный Пек-Дек / Тяга каната к лицу',
            variants: ['Обратный Пек-Дек ✅', 'Тяга каната к лицу (Face Pull)'],
            sets: 3,
            minReps: 12,
            maxReps: 15,
            rir: 'RIR 1',
            restSec: 90,
            restLabel: '1.5 мин',
            muscle: 'Задняя дельта',
            step: 2.5,
            note: 'СОЛО: в Обратном Пек-Дек грудь стабильна, не своди лопатки — отводи руки локтями в стороны-назад по широкой дуге.'
          },
          {
            id: 'lb_calf_press',
            name: 'Подъемы на носки в жиме ногами',
            sets: 3,
            minReps: 12,
            maxReps: 15,
            rir: 'RIR 0–1',
            restSec: 90,
            restLabel: '1.5 мин',
            muscle: 'Икры',
            step: 5,
            note: 'СОЛО-БЕЗОПАСНОСТЬ: выжми платформу, но НЕ убирай страховочные стопоры (чтобы платформа не поехала, если соскользнет носок)! Пауза 2 секунды в нижней точке.'
          }
        ]
      }
    };

    // ==========================================
    // 2. ХРАНИЛИЩЕ (100% СОВМЕСТИМОСТЬ С УЖЕ ВВЕДЕННЫМИ ДАННЫМИ)
    // ==========================================
    const STORAGE_KEY = 'gym738_tracker_v1';
    const IDB_NAME = 'gym738_idb';
    const IDB_STORE = 'state_store';
    let localStateStatus = 'missing';
    let storageRecoveryBlocked = false;
    let idbSaveQueue = Promise.resolve();
    let saveGeneration = 0;
    let state = loadState();
    let openTips = {};       // какие подсказки 💡 открыты
    let lastWorkoutTab = PROGRAM[state.currentTab] ? state.currentTab : 'upperA';
    let manualExpand = {};   // какие выполненные карточки развернуты вручную

    if (navigator.storage && navigator.storage.persist) {
      navigator.storage.persist().catch(() => {});
    }

    function openIDB() {
      return new Promise((resolve, reject) => {
        if (!window.indexedDB) return reject(new Error('IndexedDB unavailable'));
        let settled = false;
        const fail = error => {
          if (settled) return;
          settled = true;
          clearTimeout(timeout);
          reject(error || new Error('Unable to open storage'));
        };
        const timeout = setTimeout(() => fail(new Error('Storage opening timed out')), 4000);
        let req;
        try { req = indexedDB.open(IDB_NAME, 1); } catch (error) { fail(error); return; }
        req.onupgradeneeded = e => {
          const db = e.target.result;
          if (!db.objectStoreNames.contains(IDB_STORE)) {
            db.createObjectStore(IDB_STORE);
          }
        };
        req.onsuccess = e => {
          if (settled) return e.target.result.close();
          settled = true;
          clearTimeout(timeout);
          resolve(e.target.result);
        };
        req.onerror = () => fail(req.error);
        req.onblocked = () => fail(new Error('Storage blocked by another window'));
      });
    }

    function saveToIDB(data) {
      const serialized = JSON.stringify(data);
      const write = () => openIDB().then(db => new Promise((resolve, reject) => {
        let tx;
        try {
          tx = db.transaction(IDB_STORE, 'readwrite');
          tx.oncomplete = () => { db.close(); resolve(); };
          tx.onabort = tx.onerror = () => { db.close(); reject(tx.error || new Error('Save failed')); };
          tx.objectStore(IDB_STORE).put(serialized, STORAGE_KEY);
        } catch (error) {
          db.close();
          reject(error);
        }
      }));
      const result = idbSaveQueue.then(write);
      idbSaveQueue = result.catch(() => {});
      return result;
    }

    async function restoreFromIDBIfNeeded() {
      if (localStateStatus === 'valid') return true;
      try {
        const db = await openIDB();
        const raw = await new Promise((resolve, reject) => {
          try {
            const tx = db.transaction(IDB_STORE, 'readonly');
            const req = tx.objectStore(IDB_STORE).get(STORAGE_KEY);
            tx.oncomplete = () => { db.close(); resolve(req.result); };
            tx.onabort = tx.onerror = () => { db.close(); reject(tx.error || new Error('Read failed')); };
          } catch (error) {
            db.close();
            reject(error);
          }
        });
        if (raw != null) {
          const recovered = validateState(JSON.parse(raw));
          state = recovered;
          lastWorkoutTab = Object.hasOwn(PROGRAM, state.currentTab) ? state.currentTab : 'upperA';
          try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(recovered));
            localStateStatus = 'valid';
          } catch (error) { /* The committed backup is still available. */ }
          setSaveStatus('Записи восстановлены');
        } else if (localStateStatus === 'invalid') {
          throw new Error('Stored records are invalid and no backup is available');
        } else {
          setSaveStatus('На этом устройстве');
        }
        return true;
      } catch (error) {
        // Never replace an unreadable backup with a freshly created empty state.
        storageRecoveryBlocked = true;
        setSaveStatus('Записи не восстановлены', true);
        return false;
      }
    }

    function getDefaultState() {
      return {
        currentWeek: 1,
        currentTab: 'upperA',
        selectedVariants: {},
        workouts: {},
        notes: {},
        bodyWeight: {},
        dailyChecklist: {}
      };
    }

    function loadState() {
      let raw;
      try {
        raw = localStorage.getItem(STORAGE_KEY);
      } catch (error) {
        localStateStatus = 'unavailable';
        return getDefaultState();
      }
      if (raw == null) return getDefaultState();
      try {
        const loaded = validateState(JSON.parse(raw));
        localStateStatus = 'valid';
        return loaded;
      } catch (error) {
        localStateStatus = 'invalid';
        return getDefaultState();
      }
    }

    function validateState(value) {
      const isRecord = item => item !== null && typeof item === 'object' && !Array.isArray(item);
      if (!isRecord(value) || !Object.hasOwn(value, 'workouts')) throw new Error('Invalid backup');
      const result = { ...getDefaultState(), ...value };
      const tabs = [...Object.keys(PROGRAM), 'nutrition', 'stats'];
      if (!tabs.includes(result.currentTab)) throw new Error('Invalid tab');
      if (typeof result.currentWeek !== 'number' && typeof result.currentWeek !== 'string') throw new Error('Invalid week');
      result.currentWeek = Number(result.currentWeek);
      if (!Number.isInteger(result.currentWeek) || result.currentWeek < 1 || result.currentWeek > 16) throw new Error('Invalid week');
      for (const field of ['selectedVariants', 'workouts', 'notes', 'bodyWeight', 'dailyChecklist']) {
        if (!isRecord(result[field])) throw new Error(`Invalid ${field}`);
        result[field] = { ...result[field] };
      }
      const numericText = (item, integer = false) => {
        if (typeof item !== 'string' && !(typeof item === 'number' && Number.isFinite(item))) throw new Error('Invalid number');
        const text = String(item);
        if (!(integer ? /^\d*$/ : /^[\d.,]*$/).test(text)) throw new Error('Invalid number');
        return text;
      };
      const exercises = Object.values(PROGRAM).flatMap(day => day.exercises);
      for (const [key, index] of Object.entries(result.selectedVariants)) {
        const exercise = exercises.find(item => item.id === key);
        if (!Number.isInteger(index) || index < 0 || (exercise && index >= (exercise.variants?.length || 1))) throw new Error('Invalid variant');
      }
      for (const [key, item] of Object.entries(result.workouts)) {
        if (!isRecord(item)) throw new Error('Invalid set');
        const entry = { weight: '', reps: '', done: false, ...item };
        entry.weight = numericText(entry.weight);
        entry.reps = numericText(entry.reps, true);
        if (typeof entry.done !== 'boolean') throw new Error('Invalid completion flag');
        result.workouts[key] = entry;
      }
      for (const note of Object.values(result.notes)) if (typeof note !== 'string') throw new Error('Invalid note');
      for (const [key, weight] of Object.entries(result.bodyWeight)) result.bodyWeight[key] = numericText(weight);
      for (const item of Object.values(result.dailyChecklist)) {
        if (!isRecord(item) || Object.values(item).some(flag => typeof flag !== 'boolean')) throw new Error('Invalid checklist');
      }
      return result;
    }

    function setSaveStatus(message, error = false) {
      const badge = document.getElementById('saveStatusBadge');
      if (badge) { badge.textContent = message; badge.dataset.error = String(error); }
    }

    async function saveState(data = state, replaceUnreadable = false) {
      if (storageRecoveryBlocked && !replaceUnreadable) {
        setSaveStatus('Сначала восстанови копию', true);
        updateHeaderWeight();
        return false;
      }
      const generation = ++saveGeneration;
      let snapshot;
      try {
        snapshot = validateState(data);
      } catch (error) {
        setSaveStatus('Не удалось сохранить записи', true);
        return false;
      }
      let localSaved = false;
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot));
        localSaved = true;
        localStateStatus = 'valid';
      } catch (error) { /* Try the independent backup below. */ }
      setSaveStatus(localSaved ? 'Сохранено' : 'Сохранение…');
      updateHeaderWeight();
      let backupSaved = false;
      try { await saveToIDB(snapshot); backupSaved = true; } catch (error) {}
      const saved = localSaved || backupSaved;
      if (saved && replaceUnreadable) storageRecoveryBlocked = false;
      if (generation === saveGeneration) setSaveStatus(saved ? 'Сохранено' : 'Сохрани резервную копию', !saved);
      return saved;
    }

    function getSetData(week, exId, setIdx) {
      const key = `w${week}_${exId}_s${setIdx}`;
      return state.workouts[key] || { weight: '', reps: '', done: false };
    }

    function setSetData(week, exId, setIdx, patch) {
      const key = `w${week}_${exId}_s${setIdx}`;
      const current = getSetData(week, exId, setIdx);
      state.workouts[key] = Object.assign({}, current, patch);
      saveState();
    }

    function getRepRange(ex) {
      const variantIdx = state.selectedVariants[ex.id] || 0;
      if (ex.id === 'lb_main' && variantIdx === 1) {
        return { min: ex.altMinReps, max: ex.altMaxReps };
      }
      return { min: ex.minReps, max: ex.maxReps };
    }

    // Нормализация ввода для русской клавиатуры iPhone (заменяет запятую "," на точку ".")
    function cleanDecimal(val) {
      if (val === undefined || val === null) return '';
      return String(val).replace(',', '.').replace(/[^0-9.]/g, '');
    }

    function updateKeyboardUI() {
      const active = document.activeElement;
      const editing = active && /^(INPUT|TEXTAREA)$/.test(active.tagName) && active.type !== 'file';
      const viewport = window.visualViewport;
      const inset = viewport ? Math.max(0, window.innerHeight - viewport.height - viewport.offsetTop) : 0;
      const keyboardOpen = editing && inset > 100 && (!viewport || viewport.scale <= 1.05);
      document.body.classList.toggle('keyboard-open', keyboardOpen);
      document.documentElement.style.setProperty('--keyboard-inset', `${inset}px`);
      document.getElementById('kbDismissBar').hidden = !keyboardOpen;
    }
    document.addEventListener('focusin', updateKeyboardUI);
    document.addEventListener('focusout', () => requestAnimationFrame(updateKeyboardUI));
    window.visualViewport?.addEventListener('resize', updateKeyboardUI);
    window.visualViewport?.addEventListener('scroll', updateKeyboardUI);
    window.addEventListener('resize', updateKeyboardUI);

    function dismissKeyboard(e) {
      e?.preventDefault();
      if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
      updateKeyboardUI();
    }

    // ==========================================
    // 3. АЛГОРИТМ ДВОЙНОЙ ПРОГРЕССИИ
    // ==========================================
    function evaluateProgression(week, ex) {
      const range = getRepRange(ex);
      const isDeload = (week % 8 === 0);

      if (isDeload) {
        return {
          type: 'deload',
          badge: '🔄 DELOAD НЕДЕЛЯ (-15..20% веса)',
          color: 'text-sky-300 bg-sky-500/15 border-sky-500/30'
        };
      }

      let curSets = [];
      for (let s = 1; s <= ex.sets; s++) {
        curSets.push(getSetData(week, ex.id, s));
      }
      const filledCur = curSets.filter(s => s.reps !== '' && Number(s.reps) > 0);

      if (filledCur.length === ex.sets && filledCur.every(s => Number(s.reps) >= range.max)) {
        const w = Number(cleanDecimal(filledCur[0].weight)) || 0;
        const step = ex.step || 2.5;
        const nextW = w > 0 ? ` (${w + step} кг)` : '';
        return {
          type: 'levelup',
          badge: `🚀 ВЕРХ ЗАКРЫТ! След. тренировка: +вес${nextW}`,
          color: 'text-emerald-300 bg-emerald-500/20 border-emerald-500/40'
        };
      }

      const prevWeek = (week > 1 && (week - 1) % 8 === 0 && week > 2) ? week - 2 : week - 1;
      if (prevWeek >= 1) {
        let prevSets = [];
        for (let s = 1; s <= ex.sets; s++) {
          prevSets.push(getSetData(prevWeek, ex.id, s));
        }
        const filledPrev = prevSets.filter(s => s.reps !== '' && Number(s.reps) > 0);
        if (filledPrev.length > 0) {
          const prevAllMax = filledPrev.length === ex.sets && filledPrev.every(s => Number(s.reps) >= range.max);
          const prevWeight = filledPrev[0].weight || '?';
          const prevRepsStr = prevSets.map(s => s.reps || '—').join(', ');
          const step = ex.step || 2.5;

          if (prevAllMax) {
            const suggestedWeight = Number(cleanDecimal(prevWeight)) ? (Number(cleanDecimal(prevWeight)) + step) : '';
            return {
              type: 'increase_weight_now',
              badge: `🔥 ПОВЫШАЙ ВЕС СЕГОДНЯ (${suggestedWeight ? suggestedWeight + ' кг' : '+' + step + ' кг'})`,
              color: 'text-amber-300 bg-amber-500/20 border-amber-500/40'
            };
          } else {
            return {
              type: 'add_rep',
              badge: `🎯 Цель: +1 повтор (Прошлый: ${prevWeight} кг × ${prevRepsStr})`,
              color: 'text-indigo-300 bg-indigo-500/15 border-indigo-500/30'
            };
          }
        }
      }

      return {
        type: 'start',
        badge: `Цель: ${ex.sets} подхода × ${range.min}–${range.max} повт. (${ex.rir})`,
        color: 'text-slate-300 bg-slate-800/90 border-slate-700'
      };
    }

    // ==========================================
    // 4. РЕНДЕРИНГ ИНТЕРФЕЙСА ПОД IPHONE 14
    // ==========================================
    function initWeekSelect() {
      const sel = document.getElementById('weekSelect');
      sel.innerHTML = '';
      for (let w = 1; w <= 16; w++) {
        const opt = document.createElement('option');
        opt.value = w;
        opt.textContent = `Неделя ${w}`;
        if (w === Number(state.currentWeek)) opt.selected = true;
        sel.appendChild(opt);
      }
    }

    function changeWeek(val) {
      state.currentWeek = Number(val);
      saveState();
      render();
    }

    function selectTab(tabId) {
      dismissKeyboard();
      if (PROGRAM[tabId]) lastWorkoutTab = tabId;
      state.currentTab = tabId;
      saveState();
      render();
      window.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
    }

    function selectVariant(exId, idx) {
      state.selectedVariants[exId] = Number(idx);
      saveState();
      render();
    }

    function toggleTip(exId) {
      openTips[exId] = !openTips[exId];
      render();
    }

    function updateHeaderWeight() {
      const weights = Object.values(state.bodyWeight).filter(v => v && Number(cleanDecimal(v)) > 0).map(v => Number(cleanDecimal(v)));
      const el = document.getElementById('headerCurrentWeight');
      if (el) {
        el.textContent = weights.length > 0 ? weights[weights.length - 1].toFixed(1) : '73.0';
      }
    }

    function renderTabs() {
      const section = PROGRAM[state.currentTab] ? 'workout' : state.currentTab;
      for (const name of ['workout', 'nutrition', 'stats']) {
        const button = document.getElementById(`nav-${name}`);
        if (section === name) button.setAttribute('aria-current', 'page');
        else button.removeAttribute('aria-current');
      }
    }

    function escapeHtml(value) {
      return String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;', "'":'&#39;'}[c]));
    }

    function cleanLabel(text) {
      return text.replace(/[✅💡🚀🔥🎯🔄]/gu, '').trim();
    }

    function copyPreviousSet(week, exId, setIdx) {
      const previousWeek = (week > 2 && (week - 1) % 8 === 0) ? week - 2 : week - 1;
      const previous = getSetData(previousWeek, exId, setIdx);
      copyFromPrev(week, exId, setIdx, previous.weight, previous.reps);
    }

    function rememberDetails(exId, open) {
      openTips[exId] = open;
    }

    function renderWorkoutDay(dayKey) {
      const day = PROGRAM[dayKey];
      const week = Number(state.currentWeek);
      const prevWeek = (week > 2 && (week - 1) % 8 === 0) ? week - 2 : week - 1;
      const dayNames = {upperA:'Верх А', lowerA:'Низ А', upperB:'Верх Б', lowerB:'Низ Б'};
      const weekdays = {upperA:'Понедельник', lowerA:'Вторник', upperB:'Четверг', lowerB:'Пятница'};
      let totalSets = 0, doneSets = 0, totalVolume = 0;
      day.exercises.forEach(ex => {
        for (let i = 1; i <= ex.sets; i++) {
          const row = getSetData(week, ex.id, i);
          totalSets++;
          if (row.done) doneSets++;
          totalVolume += (Number(cleanDecimal(row.weight)) || 0) * (Number(row.reps) || 0);
        }
      });
      let html = `
        <nav class="day-switcher" aria-label="Тренировочный день">
          ${Object.entries(dayNames).map(([key, name]) => `<button type="button" id="tab-${key}" onclick="selectTab('${key}')" aria-pressed="${key === dayKey}">${name}</button>`).join('')}
        </nav>
        <section class="day-summary" aria-labelledby="dayTitle">
          <p class="eyebrow">${weekdays[dayKey]} · Неделя ${week}</p>
          <h2 id="dayTitle">${dayNames[dayKey]}</h2>
          <div class="day-progress">
            <strong id="daySetCount">${doneSets} из ${totalSets}</strong>
            <div class="progress-track" aria-hidden="true"><span style="width:${doneSets / totalSets * 100}%"></span></div>
            <span id="dayVolume">${Math.round(totalVolume).toLocaleString('ru-RU')} кг</span>
          </div>
          <details class="warmup"><summary>Перед тренировкой</summary><p>${escapeHtml(day.subtitle)}</p><p>${escapeHtml(day.warmupNote)}</p></details>
        </section>
        <div class="exercise-list">`;
      day.exercises.forEach((ex, idx) => {
        const range = getRepRange(ex);
        const prog = evaluateProgression(week, ex);
        const variantIdx = state.selectedVariants[ex.id] || 0;
        const name = cleanLabel(ex.variants ? ex.variants[variantIdx] : ex.name);
        const exDone = Array.from({length:ex.sets}, (_, i) => getSetData(week, ex.id, i+1).done).every(Boolean);
        const noteKey = `w${week}_${ex.id}`;
        html += `<article class="exercise-card ${exDone ? 'is-complete' : ''}" id="card-${ex.id}" aria-labelledby="title-${ex.id}">
          <div class="exercise-topline">
            <span class="exercise-index">${String(idx+1).padStart(2,'0')} / ${escapeHtml(ex.muscle)}${exDone ? ' · Готово' : ''}</span>
            <button type="button" class="rest-button" onclick="setTimerPreset(${ex.restSec},true)" aria-label="Начать отдых ${ex.restLabel}">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l3 2M9 2h6M12 2v3"/></svg>${ex.restLabel}
            </button>
          </div>
          <h3 id="title-${ex.id}">${escapeHtml(name)}</h3>
          <div class="exercise-meta"><span>${ex.sets} × ${range.min}–${range.max}</span><span>${ex.rir}</span></div>
          <p class="progression" data-type="${prog.type}" id="prog-${ex.id}">${escapeHtml(cleanLabel(prog.badge))}</p>
          <div class="set-list">
            <div class="set-head" aria-hidden="true"><span>Вес, кг</span><span>Повторы</span><span>Готово</span></div>`;
        for (let i=1; i<=ex.sets; i++) {
          const row = getSetData(week, ex.id, i);
          const previous = prevWeek > 0 ? getSetData(prevWeek, ex.id, i) : {weight:'',reps:''};
          const hasPrev = previous.weight !== '' || previous.reps !== '';
          const first = getSetData(week, ex.id, 1);
          const weightHint = previous.weight !== '' ? previous.weight : (first.weight !== '' ? first.weight : '—');
          const repsHint = previous.reps !== '' ? previous.reps : String(range.min);
          html += `<div class="set-row ${row.done ? 'set-done' : ''}" id="row-${ex.id}-${i}">
            <div class="set-caption"><span>Подход ${i}</span>${hasPrev ? `<button type="button" class="previous-set" onclick="copyPreviousSet(${week},'${ex.id}',${i})" aria-label="Скопировать прошлый подход ${i}: ${escapeHtml(previous.weight)} кг, ${escapeHtml(previous.reps)} повторений">Прошлый: ${escapeHtml(previous.weight || '0')} × ${escapeHtml(previous.reps || '0')} ↙</button>` : ''}</div>
            <div class="set-controls">
              <input id="inp-w-${ex.id}-${i}" aria-label="${escapeHtml(name)}, подход ${i}, вес в килограммах" type="text" inputmode="decimal" enterkeyhint="done" autocomplete="off" placeholder="${escapeHtml(weightHint)}" value="${escapeHtml(row.weight)}" oninput="onSetInput(${week},'${ex.id}',${i},'weight',this.value)" onkeydown="if(event.key==='Enter')this.blur()" />
              <div class="rep-stepper">
                <button type="button" aria-label="Уменьшить повторы, подход ${i}" onclick="stepRep(${week},'${ex.id}',${i},-1,${range.min})">−</button>
                <input id="inp-r-${ex.id}-${i}" aria-label="${escapeHtml(name)}, подход ${i}, повторения" type="text" inputmode="numeric" enterkeyhint="done" autocomplete="off" placeholder="${escapeHtml(repsHint)}" value="${escapeHtml(row.reps)}" oninput="onSetInput(${week},'${ex.id}',${i},'reps',this.value)" onkeydown="if(event.key==='Enter')this.blur()" />
                <button type="button" aria-label="Увеличить повторы, подход ${i}" onclick="stepRep(${week},'${ex.id}',${i},1,${range.min})">+</button>
              </div>
              <button type="button" class="done-button" aria-label="${row.done ? 'Отменить выполнение подхода' : 'Завершить подход'} ${i}" aria-pressed="${!!row.done}" onclick="toggleSetDone(${week},'${ex.id}',${i},${ex.restSec})">✓</button>
            </div>
          </div>`;
        }
        html += `</div>
          <details class="exercise-details" ${openTips[ex.id] ? 'open' : ''} ontoggle="rememberDetails('${ex.id}',this.open)">
            <summary>Техника${ex.variants ? ', варианты' : ''} и заметки${state.notes[noteKey] ? ' · Есть заметка' : ''}</summary>
            <div class="exercise-detail-content">
              <p>${escapeHtml(ex.note)}</p>
              ${ex.variants ? `<div><span class="field-label">Вариант упражнения</span><div class="variant-options">${ex.variants.map((v,i) => `<button type="button" aria-pressed="${i===variantIdx}" onclick="selectVariant('${ex.id}',${i})">${escapeHtml(cleanLabel(v))}</button>`).join('')}</div></div>` : ''}
              <div><label class="field-label" for="note-${ex.id}">Заметка к упражнению</label><textarea id="note-${ex.id}" rows="2" placeholder="Настройки тренажёра, ощущения…" oninput="onNoteInput('${noteKey}',this.value)">${escapeHtml(state.notes[noteKey] || '')}</textarea></div>
            </div>
          </details>
        </article>`;
      });
      document.getElementById('mainContainer').innerHTML = html + '</div>';
    }

    function onSetInput(week, exId, setIdx, field, rawValue) {
      const value = field === 'weight' ? cleanDecimal(rawValue) : rawValue.replace(/[^0-9]/g, '');
      setSetData(week, exId, setIdx, { [field]: value });

      // Авто-подстановка рабочего веса из 1-го подхода в пустые подходы 2..N
      if (field === 'weight' && setIdx === 1 && value !== '') {
        const day = PROGRAM[state.currentTab];
        const ex = day && day.exercises.find(e => e.id === exId);
        if (ex) {
          for (let s = 2; s <= ex.sets; s++) {
            const other = getSetData(week, exId, s);
            const inpEl = document.getElementById(`inp-w-${exId}-${s}`);
            if (inpEl && other.weight === '') {
              inpEl.placeholder = value;
            }
          }
        }
      }

      const day = PROGRAM[state.currentTab];
      if (day) {
        const ex = day.exercises.find(e => e.id === exId);
        if (ex) {
          const prog = evaluateProgression(week, ex);
          const progEl = document.getElementById(`prog-${ex.id}`);
          if (progEl) {
            progEl.className = 'progression';
            progEl.dataset.type = prog.type;
            progEl.textContent = cleanLabel(prog.badge);
          }
        }
      }
    }

    // Быстрое изменение повторов кнопками - / + без открытия клавиатуры
    function stepRep(week, exId, setIdx, delta, defaultMin) {
      const cur = getSetData(week, exId, setIdx);
      const prevWeek = (week > 1 && (week - 1) % 8 === 0 && week > 2) ? week - 2 : week - 1;
      const prev = prevWeek >= 1 ? getSetData(prevWeek, exId, setIdx) : { weight: '', reps: '' };
      const set1 = getSetData(week, exId, 1);

      let baseRep = cur.reps !== '' ? Number(cur.reps) : (prev.reps !== '' ? Number(prev.reps) : defaultMin);
      let nextRep = Math.max(0, baseRep + delta);

      let nextWeight = cur.weight;
      if (nextWeight === '') {
        if (set1.weight !== '') nextWeight = set1.weight;
        else if (prev.weight !== '') nextWeight = prev.weight;
      }

      setSetData(week, exId, setIdx, {
        weight: nextWeight,
        reps: String(nextRep)
      });
      render();
    }

    function onNoteInput(noteKey, value) {
      state.notes[noteKey] = value;
      saveState();
    }

    function copyFromPrev(week, exId, setIdx, prevWeight, prevReps) {
      if (!prevWeight && !prevReps) return;
      setSetData(week, exId, setIdx, {
        weight: prevWeight,
        reps: prevReps
      });
      render();
    }

    function toggleSetDone(week, exId, setIdx, restSec) {
      dismissKeyboard();
      unlockAudio();

      const cur = getSetData(week, exId, setIdx);
      const prevWeek = (week > 1 && (week - 1) % 8 === 0 && week > 2) ? week - 2 : week - 1;
      const prev = prevWeek >= 1 ? getSetData(prevWeek, exId, setIdx) : { weight: '', reps: '' };
      const set1 = getSetData(week, exId, 1);

      let nextWeight = cur.weight;
      let nextReps = cur.reps;

      if (nextWeight === '') {
        if (set1.weight !== '') nextWeight = set1.weight;
        else if (prev.weight !== '') nextWeight = prev.weight;
      }
      if (nextReps === '' && prev.reps !== '') {
        nextReps = prev.reps;
      }

      const nextDone = !cur.done;
      setSetData(week, exId, setIdx, {
        weight: nextWeight,
        reps: nextReps,
        done: nextDone
      });

      if (nextDone) {
        setTimerPreset(restSec, true);
      }
      render();
    }

    // ==========================================
    // 5. ВКЛАДКА: ВЕС ТЕЛА И ПИТАНИЕ
    // ==========================================
    function toggleDailyCheck(dateKey, field) {
      const cur = state.dailyChecklist[dateKey] || { kcal: false, protein: false, creatine: false, shake: false };
      cur[field] = !cur[field];
      state.dailyChecklist[dateKey] = cur;
      saveState();
      render();
    }

    function onBodyWeightInput(week, dayIdx, val) {
      state.bodyWeight[`w${week}_d${dayIdx}`] = cleanDecimal(val);
      saveState();
      if (typeof viewRefreshNutritionSummary === 'function') viewRefreshNutritionSummary(week);
    }

    // ==========================================
    // 6. ВКЛАДКА: СВОДКА ПО НЕДЕЛЯМ
    // ==========================================
    function render() {
      const focusedId = document.activeElement?.id;
      renderTabs();
      if (state.currentTab === 'nutrition') {
        renderNutrition();
      } else if (state.currentTab === 'stats') {
        renderStats();
      } else {
        renderWorkoutDay(state.currentTab);
      }
      updateHeaderWeight();
      if (focusedId) document.getElementById(focusedId)?.focus({preventScroll:true});
    }

    // ==========================================
    // 7. ТАЙМЕР ОТДЫХА СО ЗВУКОМ (АДАПТИРОВАН ПОД IOS)
    // ==========================================
    let timerTotal = 150;
    let timerRemaining = 150;
    let timerInterval = null;
    let timerEndTime = null;
    let sharedAudioCtx = null;

    function unlockAudio() {
      try {
        if (!sharedAudioCtx) {
          sharedAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (sharedAudioCtx.state === 'suspended') {
          sharedAudioCtx.resume();
        }
      } catch (e) {}
    }

    function formatTime(sec) {
      const m = Math.floor(sec / 60);
      const s = sec % 60;
      return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    }

    function updateTimerUI() {
      document.getElementById('timerDisplay').textContent = formatTime(timerRemaining);
      document.getElementById('timerProgressBar').style.width = `${timerTotal > 0 ? Math.max(0, Math.min(100, timerRemaining/timerTotal*100)) : 0}%`;
      document.getElementById('timerStatusLabel').textContent = timerInterval ? 'Идёт отдых' : timerRemaining === 0 ? 'Можно продолжать' : 'Отдых';
      document.getElementById('bottomTimerBar').classList.toggle('is-finished', timerRemaining === 0);
      const toggle = document.getElementById('timerToggleBtn');
      toggle.setAttribute('aria-label', timerInterval ? 'Приостановить таймер' : 'Запустить таймер');
      document.getElementById('timerPlayIcon').innerHTML = timerInterval ? '<path d="M7 5h4v14H7zm6 0h4v14h-4z"/>' : '<path d="M9 5l11 7-11 7z"/>';
      document.querySelectorAll('[data-seconds]').forEach(button => button.setAttribute('aria-pressed', Number(button.dataset.seconds) === timerTotal));
    }

    function toggleTimerOptions() {
      const panel = document.getElementById('timerOptions');
      panel.hidden = !panel.hidden;
      document.getElementById('timerOptionsButton').setAttribute('aria-expanded', !panel.hidden);
    }

    function chooseTimerPreset(seconds) {
      setTimerPreset(seconds);
      document.getElementById('timerOptions').hidden = true;
      document.getElementById('timerOptionsButton').setAttribute('aria-expanded','false');
    }

        function playBeep() {
      try {
        unlockAudio();
        const ctx = sharedAudioCtx || new (window.AudioContext || window.webkitAudioContext)();
        [0, 0.18, 0.36].forEach(delay => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.value = 880;
          gain.gain.setValueAtTime(0.3, ctx.currentTime + delay);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + 0.14);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(ctx.currentTime + delay);
          osc.stop(ctx.currentTime + delay + 0.14);
        });
      } catch (e) {}
    }

    function setTimerPreset(seconds, autoStart = true) {
      unlockAudio();
      timerTotal = seconds;
      timerRemaining = seconds;
      if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
      }
      if (autoStart) {
        startTimer();
      } else {
        updateTimerUI();
      }
    }

    function adjustTimer(delta) {
      unlockAudio();
      timerRemaining = Math.max(0, timerRemaining + delta);
      timerTotal = Math.max(timerTotal, timerRemaining);
      if (timerInterval && timerEndTime) {
        timerEndTime += delta * 1000;
      }
      updateTimerUI();
    }

    // Используем реальные метки времени (Date.now()), чтобы таймер на iPhone не отставал даже при блокировке экрана!
    function startTimer() {
      if (timerRemaining <= 0) timerRemaining = timerTotal;
      timerEndTime = Date.now() + timerRemaining * 1000;
      timerInterval = setInterval(() => {
        const left = Math.round((timerEndTime - Date.now()) / 1000);
        if (left <= 0) {
          timerRemaining = 0;
          clearInterval(timerInterval);
          timerInterval = null;
          timerEndTime = null;
          playBeep();
        } else {
          timerRemaining = left;
        }
        updateTimerUI();
      }, 500);
      updateTimerUI();
    }

    function toggleTimer() {
      unlockAudio();
      if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
        timerEndTime = null;
        updateTimerUI();
      } else {
        startTimer();
      }
    }

    // ==========================================
    // 8. ЭКСПОРТ CSV / JSON БЭКАП
    // ==========================================
    function openDataModal() {
      dismissKeyboard();
      document.getElementById('dataModal').showModal();
      document.body.classList.add('modal-open');
    }

    function closeDataModal() {
      document.getElementById('dataModal').close();
    }

    async function forceAppUpdate() {
      if (!await saveState()) {
        alert('Не удалось сохранить записи. Сохрани резервную копию перед обновлением.');
        return;
      }
      try {
        const registration = await navigator.serviceWorker?.getRegistration(new URL('./',location.href).href);
        if (registration) await registration.update();
        if (registration?.installing) {
          const worker = registration.installing;
          worker.addEventListener('statechange', () => { if(worker.state === 'activated') location.reload(); });
        } else location.reload();
      } catch(e) {
        alert('Не удалось проверить обновление. Проверь подключение к интернету.');
      }
    }

    function exportCSV() {
      const rows = [['Неделя', 'День', 'Упражнение', 'Подход', 'Вес (кг)', 'Повторы', 'Выполнено', 'Заметка']];
      for (let w = 1; w <= 16; w++) {
        Object.values(PROGRAM).forEach(day => {
          day.exercises.forEach(ex => {
            const note = state.notes[`w${w}_${ex.id}`] || '';
            for (let s = 1; s <= ex.sets; s++) {
              const d = getSetData(w, ex.id, s);
              if (d.weight !== '' || d.reps !== '' || note !== '') {
                rows.push([
                  w,
                  day.title,
                  ex.name,
                  s,
                  d.weight,
                  d.reps,
                  d.done ? 'Да' : 'Нет',
                  note
                ]);
              }
            }
          });
        });
      }
      const csvContent = '\uFEFF' + rows.map(r => r.map(c => `"${String(c).replace(/"/g, '""')}"`).join(';')).join('\n');
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `GYM738_Workouts_${new Date().toISOString().slice(0,10)}.csv`;
      a.click();
    }

    function exportJSON() {
      const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `GYM738_Backup_${new Date().toISOString().slice(0,10)}.json`;
      a.click();
    }

    function importJSON(event) {
      const file = event.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = async function(e) {
        const dialog = document.getElementById('dataModal');
        try {
          const imported = validateState(JSON.parse(e.target.result));
          dialog.inert = true;
          if (!await saveState(imported, true)) {
            alert('Не удалось сохранить копию на устройстве. Текущие записи не заменены.');
            return;
          }
          state = imported;
          lastWorkoutTab = Object.hasOwn(PROGRAM, state.currentTab) ? state.currentTab : 'upperA';
          initWeekSelect();
          render();
          closeDataModal();
        } catch (err) {
          alert('Файл не похож на резервную копию GYM738. Текущие записи не изменены.');
        } finally {
          dialog.inert = false;
          event.target.value = '';
        }
      };
      reader.onerror = () => {
        event.target.value = '';
        alert('Не удалось прочитать файл. Текущие записи не изменены.');
      };
      reader.readAsText(file);
    }

    async function resetAllData() {
      if (!confirm('Точно очистить все записанные веса и повторы?')) return;
      const dialog = document.getElementById('dataModal');
      dialog.inert = true;
      ++saveGeneration;
      try {
        let localDeleted = false;
        try { localStorage.removeItem(STORAGE_KEY); localDeleted = true; } catch (error) {}
        // A pending save must finish before deletion, so it cannot restore old records afterwards.
        const removal = idbSaveQueue.then(() => openIDB()).then(db => new Promise((resolve, reject) => {
          try {
            const tx = db.transaction(IDB_STORE, 'readwrite');
            tx.oncomplete = () => { db.close(); resolve(); };
            tx.onabort = tx.onerror = () => { db.close(); reject(tx.error || new Error('Delete failed')); };
            tx.objectStore(IDB_STORE).delete(STORAGE_KEY);
          } catch (error) { db.close(); reject(error); }
        }));
        idbSaveQueue = removal.catch(() => {});
        let backupDeleted = false;
        try { await removal; backupDeleted = true; } catch (error) {}
        if (!localDeleted || !backupDeleted) {
          storageRecoveryBlocked = true;
          setSaveStatus('Не все записи удалены', true);
          alert('Не удалось полностью удалить записи с устройства. Перезагрузи страницу и повтори удаление.');
          return;
        }
        storageRecoveryBlocked = false;
        localStateStatus = 'missing';
        state = getDefaultState();
        lastWorkoutTab = 'upperA';
        initWeekSelect();
        render();
        closeDataModal();
        setSaveStatus('Записи удалены');
      } finally {
        dialog.inert = false;
      }
    }

    const dataDialog = document.getElementById('dataModal');
    dataDialog.addEventListener('close', () => document.body.classList.remove('modal-open'));
    const measureChrome = () => {
      document.documentElement.style.setProperty('--dock-height', document.getElementById('bottomTimerBar').offsetHeight + 'px');
      document.documentElement.style.setProperty('--header-height', document.getElementById('appHeader').offsetHeight + 'px');
    };
    if (window.ResizeObserver) {
      const observer = new ResizeObserver(measureChrome);
      observer.observe(document.getElementById('bottomTimerBar'));
      observer.observe(document.getElementById('appHeader'));
    }
    window.addEventListener('resize', measureChrome);
    measureChrome();

    // Boot
    async function boot() {
      document.body.inert = true;
      document.body.setAttribute('aria-busy', 'true');
      try {
        await restoreFromIDBIfNeeded();
        initWeekSelect();
        render();
        updateTimerUI();
      } finally {
        document.body.inert = false;
        document.body.removeAttribute('aria-busy');
      }
    }
    const bootPromise = boot();

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('sw.js').then(reg => {
        reg.update().catch(() => {});
      }).catch(() => {});
    }
