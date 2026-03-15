/* L'App fran\u00e7ais - Fortschritt */
var Fortschritt = {
    show: function() {
        App.showSection('fortschritt');
        var el = document.getElementById('fortschrittContent');
        if (!el) return;

        var stats = App.getStats();
        var overallPct = stats.total > 0 ? Math.round((stats.learned / stats.total) * 100) : 0;

        var html = '';

        /* Streak */
        html += '<div class="streak-display">';
        html += '<div class="streak-fire">\uD83D\uDD25</div>';
        html += '<div class="streak-count">' + (App.state.streak || 0) + '</div>';
        html += '<div class="streak-label">Tage in Folge</div>';
        html += '</div>';

        /* Level */
        html += '<div class="progress-section">';
        html += '<h3>Dein Level</h3>';
        html += '<div style="background:#4A6FA5;color:white;display:inline-block;padding:8px 24px;border-radius:12px;font-size:20px;font-weight:700;margin-bottom:16px;">' + (App.state.level || 'Noch nicht getestet') + '</div>';
        html += '</div>';

        /* Gesamt */
        html += '<div class="progress-section">';
        html += '<h3>Gesamtfortschritt</h3>';
        html += '<div class="progress-bar-container"><div class="progress-bar-fill" style="width:' + overallPct + '%"></div></div>';
        html += '<div class="progress-detail">' + stats.learned + ' von ' + stats.total + ' W\u00f6rtern gelernt (' + overallPct + '%)</div>';
        html += '</div>';

        /* Per topic */
        html += '<div class="progress-section">';
        html += '<h3>Vokabeltraining nach Themen</h3>';
        var keys = Object.keys(VOKABELN);
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            var topic = VOKABELN[key];
            var words = topic.words;
            var learned = 0;
            for (var j = 0; j < words.length; j++) {
                var sr = App.state.sr[words[j].id];
                if (sr && sr.repetitions > 0) learned++;
            }
            var pct = words.length > 0 ? Math.round((learned / words.length) * 100) : 0;
            html += '<div style="margin-bottom:12px">';
            html += '<div style="display:flex;justify-content:space-between;margin-bottom:4px"><span>' + (topic.icon || '') + ' ' + topic.name + '</span><span style="color:#888;font-size:13px">' + learned + '/' + words.length + '</span></div>';
            html += '<div class="progress-bar-container"><div class="progress-bar-fill" style="width:' + pct + '%"></div></div>';
            html += '</div>';
        }
        html += '</div>';

        /* Übungs-Scores */
        var exScores = App.state.exerciseScores || {};
        var exKeys = Object.keys(exScores);
        if (exKeys.length > 0) {
            html += '<div class="progress-section">';
            html += '<h3>\u00DCbungs-Scores</h3>';
            for (var i = 0; i < exKeys.length; i++) {
                var ekey = exKeys[i];
                var topic = VOKABELN[ekey];
                if (!topic) continue;
                var sc = exScores[ekey];
                var ePct = sc.total > 0 ? Math.round((sc.correct / sc.total) * 100) : 0;
                var isWeak = ePct < 50;
                html += '<div style="margin-bottom:12px">';
                html += '<div style="display:flex;justify-content:space-between;margin-bottom:4px">';
                html += '<span>' + (topic.icon || '') + ' ' + topic.name + (isWeak ? ' <span style="color:#e65100;font-size:12px">\u26A0\uFE0F schwach</span>' : '') + '</span>';
                html += '<span style="color:' + (isWeak ? '#e65100' : '#888') + ';font-size:13px">' + sc.correct + '/' + sc.total + ' (' + ePct + '%)</span>';
                html += '</div>';
                var barColor = ePct >= 80 ? '#4CAF50' : ePct >= 50 ? '#4A6FA5' : '#ffa726';
                html += '<div class="progress-bar-container"><div class="progress-bar-fill" style="width:' + ePct + '%;background:' + barColor + '"></div></div>';
                html += '</div>';
            }
            html += '</div>';
        }

        /* Lektionen */
        var lDone = App.state.lektionenDone || {};
        var lCount = Object.keys(lDone).filter(function(k) { return lDone[k]; }).length;
        if (typeof LEKTIONEN_DATA !== 'undefined') {
            html += '<div class="progress-section">';
            html += '<h3>Lektionen</h3>';
            html += '<div class="progress-bar-container"><div class="progress-bar-fill" style="width:' + (LEKTIONEN_DATA.length > 0 ? Math.round((lCount / LEKTIONEN_DATA.length) * 100) : 0) + '%"></div></div>';
            html += '<div class="progress-detail">' + lCount + ' von ' + LEKTIONEN_DATA.length + ' Lektionen abgeschlossen</div>';
            html += '</div>';
        }

        /* Reset */
        html += '<div style="text-align:center">';
        html += '<button class="reset-btn" onclick="Fortschritt.confirmReset()">Fortschritt zur\u00fccksetzen</button>';
        html += '</div>';

        el.innerHTML = html;
    },

    confirmReset: function() {
        var ok = confirm('M\u00f6chtest du wirklich deinen gesamten Fortschritt zur\u00fccksetzen? Das kann nicht r\u00fcckg\u00e4ngig gemacht werden!');
        if (ok) {
            App.state = {
                level: null,
                testDone: false,
                streak: 0,
                lastPractice: null,
                sr: {}
            };
            App.saveState();
            App.goHome();
        }
    }
};
