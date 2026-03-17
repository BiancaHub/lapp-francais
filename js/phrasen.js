/* L'App français V2 — Überlebens-Phrasen
 *
 * Alltagsphrasen die in keine Grammar-Unit passen.
 * Aufbau: Kategorien → Phrasen (FR + DE + Kontext) → TTS → Quiz
 */
var Phrasen = (function() {

  // ─── DATEN ──────────────────────────────────────────────────────────────────

  var KATEGORIEN = [
    {
      id: 'reaktionen',
      titel: 'Reaktionen',
      icon: '😮',
      phrasen: [
        { fr: 'Ah bon ?',           de: 'Ach wirklich?',          kontext: 'Überrascht reagieren' },
        { fr: 'Ça marche !',        de: 'Alles klar! / Geht klar!', kontext: 'Zustimmung, Plan bestätigen' },
        { fr: "C'est pas grave.",    de: 'Nicht schlimm.',         kontext: 'Jemanden beruhigen' },
        { fr: 'Tant pis.',          de: 'Schade. / Pech gehabt.', kontext: 'Resignation, akzeptieren' },
        { fr: 'Tant mieux !',       de: 'Umso besser!',           kontext: 'Positive Überraschung' },
        { fr: 'Super !',            de: 'Super! / Toll!',         kontext: 'Begeisterung zeigen' },
        { fr: "C'est génial !",     de: 'Das ist genial!',        kontext: 'Starke Begeisterung' },
        { fr: 'Pas mal !',          de: 'Nicht schlecht!',        kontext: 'Anerkennend, positiv' },
        { fr: "N'importe quoi !",   de: 'Quatsch! / Unsinn!',    kontext: 'Ablehnung, Unglaube' },
        { fr: 'Ça alors !',         de: 'Na sowas!',              kontext: 'Überraschung, Staunen' },
        { fr: "C'est dommage.",     de: 'Das ist schade.',        kontext: 'Bedauern ausdrücken' },
        { fr: 'Bien sûr !',         de: 'Natürlich! / Klar!',    kontext: 'Selbstverständliche Zustimmung' }
      ]
    },
    {
      id: 'hoeflichkeit',
      titel: 'Höflichkeit',
      icon: '🤝',
      phrasen: [
        { fr: "S'il vous plaît.",    de: 'Bitte. (formell)',          kontext: 'Höfliche Bitte' },
        { fr: "S'il te plaît.",      de: 'Bitte. (informell)',        kontext: 'Unter Freunden' },
        { fr: 'Merci beaucoup !',    de: 'Vielen Dank!',             kontext: 'Dankbarkeit zeigen' },
        { fr: 'Je vous en prie.',    de: 'Gern geschehen. (formell)', kontext: 'Antwort auf Danke' },
        { fr: 'De rien.',            de: 'Keine Ursache.',           kontext: 'Lockere Antwort auf Danke' },
        { fr: 'Excusez-moi.',        de: 'Entschuldigen Sie.',       kontext: 'Aufmerksamkeit bekommen / sorry' },
        { fr: 'Pardon !',            de: 'Entschuldigung!',          kontext: 'Schnelle Entschuldigung' },
        { fr: 'Bonne journée !',     de: 'Schönen Tag noch!',        kontext: 'Verabschiedung tagsüber' },
        { fr: 'Bonne soirée !',      de: 'Schönen Abend!',           kontext: 'Verabschiedung abends' },
        { fr: 'Bon appétit !',       de: 'Guten Appetit!',           kontext: 'Vor dem Essen' },
        { fr: 'À bientôt !',         de: 'Bis bald!',                kontext: 'Lockere Verabschiedung' },
        { fr: 'Enchanté(e) !',       de: 'Freut mich! (Vorstellung)', kontext: 'Beim Kennenlernen' }
      ]
    },
    {
      id: 'notfall',
      titel: 'Notfall & Hilfe',
      icon: '🆘',
      phrasen: [
        { fr: 'Je ne comprends pas.',     de: 'Ich verstehe nicht.',        kontext: 'WICHTIGSTER Satz im Urlaub!' },
        { fr: 'Vous parlez anglais ?',     de: 'Sprechen Sie Englisch?',    kontext: 'Sprachbarriere überbrücken' },
        { fr: 'Pouvez-vous répéter ?',     de: 'Können Sie das wiederholen?', kontext: 'Etwas nicht verstanden' },
        { fr: 'Parlez plus lentement.',    de: 'Sprechen Sie langsamer.',   kontext: 'Zu schnelles Französisch' },
        { fr: 'Au secours !',              de: 'Hilfe!',                    kontext: 'Notruf / Gefahr' },
        { fr: "J'ai besoin d'aide.",       de: 'Ich brauche Hilfe.',        kontext: 'Hilfe erbitten' },
        { fr: "Où sont les toilettes ?",   de: 'Wo sind die Toiletten?',    kontext: 'Überall nützlich' },
        { fr: "Je suis perdu(e).",         de: 'Ich habe mich verirrt.',    kontext: 'Orientierung verloren' },
        { fr: "J'ai perdu mon portefeuille.", de: 'Ich habe mein Portemonnaie verloren.', kontext: 'Verlust melden' },
        { fr: 'Appelez la police !',       de: 'Rufen Sie die Polizei!',    kontext: 'Notfall / Diebstahl' },
        { fr: "Je suis allergique à…",     de: 'Ich bin allergisch gegen…',  kontext: 'Allergien mitteilen' },
        { fr: "Où est l'hôpital ?",        de: 'Wo ist das Krankenhaus?',   kontext: 'Medizinischer Notfall' }
      ]
    },
    {
      id: 'smalltalk',
      titel: 'Small Talk',
      icon: '💬',
      phrasen: [
        { fr: 'Ça va ?',                   de: 'Wie geht\'s?',              kontext: 'Standard-Begrüßung' },
        { fr: 'Ça va bien, merci.',         de: 'Mir geht\'s gut, danke.',   kontext: 'Antwort auf Ça va' },
        { fr: 'Comme ci, comme ça.',        de: 'So lala.',                  kontext: 'Mittelmäßig' },
        { fr: 'Il fait beau !',             de: 'Schönes Wetter!',           kontext: 'Smalltalk-Klassiker' },
        { fr: "Je suis en vacances.",       de: 'Ich bin im Urlaub.',        kontext: 'Sich vorstellen' },
        { fr: "Je viens d'Allemagne.",      de: 'Ich komme aus Deutschland.', kontext: 'Herkunft angeben' },
        { fr: "J'adore la France !",        de: 'Ich liebe Frankreich!',     kontext: 'Sympathie zeigen' },
        { fr: "C'est la première fois.",    de: 'Es ist das erste Mal.',     kontext: 'Erster Besuch' },
        { fr: "Qu'est-ce que vous recommandez ?", de: 'Was empfehlen Sie?',  kontext: 'Restaurant, Tipps' },
        { fr: "C'est magnifique !",         de: 'Das ist wunderschön!',      kontext: 'Begeisterung über Ort/Aussicht' }
      ]
    },
    {
      id: 'einkaufen',
      titel: 'Einkaufen & Bezahlen',
      icon: '🛍️',
      phrasen: [
        { fr: "Combien ça coûte ?",         de: 'Was kostet das?',            kontext: 'Preis erfragen' },
        { fr: "C'est trop cher.",            de: 'Das ist zu teuer.',          kontext: 'Preis verhandeln' },
        { fr: "Je voudrais ça.",             de: 'Ich hätte gerne das.',       kontext: 'Auf etwas zeigen' },
        { fr: "Vous acceptez la carte ?",    de: 'Nehmen Sie Karte?',          kontext: 'Kartenzahlung' },
        { fr: "Gardez la monnaie.",          de: 'Stimmt so. (Trinkgeld)',     kontext: 'Trinkgeld geben' },
        { fr: "Je regarde juste.",           de: 'Ich schaue nur.',            kontext: 'Verkäufer abwimmeln' },
        { fr: "Avez-vous… ?",               de: 'Haben Sie… ?',               kontext: 'Nach Produkt fragen' },
        { fr: "Un sac, s'il vous plaît.",   de: 'Eine Tüte, bitte.',          kontext: 'An der Kasse' },
        { fr: "Où est la sortie ?",          de: 'Wo ist der Ausgang?',        kontext: 'Orientierung im Laden' },
        { fr: "C'est en solde ?",            de: 'Ist das reduziert?',          kontext: 'Schlussverkauf' }
      ]
    }
  ];

  var _currentKat = null;
  var _quizPhrases = [];
  var _quizCur     = 0;
  var _quizCorrect = 0;
  var _quizTotal   = 0;
  var _locked      = false;

  // ─── ÜBERSICHT ───────────────────────────────────────────────────────────────

  function renderList(container) {
    var html = '<div class="path-container">';

    html += '<div class="path-banner">🗣️ Alltagsphrasen für den Urlaub — hören, lesen, üben</div>';

    html += '<div class="szenarien-grid">';
    KATEGORIEN.forEach(function(kat) {
      html += '<div class="szenario-card" onclick="App.showView(\'phrasen-kat\', \'' + kat.id + '\')">';
      html += '<div class="sz-icon">' + kat.icon + '</div>';
      html += '<div class="sz-info">';
      html += '<div class="sz-titel">' + kat.titel + '</div>';
      html += '<div class="sz-beschreibung">' + kat.phrasen.length + ' Phrasen</div>';
      html += '</div>';
      html += '</div>';
    });
    html += '</div>';

    html += '</div>';
    container.innerHTML = html;
  }

  // ─── EINZELNE KATEGORIE ──────────────────────────────────────────────────────

  function renderKategorie(container, katId) {
    var kat = null;
    KATEGORIEN.forEach(function(k) { if (k.id === katId) kat = k; });
    if (!kat) { container.innerHTML = '<p>Kategorie nicht gefunden.</p>'; return; }

    _currentKat = kat;

    var html = '<div class="sz-view">';

    // Header
    html += '<div class="sz-header-box">';
    html += '<span class="sz-header-icon">' + kat.icon + '</span>';
    html += '<div>';
    html += '<div class="sz-header-titel">' + kat.titel + '</div>';
    html += '<div class="sz-header-desc">' + kat.phrasen.length + ' Überlebensphrasen</div>';
    html += '</div>';
    html += '</div>';

    // Phrasen-Liste
    html += '<div class="phrasen-liste">';
    kat.phrasen.forEach(function(p, i) {
      html += '<div class="phrase-card">';
      html += '<div class="phrase-main">';
      html += '<div class="phrase-fr">' + p.fr + '</div>';
      html += '<button class="sz-tts-btn" onclick="Phrasen.play(' + i + ')" title="Vorlesen">🔊</button>';
      html += '</div>';
      html += '<div class="phrase-de">' + p.de + '</div>';
      if (p.kontext) html += '<div class="phrase-kontext">💡 ' + p.kontext + '</div>';
      html += '</div>';
    });
    html += '</div>';

    // Quiz-Button
    html += '<button class="btn btn-primary sz-start-btn" onclick="Phrasen.startQuiz()">🧠 Phrasen-Quiz starten</button>';

    html += '</div>';
    container.innerHTML = html;
  }

  function play(index) {
    if (_currentKat && _currentKat.phrasen[index] && TTS.supported()) {
      TTS.speak(_currentKat.phrasen[index].fr);
    }
  }

  // ─── QUIZ ────────────────────────────────────────────────────────────────────

  function startQuiz() {
    if (!_currentKat) return;
    _quizPhrases = _currentKat.phrasen.slice();
    _shuffle(_quizPhrases);
    _quizCur     = 0;
    _quizCorrect = 0;
    _quizTotal   = _quizPhrases.length;
    _locked      = false;
    _renderQuiz();
  }

  function _renderQuiz() {
    var container = document.getElementById('mainContent');
    if (!container) return;

    if (_quizCur >= _quizTotal) { _renderQuizScore(container); return; }

    var p    = _quizPhrases[_quizCur];
    _locked  = false;

    var pct  = Math.round((_quizCur / _quizTotal) * 100);
    var html = '<div class="exercise-view">';

    // Fortschrittsbalken
    html += '<div class="ex-progress">';
    html += '<div class="ex-progress-bar"><div class="ex-progress-fill" style="width:' + pct + '%"></div></div>';
    html += '<span class="ex-progress-text">' + (_quizCur + 1) + ' / ' + _quizTotal + '</span>';
    html += '</div>';

    // Aufgabe: DE → FR tippen
    html += '<div class="ex-card">';
    html += '<div class="ex-direction">🇩🇪 → 🇫🇷</div>';
    html += '<div class="ex-prompt">' + p.de + '</div>';
    if (p.kontext) html += '<div class="phrase-kontext-quiz">💡 ' + p.kontext + '</div>';

    // Input
    var micHtml = (typeof SpeechInput !== 'undefined' && SpeechInput.supported())
      ? '<button class="speech-mic-btn" id="micBtn" onclick="Phrasen.startMic()" title="Sprechen">🎙️</button>'
      : '';
    html += '<div class="input-with-mic">';
    html += '<input type="text" id="exInput" class="ex-input" ' +
            'autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" ' +
            'lang="fr" placeholder="Französisch eingeben…">';
    html += micHtml;
    html += '</div>';
    html += '<button class="btn btn-primary ex-btn-check" onclick="Phrasen.pruefen()">Prüfen ✓</button>';
    html += '</div>';

    // Score-Leiste
    html += '<div class="ex-score-bar">';
    html += '<span class="ex-score-correct">✅ ' + _quizCorrect + '</span>';
    html += '<span class="ex-score-wrong">❌ ' + (_quizCur - _quizCorrect) + '</span>';
    html += '</div>';

    html += '</div>';
    container.innerHTML = html;

    var inp = document.getElementById('exInput');
    if (inp) {
      inp.focus();
      inp.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') Phrasen.pruefen();
      });
    }
  }

  function pruefen() {
    if (_locked) return;
    var inp = document.getElementById('exInput');
    if (!inp || !inp.value.trim()) return;

    var p         = _quizPhrases[_quizCur];
    var isCorrect = _compare(inp.value, p.fr);

    _locked = true;
    if (isCorrect) _quizCorrect++;

    var card = document.querySelector('.ex-card');
    if (card) {
      var fb = isCorrect
        ? '<div class="ex-feedback ex-feedback-correct">✅ Richtig!</div>'
        : '<div class="ex-feedback ex-feedback-wrong">❌ Richtig wäre: <strong>' + p.fr + '</strong></div>';
      if (!isCorrect) {
        fb += '<button class="btn btn-primary ex-btn-weiter-wrong" onclick="Phrasen.weiter()">Weiter →</button>';
      }
      card.insertAdjacentHTML('beforeend', fb);
    }

    if (TTS.supported()) TTS.speak(p.fr);

    if (isCorrect) {
      setTimeout(function() { _quizCur++; _locked = false; _renderQuiz(); }, 1200);
    }
  }

  function weiter() {
    _quizCur++;
    _locked = false;
    _renderQuiz();
  }

  function _renderQuizScore(container) {
    var pct = _quizTotal > 0 ? Math.round((_quizCorrect / _quizTotal) * 100) : 0;

    var emoji, msg;
    if      (pct >= 90) { emoji = '🌟'; msg = 'Ausgezeichnet! Die Phrasen sitzen!'; }
    else if (pct >= 70) { emoji = '🎉'; msg = 'Gut gemacht!'; }
    else if (pct >= 50) { emoji = '👍'; msg = 'Weiter üben — wird!'; }
    else                { emoji = '💪'; msg = 'Lies die Phrasen nochmal durch!'; }

    var html = '<div class="score-view">';
    html += '<div class="score-emoji">' + emoji + '</div>';
    html += '<h2 class="score-msg">' + msg + '</h2>';
    html += '<div class="score-circle">';
    html += '<div class="score-pct">' + pct + '%</div>';
    html += '<div class="score-detail">' + _quizCorrect + ' / ' + _quizTotal + ' richtig</div>';
    html += '</div>';
    html += '<div class="score-buttons">';
    html += '<button class="btn btn-secondary" onclick="Phrasen.startQuiz()">🔄 Nochmal</button>';
    html += '<button class="btn btn-primary" onclick="App.showView(\'phrasen\')">← Alle Kategorien</button>';
    html += '</div>';
    html += '</div>';
    container.innerHTML = html;
  }

  // ─── MIKROFON ────────────────────────────────────────────────────────────────

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

  // ─── HELPERS ─────────────────────────────────────────────────────────────────

  function _compare(user, correct) {
    var norm = function(s) {
      return s
        .replace(/[\u2018\u2019\u201A\u201B\uFF07']/g, '')
        .toLowerCase().trim()
        .replace(/[.,!?;:«»"…\-–—()[\]{}]/g, '')
        .replace(/\s+/g, ' ').trim()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/\u00e7/g, 'c').replace(/\u0153/g, 'oe').replace(/\u00e6/g, 'ae');
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

  // ─── PUBLIC ──────────────────────────────────────────────────────────────────

  return {
    renderList      : renderList,
    renderKategorie : renderKategorie,
    play            : play,
    startQuiz       : startQuiz,
    pruefen         : pruefen,
    weiter          : weiter,
    startMic        : startMic
  };

})();
