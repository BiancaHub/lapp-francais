/* L'App fran\u00e7ais - Einstufungstest */
var Einstufung = {
    questions: [],
    current: 0,
    answers: [],
    locked: false,

    start: function() {
        Einstufung.questions = EINSTUFUNG_FRAGEN.slice();
        Einstufung.current = 0;
        Einstufung.answers = [];
        Einstufung.locked = false;
        App.showSection('einstufung');
        Einstufung.renderQuestion();
    },

    renderQuestion: function() {
        var el = document.getElementById('einstufungContent');
        if (!el) return;
        var q = Einstufung.questions[Einstufung.current];
        var total = Einstufung.questions.length;
        var pct = Math.round(((Einstufung.current) / total) * 100);

        var html = '<div class="quiz-container">';
        html += '<div class="quiz-progress">';
        html += '<div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:' + pct + '%"></div></div>';
        html += '<div class="quiz-progress-text">Frage ' + (Einstufung.current + 1) + ' von ' + total + '</div>';
        html += '</div>';
        html += '<div class="quiz-question">';
        html += '<h3>' + (q.level || '') + '</h3>';
        html += '<div class="question-word">' + q.frage + '</div>';
        html += '</div>';
        html += '<div class="quiz-options">';
        for (var i = 0; i < q.optionen.length; i++) {
            html += '<button class="quiz-option" onclick="Einstufung.answer(' + i + ')">' + q.optionen[i] + '</button>';
        }
        html += '</div>';
        html += '</div>';
        el.innerHTML = html;
    },

    answer: function(idx) {
        if (Einstufung.locked) return;
        Einstufung.locked = true;
        var q = Einstufung.questions[Einstufung.current];
        var correct = q.antwort;
        var isCorrect = (idx === correct);
        Einstufung.answers.push({ level: q.level, correct: isCorrect });

        var options = document.querySelectorAll('.quiz-option');
        for (var i = 0; i < options.length; i++) {
            options[i].classList.add('disabled');
            if (i === correct) {
                options[i].classList.add('correct');
            } else if (i === idx && !isCorrect) {
                options[i].classList.add('wrong');
            }
        }

        setTimeout(function() {
            Einstufung.current++;
            Einstufung.locked = false;
            if (Einstufung.current < Einstufung.questions.length) {
                Einstufung.renderQuestion();
            } else {
                Einstufung.showResult();
            }
        }, 800);
    },

    showResult: function() {
        var a1 = 0, a2 = 0, b1 = 0;
        for (var i = 0; i < Einstufung.answers.length; i++) {
            var a = Einstufung.answers[i];
            if (a.correct) {
                if (a.level === 'A1') a1++;
                else if (a.level === 'A2') a2++;
                else if (a.level === 'B1') b1++;
            }
        }

        var level = 'A1';
        if (b1 >= 3) {
            level = 'B1';
        } else if (a2 >= 4) {
            level = 'A2';
        }

        var total = Einstufung.answers.length;
        var correctCount = a1 + a2 + b1;

        App.state.level = level;
        App.state.testDone = true;
        App.saveState();

        var el = document.getElementById('einstufungContent');
        if (!el) return;

        var html = '<div class="result-container">';
        html += '<div class="result-icon">\uD83C\uDF93</div>';
        html += '<h2>Dein Ergebnis</h2>';
        html += '<div class="result-score">' + correctCount + ' / ' + total + '</div>';
        html += '<p>Richtige Antworten</p>';
        html += '<div style="background:#4A6FA5;color:white;display:inline-block;padding:12px 32px;border-radius:16px;font-size:24px;font-weight:700;margin-bottom:24px;">Level: ' + level + '</div>';
        html += '<br><br>';
        html += '<button class="btn btn-primary" onclick="App.goHome()">Weiter</button>';
        html += '</div>';
        el.innerHTML = html;
    }
};
