/* L'App français V2 — Alltagsszenarien (Session 6)
 *
 * 6 Szenarien mit Dialog + Verständnisaufgaben + Grammar-Unit-Links
 * Aufbau:
 *   dialog: Array von { sprecher, text }
 *   uebungen: wie in data-grammar.js (tippen, richtigfalsch, luecke)
 *   units: IDs der empfohlenen Grammar-Units
 */

var SZENARIEN = [

  // ─────────────────────────────────────────────────────────────────
  //  1. Im Restaurant
  // ─────────────────────────────────────────────────────────────────
  {
    id: 'restaurant',
    icon: '🍽️',
    titel: 'Im Restaurant',
    level: 'A1–A2',
    beschreibung: 'Tisch bekommen, bestellen und bezahlen — Grundvokabular für jedes Frankreich-Restaurant.',
    units: ['avoir', 'fragesaetze', 'teilungsartikel', 'er-verben', 'irreg-verben'],
    dialog: [
      { sprecher: 'Serveur',  text: 'Bonsoir ! Vous avez une réservation ?' },
      { sprecher: 'Cliente',  text: "Non, est-ce que vous avez une table pour deux personnes, s'il vous plaît ?" },
      { sprecher: 'Serveur',  text: "Oui, bien sûr ! Suivez-moi. Voici le menu." },
      { sprecher: 'Cliente',  text: "Je voudrais le menu du jour, s'il vous plaît. Et comme boisson, de l'eau minérale." },
      { sprecher: 'Serveur',  text: "Et comme plat principal ?" },
      { sprecher: 'Cliente',  text: "Je prends le steak-frites, s'il vous plaît." },
      { sprecher: 'Serveur',  text: "Très bien. Et comme dessert ?" },
      { sprecher: 'Cliente',  text: "Non merci. Juste l'addition, s'il vous plaît." },
      { sprecher: 'Serveur',  text: "Bien sûr. Ça fait vingt-quatre euros." },
      { sprecher: 'Cliente',  text: "Voilà. Gardez la monnaie !" }
    ],
    uebungen: [
      { typ: 'richtigfalsch',
        frage: 'Die Kundin hat eine Tischreservierung.',
        antwort: false,
        erklaerung: 'Nein — sie fragt "est-ce que vous avez une table ?" → sie hatte keine Reservierung.' },
      { typ: 'richtigfalsch',
        frage: 'Die Kundin bestellt das Menü des Tages.',
        antwort: true,
        erklaerung: '"Je voudrais le menu du jour" → Ja, Menü des Tages (= eine vordefinierte Auswahl).' },
      { typ: 'luecke',
        satz: "Je voudrais ___ eau minérale, s'il vous plaît.",
        loesung: "de l'",
        erklaerung: "eau (f.) beginnt mit Vokal → Teilungsartikel: de l'eau" },
      { typ: 'luecke',
        satz: 'Je ___ le steak-frites. (prendre)',
        loesung: 'prends',
        erklaerung: 'prendre (nehmen/bestellen): je → prends (unregelmäßig!)' },
      { typ: 'richtigfalsch',
        frage: 'Am Ende behält die Kundin das Wechselgeld selbst.',
        antwort: false,
        erklaerung: '"Gardez la monnaie !" = Behalten Sie das Wechselgeld! → Die Kundin gibt es dem Kellner als Trinkgeld.' },
      { typ: 'tippen',
        de: 'Die Rechnung, bitte.',
        fr: "L'addition, s'il vous plaît.",
        erklaerung: "l'addition = die Rechnung; einer der wichtigsten Sätze im Restaurant!" },
      { typ: 'tippen',
        de: 'Haben Sie einen Tisch für zwei Personen?',
        fr: 'Est-ce que vous avez une table pour deux personnes ?',
        erklaerung: 'est-ce que = höfliche Frageform; vous avez = Sie haben (avoir)' },
      { typ: 'tippen',
        de: 'Ich hätte gern das Menü des Tages.',
        fr: 'Je voudrais le menu du jour.',
        erklaerung: 'je voudrais = ich hätte gern (höflicher Konditionnel von vouloir)' },
      { typ: 'hoeren',
        fr: "Bonsoir, vous avez une réservation ?",
        de: 'Guten Abend, haben Sie eine Reservierung?',
        erklaerung: 'Eine typische Begrüßung im Restaurant — réservation = Reservierung' },
      { typ: 'hoeren',
        fr: "Je prends le steak-frites, s'il vous plaît.",
        de: 'Ich nehme das Steak mit Pommes, bitte.',
        erklaerung: 'je prends = ich nehme (prendre); steak-frites = Steak mit Pommes' }
    ]
  },

  // ─────────────────────────────────────────────────────────────────
  //  2. Am Bahnhof
  // ─────────────────────────────────────────────────────────────────
  {
    id: 'bahnhof',
    icon: '🚉',
    titel: 'Am Bahnhof',
    level: 'A1–A2',
    beschreibung: 'Tickets kaufen, Abfahrtszeiten erfragen, Bahnsteig finden — auf Reisen unverzichtbar.',
    units: ['fragesaetze', 'irreg-verben', 'passe-compose', 'futur-proche'],
    dialog: [
      { sprecher: 'Voyageuse', text: "Bonjour ! Je voudrais un aller-retour pour Lyon, s'il vous plaît." },
      { sprecher: 'Agent',     text: "Pour quel jour ?" },
      { sprecher: 'Voyageuse', text: "Pour aujourd'hui, le train de quinze heures, si possible." },
      { sprecher: 'Agent',     text: "Je suis désolé, ce train est complet. Il y a un train à seize heures trente. Ça vous convient ?" },
      { sprecher: 'Voyageuse', text: "Oui, d'accord. C'est combien ?" },
      { sprecher: 'Agent',     text: "Quarante-deux euros en deuxième classe." },
      { sprecher: 'Voyageuse', text: "Très bien. Je paie par carte, s'il vous plaît." },
      { sprecher: 'Agent',     text: "Voilà votre billet. Le train part du quai numéro sept." },
      { sprecher: 'Voyageuse', text: "Merci beaucoup. À quelle heure arrive-t-il à Lyon ?" },
      { sprecher: 'Agent',     text: "À dix-huit heures cinquante. Bon voyage !" }
    ],
    uebungen: [
      { typ: 'richtigfalsch',
        frage: 'Die Reisende möchte ein einfaches Ticket (aller simple) nach Lyon.',
        antwort: false,
        erklaerung: '"un aller-retour" = Hin- und Rückfahrkarte. "aller simple" = einfache Fahrt.' },
      { typ: 'richtigfalsch',
        frage: 'Der Zug um 15 Uhr ist ausgebucht.',
        antwort: true,
        erklaerung: '"Ce train est complet" = Der Zug ist ausgebucht / voll.' },
      { typ: 'luecke',
        satz: 'Le train part du ___ numéro sept.',
        loesung: 'quai',
        erklaerung: '"quai" = Bahnsteig/Gleis — ein wichtiges Wort am Bahnhof!' },
      { typ: 'tippen',
        de: 'Um wie viel Uhr kommt der Zug in Lyon an?',
        fr: 'À quelle heure arrive-t-il à Lyon ?',
        erklaerung: 'à quelle heure = um wie viel Uhr; arriver: il arrive → Inversion: arrive-t-il' },
      { typ: 'tippen',
        de: 'Ich möchte eine Hin- und Rückfahrkarte nach Paris.',
        fr: 'Je voudrais un aller-retour pour Paris.',
        erklaerung: 'aller-retour = Rückfahrkarte; pour + Zielort' },
      { typ: 'richtigfalsch',
        frage: 'Die Reisende bezahlt bar.',
        antwort: false,
        erklaerung: '"Je paie par carte" = Ich zahle mit Karte. Bar = en espèces.' },
      { typ: 'tippen',
        de: 'Gute Reise!',
        fr: 'Bon voyage !',
        erklaerung: 'Ein klassischer Abschiedsgruß — merken!' },
      { typ: 'luecke',
        satz: 'Ce train est ___. Il faut prendre le suivant.',
        loesung: 'complet',
        erklaerung: '"complet" = ausgebucht/voll. Le suivant = der nächste.' },
      { typ: 'hoeren',
        fr: "Le train à destination de Lyon partira du quai numéro sept.",
        de: 'Der Zug nach Lyon fährt von Gleis 7 ab.',
        hinweis: 'Bahnhofsdurchsage — tippe was du hörst:',
        erklaerung: 'à destination de = nach/Richtung; partira = wird abfahren (futur); quai = Gleis' },
      { typ: 'hoeren',
        fr: "Attention au départ ! Veuillez vous éloigner des portes.",
        de: 'Achtung Abfahrt! Bitte von den Türen zurücktreten.',
        hinweis: 'Bahnhofsdurchsage — tippe was du hörst:',
        erklaerung: 'attention au départ = Achtung Abfahrt; veuillez = bitte (höflich); éloigner = entfernen' },
      { typ: 'hoeren',
        fr: "Le train en provenance de Paris arrive avec un retard de dix minutes.",
        de: 'Der Zug aus Paris hat 10 Minuten Verspätung.',
        hinweis: 'Bahnhofsdurchsage — tippe was du hörst:',
        erklaerung: 'en provenance de = aus/kommend von; retard = Verspätung; dix minutes = 10 Minuten' }
    ]
  },

  // ─────────────────────────────────────────────────────────────────
  //  3. Hotel Check-in
  // ─────────────────────────────────────────────────────────────────
  {
    id: 'hotel',
    icon: '🏨',
    titel: 'Hotel Check-in',
    level: 'A2',
    beschreibung: 'Anmelden, Zimmer beziehen, nach Ausstattung fragen — an der Hotelrezeption souverän auftreten.',
    units: ['possessiv', 'fragesaetze', 'conditionnel', 'avoir'],
    dialog: [
      { sprecher: 'Réceptionniste', text: "Bonsoir ! Bienvenue à l'Hôtel des Alpes. Vous avez une réservation ?" },
      { sprecher: 'Cliente',        text: "Oui, j'ai réservé une chambre au nom de Müller. Pour trois nuits." },
      { sprecher: 'Réceptionniste', text: "Très bien, madame Müller. Voici votre clé. Chambre deux cent douze, au deuxième étage." },
      { sprecher: 'Cliente',        text: "Est-ce que la chambre a une vue sur la mer ?" },
      { sprecher: 'Réceptionniste', text: "Non, malheureusement. Votre chambre donne sur le jardin. C'est très calme." },
      { sprecher: 'Cliente',        text: "D'accord. Le petit déjeuner est à quelle heure ?" },
      { sprecher: 'Réceptionniste', text: "De sept heures à dix heures, au restaurant au rez-de-chaussée." },
      { sprecher: 'Cliente',        text: "Parfait. Est-ce qu'il y a du wifi dans la chambre ?" },
      { sprecher: 'Réceptionniste', text: "Oui, bien sûr. Le mot de passe est sur la carte dans votre chambre." },
      { sprecher: 'Cliente',        text: "Merci beaucoup. Bonne soirée !" }
    ],
    uebungen: [
      { typ: 'richtigfalsch',
        frage: 'Frau Müller hat kein Zimmer reserviert — sie fragt spontan.',
        antwort: false,
        erklaerung: '"j\'ai réservé" = ich habe reserviert (passé composé) → Sie hatte vorgebucht.' },
      { typ: 'richtigfalsch',
        frage: 'Das Zimmer hat Meerblick.',
        antwort: false,
        erklaerung: '"donne sur le jardin" = gibt auf den Garten. Meerblick = vue sur la mer.' },
      { typ: 'luecke',
        satz: 'Le petit déjeuner est de sept heures ___ dix heures.',
        loesung: 'à',
        erklaerung: 'de … à … = von … bis … (Zeitangabe)' },
      { typ: 'tippen',
        de: 'Haben Sie ein Zimmer für drei Nächte?',
        fr: 'Est-ce que vous avez une chambre pour trois nuits ?',
        erklaerung: 'est-ce que vous avez = haben Sie? (höfliche Form)' },
      { typ: 'tippen',
        de: 'Ich habe ein Zimmer auf den Namen Müller reserviert.',
        fr: "J'ai réservé une chambre au nom de Müller.",
        erklaerung: 'j\'ai réservé = passé composé von réserver; au nom de = auf den Namen' },
      { typ: 'richtigfalsch',
        frage: 'Das Frühstück wird auf dem Zimmer serviert.',
        antwort: false,
        erklaerung: '"au restaurant au rez-de-chaussée" = im Restaurant im Erdgeschoss (nicht auf dem Zimmer).' },
      { typ: 'tippen',
        de: 'Ich hätte gern ein ruhiges Zimmer.',
        fr: 'Je voudrais une chambre calme.',
        erklaerung: 'je voudrais = Konditionnel (höflich); calme = ruhig' },
      { typ: 'luecke',
        satz: 'Voici ___ clé, madame. Chambre deux cent douze.',
        loesung: 'votre',
        erklaerung: 'votre = Ihr (vous-Form); clé (f.) → votre clé' },
      { typ: 'hoeren',
        fr: "Le petit déjeuner est servi de sept heures à dix heures.",
        de: 'Das Frühstück wird von 7 bis 10 Uhr serviert.',
        erklaerung: 'petit déjeuner = Frühstück; de … à … = von … bis …; servi = serviert' },
      { typ: 'hoeren',
        fr: "Votre chambre donne sur le jardin, c'est très calme.",
        de: 'Ihr Zimmer geht zum Garten raus, es ist sehr ruhig.',
        erklaerung: 'donner sur = hinausgehen auf; jardin = Garten; calme = ruhig' }
    ]
  },

  // ─────────────────────────────────────────────────────────────────
  //  4. Wegbeschreibung
  // ─────────────────────────────────────────────────────────────────
  {
    id: 'wegbeschreibung',
    icon: '🗺️',
    titel: 'Wegbeschreibung',
    level: 'A2',
    beschreibung: 'Nach dem Weg fragen und eine Wegbeschreibung verstehen — in jeder französischen Stadt nötig.',
    units: ['fragesaetze', 'imperativ', 'irreg-verben'],
    dialog: [
      { sprecher: 'Touriste',  text: "Excusez-moi, monsieur. Est-ce que vous pouvez m'aider ? Je cherche la cathédrale." },
      { sprecher: 'Passant',   text: "Bien sûr ! Alors, vous êtes ici, devant la mairie. Prenez la rue à gauche." },
      { sprecher: 'Touriste',  text: "La première rue à gauche ?" },
      { sprecher: 'Passant',   text: "Non, la deuxième. Continuez tout droit pendant deux cents mètres." },
      { sprecher: 'Touriste',  text: "D'accord, tout droit..." },
      { sprecher: 'Passant',   text: "Ensuite, tournez à droite au carrefour. La cathédrale est juste en face, vous ne pouvez pas la rater." },
      { sprecher: 'Touriste',  text: "C'est loin d'ici ?" },
      { sprecher: 'Passant',   text: "Non, à pied c'est environ cinq minutes. C'est tout près !" },
      { sprecher: 'Touriste',  text: "Parfait, merci beaucoup !" },
      { sprecher: 'Passant',   text: "De rien ! Bonne visite !" }
    ],
    uebungen: [
      { typ: 'richtigfalsch',
        frage: 'Der Tourist nimmt die erste Straße links.',
        antwort: false,
        erklaerung: '"Non, la deuxième" — er soll die ZWEITE Straße links nehmen.' },
      { typ: 'tippen',
        de: 'Biegen Sie an der Kreuzung rechts ab!',
        fr: 'Tournez à droite au carrefour !',
        erklaerung: 'tourner (Imperativ vous-Form): tournez; à droite = rechts; carrefour = Kreuzung' },
      { typ: 'tippen',
        de: 'Gehen Sie geradeaus weiter!',
        fr: 'Continuez tout droit !',
        erklaerung: 'continuer (vous-Imperativ): continuez; tout droit = geradeaus' },
      { typ: 'luecke',
        satz: 'La cathédrale est juste en ___.',
        loesung: 'face',
        erklaerung: '"en face" = gegenüber. "juste en face" = genau gegenüber.' },
      { typ: 'richtigfalsch',
        frage: 'Die Kathedrale ist etwa 15 Minuten zu Fuß entfernt.',
        antwort: false,
        erklaerung: '"environ cinq minutes" = etwa 5 Minuten. 15 Minuten = quinze minutes.' },
      { typ: 'tippen',
        de: 'Entschuldigung, können Sie mir helfen?',
        fr: "Excusez-moi, est-ce que vous pouvez m'aider ?",
        erklaerung: 'excusez-moi = Entschuldigung (vous-Imperativ); pouvoir + Infinitiv = können' },
      { typ: 'luecke',
        satz: "C'est ___ d'ici ? — Non, c'est tout près.",
        loesung: 'loin',
        erklaerung: '"loin" = weit; "tout près" = ganz nah. Gegensatzpaar merken!' },
      { typ: 'tippen',
        de: 'Die Kathedrale ist direkt gegenüber — Sie können sie nicht verfehlen.',
        fr: "La cathédrale est juste en face, vous ne pouvez pas la rater.",
        erklaerung: 'en face = gegenüber; ne … pas = Verneinung; rater = verpassen/verfehlen' },
      { typ: 'hoeren',
        fr: "Prenez la deuxième rue à gauche, puis continuez tout droit.",
        de: 'Nehmen Sie die zweite Straße links, dann gehen Sie geradeaus weiter.',
        erklaerung: 'prenez = nehmen Sie (Imperativ); deuxième = zweite; à gauche = links; tout droit = geradeaus' }
    ]
  },

  // ─────────────────────────────────────────────────────────────────
  //  5. Auf dem Markt
  // ─────────────────────────────────────────────────────────────────
  {
    id: 'markt',
    icon: '🛒',
    titel: 'Auf dem Markt',
    level: 'A1–A2',
    beschreibung: 'Obst, Käse und Wein kaufen — Preise erfragen, Mengen angeben, feilschen.',
    units: ['teilungsartikel', 'fragesaetze', 'avoir', 'irreg-verben'],
    dialog: [
      { sprecher: 'Vendeur',    text: "Bonjour madame ! Qu'est-ce que je vous sers ?" },
      { sprecher: 'Cliente',    text: "Bonjour ! Je voudrais des tomates, s'il vous plaît." },
      { sprecher: 'Vendeur',    text: "Combien en voulez-vous ?" },
      { sprecher: 'Cliente',    text: "Un kilo, s'il vous plaît. Et est-ce que vous avez du fromage de chèvre ?" },
      { sprecher: 'Vendeur',    text: "Oui, bien sûr ! Voici un fromage excellent. Vous voulez goûter ?" },
      { sprecher: 'Cliente',    text: "Oui, volontiers ! Mmm, c'est délicieux. Je prends deux fromages." },
      { sprecher: 'Vendeur',    text: "Et avec ça ?" },
      { sprecher: 'Cliente',    text: "Une bouteille de rosé, si vous en avez." },
      { sprecher: 'Vendeur',    text: "Absolument ! Voilà. Alors, ça fait huit euros cinquante en tout." },
      { sprecher: 'Cliente',    text: "Voilà dix euros. Gardez la monnaie !" }
    ],
    uebungen: [
      { typ: 'richtigfalsch',
        frage: 'Die Kundin kauft zwei Kilo Tomaten.',
        antwort: false,
        erklaerung: '"un kilo" = ein Kilo. Zwei Kilo wäre "deux kilos".' },
      { typ: 'luecke',
        satz: "Je voudrais ___ tomates, s'il vous plaît.",
        loesung: 'des',
        erklaerung: 'Tomaten = Plural → Teilungsartikel Plural: des tomates' },
      { typ: 'richtigfalsch',
        frage: 'Die Kundin möchte den Käse probieren.',
        antwort: true,
        erklaerung: '"Vous voulez goûter ?" → "Oui, volontiers !" = Ja, gerne! → Sie probiert.' },
      { typ: 'tippen',
        de: 'Wie viel kostet das?',
        fr: "C'est combien ?",
        erklaerung: 'combien = wie viel; c\'est combien = was kostet das? (umgangssprachlich)' },
      { typ: 'tippen',
        de: 'Haben Sie Ziegenkäse?',
        fr: 'Est-ce que vous avez du fromage de chèvre ?',
        erklaerung: 'fromage de chèvre = Ziegenkäse; du = Teilungsartikel m.' },
      { typ: 'richtigfalsch',
        frage: 'Der Gesamtpreis beträgt 10 Euro.',
        antwort: false,
        erklaerung: '"ça fait huit euros cinquante" = das macht 8,50 Euro. 10 Euro gibt sie, bekommt aber Wechselgeld zurück.' },
      { typ: 'luecke',
        satz: 'Est-ce que vous avez ___ fromage de chèvre ?',
        loesung: 'du',
        erklaerung: 'fromage = m. Sg. → Teilungsartikel: du (de + le)' },
      { typ: 'tippen',
        de: 'Das macht 8,50 Euro.',
        fr: "Ça fait huit euros cinquante.",
        erklaerung: 'ça fait = das macht/kostet; Preis auf Französisch angeben' },
      { typ: 'hoeren',
        fr: "Combien en voulez-vous ? Un kilo ou un demi-kilo ?",
        de: 'Wie viel möchten Sie? Ein Kilo oder ein halbes Kilo?',
        erklaerung: 'combien = wie viel; en = davon; un demi-kilo = ein halbes Kilo' },
      { typ: 'hoeren',
        fr: "Ça fait huit euros cinquante en tout.",
        de: 'Das macht 8,50 Euro insgesamt.',
        erklaerung: 'ça fait = das macht; en tout = insgesamt — Preise verstehen ist am Markt essenziell!' }
    ]
  },

  // ─────────────────────────────────────────────────────────────────
  //  6. Beim Arzt / Apotheke
  // ─────────────────────────────────────────────────────────────────
  {
    id: 'arzt',
    icon: '🏥',
    titel: 'Beim Arzt / Apotheke',
    level: 'A2–B1',
    beschreibung: 'Symptome beschreiben, um Medikamente bitten — für Notfälle und Apotheken-Besuche im Urlaub.',
    units: ['avoir', 'etre', 'er-verben', 'fragesaetze', 'conditionnel'],
    dialog: [
      { sprecher: 'Pharmacienne', text: "Bonjour ! Je peux vous aider ?" },
      { sprecher: 'Cliente',      text: "Oui, bonjour. J'ai très mal à la tête depuis ce matin. Est-ce que vous avez quelque chose pour ça ?" },
      { sprecher: 'Pharmacienne', text: "Vous avez de la fièvre ?" },
      { sprecher: 'Cliente',      text: "Je ne sais pas. Je me sens un peu fatiguée aussi." },
      { sprecher: 'Pharmacienne', text: "Est-ce que vous êtes allergique à l'aspirine ?" },
      { sprecher: 'Cliente',      text: "Non, pas du tout." },
      { sprecher: 'Pharmacienne', text: "Dans ce cas, je vous conseille ce médicament. Deux comprimés toutes les six heures." },
      { sprecher: 'Cliente',      text: "Est-ce que je peux le prendre avec de la nourriture ?" },
      { sprecher: 'Pharmacienne', text: "Oui, c'est même recommandé. Et buvez beaucoup d'eau." },
      { sprecher: 'Cliente',      text: "Merci. C'est combien ?" },
      { sprecher: 'Pharmacienne', text: "Sept euros vingt." }
    ],
    uebungen: [
      { typ: 'richtigfalsch',
        frage: 'Die Kundin hat Bauchschmerzen.',
        antwort: false,
        erklaerung: '"J\'ai très mal à la tête" = Ich habe starke Kopfschmerzen. Bauchschmerzen = j\'ai mal au ventre.' },
      { typ: 'tippen',
        de: 'Ich habe starke Kopfschmerzen.',
        fr: "J'ai très mal à la tête.",
        erklaerung: 'avoir mal à + Körperteil = Schmerzen haben. à la tête = am Kopf.' },
      { typ: 'tippen',
        de: 'Haben Sie Fieber?',
        fr: 'Vous avez de la fièvre ?',
        erklaerung: 'avoir de la fièvre = Fieber haben; de la = Teilungsartikel f.' },
      { typ: 'richtigfalsch',
        frage: 'Die Kundin ist allergisch gegen Aspirin.',
        antwort: false,
        erklaerung: '"Non, pas du tout" = Nein, überhaupt nicht.' },
      { typ: 'luecke',
        satz: "J'ai ___ mal à la tête depuis ce matin.",
        loesung: 'très',
        erklaerung: '"très mal" = sehr starke Schmerzen. "un peu mal" = leichte Schmerzen.' },
      { typ: 'tippen',
        de: 'Ich bin allergisch gegen Aspirin.',
        fr: "Je suis allergique à l'aspirine.",
        erklaerung: 'être allergique à + Medikament; aspirine beginnt mit Vokal → à l\'aspirine' },
      { typ: 'richtigfalsch',
        frage: 'Die Apothekerin empfiehlt, das Medikament auf nüchternen Magen zu nehmen.',
        antwort: false,
        erklaerung: '"c\'est même recommandé" (mit Nahrung) = es ist sogar empfohlen mit Essen. Auf nüchternen Magen wäre "à jeun".' },
      { typ: 'tippen',
        de: 'Haben Sie etwas gegen Kopfschmerzen?',
        fr: "Est-ce que vous avez quelque chose contre le mal de tête ?",
        erklaerung: 'quelque chose = etwas; contre = gegen; mal de tête = Kopfschmerzen' },
      { typ: 'hoeren',
        fr: "Deux comprimés toutes les six heures, avec de la nourriture.",
        de: 'Zwei Tabletten alle sechs Stunden, mit Essen.',
        erklaerung: 'comprimés = Tabletten; toutes les six heures = alle 6 Stunden; nourriture = Essen/Nahrung' }
    ]
  }

];

// ─── API ──────────────────────────────────────────────────────────────────────

var SzenarienData = (function() {

  function getAll() {
    return SZENARIEN;
  }

  function get(id) {
    for (var i = 0; i < SZENARIEN.length; i++) {
      if (SZENARIEN[i].id === id) return SZENARIEN[i];
    }
    return null;
  }

  return { getAll: getAll, get: get };

})();
