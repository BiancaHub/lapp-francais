# L'App français — Französisch-Lernapp

## Was ist das
Lokale Web-App für Biancas Französisch-Lernroutine. Pures HTML/CSS/JS, kein Framework, kein Build-Schritt.

## Start
- Desktop-Icon "LApp francais" → öffnet in Edge (file://)
- Desktop-Icon "LApp francais Handy" → startet LAN-Server + QR-Code (Port 8767, handy_server.pyw)
- start_app.pyw → stiller Server (Port 8767) + öffnet im Browser (für Sync)
- migrate.html → einmalige Fortschritt-Übertragung file:// → Server

## Dateien
- index.html — Startseite (Cache-Busting: ?v=3)
- css/style.css
- js/app.js — Core + State + Sync-Logik
- js/data.js — Vokabeldaten (9 Themen, ~270 Wörter)
- js/einstufung.js — Einstufungstest
- js/vokabeln.js — Vokabeltrainer (MC + Spracheingabe)
- js/vokabel_uebungen.js — Lückentext + Übersetzung (MC + Spracheingabe)
- js/fortschritt.js — Statistik-Dashboard
- js/grammatik.js — Grammatik-Nachschlagewerk
- js/lektionen.js — Lektionen-System
- js/audio.js — TTS-Modul (Web Speech API, fr-FR)
- js/speech.js — Spracheingabe-Modul (Web Speech Recognition API, fr-FR)
- handy_server.pyw — LAN-Server mit QR-Code + Sync-API
- start_app.pyw — Stiller Server + Browser-Öffner
- migrate.html — Einmalige Fortschritt-Migration
- sync_state.json — Server-seitiger State (automatisch erstellt)
- icons/lappfrancais.ico

## Stand V2.0 — Session 5 (16.03.2026)
- Komplett neu gebaut (Option C aus lapp_v2_plan.md)
- index.html lädt nur V2-Scripts: data-grammar.js, app.js, diagnostic.js, path.js, unit.js, exercise.js
- 12 Units komplett (A1: 7 Units, A2: 4 Units, B1: 1 Unit)
- Bug gefixt: luecke-Übungen mit `loesung`-Feld werden korrekt ausgewertet
- Hören-Feedback: bei falscher Antwort zeigt DE-Übersetzung
- Deployed auf lappfrancais.netlify.app (Session 5)

## Stand V1.4 (13.03.2026)
- Einstufungstest (15 Fragen → A1/A2/B1) — Bianca ist aktuell **Level A2**
- Vokabeltrainer: Multiple Choice + SM-2 Spaced Repetition
- 9 Themen, ~270 Wörter, 26 bereits gelernt
- Level-System: Themen nach Level gesperrt, Auto-Aufstieg bei 80% Wortschatz
- Level-Skala A1-C2 auf Startseite, Fortschritt + Streak
- Audio-Aussprache — 🔊-Button neben jedem franz. Wort (FR→DE Modus)
- Hör-Modus — Wort wird nur als Audio abgespielt (Hörverständnis)
- Vokabel-Übungen — Lückentext (DE→FR) + Übersetzung (FR→DE)
- Lektionen-System — thematische Einheiten mit Vokabeln + Grammatik + Übungen
- Fortschritt-Tracking — exerciseScores + lektionenDone in State

### NEU in V1.4:
- **Lektionen massiv ausgebaut** — 5 → 8 Lektionen, alle mit Kontext-Intro (blaue Box), 6-8 Übungen statt 3
- **3 neue Lektionen**: "Urlaub erzählen" (Passé composé vs. Imparfait), "Am Strand" (Futur proche), "Irreguläre Verben im Kontext" (B1)
- **Neuer Übungstyp**: Richtig/Falsch — zeigt Satz, zwei Buttons (✓/✗), Auto-Weiter
- **Auto-Weiter** in Lektionen (1,2 Sek. bei Richtig, 2,5 Sek. bei Falsch) — kein "Weiter"-Button
- **Lektion-Status**: "Gut drauf!" / "Noch üben" Buttons am Abschluss + grün/gelb Punkte in Übersicht
- Vokabeln pro Lektion: 7-8 statt 5; Meta-Text zeigt echte Anzahl
- Alle Lektionen nach Schwierigkeit sortiert (A1 → A2 → B1)
- Sätze aus dem Urlaub-Alltag (Restaurant, Hotel, Strand, Markt, Orientierung)

### NEU in V1.3:
- **Irreguläre Verben** — neues A2-Thema: aller, faire, venir, pouvoir, vouloir, prendre (8 Übungen)
- **Grammatik-Übungen aufgestockt** — alle A2/B1-Themen von 3 auf 5-6 Übungen erweitert
- **Auto-weiter bei richtiger Antwort** (1,2 Sek. Feedback, dann weiter)
- **Richtig/Falsch-Bug gefixt** (✓/✗ Buttons funktionierten nicht korrekt)
- "Mini-Übungen" umbenannt zu "Übungen"
- **Grammatik-Status** — grün/gelb Punkte in Übersicht + "Gut drauf / Noch üben" nach Abschluss
  - State: App.state.grammatikStatus[themaId] = 'done' | 'schwierig'
  - Badge im Thema-Header anklickbar (wechselt zwischen den Status)

### NEU in V1.2:
- **Spracheingabe** — 🎙️ zufällig (~30%) bei DE→FR Aufgaben statt Multiple Choice
  - Web Speech Recognition API (fr-FR)
  - Toleranter Vergleich (Artikel optional, Groß/Klein egal)
  - Bei Fehler: Korrektur + TTS spricht richtige Antwort vor
  - Mikrofon-Zugriff nötig (Browser fragt beim ersten Mal)
- **Überspringen-Button** — ⏭️ bei jeder Aufgabe, kein SR-Update (kommt nächstes Mal wieder)
- **Auto-weiter** — Richtig: 400ms, Falsch: 2000ms Korrektur, kein "Weiter"-Button nötig
- **Handy-Sync** — Fortschritt zwischen Desktop und Handy synchronisieren
  - Server speichert State in sync_state.json
  - App synkt automatisch wenn Server läuft (Port 8767)
  - Intelligenter Merge: pro Wort die bessere SR-Wiederholung behalten
  - Einmalige Migration: migrate.html öffnen → "Zum Server übertragen"

## Sync-Flow (Desktop ↔ Handy)
1. Handy-Server starten (QR-Code-Icon)
2. Einmalig: migrate.html im Browser öffnen → "Zum Server übertragen"
3. Danach automatisch: Desktop (über Server) ↔ Handy synkt bei jedem App-Start
4. Merge-Strategie: Level/Streak → höheren behalten, SR → mehr Wiederholungen behalten

## Noch offen (nächste Sessions)
- ✅ KI-Konversation: Groq via Netlify Function (lappfrancais.netlify.app)
- Grammatik-Tab mit Inhalt füllen (aktuell Nachschlagewerk)
- Desktop-Verknüpfung auf start_app.pyw umstellen (dann Sync auch am Desktop)
- Handy: PWA-Support (Homescreen-Icon, Offline-Cache)

## Philosophie
- Token sparen: App läuft komplett lokal ohne Claude
- Bianca macht tägliches Training selbst — Claude baut nur neue Features auf Anfrage
