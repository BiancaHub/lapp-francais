/* L'App français - TTS & Audio-Modul (Web Speech API) */
var TTS = (function() {
    var synth = window.speechSynthesis;
    var frVoice = null;
    var voicesReady = false;

    function findFrenchVoice() {
        if (!synth) return;
        var voices = synth.getVoices();
        if (voices.length === 0) return;
        voicesReady = true;

        // Priorität: 1. fr-FR, 2. irgendwas mit fr
        var bestMatch = null;
        for (var i = 0; i < voices.length; i++) {
            var lang = voices[i].lang.toLowerCase();
            if (lang === 'fr-fr') {
                bestMatch = voices[i];
                break; // perfekt, sofort nehmen
            }
            if (!bestMatch && lang.indexOf('fr') === 0) {
                bestMatch = voices[i];
            }
        }
        if (bestMatch) frVoice = bestMatch;
    }

    findFrenchVoice();
    if (synth && synth.onvoiceschanged !== undefined) {
        synth.onvoiceschanged = findFrenchVoice;
    }

    function speak(text) {
        if (!synth) return;
        synth.cancel();

        // Nochmal Stimme suchen falls inzwischen geladen
        if (!frVoice) findFrenchVoice();

        var utt = new SpeechSynthesisUtterance(text);
        utt.lang = 'fr-FR';
        utt.rate = 0.85;
        utt.pitch = 1.0;
        if (frVoice) utt.voice = frVoice;
        synth.speak(utt);
    }

    function supported() {
        return !!(window.speechSynthesis);
    }

    function hasFrenchVoice() {
        if (!frVoice) findFrenchVoice();
        return !!frVoice;
    }

    return { speak: speak, supported: supported, hasFrenchVoice: hasFrenchVoice };
})();
