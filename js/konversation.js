var Konversation = {
    messages: [], // Gesprächsverlauf (ohne System-Prompt)

    systemPrompt: 'Du bist ein freundlicher Französisch-Tutor. ' +
        'Führe das Gespräch auf Französisch (A2-Niveau). ' +
        'Antworte kurz (1-3 Sätze). ' +
        'Wenn Bianca einen Fehler macht, korrigiere ihn sanft auf Deutsch in Klammern. ' +
        'Starte das Gespräch mit einem einfachen Gesprächsthema aus dem Urlaub (Restaurant, Strand, Hotel, Markt).',

    show: function() {
        App.showSection('konversation');
        if (this.messages.length === 0) {
            this.render();
            this.sendToAI(); // KI startet das Gespräch
        } else {
            this.render();
        }
    },

    render: function() {
        var html = '<h2 style="margin-bottom:16px">💬 Konversation</h2>';
        html += '<p style="color:#666;font-size:13px;margin-bottom:16px">Übe Französisch im Gespräch — die KI antwortet auf A2-Niveau und korrigiert sanft.</p>';
        html += '<div id="chatMessages" style="' +
            'background:white;border-radius:16px;padding:16px;min-height:200px;max-height:50vh;' +
            'overflow-y:auto;margin-bottom:12px;box-shadow:0 2px 8px rgba(0,0,0,0.08)">';

        if (this.messages.length === 0) {
            html += '<p style="color:#aaa;text-align:center;margin-top:60px">Starte das Gespräch...</p>';
        } else {
            for (var i = 0; i < this.messages.length; i++) {
                var msg = this.messages[i];
                if (msg.role === 'assistant') {
                    html += '<div style="margin-bottom:12px">' +
                        '<div style="font-size:11px;color:#888;margin-bottom:4px">🤖 Tutor</div>' +
                        '<div style="background:#EEF2FF;padding:10px 14px;border-radius:12px 12px 12px 4px;font-size:15px">' +
                        this.escapeHtml(msg.content) + '</div></div>';
                } else {
                    html += '<div style="margin-bottom:12px;text-align:right">' +
                        '<div style="font-size:11px;color:#888;margin-bottom:4px">Du</div>' +
                        '<div style="background:#4A6FA5;color:white;padding:10px 14px;border-radius:12px 12px 4px 12px;font-size:15px;display:inline-block;max-width:85%;text-align:left">' +
                        this.escapeHtml(msg.content) + '</div></div>';
                }
            }
        }
        html += '</div>';

        html += '<div style="display:flex;gap:8px">';
        html += '<input id="chatInput" type="text" placeholder="Schreib auf Französisch..." ' +
            'style="flex:1;padding:12px 16px;border-radius:12px;border:2px solid #e0e0e0;font-size:15px;outline:none" ' +
            'onkeydown="if(event.key===\'Enter\')Konversation.send()">';
        html += '<button onclick="Konversation.send()" style="' +
            'background:#4A6FA5;color:white;border:none;border-radius:12px;padding:12px 20px;' +
            'font-size:20px;cursor:pointer">➤</button>';
        html += '</div>';
        html += '<button onclick="Konversation.reset()" style="' +
            'margin-top:12px;background:none;border:none;color:#aaa;font-size:13px;cursor:pointer;width:100%">' +
            '↺ Neues Gespräch</button>';

        document.getElementById('konversationContent').innerHTML = html;
        this.scrollToBottom();
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
        // Typing-Indikator
        var chatDiv = document.getElementById('chatMessages');
        if (chatDiv) {
            var typing = document.createElement('div');
            typing.id = 'typingIndicator';
            typing.style.cssText = 'color:#aaa;font-size:13px;padding:8px';
            typing.textContent = '✍️ Tutor schreibt...';
            chatDiv.appendChild(typing);
            self.scrollToBottom();
        }

        var apiMessages = [{ role: 'system', content: self.systemPrompt }].concat(self.messages);

        fetch('/.netlify/functions/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ messages: apiMessages })
        })
        .then(function(r) { return r.json(); })
        .then(function(data) {
            var typing = document.getElementById('typingIndicator');
            if (typing) typing.remove();
            if (data.choices && data.choices[0]) {
                var reply = data.choices[0].message.content;
                self.messages.push({ role: 'assistant', content: reply });
            } else {
                self.messages.push({ role: 'assistant', content: '(Fehler: Keine Antwort erhalten)' });
            }
            self.render();
        })
        .catch(function(err) {
            var typing = document.getElementById('typingIndicator');
            if (typing) typing.remove();
            self.messages.push({ role: 'assistant', content: '(Verbindungsfehler — bitte erneut versuchen)' });
            self.render();
        });
    },

    reset: function() {
        this.messages = [];
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
