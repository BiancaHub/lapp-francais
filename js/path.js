/* L'App français V2 — Lernpfad (Startseite) */
var Path = (function() {

  // Reihenfolge der Prioritäts-Units (für Urlaub September 2026)
  var PRIORITY_IDS = [
    'artikel', 'fragesaetze', 'etre', 'avoir', 'verneinung',
    'er-verben', 'adjektive', 'passe-compose', 'futur-proche',
    'teilungsartikel', 'possessiv', 'irreg-verben', 'imperativ',
    'imparfait', 'conditionnel'
  ];

  var LEVEL_ORDER = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

  var LEVEL_ICONS = {
    A1: '🌱', A2: '🌿', B1: '🌳', B2: '🍀', C1: '⭐', C2: '🏆'
  };

  // ─── HELPERS ──────────────────────────────────────────────────────────────

  function isPriority(unitId) {
    return PRIORITY_IDS.indexOf(unitId) !== -1;
  }

  function statusClass(status) {
    if (status === 'done')   return 'unit-done';
    if (status === 'active') return 'unit-active';
    return 'unit-open';
  }

  function statusDot(status) {
    return '<span class="status-dot ' + status + '"></span>';
  }

  // ─── RENDER ───────────────────────────────────────────────────────────────

  function render(container) {
    var units  = Grammar.getAllUnits();
    var total  = units.length;
    var done   = 0;
    var active = 0;

    units.forEach(function(u) {
      var s = App.getUnitStatus(u.id);
      if (s === 'done')   done++;
      if (s === 'active') active++;
    });

    var html = '<div class="path-container">';

    // ── Stats ──
    html += '<div class="path-stats">';
    html += _stat(done,                  '✓ erledigt');
    html += _stat(active,                '● in Arbeit');
    html += _stat(total - done - active, '○ offen');
    html += '</div>';

    // ── Urlaubs-Banner ──
    html += '<div class="path-banner">🏖️ Ziel: Frankreich-Urlaub September 2026 &nbsp;·&nbsp; ⭐ = Priorität</div>';

    // ── Einstufungstest-CTA (nur wenn noch kein Status gesetzt ist) ──
    if (typeof Diagnostic !== 'undefined' && Diagnostic.canRun()) {
      html += '<div class="diag-cta">';
      html += '<div class="diag-cta-icon">🔍</div>';
      html += '<div class="diag-cta-text">';
      html += '<strong>Was weißt du schon?</strong><br>';
      html += '<span>Mach den Einstufungstest — ~20 Fragen, ~10 min. Er markiert was du schon kannst.</span>';
      html += '</div>';
      html += '<button class="btn btn-primary diag-cta-btn" onclick="Diagnostic.start()">Einstufungstest starten</button>';
      html += '</div>';
    }

    // ── Units nach Level ──
    var byLevel = {};
    units.forEach(function(u) {
      if (!byLevel[u.level]) byLevel[u.level] = [];
      byLevel[u.level].push(u);
    });

    LEVEL_ORDER.forEach(function(level) {
      var levelUnits = byLevel[level];
      if (!levelUnits || levelUnits.length === 0) return;

      html += '<div class="level-section">';
      html += '<div class="level-header">' + LEVEL_ICONS[level] + ' ' + level + '</div>';
      html += '<div class="units-grid">';

      levelUnits.forEach(function(unit) {
        var status   = App.getUnitStatus(unit.id);
        var prio     = isPriority(unit.id);
        var dueCount = App.getUnitDueCount(unit.id);
        var classes  = 'unit-card ' + statusClass(status) + (prio ? ' priority' : '');

        html += '<div class="' + classes + '" onclick="App.showView(\'unit\', \'' + unit.id + '\')">';
        html += statusDot(status);
        if (prio) html += '<span class="priority-star">⭐</span>';
        html += '<div class="unit-name">' + unit.titel + '</div>';

        // SR-Badge: fällige Wiederholungen
        if (dueCount > 0) {
          html += '<div class="unit-due-badge" ' +
                  'onclick="event.stopPropagation(); Exercise.startRepeat(\'' + unit.id + '\')" ' +
                  'title="Wiederholungen fällig — jetzt üben">🔁 ' + dueCount + '</div>';
        }

        html += '</div>';
      });

      html += '</div></div>';
    });

    // ── Szenarien-Banner ──
    var szAll  = (typeof SzenarienData !== 'undefined') ? SzenarienData.getAll() : [];
    var szDone = 0;
    szAll.forEach(function(s) { if (App.getSzenarioStatus(s.id) === 'done') szDone++; });
    if (szAll.length > 0) {
      html += '<div class="szenarien-banner" onclick="App.showView(\'szenarien\')">';
      html += '<span class="sz-banner-icon">🌍</span>';
      html += '<div class="sz-banner-text">';
      html += '<strong>Alltagsszenarien</strong><br>';
      html += '<span>Dialoge aus dem echten Frankreich-Urlaub — ' + szDone + ' / ' + szAll.length + ' erledigt</span>';
      html += '</div>';
      html += '<span class="sz-banner-arrow">→</span>';
      html += '</div>';
    }

    html += '</div>'; // path-container
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

  // ─── PUBLIC ───────────────────────────────────────────────────────────────

  return {
    render      : render,
    PRIORITY_IDS: PRIORITY_IDS   // exportiert für diagnostic.js (optional)
  };

})();
