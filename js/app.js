/* L'App français V2 — State-Management & Routing */
var App = (function() {

  var STATE_KEY = 'lapp_v2_state';

  // Unit-Status: 'open' | 'active' | 'done'
  // units[id].sr = { exKey: { ease, interval, repetitions, nextReview } }
  var state = {
    units: {},        // { unitId: { status, score, lastPractice, sr: {...} } }
    streak: 0,
    lastActive: null
  };

  // ─── STATE ────────────────────────────────────────────────────────────────

  function loadState() {
    try {
      var saved = localStorage.getItem(STATE_KEY);
      if (saved) {
        var parsed = JSON.parse(saved);
        state.units        = parsed.units        || {};
        state.streak       = parsed.streak       || 0;
        state.lastActive   = parsed.lastActive   || null;
      }
    } catch(e) {
      console.warn('State konnte nicht geladen werden:', e);
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STATE_KEY, JSON.stringify(state));
    } catch(e) {
      console.warn('State konnte nicht gespeichert werden:', e);
    }
  }

  function getUnitStatus(unitId) {
    return (state.units[unitId] && state.units[unitId].status) || 'open';
  }

  function setUnitStatus(unitId, status, score) {
    if (!state.units[unitId]) state.units[unitId] = {};
    state.units[unitId].status = status;
    if (score !== undefined) state.units[unitId].score = score;
    state.units[unitId].lastPractice = Date.now();
    saveState();
    // Grid neu rendern damit Ampel aktualisiert wird
    if (currentView === 'path') Path.render(document.getElementById('mainContent'));
  }

  // ─── SPACED REPETITION ────────────────────────────────────────────────────

  // Eindeutiger Schlüssel für eine Übung (basiert auf Inhalt, nicht Index)
  function exKey(ex) {
    return (ex.de || '') + '|' + (ex.fr || ex.antwort || ex.frage || '');
  }

  function getExSR(unitId, key) {
    var u = state.units[unitId];
    if (!u || !u.sr) return null;
    return u.sr[key] || null;
  }

  // SM-2 Algorithmus: quality 4 = richtig, 1 = falsch
  function updateExSR(unitId, key, quality) {
    if (!state.units[unitId]) state.units[unitId] = {};
    if (!state.units[unitId].sr) state.units[unitId].sr = {};

    var sr = state.units[unitId].sr[key] ||
             { ease: 2.5, interval: 0, repetitions: 0, nextReview: 0 };

    if (quality < 3) {
      sr.repetitions = 0;
      sr.interval    = 1;
    } else {
      sr.repetitions++;
      if      (sr.repetitions === 1) sr.interval = 1;
      else if (sr.repetitions === 2) sr.interval = 6;
      else                           sr.interval = Math.round(sr.interval * sr.ease);
    }

    sr.ease = sr.ease + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
    if (sr.ease < 1.3) sr.ease = 1.3;

    var reviewDate = new Date();
    reviewDate.setDate(reviewDate.getDate() + sr.interval);
    sr.nextReview = reviewDate.getTime();

    state.units[unitId].sr[key] = sr;
    saveState();
  }

  // Zählt fällige SR-Wiederholungen für eine Unit
  function getUnitDueCount(unitId) {
    var u = state.units[unitId];
    if (!u || !u.sr) return 0;
    var now   = Date.now();
    var count = 0;
    var keys  = Object.keys(u.sr);
    for (var i = 0; i < keys.length; i++) {
      var sr = u.sr[keys[i]];
      if (sr && sr.nextReview && sr.nextReview <= now) count++;
    }
    return count;
  }

  // ─── ROUTING ──────────────────────────────────────────────────────────────

  var currentView = 'path';
  var currentUnitId = null;

  function showView(view, unitId) {
    currentView   = view;
    currentUnitId = unitId || null;

    var main    = document.getElementById('mainContent');
    var btnBack = document.getElementById('btnBack');
    var title   = document.getElementById('headerTitle');

    if (view === 'path') {
      btnBack.classList.remove('visible');
      title.textContent = "L'App français";
      Path.render(main);

    } else if (view === 'unit' && unitId) {
      var unit = Grammar.getUnit(unitId);
      btnBack.classList.add('visible');
      title.textContent = unit ? unit.titel : '—';
      Unit.render(main, unitId);

    } else if (view === 'diagnostic') {
      btnBack.classList.add('visible');
      title.textContent = 'Einstufungstest';
      // Diagnostic rendert sich selbst via Diagnostic.start()
    }
  }

  function goBack() {
    showView('path');
  }

  // ─── INIT ─────────────────────────────────────────────────────────────────

  function init() {
    loadState();
    showView('path');
  }

  document.addEventListener('DOMContentLoaded', init);

  // ─── PUBLIC API ───────────────────────────────────────────────────────────

  return {
    getUnitStatus  : getUnitStatus,
    setUnitStatus  : setUnitStatus,
    showView       : showView,
    goBack         : goBack,
    getState       : function() { return state; },
    exKey          : exKey,
    getExSR        : getExSR,
    updateExSR     : updateExSR,
    getUnitDueCount: getUnitDueCount,
    saveState      : saveState
  };

})();
