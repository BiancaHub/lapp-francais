/* L'App français V2 — Übungs-Engine
 *
 * Typen:
 *   tippen       — DE-Prompt, FR eintippen  +  🎙️-Button
 *   richtigfalsch — Aussage → Richtig / Falsch Buttons
 *   luecke       — Satz mit ___ Lücke, Wort eintippen  +  🎙️-Button
 *   hoeren       — TTS spielt FR, eintippen  +  🎙️-Button
 *
 * IMMER: Textfeld + Mikrofon nebeneinander — Bianca entscheidet pro Aufgabe.
 *
 * SR: Nach jeder Antwort wird SM-2 für die Übung aktualisiert (via App.updateExSR).
 *     start() bevorzugt fällige Übungen.
 *     startRepeat() zeigt nur fällige Übungen (max 6 — Wiederholungsmodus).
 */
var Exercise = (function() {

  var unitId    = null;
  var exercises = [];
  var current   = 0;
  var correct   = 0;
  var total     = 0;
  var locked    = false;
  var _frText   = '';   // aktueller FR-Text für TTS nach Antwort / Hören-Button
  var _pool     = [];   // Gesamtpool aller Übungen der Unit
  var _shown    = [];   // Indizes der bereits gezeigten Übungen

  // ─── PUBLIC: start ────────────────────────────────────────────────────────

  var BATCH_SIZE = 10;

  // Normaler Start: 10er-Häppchen, fällige zuerst
  function start(id) {
    var unit = Grammar.getUnit(id);
    if (!unit) return;

    unitId  = id;
    _pool   = unit.uebungen.slice();
    _shown  = [];
    _startBatch();
  }

  // Weiterüben: nächste 10 aus dem Restpool
  function _startBatch() {
    current = 0;
    correct = 0;
    locked  = false;

    var now = Date.now();

    // Noch nicht gezeigte Übungen ermitteln
    var remaining = [];
    for (var i = 0; i < _pool.length; i++) {
      if (_shown.indexOf(i) === -1) remaining.push(i);
    }

    // Fällige (SR) zuerst, dann Rest
    var dueIdx    = [];
    var notDueIdx = [];
    remaining.forEach(function(idx) {
      var ex = _pool[idx];
      var sr = App.getExSR(unitId, App.exKey(ex));
      if (sr && sr.nextReview && sr.nextReview <= now) {
        dueIdx.push(idx);
      } else {
        notDueIdx.push(idx);
      }
    });
    _shuffle(dueIdx);
    _shuffle(notDueIdx);

    var batchIdx = dueIdx.concat(notDueIdx).slice(0, BATCH_SIZE);
    batchIdx.forEach(function(idx) { _shown.push(idx); });

    exercises = batchIdx.map(function(idx) { return _pool[idx]; });
    total     = exercises.length;
    _render();
  }

  // Wiederholungsmodus: nur fällige Übungen, max 6
  function startRepeat(id) {
    var unit = Grammar.getUnit(id);
    if (!unit) return;

    unitId  = id;
    current = 0;
    correct = 0;
    locked  = false;

    var now = Date.now();
    var due = unit.uebungen.filter(function(ex) {
      var sr = App.getExSR(unitId, App.exKey(ex));
      return sr && sr.nextReview && sr.nextReview <= now;
    });

    if (due.length === 0) {
      // Keine fälligen → normalen Start
      start(id);
      return;
    }

    _shuffle(due);
    exercises = due.slice(0, 6);
    total     = exercises.length;
    _render();
  }

  // ─── RENDER ───────────────────────────────────────────────────────────────

  function _render() {
    var container = document.getElementById('mainContent');
    if (!container) return;

    if (current >= total) {
      _renderScore(container);
      return;
    }

    var ex = exercises[current];
    locked  = false;
    _frText = '';

    var pct  = Math.round((current / total) * 100);
    var html = '<div class="exercise-view">';

    // ── Fortschrittsbalken ──
    html += '<div class="ex-progress">';
    html += '<div class="ex-progress-bar">';
    html += '<div class="ex-progress-fill" style="width:' + pct + '%"></div>';
    html += '</div>';
    html += '<span class="ex-progress-text">' + (current + 1) + ' / ' + total + '</span>';
    html += '</div>';

    // ── Aufgaben-Karte ──
    html += '<div class="ex-card">';
    if (ex.typ === 'tippen') {
      html += _renderTippen(ex);
    } else if (ex.typ === 'richtigfalsch') {
      html += _renderRichtigFalsch(ex);
    } else if (ex.typ === 'luecke') {
      html += _renderLuecke(ex);
    } else if (ex.typ === 'hoeren') {
      html += _renderHoeren(ex);
    } else {
      html += _renderTippen(ex); // Fallback
    }
    html += '</div>'; // .ex-card

    // ── Score-Leiste ──
    html += '<div class="ex-score-bar">';
    html += '<span class="ex-score-correct">✅ ' + correct + '</span>';
    html += '<span class="ex-score-wrong">❌ ' + (current - correct) + '</span>';
    html += '</div>';

    html += '</div>'; // .exercise-view
    container.innerHTML = html;

    // Hören: TTS auto-abspielen
    if (ex.typ === 'hoeren' && TTS.supported() && ex.fr) {
      setTimeout(function() { TTS.speak(ex.fr); }, 500);
    }

    // Enter-Taste → Prüfen
    var inp = document.getElementById('exInput');
    if (inp) {
      inp.focus();
      inp.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') Exercise.pruefen();
      });
    }
  }

  // ─── ÜBUNGSTYPEN ──────────────────────────────────────────────────────────

  function _renderTippen(ex) {
    _frText = ex.fr;
    return (
      '<div class="ex-direction">🇩🇪 → 🇫🇷</div>' +
      '<div class="ex-prompt">' + ex.de + '</div>' +
      _inputWithMic() +
      '<button class="btn btn-primary ex-btn-check" onclick="Exercise.pruefen()">Prüfen ✓</button>'
    );
  }

  function _renderRichtigFalsch(ex) {
    _frText = '';
    return (
      '<div class="ex-direction">Richtig oder Falsch?</div>' +
      '<div class="ex-statement">' + ex.frage + '</div>' +
      '<div class="rf-buttons">' +
      '<button class="btn-rf btn-richtig" id="btnRichtig" onclick="Exercise.antwortRF(true)">✓ Richtig</button>' +
      '<button class="btn-rf btn-falsch"  id="btnFalsch"  onclick="Exercise.antwortRF(false)">✗ Falsch</button>' +
      '</div>'
    );
  }

  function _renderLuecke(ex) {
    _frText = ex.antwort || ex.loesung || '';
    var satzDisplay = (ex.satz || '').replace(/___/g, '<span class="luecke-slot">___</span>');
    return (
      '<div class="ex-direction">Fülle die Lücke aus:</div>' +
      '<div class="ex-statement">' + satzDisplay + '</div>' +
      _inputWithMic() +
      '<button class="btn btn-primary ex-btn-check" onclick="Exercise.pruefen()">Prüfen ✓</button>'
    );
  }

  function _renderHoeren(ex) {
    _frText = ex.fr;
    return (
      '<div class="ex-direction">🔊 Hören + Tippen</div>' +
      '<div class="ex-hoer-play">' +
      '<button class="audio-btn-large" onclick="Exercise.playTTS()" title="Nochmal abspielen">🔊</button>' +
      '<div class="ex-hoer-hint">Tippe was du gehört hast:</div>' +
      '</div>' +
      _inputWithMic() +
      '<button class="btn btn-primary ex-btn-check" onclick="Exercise.pruefen()">Prüfen ✓</button>'
    );
  }

  // Textfeld + Mikrofon nebeneinander
  function _inputWithMic() {
    var micHtml = SpeechInput.supported()
      ? '<button class="speech-mic-btn" id="micBtn" onclick="Exercise.startMic()" title="Sprechen">🎙️</button>'
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
      if (inp) {
        inp.value = results[0];
        inp.focus();
      }
    }, 'fr-FR');
  }

  // ─── ANTWORTEN ────────────────────────────────────────────────────────────

  function pruefen() {
    if (locked) return;
    var inp = document.getElementById('exInput');
    if (!inp || !inp.value.trim()) return;

    var ex            = exercises[current];
    var correctAnswer = (ex.typ === 'luecke') ? (ex.antwort || ex.loesung) : ex.fr;
    var isCorrect     = _compare(inp.value, correctAnswer);

    // Hauptantwort für Feedback (erstes Element wenn Array)
    var primaryAnswer = Array.isArray(correctAnswer) ? correctAnswer[0] : correctAnswer;
    var wrongMsg = isCorrect ? '' : 'Richtig wäre: <strong>' + primaryAnswer + '</strong>';
    if (!isCorrect && Array.isArray(correctAnswer) && correctAnswer.length > 1) {
      wrongMsg += ' <span class="ex-feedback-de">(auch: ' + correctAnswer.slice(1).join(' / ') + ')</span>';
    }
    // Bei Hören-Übungen: deutsche Übersetzung zeigen damit der Satz verständlich wird
    if (!isCorrect && ex.typ === 'hoeren' && ex.de) {
      wrongMsg += ' <span class="ex-feedback-de">(🇩🇪 ' + ex.de + ')</span>';
    }

    _handleResult(isCorrect, wrongMsg, ex.erklaerung, ex);
  }

  function antwortRF(userBool) {
    if (locked) return;

    var bR = document.getElementById('btnRichtig');
    var bF = document.getElementById('btnFalsch');
    if (bR) bR.disabled = true;
    if (bF) bF.disabled = true;

    var ex        = exercises[current];
    var isCorrect = (userBool === ex.antwort);

    var correctBtn = ex.antwort ? bR : bF;
    var wrongBtn   = ex.antwort ? bF : bR;
    if (correctBtn) correctBtn.classList.add('rf-correct');
    if (!isCorrect && wrongBtn) wrongBtn.classList.add('rf-wrong');

    _handleResult(
      isCorrect,
      isCorrect ? '' : 'Die Aussage ist <strong>' + (ex.antwort ? 'wahr' : 'falsch') + '</strong>',
      ex.erklaerung,
      ex
    );
  }

  function _handleResult(isCorrect, wrongText, erklaerung, ex) {
    locked = true;
    if (isCorrect) correct++;

    // ── SR aktualisieren ──
    if (ex && unitId) {
      App.updateExSR(unitId, App.exKey(ex), isCorrect ? 4 : 1);
    }

    var card = document.querySelector('.ex-card');
    if (card) {
      var fb = isCorrect
        ? '<div class="ex-feedback ex-feedback-correct">✅ Richtig!</div>'
        : '<div class="ex-feedback ex-feedback-wrong">❌ ' + wrongText + '</div>';
      if (erklaerung) {
        fb += '<div class="ex-erklaerung">💡 ' + erklaerung + '</div>';
      }
      card.insertAdjacentHTML('beforeend', fb);
    }

    // TTS: FR-Antwort vorlesen
    if (_frText && TTS.supported()) {
      TTS.speak(_frText);
    }

    setTimeout(function() {
      current++;
      locked = false;
      _render();
    }, isCorrect ? 1200 : 4500);
  }

  // ─── SCORE ────────────────────────────────────────────────────────────────

  function _renderScore(container) {
    var pct    = total > 0 ? Math.round((correct / total) * 100) : 0;
    var isDone = pct >= 70;

    App.setUnitStatus(unitId, isDone ? 'done' : 'active', pct);

    var emoji, msg;
    if      (pct >= 90) { emoji = '🌟'; msg = 'Ausgezeichnet!'; }
    else if (pct >= 70) { emoji = '🎉'; msg = 'Gut gemacht!'; }
    else if (pct >= 50) { emoji = '👍'; msg = 'Weiter so!'; }
    else                { emoji = '💪'; msg = 'Übung macht den Meister!'; }

    var html = '<div class="score-view">';
    html += '<div class="score-emoji">' + emoji + '</div>';
    html += '<h2 class="score-msg">' + msg + '</h2>';

    html += '<div class="score-circle">';
    html += '<div class="score-pct">' + pct + '%</div>';
    html += '<div class="score-detail">' + correct + ' / ' + total + ' richtig</div>';
    html += '</div>';

    if (isDone) {
      html += '<div class="score-badge score-badge-done">✓ Unit abgeschlossen!</div>';
    } else {
      html += '<div class="score-badge score-badge-active">Noch etwas üben — du schaffst das!</div>';
    }

    // Wie viele Fragen sind noch im Pool?
    var remainingCount = _pool.length - _shown.length;

    html += '<div class="score-buttons">';
    if (remainingCount > 0) {
      html += '<button class="btn btn-primary ex-btn-weiter" onclick="Exercise.weiterueben()">💪 Weiterüben (' + remainingCount + ' Fragen übrig)</button>';
    } else {
      html += '<div class="score-badge score-badge-done" style="margin-bottom:12px">🌟 Alle ' + _pool.length + ' Fragen geschafft!</div>';
    }
    html += '<button class="btn btn-secondary" onclick="Exercise.start(\'' + unitId + '\')">🔄 Von vorn</button>';
    html += '<button class="btn btn-primary"   onclick="App.goBack()">← Zurück zum Pfad</button>';
    html += '</div>';

    html += '</div>'; // .score-view
    container.innerHTML = html;
  }

  // ─── HELPERS ──────────────────────────────────────────────────────────────

  // Toleranter Vergleich: Groß/Klein, Leerzeichen, Satzzeichen egal
  // correct kann String oder Array von Strings sein
  function _compare(user, correct) {
    var norm = function(s) {
      return s
        .replace(/[\u2018\u2019\u201A\u201B\uFF07']/g, '')  // Apostrophe ignorieren
        .toLowerCase()
        .trim()
        .replace(/[.,!?;:«»"-]/g, '')
        .replace(/\s+/g, ' ')
        .trim();
    };
    var answers = Array.isArray(correct) ? correct : [correct];
    return answers.some(function(a) { return norm(user) === norm(a); });
  }

  function _shuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
    }
  }

  // ─── PUBLIC API ───────────────────────────────────────────────────────────

  return {
    start       : start,
    startRepeat : startRepeat,
    weiterueben : function() { _startBatch(); },
    pruefen     : pruefen,
    antwortRF   : antwortRF,
    startMic    : startMic,
    playTTS     : function() { if (_frText && TTS.supported()) TTS.speak(_frText); }
  };

})();
