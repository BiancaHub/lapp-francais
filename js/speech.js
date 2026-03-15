/* L'App français - Spracheingabe-Modul (Web Speech Recognition API) */
var SpeechInput = {
    recognition: null,
    isListening: false,
    callback: null,

    supported: function() {
        return !!(window.SpeechRecognition || window.webkitSpeechRecognition);
    },

    init: function() {
        if (!SpeechInput.supported()) return;
        var SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
        SpeechInput.recognition = new SpeechRec();
        SpeechInput.recognition.lang = 'fr-FR';
        SpeechInput.recognition.continuous = false;
        SpeechInput.recognition.interimResults = false;
        SpeechInput.recognition.maxAlternatives = 3;

        SpeechInput.recognition.onresult = function(event) {
            SpeechInput.isListening = false;
            var results = [];
            for (var i = 0; i < event.results[0].length; i++) {
                results.push(event.results[0][i].transcript.toLowerCase().trim());
            }
            if (SpeechInput.callback) SpeechInput.callback(results);
        };

        SpeechInput.recognition.onerror = function(event) {
            SpeechInput.isListening = false;
            if (SpeechInput.callback) SpeechInput.callback(null, event.error);
        };

        SpeechInput.recognition.onend = function() {
            SpeechInput.isListening = false;
            // UI-Update: Mikrofon-Button zurücksetzen
            var btn = document.querySelector('.speech-mic-btn');
            if (btn) btn.classList.remove('listening');
        };
    },

    start: function(callback) {
        if (!SpeechInput.recognition) SpeechInput.init();
        if (!SpeechInput.recognition) return;
        if (SpeechInput.isListening) {
            SpeechInput.recognition.stop();
            return;
        }
        SpeechInput.callback = callback;
        SpeechInput.isListening = true;
        try {
            SpeechInput.recognition.start();
        } catch(e) {
            SpeechInput.isListening = false;
        }
        // UI-Update: Mikrofon-Button pulsieren lassen
        var btn = document.querySelector('.speech-mic-btn');
        if (btn) btn.classList.add('listening');
    },

    stop: function() {
        if (SpeechInput.recognition && SpeechInput.isListening) {
            SpeechInput.recognition.stop();
        }
        SpeechInput.isListening = false;
    },

    // Vergleicht gesprochenen Text mit erwartetem Text (tolerant)
    checkAnswer: function(spokenResults, expected) {
        if (!spokenResults) return false;
        var clean = function(text) {
            return text.toLowerCase().trim()
                .replace(/^(le |la |les |l'|l\u2019|un |une |des |du )/i, '')
                .replace(/[.,!?;:'"]/g, '')
                .trim();
        };
        var expectedClean = clean(expected);

        // Prüfe alle Erkennung-Alternativen
        for (var i = 0; i < spokenResults.length; i++) {
            var spokenClean = clean(spokenResults[i]);
            // Exakter Treffer (bereinigt)
            if (spokenClean === expectedClean) return true;
            // Auch mit Artikel OK
            if (spokenResults[i].toLowerCase().trim() === expected.toLowerCase().trim()) return true;
        }
        return false;
    },

    // Entscheidet zufällig ob Spracheingabe statt Multiple Choice
    // ~30% Chance, nur wenn API verfügbar und DE→FR Modus
    shouldUseSpeech: function() {
        if (!SpeechInput.supported()) return false;
        return Math.random() < 0.3;
    }
};

// Modul beim Laden initialisieren
if (SpeechInput.supported()) {
    SpeechInput.init();
}
