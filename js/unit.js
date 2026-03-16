/* L'App français V2 — Unit-Ansicht
 * Zeigt: Grammatik-Theorie (überspringbar) + Vokabeln + Button → Exercise.start()
 */
var Unit = (function() {

  // TTS-Cache: FR-Texte nach Index (vermeidet Apostroph-Probleme in onclick)
  var _tts = [];

  // ─── PUBLIC: render ────────────────────────────────────────────────────────

  function render(container, unitId) {
    var unit = Grammar.getUnit(unitId);
    if (!unit) {
      container.innerHTML = '<div style="padding:20px;color:#c00">Unit nicht gefunden.</div>';
      return;
    }
    _tts = [];

    var status = App.getUnitStatus(unitId);
    var html = '<div class="unit-view">';

    // ── Header ──
    html += '<div class="unit-view-header">';
    html += '<span class="v2-level-badge">' + unit.level + '</span>';
    html += '<span class="v2-unit-status-label status-' + status + '">' + _statusLabel(status) + '</span>';
    html += '</div>';

    html += '<h2 class="v2-unit-title">' + unit.titel + '</h2>';

    // ── "Direkt zu Übungen" – ganz oben sichtbar ──
    html += '<div class="unit-skip-row">';
    html += '<button class="btn-text-link" onclick="Unit.scrollToExercises()">Direkt zu Übungen →</button>';
    html += '</div>';

    // ── Grammatik-Theorie ──
    html += '<div class="unit-section-label">📖 Grammatik</div>';
    html += '<div class="v2-unit-erklaerung">' + unit.erklaerung + '</div>';

    // ── Beispiele mit TTS ──
    if (unit.beispiele && unit.beispiele.length > 0) {
      html += '<div class="v2-unit-beispiele">';
      html += '<h3>Beispiele</h3>';
      unit.beispiele.forEach(function(b) {
        var idx = _tts.length;
        _tts.push(b.fr);
        html += '<div class="v2-beispiel">';
        html += '<span class="fr">' + b.fr;
        if (TTS.supported()) {
          html += '<button class="audio-btn-sm" onclick="Unit.tts(' + idx + ')" title="Aussprache">🔊</button>';
        }
        html += '</span>';
        html += '<span class="de">' + b.de + '</span>';
        html += '</div>';
      });
      html += '</div>';
    }

    // ── Vokabeln ──
    var vocabHtml = _renderVokabeln(unit);
    if (vocabHtml) {
      html += '<div class="unit-section-label" style="margin-top:22px">📚 Vokabeln</div>';
      html += vocabHtml;
    }

    // ── Scroll-Anker + Übungen starten ──
    html += '<div id="exercisesAnchor" class="unit-exercises-anchor"></div>';
    html += '<div class="unit-action-btns">';
    html += '<button class="btn btn-primary btn-lg" onclick="Exercise.start(\'' + unitId + '\')">';
    html += '🎯 Übungen starten (' + unit.uebungen.length + ' Aufgaben)';
    html += '</button>';
    html += '</div>';

    html += '</div>'; // .unit-view
    container.innerHTML = html;
  }

  // ─── PUBLIC: tts (für onclick aus HTML) ───────────────────────────────────

  function tts(idx) {
    if (_tts[idx] !== undefined) TTS.speak(_tts[idx]);
  }

  // ─── PUBLIC: scrollToExercises ────────────────────────────────────────────

  function scrollToExercises() {
    var anchor = document.getElementById('exercisesAnchor');
    if (anchor) anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // ─── PRIVATE ──────────────────────────────────────────────────────────────

  function _renderVokabeln(unit) {
    if (!unit.vokabeln || unit.vokabeln.length === 0) return '';
    if (typeof VOKABELN === 'undefined') return '';

    var html = '';
    unit.vokabeln.forEach(function(key) {
      var topic = VOKABELN[key];
      if (!topic) return;
      html += '<div class="unit-vocab-block">';
      html += '<div class="unit-vocab-topic-name">' + (topic.icon || '📖') + ' ' + topic.name + '</div>';
      html += '<div class="unit-vocab-list">';
      var words = topic.words.slice(0, 8); // max 8 Wörter pro Thema
      words.forEach(function(w) {
        var idx = _tts.length;
        _tts.push(w.fr);
        html += '<div class="unit-vocab-item">';
        html += '<span class="unit-vocab-fr">' + w.fr;
        if (TTS.supported()) {
          html += '<button class="audio-btn-sm" onclick="Unit.tts(' + idx + ')" title="Aussprache">🔊</button>';
        }
        html += '</span>';
        html += '<span class="unit-vocab-de">' + w.de + '</span>';
        html += '</div>';
      });
      html += '</div>';
      html += '</div>'; // .unit-vocab-block
    });
    return html;
  }

  function _statusLabel(status) {
    if (status === 'done')   return '✓ Erledigt';
    if (status === 'active') return '● In Arbeit';
    return '○ Offen';
  }

  // ─── PUBLIC API ───────────────────────────────────────────────────────────

  return {
    render           : render,
    tts              : tts,
    scrollToExercises: scrollToExercises
  };

})();
