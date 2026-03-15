/* L'App fran\u00e7ais - App Core */
var App = {
    state: {
        level: null,
        testDone: false,
        streak: 0,
        lastPractice: null,
        sr: {},
        exerciseScores: {},
        lektionenDone: {},
        grammatikStatus: {}
    },

    loadState: function() {
        try {
            var saved = localStorage.getItem('lappfrancais_state');
            if (saved) {
                var parsed = JSON.parse(saved);
                App.state = parsed;
            }
        } catch(e) {
            console.log('State load error', e);
        }
        if (!App.state.sr) App.state.sr = {};
        if (!App.state.exerciseScores) App.state.exerciseScores = {};
        if (!App.state.lektionenDone) App.state.lektionenDone = {};
        if (!App.state.grammatikStatus) App.state.grammatikStatus = {};

        // Server-Sync: Fortschritt vom Server holen und zusammenf\u00fchren
        App.syncFromServer();
    },

    saveState: function() {
        try {
            localStorage.setItem('lappfrancais_state', JSON.stringify(App.state));
        } catch(e) {
            console.log('State save error', e);
        }
        // Zum Server synken (gedrosselt: max alle 5 Sekunden)
        if (!App._syncTimer) {
            App._syncTimer = setTimeout(function() {
                App.syncToServer();
                App._syncTimer = null;
            }, 5000);
        }
    },
    _syncTimer: null,

    // Sync-URL ermitteln: Handy-Server l\u00e4uft immer auf Port 8767
    getSyncUrl: function(path) {
        // Wenn wir schon auf dem Handy-Server sind (Port 8767), relativ
        if (window.location.port === '8767') return path;
        // Sonst: absolut zu localhost:8767 (Desktop file:// oder anderer Server)
        return 'http://localhost:8767' + path;
    },

    // Fortschritt vom Server laden und mit lokalem State zusammenf\u00fchren
    syncFromServer: function() {
        try {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', App.getSyncUrl('/api/state'), true);
            xhr.timeout = 2000;
            xhr.onload = function() {
                if (xhr.status === 200) {
                    try {
                        var serverState = JSON.parse(xhr.responseText);
                        if (serverState && serverState.sr) {
                            App.mergeState(serverState);
                            // Nur in localStorage speichern, NICHT nochmal syncToServer
                            // (sonst Endlosschleife)
                            try {
                                localStorage.setItem('lappfrancais_state', JSON.stringify(App.state));
                            } catch(e) {}
                            App.syncToServer(); // Merged state zur\u00fcck zum Server
                            App.goHome();
                        } else if (!serverState.sr) {
                            // Server hat leeren State \u2014 lokalen hochladen
                            App.syncToServer();
                        }
                    } catch(e) { console.log('Sync parse error', e); }
                }
            };
            xhr.onerror = function() {}; // Server nicht erreichbar = OK
            xhr.send();
        } catch(e) {}
    },

    // Lokalen State zum Server hochladen
    syncToServer: function() {
        try {
            var xhr = new XMLHttpRequest();
            xhr.open('POST', App.getSyncUrl('/api/state'), true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.timeout = 2000;
            xhr.onerror = function() {};
            xhr.send(JSON.stringify(App.state));
        } catch(e) {}
    },

    // Zwei States intelligent zusammenf\u00fchren (behalt das Bessere)
    mergeState: function(remote) {
        if (!remote) return;
        var local = App.state;

        // Level: das h\u00f6here behalten
        var levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
        if (remote.level && levels.indexOf(remote.level) > levels.indexOf(local.level)) {
            local.level = remote.level;
        }
        if (remote.testDone) local.testDone = true;
        if ((remote.streak || 0) > (local.streak || 0)) local.streak = remote.streak;
        if (remote.lastPractice > local.lastPractice) local.lastPractice = remote.lastPractice;

        // SR-Daten: pro Wort das mit mehr Wiederholungen behalten
        if (remote.sr) {
            if (!local.sr) local.sr = {};
            var ids = Object.keys(remote.sr);
            for (var i = 0; i < ids.length; i++) {
                var id = ids[i];
                var remoteSR = remote.sr[id];
                var localSR = local.sr[id];
                if (!localSR || (remoteSR.repetitions || 0) > (localSR.repetitions || 0)) {
                    local.sr[id] = remoteSR;
                }
            }
        }

        // Exercise Scores: h\u00f6here Werte behalten
        if (remote.exerciseScores) {
            if (!local.exerciseScores) local.exerciseScores = {};
            var ekeys = Object.keys(remote.exerciseScores);
            for (var j = 0; j < ekeys.length; j++) {
                var ek = ekeys[j];
                var re = remote.exerciseScores[ek];
                var le = local.exerciseScores[ek];
                if (!le || (re.total || 0) > (le.total || 0)) {
                    local.exerciseScores[ek] = re;
                }
            }
        }

        // Lektionen: zusammenf\u00fchren
        if (remote.lektionenDone) {
            if (!local.lektionenDone) local.lektionenDone = {};
            var lkeys = Object.keys(remote.lektionenDone);
            for (var k = 0; k < lkeys.length; k++) {
                if (remote.lektionenDone[lkeys[k]]) {
                    local.lektionenDone[lkeys[k]] = true;
                }
            }
        }

        App.state = local;
    },

    updateStreak: function() {
        if (!App.state.lastPractice) return;
        var last = new Date(App.state.lastPractice);
        var now = new Date();
        var diffDays = Math.floor((now - last) / (1000 * 60 * 60 * 24));
        if (diffDays > 1) {
            App.state.streak = 0;
            App.saveState();
        }
    },

    recordExerciseScore: function(topicKey, correct, total) {
        if (!App.state.exerciseScores) App.state.exerciseScores = {};
        var prev = App.state.exerciseScores[topicKey] || { correct: 0, total: 0 };
        App.state.exerciseScores[topicKey] = { correct: prev.correct + correct, total: prev.total + total };
        App.saveState();
    },

    recordPractice: function() {
        var today = new Date().toISOString().split('T')[0];
        if (App.state.lastPractice !== today) {
            App.state.streak = (App.state.streak || 0) + 1;
            App.state.lastPractice = today;
            App.saveState();
        }
    },

    showSection: function(id) {
        var sections = document.querySelectorAll('.section');
        for (var i = 0; i < sections.length; i++) {
            sections[i].classList.remove('active');
        }
        var target = document.getElementById(id);
        if (target) target.classList.add('active');

        var backBtn = document.getElementById('backBtn');
        if (backBtn) {
            if (id === 'home') {
                backBtn.classList.remove('visible');
            } else {
                backBtn.classList.add('visible');
            }
        }

        var badge = document.getElementById('levelBadge');
        if (badge) {
            badge.textContent = App.state.level || '?';
        }
    },

    goHome: function() {
        App.renderHome();
        App.showSection('home');
    },

    renderHome: function() {
        var stats = App.getStats();
        var el = document.getElementById('homeStats');
        if (el) {
            var lektionenCount = 0;
            if (App.state.lektionenDone) {
                var lkeys = Object.keys(App.state.lektionenDone);
                for (var li = 0; li < lkeys.length; li++) {
                    if (App.state.lektionenDone[lkeys[li]]) lektionenCount++;
                }
            }
            el.innerHTML = '<div class="stat-item"><div class="stat-value">' + stats.learned + '</div><div class="stat-label">W\u00f6rter gelernt</div></div>' +
                '<div class="stat-item"><div class="stat-value">' + lektionenCount + '</div><div class="stat-label">Lektionen</div></div>' +
                '<div class="stat-item"><div class="stat-value">' + App.state.streak + '</div><div class="stat-label">Tage-Streak</div></div>';
        }

        // Level-Übersicht rendern
        App.renderLevelProgress();

        var testCard = document.getElementById('cardTest');
        if (testCard) {
            var sub = testCard.querySelector('.sub');
            if (sub) {
                if (App.state.testDone) {
                    sub.textContent = 'Dein Level: ' + (App.state.level || '?');
                } else {
                    sub.textContent = 'Finde dein Level';
                }
            }
        }
    },

    getStats: function() {
        var learned = 0;
        var topicCount = 0;
        var keys = Object.keys(VOKABELN);
        for (var i = 0; i < keys.length; i++) {
            topicCount++;
            var words = VOKABELN[keys[i]].words;
            for (var j = 0; j < words.length; j++) {
                var srData = App.state.sr[words[j].id];
                if (srData && srData.repetitions > 0) {
                    learned++;
                }
            }
        }
        return { learned: learned, topics: topicCount, total: App.getAllWords().length };
    },

    renderLevelProgress: function() {
        var el = document.getElementById('levelProgress');
        if (!el) return;
        var level = App.state.level || null;
        if (!level) {
            el.innerHTML = '';
            return;
        }

        var levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
        var descriptions = ['Anfänger', 'Grundlagen', 'Mittelstufe', 'Fortgeschritten', 'Fachkundig', 'Muttersprachlich'];
        var currentIdx = levels.indexOf(level);

        var html = '<div class="level-progress-card">';
        html += '<div class="level-progress-header">';
        html += '<h3>\uD83C\uDFC6 Dein Sprachniveau</h3>';
        html += '<div class="level-progress-current">' + level + '</div>';
        html += '</div>';

        html += '<div class="level-scale">';
        for (var i = 0; i < levels.length; i++) {
            var cls = 'level-scale-item scale-' + levels[i];
            if (i === currentIdx) cls += ' current';
            if (i > currentIdx) cls += ' future';
            html += '<div class="' + cls + '">' + levels[i] + '</div>';
        }
        html += '</div>';

        html += '<div class="level-scale-desc">';
        html += '<span>Anfänger</span>';
        html += '<span>Muttersprachlich</span>';
        html += '</div>';

        html += '</div>';
        el.innerHTML = html;
    },

    getAllWords: function() {
        var all = [];
        var keys = Object.keys(VOKABELN);
        for (var i = 0; i < keys.length; i++) {
            var words = VOKABELN[keys[i]].words;
            for (var j = 0; j < words.length; j++) {
                all.push(words[j]);
            }
        }
        return all;
    },

    init: function() {
        App.loadState();
        App.updateStreak();

        var backBtn = document.getElementById('backBtn');
        if (backBtn) {
            backBtn.addEventListener('click', function() {
                App.goHome();
            });
        }

        App.goHome();
    }
};

document.addEventListener('DOMContentLoaded', function() {
    App.init();
});
