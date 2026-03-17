/* L'App français V2 — Szenarien-Modul (Session 6)
 *
 * Zwei Ansichten:
 *   renderList(container)      — Übersicht aller 6 Szenarien
 *   renderSzenario(container, id) — Einzelansicht: Dialog → Übungen → Score
 *
 * State: App.getSzenarioStatus / App.setSzenarioStatus
 * Übungstypen: richtigfalsch, luecke, tippen (wie exercise.js)
 */
var Szenarien = (function() {

  var _id       = null;   // aktuelle Szenario-ID
  var _exs      = [];     // Übungsarray
  var _cur      = 0;
  var _correct  = 0;
  var _total    = 0;
  var _locked   = false;
  var _frText   = '';

  // ─── LISTE ─────────────────────────────────────────────────────────────────

  function renderList(container) {
    var all  = SzenarienData.getAll();
    var done = 0;
    all.forEach(function(s) {
      if (App.getSzenarioStatus(s.id) === 'done') done++;
    });

    var html = '<div class="path-container">';

    // Kopfzeile
    html += '<div class="path-stats">';
    html += _stat(done,            '✓ erledigt');
    html += _stat(all.length - done, '○ offen');
    html += '</div>';

    html += '<div class="path-banner">🌍 Alltagssituationen in Frankreich — lies den Dialog, mach die Übungen</div>';

    // Karten-Grid
    html += '<div class="szenarien-grid">';
    all.forEach(function(sz) {
      var status  = App.getSzenarioStatus(sz.id);
      var isDone  = status === 'done';
      var cls     = 'szenario-card' + (isDone ? ' szenario-done' : '');

      html += '<div class="' + cls + '" onclick="App.showView(\'szenario\', \'' + sz.id + '\')">';
      html += '<div class="sz-icon">' + sz.icon + '</div>';
      html += '<div class="sz-info">';
      html += '<div class="sz-titel">' + sz.titel + '</div>';
      html += '<div class="sz-level">Level ' + sz.level + '</div>';
      html += '<div class="sz-beschreibung">' + sz.beschreibung + '</div>';
      html += '</div>';
      if (isDone) html += '<span class="sz-check">✓</span>';
      html += '</div>';
    });
    html += '</div>'; // .szenarien-grid

    html += '</div>'; // .path-container
    container.innerHTML = html;
  }

  function _stat(num, label) {
    return (
      '<div class="path-stat">' +
      '<span class="path-stat-num">' + num + '</span>' +
      '<span class="path-stat-label">' + label + '</span>' +
      '</div>'
    );
  }

  // ─── EINZELNES SZENARIO ────────────────────────────────────────────────────

  function renderSzenario(container, id) {
    var sz = SzenarienData.get(id);
    if (!sz) { container.innerHTML = '<p>Szenario nicht gefunden.</p>'; return; }

    _id      = id;
    _exs     = sz.uebungen.slice();
    _cur     = 0;
    _correct = 0;
    _total   = _exs.length;
    _locked  = false;

    _renderDialog(container, sz);
  }

  // Phase 1: Dialog anzeigen
  function _renderDialog(container, sz) {
    var html = '<div class="sz-view">';

    // Beschreibung
    html += '<div class="sz-header-box">';
    html += '<span class="sz-header-icon">' + sz.icon + '</span>';
    html += '<div>';
    html += '<div class="sz-header-titel">' + sz.titel + '</div>';
    html += '<div class="sz-header-desc">' + sz.beschreibung + '</div>';
    html += '</div>';
    html += '</div>';

    // Dialog
    html += '<div class="sz-dialog">';
    sz.dialog.forEach(function(zeile) {
      var cls = zeile.sprecher === sz.dialog[0].sprecher ? 'sz-line-a' : 'sz-line-b';
      html += '<div class="sz-line ' + cls + '">';
      html += '<span class="sz-sprecher">' + zeile.sprecher + '</span>';
      html += '<span class="sz-text">' + zeile.text + '</span>';
      html += '<button class="sz-tts-btn" onclick="Szenarien.playLine(\'' +
              _escapeQuotes(zeile.text) + '\')" title="Vorlesen">🔊</button>';
      html += '</div>';
    });
    html += '</div>'; // .sz-dialog

    // Empfohlene Units
    if (sz.units && sz.units.length > 0) {
      html += '<div class="sz-units-hint">';
      html += '<strong>📚 Hilfreiche Grammar-Units:</strong> ';
      sz.units.forEach(function(uid) {
        var unit = Grammar.getUnit(uid);
        if (unit) {
          html += '<button class="sz-unit-link" onclick="App.showView(\'unit\', \'' + uid + '\')">' +
                  unit.titel + '</button> ';
        }
      });
      html += '</div>';
    }

    // Start-Button
    html += '<button class="btn btn-primary sz-start-btn" onclick="Szenarien.startUebungen()">📝 Verständnisfragen starten</button>';

    html += '</div>'; // .sz-view
    container.innerHTML = html;
  }

  function _escapeQuotes(s) {
    return s.replace(/'/g, "\\'").replace(/"/g, '&quot;');
  }

  // TTS für einzelne Dialog-Zeile
  function playLine(text) {
    if (TTS.supported()) TTS.speak(text);
  }

  // ─── ÜBUNGEN ───────────────────────────────────────────────────────────────

  function startUebungen() {
    _cur     = 0;
    _correct = 0;
    _locked  = false;
    _renderUebung();
  }

  function _renderUebung() {
    var container = document.getElementById('mainContent');
    if (!container) return;

    if (_cur >= _total) { _renderScore(container); return; }

    var ex   = _exs[_cur];
    _locked  = false;
    _frText  = '';

    var pct  = Math.round((_cur / _total) * 100);
    var html = '<div class="exercise-view">';

    // Fortschrittsbalken
    html += '<div class="ex-progress">';
    html += '<div class="ex-progress-bar"><div class="ex-progress-fill" style="width:' + pct + '%"></div></div>';
    html += '<span class="ex-progress-text">' + (_cur + 1) + ' / ' + _total + '</span>';
    html += '</div>';

    // Aufgaben-Karte
    html += '<div class="ex-card">';
    if (ex.typ === 'richtigfalsch') {
      html += _renderRF(ex);
    } else if (ex.typ === 'luecke') {
      html += _renderLuecke(ex);
    } else if (ex.typ === 'tippen') {
      html += _renderTippen(ex);
    } else if (ex.typ === 'hoeren') {
      html += _renderHoeren(ex);
    }
    html += '</div>';

    // Score-Leiste
    html += '<div class="ex-score-bar">';
    html += '<span class="ex-score-correct">✅ ' + _correct + '</span>';
    html += '<span class="ex-score-wrong">❌ ' + (_cur - _correct) + '</span>';
    html += '</div>';

    html += '</div>'; // .exercise-view
    container.innerHTML = html;

    // Hören: TTS auto-abspielen
    if (ex.typ === 'hoeren' && TTS.supported() && ex.fr) {
      setTimeout(function() { TTS.speak(ex.fr); }, 500);
    }

    // Enter-Taste
    var inp = document.getElementById('exInput');
    if (inp) {
      inp.focus();
      inp.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') Szenarien.pruefen();
      });
    }
  }

  function _renderRF(ex) {
    return (
      '<div class="ex-direction">Richtig oder Falsch?</div>' +
      '<div class="ex-statement">' + ex.frage + '</div>' +
      '<div class="rf-buttons">' +
      '<button class="btn-rf btn-richtig" id="btnRichtig" onclick="Szenarien.antwortRF(true)">✓ Richtig</button>' +
      '<button class="btn-rf btn-falsch"  id="btnFalsch"  onclick="Szenarien.antwortRF(false)">✗ Falsch</button>' +
      '</div>'
    );
  }

  function _renderLuecke(ex) {
    _frText = ex.loesung || '';
    var satzDisplay = (ex.satz || '').replace(/___/g, '<span class="luecke-slot">___</span>');
    return (
      '<div class="ex-direction">Fülle die Lücke aus:</div>' +
      '<div class="ex-statement">' + satzDisplay + '</div>' +
      _inputMic() +
      '<button class="btn btn-primary ex-btn-check" onclick="Szenarien.pruefen()">Prüfen ✓</button>'
    );
  }

  function _renderTippen(ex) {
    _frText = ex.fr;
    return (
      '<div class="ex-direction">🇩🇪 → 🇫🇷</div>' +
      '<div class="ex-prompt">' + ex.de + '</div>' +
      _inputMic() +
      '<button class="btn btn-primary ex-btn-check" onclick="Szenarien.pruefen()">Prüfen ✓</button>'
    );
  }

  function _renderHoeren(ex) {
    _frText = ex.fr;
    return (
      '<div class="ex-direction">🔊 Hören + Tippen</div>' +
      '<div class="ex-hoer-play">' +
      '<button class="audio-btn-large" onclick="Szenarien.playHoeren()" title="Nochmal abspielen">🔊</button>' +
      '<div class="ex-hoer-hint">' + (ex.hinweis || 'Tippe was du gehört hast:') + '</div>' +
      '</div>' +
      _inputMic() +
      '<button class="btn btn-primary ex-btn-check" onclick="Szenarien.pruefen()">Prüfen ✓</button>'
    );
  }

  function _inputMic() {
    var micHtml = SpeechInput.supported()
      ? '<button class="speech-mic-btn" id="micBtn" onclick="Szenarien.startMic()" title="Sprechen">🎙️</button>'
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

  // ─── ANTWORTEN ─────────────────────────────────────────────────────────────

  function pruefen() {
    if (_locked) return;
    var inp = document.getElementById('exInput');
    if (!inp || !inp.value.trim()) return;

    var ex            = _exs[_cur];
    var correctAnswer = (ex.typ === 'luecke') ? (ex.loesung || ex.antwort) : ex.fr;
    var isCorrect     = _compare(inp.value, correctAnswer);
    var wrongMsg      = isCorrect ? '' : 'Richtig wäre: <strong>' + correctAnswer + '</strong>';
    // Bei Hören-Übungen: deutsche Übersetzung zeigen
    if (!isCorrect && ex.typ === 'hoeren' && ex.de) {
      wrongMsg += ' <span class="ex-feedback-de">(🇩🇪 ' + ex.de + ')</span>';
    }
    _handleResult(isCorrect, wrongMsg, ex.erklaerung);
  }

  function antwortRF(userBool) {
    if (_locked) return;
    var bR = document.getElementById('btnRichtig');
    var bF = document.getElementById('btnFalsch');
    if (bR) bR.disabled = true;
    if (bF) bF.disabled = true;

    var ex        = _exs[_cur];
    var isCorrect = (userBool === ex.antwort);

    var correctBtn = ex.antwort ? bR : bF;
    var wrongBtn   = ex.antwort ? bF : bR;
    if (correctBtn) correctBtn.classList.add('rf-correct');
    if (!isCorrect && wrongBtn) wrongBtn.classList.add('rf-wrong');

    _handleResult(
      isCorrect,
      isCorrect ? '' : 'Die Aussage ist <strong>' + (ex.antwort ? 'wahr' : 'falsch') + '</strong>',
      ex.erklaerung
    );
  }

  function _handleResult(isCorrect, wrongText, erklaerung) {
    _locked = true;
    if (isCorrect) _correct++;

    var card = document.querySelector('.ex-card');
    if (card) {
      var fb = isCorrect
        ? '<div class="ex-feedback ex-feedback-correct">✅ Richtig!</div>'
        : '<div class="ex-feedback ex-feedback-wrong">❌ ' + wrongText + '</div>';
      if (erklaerung) fb += '<div class="ex-erklaerung">💡 ' + erklaerung + '</div>';
      card.insertAdjacentHTML('beforeend', fb);
    }

    if (_frText && TTS.supported()) TTS.speak(_frText);

    setTimeout(function() {
      _cur++;
      _locked = false;
      _renderUebung();
    }, isCorrect ? 1200 : 2500);
  }

  // ─── SCORE ─────────────────────────────────────────────────────────────────

  function _renderScore(container) {
    var pct    = _total > 0 ? Math.round((_correct / _total) * 100) : 0;
    var isDone = pct >= 70;
    App.setSzenarioStatus(_id, isDone ? 'done' : 'open', pct);

    var emoji, msg;
    if      (pct >= 90) { emoji = '🌟'; msg = 'Ausgezeichnet! Du verstehst Alltagssituationen super!'; }
    else if (pct >= 70) { emoji = '🎉'; msg = 'Gut gemacht! Das Szenario ist abgeschlossen.'; }
    else if (pct >= 50) { emoji = '👍'; msg = 'Fast — noch einmal lesen und versuchen!'; }
    else                { emoji = '💪'; msg = 'Lies den Dialog nochmal durch — du schaffst das!'; }

    var sz   = SzenarienData.get(_id);
    var html = '<div class="score-view">';
    html += '<div class="score-emoji">' + emoji + '</div>';
    html += '<h2 class="score-msg">' + msg + '</h2>';

    html += '<div class="score-circle">';
    html += '<div class="score-pct">' + pct + '%</div>';
    html += '<div class="score-detail">' + _correct + ' / ' + _total + ' richtig</div>';
    html += '</div>';

    if (isDone) {
      html += '<div class="score-badge score-badge-done">✓ Szenario gemeistert!</div>';
    }

    html += '<div class="score-buttons">';
    html += '<button class="btn btn-secondary" onclick="App.showView(\'szenario\', \'' + _id + '\')">🔄 Nochmal</button>';
    html += '<button class="btn btn-primary"   onclick="App.showView(\'szenarien\')">← Alle Szenarien</button>';
    html += '</div>';

    // Empfohlene Units (nochmal zeigen)
    if (sz && sz.units && sz.units.length > 0) {
      html += '<div class="sz-units-hint sz-units-hint-score">';
      html += '<strong>📚 Verwandte Grammar-Units zum Vertiefen:</strong><br>';
      sz.units.forEach(function(uid) {
        var unit = Grammar.getUnit(uid);
        if (unit) {
          html += '<button class="sz-unit-link" onclick="App.showView(\'unit\', \'' + uid + '\')">' +
                  unit.titel + '</button> ';
        }
      });
      html += '</div>';
    }

    html += '</div>'; // .score-view
    container.innerHTML = html;
  }

  // ─── MIKROFON + HELPERS ────────────────────────────────────────────────────

  function startMic() {
    if (_locked) return;
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

  function _compare(user, correct) {
    var norm = function(s) {
      return s
        .replace(/[\u2018\u2019\u201A\u201B\uFF07]/g, "'")
        .toLowerCase().trim()
        .replace(/[.,!?;:«»"]/g, '')
        .replace(/\s+/g, ' ').trim();
    };
    return norm(user) === norm(correct);
  }

  // ─── PUBLIC ────────────────────────────────────────────────────────────────

  return {
    renderList    : renderList,
    renderSzenario: renderSzenario,
    startUebungen : startUebungen,
    pruefen       : pruefen,
    antwortRF     : antwortRF,
    startMic      : startMic,
    playLine      : playLine,
    playHoeren    : function() { if (_frText && TTS.supported()) TTS.speak(_frText); }
  };

})();
