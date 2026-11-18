(() => {
  'use strict';

  const byId = id => document.getElementById(id);
  const dialog = byId('rhythmSetDialog');
  const form = byId('rhythmSetForm');
  const weight = byId('rhythmWeight');
  const reps = byId('rhythmReps');
  const effort = byId('rhythmEffort');
  const variant = byId('rhythmVariant');
  const previous = byId('rhythmPrevious');
  const error = byId('rhythmSetError');
  let entry;

  function updatePlan() {
    const ex = entry.exercise;
    const selected = Number(variant.value) || 0;
    const range = getRepRange(ex, selected);
    byId('rhythmSetTitle').textContent = rhythmExerciseLabel(ex, selected);
    byId('rhythmSetPlan').textContent = range.min + '–' + range.max + ' повторов · ' + ex.rir + ' · отдых ' + formatTime(ex.restSec);
    reps.placeholder = range.min + '–' + range.max;
    // The original program supplies an exercise-level note for its primary variant.
    const technique = byId('rhythmTechnique');
    const tip = technique.querySelector('p');
    tip.hidden = !ex.note || selected !== 0;
    tip.textContent = ex.note || '';
  }

  window.openRhythmSet = (dayKey, exerciseIndex, setNumber) => {
    const exercise = PROGRAM[dayKey].exercises[exerciseIndex];
    const week = Number(state.currentWeek);
    const record = getSetData(week, exercise.id, setNumber);
    const pastWeek = week > 2 && (week - 1) % 8 === 0 ? week - 2 : week - 1;
    const past = pastWeek > 0 ? getSetData(pastWeek, exercise.id, setNumber) : null;
    const active = document.activeElement;
    const returnSelector = active?.matches('[data-main]') ? '[data-main]' : '[data-log="' + exerciseIndex + ':' + setNumber + '"]';
    const noteKey = 'w' + week + '_' + exercise.id;
    entry = { week, exercise, setNumber, past, returnSelector, noteKey };
    form.reset();
    error.hidden = true;
    byId('rhythmTechnique').open = false;
    byId('rhythmSetStep').textContent = 'Неделя ' + week + ' · Подход ' + setNumber + ' из ' + exercise.sets;
    variant.replaceChildren(...(exercise.variants || []).map((name, index) => new Option(name.replace('✅', '').trim(), String(index))));
    variant.value = String(state.selectedVariants[exercise.id] || 0);
    byId('rhythmVariantField').hidden = !exercise.variants;
    byId('rhythmNote').value = state.notes[noteKey] || '';
    const priorSet = setNumber > 1 ? getSetData(week, exercise.id, setNumber - 1) : null;
    const untouched = !record.done && record.weight === '' && record.reps === '';
    weight.value = untouched && priorSet?.done ? priorSet.weight : record.weight ?? '';
    reps.value = record.reps ?? '';
    effort.value = record.effort == null ? '' : String(record.effort);
    const previousLabel = past && [
      past.weight !== '' && past.weight != null ? String(past.weight).replace('.', ',') + ' кг' : '',
      past.reps !== '' && past.reps != null ? past.reps + ' повт.' : ''
    ].filter(Boolean).join(' × ');
    previous.hidden = !previousLabel;
    previous.textContent = previousLabel ? 'Взять с недели ' + pastWeek + ' · ' + previousLabel : '';
    byId('rhythmUndo').hidden = !record.done;
    byId('rhythmSubmit').textContent = record.done ? 'Сохранить изменения' : 'Записать подход';
    updatePlan();
    dialog.showModal();
    byId('rhythmSetTitle').focus({ preventScroll: true });
    dialog.scrollTop = 0;
  };

  variant.addEventListener('change', updatePlan);
  previous.addEventListener('click', () => {
    const past = entry.past;
    weight.value = past.weight ?? '';
    reps.value = past.reps ?? '';
  });
  byId('rhythmClose').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => document.querySelector(entry.returnSelector)?.focus({ preventScroll: true }));
  weight.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      reps.focus();
    }
  });

  function invalid(input, message) {
    error.hidden = false;
    error.textContent = message;
    input.focus();
  }

  dialog.addEventListener('cancel', event => {
    if (form.inert) event.preventDefault();
  });

  async function commit(patch, includeFormFields) {
    if (form.inert) return;
    const { exercise, week, setNumber, noteKey } = entry;
    const candidate = { ...state, workouts: { ...state.workouts } };
    const wasDone = getSetData(week, exercise.id, setNumber).done;
    if (includeFormFields) {
      const note = byId('rhythmNote').value;
      if (note !== (state.notes[noteKey] || '')) candidate.notes = { ...state.notes, [noteKey]: note };
      if (exercise.variants && Number(variant.value) !== Number(state.selectedVariants[exercise.id] || 0)) {
        candidate.selectedVariants = { ...state.selectedVariants, [exercise.id]: Number(variant.value) };
      }
    }
    if (patch.done && !wasDone) unlockAudio();
    form.inert = true;
    try {
      if (!await setSetData(week, exercise.id, setNumber, patch, candidate)) {
        error.hidden = false;
        error.textContent = storageRecoveryBlocked ? 'Сначала восстанови дневник в меню «Твои данные».' : 'Не удалось сохранить подход на устройстве. Попробуй ещё раз.';
        return;
      }
      state = candidate;
      if (patch.done && !wasDone) setTimerPreset(exercise.restSec);
      dialog.close();
      render();
    } finally {
      form.inert = false;
    }
  }

  form.addEventListener('submit', event => {
    event.preventDefault();
    const rawWeight = weight.value.trim().replace(',', '.');
    if (rawWeight && (!/^(?:\d+(?:\.\d*)?|\.\d+)$/.test(rawWeight) || !Number.isFinite(Number(rawWeight)))) {
      return invalid(weight, 'Введи вес в килограммах, например 42,5.');
    }
    const rawReps = reps.value.trim();
    const { exercise, week, setNumber } = entry;
    const record = getSetData(week, exercise.id, setNumber);
    const retainedLegacyReps = record.done && rawReps === String(record.reps ?? '');
    if (!retainedLegacyReps && (!/^\d+$/.test(rawReps) || !Number.isSafeInteger(Number(rawReps)) || Number(rawReps) < 1)) {
      return invalid(reps, 'Введи количество повторов целым числом от 1.');
    }
    const patch = { done: true };
    if (String(record.weight ?? '') !== weight.value) patch.weight = rawWeight;
    if (String(record.reps ?? '') !== reps.value) patch.reps = String(Number(rawReps));
    if (effort.selectedIndex >= 0 && effort.value !== String(record.effort ?? '')) patch.effort = effort.value;
    commit(patch, true);
  });

  byId('rhythmUndo').addEventListener('click', () => commit({ done: false }, false));
})();
