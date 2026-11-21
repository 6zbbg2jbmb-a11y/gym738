/* Nutrition and progress views. Data and persistence stay in app.js. */
function viewNutritionSummary(week) {
  const current = [];
  const previous = [];
  for (let day = 1; day <= 7; day++) {
    const value = Number(cleanDecimal(state.bodyWeight[`w${week}_d${day}`]));
    if (value > 0) current.push(value);
    if (week > 1) {
      const oldValue = Number(cleanDecimal(state.bodyWeight[`w${week - 1}_d${day}`]));
      if (oldValue > 0) previous.push(oldValue);
    }
  }
  const mean = values => values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : null;
  const average = mean(current);
  const previousAverage = mean(previous);
  const difference = average !== null && previousAverage !== null ? average - previousAverage : null;
  let message = 'Вноси утренний вес натощак';
  let tone = 'neutral';
  if (difference !== null) {
    const value = `${difference >= 0 ? '+' : ''}${difference.toFixed(2)} кг`;
    if (difference >= 0.2 && difference <= 0.45) {
      message = `${value} за неделю (Идеальный Lean Bulk)`;
      tone = 'positive';
    } else if (difference < 0.2) {
      message = `${value} (Мало! Добавь +250 ккал углеводами)`;
      tone = 'attention';
    } else {
      message = `${value} (Слишком быстро, чуть урежь профицит)`;
      tone = 'attention';
    }
  }
  return { average, message, tone, count: current.length };
}

function viewRefreshNutritionSummary(week) {
  const summary = viewNutritionSummary(week);
  const average = document.getElementById('view-weight-average');
  const count = document.getElementById('view-weight-count');
  const trend = document.getElementById('view-weight-trend');
  if (average) average.textContent = summary.average === null ? '—' : summary.average.toFixed(2);
  if (count) count.textContent = `Заполнено ${summary.count} из 7 дней`;
  if (trend) {
    trend.textContent = summary.message;
    trend.className = `view-trend view-trend--${summary.tone}`;
  }
  if (typeof updateHeaderWeight === 'function') updateHeaderWeight();
}

function renderNutrition() {
  const week = Number(state.currentWeek);
  const summary = viewNutritionSummary(week);
  const todayKey = new Date().toISOString().slice(0, 10);
  const todayChecks = state.dailyChecklist[todayKey] || {};
  const dateLabel = new Date(`${todayKey}T12:00:00`).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' });
  const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
  const checklist = [
    { key: 'kcal', title: '2950 ккал', detail: 'Профицит +350 ккал' },
    { key: 'protein', title: '135 г белка', detail: '' },
    { key: 'creatine', title: 'Креатин 5 г', detail: 'Моногидрат ежедневно' },
    { key: 'shake', title: 'Шейк 750 ккал', detail: 'Молоко + банан + овсянка' }
  ];

  document.getElementById('mainContainer').innerHTML = `
    <div class="view-page view-nutrition">
      <header class="view-page-heading">
        <p class="view-eyebrow">${escapeHtml(dateLabel)}</p>
        <h2 class="view-title">Питание</h2>
      </header>

      <section class="view-surface" aria-labelledby="view-checklist-title">
        <h3 class="view-section-title" id="view-checklist-title">На сегодня</h3>
        <div class="view-checklist">
          ${checklist.map(item => `
            <button type="button" class="view-check" aria-pressed="${Boolean(todayChecks[item.key])}"
              onclick="toggleDailyCheck('${todayKey}', '${item.key}')">
              <span class="view-check-copy">
                <span class="view-check-title">${escapeHtml(item.title)}</span>
                ${item.detail ? `<span class="view-check-detail">${escapeHtml(item.detail)}</span>` : ''}
              </span>
              <span class="view-check-mark" aria-hidden="true">
                <svg viewBox="0 0 20 20" fill="none"><path d="m5 10 3 3 7-7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </span>
            </button>
          `).join('')}
        </div>
        <div class="view-targets">
          <p class="view-caption">Суточные ориентиры</p>
          <dl class="view-macros">
            <div><dt>Белки</dt><dd>120–145 г</dd></div>
            <div><dt>Жиры</dt><dd>75–85 г</dd></div>
            <div><dt>Углеводы</dt><dd>400–430 г</dd></div>
          </dl>
        </div>
      </section>

      <section class="view-surface" aria-labelledby="view-weight-title">
        <div class="view-section-heading">
          <h3 class="view-section-title" id="view-weight-title">Утренний вес</h3>
          <span class="view-caption">Неделя ${week}</span>
        </div>
        <div class="view-weight-summary">
          <p class="view-caption">Средний за неделю</p>
          <p class="view-weight-metric"><span id="view-weight-average">${summary.average === null ? '—' : summary.average.toFixed(2)}</span><span class="view-weight-unit">кг</span></p>
          <p class="view-caption" id="view-weight-count">Заполнено ${summary.count} из 7 дней</p>
          <p class="view-trend view-trend--${summary.tone}" id="view-weight-trend" aria-live="polite">${escapeHtml(summary.message)}</p>
        </div>
        <div class="view-weight-list">
          ${days.map((name, index) => {
            const day = index + 1;
            const value = state.bodyWeight[`w${week}_d${day}`] || '';
            return `
              <label class="view-weight-row" for="view-weight-${day}">
                <span>${name}</span>
                <span class="view-weight-field">
                  <input id="view-weight-${day}" type="text" inputmode="decimal" enterkeyhint="done"
                    placeholder="73.0" value="${escapeHtml(value)}" autocomplete="off"
                    aria-label="Утренний вес, ${name}, неделя ${week}, в килограммах"
                    oninput="onBodyWeightInput(${week}, ${day}, this.value); viewRefreshNutritionSummary(${week})"
                    onkeydown="if(event.key==='Enter') this.blur()" />
                  <span aria-hidden="true">кг</span>
                </span>
              </label>
            `;
          }).join('')}
        </div>
      </section>
    </div>
  `;
}

function renderStats(blockStart) {
  const currentWeek = Number(state.currentWeek);
  const start = blockStart === 1 || blockStart === 9 ? blockStart : (currentWeek > 8 ? 9 : 1);
  const weeks = Array.from({ length: 8 }, (_, index) => start + index);

  document.getElementById('mainContainer').innerHTML = `
    <div class="view-page view-stats">
      <header class="view-page-heading">
        <p class="view-eyebrow">Прогресс</p>
        <h2 class="view-title">Рабочие веса</h2>
        <p class="view-description">Лучший подход: вес × повторы</p>
        <div class="view-period" role="group" aria-label="Период статистики">
          <button type="button" aria-pressed="${start === 1}" onclick="renderStats(1)">Недели 1–8</button>
          <button type="button" aria-pressed="${start === 9}" onclick="renderStats(9)">Недели 9–16</button>
        </div>
      </header>
      ${Object.values(PROGRAM).map((day, dayIndex) => `
        <section class="view-stat-group" aria-labelledby="view-day-${dayIndex}">
          <h3 class="view-group-title" id="view-day-${dayIndex}">${escapeHtml(day.title)}</h3>
          ${day.exercises.map(ex => `
            <article class="view-surface view-stat-card">
              <h4 class="view-exercise-name">${escapeHtml(ex.variants ? cleanLabel(ex.variants[state.selectedVariants[ex.id] || 0]) : ex.name)}</h4>
              <dl class="view-week-grid">
                ${weeks.map(week => {
                  let bestSet = null;
                  let bestScore = -1;
                  for (let set = 1; set <= ex.sets; set++) {
                    const data = getSetData(week, ex.id, set);
                    if (data.weight !== '' || data.reps !== '') {
                      const score = (Number(cleanDecimal(data.weight)) || 1) * (Number(data.reps) || 0);
                      if (score > bestScore) {
                        bestScore = score;
                        bestSet = data;
                      }
                    }
                  }
                  const weight = bestSet ? escapeHtml(bestSet.weight || '0') : '';
                  const reps = bestSet ? escapeHtml(bestSet.reps || '0') : '';
                  return `
                    <div class="view-week-cell${week === currentWeek ? ' view-week-cell--current' : ''}${bestSet ? '' : ' view-week-cell--empty'}">
                      <dt><span aria-label="Неделя ${week}">Н${week}</span>${week === currentWeek ? '<span class="view-current-dot" aria-label="Выбранная неделя"></span>' : ''}</dt>
                      <dd>${bestSet ? `<span class="view-week-weight">${weight}</span><span class="view-week-reps">× ${reps}</span>` : '<span class="view-week-weight">—</span>'}</dd>
                    </div>
                  `;
                }).join('')}
              </dl>
            </article>
          `).join('')}
        </section>
      `).join('')}
    </div>
  `;
}
