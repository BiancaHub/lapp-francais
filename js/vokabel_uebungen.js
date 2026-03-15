/* L'App français - Vokabel-Übungen (Lückentext + Übersetzung) */
var VokabelUebungen = {
    cards: [],
    current: 0,
    correctCount: 0,
    wrongCount: 0,
    locked: false,
    currentTopic: null,
    currentCorrectAnswer: '',

    startTopic: function(key) {
        VokabelUebungen.currentTopic = key;
        var topic = VOKABELN[key];
        if (!topic) return;

        var words = topic.words.slice();
        VokabelUebungen.shuffle(words);
        VokabelUebungen.cards = words.slice(0, 10);
        VokabelUebungen.current = 0;
        VokabelUebungen.correctCount = 0;
        VokabelUebungen.wrongCount = 0;
        VokabelUebungen.locked = false;

        App.showSection('flashcard');
        VokabelUebungen.renderExercise();
    },

    renderExercise: function() {
        var el = document.getElementById('flashcardContent');
        if (!el) return;
        if (VokabelUebungen.current >= VokabelUebungen.cards.length) {
            VokabelUebungen.showDone();
            return;
        }
        // Abwechselnd: gerade = Lückentext (DE→FR), ungerade = Übersetzung (FR→DE)
        var card = VokabelUebungen.cards[VokabelUebungen.current];
        if (VokabelUebungen.current % 2 === 0) {
            VokabelUebungen.renderLueckentext(el, card);
        } else {
            VokabelUebungen.renderUebersetzung(el, card);
        }
    },

    renderLueckentext: function(el, card) {
        var allWords = App.getAllWords();
        var distractors = [];
        var used = {};
        used[card.fr] = true;
        var shuffled = allWords.slice();
        VokabelUebungen.shuffle(shuffled);
        for (var i = 0; i < shuffled.length && distractors.length < 3; i++) {
            if (!used[shuffled[i].fr]) {
                used[shuffled[i].fr] = true;
                distractors.push(shuffled[i].fr);
            }
        }
        var options = [card.fr].concat(distractors);
        VokabelUebungen.shuffle(options);
        var correctIdx = options.indexOf(card.fr);

        var pct = Math.round((VokabelUebungen.current / VokabelUebungen.cards.length) * 100);
        var html = VokabelUebungen.renderHeader(pct);

        html += '<div class="quiz-question" style="margin-bottom:16px">';
        html += '<div class="quiz-direction">\uD83C\uDDE9\uD83C\uDDEA \u2192 \uD83C\uDDEB\uD83C\uDDF7 L\u00FCckentext</div>';
        html += '<div class="question-word" style="font-size:22px">' + card.de + '</div>';
        html += '<div style="font-size:13px;color:#888;margin-top:8px">Wie hei\u00dft das auf Franz\u00f6sisch?</div>';
        html += '</div>';

        // Spracheingabe oder Multiple Choice?
        var useSpeech = SpeechInput.shouldUseSpeech();
        if (useSpeech) {
            VokabelUebungen.currentCorrectAnswer = card.fr;
            html += '<div class="speech-container">';
            html += '<div class="speech-hint">Sprich die franz\u00f6sische \u00dcbersetzung:</div>';
            html += '<button class="speech-mic-btn" onclick="VokabelUebungen.startSpeech()">\uD83C\uDF99\uFE0F</button>';
            html += '<div class="speech-status" id="speechStatus">Tippe auf das Mikrofon</div>';
            html += '<div class="speech-result" id="speechResult"></div>';
            html += '</div>';
        } else {
            html += '<div class="quiz-options">';
            for (var i = 0; i < options.length; i++) {
                html += '<button class="quiz-option" data-idx="' + i + '" onclick="VokabelUebungen.answer(' + i + ',' + correctIdx + ')">' + options[i] + '</button>';
            }
            html += '</div>';
        }
        html += VokabelUebungen.renderScore();
        el.innerHTML = html;
    },

    renderUebersetzung: function(el, card) {
        var allWords = App.getAllWords();
        var distractors = [];
        var used = {};
        used[card.de] = true;
        var shuffled = allWords.slice();
        VokabelUebungen.shuffle(shuffled);
        for (var i = 0; i < shuffled.length && distractors.length < 3; i++) {
            if (!used[shuffled[i].de]) {
                used[shuffled[i].de] = true;
                distractors.push(shuffled[i].de);
            }
        }
        var options = [card.de].concat(distractors);
        VokabelUebungen.shuffle(options);
        var correctIdx = options.indexOf(card.de);

        var pct = Math.round((VokabelUebungen.current / VokabelUebungen.cards.length) * 100);
        var html = VokabelUebungen.renderHeader(pct);

        html += '<div class="quiz-question" style="margin-bottom:16px">';
        html += '<div class="quiz-direction">\uD83C\uDDEB\uD83C\uDDF7 \u2192 \uD83C\uDDE9\uD83C\uDDEA \u00DCbersetzung</div>';
        html += '<div class="question-word">' + card.fr + '</div>';
        if (TTS.supported()) {
            html += '<div style="margin-top:8px"><button class="audio-btn" onclick="TTS.speak(VokabelUebungen.getCurrentFr())" title="Aussprache">\uD83D\uDD0A</button></div>';
        }
        html += '<div style="font-size:13px;color:#888;margin-top:8px">Was bedeutet das auf Deutsch?</div>';
        html += '</div>';

        html += '<div class="quiz-options">';
        for (var i = 0; i < options.length; i++) {
            html += '<button class="quiz-option" data-idx="' + i + '" onclick="VokabelUebungen.answer(' + i + ',' + correctIdx + ')">' + options[i] + '</button>';
        }
        html += '</div>';
        html += VokabelUebungen.renderScore();
        el.innerHTML = html;
    },

    getCurrentFr: function() {
        if (VokabelUebungen.current < VokabelUebungen.cards.length) {
            return VokabelUebungen.cards[VokabelUebungen.current].fr;
        }
        return '';
    },

    renderHeader: function(pct) {
        var html = '<div class="quiz-progress">';
        html += '<div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:' + pct + '%"></div></div>';
        html += '<div class="quiz-progress-text">Aufgabe ' + (VokabelUebungen.current + 1) + ' von ' + VokabelUebungen.cards.length + '</div>';
        html += '</div>';
        return html;
    },

    renderScore: function() {
        var html = '<div class="quiz-footer">';
        html += '<div class="vocab-score"><span class="score-correct">\u2705 ' + VokabelUebungen.correctCount + '</span><span class="score-wrong">\u274C ' + VokabelUebungen.wrongCount + '</span></div>';
        html += '<button class="btn-skip" onclick="VokabelUebungen.skip()" title="\u00DCberspringen">\u23ED\uFE0F \u00DCberspringen</button>';
        html += '</div>';
        return html;
    },

    startSpeech: function() {
        if (VokabelUebungen.locked) return;
        var statusEl = document.getElementById('speechStatus');
        if (statusEl) statusEl.textContent = '\uD83D\uDD34 H\u00f6rt zu...';
        SpeechInput.start(function(results, error) {
            VokabelUebungen.handleSpeechResult(results, error);
        });
    },

    handleSpeechResult: function(results, error) {
        if (VokabelUebungen.locked) return;
        VokabelUebungen.locked = true;
        var statusEl = document.getElementById('speechStatus');
        var resultEl = document.getElementById('speechResult');

        if (error) {
            VokabelUebungen.locked = false;
            if (statusEl) statusEl.textContent = 'Nicht verstanden \u2014 nochmal versuchen oder \u00fcberspringen';
            return;
        }

        var isCorrect = SpeechInput.checkAnswer(results, VokabelUebungen.currentCorrectAnswer);
        var spoken = results && results[0] ? results[0] : '(nichts erkannt)';

        if (isCorrect) {
            VokabelUebungen.correctCount++;
            if (resultEl) resultEl.innerHTML = '<div class="speech-correct">\u2705 Richtig! \u201E' + spoken + '\u201C</div>';
        } else {
            VokabelUebungen.wrongCount++;
            if (resultEl) resultEl.innerHTML = '<div class="speech-wrong">\u274C Du sagtest: \u201E' + spoken + '\u201C<br>Richtig: <strong>' + VokabelUebungen.currentCorrectAnswer + '</strong></div>';
        }
        App.recordPractice();

        if (TTS.supported()) {
            TTS.speak(VokabelUebungen.currentCorrectAnswer);
        }

        setTimeout(function() {
            VokabelUebungen.current++;
            VokabelUebungen.locked = false;
            VokabelUebungen.renderExercise();
        }, isCorrect ? 800 : 2500);
    },

    skip: function() {
        if (VokabelUebungen.locked) return;
        VokabelUebungen.current++;
        VokabelUebungen.renderExercise();
    },

    answer: function(idx, correctIdx) {
        if (VokabelUebungen.locked) return;
        VokabelUebungen.locked = true;

        var isCorrect = (idx === correctIdx);
        if (isCorrect) VokabelUebungen.correctCount++;
        else VokabelUebungen.wrongCount++;
        App.recordPractice();

        var options = document.querySelectorAll('.quiz-option');
        for (var i = 0; i < options.length; i++) {
            options[i].classList.add('disabled');
            var optIdx = parseInt(options[i].getAttribute('data-idx'));
            if (optIdx === correctIdx) options[i].classList.add('correct');
            else if (optIdx === idx && !isCorrect) options[i].classList.add('wrong');
        }

        setTimeout(function() {
            VokabelUebungen.current++;
            VokabelUebungen.locked = false;
            VokabelUebungen.renderExercise();
        }, isCorrect ? 400 : 2000);
    },

    showDone: function() {
        var el = document.getElementById('flashcardContent');
        if (!el) return;

        var total = VokabelUebungen.correctCount + VokabelUebungen.wrongCount;
        var pct = total > 0 ? Math.round((VokabelUebungen.correctCount / total) * 100) : 0;

        if (VokabelUebungen.currentTopic) {
            App.recordExerciseScore(VokabelUebungen.currentTopic, VokabelUebungen.correctCount, total);
        }

        var emoji, msg;
        if (pct >= 80) { emoji = '\uD83C\uDF89'; msg = 'Super gemacht!'; }
        else if (pct >= 50) { emoji = '\uD83D\uDC4D'; msg = 'Gut, weiter so!'; }
        else { emoji = '\uD83D\uDCAA'; msg = '\u00DCbung macht den Meister!'; }

        var html = '<div class="result-container">';
        html += '<div class="result-icon">' + emoji + '</div>';
        html += '<h2>' + msg + '</h2>';
        html += '<div class="result-score">' + VokabelUebungen.correctCount + ' / ' + total + '</div>';
        html += '<p>richtige Antworten (' + pct + '%)</p>';
        html += '<div class="result-buttons">';
        html += '<button class="btn btn-primary" onclick="Vokabeltrainer.showTopics()" style="margin-right:8px">Andere Themen</button>';
        html += '<button class="btn btn-secondary" onclick="App.goHome()">Startseite</button>';
        html += '</div></div>';
        el.innerHTML = html;
    },

    shuffle: function(arr) {
        for (var i = arr.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
        }
        return arr;
    }
};
