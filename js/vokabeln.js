/* L'App français - Vokabeltrainer mit Multiple Choice */
var Vokabeltrainer = {
    cards: [],
    current: 0,
    mode: 'fr-de',
    currentTopic: null,
    correctCount: 0,
    wrongCount: 0,
    locked: false,
    currentFrWord: '',  // für TTS (vermeidet Apostroph-Probleme in onclick)

    showTopics: function() {
        App.showSection('vokabeln');
        var el = document.getElementById('vokabelnContent');
        if (!el) return;

        var html = '<div class="mode-toggle">';
        html += '<button class="btn btn-sm ' + (Vokabeltrainer.mode === 'fr-de' ? 'active' : 'btn-secondary') + '" onclick="Vokabeltrainer.setMode(\'fr-de\')">FR \u2192 DE</button>';
        html += '<button class="btn btn-sm ' + (Vokabeltrainer.mode === 'de-fr' ? 'active' : 'btn-secondary') + '" onclick="Vokabeltrainer.setMode(\'de-fr\')">DE \u2192 FR</button>';
        if (TTS.supported()) {
            html += '<button class="btn btn-sm ' + (Vokabeltrainer.mode === 'hoeren' ? 'active' : 'btn-secondary') + '" onclick="Vokabeltrainer.setMode(\'hoeren\')">\uD83D\uDD0A H\u00f6ren</button>';
        }
        html += '<button class="btn btn-sm ' + (Vokabeltrainer.mode === 'uebungen' ? 'active' : 'btn-secondary') + '" onclick="Vokabeltrainer.setMode(\'uebungen\')">\u270F\uFE0F \u00DCben</button>';
        html += '</div>';

        // Level-Anzeige
        var level = App.state.level || 'A1';
        html += '<div class="level-badge">Dein Level: <strong>' + level + '</strong></div>';

        var allDue = Vokabeltrainer.getDueWords(App.getAllWords());
        if (allDue.length > 0) {
            html += '<div class="all-words-btn"><button class="btn btn-primary btn-sm" onclick="Vokabeltrainer.startAll()">' + allDue.length + ' f\u00e4llige W\u00f6rter wiederholen</button></div>';
        }

        // Themen nach Level sortieren
        var levelOrder = { 'A1': 1, 'A2': 2, 'B1': 3, 'B2': 4, 'C1': 5, 'C2': 6 };
        var currentLevelNum = levelOrder[level] || 1;

        html += '<div class="topic-grid">';
        var keys = Object.keys(VOKABELN);
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            var topic = VOKABELN[key];
            var topicLevel = topic.level || 'A1';
            var topicLevelNum = levelOrder[topicLevel] || 1;
            var isLocked = false; // Keine Sperre — alle Themen immer zugänglich
            var words = topic.words;
            var learned = 0;
            for (var j = 0; j < words.length; j++) {
                var sr = App.state.sr[words[j].id];
                if (sr && sr.repetitions > 0) learned++;
            }
            var pct = words.length > 0 ? Math.round((learned / words.length) * 100) : 0;
            var due = Vokabeltrainer.getDueWords(words).length;

            var cardClass = 'topic-card';
            if (isLocked) cardClass += ' topic-locked';

            if (isLocked) {
                html += '<div class="' + cardClass + '">';
            } else {
                html += '<div class="' + cardClass + '" onclick="Vokabeltrainer.startTopic(\'' + key + '\')">';
            }

            html += '<div class="topic-icon">' + (topic.icon || '\uD83D\uDCD6') + '</div>';
            html += '<div class="topic-info">';
            html += '<div class="topic-name">' + topic.name + ' <span class="topic-level-tag level-' + topicLevel + '">' + topicLevel + '</span></div>';
            if (isLocked) {
                html += '<div class="topic-count">\uD83D\uDD12 Ab Level ' + topicLevel + '</div>';
            } else {
                html += '<div class="topic-count">' + learned + '/' + words.length + ' gelernt';
                if (due > 0) html += ' \u00B7 ' + due + ' f\u00e4llig';
                html += '</div>';
            }
            html += '</div>';

            if (!isLocked) {
                html += '<svg class="topic-progress-ring" viewBox="0 0 44 44"><circle cx="22" cy="22" r="18" fill="none" stroke="#e0e0e0" stroke-width="4"/>';
                var circ = 2 * 3.14159 * 18;
                var offset = circ - (pct / 100) * circ;
                html += '<circle cx="22" cy="22" r="18" fill="none" stroke="#4A6FA5" stroke-width="4" stroke-dasharray="' + circ + '" stroke-dashoffset="' + offset + '" transform="rotate(-90 22 22)"/>';
                html += '<text x="22" y="26" text-anchor="middle" font-size="11" fill="#4A6FA5" font-weight="600">' + pct + '%</text></svg>';
            } else {
                html += '<div class="topic-lock-icon">\uD83D\uDD12</div>';
            }

            html += '</div>';
        }
        html += '</div>';
        el.innerHTML = html;
    },

    setMode: function(mode) {
        Vokabeltrainer.mode = mode;
        Vokabeltrainer.showTopics();
    },

    startTopic: function(key) {
        if (Vokabeltrainer.mode === 'uebungen') {
            VokabelUebungen.startTopic(key);
            return;
        }
        Vokabeltrainer.currentTopic = key;
        var topic = VOKABELN[key];
        if (!topic) return;
        var due = Vokabeltrainer.getDueWords(topic.words);
        var cards = due.length > 0 ? due : topic.words.slice();
        Vokabeltrainer.shuffle(cards);
        Vokabeltrainer.cards = cards.slice(0, 10); // Max 10 pro Runde
        Vokabeltrainer.current = 0;
        Vokabeltrainer.correctCount = 0;
        Vokabeltrainer.wrongCount = 0;
        Vokabeltrainer.locked = false;
        App.showSection('flashcard');
        Vokabeltrainer.renderCard();
    },

    startAll: function() {
        Vokabeltrainer.currentTopic = null;
        var due = Vokabeltrainer.getDueWords(App.getAllWords());
        Vokabeltrainer.shuffle(due);
        Vokabeltrainer.cards = due.slice(0, 10);
        Vokabeltrainer.current = 0;
        Vokabeltrainer.correctCount = 0;
        Vokabeltrainer.wrongCount = 0;
        Vokabeltrainer.locked = false;
        App.showSection('flashcard');
        Vokabeltrainer.renderCard();
    },

    getDistractors: function(correctCard, answerKey) {
        // Hole 3 falsche Antworten aus allen Wörtern
        var allWords = App.getAllWords();
        var correctAnswer = correctCard[answerKey];
        var distractors = [];
        var used = {};
        used[correctAnswer] = true;

        // Bevorzugt aus gleichem Thema nehmen
        var topicWords = [];
        if (Vokabeltrainer.currentTopic && VOKABELN[Vokabeltrainer.currentTopic]) {
            topicWords = VOKABELN[Vokabeltrainer.currentTopic].words;
        }

        // Erst aus Thema, dann aus allen
        var sources = [topicWords, allWords];
        for (var s = 0; s < sources.length && distractors.length < 3; s++) {
            var shuffled = sources[s].slice();
            Vokabeltrainer.shuffle(shuffled);
            for (var i = 0; i < shuffled.length && distractors.length < 3; i++) {
                var word = shuffled[i][answerKey];
                if (!used[word]) {
                    used[word] = true;
                    distractors.push(word);
                }
            }
        }
        return distractors;
    },

    renderCard: function() {
        var el = document.getElementById('flashcardContent');
        if (!el) return;
        if (Vokabeltrainer.current >= Vokabeltrainer.cards.length) {
            Vokabeltrainer.showDone();
            return;
        }
        var card = Vokabeltrainer.cards[Vokabeltrainer.current];
        var questionKey, answerKey;
        if (Vokabeltrainer.mode === 'fr-de' || Vokabeltrainer.mode === 'hoeren') {
            questionKey = 'fr';
            answerKey = 'de';
        } else {
            questionKey = 'de';
            answerKey = 'fr';
        }

        var question = card[questionKey];
        var correctAnswer = card[answerKey];
        var distractors = Vokabeltrainer.getDistractors(card, answerKey);

        // TTS-Wort zwischenspeichern (vermeidet Apostroph-Probleme in onclick)
        Vokabeltrainer.currentFrWord = card.fr;

        // Antworten mischen
        var options = [correctAnswer].concat(distractors);
        Vokabeltrainer.shuffle(options);
        var correctIdx = options.indexOf(correctAnswer);

        var pct = Math.round((Vokabeltrainer.current / Vokabeltrainer.cards.length) * 100);

        var html = '<div class="quiz-container">';
        // Fortschrittsbalken
        html += '<div class="quiz-progress">';
        html += '<div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:' + pct + '%"></div></div>';
        html += '<div class="quiz-progress-text">Karte ' + (Vokabeltrainer.current + 1) + ' von ' + Vokabeltrainer.cards.length + '</div>';
        html += '</div>';

        // Frage
        html += '<div class="quiz-question">';
        if (Vokabeltrainer.mode === 'hoeren') {
            // Hör-Modus: kein Text, nur großer Play-Button
            html += '<div class="quiz-direction">\uD83D\uDD0A \u2192 \uD83C\uDDE9\uD83C\uDDEA</div>';
            html += '<div class="hoer-mode">';
            html += '<button class="audio-btn-large" onclick="TTS.speak(Vokabeltrainer.currentFrWord)">\uD83D\uDD0A</button>';
            html += '<div class="hoer-hint">Nochmal tippen zum Wiederholen</div>';
            html += '</div>';
        } else {
            // Normal-Modus: Text + optionaler TTS-Button
            html += '<div class="quiz-direction">' + (Vokabeltrainer.mode === 'fr-de' ? '\uD83C\uDDEB\uD83C\uDDF7 \u2192 \uD83C\uDDE9\uD83C\uDDEA' : '\uD83C\uDDE9\uD83C\uDDEA \u2192 \uD83C\uDDEB\uD83C\uDDF7') + '</div>';
            html += '<div class="question-word">' + question;
            if (Vokabeltrainer.mode === 'fr-de' && TTS.supported()) {
                html += ' <button class="audio-btn" onclick="TTS.speak(Vokabeltrainer.currentFrWord)" title="Aussprache h\u00f6ren">\uD83D\uDD0A</button>';
            }
            html += '</div>';
        }
        html += '</div>';

        // Spracheingabe oder Multiple Choice?
        var useHoerSpeech = (Vokabeltrainer.mode === 'hoeren') && SpeechInput.supported();
        var useSpeech = !useHoerSpeech && (Vokabeltrainer.mode === 'de-fr') && SpeechInput.shouldUseSpeech();

        if (useHoerSpeech) {
            // Hören + Sprechen: Wort wurde gehört → deutsche Antwort sprechen
            Vokabeltrainer.currentCorrectAnswer = correctAnswer; // = de
            html += '<div class="speech-container">';
            html += '<div class="speech-hint">Sprich die deutsche \u00dcbersetzung:</div>';
            html += '<button class="speech-mic-btn" onclick="Vokabeltrainer.startHoerSpeech()">\uD83C\uDF99\uFE0F</button>';
            html += '<div class="speech-status" id="speechStatus">Tippe auf das Mikrofon</div>';
            html += '<div class="speech-result" id="speechResult"></div>';
            html += '</div>';
        } else if (useSpeech) {
            // DE→FR Spracheingabe: französische Antwort sprechen
            Vokabeltrainer.currentCorrectAnswer = correctAnswer;
            html += '<div class="speech-container">';
            html += '<div class="speech-hint">Sprich die franz\u00f6sische \u00dcbersetzung:</div>';
            html += '<button class="speech-mic-btn" onclick="Vokabeltrainer.startSpeech()">\uD83C\uDF99\uFE0F</button>';
            html += '<div class="speech-status" id="speechStatus">Tippe auf das Mikrofon</div>';
            html += '<div class="speech-result" id="speechResult"></div>';
            html += '</div>';
        } else {
            // Normal: Multiple Choice
            html += '<div class="quiz-options">';
            for (var i = 0; i < options.length; i++) {
                html += '<button class="quiz-option" data-idx="' + i + '" data-correct="' + correctIdx + '" onclick="Vokabeltrainer.answer(' + i + ',' + correctIdx + ')">' + options[i] + '</button>';
            }
            html += '</div>';
        }

        // Score + Überspringen
        html += '<div class="quiz-footer">';
        html += '<div class="vocab-score">';
        html += '<span class="score-correct">\u2705 ' + Vokabeltrainer.correctCount + '</span>';
        html += '<span class="score-wrong">\u274C ' + Vokabeltrainer.wrongCount + '</span>';
        html += '</div>';
        html += '<button class="btn-skip" onclick="Vokabeltrainer.skip()" title="\u00DCberspringen">\u23ED\uFE0F \u00DCberspringen</button>';
        html += '</div>';

        html += '</div>';
        el.innerHTML = html;

        // Im Hör-Modus: Wort automatisch abspielen
        if (Vokabeltrainer.mode === 'hoeren' && TTS.supported()) {
            setTimeout(function() { TTS.speak(card.fr); }, 400);
        }
    },

    currentCorrectAnswer: '',

    startSpeech: function() {
        if (Vokabeltrainer.locked) return;
        var statusEl = document.getElementById('speechStatus');
        if (statusEl) statusEl.textContent = '\uD83D\uDD34 H\u00f6rt zu...';

        SpeechInput.start(function(results, error) {
            Vokabeltrainer.handleSpeechResult(results, error);
        }, 'fr-FR');
    },

    startHoerSpeech: function() {
        if (Vokabeltrainer.locked) return;
        var statusEl = document.getElementById('speechStatus');
        if (statusEl) statusEl.textContent = '\uD83D\uDD34 H\u00f6rt zu...';

        SpeechInput.start(function(results, error) {
            Vokabeltrainer.handleHoerSpeechResult(results, error);
        }, 'de-DE');
    },

    handleHoerSpeechResult: function(results, error) {
        if (Vokabeltrainer.locked) return;
        Vokabeltrainer.locked = true;
        var card = Vokabeltrainer.cards[Vokabeltrainer.current];
        var statusEl = document.getElementById('speechStatus');
        var resultEl = document.getElementById('speechResult');

        if (error) {
            Vokabeltrainer.locked = false;
            if (statusEl) statusEl.textContent = 'Nicht verstanden \u2014 nochmal versuchen oder \u00fcberspringen';
            return;
        }

        var isCorrect = SpeechInput.checkAnswerDE(results, Vokabeltrainer.currentCorrectAnswer);
        var spoken = results && results[0] ? results[0] : '(nichts erkannt)';

        if (isCorrect) {
            Vokabeltrainer.correctCount++;
            Vokabeltrainer.updateSR(card.id, 4);
            if (resultEl) resultEl.innerHTML = '<div class="speech-correct">\u2705 Richtig! \u201E' + spoken + '\u201C</div>';
        } else {
            Vokabeltrainer.wrongCount++;
            Vokabeltrainer.updateSR(card.id, 1);
            if (resultEl) resultEl.innerHTML = '<div class="speech-wrong">\u274C Du sagtest: \u201E' + spoken + '\u201C<br>Richtig: <strong>' + Vokabeltrainer.currentCorrectAnswer + '</strong></div>';
        }
        App.recordPractice();

        // TTS: französisches Wort nochmal vorspielen zur Bestätigung
        if (TTS.supported()) {
            TTS.speak(card.fr);
        }

        setTimeout(function() {
            Vokabeltrainer.current++;
            Vokabeltrainer.locked = false;
            Vokabeltrainer.renderCard();
        }, isCorrect ? 800 : 2500);
    },

    handleSpeechResult: function(results, error) {
        if (Vokabeltrainer.locked) return;
        Vokabeltrainer.locked = true;
        var card = Vokabeltrainer.cards[Vokabeltrainer.current];
        var statusEl = document.getElementById('speechStatus');
        var resultEl = document.getElementById('speechResult');

        if (error) {
            // Fehler bei Erkennung — nicht als falsch werten
            Vokabeltrainer.locked = false;
            if (statusEl) statusEl.textContent = 'Nicht verstanden \u2014 nochmal versuchen oder \u00fcberspringen';
            return;
        }

        var isCorrect = SpeechInput.checkAnswer(results, Vokabeltrainer.currentCorrectAnswer);
        var spoken = results && results[0] ? results[0] : '(nichts erkannt)';

        if (isCorrect) {
            Vokabeltrainer.correctCount++;
            Vokabeltrainer.updateSR(card.id, 4);
            if (resultEl) resultEl.innerHTML = '<div class="speech-correct">\u2705 Richtig! \u201E' + spoken + '\u201C</div>';
        } else {
            Vokabeltrainer.wrongCount++;
            Vokabeltrainer.updateSR(card.id, 1);
            if (resultEl) resultEl.innerHTML = '<div class="speech-wrong">\u274C Du sagtest: \u201E' + spoken + '\u201C<br>Richtig: <strong>' + Vokabeltrainer.currentCorrectAnswer + '</strong></div>';
        }
        App.recordPractice();

        // TTS: richtige Aussprache vorspielen
        if (TTS.supported()) {
            TTS.speak(Vokabeltrainer.currentCorrectAnswer);
        }

        setTimeout(function() {
            Vokabeltrainer.current++;
            Vokabeltrainer.locked = false;
            Vokabeltrainer.renderCard();
        }, isCorrect ? 800 : 2500);
    },

    skip: function() {
        if (Vokabeltrainer.locked) return;
        // Karte überspringen — kein SR-Update, kommt nächstes Mal wieder
        Vokabeltrainer.current++;
        Vokabeltrainer.renderCard();
    },

    answer: function(idx, correctIdx) {
        if (Vokabeltrainer.locked) return;
        Vokabeltrainer.locked = true;

        var isCorrect = (idx === correctIdx);
        var card = Vokabeltrainer.cards[Vokabeltrainer.current];

        if (isCorrect) {
            Vokabeltrainer.correctCount++;
            Vokabeltrainer.updateSR(card.id, 4); // Gut
        } else {
            Vokabeltrainer.wrongCount++;
            Vokabeltrainer.updateSR(card.id, 1); // Nochmal
        }
        App.recordPractice();

        // Buttons einfärben
        var options = document.querySelectorAll('.quiz-option');
        for (var i = 0; i < options.length; i++) {
            options[i].classList.add('disabled');
            if (i === correctIdx) {
                options[i].classList.add('correct');
            } else if (i === idx && !isCorrect) {
                options[i].classList.add('wrong');
            }
        }

        // Nächste Karte: richtig=schnell, falsch=2 Sek Korrektur zeigen
        setTimeout(function() {
            Vokabeltrainer.current++;
            Vokabeltrainer.locked = false;
            Vokabeltrainer.renderCard();
        }, isCorrect ? 400 : 2000);
    },

    updateSR: function(id, quality) {
        var sr = App.state.sr[id] || { ease: 2.5, interval: 0, repetitions: 0, nextReview: 0 };

        if (quality < 3) {
            sr.repetitions = 0;
            sr.interval = 1;
        } else {
            sr.repetitions++;
            if (sr.repetitions === 1) {
                sr.interval = 1;
            } else if (sr.repetitions === 2) {
                sr.interval = 6;
            } else {
                sr.interval = Math.round(sr.interval * sr.ease);
            }
        }

        sr.ease = sr.ease + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
        if (sr.ease < 1.3) sr.ease = 1.3;

        var now = new Date();
        now.setDate(now.getDate() + sr.interval);
        sr.nextReview = now.getTime();

        App.state.sr[id] = sr;
        App.saveState();
    },

    checkLevelUp: function() {
        var levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
        var currentLevel = App.state.level || 'A1';
        var currentIdx = levels.indexOf(currentLevel);
        if (currentIdx < 0 || currentIdx >= levels.length - 1) return null;

        // Zähle gelernte Wörter auf aktuellem Level
        var totalWords = 0;
        var learnedWords = 0;
        var keys = Object.keys(VOKABELN);
        for (var i = 0; i < keys.length; i++) {
            var topic = VOKABELN[keys[i]];
            if (topic.level === currentLevel) {
                var words = topic.words;
                for (var j = 0; j < words.length; j++) {
                    totalWords++;
                    var sr = App.state.sr[words[j].id];
                    if (sr && sr.repetitions >= 1) {
                        learnedWords++;
                    }
                }
            }
        }

        var learnedPct = totalWords > 0 ? (learnedWords / totalWords) * 100 : 0;

        // 80% gelernt = Level Up!
        if (learnedPct >= 80) {
            var newLevel = levels[currentIdx + 1];
            App.state.level = newLevel;
            App.saveState();
            return newLevel;
        }

        return null;
    },

    showDone: function() {
        var el = document.getElementById('flashcardContent');
        if (!el) return;
        var total = Vokabeltrainer.correctCount + Vokabeltrainer.wrongCount;
        var pct = total > 0 ? Math.round((Vokabeltrainer.correctCount / total) * 100) : 0;

        // Level-Up prüfen
        var newLevel = Vokabeltrainer.checkLevelUp();

        var emoji, msg;
        if (newLevel) {
            emoji = '\uD83C\uDF1F';
            msg = 'LEVEL UP! Du bist jetzt ' + newLevel + '!';
        } else if (pct >= 80) {
            emoji = '\uD83C\uDF89';
            msg = 'Super gemacht!';
        } else if (pct >= 50) {
            emoji = '\uD83D\uDC4D';
            msg = 'Gut, weiter so!';
        } else {
            emoji = '\uD83D\uDCAA';
            msg = '\u00dcbung macht den Meister!';
        }

        var html = '<div class="result-container">';
        html += '<div class="result-icon">' + emoji + '</div>';
        html += '<h2>' + msg + '</h2>';
        html += '<div class="result-score">' + Vokabeltrainer.correctCount + ' / ' + total + '</div>';
        html += '<p>richtige Antworten (' + pct + '%)</p>';

        if (newLevel) {
            html += '<div class="levelup-banner">';
            html += '<p>\uD83C\uDF89 Neue Themen freigeschaltet!</p>';
            html += '</div>';
        }

        html += '<div class="result-buttons">';
        html += '<button class="btn btn-primary" onclick="Vokabeltrainer.showTopics()" style="margin-right:8px">Zur\u00fcck zu Themen</button>';
        html += '<button class="btn btn-secondary" onclick="App.goHome()">Startseite</button>';
        html += '</div>';
        html += '</div>';
        el.innerHTML = html;
    },

    getDueWords: function(words) {
        var now = Date.now();
        var due = [];
        for (var i = 0; i < words.length; i++) {
            var sr = App.state.sr[words[i].id];
            if (sr && sr.nextReview && sr.nextReview <= now) {
                due.push(words[i]);
            }
        }
        return due;
    },

    shuffle: function(arr) {
        for (var i = arr.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
        }
        return arr;
    }
};
