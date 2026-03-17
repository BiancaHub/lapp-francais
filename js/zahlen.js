/* L'App français V2 — Zahlen-Trainer (Hören)
 *
 * TTS spielt eine Zahl / einen Preis vor, Bianca tippt die Zahl.
 * Fokus: 60–99 (quatre-vingts, soixante-dix...) — die deutsche Schwachstelle.
 */
var Zahlen = (function() {

  var _mode    = null;  // 'zahlen' | 'preise'
  var _items   = [];
  var _cur     = 0;
  var _correct = 0;
  var _total   = 0;
  var _locked  = false;
  var _current = null;  // { zahl, fr, display }

  var BATCH = 10;

  // ─── ZAHLWÖRTER ──────────────────────────────────────────────────────────────

  var ONES = ['zéro','un','deux','trois','quatre','cinq','six','sept','huit','neuf',
              'dix','onze','douze','treize','quatorze','quinze','seize',
              'dix-sept','dix-huit','dix-neuf'];
  var TENS = ['','','vingt','trente','quarante','cinquante','soixante','soixante','quatre-vingt','quatre-vingt'];

  function numberToFrench(n) {
    if (n < 0 || n > 999) return String(n);
    if (n < 20) return ONES[n];
    if (n < 70) {
      var t = Math.floor(n / 10);
      var o = n % 10;
      if (o === 0) return TENS[t];
      if (o === 1) return TENS[t] + ' et un';
      return TENS[t] + '-' + ONES[o];
    }
    if (n < 80) {
      // 70–79: soixante-dix, soixante et onze, soixante-douze...
      var sub = n - 60;
      if (sub === 10) return 'soixante-dix';
      if (sub === 11) return 'soixante et onze';
      return 'soixante-' + ONES[sub];
    }
    if (n < 100) {
      // 80–99: quatre-vingts, quatre-vingt-un, quatre-vingt-dix...
      if (n === 80) return 'quatre-vingts';
      var sub2 = n - 80;
      if (sub2 < 10) return 'quatre-vingt-' + ONES[sub2];
      // 90–99: quatre-vingt-dix, quatre-vingt-onze...
      if (sub2 === 10) return 'quatre-vingt-dix';
      if (sub2 === 11) return 'quatre-vingt-onze';
      return 'quatre-vingt-' + ONES[sub2];
    }
    // 100–999
    var hundreds = Math.floor(n / 100);
    var rest = n % 100;
    var prefix = hundreds === 1 ? 'cent' : ONES[hundreds] + ' cent';
    if (rest === 0) return hundreds === 1 ? 'cent' : prefix + 's';
    return prefix + ' ' + numberToFrench(rest);
  }

  // ─── AUFGABEN GENERIEREN ─────────────────────────────────────────────────────

  function _genZahlen() {
    var items = [];
    // Schwerpunkt auf schwierige Bereiche: 60–99
    var pool = [];
    // 0–20: ein paar
    for (var i = 0; i <= 20; i++) pool.push(i);
    // 21–59: ein paar
    for (var j = 21; j <= 59; j += 3) pool.push(j);
    // 60–99: ALLE (Schwerpunkt!)
    for (var k = 60; k <= 99; k++) pool.push(k);
    // 100–200: ein paar runde
    [100, 150, 175, 200, 250, 300, 500].forEach(function(n) { pool.push(n); });

    _shuffle(pool);
    pool.slice(0, BATCH).forEach(function(n) {
      items.push({ zahl: n, fr: numberToFrench(n), display: String(n) });
    });
    return items;
  }

  function _genPreise() {
    var items = [];
    var preise = [
      { eur: 2, cent: 50 }, { eur: 3, cent: 80 }, { eur: 5, cent: 0 },
      { eur: 7, cent: 20 }, { eur: 12, cent: 50 }, { eur: 15, cent: 90 },
      { eur: 24, cent: 0 }, { eur: 33, cent: 50 }, { eur: 47, cent: 30 },
      { eur: 68, cent: 0 }, { eur: 72, cent: 50 }, { eur: 85, cent: 0 },
      { eur: 91, cent: 40 }, { eur: 99, cent: 99 }, { eur: 150, cent: 0 },
      { eur: 8, cent: 75 }, { eur: 19, cent: 60 }, { eur: 56, cent: 0 },
      { eur: 77, cent: 50 }, { eur: 43, cent: 20 }
    ];
    _shuffle(preise);
    preise.slice(0, BATCH).forEach(function(p) {
      var frText = numberToFrench(p.eur) + ' euro' + (p.eur > 1 ? 's' : '');
      var display = p.eur + ',' + (p.cent < 10 ? '0' : '') + p.cent + ' €';
      if (p.cent > 0) {
        frText += ' ' + numberToFrench(p.cent);
        // Akzeptierte Eingabe: z.B. "72,50" oder "72.50" oder "72,5"
      } else {
        display = p.eur + ',00 €';
      }
      var answer = p.cent > 0
        ? p.eur + ',' + (p.cent < 10 ? '0' : '') + p.cent
        : String(p.eur);
      items.push({ zahl: answer, fr: frText, display: display, eurVal: p.eur, centVal: p.cent });
    });
    return items;
  }

  // ─── ÜBERSICHT ───────────────────────────────────────────────────────────────

  function renderMenu(container) {
    var html = '<div class="path-container">';

    html += '<div class="path-banner">🔢 Zahlen hören und verstehen — die größte Hürde für Deutsche!</div>';

    html += '<div class="zahlen-info">';
    html += '<p><strong>Warum ist das wichtig?</strong></p>';
    html += '<p>Französische Zahlen ab 60 sind für Deutsche besonders schwer:</p>';
    html += '<ul>';
    html += '<li><strong>70</strong> = soixante-dix (60 + 10)</li>';
    html += '<li><strong>80</strong> = quatre-vingts (4 × 20)</li>';
    html += '<li><strong>97</strong> = quatre-vingt-dix-sept (4 × 20 + 17)</li>';
    html += '</ul>';
    html += '<p>Auf dem Markt, im Restaurant, an der Kasse — Zahlen musst du sofort verstehen!</p>';
    html += '</div>';

    html += '<div class="szenarien-grid">';

    html += '<div class="szenario-card" onclick="Zahlen.start(\'zahlen\')">';
    html += '<div class="sz-icon">🔢</div>';
    html += '<div class="sz-info">';
    html += '<div class="sz-titel">Zahlen hören</div>';
    html += '<div class="sz-beschreibung">' + BATCH + ' Zahlen (0–500) — TTS spielt vor, du tippst die Zahl</div>';
    html += '</div>';
    html += '</div>';

    html += '<div class="szenario-card" onclick="Zahlen.start(\'preise\')">';
    html += '<div class="sz-icon">💶</div>';
    html += '<div class="sz-info">';
    html += '<div class="sz-titel">Preise verstehen</div>';
    html += '<div class="sz-beschreibung">' + BATCH + ' Preise — wie auf dem Markt: \"Ça fait combien?\"</div>';
    html += '</div>';
    html += '</div>';

    html += '</div>';
    html += '</div>';
    container.innerHTML = html;
  }

  // ─── START ───────────────────────────────────────────────────────────────────

  function start(mode) {
    _mode    = mode;
    _items   = mode === 'preise' ? _genPreise() : _genZahlen();
    _cur     = 0;
    _correct = 0;
    _total   = _items.length;
    _locked  = false;
    _renderAufgabe();
  }

  function _renderAufgabe() {
    var container = document.getElementById('mainContent');
    if (!container) return;

    if (_cur >= _total) { _renderScore(container); return; }

    _current = _items[_cur];
    _locked  = false;

    var pct  = Math.round((_cur / _total) * 100);
    var html = '<div class="exercise-view">';

    // Fortschrittsbalken
    html += '<div class="ex-progress">';
    html += '<div class="ex-progress-bar"><div class="ex-progress-fill" style="width:' + pct + '%"></div></div>';
    html += '<span class="ex-progress-text">' + (_cur + 1) + ' / ' + _total + '</span>';
    html += '</div>';

    // Aufgabe
    html += '<div class="ex-card">';
    html += '<div class="ex-direction">🔊 Hören + Tippen</div>';
    html += '<div class="ex-hoer-play">';
    html += '<button class="audio-btn-large" onclick="Zahlen.replay()" title="Nochmal abspielen">🔊</button>';
    html += '<div class="ex-hoer-hint">' +
            (_mode === 'preise' ? 'Welcher Preis? (z.B. 72,50)' : 'Welche Zahl?') +
            '</div>';
    html += '</div>';

    // Input
    html += '<div class="input-with-mic">';
    html += '<input type="text" id="exInput" class="ex-input" inputmode="decimal" ' +
            'autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" ' +
            'placeholder="' + (_mode === 'preise' ? 'Preis eingeben…' : 'Zahl eingeben…') + '">';
    html += '</div>';
    html += '<button class="btn btn-primary ex-btn-check" onclick="Zahlen.pruefen()">Prüfen ✓</button>';
    html += '</div>';

    // Score-Leiste
    html += '<div class="ex-score-bar">';
    html += '<span class="ex-score-correct">✅ ' + _correct + '</span>';
    html += '<span class="ex-score-wrong">❌ ' + (_cur - _correct) + '</span>';
    html += '</div>';

    html += '</div>';
    container.innerHTML = html;

    // TTS abspielen
    if (TTS.supported()) {
      setTimeout(function() { TTS.speak(_current.fr); }, 500);
    }

    var inp = document.getElementById('exInput');
    if (inp) {
      inp.focus();
      inp.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') Zahlen.pruefen();
      });
    }
  }

  function replay() {
    if (_current && TTS.supported()) TTS.speak(_current.fr);
  }

  // ─── PRÜFEN ──────────────────────────────────────────────────────────────────

  function pruefen() {
    if (_locked) return;
    var inp = document.getElementById('exInput');
    if (!inp || !inp.value.trim()) return;

    var userVal   = inp.value.trim().replace(/\s/g, '').replace(/€/g, '').replace(/\./g, ',');
    var correctVal;

    if (_mode === 'preise') {
      // Normalisiere: "72,50" = "72,5" = "72.50"
      correctVal = _current.centVal > 0
        ? _current.eurVal + ',' + (_current.centVal < 10 ? '0' : '') + _current.centVal
        : String(_current.eurVal);
      // Akzeptiere verschiedene Formate
      var normUser = userVal.replace(',0', ',00').replace(/,(\d)$/, ',0$1');
      var normCorr = correctVal.replace(',0', ',00').replace(/,(\d)$/, ',0$1');
      // Auch ohne Cent akzeptieren wenn cent=0
      var isCorrect = (normUser === normCorr) ||
                      (userVal === String(_current.eurVal)) ||
                      (userVal === correctVal);
    } else {
      correctVal = String(_current.zahl);
      var isCorrect = (userVal === correctVal);
    }

    _locked = true;
    if (isCorrect) _correct++;

    var card = document.querySelector('.ex-card');
    if (card) {
      var fb;
      if (isCorrect) {
        fb = '<div class="ex-feedback ex-feedback-correct">✅ Richtig! ' + _current.display + '</div>';
      } else {
        fb = '<div class="ex-feedback ex-feedback-wrong">❌ Das war: <strong>' + _current.display +
             '</strong><br><span class="zahlen-fr-antwort">🇫🇷 ' + _current.fr + '</span></div>';
      }
      if (!isCorrect) {
        fb += '<button class="btn btn-primary ex-btn-weiter-wrong" onclick="Zahlen.weiter()">Weiter →</button>';
      }
      card.insertAdjacentHTML('beforeend', fb);
    }

    // TTS: nochmal vorlesen
    if (TTS.supported()) TTS.speak(_current.fr);

    if (isCorrect) {
      setTimeout(function() { _cur++; _locked = false; _renderAufgabe(); }, 1500);
    }
  }

  function weiter() {
    _cur++;
    _locked = false;
    _renderAufgabe();
  }

  // ─── SCORE ───────────────────────────────────────────────────────────────────

  function _renderScore(container) {
    var pct = _total > 0 ? Math.round((_correct / _total) * 100) : 0;

    var emoji, msg;
    if      (pct >= 90) { emoji = '🌟'; msg = 'Zahlen-Profi! Das sitzt!'; }
    else if (pct >= 70) { emoji = '🎉'; msg = 'Gut gemacht!'; }
    else if (pct >= 50) { emoji = '👍'; msg = 'Die schwierigen kommen noch — weiterüben!'; }
    else                { emoji = '💪'; msg = 'Quatre-vingts ist eben gemein — nochmal!'; }

    var html = '<div class="score-view">';
    html += '<div class="score-emoji">' + emoji + '</div>';
    html += '<h2 class="score-msg">' + msg + '</h2>';
    html += '<div class="score-circle">';
    html += '<div class="score-pct">' + pct + '%</div>';
    html += '<div class="score-detail">' + _correct + ' / ' + _total + ' richtig</div>';
    html += '</div>';
    html += '<div class="score-buttons">';
    html += '<button class="btn btn-secondary" onclick="Zahlen.start(\'' + _mode + '\')">🔄 Nochmal</button>';
    html += '<button class="btn btn-primary" onclick="App.showView(\'zahlen\')">← Zurück</button>';
    html += '</div>';
    html += '</div>';
    container.innerHTML = html;
  }

  // ─── HELPERS ─────────────────────────────────────────────────────────────────

  function _shuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
    }
  }

  // ─── PUBLIC ──────────────────────────────────────────────────────────────────

  return {
    renderMenu : renderMenu,
    start      : start,
    replay     : replay,
    pruefen    : pruefen,
    weiter     : weiter
  };

})();
