var Konversation = {
    messages: [],
    isListening: false,

    systemPrompt: 'Du bist ein freundlicher Französisch-Tutor. ' +
        'Führe das Gespräch auf Französisch (A2-Niveau). ' +
        'Antworte kurz (1-3 Sätze). ' +
        'Wenn die Nutzerin einen Fehler macht, korrigiere ihn sanft auf Deutsch in Klammern. ' +
        'Starte das Gespräch mit einem einfachen Gesprächsthema aus dem Urlaub (Restaurant, Strand, Hotel, Markt).',

    show: function() {
        App.showSection('konversation');
        if (this.messages.length === 0) {
            this.render();
            this.sendToAI();
        } else {
            this.render();
        }
    },

    render: function() {
        var micSupported = SpeechInput && SpeechInput.supported();
        var html = '<h2 style="margin-bottom:8px">💬 Konversation</h2>';
        html += '<p style="color:#666;font-size:13px;margin-bottom:16px">Übe Französisch im Gespräch — die KI antwortet auf A2-Niveau, korrigiert sanft und spricht vor.</p>';

        html += '<div id="chatMessages" style="' +
            'background:white;border-radius:16px;padding:16px;min-height:200px;max-height:48vh;' +
            'overflow-y:auto;margin-bottom:12px;box-shadow:0 2px 8px rgba(0,0,0,0.08)">';

        if (this.messages.length === 0) {
            html += '<p style="color:#aaa;text-align:center;margin-top:60px">Starte das Gespräch...</p>';
        } else {
            for (var i = 0; i < this.messages.length; i++) {
                var msg = this.messages[i];
                if (msg.role === 'assistant') {
                    html += '<div style="margin-bottom:12px">' +
                        '<div style="font-size:11px;color:#888;margin-bottom:4px">🤖 Tutor</div>' +
                        '<div style="background:#EEF2FF;padding:10px 14px;border-radius:12px 12px 12px 4px;font-size:15px;display:flex;align-items:flex-start;gap:8px">' +
                        '<span style="flex:1">' + this.escapeHtml(msg.content) + '</span>' +
                        '<button onclick="Konversation.vorlesen(' + i + ')" title="Vorlesen" style="background:none;border:none;cursor:pointer;font-size:18px;padding:0;flex-shrink:0;margin-top:2px">🔊</button>' +
                        '</div></div>';
                } else {
                    html += '<div style="margin-bottom:12px;text-align:right">' +
                        '<div style="font-size:11px;color:#888;margin-bottom:4px">Du</div>' +
                        '<div style="background:#4A6FA5;color:white;padding:10px 14px;border-radius:12px 12px 4px 12px;font-size:15px;display:inline-block;max-width:85%;text-align:left">' +
                        this.escapeHtml(msg.content) + '</div></div>';
                }
            }
        }
        html += '</div>';

        // Eingabe-Bereich
        html += '<div style="display:flex;gap:8px;align-items:center">';
        html += '<input id="chatInput" type="text" placeholder="Schreib auf Französisch…" ' +
            'style="flex:1;padding:12px 16px;border-radius:12px;border:2px solid #e0e0e0;font-size:15px;outline:none" ' +
            'onkeydown="if(event.key===\'Enter\')Konversation.send()">';

        if (micSupported) {
            html += '<button id="chatMicBtn" onclick="Konversation.toggleMic()" title="Sprechen" style="' +
                'background:#f0f4ff;border:2px solid #c7d2fe;border-radius:12px;padding:10px 14px;' +
                'font-size:20px;cursor:pointer;flex-shrink:0;transition:all 0.2s">🎙️</button>';
        }

        html += '<button onclick="Konversation.send()" style="' +
            'background:#4A6FA5;color:white;border:none;border-radius:12px;padding:12px 20px;' +
            'font-size:20px;cursor:pointer;flex-shrink:0">➤</button>';
        html += '</div>';

        html += '<button onclick="Konversation.reset()" style="' +
            'margin-top:12px;background:none;border:none;color:#aaa;font-size:13px;cursor:pointer;width:100%">' +
            '↺ Neues Gespräch</button>';

        document.getElementById('konversationContent').innerHTML = html;
        this.scrollToBottom();
    },

    // 🎙️ Mikrofon ein/aus
    toggleMic: function() {
        var self = this;
        if (self.isListening) {
            SpeechInput.stop();
            self.isListening = false;
            self.updateMicBtn(false);
            return;
        }
        self.isListening = true;
        self.updateMicBtn(true);

        SpeechInput.start(function(results, error) {
            self.isListening = false;
            self.updateMicBtn(false);
            if (error || !results || results.length === 0) return;
            // Ersten Treffer ins Eingabefeld + direkt senden
            var input = document.getElementById('chatInput');
            if (input) {
                input.value = results[0];
            }
            setTimeout(function() { self.send(); }, 100);
        });
    },

    updateMicBtn: function(listening) {
        var btn = document.getElementById('chatMicBtn');
        if (!btn) return;
        if (listening) {
            btn.style.background = '#fee2e2';
            btn.style.borderColor = '#f87171';
            btn.textContent = '⏹️';
            btn.title = 'Aufnahme stoppen';
        } else {
            btn.style.background = '#f0f4ff';
            btn.style.borderColor = '#c7d2fe';
            btn.textContent = '🎙️';
            btn.title = 'Sprechen';
        }
    },

    // 🔊 KI-Antwort vorlesen
    vorlesen: function(msgIdx) {
        var msg = this.messages[msgIdx];
        if (!msg || msg.role !== 'assistant') return;
        if (typeof TTS !== 'undefined' && TTS.supported()) {
            TTS.speak(msg.content);
        }
    },

    send: function() {
        var input = document.getElementById('chatInput');
        if (!input) return;
        var text = input.value.trim();
        if (!text) return;
        input.value = '';
        this.messages.push({ role: 'user', content: text });
        this.render();
        this.sendToAI();
    },

    sendToAI: function() {
        var self = this;
        var chatDiv = document.getElementById('chatMessages');
        if (chatDiv) {
            var typing = document.createElement('div');
            typing.id = 'typingIndicator';
            typing.style.cssText = 'color:#aaa;font-size:13px;padding:8px';
            typing.textContent = '✍️ Tutor schreibt…';
            chatDiv.appendChild(typing);
            self.scrollToBottom();
        }

        var apiMessages = [{ role: 'system', content: self.systemPrompt }].concat(self.messages);

        fetch('/.netlify/functions/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ messages: apiMessages })
        })
        .then(function(r) {
            if (!r.ok) {
                return r.text().then(function(t) { throw new Error('HTTP ' + r.status + ': ' + t); });
            }
            return r.json();
        })
        .then(function(data) {
            var typing = document.getElementById('typingIndicator');
            if (typing) typing.remove();
            if (data.choices && data.choices[0]) {
                var reply = data.choices[0].message.content;
                self.messages.push({ role: 'assistant', content: reply });
                self.render();
                // 🔊 Automatisch vorlesen
                if (typeof TTS !== 'undefined' && TTS.supported()) {
                    TTS.speak(reply);
                }
            } else if (data.error) {
                self.messages.push({ role: 'assistant', content: '⚠️ KI-Fehler: ' + (data.error.message || JSON.stringify(data.error)) });
                self.render();
            } else {
                self.messages.push({ role: 'assistant', content: '(Keine Antwort erhalten — bitte erneut versuchen)' });
                self.render();
            }
        })
        .catch(function(err) {
            var typing = document.getElementById('typingIndicator');
            if (typing) typing.remove();
            var msg = err.message || 'Unbekannter Fehler';
            // Hilfreich: Unterschied zwischen "lokal" und "Netzwerk"
            if (msg.indexOf('Failed to fetch') !== -1 || msg.indexOf('NetworkError') !== -1) {
                self.messages.push({ role: 'assistant', content: '🌐 Verbindung fehlgeschlagen. Bitte sicherstellen dass die App über lappfrancais.netlify.app geöffnet ist (nicht lokal).' });
            } else {
                self.messages.push({ role: 'assistant', content: '⚠️ Fehler: ' + msg });
            }
            self.render();
        });
    },

    reset: function() {
        if (typeof TTS !== 'undefined' && TTS.supported()) { window.speechSynthesis && window.speechSynthesis.cancel(); }
        this.messages = [];
        this.isListening = false;
        this.render();
        this.sendToAI();
    },

    scrollToBottom: function() {
        setTimeout(function() {
            var el = document.getElementById('chatMessages');
            if (el) el.scrollTop = el.scrollHeight;
        }, 50);
    },

    escapeHtml: function(str) {
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/\n/g, '<br>');
    }
};
