/* L'App français V2 — Einstufungstest (Diagnostic)
 *
 * Testet die Prioritäts-Units (aus path.js) mit je 2 Tippen-Fragen.
 * Ergebnis:
 *   ≥1 richtig  → Unit-Status 'done'  (grün)
 *   0 richtig   → Unit-Status 'active' (gelb → zum Üben)
 *   keine Tippen-Fragen → Status bleibt 'open'
 *
 * Der Button erscheint nur wenn noch kein einziger Unit-Status gesetzt ist.
 * Nach dem Test verschwindet er dauerhaft.
 */
var Diagnostic = (function() {

  // Prioritäts-Reihenfolge (identisch mit path.js PRIORITY_IDS)
  var PRIORITY_IDS = [
    'artikel', 'fragesaetze', 'etre', 'avoir', 'verneinung',
    'er-verben', 'adjektive', 'passe-compose', 'futur-proche',
    'teilungsartikel', 'possessiv', 'irreg-verben', 'imperativ',
    'imparfait', 'conditionnel'
  ];

  var questions    = [];   // [{unitId, ex}, ...]
  var unitResults  = {};   // {unitId: {correct: 0, total: N}}
  var current      = 0;
  var locked       = false;
  var _frText      = '';

  // ─── ÖFFENTLICH: Darf der Test gestartet werden? ───────────────────────────

  function canRun() {
    var units = App.getState().units;
    var ids   = Object.keys(units);
    for (var i = 0; i < ids.length; i++) {
      if (units[ids[i]] && units[ids[i]].status) return false;
    }
    return true;
  }

  // ─── START ────────────────────────────────────────────────────────────────

  function start() {
    questions   = [];
    unitResults = {};
    current     = 0;
    locked      = false;

    // Fragen zusammenstellen: 2 Tippen-Fragen pro verfügbarer Priority-Unit
    PRIORITY_IDS.forEach(function(id) {
      var unit = Grammar.getUnit(id);
      if (!unit) return;   // Unit noch nicht implementiert → überspringen

      var tippenEx = [];
      unit.uebungen.forEach(function(ex) {
        if (ex.typ === 'tippen') tippenEx.push(ex);
      });
      if (tippenEx.length === 0) return;   // keine Tippen-Übungen → offen lassen

      _shuffle(tippenEx);
      var picked = tippenEx.slice(0, 2);
      unitResults[id] = { correct: 0, total: picked.length };
      picked.forEach(function(ex) {
        questions.push({ unitId: id, ex: ex });
      });
    });

    // Routing: diagnostic-View öffnen (Titel wird von app.js gesetzt)
    App.showView('diagnostic');
    _render();
  }

  // ─── RENDER: Frage ────────────────────────────────────────────────────────

  function _render() {
    var container = document.getElementById('mainContent');
    if (!container) return;

    if (current >= questions.length) {
      _renderResults(container);
      return;
    }

    var q   = questions[current];
    var ex  = q.ex;
    locked  = false;
    _frText = ex.fr || '';

    var pct  = Math.round((current / questions.length) * 100);
    var unit = Grammar.getUnit(q.unitId);

    var html = '<div class="exercise-view">';

    // Diagnostic-Badge
    html += '<div class="diag-badge">🔍 Einstufungstest</div>';

    // Fortschrittsbalken
    html += '<div class="ex-progress">';
    html += '<div class="ex-progress-bar"><div class="ex-progress-fill" style="width:' + pct + '%"></div></div>';
    html += '<span class="ex-progress-text">' + (current + 1) + ' / ' + questions.length + '</span>';
    html += '</div>';

    // Welche Unit wird gerade getestet?
    html += '<div class="diag-unit-label">📚 ' + (unit ? unit.titel : q.unitId) + '</div>';

    // Aufgaben-Karte
    html += '<div class="ex-card">';
    html += '<div class="ex-direction">🇩🇪 → 🇫🇷</div>';
    html += '<div class="ex-prompt">' + ex.de + '</div>';
    html += _inputWithMic();
    html += '<button class="btn btn-primary ex-btn-check" onclick="Diagnostic.pruefen()">Prüfen ✓</button>';
    html += '</div>';

    html += '</div>';
    container.innerHTML = html;

    // Fokus + Enter-Taste
    var inp = document.getElementById('exInput');
    if (inp) {
      inp.focus();
      inp.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') Diagnostic.pruefen();
      });
    }
  }

  // ─── ANTWORT PRÜFEN ───────────────────────────────────────────────────────

  function pruefen() {
    if (locked) return;
    var inp = document.getElementById('exInput');
    if (!inp || !inp.value.trim()) return;

    var q         = questions[current];
    var ex        = q.ex;
    var isCorrect = _compare(inp.value, ex.fr);

    locked = true;
    if (isCorrect) unitResults[q.unitId].correct++;

    var card = document.querySelector('.ex-card');
    if (card) {
      var fb = isCorrect
        ? '<div class="ex-feedback ex-feedback-correct">✅ Richtig!</div>'
        : '<div class="ex-feedback ex-feedback-wrong">❌ Richtig wäre: <strong>' + ex.fr + '</strong></div>';
      if (ex.erklaerung) {
        fb += '<div class="ex-erklaerung">💡 ' + ex.erklaerung + '</div>';
      }
      card.insertAdjacentHTML('beforeend', fb);
    }

    if (_frText && TTS.supported()) TTS.speak(_frText);

    setTimeout(function() {
      current++;
      locked = false;
      _render();
    }, isCorrect ? 1200 : 2500);
  }

  // ─── MIKROFON ─────────────────────────────────────────────────────────────

  function startMic() {
    if (locked) return;
    var btn = document.getElementById('micBtn');
    if (btn) btn.classList.add('listening');

    SpeechInput.start(function(results, error) {
      var btn2 = document.getElementById('micBtn');
      if (btn2) btn2.classList.remove('listening');
      if (error || !results || results.length === 0) return;
      var inp = document.getElementById('exInput');
      if (inp) { inp.value = results[0]; inp.focus(); }
    }, 'fr-FR');
  }

  // ─── ERGEBNIS-SCREEN ──────────────────────────────────────────────────────

  function _renderResults(container) {
    var green   = 0;
    var yellow  = 0;
    var skipped = 0;

    // Status setzen
    Object.keys(unitResults).forEach(function(id) {
      var r = unitResults[id];
      if (r.correct >= 1) {
        App.setUnitStatus(id, 'done');
        green++;
      } else {
        App.setUnitStatus(id, 'active');
        yellow++;
      }
    });

    // Units ohne Tippen-Fragen (noch nicht implementiert) → zählen
    PRIORITY_IDS.forEach(function(id) {
      if (!unitResults[id]) skipped++;
    });

    var html = '<div class="diag-results">';
    html += '<div class="score-emoji">🔍</div>';
    html += '<h2 class="score-msg">Einstufung abgeschlossen!</h2>';

    html += '<div class="diag-summary">';
    if (green > 0) {
      html += '<div class="diag-sum-item diag-sum-green">✅ ' + green + ' Unit' + (green !== 1 ? 's' : '') + ' wahrscheinlich OK</div>';
    }
    if (yellow > 0) {
      html += '<div class="diag-sum-item diag-sum-yellow">📝 ' + yellow + ' Unit' + (yellow !== 1 ? 's' : '') + ' zum Üben markiert</div>';
    }
    if (skipped > 0) {
      html += '<div class="diag-sum-item diag-sum-grey">⏳ ' + skipped + ' Unit' + (skipped !== 1 ? 's' : '') + ' noch nicht verfügbar</div>';
    }
    html += '</div>';

    html += '<p class="diag-hint">Du kannst die Einstufung auf dem Lernpfad jederzeit manuell anpassen — einfach auf eine Unit klicken.</p>';

    html += '<button class="btn btn-primary diag-back-btn" onclick="App.goBack()">← Zum Lernpfad</button>';
    html += '</div>';

    container.innerHTML = html;
  }

  // ─── HELPERS ──────────────────────────────────────────────────────────────

  function _inputWithMic() {
    var micHtml = SpeechInput.supported()
      ? '<button class="speech-mic-btn" id="micBtn" onclick="Diagnostic.startMic()" title="Sprechen">🎙️</button>'
      : '';
    return (
      '<div class="input-with-mic">' +
      '<input type="text" id="exInput" class="ex-input" ' +
      'autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" ' +
      'lang="fr" placeholder="Französisch eingeben…">' +
      micHtml +
      '</div>'
    );
  }

  // Toleranter Vergleich (identisch mit exercise.js)
  function _compare(user, correct) {
    var norm = function(s) {
      return s
        .replace(/[\u2018\u2019\u201A\u201B\uFF07]/g, "'")
        .toLowerCase()
        .trim()
        .replace(/[.,!?;:«»"]/g, '')
        .replace(/\s+/g, ' ')
        .trim();
    };
    return norm(user) === norm(correct);
  }

  function _shuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
    }
  }

  // ─── PUBLIC API ───────────────────────────────────────────────────────────

  return {
    canRun  : canRun,
    start   : start,
    pruefen : pruefen,
    startMic: startMic
  };

})();
