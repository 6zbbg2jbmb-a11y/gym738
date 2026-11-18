(() => {
  'use strict';

  const selections = new Map();
  const weekdays = { upperA: 'Понедельник', lowerA: 'Вторник', upperB: 'Четверг', lowerB: 'Пятница' };
  const paths = {
    'arrow-left': 'M20 12H5m6-6-6 6 6 6',
    'arrow-right': 'M4 12h15m-6-6 6 6-6 6',
    check: 'm4 12 5 5L20 6',
    history: 'M3 11a9 9 0 1 1 2 7M2 5v6h6m4-4v6l4 2',
    plus: 'M12 5v14M5 12h14'
  };

  function icon(name, size) {
    return `<svg aria-hidden="true" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="${paths[name]}"/></svg>`;
  }

  function html(value) {
    return String(value ?? '').replace(/[&<>"']/g, char => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    })[char]);
  }

  // A few old option labels only name the grip or machine. Give those controls
  // a standalone name when the parent exercise card is not on screen.
  const standaloneLabels = {
    ua_lat_pulldown: ['Тяга верхнего блока средним хватом', 'Тяга верхнего блока широким хватом'],
    ua_incline_curl: ['Сгибания рук на наклонной скамье', 'Сгибания рук на нижнем блоке'],
    ua_overhead_ext: ['Разгибания рук с канатом из-за головы', 'Разгибания рук с гантелью из-за головы'],
    ub_cable_lateral: ['Махи в сторону на блоке', 'Махи гантелями в стороны сидя']
  };

  window.rhythmExerciseLabel = (exercise, variantIndex = state.selectedVariants?.[exercise.id] || 0) => {
    const index = exercise.variants?.[variantIndex] ? variantIndex : 0;
    const name = standaloneLabels[exercise.id]?.[index] || exercise.variants?.[index] || exercise.name;
    return name.replace(/\s*✅/g, '').replace(/\s*\([^()]*\)\s*$/, '').trim()
      .replace(/^Глубокий Гакк-присед$/, 'Гакк-присед').replace(/СИДЯ/g, 'сидя');
  };

  const number = value => String(value).padStart(2, '0');

  function recordText(record) {
    if (!record) return '';
    const weight = String(record.weight ?? '').trim();
    const reps = String(record.reps ?? '').trim();
    const kilograms = weight ? weight.replace('.', ',') + ' кг' : '';
    if (kilograms && reps) return kilograms + ' × ' + reps;
    return kilograms || (reps ? reps + ' повт.' : '');
  }

  function stations(exercises, counts, index, nextIndex) {
    return exercises.map((exercise, i) => {
      const selected = i === index;
      const finished = counts[i] === exercise.sets;
      const next = i === nextIndex;
      const range = getRepRange(exercise);
      const status = finished ? 'Готово' : counts[i] ? counts[i] + ' из ' + exercise.sets : exercise.sets + ' × ' + range.min + '–' + range.max;
      const label = window.rhythmExerciseLabel(exercise);
      return `<li class="ry-stop${selected ? ' is-current' : ''}${finished ? ' is-done' : ''}${next ? ' is-next' : ''}">
        <button type="button" class="ry-station" data-station="${i}" ${selected ? 'aria-current="step"' : ''} aria-label="${html(label)}, ${html(status)}${next ? ', следующее' : ''}">
          <span class="ry-station-mark" aria-hidden="true">${finished ? icon('check', 15) : number(i + 1)}</span>
          <span class="ry-station-name">${html(label)}<small>${html(exercise.muscle)}</small></span>
          <span class="ry-stop-state">${next ? 'Далее' : html(status)}</span>
        </button>
      </li>`;
    }).join('');
  }

  function setButtons(exercise, index, rows, previousWeek, nextSet) {
    return rows.map((record,i) => {
      const n = i + 1;
      const finished = Boolean(record.done);
      const result = recordText(record);
      const previous = previousWeek > 0 ? recordText(getSetData(previousWeek,exercise.id,n)) : '';
      return `<button type="button" data-log="${index}:${n}" class="ry-beat${finished ? ' is-logged' : ''}${n === nextSet ? ' is-pending' : ''}"
        aria-label="${finished || result ? 'Изменить' : 'Записать'} подход ${n}${result ? ', ' + html(result) : ''}" ${previous ? 'title="Неделя '+previousWeek+' · '+html(previous)+'"' : ''}>
        <span class="ry-beat-top"><b>${number(n)}</b>${finished ? icon('check', 13) : ''}</span>
        <span class="ry-beat-result">${result ? '<span>' + html(result) + '</span>' : icon(finished ? 'check' : 'plus',18)}</span>
      </button>`;
    }).join('');
  }

  window.renderWorkoutRhythm = dayKey => {
    const view = document.getElementById('rhythmRoot');
    const day = PROGRAM[dayKey];
    if (!view || !day?.exercises?.length) return;
    const week = Number(state.currentWeek);
    const previousWeek = week > 2 && (week - 1) % 8 === 0 ? week - 2 : week - 1;
    const key = week + '/' + dayKey;
    const exercises = day.exercises;
    const records = exercises.map(ex => Array.from({length:ex.sets},(_,i) => getSetData(week,ex.id,i + 1)));
    const counts = records.map(rows => rows.filter(record => record.done).length);
    const total = records.reduce((sum, rows) => sum + rows.length,0);
    const completed = counts.reduce((sum, count) => sum + count,0);
    const firstOpen = exercises.findIndex((ex,i) => counts[i] < ex.sets);
    const index = selections.get(key) ?? Math.max(0, firstOpen);
    const exercise = exercises[index];
    const nextSet = records[index].findIndex(record => !record.done) + 1;
    const nextPending = exercises.findIndex((ex,i) => i > index && counts[i] < ex.sets);
    const nextIndex = nextPending >= 0 ? nextPending : exercises.findIndex((ex,i) => i < index && counts[i] < ex.sets);
    const after = index + 1 < exercises.length ? index + 1 : nextIndex;
    const range = getRepRange(exercise);
    const previous = nextSet && previousWeek > 0 ? recordText(getSetData(previousWeek,exercise.id,nextSet)) : '';
    const status = nextSet ? 'Подход ' + nextSet + ' из ' + exercise.sets : 'Все подходы записаны';
    const primary = nextSet ? 'Записать подход ' + nextSet : nextIndex >= 0 ? 'Следующее упражнение' : 'Посмотреть статистику';
    const dayHeading = day.title.match(/^[^•]+•\s*([^()]+)\((.+)\)$/);
    const dayName = dayHeading ? dayHeading[1].trim() : day.title;
    const theme = dayHeading ? dayHeading[2] : day.title;
    const progress = evaluateProgression(week,exercise);
    const hint = progress.type === 'start' ? '' : progress.badge.replace(/^[^\p{L}\d]+/u,'');
    const deck = exercises.map((ex,i) => `<span style="flex:${ex.sets}"><i style="width:${counts[i] * 100 / ex.sets}%"></i></span>`).join('');
    view.innerHTML = `<div class="ry-view">
      <header class="ry-heading">
        <div><p class="ry-date">${html(weekdays[dayKey])} <span>·</span> ${html(dayName)}</p><h1>${html(theme)}</h1></div>
        <div class="ry-session-progress">
          <div><span>Подходы за занятие</span><strong>${completed} <i>/</i> ${total}</strong></div>
          <div class="ry-deck" role="progressbar" aria-label="Записанные подходы" aria-valuemin="0" aria-valuemax="${total}" aria-valuenow="${completed}">${deck}</div>
        </div>
      </header>
      <div class="ry-workspace">
        <nav class="ry-route" aria-label="Перейти к упражнению">
          <h2>Упражнения</h2>
          <ol style="--ry-count:${exercises.length}">${stations(exercises,counts,index,nextIndex)}</ol>
        </nav>
        <article class="ry-now" aria-labelledby="ry-ex-title">
          <div class="ry-now-content">
            <div class="ry-current-heading"><span class="ry-active-label"><i></i>${html(exercise.muscle)}</span><span>${html(status)}</span></div>
            <h2 id="ry-ex-title" tabindex="-1">${html(window.rhythmExerciseLabel(exercise))}</h2>
            <dl class="ry-prescription">
              <div><dt>Повторы</dt><dd>${range.min}–${range.max}</dd></div>
              <div><dt>Запас, повт.</dt><dd>${html(exercise.rir.replace(/^RIR\s*/i,''))}</dd></div>
              <div><dt>Отдых</dt><dd>${html(formatTime(exercise.restSec).replace(/^0(?=\d:)/,''))}</dd></div>
            </dl>
            <div class="ry-set-list" role="group" aria-label="Подходы упражнения" style="--ry-count:${exercise.sets}">${setButtons(exercise,index,records[index],previousWeek,nextSet)}</div>
            ${previous ? `<p class="ry-last">${icon('history',14)} Неделя ${previousWeek}, подход ${nextSet} <b>${html(previous)}</b></p>` : ''}
            <button type="button" class="ry-log" data-main="${index}">${primary} ${icon(nextSet ? 'plus' : 'arrow-right',20)}</button>
            ${hint ? `<details class="ry-progression"><summary>Подсказка по нагрузке</summary><p>${html(hint)}</p></details>` : ''}
          </div>
          <div class="ry-controls">
            <button type="button" class="ry-prev" aria-label="Предыдущее упражнение" data-move="${index-1}" ${index === 0 ? 'disabled' : ''}>${icon('arrow-left',19)}</button>
            ${after >= 0 ? `<button type="button" class="ry-next" data-move="${after}"><span><small>Далее</small>${html(window.rhythmExerciseLabel(exercises[after]))}</span>${icon('arrow-right',18)}</button>` : '<span class="ry-end">Конец списка</span>'}
          </div>
        </article>
      </div>
    </div>`;
    // Keep navigation outside persisted training data, including when opening a
    // draft or the last set of a completed exercise and returning from its sheet.
    selections.set(key,index);
    const jump = target => {
      if (target < 0 || target >= exercises.length) return;
      selections.set(key,target);
      window.renderWorkoutRhythm(dayKey);
    };
    view.querySelector('[data-main]').addEventListener('click', () => {
      if (nextSet) return window.openRhythmSet(dayKey,index,nextSet);
      if (nextIndex < 0) return selectTab('stats');
      jump(nextIndex);
      view.querySelector('.ry-log')?.focus({preventScroll:true});
    });
    view.querySelectorAll('[data-log]').forEach(button => button.addEventListener('click', () => {
      const [exerciseIndex,n] = button.dataset.log.split(':').map(Number);
      window.openRhythmSet(dayKey,exerciseIndex,n);
    }));
    view.querySelectorAll('[data-station],[data-move]').forEach(button => button.addEventListener('click', () => {
      const target = Number(button.dataset.station ?? button.dataset.move);
      const keyboard = button.matches(':focus-visible');
      jump(target);
      if (keyboard) view.querySelector(`[data-station="${target}"]`)?.focus({preventScroll:true});
    }));
  };
})();
