/* L'App français — Lektionen (Workbook-Stil) V2 */

var LEKTIONEN_DATA = [

  // ── A1 ──────────────────────────────────────────────────────────────────────

  {
    titel: "Im Café",
    icon: "☕",
    level: "A1",
    kontext: "Du sitzt in einem kleinen Café in Paris. Der Kellner kommt und fragt: <em>«Qu'est-ce que vous désirez?»</em> — Was möchtest du? Hier lernst du, höflich zu bestellen und die Rechnung zu verlangen.",
    vokabeln: [
      { fr: "un café", de: "ein Kaffee" },
      { fr: "un thé", de: "ein Tee" },
      { fr: "du lait", de: "Milch" },
      { fr: "du sucre", de: "Zucker" },
      { fr: "chaud / froid", de: "heiß / kalt" },
      { fr: "une carafe d'eau", de: "eine Karaffe Wasser" },
      { fr: "l'addition, s'il vous plaît", de: "die Rechnung, bitte" }
    ],
    grammatik: {
      titel: "Bestellen mit 'je voudrais' + Teilungsartikel",
      erklaerung: "Höflich bestellen: <em>je voudrais</em> + Artikel + Nomen<br><strong>Teilungsartikel:</strong> <em>du</em> (maskulin) · <em>de la</em> (feminin) · <em>de l'</em> (vor Vokal)<br><em>Je voudrais</em> ist höflicher als <em>je veux</em> (ich will).",
      beispiele: [
        { fr: "Je voudrais un café avec du lait, s'il vous plaît.", de: "Ich hätte gern einen Kaffee mit Milch, bitte." },
        { fr: "Je voudrais de l'eau froide.", de: "Ich hätte gern kaltes Wasser." }
      ]
    },
    uebungen: [
      {
        typ: "mc",
        frage: "Wie bestellst du höflich einen Tee?",
        optionen: ["Je veux un thé.", "Je voudrais un thé.", "Je prends un thé.", "Donnez-moi un thé!"],
        richtig: 1,
        erklaerung: "'Je voudrais' ist die höflichste Form zum Bestellen im Café."
      },
      {
        typ: "luecke",
        frage: "Je voudrais un café avec ___ sucre.",
        optionen: ["du", "de la", "un", "le"],
        richtig: 0,
        erklaerung: "'Du sucre' — Teilungsartikel (maskulin) für nicht zählbare Dinge wie Zucker, Milch, Wasser."
      },
      {
        typ: "uebersetzung",
        frage: "Übersetze: 'Heiß oder kalt?'",
        optionen: ["Chaud ou froid?", "Chaud et froid?", "Chaud mais froid?", "Chaud avec froid?"],
        richtig: 0,
        erklaerung: "'Ou' = oder. 'Et' = und. 'Mais' = aber."
      },
      {
        typ: "luecke",
        frage: "Je voudrais ___ eau froide, s'il vous plaît.",
        optionen: ["de l'", "du", "de la", "une"],
        richtig: 0,
        erklaerung: "'Eau' beginnt mit Vokal → Teilungsartikel: de l'eau (nicht 'du eau')."
      },
      {
        typ: "mc",
        frage: "Du möchtest bezahlen. Was sagst du?",
        optionen: ["Le menu, s'il vous plaît!", "L'addition, s'il vous plaît!", "Encore du café!", "C'est délicieux!"],
        richtig: 1,
        erklaerung: "'L'addition' = die Rechnung. Sehr wichtig im Café und Restaurant!"
      },
      {
        typ: "uebersetzung",
        frage: "Übersetze: 'Einen Kaffee und zwei Tees, bitte.'",
        optionen: [
          "Un café et deux thés, s'il vous plaît.",
          "Un café avec deux thés, s'il vous plaît.",
          "Un café ou deux thés, s'il vous plaît.",
          "Un café mais deux thés, s'il vous plaît."
        ],
        richtig: 0,
        erklaerung: "'Et' = und. Für mehrere: 'deux thés' — Plural, kein Artikel beim Zählen."
      },
      {
        typ: "richtigfalsch",
        frage: "Ist dieser Satz richtig oder falsch?",
        aussage: "Je voudrais de la sucre, s'il vous plaît.",
        richtig: false,
        erklaerung: "Falsch! 'Sucre' ist maskulin → 'du sucre' (nicht 'de la sucre'). Richtig: Je voudrais du sucre."
      }
    ]
  },

  // ── A2 ──────────────────────────────────────────────────────────────────────

  {
    titel: "Im Restaurant",
    icon: "🍽️",
    level: "A2",
    kontext: "Du sitzt abends in einem Restaurant in der Provence. Die Karte ist auf Französisch, das Tagesgericht klingt verlockend. Du möchtest bestellen, nachher bezahlen — und leider war das Steak nicht rosé, sondern viel zu durch!",
    vokabeln: [
      { fr: "commander", de: "bestellen" },
      { fr: "l'addition", de: "die Rechnung" },
      { fr: "la carte / le menu", de: "die Speisekarte / das Menü" },
      { fr: "le plat du jour", de: "das Tagesgericht" },
      { fr: "saignant / bien cuit", de: "blutig / durchgebraten" },
      { fr: "Je voudrais réclamer.", de: "Ich möchte reklamieren." },
      { fr: "végétarien(ne)", de: "vegetarisch" },
      { fr: "une table pour deux", de: "ein Tisch für zwei" }
    ],
    grammatik: {
      titel: "Impératif — Bitten und Bestellen",
      erklaerung: "Im Restaurant benutzt man oft den <em>Impératif</em> (Befehlsform):<br><strong>Apportez!</strong> = Bringen Sie! &nbsp;|&nbsp; <strong>Donnez-moi!</strong> = Geben Sie mir!<br>Bildung (vous): Infinitiv -er → -ez. &nbsp;Höflicher: <em>Pourriez-vous apporter…?</em>",
      beispiele: [
        { fr: "Apportez-moi l'addition, s'il vous plaît!", de: "Bringen Sie mir die Rechnung, bitte!" },
        { fr: "Je voudrais le plat du jour, s'il vous plaît.", de: "Ich hätte gern das Tagesgericht, bitte." }
      ]
    },
    uebungen: [
      {
        typ: "mc",
        frage: "Wie bittest du um die Rechnung?",
        optionen: ["Le menu, s'il vous plaît!", "L'addition, s'il vous plaît!", "Le dessert, s'il vous plaît!", "Le pourboire, s'il vous plaît!"],
        richtig: 1,
        erklaerung: "'L'addition' = die Rechnung. 'Le pourboire' = Trinkgeld. 'Le menu' = das Menü (nicht die Rechnung!)."
      },
      {
        typ: "luecke",
        frage: "J'ai ___ le plat du jour.",
        optionen: ["commandé", "commande", "commander", "commandez"],
        richtig: 0,
        erklaerung: "Passé composé: j'ai + Partizip Perfekt. commander → commandé."
      },
      {
        typ: "uebersetzung",
        frage: "Übersetze: 'Ich möchte reklamieren — das Steak ist zu durch.'",
        optionen: [
          "Je voudrais réclamer — le steak est trop cuit.",
          "Je voudrais commander — le steak est bien cuit.",
          "Je voudrais manger — le steak est saignant.",
          "Je voudrais partir — le steak est froid."
        ],
        richtig: 0,
        erklaerung: "'Réclamer' = reklamieren. 'Trop cuit' = zu durchgebraten. 'Trop' = zu (viel)."
      },
      {
        typ: "mc",
        frage: "Du bist Vegetarierin. Was sagst du dem Kellner?",
        optionen: [
          "Je suis végétarienne.",
          "Je mange végétarien.",
          "Je voudrais végétarien.",
          "Je suis légume."
        ],
        richtig: 0,
        erklaerung: "'Je suis végétarien(ne)' — mit -ne für Frauen. 'Légume' = Gemüse, nicht Vegetarier!"
      },
      {
        typ: "luecke",
        frage: "___ moi l'addition, s'il vous plaît!",
        optionen: ["Apportez", "Apporte", "Apporter", "Apportons"],
        richtig: 0,
        erklaerung: "Impératif (vous-Form): apporter → Apportez! Regelmäßig: Infinitiv -er → -ez."
      },
      {
        typ: "uebersetzung",
        frage: "Übersetze: 'Einen Tisch für zwei Personen, bitte.'",
        optionen: [
          "Une table pour deux personnes, s'il vous plaît.",
          "Un table pour deux, s'il vous plaît.",
          "Une chaise pour deux personnes, s'il vous plaît.",
          "Une table avec deux, s'il vous plaît."
        ],
        richtig: 0,
        erklaerung: "'Table' ist feminin → 'une table'. 'Pour' = für. 'Personnes' = Personen."
      },
      {
        typ: "richtigfalsch",
        frage: "Ist dieser Satz richtig oder falsch?",
        aussage: "Je voudrais le plat du jour, s'il vous plaît.",
        richtig: true,
        erklaerung: "Richtig! 'Je voudrais + Gericht + s'il vous plaît' ist die klassische höfliche Bestellformel."
      },
      {
        typ: "mc",
        frage: "Du willst wissen, ob ein Gericht scharf ist. Was fragst du?",
        optionen: [
          "C'est épicé?",
          "C'est chaud?",
          "C'est sucré?",
          "C'est froid?"
        ],
        richtig: 0,
        erklaerung: "'Épicé' = scharf (Gewürze). 'Chaud' = heiß (Temperatur). 'Sucré' = süß. Nicht verwechseln!"
      }
    ]
  },

  {
    titel: "Im Hotel",
    icon: "🏨",
    level: "A2",
    kontext: "Du kommst nach einer langen Autofahrt in deinem Hotel in Cannes an. An der Rezeption möchtest du einchecken. Und leider — die Klimaanlage im Zimmer funktioniert nicht und du willst ein Zimmer mit Meerblick!",
    vokabeln: [
      { fr: "une chambre libre", de: "ein freies Zimmer" },
      { fr: "pour combien de nuits?", de: "für wie viele Nächte?" },
      { fr: "avec / sans petit-déjeuner", de: "mit / ohne Frühstück" },
      { fr: "la clé / la carte magnétique", de: "der Schlüssel / die Schlüsselkarte" },
      { fr: "la climatisation", de: "die Klimaanlage" },
      { fr: "Je voudrais signaler un problème.", de: "Ich möchte ein Problem melden." },
      { fr: "pouvoir", de: "können (pouvoir)" },
      { fr: "vouloir", de: "wollen / möchten (vouloir)" }
    ],
    grammatik: {
      titel: "pouvoir und vouloir im Présent",
      erklaerung: "<strong>pouvoir</strong> (können): je peux · tu peux · il peut · nous pouvons · <strong>vous pouvez</strong> · ils peuvent<br><strong>vouloir</strong> (wollen): je veux · tu veux · il veut · nous voulons · <strong>vous voulez</strong> · ils veulent<br>Tipp: <em>je voudrais</em> (ich hätte gern) ist höflicher als <em>je veux</em> (ich will)!",
      beispiele: [
        { fr: "Pouvez-vous changer ma chambre?", de: "Können Sie mein Zimmer wechseln?" },
        { fr: "Je voudrais une chambre avec vue sur la mer.", de: "Ich hätte gern ein Zimmer mit Meerblick." }
      ]
    },
    uebungen: [
      {
        typ: "mc",
        frage: "Wie fragst du, ob ein Zimmer frei ist?",
        optionen: [
          "Avez-vous une chambre libre?",
          "Avez-vous une maison libre?",
          "Voulez-vous une chambre?",
          "Donnez-moi une chambre!"
        ],
        richtig: 0,
        erklaerung: "'Avez-vous une chambre libre?' = Haben Sie ein freies Zimmer? Die klassische Frage an der Rezeption."
      },
      {
        typ: "luecke",
        frage: "Je ___ une chambre avec vue sur la mer.",
        optionen: ["voudrais", "veux", "peux", "dois"],
        richtig: 0,
        erklaerung: "'Je voudrais' = ich hätte gern (höflicher als 'je veux'). Im Hotel immer 'voudrais' benutzen!"
      },
      {
        typ: "uebersetzung",
        frage: "Übersetze: 'Können Sie mein Zimmer wechseln?'",
        optionen: [
          "Pouvez-vous changer ma chambre?",
          "Voulez-vous changer ma chambre?",
          "Devez-vous changer ma chambre?",
          "Pouvez-vous chercher ma chambre?"
        ],
        richtig: 0,
        erklaerung: "'Pouvez-vous' = Können Sie (pouvoir, vous-Form). 'Changer' = wechseln/ändern."
      },
      {
        typ: "mc",
        frage: "Die Klimaanlage geht nicht. Was sagst du an der Rezeption?",
        optionen: [
          "Je voudrais signaler un problème — la climatisation ne fonctionne pas.",
          "Je voudrais une climatisation, s'il vous plaît.",
          "La climatisation est trop froide.",
          "Je veux une nouvelle chambre immédiatement!"
        ],
        richtig: 0,
        erklaerung: "'Signaler un problème' = ein Problem melden. 'Ne fonctionne pas' = funktioniert nicht."
      },
      {
        typ: "luecke",
        frage: "Vous ___ une chambre avec petit-déjeuner?",
        optionen: ["voulez", "voudrais", "veut", "veulent"],
        richtig: 0,
        erklaerung: "vouloir, vous-Form: 'vous voulez'. Merke: 'je voudrais' nur für 1. Person Singular."
      },
      {
        typ: "uebersetzung",
        frage: "Übersetze: 'Ich hätte gern ein Zimmer mit Frühstück für zwei Nächte.'",
        optionen: [
          "Je voudrais une chambre avec petit-déjeuner pour deux nuits.",
          "Je veux une chambre sans petit-déjeuner pour deux nuits.",
          "J'ai une chambre avec petit-déjeuner pour deux nuits.",
          "Je voudrais manger le petit-déjeuner deux fois."
        ],
        richtig: 0,
        erklaerung: "'Avec' = mit. 'Sans' = ohne. 'Pour deux nuits' = für zwei Nächte."
      },
      {
        typ: "richtigfalsch",
        frage: "Ist dieser Satz richtig oder falsch?",
        aussage: "Vous pouvez changer ma chambre, s'il vous plaît?",
        richtig: true,
        erklaerung: "Richtig! 'Pouvez-vous...?' und 'Vous pouvez...?' — beide Frageformen sind korrekt und höflich."
      }
    ]
  },

  {
    titel: "Nach dem Weg fragen",
    icon: "🗺️",
    level: "A2",
    kontext: "Du bist in Montpellier und suchst den nächsten Supermarché. Du fragst einen freundlichen Herrn auf der Straße — er antwortet in schnellem Französisch mit Richtungsanweisungen. Kannst du ihm folgen?",
    vokabeln: [
      { fr: "Excusez-moi!", de: "Entschuldigung!" },
      { fr: "tout droit", de: "geradeaus" },
      { fr: "à gauche / à droite", de: "nach links / nach rechts" },
      { fr: "tournez!", de: "biegen Sie ab!" },
      { fr: "C'est loin?", de: "Ist es weit?" },
      { fr: "à côté de", de: "neben" },
      { fr: "en face de", de: "gegenüber von" },
      { fr: "au bout de la rue", de: "am Ende der Straße" }
    ],
    grammatik: {
      titel: "Impératif für Wegbeschreibungen",
      erklaerung: "Bei Wegbeschreibungen benutzt man fast immer den <em>Impératif</em> (vous-Form):<br><strong>Allez!</strong> Gehen/Fahren Sie! &nbsp;|&nbsp; <strong>Tournez!</strong> Biegen Sie ab! &nbsp;|&nbsp; <strong>Continuez!</strong> Weiter!<br>Bildung (vous): Infinitiv -er → -ez. Ausnahme: <em>aller → allez</em>",
      beispiele: [
        { fr: "Allez tout droit, puis tournez à gauche.", de: "Gehen Sie geradeaus, dann biegen Sie links ab." },
        { fr: "C'est en face de la mairie.", de: "Es ist gegenüber dem Rathaus." }
      ]
    },
    uebungen: [
      {
        typ: "mc",
        frage: "Wie fragst du, wo der Bahnhof ist?",
        optionen: [
          "Où est la gare?",
          "Où est le train?",
          "Comment est la gare?",
          "La gare est ici?"
        ],
        richtig: 0,
        erklaerung: "'Où est + Ort?' = die universelle Formel für 'Wo ist...?'"
      },
      {
        typ: "luecke",
        frage: "Allez ___ droit, puis tournez à gauche.",
        optionen: ["tout", "très", "trop", "tant"],
        richtig: 0,
        erklaerung: "'Tout droit' = geradeaus. 'Puis' = dann/danach."
      },
      {
        typ: "uebersetzung",
        frage: "Übersetze: 'Das Café ist gegenüber dem Hotel.'",
        optionen: [
          "Le café est en face de l'hôtel.",
          "Le café est à côté de l'hôtel.",
          "Le café est derrière l'hôtel.",
          "Le café est loin de l'hôtel."
        ],
        richtig: 0,
        erklaerung: "'En face de' = gegenüber. 'À côté de' = neben. 'Derrière' = hinter."
      },
      {
        typ: "mc",
        frage: "Du willst fragen, wie weit es ist. Was sagst du?",
        optionen: [
          "C'est loin d'ici?",
          "C'est long d'ici?",
          "C'est grand d'ici?",
          "C'est haut d'ici?"
        ],
        richtig: 0,
        erklaerung: "'Loin' = weit (Entfernung). Gegenteil: 'près d'ici' = nah. 'D'ici' = von hier."
      },
      {
        typ: "luecke",
        frage: "Le supermarché est ___ bout de la rue.",
        optionen: ["au", "à la", "à l'", "du"],
        richtig: 0,
        erklaerung: "'Au bout de la rue' = am Ende der Straße. 'Au' = à + le (maskulin)."
      },
      {
        typ: "uebersetzung",
        frage: "Übersetze: 'Biegen Sie rechts ab, dann geradeaus.'",
        optionen: [
          "Tournez à droite, puis tout droit.",
          "Allez à droite, puis à gauche.",
          "Tournez à gauche, puis tout droit.",
          "Continuez à droite, puis tournez."
        ],
        richtig: 0,
        erklaerung: "'Tournez à droite' = biegen Sie rechts ab. 'Puis' = dann. 'Tout droit' = geradeaus."
      },
      {
        typ: "richtigfalsch",
        frage: "Ist dieser Satz richtig oder falsch?",
        aussage: "La pharmacie est à côté du cinéma.",
        richtig: true,
        erklaerung: "Richtig! 'À côté de + le cinéma' → 'à côté du cinéma' (du = de + le — Verschmelzung!)."
      }
    ]
  },

  {
    titel: "Beim Einkaufen",
    icon: "🛒",
    level: "A2",
    kontext: "Du bist auf dem Wochenmarkt in Aix-en-Provence. Es riecht nach Lavendel, frischem Käse und Oliven. Jetzt heißt es: feilschen, fragen und einkaufen auf Französisch!",
    vokabeln: [
      { fr: "Combien ça coûte?", de: "Wie viel kostet das?" },
      { fr: "C'est trop cher!", de: "Das ist zu teuer!" },
      { fr: "Je cherche...", de: "Ich suche..." },
      { fr: "la taille", de: "die Größe" },
      { fr: "Je peux essayer?", de: "Kann ich es anprobieren?" },
      { fr: "un kilo de...", de: "ein Kilo..." },
      { fr: "C'est frais?", de: "Ist es frisch?" },
      { fr: "Je prends ça!", de: "Das nehme ich!" }
    ],
    grammatik: {
      titel: "Demonstrativartikel: ce, cette, ces",
      erklaerung: "Zum Zeigen auf Dinge: <strong>ce</strong> (mask.) &nbsp;|&nbsp; <strong>cette</strong> (fem.) &nbsp;|&nbsp; <strong>ces</strong> (Plural)<br><em>Ce fromage</em> = dieser Käse &nbsp;|&nbsp; <em>cette robe</em> = dieses Kleid &nbsp;|&nbsp; <em>ces olives</em> = diese Oliven<br>Tipp: vor Vokal (mask.): <em>cet hôtel</em>, <em>cet homme</em>.",
      beispiele: [
        { fr: "Combien coûte ce fromage?", de: "Wie viel kostet dieser Käse?" },
        { fr: "Je prends cette robe et ces chaussures.", de: "Ich nehme dieses Kleid und diese Schuhe." }
      ]
    },
    uebungen: [
      {
        typ: "mc",
        frage: "Wie fragst du nach dem Preis?",
        optionen: [
          "Combien ça coûte?",
          "Comment ça coûte?",
          "Quand ça coûte?",
          "Pourquoi ça coûte?"
        ],
        richtig: 0,
        erklaerung: "'Combien' = wie viel (Preis/Menge). Nicht mit 'comment' (= wie, Art/Weise) verwechseln!"
      },
      {
        typ: "luecke",
        frage: "Je ___ une veste en taille 38.",
        optionen: ["cherche", "chercher", "cherché", "chercherai"],
        richtig: 0,
        erklaerung: "'Je cherche' = ich suche (Présent, 1. Person Singular). Regelmäßiges -er Verb."
      },
      {
        typ: "uebersetzung",
        frage: "Übersetze: 'Kann ich es anprobieren?'",
        optionen: [
          "Je peux essayer?",
          "Je veux essayer?",
          "Je dois essayer?",
          "Je peux acheter?"
        ],
        richtig: 0,
        erklaerung: "'Je peux' = ich kann (pouvoir). 'Essayer' = anprobieren / versuchen."
      },
      {
        typ: "mc",
        frage: "Du willst ein Kilo Tomaten. Was sagst du?",
        optionen: [
          "Je voudrais un kilo de tomates.",
          "Je voudrais une kilo des tomates.",
          "Je cherche un kilo tomates.",
          "Donnez-moi tomates un kilo."
        ],
        richtig: 0,
        erklaerung: "'Un kilo de + Nomen (ohne Artikel)' = ein Kilo... Sehr wichtig auf dem Markt!"
      },
      {
        typ: "luecke",
        frage: "Combien coûte ___ fromage?",
        optionen: ["ce", "cette", "ces", "cet"],
        richtig: 0,
        erklaerung: "'Fromage' ist maskulin → Demonstrativartikel: 'ce fromage'. (Vor Vokal: 'cet hôtel')"
      },
      {
        typ: "uebersetzung",
        frage: "Übersetze: 'Das ist zu teuer! Haben Sie etwas Günstigeres?'",
        optionen: [
          "C'est trop cher! Vous avez quelque chose de moins cher?",
          "C'est très cher! Vous avez quelque chose de pas cher?",
          "C'est trop froid! Vous avez quelque chose de chaud?",
          "C'est trop grand! Vous avez quelque chose de petit?"
        ],
        richtig: 0,
        erklaerung: "'Trop cher' = zu teuer. 'Moins cher' = günstiger. 'Quelque chose de' = etwas."
      },
      {
        typ: "richtigfalsch",
        frage: "Ist dieser Satz richtig oder falsch?",
        aussage: "Je prends cette pommes et ce fromage.",
        richtig: false,
        erklaerung: "Falsch! 'Pommes' ist Plural → 'ces pommes'. Richtig: ces pommes et ce fromage."
      }
    ]
  },

  // ── NEU: A2/B1 ──────────────────────────────────────────────────────────────

  {
    titel: "Urlaub erzählen",
    icon: "🌞",
    level: "A2",
    kontext: "Du bist gerade aus dem Urlaub in der Provence zurück. Deine Nachbarin fragt: <em>«Alors, ce voyage en France?»</em> Jetzt erzählst du auf Französisch! Passé composé für Ereignisse, Imparfait für Stimmung und Beschreibungen.",
    vokabeln: [
      { fr: "visiter", de: "besuchen" },
      { fr: "se baigner", de: "schwimmen / sich Baden" },
      { fr: "il faisait chaud", de: "es war heiß (Imparfait)" },
      { fr: "le soleil brillait", de: "die Sonne schien (Imparfait)" },
      { fr: "nous avons visité", de: "wir haben besucht (P.C.)" },
      { fr: "j'ai vu", de: "ich habe gesehen (P.C.)" },
      { fr: "c'était magnifique!", de: "es war wunderschön! (Imparfait)" },
      { fr: "je suis allé(e)", de: "ich bin gegangen/gefahren (P.C.)" }
    ],
    grammatik: {
      titel: "Passé composé vs. Imparfait",
      erklaerung: "<strong>Passé composé</strong> — für einmalige, abgeschlossene Ereignisse:<br><em>J'ai mangé une bouillabaisse.</em> (Ich habe eine Bouillabaisse gegessen.)<br><strong>Imparfait</strong> — für Beschreibungen, Zustände, Gewohnheiten:<br><em>Il faisait chaud et le soleil brillait.</em> (Es war heiß und die Sonne schien.)<br>🎭 Tipp: Imparfait = Bühnenbild. Passé composé = Handlung auf der Bühne.",
      beispiele: [
        { fr: "Il faisait beau quand nous avons visité le marché.", de: "Es war schön, als wir den Markt besucht haben." },
        { fr: "J'étais fatiguée, mais j'ai quand même nagé.", de: "Ich war müde, aber ich bin trotzdem geschwommen." }
      ]
    },
    uebungen: [
      {
        typ: "mc",
        frage: "Du beschreibst das Wetter im Urlaub. Welche Zeit benutzt du?",
        optionen: [
          "Imparfait — es war eine anhaltende Beschreibung.",
          "Passé composé — es war ein einmaliges Ereignis.",
          "Présent — du bist noch im Urlaub.",
          "Futur — das Wetter kommt noch."
        ],
        richtig: 0,
        erklaerung: "Imparfait für Beschreibungen und Zustände. Passé composé für konkrete Ereignisse."
      },
      {
        typ: "luecke",
        frage: "Il ___ très chaud pendant nos vacances.",
        optionen: ["faisait", "a fait", "fait", "fera"],
        richtig: 0,
        erklaerung: "'Il faisait chaud' = es war heiß (Imparfait, Zustandsbeschreibung). Faire: Imparfait-Stamm = fais-."
      },
      {
        typ: "uebersetzung",
        frage: "Übersetze: 'Wir haben ein wunderschönes Schloss besucht.'",
        optionen: [
          "Nous avons visité un beau château.",
          "Nous visitons un beau château.",
          "Nous visitions un beau château.",
          "Nous allons visiter un beau château."
        ],
        richtig: 0,
        erklaerung: "Einmaliges Ereignis → Passé composé: 'nous avons visité'. 'Beau château' = schönes Schloss."
      },
      {
        typ: "mc",
        frage: "Welcher Satz beschreibt eine Gewohnheit im Urlaub (Imparfait)?",
        optionen: [
          "Chaque matin, nous allions à la boulangerie.",
          "Nous sommes allés à la boulangerie lundi.",
          "Nous allons à la boulangerie demain.",
          "Nous irons à la boulangerie ce soir."
        ],
        richtig: 0,
        erklaerung: "'Chaque matin' (jeden Morgen) + Imparfait = Gewohnheit. 'Allions' = Imparfait von aller."
      },
      {
        typ: "luecke",
        frage: "Je ___ allé(e) à la plage tous les jours.",
        optionen: ["suis", "ai", "étais", "vais"],
        richtig: 0,
        erklaerung: "'Aller' → Passé composé mit 'être': je suis allé(e). Bewegungsverben nehmen être!"
      },
      {
        typ: "luecke",
        frage: "C'___ magnifique — je n'ai jamais vu une mer si bleue!",
        optionen: ["était", "a été", "est", "sera"],
        richtig: 0,
        erklaerung: "'C'était' = es war (Imparfait von être). Für Eindrücke und Beschreibungen fast immer Imparfait."
      },
      {
        typ: "uebersetzung",
        frage: "Übersetze: 'Ich bin müde, aber es war toll!'",
        optionen: [
          "Je suis fatiguée, mais c'était super!",
          "J'étais fatiguée, mais c'est super!",
          "Je suis fatiguée, mais c'est bien!",
          "J'étais fatiguée, mais ça va!"
        ],
        richtig: 0,
        erklaerung: "Jetzt müde (Gegenwart) → Présent: 'je suis'. Rückblick auf Urlaub → Imparfait: 'c'était super'."
      },
      {
        typ: "richtigfalsch",
        frage: "Ist dieser Satz richtig oder falsch?",
        aussage: "Hier, nous avons mangé une bonne bouillabaisse et il faisait beau.",
        richtig: true,
        erklaerung: "Richtig! 'Avons mangé' (Passé composé, Ereignis) und 'faisait beau' (Imparfait, Beschreibung) — perfekte Kombination!"
      }
    ]
  },

  {
    titel: "Am Strand",
    icon: "🏖️",
    level: "A2",
    kontext: "Du liegst am Strand an der Côte d'Azur. Die Sonne brennt, das Meer glitzert tiefblau. Am Kiosk möchtest du etwas kaufen — und nachmittags planst du eine Bootsfahrt. Jetzt übst du Futur proche!",
    vokabeln: [
      { fr: "la plage", de: "der Strand" },
      { fr: "la mer", de: "das Meer" },
      { fr: "le sable chaud", de: "der heiße Sand" },
      { fr: "le parasol", de: "der Sonnenschirm" },
      { fr: "se baigner", de: "schwimmen gehen" },
      { fr: "avoir chaud / avoir soif", de: "heiß sein / Durst haben" },
      { fr: "une glace", de: "ein Eis" },
      { fr: "la crème solaire", de: "die Sonnencreme" }
    ],
    grammatik: {
      titel: "Futur proche: aller + Infinitiv",
      erklaerung: "Für Pläne und nahe Zukunft: <em>aller</em> (Présent) + Infinitiv<br><strong>je vais · tu vas · il/elle va · nous allons · vous allez · ils vont</strong><br>Verneinung: <em>je ne vais pas nager</em> = ich werde nicht schwimmen.",
      beispiele: [
        { fr: "Je vais me baigner dans cinq minutes.", de: "Ich werde in fünf Minuten schwimmen gehen." },
        { fr: "Nous allons louer un bateau cet après-midi.", de: "Wir werden heute Nachmittag ein Boot mieten." }
      ]
    },
    uebungen: [
      {
        typ: "mc",
        frage: "Du hast Durst am Strand. Was sagst du?",
        optionen: [
          "J'ai soif — je voudrais une limonade.",
          "J'ai chaud — je voudrais nager.",
          "J'ai faim — je voudrais une glace.",
          "J'ai froid — je voudrais un thé."
        ],
        richtig: 0,
        erklaerung: "'Avoir soif' = Durst haben. 'Avoir chaud' = heiß sein. 'Avoir faim' = Hunger haben."
      },
      {
        typ: "luecke",
        frage: "Je ___ louer un parasol pour l'après-midi.",
        optionen: ["vais", "suis", "ai", "fais"],
        richtig: 0,
        erklaerung: "Futur proche: je vais + Infinitiv. 'Louer' = mieten."
      },
      {
        typ: "uebersetzung",
        frage: "Übersetze: 'Der heiße Sand und das blaue Meer — das ist Urlaub!'",
        optionen: [
          "Le sable chaud et la mer bleue — c'est les vacances!",
          "Le sable froid et la mer verte — c'est les vacances!",
          "Le sable blanc et la mer froide — c'est l'hiver!",
          "Le soleil chaud et la mer — c'est magnifique!"
        ],
        richtig: 0,
        erklaerung: "Adjektive folgen oft dem Nomen: 'sable chaud', 'mer bleue'. 'Les vacances' = der Urlaub (auf Französ. immer Plural!)"
      },
      {
        typ: "mc",
        frage: "Du willst dich eincremen. Was nimmst du?",
        optionen: [
          "La crème solaire",
          "Le sable",
          "Le parasol",
          "La mer"
        ],
        richtig: 0,
        erklaerung: "'La crème solaire' = die Sonnencreme. Am Strand unverzichtbar!"
      },
      {
        typ: "luecke",
        frage: "Nous ___ nous baigner — l'eau a l'air froide!",
        optionen: ["allons", "sommes", "avons", "faisons"],
        richtig: 0,
        erklaerung: "Futur proche mit nous: 'nous allons + Infinitiv'. 'Se baigner' = schwimmen gehen."
      },
      {
        typ: "uebersetzung",
        frage: "Übersetze: 'Ich werde heute Nachmittag ein Eis kaufen.'",
        optionen: [
          "Je vais acheter une glace cet après-midi.",
          "J'ai acheté une glace cet après-midi.",
          "Je voudrais acheter une glace cet après-midi.",
          "Je veux acheter une glace cet après-midi."
        ],
        richtig: 0,
        erklaerung: "Futur proche: 'je vais acheter'. 'Cet après-midi' = heute Nachmittag."
      },
      {
        typ: "richtigfalsch",
        frage: "Ist dieser Satz richtig oder falsch?",
        aussage: "Je vais aller à la plage demain — il va faire beau!",
        richtig: true,
        erklaerung: "Richtig! 'Je vais aller' (ich werde gehen) und 'il va faire beau' (es wird schön sein) — Futur proche korrekt."
      }
    ]
  },

  {
    titel: "Irreguläre Verben im Kontext",
    icon: "🥐",
    level: "B1",
    kontext: "Du frühstückst in einem typischen Pariser Bistro. Die Croissants duften herrlich, der café crème ist perfekt. Jetzt übst du die unverzichtbaren irregulären Verben — ohne sie kommst du im Urlaub nicht weit!",
    vokabeln: [
      { fr: "prendre", de: "nehmen (prendre)" },
      { fr: "je prends / nous prenons", de: "ich nehme / wir nehmen" },
      { fr: "faire", de: "machen / tun (faire)" },
      { fr: "je fais / vous faites", de: "ich mache / Sie machen" },
      { fr: "savoir", de: "wissen (savoir)" },
      { fr: "je sais / il sait", de: "ich weiß / er weiß" },
      { fr: "partir", de: "abreisen / losgehen (partir)" },
      { fr: "je pars / nous partons", de: "ich fahre ab / wir fahren ab" }
    ],
    grammatik: {
      titel: "Die 4 wichtigsten irregulären Verben",
      erklaerung: "<strong>prendre:</strong> je prends · tu prends · il prend · nous prenons · vous prenez · ils prennent<br><strong>faire:</strong> je fais · tu fais · il fait · nous faisons · vous faites · ils font<br><strong>partir:</strong> je pars · tu pars · il part · nous partons · vous partez · ils partent<br><strong>savoir:</strong> je sais · tu sais · il sait · nous savons · vous savez · ils savent",
      beispiele: [
        { fr: "Je prends un café crème et un croissant.", de: "Ich nehme einen Milchkaffee und ein Croissant." },
        { fr: "Nous partons demain matin — tu sais à quelle heure?", de: "Wir fahren morgen früh ab — weißt du um wie viel Uhr?" }
      ]
    },
    uebungen: [
      {
        typ: "mc",
        frage: "Du bestellst im Bistro. 'Ich nehme einen Kaffee.' — Was sagst du?",
        optionen: [
          "Je prends un café.",
          "Je prenons un café.",
          "Je prend un café.",
          "Je prendre un café."
        ],
        richtig: 0,
        erklaerung: "prendre, 1. Person Singular: 'je prends' (mit -ds!). Vorsicht: 'je prend' ohne s ist falsch."
      },
      {
        typ: "luecke",
        frage: "Qu'est-ce que vous ___ pour le petit-déjeuner?",
        optionen: ["prenez", "prenons", "prend", "prendre"],
        richtig: 0,
        erklaerung: "prendre, vous-Form: 'vous prenez'. Merke: -ez für vous bei fast allen Verben."
      },
      {
        typ: "uebersetzung",
        frage: "Übersetze: 'Wir fahren morgen früh um 8 Uhr ab.'",
        optionen: [
          "Nous partons demain matin à 8 heures.",
          "Nous partons demain soir à 8 heures.",
          "Nous partez demain matin à 8 heures.",
          "Nous sommes partis demain à 8 heures."
        ],
        richtig: 0,
        erklaerung: "partir, nous-Form: 'nous partons'. 'Demain matin' = morgen früh. 'À 8 heures' = um 8 Uhr."
      },
      {
        typ: "mc",
        frage: "Der Kellner fragt: 'Qu'est-ce que vous faites aujourd'hui?' Was bedeutet das?",
        optionen: [
          "Was machen Sie heute?",
          "Was nehmen Sie heute?",
          "Was wissen Sie heute?",
          "Was essen Sie heute?"
        ],
        richtig: 0,
        erklaerung: "'Faire' = machen/tun. 'Vous faites' = Sie machen. 'Aujourd'hui' = heute."
      },
      {
        typ: "luecke",
        frage: "Tu ___ à quelle heure le restaurant ouvre?",
        optionen: ["sais", "sait", "savoir", "savons"],
        richtig: 0,
        erklaerung: "savoir, tu-Form: 'tu sais'. 'Sais-tu...?' oder 'Tu sais...?' = Weißt du...?"
      },
      {
        typ: "uebersetzung",
        frage: "Übersetze: 'Was machen wir heute — Strand oder Markt?'",
        optionen: [
          "Qu'est-ce que nous faisons aujourd'hui — la plage ou le marché?",
          "Qu'est-ce que nous prenons aujourd'hui — la plage ou le marché?",
          "Qu'est-ce que vous faites aujourd'hui — la plage ou le marché?",
          "Qu'est-ce que nous savons aujourd'hui — la plage ou le marché?"
        ],
        richtig: 0,
        erklaerung: "faire, nous-Form: 'nous faisons'. 'Ou' = oder. Nicht mit 'où' (= wo) verwechseln!"
      },
      {
        typ: "richtigfalsch",
        frage: "Ist dieser Satz richtig oder falsch?",
        aussage: "Ils prennent le petit-déjeuner à 9 heures chaque matin.",
        richtig: true,
        erklaerung: "Richtig! prendre, 3. Person Plural: 'ils prennent' — mit doppeltem n!"
      }
    ]
  },

  // ── NEU: B2 / C1 / C2 ──────────────────────────────────────────────────────

  {
    titel: "Sich beschweren — Subjonctif",
    icon: "🚨",
    level: "B2",
    kontext: "Der Zug nach Marseille hat 2 Stunden Verspätung, das Hotelzimmer ist noch nicht bereit, und das Gepäck ist verloren. Du weißt aber, wie man sich höflich und bestimmt auf Französisch beschwert — mit dem Subjonctif!",
    vokabeln: [
      { fr: "le retard", de: "die Verspätung" },
      { fr: "se plaindre", de: "sich beschweren" },
      { fr: "un remboursement", de: "eine Rückerstattung" },
      { fr: "malheureusement", de: "leider" },
      { fr: "je regrette que...", de: "es tut mir leid, dass... (+ Subj.)" },
      { fr: "il faut que...", de: "es ist nötig, dass... (+ Subj.)" },
      { fr: "malgré tout", de: "trotz allem" },
      { fr: "annuler", de: "stornieren / absagen" }
    ],
    grammatik: {
      titel: "Subjonctif présent — Pflicht, Wunsch, Emotion",
      erklaerung: "Nach bestimmten Ausdrücken steht der <em>Subjonctif</em>:<br><strong>il faut que</strong> + Subjonctif &nbsp;|&nbsp; <strong>je veux que</strong> + Subjonctif<br><strong>je regrette que</strong> + Subjonctif &nbsp;|&nbsp; <strong>il est nécessaire que</strong> + Subjonctif<br>Bildung: ils-Stamm + -e, -es, -e, -ions, -iez, -ent<br><em>partir → ils partent → que je parte</em>",
      beispiele: [
        { fr: "Il faut que vous me remboursiez le billet.", de: "Sie müssen mir das Ticket erstatten." },
        { fr: "Je regrette que la chambre ne soit pas prête.", de: "Es tut mir leid, dass das Zimmer nicht bereit ist." }
      ]
    },
    uebungen: [
      {
        typ: "mc",
        frage: "Du willst dein Geld zurück. Was sagst du?",
        optionen: [
          "Il faut que vous me remboursiez.",
          "Il faut vous remboursez.",
          "Il faut que vous rembourser.",
          "Il faut que je rembourse."
        ],
        richtig: 0,
        erklaerung: "'Il faut que + Subjonctif': rembourser → vous remboursez (ind.) → vous remboursiez (subj.)."
      },
      {
        typ: "luecke",
        frage: "Je regrette que le train ___ du retard.",
        optionen: ["ait", "a", "avoir", "aura"],
        richtig: 0,
        erklaerung: "Subjonctif von 'avoir': j'aie, tu aies, il ait, nous ayons, vous ayez, ils aient."
      },
      {
        typ: "uebersetzung",
        frage: "Übersetze: 'Es ist notwendig, dass Sie mir eine andere Lösung anbieten.'",
        optionen: [
          "Il est nécessaire que vous m'offriez une autre solution.",
          "Il est nécessaire que vous m'offrez une autre solution.",
          "Il est nécessaire que vous offrir une autre solution.",
          "Il est nécessaire d'offrir une autre solution à moi."
        ],
        richtig: 0,
        erklaerung: "'Offrir' → Subjonctif: vous offriez. Nach 'il est nécessaire que' immer Subjonctif."
      },
      {
        typ: "mc",
        frage: "Welcher Ausdruck verlangt den Subjonctif?",
        optionen: [
          "Je regrette que...",
          "Je pense que...",
          "Il est certain que...",
          "Je sais que..."
        ],
        richtig: 0,
        erklaerung: "Emotionen & Zweifel → Subjonctif. Gewissheit & Fakten (je sais, il est certain...) → Indicatif."
      },
      {
        typ: "luecke",
        frage: "Il faut que nous ___ un autre hôtel pour ce soir.",
        optionen: ["trouvions", "trouvons", "trouver", "trouverons"],
        richtig: 0,
        erklaerung: "'Trouver' → Subjonctif nous: trouvions. Merke die -ions/-iez Endungen für nous/vous."
      },
      {
        typ: "uebersetzung",
        frage: "Übersetze: 'Leider ist mein Gepäck verloren. Ich möchte, dass Sie nachsehen.'",
        optionen: [
          "Malheureusement, mon bagage est perdu. Je veux que vous vérifiez.",
          "Malheureusement, mon bagage est perdu. Je veux vous vérifier.",
          "Malheureusement, mon bagage est perdu. Je voudrais que vous vérifier.",
          "Malheureusement, mon bagage sera perdu. Je veux que vous vérifiez."
        ],
        richtig: 0,
        erklaerung: "'Je veux que + Subjonctif': vérifier → vous vérifiez (ind.) = vous vérifiez (subj., gleiche Form hier)."
      },
      {
        typ: "richtigfalsch",
        frage: "Ist dieser Satz richtig oder falsch?",
        aussage: "Il faut que vous partiez immédiatement.",
        richtig: true,
        erklaerung: "Richtig! 'Partir' → Subjonctif vous: partiez. 'Il faut que + Subjonctif' ist korrekt."
      },
      {
        typ: "mc",
        frage: "Was bedeutet 'malgré tout'?",
        optionen: [
          "trotz allem",
          "vor allem",
          "ohne alles",
          "für alles"
        ],
        richtig: 0,
        erklaerung: "'Malgré' = trotz. 'Malgré tout' = trotz allem. Sehr nützlich beim Beschweren!"
      }
    ]
  },

  {
    titel: "Conditionnel — Was wäre wenn?",
    icon: "💭",
    level: "C1",
    kontext: "Du sitzt abends in einem Bistro in Lyon und träumst: Was wärst du, wenn du Französin wärst? Was hättest du gemacht, wenn du früher gereist wärst? Der Conditionnel passé — die eleganteste Zeitform der Sprache!",
    vokabeln: [
      { fr: "si j'avais su...", de: "wenn ich gewusst hätte..." },
      { fr: "j'aurais pu", de: "ich hätte gekonnt / gekonnt" },
      { fr: "il aurait fallu", de: "es hätte gebraucht / sein müssen" },
      { fr: "à ta place", de: "an deiner Stelle" },
      { fr: "néanmoins", de: "dennoch / trotzdem" },
      { fr: "en fin de compte", de: "letztendlich / am Ende" },
      { fr: "pourtant", de: "doch / jedoch" },
      { fr: "se rendre compte", de: "sich bewusst werden / merken" }
    ],
    grammatik: {
      titel: "Conditionnel passé — irreale Vergangenheit",
      erklaerung: "Für 'hätte/wäre... wenn': <strong>Conditionnel passé</strong><br>Bildung: <em>avoir/être</em> im Conditionnel + Partizip Perfekt<br><em>j'aurais mangé</em> = ich hätte gegessen<br><em>je serais allé(e)</em> = ich wäre gegangen<br><strong>si + Plus-que-parfait → Conditionnel passé</strong><br><em>Si j'avais su, j'aurais réservé.</em> (Wenn ich gewusst hätte, hätte ich reserviert.)",
      beispiele: [
        { fr: "Si j'avais su, j'aurais choisi un autre hôtel.", de: "Wenn ich gewusst hätte, hätte ich ein anderes Hotel gewählt." },
        { fr: "À ta place, je serais resté(e) une semaine de plus.", de: "An deiner Stelle wäre ich eine Woche länger geblieben." }
      ]
    },
    uebungen: [
      {
        typ: "mc",
        frage: "Du bereust etwas. Welche Form benutzt du?",
        optionen: [
          "Conditionnel passé: j'aurais dû...",
          "Imparfait: je devais...",
          "Futur simple: je devrai...",
          "Présent: je dois..."
        ],
        richtig: 0,
        erklaerung: "'J'aurais dû' = ich hätte sollen/müssen. Conditionnel passé für irreale Vergangenheit."
      },
      {
        typ: "luecke",
        frage: "Si j'avais su, je ___ une semaine de plus.",
        optionen: ["serais restée", "suis restée", "resterais", "reste"],
        richtig: 0,
        erklaerung: "si + plus-que-parfait (avais su) → Conditionnel passé: serais restée. Aller/Rester nehmen être!"
      },
      {
        typ: "uebersetzung",
        frage: "Übersetze: 'Wenn es nicht geregnet hätte, wären wir an den Strand gegangen.'",
        optionen: [
          "S'il n'avait pas plu, nous serions allés à la plage.",
          "S'il ne pleurait pas, nous irions à la plage.",
          "S'il n'avait pas plu, nous allions à la plage.",
          "Si il ne pleut pas, nous serions allés à la plage."
        ],
        richtig: 0,
        erklaerung: "Plus-que-parfait (n'avait pas plu) + Conditionnel passé (serions allés). 'Aller' → être!"
      },
      {
        typ: "mc",
        frage: "'À ta place, je n'aurais pas commandé le poisson.' Was bedeutet das?",
        optionen: [
          "An deiner Stelle hätte ich den Fisch nicht bestellt.",
          "An deiner Stelle werde ich den Fisch nicht bestellen.",
          "An deiner Stelle hätte ich den Fisch bestellt.",
          "An deiner Stelle esse ich keinen Fisch."
        ],
        richtig: 0,
        erklaerung: "'À ta place' = an deiner Stelle. 'N'aurais pas commandé' = hätte nicht bestellt."
      },
      {
        typ: "luecke",
        frage: "Il ___ fallu réserver plus tôt — l'hôtel est complet.",
        optionen: ["aurait", "avait", "aura", "a"],
        richtig: 0,
        erklaerung: "'Il aurait fallu' = es hätte gebraucht / man hätte sollen. 'Falloir' → Conditionnel: il aurait fallu."
      },
      {
        typ: "uebersetzung",
        frage: "Übersetze: 'Wenn ich früher angekommen wäre, hätte ich den Sonnenuntergang gesehen.'",
        optionen: [
          "Si j'étais arrivée plus tôt, j'aurais vu le coucher de soleil.",
          "Si j'arrivais plus tôt, j'aurais vu le coucher de soleil.",
          "Si j'étais arrivée plus tôt, je voyais le coucher de soleil.",
          "Si j'étais arrivée plus tôt, je verrai le coucher de soleil."
        ],
        richtig: 0,
        erklaerung: "'Arriver' → être: étais arrivée (plus-que-parfait). 'Voir' → aurais vu (conditionnel passé)."
      },
      {
        typ: "richtigfalsch",
        frage: "Ist dieser Satz richtig oder falsch?",
        aussage: "Si nous avions réservé à l'avance, nous aurions eu une meilleure chambre.",
        richtig: true,
        erklaerung: "Richtig! Plus-que-parfait (avions réservé) + Conditionnel passé (aurions eu) — perfekte Struktur!"
      },
      {
        typ: "mc",
        frage: "Was bedeutet 'pourtant'?",
        optionen: [
          "doch / jedoch (Gegensatz trotz Erwartung)",
          "deshalb / deswegen",
          "trotz allem",
          "außerdem / zudem"
        ],
        richtig: 0,
        erklaerung: "'Pourtant' = doch/jedoch. Beispiel: 'J'avais réservé, et pourtant la chambre n'était pas prête.' (Ich hatte reserviert, und doch war das Zimmer nicht bereit.)"
      }
    ]
  },

  {
    titel: "Elegantes Français — Stil & Nuancen",
    icon: "✨",
    level: "C2",
    kontext: "Du schreibst eine Reisebeschreibung in einem gehobenen Stil — wie ein echter Franzose! Nominalisierungen, Diskursmarker, komplexe Relativsätze. Das ist das Niveau, mit dem man in Frankreich wirklich beeindruckt.",
    vokabeln: [
      { fr: "malgré", de: "trotz (+ Nomen)" },
      { fr: "néanmoins / toutefois", de: "dennoch / gleichwohl" },
      { fr: "en dépit de", de: "ungeachtet / trotz" },
      { fr: "c'est pourquoi", de: "deshalb / daher" },
      { fr: "de surcroît", de: "überdies / darüber hinaus" },
      { fr: "quant à", de: "was ... betrifft" },
      { fr: "d'ores et déjà", de: "schon jetzt / bereits" },
      { fr: "à même de", de: "in der Lage / imstande" }
    ],
    grammatik: {
      titel: "Nominalisierung & gehobene Diskursmarker",
      erklaerung: "Im gehobenen Stil ersetzt man Verben durch Nomen (<em>Nominalisierung</em>):<br><em>Le fait que + Subjonctif</em> &nbsp;|&nbsp; <em>L'arrivée de...</em> statt <em>quand il arrive...</em><br><strong>Diskursmarker C2:</strong><br><em>néanmoins</em> = dennoch &nbsp;|&nbsp; <em>de surcroît</em> = überdies &nbsp;|&nbsp; <em>c'est pourquoi</em> = deshalb<br><em>quant à + Nomen</em> = was ... betrifft",
      beispiele: [
        { fr: "Malgré la chaleur accablante, nous avons néanmoins profité de chaque instant.", de: "Trotz der drückenden Hitze haben wir dennoch jeden Moment genossen." },
        { fr: "Quant à la cuisine provençale, elle reste, de surcroît, l'une des plus raffinées d'Europe.", de: "Was die provenzalische Küche betrifft — sie zählt überdies zu den raffiniertesSten Europas." }
      ]
    },
    uebungen: [
      {
        typ: "mc",
        frage: "Welcher Diskursmarker drückt einen Gegensatz trotz Erwartung aus (C2-Niveau)?",
        optionen: [
          "néanmoins",
          "donc",
          "car",
          "ainsi"
        ],
        richtig: 0,
        erklaerung: "'Néanmoins' = dennoch (gehobener als 'pourtant' oder 'mais'). 'Donc' = also. 'Car' = denn. 'Ainsi' = so."
      },
      {
        typ: "luecke",
        frage: "___ la pluie incessante, le festival a eu lieu comme prévu.",
        optionen: ["Malgré", "Pourtant", "Donc", "Car"],
        richtig: 0,
        erklaerung: "'Malgré + Nomen' = trotz (ohne Verb!). 'Pourtant' steht mitten im Satz und leitet Nebensatz ein."
      },
      {
        typ: "uebersetzung",
        frage: "Übersetze elegant: 'Was das Wetter betrifft — es war überdies außergewöhnlich schön.'",
        optionen: [
          "Quant au temps, il était de surcroît exceptionnellement beau.",
          "Pour le temps, il était aussi très beau.",
          "Quant le temps, il était de surcroît très beau.",
          "En ce qui concerne au temps, il était exceptionnel."
        ],
        richtig: 0,
        erklaerung: "'Quant à + le = quant au'. 'De surcroît' = überdies (gehoben). 'Exceptionnellement' = außergewöhnlich."
      },
      {
        typ: "mc",
        frage: "Wie nominaliert man 'arriver en retard' elegant?",
        optionen: [
          "l'arrivée tardive",
          "le fait d'arriver tard",
          "quand on arrive tard",
          "arriver en retard"
        ],
        richtig: 0,
        erklaerung: "Nominalisierung: Verb → Nomen. 'Arriver' → 'l'arrivée'. 'Tardive' (feminin) = verspätet/spät. Eleganter als Nebensatz!"
      },
      {
        typ: "luecke",
        frage: "La vue sur la Méditerranée était saisissante ; ___, nous avons décidé de prolonger notre séjour.",
        optionen: ["c'est pourquoi", "pourtant", "malgré", "quant à"],
        richtig: 0,
        erklaerung: "'C'est pourquoi' = deshalb/daher (gehobener als 'donc'). Ursache → Folge."
      },
      {
        typ: "uebersetzung",
        frage: "Übersetze: 'Ungeachtet der Kosten ist ein Aufenthalt in der Provence schon jetzt geplant.'",
        optionen: [
          "En dépit des coûts, un séjour en Provence est d'ores et déjà planifié.",
          "Malgré les coûts, un séjour en Provence est déjà planifié.",
          "En dépit les coûts, un séjour en Provence est d'ores et déjà planifié.",
          "Malgré les coûts, un séjour en Provence sera d'ores et déjà planifié."
        ],
        richtig: 0,
        erklaerung: "'En dépit de + les coûts' = en dépit des coûts. 'D'ores et déjà' = schon jetzt (gehobener als 'déjà')."
      },
      {
        typ: "richtigfalsch",
        frage: "Ist dieser Satz richtig oder falsch?",
        aussage: "Quant à la gastronomie française, elle demeure, néanmoins, incomparable.",
        richtig: true,
        erklaerung: "Richtig! 'Quant à' + Nomen, 'néanmoins' eingeschoben — perfekter C2-Stil. 'Demeure' = bleibt (gehobener als 'est')."
      },
      {
        typ: "mc",
        frage: "Was bedeutet 'être à même de faire quelque chose'?",
        optionen: [
          "in der Lage sein, etwas zu tun",
          "bereit sein, etwas zu tun",
          "gezwungen sein, etwas zu tun",
          "anfangen, etwas zu tun"
        ],
        richtig: 0,
        erklaerung: "'Être à même de' = in der Lage sein / imstande sein. Sehr gehobener Ausdruck für 'pouvoir'."
      }
    ]
  }

];

// ────────────────────────────────────────────────────────────────────────────

var Lektionen = {
  current: -1,
  step: null,
  uebungIdx: 0,
  uebungAnswered: false,
  score: 0,

  setStatus: function(idx, status) {
    if (!App.state.lektionenStatus) App.state.lektionenStatus = {};
    App.state.lektionenStatus[idx] = status;
    App.saveState();
  },

  show: function() {
    App.showSection('lektionen');
    var el = document.getElementById('lektionenContent');
    if (!el) return;
    if (!App.state.lektionenDone) App.state.lektionenDone = {};
    if (!App.state.lektionenStatus) App.state.lektionenStatus = {};

    var html = '<h2 style="font-size:18px;font-weight:700;margin-bottom:8px">\uD83D\uDCD6 Lektionen</h2>';
    html += '<p style="color:#666;font-size:14px;margin-bottom:16px">Thematische Einheiten mit Vokabeln, Grammatik und \u00DCbungen — direkt aus dem Urlaub.</p>';

    for (var i = 0; i < LEKTIONEN_DATA.length; i++) {
      var l = LEKTIONEN_DATA[i];
      var done = App.state.lektionenDone[i];
      var status = App.state.lektionenStatus[i];

      var dot = '';
      if (status === 'gut') {
        dot = '<span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:#4ade80;margin-left:6px;vertical-align:middle" title="Gut drauf"></span>';
      } else if (status === 'ueben') {
        dot = '<span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:#fbbf24;margin-left:6px;vertical-align:middle" title="Noch \u00FCben"></span>';
      }

      html += '<div class="lektion-card' + (done ? ' lektion-done' : '') + '" onclick="Lektionen.start(' + i + ')">';
      html += '<div class="lektion-icon">' + l.icon + '</div>';
      html += '<div class="lektion-info">';
      html += '<div class="lektion-titel">' + l.titel + ' <span class="topic-level-tag level-' + l.level + '">' + l.level + '</span>' + dot + '</div>';
      html += '<div class="lektion-meta">' + l.vokabeln.length + ' Vokabeln \u00B7 1 Grammatik \u00B7 ' + l.uebungen.length + ' \u00DCbungen</div>';
      html += '</div>';
      html += '<div class="lektion-status">' + (done ? '\u2705' : '\u25CB') + '</div>';
      html += '</div>';
    }

    el.innerHTML = html;
  },

  start: function(idx) {
    Lektionen.current = idx;
    Lektionen.step = 'vokabeln';
    Lektionen.uebungIdx = 0;
    Lektionen.uebungAnswered = false;
    Lektionen.score = 0;
    Lektionen.render();
  },

  render: function() {
    var el = document.getElementById('lektionenContent');
    if (!el) return;
    var l = LEKTIONEN_DATA[Lektionen.current];
    if (!l) return;

    if (Lektionen.step === 'vokabeln') {
      Lektionen.renderVokabeln(l, el);
    } else if (Lektionen.step === 'grammatik') {
      Lektionen.renderGrammatik(l, el);
    } else if (Lektionen.step === 'uebungen') {
      Lektionen.renderUebung(l, el);
    } else if (Lektionen.step === 'fertig') {
      Lektionen.renderFertig(l, el);
    }
  },

  renderStepBar: function(widthPct, stepText) {
    var html = '<div class="lektion-header">';
    html += '<div class="lektion-step-indicator">' + stepText + '</div>';
    html += '<div class="lektion-step-bar"><div class="lektion-step-fill" style="width:' + widthPct + '%"></div></div>';
    html += '</div>';
    return html;
  },

  renderVokabeln: function(l, el) {
    var html = Lektionen.renderStepBar(33, 'Schritt 1 von 3: Vokabeln');
    html += '<h2 class="lektion-titel-h2">' + l.icon + ' ' + l.titel + '</h2>';

    if (l.kontext) {
      html += '<div style="background:#f0f9ff;border-left:3px solid #3b82f6;padding:10px 14px;border-radius:0 8px 8px 0;margin-bottom:16px;font-size:14px;color:#1e3a5f;line-height:1.5">' + l.kontext + '</div>';
    }

    html += '<p style="color:#666;font-size:14px;margin-bottom:12px">Lerne die ' + l.vokabeln.length + ' Schl\u00FCsselvokabeln:</p>';
    html += '<div class="lektion-vokabeln">';

    for (var i = 0; i < l.vokabeln.length; i++) {
      var v = l.vokabeln[i];
      var safeId = 'lv_' + Lektionen.current + '_' + i;
      html += '<div class="lektion-vokabel-row" id="' + safeId + '">';
      html += '<div class="lektion-vokabel-fr">' + v.fr;
      if (TTS.supported()) {
        html += ' <button class="audio-btn" onclick="TTS.speak(document.getElementById(\'' + safeId + '\').dataset.fr)" title="Aussprache">\uD83D\uDD0A</button>';
      }
      html += '</div>';
      html += '<div class="lektion-vokabel-de">' + v.de + '</div>';
      html += '</div>';
    }
    html += '</div>';

    html += '<div style="margin-top:24px">';
    html += '<button class="btn btn-primary" style="width:100%" onclick="Lektionen.nextStep()">Weiter zur Grammatik \u2192</button>';
    html += '</div>';
    html += '<div style="text-align:center;margin-top:12px"><button class="btn btn-secondary btn-sm" onclick="Lektionen.show()">\u2190 Zur\u00FCck</button></div>';

    el.innerHTML = html;

    for (var i = 0; i < l.vokabeln.length; i++) {
      var row = document.getElementById('lv_' + Lektionen.current + '_' + i);
      if (row) row.dataset.fr = l.vokabeln[i].fr;
    }
  },

  renderGrammatik: function(l, el) {
    var g = l.grammatik;
    var html = Lektionen.renderStepBar(66, 'Schritt 2 von 3: Grammatik');
    html += '<h2 class="lektion-titel-h2">' + l.icon + ' ' + l.titel + '</h2>';

    html += '<div class="gram-card">';
    html += '<div class="gram-thema-titel">\uD83D\uDCDD ' + g.titel + '</div>';
    html += '<div class="gram-erklaerung" style="margin-bottom:14px">' + g.erklaerung + '</div>';
    html += '<div class="gram-subtitle">Beispiele</div>';
    html += '<div class="gram-beispiele">';

    for (var i = 0; i < g.beispiele.length; i++) {
      var b = g.beispiele[i];
      html += '<div class="gram-beispiel-row" id="lgrb_' + i + '">';
      html += '<div class="gram-fr">' + b.fr;
      if (TTS.supported()) {
        html += ' <button class="audio-btn" onclick="TTS.speak(document.getElementById(\'lgrb_' + i + '\').dataset.fr)">\uD83D\uDD0A</button>';
      }
      html += '</div>';
      html += '<div class="gram-de">' + b.de + '</div>';
      html += '</div>';
    }
    html += '</div></div>';

    html += '<div style="margin-top:24px">';
    html += '<button class="btn btn-primary" style="width:100%" onclick="Lektionen.nextStep()">Weiter zu den \u00DCbungen \u2192</button>';
    html += '</div>';

    el.innerHTML = html;

    for (var i = 0; i < g.beispiele.length; i++) {
      var row = document.getElementById('lgrb_' + i);
      if (row) row.dataset.fr = g.beispiele[i].fr;
    }
  },

  renderUebung: function(l, el) {
    var u = l.uebungen[Lektionen.uebungIdx];
    if (!u) { Lektionen.step = 'fertig'; Lektionen.render(); return; }

    var fillWidth = 66 + 34 * (Lektionen.uebungIdx / l.uebungen.length);
    var html = Lektionen.renderStepBar(fillWidth, 'Schritt 3 von 3: \u00DCbungen (' + (Lektionen.uebungIdx + 1) + '/' + l.uebungen.length + ')');
    html += '<h2 class="lektion-titel-h2">' + l.icon + ' ' + l.titel + '</h2>';

    var typLabel = u.typ === 'luecke'         ? '\uD83D\uDCDD L\u00FCckentext'
                 : u.typ === 'uebersetzung'   ? '\uD83D\uDD04 \u00DCbersetzung'
                 : u.typ === 'richtigfalsch'  ? '\u2713\u2717 Richtig oder Falsch?'
                 : u.typ === 'sprechen'       ? '\uD83C\uDF99\uFE0F Sag es auf Franz\u00F6sisch!'
                 : u.typ === 'hoeren'         ? '\uD83D\uDC42 H\u00F6rverst\u00E4ndnis'
                 : '\u2753 Frage';

    html += '<div class="quiz-question" style="margin-bottom:16px">';
    html += '<div class="quiz-direction">' + typLabel + '</div>';
    html += '<div class="question-word" style="font-size:20px;line-height:1.4">' + u.frage + '</div>';
    html += '</div>';

    if (u.typ === 'sprechen') {
      // Sprechen: Zeige deutschen Satz, Mikrofon-Button oder Texteingabe
      html += '<div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:12px;padding:18px;margin-bottom:16px;text-align:center">';
      html += '<div style="font-size:22px;font-weight:600;color:#1e3a5f;margin-bottom:16px">' + u.deutsch + '</div>';
      if (SpeechInput && SpeechInput.supported()) {
        html += '<button class="speech-mic-btn" id="lekt-mic" onclick="Lektionen.startSprechen()" style="font-size:48px;background:none;border:2px solid #3b82f6;border-radius:50%;width:80px;height:80px;cursor:pointer;transition:all 0.3s">\uD83C\uDF99\uFE0F</button>';
        html += '<div style="color:#64748b;font-size:13px;margin-top:8px">Klicke und sprich den Satz auf Franz\u00F6sisch</div>';
      } else {
        html += '<input type="text" id="lekt-text-input" placeholder="Schreib den Satz auf Franz\u00F6sisch..." style="width:100%;padding:10px;font-size:16px;border:1px solid #cbd5e1;border-radius:8px;text-align:center" onkeydown="if(event.key===\'Enter\')Lektionen.checkTextInput()">';
        html += '<div style="margin-top:8px"><button class="btn btn-primary" onclick="Lektionen.checkTextInput()">Pr\u00FCfen</button></div>';
      }
      html += '</div>';
    } else if (u.typ === 'hoeren') {
      // Hören: Audio abspielen, dann MC für Bedeutung
      html += '<div style="text-align:center;margin-bottom:16px">';
      html += '<button id="lekt-audio-btn" onclick="Lektionen.playHoeren()" style="font-size:48px;background:#f0f9ff;border:2px solid #3b82f6;border-radius:50%;width:80px;height:80px;cursor:pointer">\uD83D\uDD0A</button>';
      html += '<div style="color:#64748b;font-size:13px;margin-top:6px">Klicke zum Anh\u00F6ren (mehrfach m\u00F6glich)</div>';
      html += '</div>';
      html += '<div class="quiz-options" id="lektionOptionen">';
      for (var i = 0; i < u.optionen.length; i++) {
        html += '<button class="quiz-option" id="lekt-opt-' + i + '" onclick="Lektionen.answer(' + i + ')">' + u.optionen[i] + '</button>';
      }
      html += '</div>';
    } else if (u.typ === 'richtigfalsch') {
      html += '<div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:14px;margin-bottom:16px;font-size:18px;font-style:italic;color:#1e3a5f;line-height:1.5">' + u.aussage + '</div>';
      html += '<div class="quiz-options" id="lektionOptionen">';
      html += '<button class="quiz-option" id="lekt-opt-0" onclick="Lektionen.answerRF(true)" style="color:#14532d">\u2713 Richtig</button>';
      html += '<button class="quiz-option" id="lekt-opt-1" onclick="Lektionen.answerRF(false)" style="color:#7f1d1d">\u2717 Falsch</button>';
      html += '</div>';
    } else {
      html += '<div class="quiz-options" id="lektionOptionen">';
      for (var i = 0; i < u.optionen.length; i++) {
        html += '<button class="quiz-option" id="lekt-opt-' + i + '" onclick="Lektionen.answer(' + i + ')">' + u.optionen[i] + '</button>';
      }
      html += '</div>';
    }

    html += '<div id="lektionFeedback"></div>';
    el.innerHTML = html;

    // Hörverständnis: Audio automatisch beim Laden abspielen
    if (u.typ === 'hoeren' && TTS.supported()) {
      setTimeout(function() { Lektionen.playHoeren(); }, 400);
    }
  },

  // Hörverständnis: Audio abspielen
  playHoeren: function() {
    var l = LEKTIONEN_DATA[Lektionen.current];
    var u = l.uebungen[Lektionen.uebungIdx];
    if (u && u.audio && TTS.supported()) {
      TTS.speak(u.audio);
    }
  },

  // Sprechen: Mikrofon starten
  startSprechen: function() {
    if (Lektionen.uebungAnswered) return;
    var mic = document.getElementById('lekt-mic');
    if (mic) mic.style.borderColor = '#ef4444';
    if (mic) mic.style.animation = 'pulse 1s infinite';
    SpeechInput.start(function(results, error) {
      if (mic) { mic.style.borderColor = '#3b82f6'; mic.style.animation = ''; }
      if (error || !results) {
        var fb = document.getElementById('lektionFeedback');
        if (fb) fb.innerHTML = '<div style="color:#ef4444;text-align:center;padding:8px">Nicht verstanden \u2014 versuch es nochmal!</div>';
        return;
      }
      Lektionen.checkSprechen(results);
    });
  },

  // Texteingabe-Fallback pr\u00FCfen
  checkTextInput: function() {
    if (Lektionen.uebungAnswered) return;
    var input = document.getElementById('lekt-text-input');
    if (!input || !input.value.trim()) return;
    Lektionen.checkSprechen([input.value.trim()]);
  },

  // Gesprochene/geschriebene Antwort prüfen
  checkSprechen: function(results) {
    if (Lektionen.uebungAnswered) return;
    Lektionen.uebungAnswered = true;
    App.recordPractice();

    var l = LEKTIONEN_DATA[Lektionen.current];
    var u = l.uebungen[Lektionen.uebungIdx];

    // Toleranter Vergleich
    var normalize = function(s) {
      return s.toLowerCase().trim()
        .replace(/[.,!?;:\u0027\u2018\u2019\u201C\u201D\u00AB\u00BB\u0022]/g, '')
        .replace(/\s+/g, ' ').trim();
    };
    var expected = normalize(u.antwort);
    var isCorrect = false;
    var spokenText = results[0] || '';

    for (var i = 0; i < results.length; i++) {
      var spoken = normalize(results[i]);
      if (spoken === expected) { isCorrect = true; spokenText = results[i]; break; }
      // Mindestens 70% der W\u00F6rter stimmen
      var expWords = expected.split(' ');
      var spkWords = spoken.split(' ');
      var match = 0;
      for (var j = 0; j < expWords.length; j++) {
        if (spkWords.indexOf(expWords[j]) > -1) match++;
      }
      if (expWords.length > 0 && match / expWords.length >= 0.7) {
        isCorrect = true; spokenText = results[i]; break;
      }
    }

    if (isCorrect) Lektionen.score++;

    var mic = document.getElementById('lekt-mic');
    if (mic) mic.disabled = true;
    var inp = document.getElementById('lekt-text-input');
    if (inp) inp.disabled = true;

    var fb = document.getElementById('lektionFeedback');
    if (fb) {
      var html = '';
      if (!isCorrect) {
        html += '<div style="background:#fef2f2;border:1px solid #fecaca;border-radius:8px;padding:10px;margin-bottom:8px;text-align:center">';
        html += '<div style="color:#991b1b;font-size:13px">Du hast gesagt:</div>';
        html += '<div style="color:#7f1d1d;font-size:16px;font-weight:600">' + spokenText + '</div>';
        html += '</div>';
      }
      html += '<div class="gram-feedback ' + (isCorrect ? 'gram-feedback-richtig' : 'gram-feedback-falsch') + '">';
      html += isCorrect ? '\u2705 Super! ' : '\u274C Richtige Antwort: <strong>' + u.antwort + '</strong><br>';
      html += u.erklaerung + '</div>';
      fb.innerHTML = html;

      // Bei Fehler: Richtige Antwort vorlesen
      if (!isCorrect && TTS.supported()) {
        TTS.speak(u.antwort);
      }
    }
    setTimeout(function() { Lektionen.nextUebung(); }, isCorrect ? 1500 : 3500);
  },

  answerRF: function(userAnswer) {
    if (Lektionen.uebungAnswered) return;
    Lektionen.uebungAnswered = true;

    var l = LEKTIONEN_DATA[Lektionen.current];
    var u = l.uebungen[Lektionen.uebungIdx];
    var isCorrect = (userAnswer === u.richtig);
    if (isCorrect) Lektionen.score++;
    App.recordPractice();

    var btn0 = document.getElementById('lekt-opt-0'); // ✓ Richtig
    var btn1 = document.getElementById('lekt-opt-1'); // ✗ Falsch
    if (btn0) { btn0.disabled = true; btn0.classList.add('disabled'); }
    if (btn1) { btn1.disabled = true; btn1.classList.add('disabled'); }

    // Richtige Antwort grün markieren
    var correctBtn = (u.richtig === true) ? btn0 : btn1;
    if (correctBtn) correctBtn.classList.add('correct');

    // Falsche Auswahl rot markieren
    if (!isCorrect) {
      var wrongBtn = (userAnswer === true) ? btn0 : btn1;
      if (wrongBtn) wrongBtn.classList.add('wrong');
    }

    var fb = document.getElementById('lektionFeedback');
    if (fb) {
      fb.innerHTML = '<div class="gram-feedback ' + (isCorrect ? 'gram-feedback-richtig' : 'gram-feedback-falsch') + '">' +
        (isCorrect ? '\u2705 Richtig! ' : '\u274C Nicht ganz. ') + u.erklaerung +
        '</div>';
    }
    setTimeout(function() { Lektionen.nextUebung(); }, isCorrect ? 1200 : 2500);
  },

  answer: function(idx) {
    if (Lektionen.uebungAnswered) return;
    Lektionen.uebungAnswered = true;

    var l = LEKTIONEN_DATA[Lektionen.current];
    var u = l.uebungen[Lektionen.uebungIdx];
    var isCorrect = (idx === u.richtig);
    if (isCorrect) Lektionen.score++;
    App.recordPractice();

    for (var i = 0; i < u.optionen.length; i++) {
      var btn = document.getElementById('lekt-opt-' + i);
      if (!btn) continue;
      btn.disabled = true;
      btn.classList.add('disabled');
      if (i === u.richtig) btn.classList.add('correct');
      else if (i === idx && !isCorrect) btn.classList.add('wrong');
    }

    var fb = document.getElementById('lektionFeedback');
    if (fb) {
      fb.innerHTML = '<div class="gram-feedback ' + (isCorrect ? 'gram-feedback-richtig' : 'gram-feedback-falsch') + '">' +
        (isCorrect ? '\u2705 Richtig! ' : '\u274C Nicht ganz. ') + u.erklaerung +
        '</div>';
    }
    setTimeout(function() { Lektionen.nextUebung(); }, isCorrect ? 1200 : 2500);
  },

  nextUebung: function() {
    Lektionen.uebungIdx++;
    Lektionen.uebungAnswered = false;
    var l = LEKTIONEN_DATA[Lektionen.current];
    if (Lektionen.uebungIdx >= l.uebungen.length) {
      Lektionen.step = 'fertig';
    }
    Lektionen.render();
  },

  nextStep: function() {
    if (Lektionen.step === 'vokabeln') Lektionen.step = 'grammatik';
    else if (Lektionen.step === 'grammatik') Lektionen.step = 'uebungen';
    Lektionen.render();
  },

  renderFertig: function(l, el) {
    if (!App.state.lektionenDone) App.state.lektionenDone = {};
    App.state.lektionenDone[Lektionen.current] = true;
    App.saveState();

    var total = l.uebungen.length;
    var pct = total > 0 ? Math.round((Lektionen.score / total) * 100) : 0;
    var emoji = pct >= 80 ? '\uD83C\uDF89' : pct >= 50 ? '\uD83D\uDC4D' : '\uD83D\uDCAA';
    var msg   = pct >= 80 ? 'Super gemacht!' : pct >= 50 ? 'Gut, weiter so!' : '\u00DCbung macht den Meister!';

    var html = '<div class="result-container">';
    html += '<div class="result-icon">' + emoji + '</div>';
    html += '<h2>' + msg + '</h2>';
    html += '<div class="result-score">' + Lektionen.score + ' / ' + total + '</div>';
    html += '<p>richtige Antworten (' + pct + '%)</p>';
    html += '<div class="lektion-abschluss">\u2705 Lektion &ldquo;' + l.titel + '&rdquo; abgeschlossen!</div>';

    html += '<p style="color:#666;font-size:14px;margin-top:20px;margin-bottom:8px">Wie lief diese Lektion?</p>';
    html += '<div style="display:flex;gap:10px;justify-content:center;margin-bottom:20px">';
    html += '<button class="btn btn-sm" onclick="Lektionen.setStatus(' + Lektionen.current + ',\'gut\');Lektionen.show()" style="background:#4ade80;border:1px solid #22c55e;color:#14532d;padding:6px 14px">\u2705 Gut drauf!</button>';
    html += '<button class="btn btn-sm" onclick="Lektionen.setStatus(' + Lektionen.current + ',\'ueben\');Lektionen.show()" style="background:#fbbf24;border:1px solid #f59e0b;color:#78350f;padding:6px 14px">\u26A0\uFE0F Noch \u00FCben</button>';
    html += '</div>';

    html += '<div class="result-buttons">';
    html += '<button class="btn btn-primary" onclick="Lektionen.show()" style="margin-right:8px">Alle Lektionen</button>';
    html += '<button class="btn btn-secondary" onclick="App.goHome()">Startseite</button>';
    html += '</div></div>';

    el.innerHTML = html;
  }
};
