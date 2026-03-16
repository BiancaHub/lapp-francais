/* L'App français V2 — Grammatik-Units
 *
 * Übungstypen:
 *   tippen      — DE-Satz vorgeben, FR-Antwort eintippen
 *   richtigfalsch — Aussage beurteilen (true/false)
 *   luecke      — Satz mit Lücke, Wort eintippen
 *
 * vokabeln: Array von Keys aus VOKABELN (data.js) — passende Themen
 * Status wird in app.js verwaltet (localStorage)
 */

var GRAMMAR_UNITS = [

  // ══════════════════════════════════════════════════════════════════
  //  A1
  // ══════════════════════════════════════════════════════════════════

  {
    id: 'artikel', level: 'A1', titel: 'Artikel: le, la, les, un, une',
    vokabeln: ['begruessung'],
    erklaerung:
      'Im Französischen hat jedes Nomen ein Geschlecht — männlich (<em>masculin</em>) oder weiblich (<em>féminin</em>).<br><br>' +
      '<strong>Bestimmte Artikel</strong> (= "der/die/das"):<br>' +
      '• <em>le</em> → männlich: <em>le chat</em> (die Katze)<br>' +
      '• <em>la</em> → weiblich: <em>la maison</em> (das Haus)<br>' +
      '• <em>les</em> → Plural: <em>les enfants</em> (die Kinder)<br><br>' +
      '<strong>Unbestimmte Artikel</strong> (= "ein/eine"):<br>' +
      '• <em>un</em> → männlich: <em>un chien</em> (ein Hund)<br>' +
      '• <em>une</em> → weiblich: <em>une fleur</em> (eine Blume)<br><br>' +
      '<strong>Achtung:</strong> Vor Vokalen wird <em>le/la</em> zu <em>l\'</em>: <em>l\'ami</em>, <em>l\'école</em>',
    beispiele: [
      { fr: 'le livre',   de: 'das Buch' },
      { fr: 'la femme',   de: 'die Frau' },
      { fr: 'les amis',   de: 'die Freunde' },
      { fr: 'un garçon',  de: 'ein Junge' },
      { fr: 'une ville',  de: 'eine Stadt' }
    ],
    uebungen: [
      { typ: 'tippen',   de: 'das Buch',       fr: 'le livre',      erklaerung: 'livre = männlich → le livre' },
      { typ: 'tippen',   de: 'die Frau',        fr: 'la femme',      erklaerung: 'femme = weiblich → la femme' },
      { typ: 'tippen',   de: 'die Freunde',     fr: 'les amis',      erklaerung: 'Plural → les amis' },
      { typ: 'tippen',   de: 'ein Hund',        fr: 'un chien',      erklaerung: 'chien = männlich → un chien' },
      { typ: 'tippen',   de: 'eine Blume',      fr: 'une fleur',     erklaerung: 'fleur = weiblich → une fleur' },
      { typ: 'tippen',   de: 'die Schule',      fr: "l'école",       erklaerung: 'école beginnt mit Vokal → l\'école' },
      { typ: 'richtigfalsch', frage: '"Une maison" bedeutet "das Haus".', antwort: false,
        erklaerung: '"une" = ein/eine (unbestimmt). "Das Haus" = la maison.' },
      { typ: 'richtigfalsch', frage: 'Vor Vokalen wird "le" und "la" zu "l\'".', antwort: true,
        erklaerung: 'z.B. l\'ami (m.), l\'école (f.)' }
    ]
  },

  {
    id: 'pronomen', level: 'A1', titel: 'Personalpronomen',
    vokabeln: ['begruessung'],
    erklaerung:
      'Die Personalpronomen ersetzen Namen und bestimmen die Verbform:<br><br>' +
      '<table class="gram-table"><tr><th>Pronomen</th><th>Bedeutung</th></tr>' +
      '<tr><td><em>je (j\')</em></td><td>ich</td></tr>' +
      '<tr><td><em>tu</em></td><td>du (vertraut)</td></tr>' +
      '<tr><td><em>il / elle</em></td><td>er / sie</td></tr>' +
      '<tr><td><em>nous</em></td><td>wir</td></tr>' +
      '<tr><td><em>vous</em></td><td>ihr / Sie (förmlich)</td></tr>' +
      '<tr><td><em>ils / elles</em></td><td>sie (Pl. m. / Pl. f.)</td></tr></table><br>' +
      '<strong>Tipp:</strong> <em>vous</em> ist sowohl Plural ("ihr") als auch Höflichkeitsform ("Sie").<br>' +
      '<strong>Tipp:</strong> Vor Vokal: <em>je</em> → <em>j\'</em>: <em>j\'habite, j\'aime</em>',
    beispiele: [
      { fr: 'Je suis française.',      de: 'Ich bin Französin.' },
      { fr: 'Tu parles bien.',         de: 'Du sprichst gut.' },
      { fr: 'Elle aime le café.',      de: 'Sie mag Kaffee.' },
      { fr: 'Nous habitons à Paris.',  de: 'Wir wohnen in Paris.' },
      { fr: 'Ils travaillent beaucoup.', de: 'Sie arbeiten viel.' }
    ],
    uebungen: [
      { typ: 'tippen',   de: 'ich',             fr: 'je',            erklaerung: '"je" = ich (vor Vokal: j\')' },
      { typ: 'tippen',   de: 'du',              fr: 'tu',            erklaerung: '"tu" = du (vertraut)' },
      { typ: 'tippen',   de: 'er',              fr: 'il',            erklaerung: '"il" = er' },
      { typ: 'tippen',   de: 'wir',             fr: 'nous',          erklaerung: '"nous" = wir' },
      { typ: 'tippen',   de: 'ihr / Sie',       fr: 'vous',          erklaerung: '"vous" = ihr oder höfliches "Sie"' },
      { typ: 'tippen',   de: 'sie (Plural, m.)', fr: 'ils',          erklaerung: '"ils" = sie (m. Plural oder gemischt)' },
      { typ: 'richtigfalsch', frage: '"Ils" gilt nur für rein männliche Gruppen.', antwort: false,
        erklaerung: '"Ils" gilt auch für gemischte Gruppen (Männer + Frauen).' },
      { typ: 'richtigfalsch', frage: '"Vous" kann sowohl "ihr" als auch "Sie" bedeuten.', antwort: true,
        erklaerung: 'Genau — vous ist Plural UND Höflichkeitsform.' }
    ]
  },

  {
    id: 'etre', level: 'A1', titel: 'être — sein',
    vokabeln: ['begruessung'],
    erklaerung:
      '<em>être</em> (sein) ist eines der wichtigsten Verben. Es ist unregelmäßig:<br><br>' +
      '<table class="gram-table">' +
      '<tr><td><em>je suis</em></td><td>ich bin</td></tr>' +
      '<tr><td><em>tu es</em></td><td>du bist</td></tr>' +
      '<tr><td><em>il/elle est</em></td><td>er/sie ist</td></tr>' +
      '<tr><td><em>nous sommes</em></td><td>wir sind</td></tr>' +
      '<tr><td><em>vous êtes</em></td><td>ihr seid / Sie sind</td></tr>' +
      '<tr><td><em>ils/elles sont</em></td><td>sie sind</td></tr>' +
      '</table><br>' +
      '<strong>être</strong> braucht man für Berufe, Nationalitäten und Eigenschaften.<br>' +
      'z.B. <em>Je suis allemande.</em> — Ich bin Deutsche.',
    beispiele: [
      { fr: 'Je suis professeur.',  de: 'Ich bin Lehrer/in.' },
      { fr: 'Tu es gentil.',        de: 'Du bist nett.' },
      { fr: 'Il est médecin.',      de: 'Er ist Arzt.' },
      { fr: 'Nous sommes amis.',    de: 'Wir sind Freunde.' },
      { fr: 'Elles sont belles.',   de: 'Sie sind schön.' }
    ],
    uebungen: [
      { typ: 'tippen',   de: 'ich bin',         fr: 'je suis',       erklaerung: 'être: je → suis' },
      { typ: 'tippen',   de: 'du bist',         fr: 'tu es',         erklaerung: 'être: tu → es' },
      { typ: 'tippen',   de: 'er ist',          fr: 'il est',        erklaerung: 'être: il → est' },
      { typ: 'tippen',   de: 'wir sind',        fr: 'nous sommes',   erklaerung: 'être: nous → sommes' },
      { typ: 'tippen',   de: 'ihr seid',        fr: 'vous êtes',     erklaerung: 'être: vous → êtes' },
      { typ: 'tippen',   de: 'sie sind (Pl.)',  fr: 'ils sont',      erklaerung: 'être: ils/elles → sont' },
      { typ: 'tippen',   de: 'Ich bin Deutsche.',fr: 'Je suis allemande.', erklaerung: 'Nationalität mit être' },
      { typ: 'richtigfalsch', frage: '"Je suis" bedeutet "ich habe".', antwort: false,
        erklaerung: '"Je suis" = ich bin. "Ich habe" = j\'ai (avoir).' }
    ]
  },

  {
    id: 'avoir', level: 'A1', titel: 'avoir — haben',
    vokabeln: ['restaurant'],
    erklaerung:
      '<em>avoir</em> (haben) — ebenfalls unregelmäßig und sehr wichtig:<br><br>' +
      '<table class="gram-table">' +
      '<tr><td><em>j\'ai</em></td><td>ich habe</td></tr>' +
      '<tr><td><em>tu as</em></td><td>du hast</td></tr>' +
      '<tr><td><em>il/elle a</em></td><td>er/sie hat</td></tr>' +
      '<tr><td><em>nous avons</em></td><td>wir haben</td></tr>' +
      '<tr><td><em>vous avez</em></td><td>ihr habt / Sie haben</td></tr>' +
      '<tr><td><em>ils/elles ont</em></td><td>sie haben</td></tr>' +
      '</table><br>' +
      '<strong>Wichtig:</strong> Im Französischen sagt man "ich habe Hunger/Durst/Angst" mit <em>avoir</em>:<br>' +
      '→ <em>J\'ai faim.</em> (Ich bin hungrig.) &nbsp;·&nbsp; <em>J\'ai soif.</em> (Ich habe Durst.) &nbsp;·&nbsp; <em>J\'ai peur.</em> (Ich habe Angst.)',
    beispiele: [
      { fr: "J'ai un chien.",        de: 'Ich habe einen Hund.' },
      { fr: 'Tu as raison.',         de: 'Du hast recht.' },
      { fr: 'Elle a faim.',          de: 'Sie hat Hunger.' },
      { fr: 'Nous avons une voiture.', de: 'Wir haben ein Auto.' },
      { fr: 'Ils ont froid.',        de: 'Sie frieren. (lit. Sie haben Kälte.)' }
    ],
    uebungen: [
      { typ: 'tippen',   de: 'ich habe',        fr: "j'ai",          erklaerung: 'avoir: je → j\'ai (vor Vokal)' },
      { typ: 'tippen',   de: 'du hast',         fr: 'tu as',         erklaerung: 'avoir: tu → as' },
      { typ: 'tippen',   de: 'er hat',          fr: 'il a',          erklaerung: 'avoir: il → a' },
      { typ: 'tippen',   de: 'wir haben',       fr: 'nous avons',    erklaerung: 'avoir: nous → avons' },
      { typ: 'tippen',   de: 'Sie haben',       fr: 'vous avez',     erklaerung: 'avoir: vous → avez' },
      { typ: 'tippen',   de: 'Ich habe Hunger.', fr: "J'ai faim.",   erklaerung: 'Körpergefühle mit avoir: avoir faim' },
      { typ: 'tippen',   de: 'Ich habe Durst.', fr: "J'ai soif.",    erklaerung: 'avoir soif = Durst haben' },
      { typ: 'richtigfalsch', frage: '"J\'ai peur" bedeutet "Ich bin mutig".', antwort: false,
        erklaerung: '"J\'ai peur" = Ich habe Angst (ich bin ängstlich).' }
    ]
  },

  {
    id: 'verneinung', level: 'A1', titel: 'Verneinung: ne … pas',
    vokabeln: ['begruessung'],
    erklaerung:
      'Im Französischen steht die Verneinung um das Verb herum:<br><br>' +
      '<strong>Formel: ne + Verb + pas</strong><br><br>' +
      '• <em>Je parle.</em> → <em>Je <u>ne</u> parle <u>pas</u>.</em><br>' +
      '• <em>Il est là.</em> → <em>Il <u>n\'</u>est <u>pas</u> là.</em><br><br>' +
      'Vor Vokalen wird <em>ne</em> zu <em>n\'</em>.<br><br>' +
      'In der Umgangssprache fällt <em>ne</em> oft weg:<br>' +
      '→ <em>Je sais pas.</em> — aber schreib es besser vollständig!',
    beispiele: [
      { fr: 'Je ne comprends pas.',       de: 'Ich verstehe nicht.' },
      { fr: "Il n'est pas là.",           de: 'Er ist nicht da.' },
      { fr: "Nous n'avons pas faim.",     de: 'Wir haben keinen Hunger.' },
      { fr: 'Elle ne parle pas anglais.', de: 'Sie spricht kein Englisch.' },
      { fr: "Ce n'est pas vrai.",         de: 'Das stimmt nicht.' }
    ],
    uebungen: [
      { typ: 'tippen',   de: 'Ich verstehe nicht.',        fr: 'Je ne comprends pas.',       erklaerung: 'comprends beginnt mit Konsonant → ne comprends pas' },
      { typ: 'tippen',   de: 'Er ist nicht da.',           fr: "Il n'est pas là.",           erklaerung: 'est beginnt mit Vokal → n\'est pas' },
      { typ: 'tippen',   de: 'Sie spricht kein Englisch.', fr: 'Elle ne parle pas anglais.', erklaerung: 'parle → ne parle pas' },
      { typ: 'tippen',   de: 'Das stimmt nicht.',          fr: "Ce n'est pas vrai.",         erklaerung: 'est → n\'est pas' },
      { typ: 'tippen',   de: 'Ich bin nicht Franzose.',    fr: 'Je ne suis pas français.',   erklaerung: 'suis → ne suis pas' },
      { typ: 'richtigfalsch', frage: '"Il n\'est pas" — das n\' kommt wegen des Vokals.', antwort: true,
        erklaerung: 'Vor Vokalen (est, a, ai…) wird "ne" zu "n\'".' },
      { typ: 'richtigfalsch', frage: 'Im gesprochenen Alltags-Französisch fällt "ne" oft weg.', antwort: true,
        erklaerung: '"Je sais pas" statt "Je ne sais pas" — in der Schrift besser vollständig.' }
    ]
  },


  // ══════════════════════════════════════════════════════════════════
  //  A1 — Fragesätze
  // ══════════════════════════════════════════════════════════════════

  {
    id: 'fragesaetze', level: 'A1', titel: 'Fragesätze',
    vokabeln: ['begruessung', 'restaurant'],
    erklaerung:
      'Im Französischen gibt es <strong>drei Wege</strong>, eine Frage zu stellen:<br><br>' +
      '<strong>1. Intonation</strong> — Satzstellung bleibt, Stimme steigt am Ende:<br>' +
      '→ <em>Tu parles français ?</em><br><br>' +
      '<strong>2. Est-ce que</strong> — wird vorne angehängt:<br>' +
      '→ <em>Est-ce que tu parles français ?</em><br>' +
      'Vor Vokal: <em>Est-ce qu\'il parle… ?</em><br><br>' +
      '<strong>3. Inversion</strong> — Verb und Pronomen tauschen die Plätze (förmlich):<br>' +
      '→ <em>Parles-tu français ?</em><br><br>' +
      '<strong>Fragewörter:</strong><br>' +
      '<table class="gram-table">' +
      '<tr><td><em>où</em></td><td>wo / wohin</td></tr>' +
      '<tr><td><em>quand</em></td><td>wann</td></tr>' +
      '<tr><td><em>comment</em></td><td>wie</td></tr>' +
      '<tr><td><em>pourquoi</em></td><td>warum</td></tr>' +
      '<tr><td><em>qui</em></td><td>wer</td></tr>' +
      '<tr><td><em>quoi / que</em></td><td>was</td></tr>' +
      '<tr><td><em>combien</em></td><td>wie viel / wie viele</td></tr>' +
      '</table>',
    beispiele: [
      { fr: 'Où est la gare ?',                 de: 'Wo ist der Bahnhof?' },
      { fr: 'Est-ce que vous avez une table ?', de: 'Haben Sie einen Tisch?' },
      { fr: 'Combien ça coûte ?',               de: 'Wie viel kostet das?' },
      { fr: 'À quelle heure arrive le bus ?',   de: 'Um wie viel Uhr kommt der Bus?' },
      { fr: 'Où sont les toilettes ?',          de: 'Wo sind die Toiletten?' }
    ],
    uebungen: [
      { typ: 'tippen', de: 'Wo ist das Hotel?',              fr: "Où est l'hôtel ?",                          erklaerung: 'où = wo' },
      { typ: 'tippen', de: 'Haben Sie einen Tisch für zwei?', fr: 'Est-ce que vous avez une table pour deux ?', erklaerung: 'est-ce que wird einfach vorne angehängt' },
      { typ: 'tippen', de: 'Wie viel kostet das?',           fr: 'Combien ça coûte ?',                        erklaerung: 'combien = wie viel' },
      { typ: 'tippen', de: 'Wann fährt der Bus ab?',         fr: 'À quelle heure part le bus ?',              erklaerung: 'à quelle heure = um wie viel Uhr / wann' },
      { typ: 'tippen', de: 'Sprechen Sie Deutsch?',          fr: 'Est-ce que vous parlez allemand ?',         erklaerung: 'est-ce que + vous-Form' },
      { typ: 'tippen', de: 'Wo sind die Toiletten?',         fr: 'Où sont les toilettes ?',                   erklaerung: 'où + être Plural: sont' },
      { typ: 'richtigfalsch', frage: 'Bei der Inversionsfrage tauschen Verb und Pronomen die Plätze: "Parles-tu ?"', antwort: true,
        erklaerung: 'Genau — Verb vor Pronomen, verbunden mit Bindestrich.' },
      { typ: 'richtigfalsch', frage: '"Est-ce que" kann nur vor Vokalen verwendet werden.', antwort: false,
        erklaerung: '"Est-ce que" wird immer vorne angehängt. Vor Vokalen wird es zu "Est-ce qu\'".' },
      { typ: 'luecke', satz: '___ est le restaurant ?', loesung: 'Où',  erklaerung: 'où = wo' },
      { typ: 'luecke', satz: 'Est-ce ___ vous avez une chambre libre ?', loesung: 'que', erklaerung: 'est-ce que — vor Konsonant bleibt "que"' }
    ]
  },

  // ══════════════════════════════════════════════════════════════════
  //  A1 — Adjektive
  // ══════════════════════════════════════════════════════════════════

  {
    id: 'adjektive', level: 'A1', titel: 'Adjektive: Stellung & Angleichung',
    vokabeln: ['strand', 'hotel'],
    erklaerung:
      'Adjektive stehen im Französischen meistens <strong>nach dem Nomen</strong>:<br>' +
      '→ <em>un hôtel confortable</em> (ein komfortables Hotel)<br>' +
      '→ <em>une mer bleue</em> (ein blaues Meer)<br><br>' +
      'Ausnahmen — diese Adjektive stehen <strong>vor dem Nomen</strong> (Eselsbrücke: <strong>BAGS</strong> = Beauty, Age, Goodness, Size):<br>' +
      '<em>beau/belle, jeune, vieux/vieille, bon/bonne, grand/grande, petit/petite, nouveau/nouvelle</em><br>' +
      '→ <em>un beau village</em>, <em>une grande plage</em><br><br>' +
      '<strong>Angleichung ans Geschlecht:</strong><br>' +
      '<table class="gram-table">' +
      '<tr><th></th><th>m. Sg.</th><th>f. Sg.</th><th>m. Pl.</th><th>f. Pl.</th></tr>' +
      '<tr><td>groß</td><td><em>grand</em></td><td><em>grande</em></td><td><em>grands</em></td><td><em>grandes</em></td></tr>' +
      '<tr><td>schön</td><td><em>beau</em></td><td><em>belle</em></td><td><em>beaux</em></td><td><em>belles</em></td></tr>' +
      '<tr><td>gut</td><td><em>bon</em></td><td><em>bonne</em></td><td><em>bons</em></td><td><em>bonnes</em></td></tr>' +
      '<tr><td>alt</td><td><em>vieux</em></td><td><em>vieille</em></td><td><em>vieux</em></td><td><em>vieilles</em></td></tr>' +
      '<tr><td>neu</td><td><em>nouveau</em></td><td><em>nouvelle</em></td><td><em>nouveaux</em></td><td><em>nouvelles</em></td></tr>' +
      '</table><br>' +
      '<strong>Sonderfall:</strong> <em>beau → bel</em> vor Vokal/stumm-h: <em>un bel hôtel</em>',
    beispiele: [
      { fr: 'une grande plage',        de: 'ein großer Strand' },
      { fr: 'un beau village',         de: 'ein schönes Dorf' },
      { fr: 'une chambre confortable', de: 'ein komfortables Zimmer' },
      { fr: 'le vin rouge',            de: 'der Rotwein' },
      { fr: 'une bonne idée',          de: 'eine gute Idee' }
    ],
    uebungen: [
      { typ: 'tippen', de: 'ein großer Strand',          fr: 'une grande plage',  erklaerung: 'plage (f.) → grande (f.)' },
      { typ: 'tippen', de: 'ein schönes Hotel',           fr: 'un bel hôtel',      erklaerung: 'beau → bel vor Vokal/stumm-h; hôtel (m.)' },
      { typ: 'tippen', de: 'der Rotwein',                 fr: 'le vin rouge',      erklaerung: 'Farben stehen nach dem Nomen' },
      { typ: 'tippen', de: 'eine gute Idee',               fr: 'une bonne idée',    erklaerung: 'bon (m.) → bonne (f.); steht vor dem Nomen' },
      { typ: 'tippen', de: 'ein komfortables Zimmer',     fr: 'une chambre confortable', erklaerung: 'confortable = gleich für m. und f.' },
      { typ: 'tippen', de: 'schöne Strände',              fr: 'de belles plages',  erklaerung: 'Pl. vor Nomen: des → de; belle → belles' },
      { typ: 'richtigfalsch', frage: 'Im Französischen stehen Farben immer vor dem Nomen.', antwort: false,
        erklaerung: 'Farben stehen nach dem Nomen: "le vin rouge", "une mer bleue".' },
      { typ: 'richtigfalsch', frage: '"Grand" wird im Femininum zu "grande".', antwort: true,
        erklaerung: 'Ja — grand (m.) → grande (f.), z.B. une grande ville.' },
      { typ: 'luecke', satz: 'un ___ village (schönes Dorf)', loesung: 'beau',   erklaerung: 'beau steht vor dem Nomen (BAGS-Adjektiv)' },
      { typ: 'luecke', satz: 'une chambre ___ (großes Zimmer)', loesung: 'grande', erklaerung: 'chambre (f.) → grande (f.)' }
    ]
  },

  // ══════════════════════════════════════════════════════════════════
  //  A2 — -er Verben
  // ══════════════════════════════════════════════════════════════════

  {
    id: 'er-verben', level: 'A2', titel: '-er Verben: parler, manger, habiter',
    vokabeln: ['begruessung', 'restaurant'],
    erklaerung:
      '-er Verben sind die größte Verbgruppe im Französischen. Das Muster ist regelmäßig:<br><br>' +
      '<strong>parler</strong> (sprechen) — Stamm: <em>parl-</em><br>' +
      '<table class="gram-table">' +
      '<tr><td><em>je parle</em></td><td>ich spreche</td></tr>' +
      '<tr><td><em>tu parles</em></td><td>du sprichst</td></tr>' +
      '<tr><td><em>il/elle parle</em></td><td>er/sie spricht</td></tr>' +
      '<tr><td><em>nous parlons</em></td><td>wir sprechen</td></tr>' +
      '<tr><td><em>vous parlez</em></td><td>ihr sprecht / Sie sprechen</td></tr>' +
      '<tr><td><em>ils/elles parlent</em></td><td>sie sprechen</td></tr>' +
      '</table><br>' +
      '<strong>Tipp:</strong> je, tu, il/elle, ils/elles klingen gleich — das -e, -es, -ent ist stumm!<br><br>' +
      '<strong>Besonderheiten:</strong><br>' +
      '• <em>manger</em> (essen): nous <em>mang<u>e</u>ons</em> — e vor o/a für weichen Laut<br>' +
      '• <em>commencer</em> (beginnen): nous <em>commen<u>ç</u>ons</em> — ç vor o/a<br>' +
      '• <em>appeler</em> (anrufen): j\'<em>app<u>elle</u></em>, tu <em>app<u>elles</u></em> — Konsonantenverdoppelung<br><br>' +
      '<strong>Häufige -er Verben:</strong> parler, manger, habiter (wohnen), travailler (arbeiten), voyager (reisen), commander (bestellen), aimer (mögen), arriver (ankommen)',
    beispiele: [
      { fr: 'Je parle français.',         de: 'Ich spreche Französisch.' },
      { fr: 'Nous habitons à Berlin.',     de: 'Wir wohnen in Berlin.' },
      { fr: 'Elle travaille beaucoup.',    de: 'Sie arbeitet viel.' },
      { fr: 'Vous voyagez souvent ?',      de: 'Reisen Sie oft?' },
      { fr: 'Ils mangent au restaurant.', de: 'Sie essen im Restaurant.' }
    ],
    uebungen: [
      { typ: 'tippen', de: 'Ich spreche Französisch.',      fr: 'Je parle français.',         erklaerung: 'parler: je → parle' },
      { typ: 'tippen', de: 'Wir wohnen in Berlin.',         fr: 'Nous habitons à Berlin.',    erklaerung: 'habiter: nous → habitons' },
      { typ: 'tippen', de: 'Sie arbeitet viel.',            fr: 'Elle travaille beaucoup.',   erklaerung: 'travailler: elle → travaille' },
      { typ: 'tippen', de: 'Sie essen im Restaurant.',      fr: 'Ils mangent au restaurant.', erklaerung: 'manger: ils → mangent' },
      { typ: 'tippen', de: 'Ich reise nach Frankreich.',    fr: 'Je voyage en France.',       erklaerung: 'voyager: je → voyage' },
      { typ: 'tippen', de: 'Wir bestellen zwei Kaffees.',   fr: 'Nous commandons deux cafés.', erklaerung: 'commander: nous → commandons' },
      { typ: 'tippen', de: 'Du magst Paris.',               fr: 'Tu aimes Paris.',            erklaerung: 'aimer: tu → aimes' },
      { typ: 'richtigfalsch', frage: 'Bei -er Verben ist die Endung für je, tu, il/elle und ils/elles im Klang identisch — sie sind alle stumm.', antwort: true,
        erklaerung: 'Ja — parle, parles, parlent klingen alle gleich. Nur nous (-ons) und vous (-ez) sind anders.' },
      { typ: 'richtigfalsch', frage: '"Nous mangons" ist korrekt für "nous manger".', antwort: false,
        erklaerung: 'Wegen des weichen g-Lauts: nous mangEons — das e bleibt erhalten.' },
      { typ: 'luecke', satz: 'Elle ___ dans un hôtel. (travailler)', loesung: 'travaille', erklaerung: 'travailler: elle → travaille' },
      { typ: 'luecke', satz: 'Vous ___ français ? (parler)',          loesung: 'parlez',    erklaerung: 'parler: vous → parlez' }
    ]
  },

  // ══════════════════════════════════════════════════════════════════
  //  A2 — Passé composé
  // ══════════════════════════════════════════════════════════════════

  {
    id: 'passe-compose', level: 'A2', titel: 'Passé composé: Vergangenheit',
    vokabeln: ['restaurant', 'strand'],
    erklaerung:
      'Das <em>passé composé</em> ist die häufigste Vergangenheitsform im gesprochenen Französisch.<br><br>' +
      '<strong>Formel: avoir oder être (konjugiert) + Partizip (participe passé)</strong><br><br>' +
      '<strong>Partizip bilden:</strong><br>' +
      '• -er Verben: <em>manger → mangé</em><br>' +
      '• -ir Verben: <em>finir → fini</em><br>' +
      '• -re Verben: <em>prendre → pris</em> (unregelmäßig)<br><br>' +
      '<strong>Mit avoir</strong> (die meisten Verben):<br>' +
      '<table class="gram-table">' +
      '<tr><td><em>j\'ai mangé</em></td><td>ich habe gegessen</td></tr>' +
      '<tr><td><em>tu as mangé</em></td><td>du hast gegessen</td></tr>' +
      '<tr><td><em>il/elle a mangé</em></td><td>er/sie hat gegessen</td></tr>' +
      '<tr><td><em>nous avons mangé</em></td><td>wir haben gegessen</td></tr>' +
      '<tr><td><em>vous avez mangé</em></td><td>ihr habt gegessen</td></tr>' +
      '<tr><td><em>ils ont mangé</em></td><td>sie haben gegessen</td></tr>' +
      '</table><br>' +
      '<strong>Mit être</strong> (Bewegungs- und Zustandsverben + Reflexive):<br>' +
      'Eselsbrücke <strong>DR MRS VANDERTRAMP</strong>: aller, venir, partir, arriver, entrer, sortir, monter, descendre, naître, mourir, rester, tomber…<br>' +
      '→ <em>Je suis allé(e) à Paris.</em> — Ich bin nach Paris gegangen.<br>' +
      '→ <em>Elle est arrivée hier.</em> — Sie ist gestern angekommen.<br><br>' +
      '<strong>Wichtige unregelmäßige Partizipien:</strong><br>' +
      'être → <em>été</em> · avoir → <em>eu</em> · faire → <em>fait</em> · prendre → <em>pris</em> · voir → <em>vu</em> · venir → <em>venu</em>',
    beispiele: [
      { fr: "J'ai mangé une pizza.",           de: 'Ich habe eine Pizza gegessen.' },
      { fr: "Nous avons visité le musée.",      de: 'Wir haben das Museum besucht.' },
      { fr: "Elle est arrivée à l'hôtel.",     de: 'Sie ist im Hotel angekommen.' },
      { fr: "Il a pris le train.",             de: 'Er hat den Zug genommen.' },
      { fr: "Vous avez réservé une chambre ?", de: 'Haben Sie ein Zimmer reserviert?' }
    ],
    uebungen: [
      { typ: 'tippen', de: 'Ich habe eine Pizza gegessen.',      fr: "J'ai mangé une pizza.",          erklaerung: 'manger → mangé; avoir: j\'ai mangé' },
      { typ: 'tippen', de: 'Wir haben das Museum besucht.',      fr: 'Nous avons visité le musée.',    erklaerung: 'visiter → visité; avoir: nous avons visité' },
      { typ: 'tippen', de: 'Sie ist im Hotel angekommen.',       fr: "Elle est arrivée à l'hôtel.",   erklaerung: 'arriver → mit être; elle est arrivéE (Angleichung!)' },
      { typ: 'tippen', de: 'Er hat den Zug genommen.',           fr: 'Il a pris le train.',            erklaerung: 'prendre → pris (unregelmäßig); avoir: il a pris' },
      { typ: 'tippen', de: 'Haben Sie ein Zimmer reserviert?',   fr: 'Vous avez réservé une chambre ?', erklaerung: 'réserver → réservé; avoir: vous avez réservé' },
      { typ: 'tippen', de: 'Ich bin nach Paris gefahren.',       fr: 'Je suis allé à Paris.',          erklaerung: 'aller → mit être; je suis allé' },
      { typ: 'tippen', de: 'Wir haben viel gegessen.',           fr: 'Nous avons beaucoup mangé.',     erklaerung: 'manger → mangé; nous avons mangé' },
      { typ: 'richtigfalsch', frage: '"Aller" bildet das passé composé mit "avoir": "j\'ai allé".', antwort: false,
        erklaerung: '"Aller" gehört zu den être-Verben: je suis allé(e).' },
      { typ: 'richtigfalsch', frage: 'Das Partizip von "-er" Verben endet auf -é: manger → mangé.', antwort: true,
        erklaerung: 'Ja — -er Verben: Stamm + é. z.B. parler → parlé, visiter → visité.' },
      { typ: 'luecke', satz: 'Nous ___ visité le château hier. (avoir)', loesung: 'avons', erklaerung: 'avoir Pl.: nous avons' },
      { typ: 'luecke', satz: 'Elle ___ partie tôt. (être)',              loesung: 'est',   erklaerung: 'partir = être-Verb: elle est partie' }
    ]
  },

  // ══════════════════════════════════════════════════════════════════
  //  A2 — Possessivbegleiter
  // ══════════════════════════════════════════════════════════════════

  {
    id: 'possessiv', level: 'A2', titel: 'Possessivbegleiter: mon, ma, mes…',
    vokabeln: ['hotel', 'begruessung'],
    erklaerung:
      'Possessivbegleiter richten sich nach dem <strong>Geschlecht des besessenen Nomens</strong> — nicht nach dem Besitzer!<br><br>' +
      '<table class="gram-table">' +
      '<tr><th>Besitzer</th><th>m. Sg.</th><th>f. Sg.</th><th>Plural</th></tr>' +
      '<tr><td>ich</td><td><em>mon</em></td><td><em>ma</em></td><td><em>mes</em></td></tr>' +
      '<tr><td>du</td><td><em>ton</em></td><td><em>ta</em></td><td><em>tes</em></td></tr>' +
      '<tr><td>er/sie</td><td><em>son</em></td><td><em>sa</em></td><td><em>ses</em></td></tr>' +
      '<tr><td>wir</td><td colspan="2"><em>notre</em></td><td><em>nos</em></td></tr>' +
      '<tr><td>ihr/Sie</td><td colspan="2"><em>votre</em></td><td><em>vos</em></td></tr>' +
      '<tr><td>sie (Pl.)</td><td colspan="2"><em>leur</em></td><td><em>leurs</em></td></tr>' +
      '</table><br>' +
      '<strong>Sonderfall:</strong> Vor f. Nomen, die mit Vokal beginnen: <em>ma → mon</em>:<br>' +
      '→ <em>mon amie</em> (meine Freundin), <em>mon adresse</em> (meine Adresse)<br><br>' +
      '<strong>Tipp:</strong> <em>son/sa/ses</em> kann "sein", "ihr" oder "Ihr" bedeuten — der Kontext entscheidet!',
    beispiele: [
      { fr: 'mon passeport',     de: 'mein Reisepass (m.)' },
      { fr: 'ma chambre',        de: 'mein Zimmer (f.)' },
      { fr: 'mes bagages',       de: 'mein Gepäck (Pl.)' },
      { fr: 'votre réservation', de: 'Ihre Reservierung' },
      { fr: 'son billet',        de: 'sein/ihr Ticket (m.)' }
    ],
    uebungen: [
      { typ: 'tippen', de: 'mein Reisepass (m.)',      fr: 'mon passeport',     erklaerung: 'passeport = m. → mon' },
      { typ: 'tippen', de: 'mein Zimmer (f.)',          fr: 'ma chambre',        erklaerung: 'chambre = f. → ma' },
      { typ: 'tippen', de: 'Ihre Reservierung (f.)',    fr: 'votre réservation', erklaerung: 'votre = Sg. (vous-Form), egal ob m/f' },
      { typ: 'tippen', de: 'sein Ticket (m.)',          fr: 'son billet',        erklaerung: 'billet = m. → son (nicht sa!)' },
      { typ: 'tippen', de: 'unsere Koffer (Pl.)',       fr: 'nos valises',       erklaerung: 'nos = wir + Plural' },
      { typ: 'tippen', de: 'meine Freundin (f., Vokal)', fr: 'mon amie',         erklaerung: 'amie beginnt mit Vokal → mon statt ma' },
      { typ: 'richtigfalsch', frage: '"Son" richtet sich nach dem Geschlecht des Besitzers.', antwort: false,
        erklaerung: 'Nein — son/sa/ses richten sich nach dem besessenen Nomen: son sac (m.) = seine/ihre Tasche.' },
      { typ: 'richtigfalsch', frage: 'Vor einem f. Nomen mit Vokalanfang steht "mon" statt "ma": mon amie.', antwort: true,
        erklaerung: 'Genau — mon amie, mon adresse, mon école (obwohl feminin).' },
      { typ: 'luecke', satz: 'Voici ___ passeport, madame.', loesung: 'mon', erklaerung: 'passeport (m.) → mon; Sprecher ist weiblich, trotzdem mon!' },
      { typ: 'luecke', satz: 'Est-ce que ___ chambre est prête ?', loesung: 'notre', erklaerung: 'nous → notre (Sg. Nomen, m. oder f. gleich)' }
    ]
  },

  // ══════════════════════════════════════════════════════════════════
  //  A2 — Unregelmäßige Verben
  // ══════════════════════════════════════════════════════════════════

  {
    id: 'irreg-verben', level: 'A2', titel: 'Unregelmäßige Verben: aller, faire, venir…',
    vokabeln: ['restaurant', 'wegbeschreibung'],
    erklaerung:
      'Diese Verben muss man auswendig lernen — sie folgen keinem Muster:<br><br>' +
      '<strong>aller</strong> (gehen/fahren):<br>' +
      '<em>je vais · tu vas · il va · nous allons · vous allez · ils vont</em><br><br>' +
      '<strong>faire</strong> (machen/tun):<br>' +
      '<em>je fais · tu fais · il fait · nous faisons · vous faites · ils font</em><br><br>' +
      '<strong>venir</strong> (kommen):<br>' +
      '<em>je viens · tu viens · il vient · nous venons · vous venez · ils viennent</em><br><br>' +
      '<strong>pouvoir</strong> (können):<br>' +
      '<em>je peux · tu peux · il peut · nous pouvons · vous pouvez · ils peuvent</em><br><br>' +
      '<strong>vouloir</strong> (wollen):<br>' +
      '<em>je veux · tu veux · il veut · nous voulons · vous voulez · ils veulent</em><br><br>' +
      '<strong>prendre</strong> (nehmen):<br>' +
      '<em>je prends · tu prends · il prend · nous prenons · vous prenez · ils prennent</em><br><br>' +
      '<strong>Tipp:</strong> <em>pouvoir + Infinitiv</em> = können: <em>Je peux vous aider ?</em> (Kann ich Ihnen helfen?)<br>' +
      '<em>vouloir + Infinitiv</em> = wollen: <em>Je veux réserver une table.</em>',
    beispiele: [
      { fr: 'Je vais à la plage.',           de: 'Ich gehe zum Strand.' },
      { fr: 'Qu\'est-ce que tu fais ?',      de: 'Was machst du?' },
      { fr: 'Elle vient avec nous.',         de: 'Sie kommt mit uns.' },
      { fr: 'Vous pouvez m\'aider ?',        de: 'Können Sie mir helfen?' },
      { fr: 'Je veux réserver une table.',   de: 'Ich möchte einen Tisch reservieren.' }
    ],
    uebungen: [
      { typ: 'tippen', de: 'Ich gehe zum Strand.',                fr: 'Je vais à la plage.',          erklaerung: 'aller: je → vais' },
      { typ: 'tippen', de: 'Was machst du?',                       fr: "Qu'est-ce que tu fais ?",      erklaerung: 'faire: tu → fais' },
      { typ: 'tippen', de: 'Sie kommt mit uns.',                   fr: 'Elle vient avec nous.',        erklaerung: 'venir: elle → vient' },
      { typ: 'tippen', de: 'Können Sie mir helfen?',               fr: 'Vous pouvez m\'aider ?',       erklaerung: 'pouvoir: vous → pouvez + Infinitiv aider' },
      { typ: 'tippen', de: 'Ich möchte einen Tisch reservieren.',  fr: 'Je veux réserver une table.', erklaerung: 'vouloir: je → veux + Infinitiv' },
      { typ: 'tippen', de: 'Er nimmt das Menu.',                   fr: 'Il prend le menu.',            erklaerung: 'prendre: il → prend' },
      { typ: 'tippen', de: 'Wir machen eine Pause.',               fr: 'Nous faisons une pause.',      erklaerung: 'faire: nous → faisons' },
      { typ: 'richtigfalsch', frage: '"Vous faites" ist die korrekte vous-Form von "faire".', antwort: true,
        erklaerung: 'Ja — faire ist unregelmäßig: vous faites (nicht "vous faisez").' },
      { typ: 'richtigfalsch', frage: '"Ils vont" kommt von "venir".', antwort: false,
        erklaerung: '"Ils vont" kommt von "aller". "Venir" wäre: ils viennent.' },
      { typ: 'luecke', satz: 'Tu ___ d\'où ? (venir)',             loesung: 'viens',  erklaerung: 'venir: tu → viens' },
      { typ: 'luecke', satz: 'Nous ___ une promenade. (faire)',    loesung: 'faisons', erklaerung: 'faire: nous → faisons' }
    ]
  },

  // ══════════════════════════════════════════════════════════════════
  //  A2 — Futur proche
  // ══════════════════════════════════════════════════════════════════

  {
    id: 'futur-proche', level: 'A2', titel: 'Futur proche: aller + Infinitiv',
    vokabeln: ['strand', 'restaurant'],
    erklaerung:
      'Das <em>futur proche</em> drückt aus, was man gleich oder bald tun wird:<br><br>' +
      '<strong>Formel: aller (konjugiert) + Infinitiv</strong><br><br>' +
      '<table class="gram-table">' +
      '<tr><td><em>je vais</em></td><td>ich werde</td></tr>' +
      '<tr><td><em>tu vas</em></td><td>du wirst</td></tr>' +
      '<tr><td><em>il/elle va</em></td><td>er/sie wird</td></tr>' +
      '<tr><td><em>nous allons</em></td><td>wir werden</td></tr>' +
      '<tr><td><em>vous allez</em></td><td>ihr werdet / Sie werden</td></tr>' +
      '<tr><td><em>ils/elles vont</em></td><td>sie werden</td></tr>' +
      '</table><br>' +
      '→ <em>Je vais manger.</em> — Ich werde essen.<br>' +
      '→ <em>Nous allons visiter Paris.</em> — Wir werden Paris besuchen.<br><br>' +
      '<strong>Verneinung:</strong> <em>ne + aller + pas + Infinitiv</em><br>' +
      '→ <em>Je ne vais pas nager.</em> — Ich werde nicht schwimmen.',
    beispiele: [
      { fr: 'Je vais commander une pizza.',   de: 'Ich werde eine Pizza bestellen.' },
      { fr: 'Nous allons aller à la plage.',  de: 'Wir werden an den Strand gehen.' },
      { fr: 'Il va prendre un café.',         de: 'Er wird einen Kaffee nehmen.' },
      { fr: 'Elle va réserver une chambre.',  de: 'Sie wird ein Zimmer reservieren.' },
      { fr: 'Ils vont visiter le musée.',     de: 'Sie werden das Museum besuchen.' }
    ],
    uebungen: [
      { typ: 'tippen', de: 'Ich werde eine Pizza bestellen.',  fr: 'Je vais commander une pizza.',     erklaerung: 'je vais + Infinitiv commander' },
      { typ: 'tippen', de: 'Wir werden an den Strand gehen.', fr: 'Nous allons aller à la plage.',    erklaerung: 'nous allons + Infinitiv aller' },
      { typ: 'tippen', de: 'Er wird einen Kaffee nehmen.',    fr: 'Il va prendre un café.',           erklaerung: 'il va + Infinitiv prendre' },
      { typ: 'tippen', de: 'Sie wird ein Zimmer reservieren.', fr: 'Elle va réserver une chambre.',   erklaerung: 'elle va + Infinitiv réserver' },
      { typ: 'tippen', de: 'Ich werde nicht schwimmen.',      fr: 'Je ne vais pas nager.',            erklaerung: 'Verneinung: ne + vais + pas + Infinitiv' },
      { typ: 'tippen', de: 'Wir werden das Museum besuchen.', fr: 'Nous allons visiter le musée.',    erklaerung: 'nous allons + Infinitiv visiter' },
      { typ: 'richtigfalsch', frage: 'Im futur proche steht der Infinitiv direkt nach der konjugierten Form von "aller".', antwort: true,
        erklaerung: 'Genau: je vais manger, tu vas partir usw.' },
      { typ: 'richtigfalsch', frage: '"Nous allons" ist falsch — es müsste "nous vons" heißen.', antwort: false,
        erklaerung: '"Nous allons" ist korrekt — aller ist unregelmäßig.' },
      { typ: 'luecke', satz: 'Il ___ visiter la tour Eiffel.',           loesung: 'va',     erklaerung: 'il → va (3. P. Sg. von aller)' },
      { typ: 'luecke', satz: 'Nous ___ manger au restaurant ce soir.',   loesung: 'allons', erklaerung: 'nous → allons (1. P. Pl. von aller)' }
    ]
  },

  // ══════════════════════════════════════════════════════════════════
  //  A2 — Teilungsartikel
  // ══════════════════════════════════════════════════════════════════

  {
    id: 'teilungsartikel', level: 'A2', titel: 'Teilungsartikel: du, de la, des',
    vokabeln: ['restaurant', 'einkaufen'],
    erklaerung:
      'Der Teilungsartikel steht vor Dingen, die man nicht einzeln zählt — wie "etwas Brot", "ein bisschen Wein":<br><br>' +
      '<table class="gram-table">' +
      '<tr><th>Form</th><th>Verwendung</th><th>Beispiel</th></tr>' +
      '<tr><td><em>du</em></td><td>männlich (= de + le)</td><td><em>du pain</em> — (etwas) Brot</td></tr>' +
      '<tr><td><em>de la</em></td><td>weiblich</td><td><em>de la soupe</em> — (etwas) Suppe</td></tr>' +
      '<tr><td><em>de l\'</em></td><td>vor Vokal / stumm-h</td><td><em>de l\'eau</em> — Wasser</td></tr>' +
      '<tr><td><em>des</em></td><td>Plural</td><td><em>des légumes</em> — Gemüse</td></tr>' +
      '</table><br>' +
      '<strong>Nach der Verneinung</strong> werden alle Teilungsartikel zu <em>de / d\'</em>:<br>' +
      '→ <em>Je voudrais du vin.</em> → <em>Je ne veux pas <u>de</u> vin.</em><br>' +
      '→ <em>Il y a de l\'eau.</em> → <em>Il n\'y a pas <u>d\'</u>eau.</em>',
    beispiele: [
      { fr: "Je voudrais du vin.",        de: 'Ich hätte gern Wein.' },
      { fr: "Il y a de la soupe.",        de: 'Es gibt Suppe.' },
      { fr: "Tu bois de l'eau.",          de: 'Du trinkst Wasser.' },
      { fr: "Nous mangeons des fruits.",  de: 'Wir essen Obst.' },
      { fr: "Je ne mange pas de viande.", de: 'Ich esse kein Fleisch.' }
    ],
    uebungen: [
      { typ: 'tippen', de: 'Ich hätte gern Wein.',    fr: 'Je voudrais du vin.',       erklaerung: 'vin (m.) → du vin' },
      { typ: 'tippen', de: 'Es gibt Suppe.',           fr: "Il y a de la soupe.",       erklaerung: 'soupe (f.) → de la soupe' },
      { typ: 'tippen', de: 'Ich trinke Wasser.',       fr: "Je bois de l'eau.",         erklaerung: 'eau beginnt mit Vokal → de l\'eau' },
      { typ: 'tippen', de: 'Wir essen Obst.',          fr: 'Nous mangeons des fruits.', erklaerung: 'fruits (Pl.) → des fruits' },
      { typ: 'tippen', de: 'Ich esse kein Fleisch.',   fr: 'Je ne mange pas de viande.', erklaerung: 'Nach Verneinung: du/de la → de' },
      { typ: 'tippen', de: 'Ich hätte gern Käse.',    fr: 'Je voudrais du fromage.',   erklaerung: 'fromage (m.) → du fromage' },
      { typ: 'richtigfalsch', frage: '"Du" ist der Teilungsartikel für männliche Nomen (= de + le).', antwort: true,
        erklaerung: 'Ja — du = de + le, z.B. du pain, du vin, du fromage.' },
      { typ: 'richtigfalsch', frage: 'Nach einer Verneinung bleibt "du" unverändert: "Je ne veux pas du café".', antwort: false,
        erklaerung: 'Nach Verneinung wird du/de la zu "de": Je ne veux pas de café.' },
      { typ: 'luecke', satz: "Je voudrais ___ fromage, s'il vous plaît.", loesung: 'du', erklaerung: 'fromage (m.) → du' },
      { typ: 'luecke', satz: "Il n'y a pas ___ pain.",                    loesung: 'de', erklaerung: 'Nach Verneinung: du → de' }
    ]
  },

  // ══════════════════════════════════════════════════════════════════
  //  A2 — Imperativ
  // ══════════════════════════════════════════════════════════════════

  {
    id: 'imperativ', level: 'A2', titel: 'Imperativ: Befehle & Anweisungen',
    vokabeln: ['wegbeschreibung', 'begruessung'],
    erklaerung:
      'Der Imperativ hat im Französischen <strong>drei Formen</strong>: tu, nous, vous — ohne Pronomen.<br><br>' +
      '<strong>-er Verben</strong> (parler, manger, tourner …):<br>' +
      '→ <em>tu</em>: Präsensform ohne Pronomen und <strong>ohne -s</strong>: <em>Parle !</em><br>' +
      '→ <em>nous</em>: <em>Parlons !</em> (Lass uns sprechen!)<br>' +
      '→ <em>vous</em>: <em>Parlez !</em><br><br>' +
      '<strong>-ir / -re Verben</strong>: wie Präsens, nur ohne Pronomen:<br>' +
      '→ tu: <em>Finis !</em> &nbsp;·&nbsp; nous: <em>Finissons !</em> &nbsp;·&nbsp; vous: <em>Finissez !</em><br><br>' +
      '<strong>Unregelmäßige Imperativformen:</strong><br>' +
      '<table class="gram-table">' +
      '<tr><th>Verb</th><th>tu</th><th>nous</th><th>vous</th></tr>' +
      '<tr><td>être</td><td><em>Sois !</em></td><td><em>Soyons !</em></td><td><em>Soyez !</em></td></tr>' +
      '<tr><td>avoir</td><td><em>Aie !</em></td><td><em>Ayons !</em></td><td><em>Ayez !</em></td></tr>' +
      '<tr><td>aller</td><td><em>Va !</em></td><td><em>Allons !</em></td><td><em>Allez !</em></td></tr>' +
      '</table>',
    beispiele: [
      { fr: 'Tournez à gauche !',        de: 'Biegen Sie links ab!' },
      { fr: 'Continuez tout droit !',    de: 'Gehen Sie geradeaus weiter!' },
      { fr: 'Mange ta soupe !',          de: 'Iss deine Suppe!' },
      { fr: 'Allons à la plage !',       de: 'Gehen wir zum Strand!' },
      { fr: 'Finissez vos exercices !',  de: 'Beendet eure Übungen!' }
    ],
    uebungen: [
      { typ: 'tippen', de: 'Biegen Sie links ab!',              fr: 'Tournez à gauche !',     erklaerung: 'tourner (-er): vous → tournez' },
      { typ: 'tippen', de: 'Gehen Sie geradeaus weiter!',       fr: 'Continuez tout droit !', erklaerung: 'continuer (-er): vous → continuez' },
      { typ: 'tippen', de: 'Iss deine Suppe! (du-Form)',        fr: 'Mange ta soupe !',       erklaerung: '-er Verb: tu → ohne -s → mange' },
      { typ: 'tippen', de: 'Gehen wir zum Strand!',             fr: 'Allons à la plage !',    erklaerung: 'aller: nous → allons' },
      { typ: 'tippen', de: 'Sprich Französisch! (du-Form)',     fr: 'Parle français !',       erklaerung: '-er Verb: tu → parle (ohne -s)' },
      { typ: 'tippen', de: 'Beendet eure Übungen! (vous-Form)', fr: 'Finissez vos exercices !', erklaerung: 'finir (-ir): vous → finissez' },
      { typ: 'richtigfalsch', frage: 'Bei -er Verben verliert die tu-Form des Imperativs das -s: "Mange !" statt "Manges !".', antwort: true,
        erklaerung: 'Genau — -er Verben: parle, mange, reste… (kein -s).' },
      { typ: 'richtigfalsch', frage: '"Allons !" bedeutet "Geht!" (vous-Form).', antwort: false,
        erklaerung: '"Allons !" ist die nous-Form: "Gehen wir!" — vous-Form ist "Allez !".' },
      { typ: 'luecke', satz: '___ à droite au carrefour ! (Sie, abbiegen)', loesung: 'Tournez', erklaerung: 'vous-Imperativ von tourner' },
      { typ: 'luecke', satz: '___ du café ! (tu, trinken — boire: bois)', loesung: 'Bois', erklaerung: 'boire ist unregelmäßig: tu bois → Bois !' }
    ]
  },

  // ══════════════════════════════════════════════════════════════════
  //  A2 — -ir Verben
  // ══════════════════════════════════════════════════════════════════

  {
    id: 'ir-verben', level: 'A2', titel: '-ir Verben: finir, choisir, partir',
    vokabeln: ['restaurant', 'hotel'],
    erklaerung:
      'Es gibt zwei Typen von -ir Verben:<br><br>' +
      '<strong>Typ 1 — reguläre -ir Verben</strong> (finir, choisir, réussir …):<br>' +
      'Singular: Stamm + <em>-is, -is, -it</em> &nbsp;·&nbsp; Plural: Stamm + <em>-issons, -issez, -issent</em><br>' +
      '<table class="gram-table">' +
      '<tr><td><em>je finis</em></td><td>ich beende</td></tr>' +
      '<tr><td><em>tu finis</em></td><td>du beendest</td></tr>' +
      '<tr><td><em>il/elle finit</em></td><td>er/sie beendet</td></tr>' +
      '<tr><td><em>nous finissons</em></td><td>wir beenden</td></tr>' +
      '<tr><td><em>vous finissez</em></td><td>ihr beendet</td></tr>' +
      '<tr><td><em>ils/elles finissent</em></td><td>sie beenden</td></tr>' +
      '</table><br>' +
      '<strong>Typ 2 — Verben wie partir, sortir, dormir</strong> (kein -iss-):<br>' +
      '<table class="gram-table">' +
      '<tr><td><em>je pars</em></td><td>ich reise ab</td></tr>' +
      '<tr><td><em>tu pars</em></td><td>du reist ab</td></tr>' +
      '<tr><td><em>il/elle part</em></td><td>er/sie reist ab</td></tr>' +
      '<tr><td><em>nous partons</em></td><td>wir reisen ab</td></tr>' +
      '<tr><td><em>vous partez</em></td><td>ihr reist ab</td></tr>' +
      '<tr><td><em>ils/elles partent</em></td><td>sie reisen ab</td></tr>' +
      '</table>',
    beispiele: [
      { fr: 'Je finis mon repas.',          de: 'Ich beende meine Mahlzeit.' },
      { fr: 'Tu choisis le menu ?',         de: 'Wählst du das Menü?' },
      { fr: 'Nous finissons à 18 heures.',  de: 'Wir hören um 18 Uhr auf.' },
      { fr: 'Le train part à midi.',        de: 'Der Zug fährt um Mittag ab.' },
      { fr: 'Vous choisissez une chambre.', de: 'Sie wählen ein Zimmer.' }
    ],
    uebungen: [
      { typ: 'tippen', de: 'Ich beende meine Mahlzeit.',     fr: 'Je finis mon repas.',          erklaerung: 'finir: je → finis' },
      { typ: 'tippen', de: 'Wählst du das Menü?',            fr: 'Tu choisis le menu ?',         erklaerung: 'choisir: tu → choisis' },
      { typ: 'tippen', de: 'Wir hören um 18 Uhr auf.',       fr: 'Nous finissons à 18 heures.',  erklaerung: 'finir: nous → finissons (-iss- im Plural)' },
      { typ: 'tippen', de: 'Der Zug fährt um Mittag ab.',    fr: 'Le train part à midi.',        erklaerung: 'partir (Typ 2): il → part (kein -iss-)' },
      { typ: 'tippen', de: 'Sie wählen ein Zimmer.',         fr: 'Vous choisissez une chambre.', erklaerung: 'choisir: vous → choisissez' },
      { typ: 'tippen', de: 'Wir reisen morgen ab.',          fr: 'Nous partons demain.',         erklaerung: 'partir: nous → partons' },
      { typ: 'richtigfalsch', frage: 'Reguläre -ir Verben bekommen im Plural -iss- eingefügt: "nous finissons".', antwort: true,
        erklaerung: 'Genau — finir, choisir, réussir bekommen -iss- im Plural.' },
      { typ: 'richtigfalsch', frage: '"Partir" konjugiert man wie "finir": "je partis".', antwort: false,
        erklaerung: '"Partir" ist Typ 2: je pars, tu pars, il part — ohne -iss-.' },
      { typ: 'luecke', satz: 'Il ___ son café. (finir)', loesung: 'finit',     erklaerung: 'finir: il → finit' },
      { typ: 'luecke', satz: 'Vous ___ quelle chambre ? (choisir)', loesung: 'choisissez', erklaerung: 'choisir: vous → choisissez' }
    ]
  },

  // ══════════════════════════════════════════════════════════════════
  //  B1 — Objektpronomen
  // ══════════════════════════════════════════════════════════════════

  {
    id: 'objektpronomen', level: 'B1', titel: 'Objektpronomen: le, la, les, lui, leur',
    vokabeln: ['restaurant', 'hotel'],
    erklaerung:
      'Objektpronomen ersetzen Nomen, um Wiederholungen zu vermeiden. Sie stehen <strong>vor dem Verb</strong>.<br><br>' +
      '<strong>Direkte Objektpronomen</strong> (ersetzen Wen/Was ohne Präposition):<br>' +
      '<table class="gram-table">' +
      '<tr><td><em>le</em></td><td>ihn / es (m.)</td><td><em>Je le prends.</em> — Ich nehme es/ihn.</td></tr>' +
      '<tr><td><em>la</em></td><td>sie / es (f.)</td><td><em>Je la réserve.</em> — Ich reserviere sie.</td></tr>' +
      '<tr><td><em>les</em></td><td>sie (Pl.)</td><td><em>Je les mange.</em> — Ich esse sie.</td></tr>' +
      '</table><br>' +
      '<strong>Indirekte Objektpronomen</strong> (ersetzen <em>à</em> + Person):<br>' +
      '<table class="gram-table">' +
      '<tr><td><em>lui</em></td><td>ihm / ihr (Sg.)</td><td><em>Je lui parle.</em> — Ich spreche mit ihm/ihr.</td></tr>' +
      '<tr><td><em>leur</em></td><td>ihnen (Pl.)</td><td><em>Je leur écris.</em> — Ich schreibe ihnen.</td></tr>' +
      '</table><br>' +
      '<strong>Position bei futur proche und Verneinung:</strong><br>' +
      '→ Futur proche: <em>Je vais le prendre.</em> (Pronomen vor Infinitiv)<br>' +
      '→ Verneinung: <em>Je ne le prends pas.</em> (ne + Pronomen + Verb + pas)',
    beispiele: [
      { fr: "Je le prends.",            de: 'Ich nehme ihn/es.' },
      { fr: "Je la réserve.",           de: 'Ich reserviere sie.' },
      { fr: "Je les mange.",            de: 'Ich esse sie.' },
      { fr: "Je lui parle.",            de: 'Ich spreche mit ihm/ihr.' },
      { fr: "Je leur écris une carte.", de: 'Ich schreibe ihnen eine Karte.' }
    ],
    uebungen: [
      { typ: 'tippen', de: 'Ich nehme es. (le menu)',            fr: 'Je le prends.',          erklaerung: 'menu (m.) → le; vor dem Verb' },
      { typ: 'tippen', de: 'Ich reserviere sie. (la chambre)',   fr: 'Je la réserve.',         erklaerung: 'chambre (f.) → la; vor dem Verb' },
      { typ: 'tippen', de: 'Ich esse sie. (les fruits)',         fr: 'Je les mange.',          erklaerung: 'fruits (Pl.) → les; vor dem Verb' },
      { typ: 'tippen', de: 'Ich spreche mit ihr. (à la serveuse)', fr: 'Je lui parle.',        erklaerung: 'à + Person (Sg.) → lui (indirekt)' },
      { typ: 'tippen', de: 'Ich schreibe ihnen eine Karte.',     fr: 'Je leur écris une carte.', erklaerung: 'à + Personen (Pl.) → leur' },
      { typ: 'tippen', de: 'Ich werde es nehmen. (le menu)',     fr: 'Je vais le prendre.',    erklaerung: 'futur proche: je vais + le + Infinitiv' },
      { typ: 'richtigfalsch', frage: 'Objektpronomen stehen im Französischen nach dem Verb: "Je prends le".', antwort: false,
        erklaerung: 'Falsch — sie stehen VOR dem Verb: "Je le prends."' },
      { typ: 'richtigfalsch', frage: '"Lui" ersetzt eine Person im Singular (à + Sg. Person).', antwort: true,
        erklaerung: '"lui" = indirektes Pronomen Sg.: Je parle à Pierre → Je lui parle.' },
      { typ: 'luecke', satz: 'Tu ___ appelles ? (sie anrufen — la serveuse)', loesung: 'la',   erklaerung: 'la serveuse (f. Sg.) → la' },
      { typ: 'luecke', satz: 'Je ___ donne le menu. (ihnen — aux clients)',   loesung: 'leur', erklaerung: 'aux clients (Pl.) → leur (indirekt)' }
    ]
  },

  // ══════════════════════════════════════════════════════════════════
  //  B1 — Imparfait
  // ══════════════════════════════════════════════════════════════════

  {
    id: 'imparfait', level: 'B1', titel: 'Imparfait: Beschreibung in der Vergangenheit',
    vokabeln: ['strand', 'hotel'],
    erklaerung:
      'Das <em>imparfait</em> beschreibt andauernde Zustände, Gewohnheiten oder den Hintergrund in der Vergangenheit — im Gegensatz zum passé composé (abgeschlossene Ereignisse).<br><br>' +
      '<strong>Bildung:</strong> nous-Präsensstamm + Imparfait-Endungen<br><br>' +
      '<table class="gram-table">' +
      '<tr><th>Pronomen</th><th>Endung</th><th>parler</th></tr>' +
      '<tr><td><em>je</em></td><td><em>-ais</em></td><td><em>je parlais</em></td></tr>' +
      '<tr><td><em>tu</em></td><td><em>-ais</em></td><td><em>tu parlais</em></td></tr>' +
      '<tr><td><em>il/elle</em></td><td><em>-ait</em></td><td><em>il parlait</em></td></tr>' +
      '<tr><td><em>nous</em></td><td><em>-ions</em></td><td><em>nous parlions</em></td></tr>' +
      '<tr><td><em>vous</em></td><td><em>-iez</em></td><td><em>vous parliez</em></td></tr>' +
      '<tr><td><em>ils/elles</em></td><td><em>-aient</em></td><td><em>ils parlaient</em></td></tr>' +
      '</table><br>' +
      '<strong>Ausnahme:</strong> être: <em>j\'étais, tu étais, il était, nous étions, vous étiez, ils étaient</em><br><br>' +
      '<strong>Imparfait vs. Passé composé:</strong><br>' +
      '• Imparfait: Hintergrund, Beschreibung, Gewohnheit → "Il faisait beau." (Es war schön.)<br>' +
      '• Passé composé: konkretes Ereignis → "Nous avons pris le bus." (Wir haben den Bus genommen.)',
    beispiele: [
      { fr: "Il faisait beau et nous étions contents.", de: 'Das Wetter war schön und wir waren glücklich.' },
      { fr: "Quand j'étais enfant, j'habitais à Paris.", de: 'Als ich Kind war, wohnte ich in Paris.' },
      { fr: "Elle lisait un livre sur la plage.",         de: 'Sie las ein Buch am Strand.' },
      { fr: "Tous les jours, il prenait le même café.",  de: 'Jeden Tag trank er denselben Kaffee.' },
      { fr: "Nous mangions souvent dans ce restaurant.", de: 'Wir aßen oft in diesem Restaurant.' }
    ],
    uebungen: [
      { typ: 'tippen', de: 'Das Wetter war schön.',                fr: 'Il faisait beau.',              erklaerung: 'faire → imparfait: il faisait (nous faisons → fais- + ait)' },
      { typ: 'tippen', de: 'Ich war Kind.',                         fr: "J'étais enfant.",               erklaerung: 'être → Ausnahme: j\'étais' },
      { typ: 'tippen', de: 'Sie las ein Buch am Strand.',          fr: 'Elle lisait un livre sur la plage.', erklaerung: 'lire → nous lisons → lis- + ait = lisait' },
      { typ: 'tippen', de: 'Wir aßen oft in diesem Restaurant.',   fr: 'Nous mangions souvent dans ce restaurant.', erklaerung: 'manger → nous mangeons → mange- + ions = mangions' },
      { typ: 'tippen', de: 'Es regnete.',                           fr: 'Il pleuvait.',                  erklaerung: 'pleuvoir → il pleuvait (Imparfait für Wetterbeschreibung)' },
      { typ: 'tippen', de: 'Als Kind wohnte ich in München.',       fr: "Quand j'étais enfant, j'habitais à Munich.", erklaerung: 'Gewohnheit in der Vergangenheit → imparfait' },
      { typ: 'richtigfalsch', frage: 'Das imparfait beschreibt abgeschlossene Einzelereignisse, z.B. "Ich kam an".', antwort: false,
        erklaerung: 'Nein — abgeschlossene Ereignisse = passé composé (je suis arrivé). Imparfait = Hintergrund, Zustände, Gewohnheiten.' },
      { typ: 'richtigfalsch', frage: 'Der Imparfait-Stamm kommt von der nous-Präsensform (ohne -ons).', antwort: true,
        erklaerung: 'Genau — nous parlons → parl- + ais/ait/ions/iez/aient.' },
      { typ: 'luecke', satz: 'Quand il ___ jeune, il jouait au foot. (être)', loesung: 'était', erklaerung: 'être → imparfait: il était' },
      { typ: 'luecke', satz: 'Nous ___ souvent à la mer. (aller)',             loesung: 'allions', erklaerung: 'aller → nous allons → all- + ions = allions' }
    ]
  },

  // ══════════════════════════════════════════════════════════════════
  //  B2 — Conditionnel
  // ══════════════════════════════════════════════════════════════════

  {
    id: 'conditionnel', level: 'B2', titel: 'Conditionnel: Ich würde / Je voudrais…',
    vokabeln: ['restaurant', 'hotel'],
    erklaerung:
      'Der <em>conditionnel présent</em> drückt Wünsche, höfliche Bitten und hypothetische Situationen aus.<br><br>' +
      '<strong>Bildung:</strong> Futurstamm (= Infinitiv) + Imparfait-Endungen<br><br>' +
      '<table class="gram-table">' +
      '<tr><th>Pronomen</th><th>Endung</th><th>vouloir</th></tr>' +
      '<tr><td><em>je</em></td><td><em>-ais</em></td><td><em>je voudrais</em></td></tr>' +
      '<tr><td><em>tu</em></td><td><em>-ais</em></td><td><em>tu voudrais</em></td></tr>' +
      '<tr><td><em>il/elle</em></td><td><em>-ait</em></td><td><em>il voudrait</em></td></tr>' +
      '<tr><td><em>nous</em></td><td><em>-ions</em></td><td><em>nous voudrions</em></td></tr>' +
      '<tr><td><em>vous</em></td><td><em>-iez</em></td><td><em>vous voudriez</em></td></tr>' +
      '<tr><td><em>ils/elles</em></td><td><em>-aient</em></td><td><em>ils voudraient</em></td></tr>' +
      '</table><br>' +
      '<strong>Wichtige Conditionalformen im Urlaub:</strong><br>' +
      '• <em>je voudrais</em> — ich hätte gern / ich möchte (höflicher als je veux!)<br>' +
      '• <em>ce serait</em> — das wäre (être: ser- + ait)<br>' +
      '• <em>il faudrait</em> — man müsste / es wäre nötig (falloir: faudr-)<br>' +
      '• <em>j\'aimerais</em> — ich würde gern (aimer: aimer- + ais)<br>' +
      '• <em>pourriez-vous ?</em> — könnten Sie? (pouvoir: pourr- + iez)<br><br>' +
      '<strong>Hypothetische Sätze mit "si":</strong><br>' +
      'Si + Imparfait → Conditionnel: <em>Si j\'avais le temps, je visiterais Paris.</em><br>' +
      '(Wenn ich Zeit hätte, würde ich Paris besuchen.)',
    beispiele: [
      { fr: "Je voudrais une chambre pour deux nuits.",     de: 'Ich hätte gern ein Zimmer für zwei Nächte.' },
      { fr: "Pourriez-vous appeler un taxi ?",              de: 'Könnten Sie ein Taxi rufen?' },
      { fr: "Ce serait parfait.",                           de: 'Das wäre perfekt.' },
      { fr: "J'aimerais visiter le Louvre.",                de: 'Ich würde gern den Louvre besuchen.' },
      { fr: "Il faudrait réserver à l'avance.",             de: 'Man müsste im Voraus reservieren.' }
    ],
    uebungen: [
      { typ: 'tippen', de: 'Ich hätte gern ein Zimmer für zwei Nächte.', fr: 'Je voudrais une chambre pour deux nuits.', erklaerung: 'vouloir → conditionnel: je voudrais (höfliche Standardform)' },
      { typ: 'tippen', de: 'Könnten Sie ein Taxi rufen?',                fr: 'Pourriez-vous appeler un taxi ?',           erklaerung: 'pouvoir → conditionnel: pourriez-vous ? (höfliche Bitte)' },
      { typ: 'tippen', de: 'Das wäre perfekt.',                           fr: 'Ce serait parfait.',                        erklaerung: 'être → conditionnel: serait (Stamm: ser-)' },
      { typ: 'tippen', de: 'Ich würde gern den Strand besuchen.',         fr: "J'aimerais visiter la plage.",              erklaerung: 'aimer → conditionnel: j\'aimerais' },
      { typ: 'tippen', de: 'Man müsste früher ankommen.',                  fr: 'Il faudrait arriver plus tôt.',             erklaerung: 'falloir → conditionnel: il faudrait' },
      { typ: 'tippen', de: 'Hätten Sie ein Zimmer frei?',                 fr: 'Est-ce que vous auriez une chambre libre ?', erklaerung: 'avoir → conditionnel: vous auriez' },
      { typ: 'richtigfalsch', frage: '"Je voudrais" ist höflicher als "je veux".', antwort: true,
        erklaerung: 'Ja — "je veux" klingt fordernd. Im Restaurant, Hotel usw. immer "je voudrais".' },
      { typ: 'richtigfalsch', frage: 'Der Conditionnel wird mit dem Präsensstamm + Imparfait-Endungen gebildet.', antwort: false,
        erklaerung: 'Nicht Präsensstamm — Futurstamm (= meist Infinitiv). z.B. manger → mangerais.' },
      { typ: 'luecke', satz: 'Je ___ visiter le château demain. (aimer)', loesung: 'aimerais', erklaerung: 'aimer → conditionnel: j\'aimerais' },
      { typ: 'luecke', satz: 'Ce ___ super de voyager ensemble ! (être)',  loesung: 'serait',   erklaerung: 'être → conditionnel: ce serait' }
    ]
  }

];

// ─── API ──────────────────────────────────────────────────────────────────────

var Grammar = (function() {

  function getAllUnits() {
    return GRAMMAR_UNITS;
  }

  function getUnit(id) {
    for (var i = 0; i < GRAMMAR_UNITS.length; i++) {
      if (GRAMMAR_UNITS[i].id === id) return GRAMMAR_UNITS[i];
    }
    return null;
  }

  function getUnitsByLevel(level) {
    return GRAMMAR_UNITS.filter(function(u) { return u.level === level; });
  }

  return {
    getAllUnits    : getAllUnits,
    getUnit       : getUnit,
    getUnitsByLevel: getUnitsByLevel
  };

})();
