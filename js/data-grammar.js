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
        erklaerung: 'z.B. l\'ami (m.), l\'école (f.)' },
      // ── Erweiterte Übungen (50-Fragen-Pool) ──
      { typ: 'tippen',   de: 'die Katze',          fr: 'le chat',         erklaerung: 'chat = männlich → le chat' },
      { typ: 'tippen',   de: 'das Haus',           fr: 'la maison',       erklaerung: 'maison = weiblich → la maison' },
      { typ: 'tippen',   de: 'die Kinder',         fr: 'les enfants',     erklaerung: 'Plural → les enfants' },
      { typ: 'tippen',   de: 'eine Stadt',         fr: 'une ville',       erklaerung: 'ville = weiblich → une ville' },
      { typ: 'tippen',   de: 'ein Junge',          fr: 'un garçon',       erklaerung: 'garçon = männlich → un garçon' },
      { typ: 'tippen',   de: 'der Freund',         fr: "l'ami",           erklaerung: 'ami beginnt mit Vokal → l\'ami' },
      { typ: 'tippen',   de: 'das Wasser',         fr: "l'eau",           erklaerung: 'eau (f.) beginnt mit Vokal → l\'eau' },
      { typ: 'tippen',   de: 'der Tisch',          fr: 'la table',        erklaerung: 'table = weiblich → la table' },
      { typ: 'tippen',   de: 'ein Auto',           fr: 'une voiture',     erklaerung: 'voiture = weiblich → une voiture' },
      { typ: 'tippen',   de: 'die Tür',            fr: 'la porte',        erklaerung: 'porte = weiblich → la porte' },
      { typ: 'tippen',   de: 'ein Zimmer',         fr: 'une chambre',     erklaerung: 'chambre = weiblich → une chambre' },
      { typ: 'tippen',   de: 'der Bahnhof',        fr: 'la gare',         erklaerung: 'gare = weiblich → la gare' },
      { typ: 'tippen',   de: 'das Brot',           fr: 'le pain',         erklaerung: 'pain = männlich → le pain' },
      { typ: 'tippen',   de: 'die Straße',         fr: 'la rue',          erklaerung: 'rue = weiblich → la rue' },
      { typ: 'tippen',   de: 'ein Café',           fr: 'un café',         erklaerung: 'café = männlich → un café' },
      { typ: 'tippen',   de: 'der Strand',         fr: 'la plage',        erklaerung: 'plage = weiblich → la plage' },
      { typ: 'tippen',   de: 'das Meer',           fr: 'la mer',          erklaerung: 'mer = weiblich → la mer' },
      { typ: 'tippen',   de: 'ein Restaurant',     fr: 'un restaurant',   erklaerung: 'restaurant = männlich → un restaurant' },
      { typ: 'tippen',   de: 'die Sonne',          fr: 'le soleil',       erklaerung: 'soleil = männlich → le soleil' },
      { typ: 'tippen',   de: 'der Schlüssel',      fr: 'la clé',          erklaerung: 'clé = weiblich → la clé' },
      { typ: 'tippen',   de: 'das Hotel',          fr: "l'hôtel",         erklaerung: 'hôtel (m.) beginnt mit Vokal → l\'hôtel' },
      { typ: 'tippen',   de: 'die Rechnung',       fr: "l'addition",      erklaerung: 'addition (f.) beginnt mit Vokal → l\'addition' },
      { typ: 'tippen',   de: 'ein Ticket',         fr: 'un billet',       erklaerung: 'billet = männlich → un billet' },
      { typ: 'tippen',   de: 'die Kirche',         fr: "l'église",        erklaerung: 'église (f.) beginnt mit Vokal → l\'église' },
      { typ: 'tippen',   de: 'ein Glas',           fr: 'un verre',        erklaerung: 'verre = männlich → un verre' },
      { typ: 'tippen',   de: 'die Flasche',        fr: 'la bouteille',    erklaerung: 'bouteille = weiblich → la bouteille' },
      { typ: 'tippen',   de: 'die Apotheke',       fr: 'la pharmacie',    erklaerung: 'pharmacie = weiblich → la pharmacie' },
      { typ: 'tippen',   de: 'der Markt',          fr: 'le marché',       erklaerung: 'marché = männlich → le marché' },
      { typ: 'tippen',   de: 'ein Mädchen',        fr: 'une fille',       erklaerung: 'fille = weiblich → une fille' },
      { typ: 'tippen',   de: 'ein Mann',           fr: 'un homme',        erklaerung: 'homme = männlich → un homme' },
      { typ: 'tippen',   de: 'die Bücher',         fr: 'les livres',      erklaerung: 'Plural → les livres' },
      { typ: 'tippen',   de: 'die Frauen',         fr: 'les femmes',      erklaerung: 'Plural → les femmes' },
      { typ: 'luecke',   satz: '___ chat dort sur ___ table.', loesung: 'Le, la',
        erklaerung: 'chat (m.) → le; table (f.) → la' },
      { typ: 'luecke',   satz: "J'ai ___ voiture.", loesung: 'une',
        erklaerung: 'voiture = weiblich → une voiture' },
      { typ: 'luecke',   satz: 'Voici ___ clé de la chambre.', loesung: 'la',
        erklaerung: 'clé = weiblich → la clé' },
      { typ: 'luecke',   satz: "C'est ___ bon restaurant.", loesung: 'un',
        erklaerung: 'restaurant = männlich → un restaurant' },
      { typ: 'luecke',   satz: '___ enfants jouent dans le jardin.', loesung: 'Les',
        erklaerung: 'Plural → les enfants' },
      { typ: 'richtigfalsch', frage: '"Le soleil" — Sonne ist im Französischen männlich.', antwort: true,
        erklaerung: 'le soleil = die Sonne (m.) — anders als im Deutschen!' },
      { typ: 'richtigfalsch', frage: '"Un gare" ist der richtige Artikel für Bahnhof.', antwort: false,
        erklaerung: 'gare ist weiblich → une gare / la gare' },
      { typ: 'richtigfalsch', frage: '"Les" wird für alle Pluralformen verwendet, egal ob männlich oder weiblich.', antwort: true,
        erklaerung: 'Genau — im Plural gibt es nur "les" (keine Unterscheidung m./f.)' },
      { typ: 'richtigfalsch', frage: '"L\'hôtel" verwendet l\' weil "hôtel" mit einem Vokal beginnt.', antwort: true,
        erklaerung: 'h im Französischen ist stumm → hôtel beginnt akustisch mit Vokal → l\'hôtel' },
      { typ: 'hoeren',   fr: 'le livre',          de: 'das Buch',         erklaerung: 'livre = männlich → le livre' },
      { typ: 'hoeren',   fr: 'la maison',         de: 'das Haus',         erklaerung: 'maison = weiblich → la maison' },
      { typ: 'hoeren',   fr: "l'école",           de: 'die Schule',       erklaerung: 'école beginnt mit Vokal → l\'école' },
      { typ: 'hoeren',   fr: 'les enfants',       de: 'die Kinder',       erklaerung: 'Plural → les enfants' },
      { typ: 'hoeren',   fr: 'une bouteille',     de: 'eine Flasche',     erklaerung: 'bouteille = weiblich → une bouteille' },
      { typ: 'hoeren',   fr: "l'addition",        de: 'die Rechnung',     erklaerung: 'addition (f.) beginnt mit Vokal → l\'addition' }
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
        erklaerung: '"Je suis" = ich bin. "Ich habe" = j\'ai (avoir).' },
      // ── Erweiterte Übungen (50-Fragen-Pool) ──
      { typ: 'tippen',   de: 'sie ist (f.)',       fr: 'elle est',        erklaerung: 'être: elle → est' },
      { typ: 'tippen',   de: 'sie sind (f. Pl.)',  fr: 'elles sont',      erklaerung: 'être: elles → sont (rein weibliche Gruppe)' },
      { typ: 'tippen',   de: 'Ich bin Studentin.',  fr: 'Je suis étudiante.', erklaerung: 'Beruf/Status mit être; étudiante = weibliche Form' },
      { typ: 'tippen',   de: 'Er ist müde.',       fr: 'Il est fatigué.',  erklaerung: 'Eigenschaft mit être: fatigué = müde' },
      { typ: 'tippen',   de: 'Sie ist glücklich.',  fr: 'Elle est contente.', erklaerung: 'content(e) = zufrieden/glücklich; Angleichung: contente' },
      { typ: 'tippen',   de: 'Wir sind in Frankreich.', fr: 'Nous sommes en France.', erklaerung: 'Ortsangabe mit être: en France = in Frankreich' },
      { typ: 'tippen',   de: 'Sie sind nett. (Pl.)', fr: 'Ils sont gentils.', erklaerung: 'gentil(s) = nett; Plural: gentils' },
      { typ: 'tippen',   de: 'Du bist groß.',      fr: 'Tu es grand.',     erklaerung: 'grand = groß (Eigenschaft mit être)' },
      { typ: 'tippen',   de: 'Ich bin hier.',      fr: 'Je suis ici.',     erklaerung: 'ici = hier; Ortsangabe mit être' },
      { typ: 'tippen',   de: 'Er ist Arzt.',       fr: 'Il est médecin.',  erklaerung: 'Beruf mit être — OHNE Artikel im Französischen!' },
      { typ: 'tippen',   de: 'Du bist Französin.',  fr: 'Tu es française.', erklaerung: 'Nationalität mit être; française = weibliche Form' },
      { typ: 'tippen',   de: 'Wir sind bereit.',   fr: 'Nous sommes prêts.', erklaerung: 'prêt(s) = bereit; Plural: prêts' },
      { typ: 'tippen',   de: 'Ihr seid eingeladen.', fr: 'Vous êtes invités.', erklaerung: 'invité(s) = eingeladen' },
      { typ: 'tippen',   de: 'Sie ist Lehrerin.',  fr: 'Elle est professeur.', erklaerung: 'professeur = Lehrer/in (wird oft nicht angeglichen)' },
      { typ: 'tippen',   de: 'Es ist schön.',      fr: "C'est beau.",      erklaerung: 'c\'est = es ist; beau = schön' },
      { typ: 'tippen',   de: 'Es ist wichtig.',    fr: "C'est important.", erklaerung: 'c\'est + Adjektiv für allgemeine Aussagen' },
      { typ: 'tippen',   de: 'Wo bist du?',        fr: 'Où es-tu ?',      erklaerung: 'où = wo; Inversion: es-tu' },
      { typ: 'tippen',   de: 'Es ist kalt.',       fr: 'Il fait froid.',   erklaerung: 'Wetter: il fait + Adjektiv (nicht être!)' },
      { typ: 'tippen',   de: 'Bist du bereit?',    fr: 'Tu es prêt ?',    erklaerung: 'prêt = bereit; einfache Frageform durch Intonation' },
      { typ: 'tippen',   de: 'Sie sind Touristen.', fr: 'Ils sont touristes.', erklaerung: 'Beruf/Status mit être' },
      { typ: 'tippen',   de: 'Ich bin zufrieden.',  fr: 'Je suis content.', erklaerung: 'content = zufrieden (m.); contente = f.' },
      { typ: 'tippen',   de: 'Das ist gut.',       fr: "C'est bien.",      erklaerung: 'c\'est bien = das ist gut (sehr häufig!)' },
      { typ: 'luecke',   satz: 'Je ___ allemande.', loesung: 'suis',
        erklaerung: 'être: je → suis; Nationalität' },
      { typ: 'luecke',   satz: 'Nous ___ en vacances.', loesung: 'sommes',
        erklaerung: 'être: nous → sommes; en vacances = im Urlaub' },
      { typ: 'luecke',   satz: 'Vous ___ très gentils.', loesung: 'êtes',
        erklaerung: 'être: vous → êtes' },
      { typ: 'luecke',   satz: 'Elles ___ fatiguées.', loesung: 'sont',
        erklaerung: 'être: elles → sont; fatiguées = müde (f. Pl.)' },
      { typ: 'luecke',   satz: 'Tu ___ français ?', loesung: 'es',
        erklaerung: 'être: tu → es' },
      { typ: 'luecke',   satz: "C'___ mon ami.", loesung: 'est',
        erklaerung: 'c\'est = das ist; mon ami = mein Freund' },
      { typ: 'luecke',   satz: 'Il ___ médecin.', loesung: 'est',
        erklaerung: 'être: il → est; Beruf ohne Artikel' },
      { typ: 'luecke',   satz: 'Je ___ ici depuis lundi.', loesung: 'suis',
        erklaerung: 'être: je → suis; depuis = seit' },
      { typ: 'richtigfalsch', frage: '"Nous sommes" heißt "ihr seid".', antwort: false,
        erklaerung: '"Nous sommes" = wir sind. "Ihr seid" = vous êtes.' },
      { typ: 'richtigfalsch', frage: 'Für Berufe braucht man im Französischen keinen Artikel nach être.', antwort: true,
        erklaerung: 'Il est médecin (nicht: Il est un médecin). Kein Artikel bei Berufen!' },
      { typ: 'richtigfalsch', frage: '"Elles sont" verwendet man nur für rein weibliche Gruppen.', antwort: true,
        erklaerung: 'Elles = nur weiblich. Gemischt → ils sont.' },
      { typ: 'richtigfalsch', frage: '"C\'est" und "il est" sind immer austauschbar.', antwort: false,
        erklaerung: 'c\'est + Nomen/Adjektiv (allgemein); il est + Beruf/Nationalität (spezifisch)' },
      { typ: 'hoeren',   fr: 'Je suis allemande.',     de: 'Ich bin Deutsche.',     erklaerung: 'Nationalität mit être' },
      { typ: 'hoeren',   fr: 'Nous sommes en France.',  de: 'Wir sind in Frankreich.', erklaerung: 'Ortsangabe mit être' },
      { typ: 'hoeren',   fr: 'Il est médecin.',        de: 'Er ist Arzt.',          erklaerung: 'Beruf mit être, ohne Artikel' },
      { typ: 'hoeren',   fr: 'Elle est contente.',     de: 'Sie ist zufrieden.',    erklaerung: 'Eigenschaft mit être' },
      { typ: 'hoeren',   fr: 'Vous êtes prêts ?',     de: 'Seid ihr bereit?',      erklaerung: 'être: vous → êtes; prêts = bereit (Pl.)' },
      { typ: 'hoeren',   fr: "C'est très beau.",       de: 'Das ist sehr schön.',   erklaerung: 'c\'est = das ist; très = sehr' }
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
        erklaerung: '"J\'ai peur" = Ich habe Angst (ich bin ängstlich).' },
      // ── Erweiterte Übungen (50-Fragen-Pool) ──
      { typ: 'tippen',   de: 'sie haben (Pl.)',           fr: 'ils ont',              erklaerung: 'avoir: ils/elles → ont' },
      { typ: 'tippen',   de: 'sie hat',                    fr: 'elle a',               erklaerung: 'avoir: elle → a' },
      { typ: 'tippen',   de: 'Ich habe einen Hund.',       fr: "J'ai un chien.",       erklaerung: 'avoir + unbestimmter Artikel' },
      { typ: 'tippen',   de: 'Du hast recht.',             fr: 'Tu as raison.',        erklaerung: 'avoir raison = recht haben' },
      { typ: 'tippen',   de: 'Er hat Angst.',              fr: 'Il a peur.',           erklaerung: 'avoir peur = Angst haben' },
      { typ: 'tippen',   de: 'Wir haben ein Auto.',        fr: 'Nous avons une voiture.', erklaerung: 'avoir: nous → avons' },
      { typ: 'tippen',   de: 'Haben Sie eine Reservierung?', fr: ['Vous avez une réservation ?', 'Est-ce que vous avez une réservation ?', 'Avez-vous une réservation ?'], erklaerung: 'avoir: vous → avez' },
      { typ: 'tippen',   de: 'Ich bin 30 Jahre alt.',      fr: "J'ai 30 ans.",         erklaerung: 'Alter mit avoir: j\'ai X ans (nicht être!)' },
      { typ: 'tippen',   de: 'Sie frieren.',                fr: 'Ils ont froid.',       erklaerung: 'avoir froid = frieren (lit. Kälte haben)' },
      { typ: 'tippen',   de: 'Hast du Geschwister?',       fr: ['Tu as des frères et sœurs ?', 'Est-ce que tu as des frères et sœurs ?'], erklaerung: 'avoir: tu → as' },
      { typ: 'tippen',   de: 'Wir haben Glück.',           fr: 'Nous avons de la chance.', erklaerung: 'avoir de la chance = Glück haben' },
      { typ: 'tippen',   de: 'Ich habe keinen Hunger.',    fr: "Je n'ai pas faim.",    erklaerung: 'Verneinung: ne + ai + pas' },
      { typ: 'tippen',   de: 'Er hat ein Zimmer.',         fr: 'Il a une chambre.',    erklaerung: 'avoir: il → a; chambre (f.) → une' },
      { typ: 'tippen',   de: 'Sie hat zwei Kinder.',       fr: 'Elle a deux enfants.', erklaerung: 'avoir: elle → a' },
      { typ: 'tippen',   de: 'Haben Sie noch einen Tisch frei?', fr: ['Vous avez encore une table de libre ?', 'Est-ce que vous avez encore une table de libre ?'], erklaerung: 'Restaurant: avoir + Tisch frei' },
      { typ: 'tippen',   de: 'Ich habe es eilig.',         fr: "Je suis pressé.",      erklaerung: 'Achtung: "eilig haben" = être pressé (nicht avoir!)' },
      { typ: 'tippen',   de: 'Du hast Glück!',             fr: 'Tu as de la chance !', erklaerung: 'avoir de la chance = Glück haben' },
      { typ: 'tippen',   de: 'Wir haben Zeit.',            fr: 'Nous avons le temps.', erklaerung: 'avoir le temps = Zeit haben' },
      { typ: 'tippen',   de: 'Ich habe keine Zeit.',       fr: "Je n'ai pas le temps.", erklaerung: 'Verneinung: n\'ai pas + le temps' },
      { typ: 'tippen',   de: 'Er hat Fieber.',             fr: 'Il a de la fièvre.',   erklaerung: 'avoir de la fièvre = Fieber haben' },
      { typ: 'tippen',   de: 'Wie alt bist du?',           fr: ['Tu as quel âge ?', 'Quel âge as-tu ?', 'Quel âge est-ce que tu as ?'], erklaerung: 'Alter: avoir + quel âge' },
      { typ: 'tippen',   de: 'Sie haben ein schönes Hotel.', fr: 'Vous avez un bel hôtel.', erklaerung: 'beau → bel vor Vokal; hôtel (m.)' },
      { typ: 'tippen',   de: 'Ich habe Kopfschmerzen.',    fr: "J'ai mal à la tête.", erklaerung: 'avoir mal à = Schmerzen haben an' },
      { typ: 'tippen',   de: 'Er hat das Ticket.',         fr: 'Il a le billet.',      erklaerung: 'avoir: il → a; billet (m.)' },
      { typ: 'tippen',   de: 'Wir haben eine Frage.',      fr: 'Nous avons une question.', erklaerung: 'avoir: nous → avons' },
      { typ: 'tippen',   de: 'Sie haben keinen Wein mehr.', fr: "Ils n'ont plus de vin.", erklaerung: 'ne + ont + plus = nicht mehr; Teilungsartikel → de' },
      { typ: 'tippen',   de: 'Hast du einen Stadtplan?',   fr: ['Tu as un plan de la ville ?', 'Est-ce que tu as un plan de la ville ?'], erklaerung: 'plan de la ville = Stadtplan' },
      { typ: 'tippen',   de: 'Ich habe Bauchschmerzen.',   fr: "J'ai mal au ventre.", erklaerung: 'avoir mal au (= à + le) ventre' },
      { typ: 'luecke',   satz: "J'___ 25 ans.", loesung: 'ai', erklaerung: 'avoir: je → ai; Alter mit avoir' },
      { typ: 'luecke',   satz: 'Elle ___ une sœur et un frère.', loesung: 'a', erklaerung: 'avoir: elle → a' },
      { typ: 'luecke',   satz: 'Nous ___ faim après la randonnée.', loesung: 'avons', erklaerung: 'avoir: nous → avons; avoir faim = Hunger haben' },
      { typ: 'luecke',   satz: 'Tu ___ raison, ce restaurant est bon !', loesung: 'as', erklaerung: 'avoir: tu → as; avoir raison = recht haben' },
      { typ: 'luecke',   satz: 'Ils ___ trois valises.', loesung: 'ont', erklaerung: 'avoir: ils → ont' },
      { typ: 'luecke',   satz: "Vous ___ une chambre avec vue sur la mer ?", loesung: 'avez', erklaerung: 'avoir: vous → avez; vue sur la mer = Meerblick' },
      { typ: 'luecke',   satz: "J'___ mal à la tête.", loesung: 'ai', erklaerung: 'avoir mal à = Schmerzen haben an' },
      { typ: 'luecke',   satz: "Elle ___ de la chance, l'hôtel est super !", loesung: 'a', erklaerung: 'avoir de la chance = Glück haben' },
      { typ: 'richtigfalsch', frage: 'Im Französischen sagt man "Ich bin 20 Jahre alt" mit avoir: "J\'ai 20 ans."', antwort: true,
        erklaerung: 'Ja — Alter wird mit avoir ausgedrückt, nicht mit être!' },
      { typ: 'richtigfalsch', frage: '"Avoir raison" bedeutet "Recht haben".', antwort: true,
        erklaerung: 'Genau — avoir raison = recht haben; avoir tort = unrecht haben.' },
      { typ: 'richtigfalsch', frage: '"Ils avons" ist die korrekte Form für "sie haben".', antwort: false,
        erklaerung: 'Falsch — ils/elles ont. "Avons" gehört zu nous.' },
      { typ: 'richtigfalsch', frage: '"Avoir mal à la tête" bedeutet "Kopfschmerzen haben".', antwort: true,
        erklaerung: 'avoir mal à + Körperteil = Schmerzen haben. la tête = der Kopf.' },
      { typ: 'richtigfalsch', frage: '"J\'ai pressé" bedeutet "Ich habe es eilig".', antwort: false,
        erklaerung: '"Eilig haben" = être pressé (je suis pressé), nicht avoir!' },
      { typ: 'richtigfalsch', frage: 'Nach der Verneinung wird "avoir faim" zu "ne pas avoir faim".', antwort: true,
        erklaerung: 'Genau — je n\'ai pas faim. Die Verneinung umschließt das konjugierte Verb.' },
      { typ: 'hoeren',   fr: "J'ai faim.",               de: 'Ich habe Hunger.',        erklaerung: 'avoir faim = Hunger haben' },
      { typ: 'hoeren',   fr: 'Tu as quel âge ?',         de: 'Wie alt bist du?',        erklaerung: 'Alter wird mit avoir gefragt' },
      { typ: 'hoeren',   fr: 'Nous avons une réservation.', de: 'Wir haben eine Reservierung.', erklaerung: 'avoir: nous → avons' },
      { typ: 'hoeren',   fr: "J'ai mal à la tête.",      de: 'Ich habe Kopfschmerzen.', erklaerung: 'avoir mal à = Schmerzen haben' },
      { typ: 'hoeren',   fr: 'Vous avez une chambre libre ?', de: 'Haben Sie ein Zimmer frei?', erklaerung: 'Hotel-Standardsatz' },
      { typ: 'hoeren',   fr: 'Elle a deux enfants.',     de: 'Sie hat zwei Kinder.',    erklaerung: 'avoir: elle → a' }
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
        erklaerung: '"Je sais pas" statt "Je ne sais pas" — in der Schrift besser vollständig.' },
      // ── Erweiterte Übungen (50-Fragen-Pool) ──
      { typ: 'tippen',   de: 'Ich weiß nicht.',                     fr: 'Je ne sais pas.',              erklaerung: 'savoir: ne sais pas' },
      { typ: 'tippen',   de: 'Wir haben keinen Hunger.',            fr: "Nous n'avons pas faim.",       erklaerung: 'avons beginnt mit Vokal → n\'avons pas' },
      { typ: 'tippen',   de: 'Er arbeitet nicht.',                   fr: 'Il ne travaille pas.',         erklaerung: 'ne + travaille + pas' },
      { typ: 'tippen',   de: 'Ich mag das nicht.',                   fr: "Je n'aime pas ça.",            erklaerung: 'aime beginnt mit Vokal → n\'aime pas' },
      { typ: 'tippen',   de: 'Sie wohnen nicht hier.',               fr: "Ils n'habitent pas ici.",      erklaerung: 'habitent beginnt mit Vokal → n\'habitent pas' },
      { typ: 'tippen',   de: 'Das ist nicht teuer.',                 fr: "Ce n'est pas cher.",           erklaerung: 'n\'est pas + cher (teuer)' },
      { typ: 'tippen',   de: 'Ich habe kein Geld.',                  fr: "Je n'ai pas d'argent.",        erklaerung: 'n\'ai pas + de (nach Verneinung: un/une/du → de)' },
      { typ: 'tippen',   de: 'Er trinkt keinen Wein.',               fr: 'Il ne boit pas de vin.',       erklaerung: 'ne boit pas + de (Teilungsartikel fällt weg)' },
      { typ: 'tippen',   de: 'Wir gehen nicht an den Strand.',       fr: "Nous n'allons pas à la plage.", erklaerung: 'n\'allons pas (allons beginnt mit Vokal)' },
      { typ: 'tippen',   de: 'Ich finde das Restaurant nicht.',      fr: 'Je ne trouve pas le restaurant.', erklaerung: 'ne + trouve + pas' },
      { typ: 'tippen',   de: 'Sie kommt nicht mit.',                 fr: 'Elle ne vient pas.',           erklaerung: 'ne + vient + pas' },
      { typ: 'tippen',   de: 'Ich habe keine Reservierung.',         fr: "Je n'ai pas de réservation.",  erklaerung: 'n\'ai pas + de (une → de nach Verneinung)' },
      { typ: 'tippen',   de: 'Das Hotel ist nicht weit.',            fr: "L'hôtel n'est pas loin.",      erklaerung: 'n\'est pas + loin (weit)' },
      { typ: 'tippen',   de: 'Wir sprechen nicht gut Französisch.',  fr: 'Nous ne parlons pas bien français.', erklaerung: 'ne + parlons + pas; Adverb bien nach pas' },
      { typ: 'tippen',   de: 'Es gibt kein Brot mehr.',              fr: "Il n'y a plus de pain.",       erklaerung: 'ne…plus = nicht mehr; y a → n\'y a plus' },
      { typ: 'tippen',   de: 'Ich rauche nie.',                      fr: 'Je ne fume jamais.',           erklaerung: 'ne…jamais = nie; ersetzt ne…pas' },
      { typ: 'tippen',   de: 'Er sagt nichts.',                      fr: 'Il ne dit rien.',              erklaerung: 'ne…rien = nichts' },
      { typ: 'tippen',   de: 'Niemand ist da.',                      fr: "Personne n'est là.",           erklaerung: 'personne…ne = niemand (personne steht vorne)' },
      { typ: 'tippen',   de: 'Ich habe noch nie Schnecken gegessen.', fr: "Je n'ai jamais mangé d'escargots.", erklaerung: 'ne…jamais im passé composé: n\'ai jamais + Partizip' },
      { typ: 'tippen',   de: 'Das ist nicht schlecht!',              fr: "Ce n'est pas mal !",           erklaerung: 'n\'est pas mal = nicht schlecht (Kompliment!)' },
      { typ: 'tippen',   de: 'Ich höre nichts.',                     fr: "Je n'entends rien.",           erklaerung: 'ne…rien = nichts; n\'entends (Vokal)' },
      { typ: 'tippen',   de: 'Sie möchte nicht bezahlen.',           fr: 'Elle ne veut pas payer.',      erklaerung: 'ne + veut + pas + Infinitiv' },
      { typ: 'tippen',   de: 'Ich kann nicht kommen.',               fr: 'Je ne peux pas venir.',        erklaerung: 'ne + peux + pas + Infinitiv' },
      { typ: 'tippen',   de: 'Wir haben nichts bestellt.',           fr: "Nous n'avons rien commandé.", erklaerung: 'ne…rien im passé composé: rien steht vor dem Partizip' },
      { typ: 'tippen',   de: 'Das Zimmer ist nicht sauber.',         fr: "La chambre n'est pas propre.", erklaerung: 'n\'est pas + propre (sauber)' },
      { typ: 'tippen',   de: 'Ich will nicht mehr.',                 fr: 'Je ne veux plus.',             erklaerung: 'ne…plus = nicht mehr' },
      { typ: 'tippen',   de: 'Er findet den Weg nicht.',             fr: 'Il ne trouve pas le chemin.',  erklaerung: 'ne + trouve + pas; chemin = Weg' },
      { typ: 'tippen',   de: 'Das Wasser ist nicht kalt.',           fr: "L'eau n'est pas froide.",      erklaerung: 'eau (f.) → froide (f.); n\'est pas' },
      { typ: 'tippen',   de: 'Ich esse kein Fleisch.',               fr: 'Je ne mange pas de viande.',   erklaerung: 'ne mange pas + de (Teilungsartikel → de)' },
      { typ: 'tippen',   de: 'Sie hat keine Kinder.',                fr: "Elle n'a pas d'enfants.",      erklaerung: 'n\'a pas + d\' (vor Vokal: de → d\')' },
      { typ: 'tippen',   de: 'Das funktioniert nicht.',              fr: 'Ça ne marche pas.',            erklaerung: 'marcher = funktionieren (umgangssprachlich)' },
      { typ: 'luecke',   satz: 'Je ___ comprends ___.', loesung: 'ne, pas', erklaerung: 'ne…pas umschließt das konjugierte Verb' },
      { typ: 'luecke',   satz: "Il ___ aime ___ le fromage.", loesung: "n', pas", erklaerung: 'aime beginnt mit Vokal → n\'…pas' },
      { typ: 'luecke',   satz: 'Elle ne parle ___ allemand.', loesung: 'pas', erklaerung: 'ne…pas: pas steht nach dem Verb' },
      { typ: 'luecke',   satz: "Je ___ fume ___.", loesung: 'ne, jamais', erklaerung: 'ne…jamais = nie' },
      { typ: 'luecke',   satz: "Il n'y a ___ de pain.", loesung: 'plus', erklaerung: 'ne…plus = nicht mehr' },
      { typ: 'luecke',   satz: "Il ne dit ___.", loesung: 'rien', erklaerung: 'ne…rien = nichts' },
      { typ: 'luecke',   satz: "___ n'est là.", loesung: 'Personne', erklaerung: 'personne…ne = niemand' },
      { typ: 'luecke',   satz: "Je n'ai ___ mangé d'escargots.", loesung: 'jamais', erklaerung: 'ne…jamais im passé composé: zwischen Hilfsverb und Partizip' },
      { typ: 'richtigfalsch', frage: '"Ne…jamais" bedeutet "nie" und ersetzt "ne…pas".', antwort: true,
        erklaerung: 'Genau — jamais ersetzt pas: Je ne fume jamais. (Ich rauche nie.)' },
      { typ: 'richtigfalsch', frage: '"Ne…rien" bedeutet "nicht mehr".', antwort: false,
        erklaerung: '"Ne…rien" = nichts. "Nicht mehr" = ne…plus.' },
      { typ: 'richtigfalsch', frage: 'Nach der Verneinung wird "un/une" zu "de": "Je n\'ai pas de voiture."', antwort: true,
        erklaerung: 'Ja — unbestimmte und Teilungsartikel werden nach Verneinung zu de/d\'.' },
      { typ: 'richtigfalsch', frage: '"Personne ne vient" bedeutet "Jeder kommt".', antwort: false,
        erklaerung: '"Personne ne vient" = Niemand kommt. Personne + ne = niemand.' },
      { typ: 'richtigfalsch', frage: 'Im passé composé steht "pas" nach dem Hilfsverb: "Je n\'ai pas mangé."', antwort: true,
        erklaerung: 'Genau — ne + Hilfsverb + pas + Partizip.' },
      { typ: 'richtigfalsch', frage: 'Man kann "ne…pas" und "ne…jamais" kombinieren: "Je ne fume pas jamais."', antwort: false,
        erklaerung: 'Nein — man wählt entweder pas ODER jamais, nicht beides zusammen.' },
      { typ: 'hoeren',   fr: 'Je ne comprends pas.',         de: 'Ich verstehe nicht.',           erklaerung: 'Wichtigster Satz im Urlaub!' },
      { typ: 'hoeren',   fr: "Ce n'est pas cher.",           de: 'Das ist nicht teuer.',           erklaerung: 'n\'est pas + cher' },
      { typ: 'hoeren',   fr: "Il n'y a plus de pain.",       de: 'Es gibt kein Brot mehr.',        erklaerung: 'ne…plus = nicht mehr' },
      { typ: 'hoeren',   fr: 'Je ne sais pas.',              de: 'Ich weiß nicht.',                erklaerung: 'Einer der häufigsten Sätze' },
      { typ: 'hoeren',   fr: "Elle n'est pas là.",           de: 'Sie ist nicht da.',               erklaerung: 'n\'est pas + là' },
      { typ: 'hoeren',   fr: 'Je ne peux pas venir.',        de: 'Ich kann nicht kommen.',          erklaerung: 'ne + peux + pas + Infinitiv' }
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
      { typ: 'tippen', de: 'Haben Sie einen Tisch für zwei?', fr: ['Est-ce que vous avez une table pour deux ?', 'Avez-vous une table pour deux ?', 'Vous avez une table pour deux ?'], erklaerung: 'est-ce que wird einfach vorne angehängt' },
      { typ: 'tippen', de: 'Wie viel kostet das?',           fr: 'Combien ça coûte ?',                        erklaerung: 'combien = wie viel' },
      { typ: 'tippen', de: 'Wann fährt der Bus ab?',         fr: 'À quelle heure part le bus ?',              erklaerung: 'à quelle heure = um wie viel Uhr / wann' },
      { typ: 'tippen', de: 'Sprechen Sie Deutsch?',          fr: ['Parlez-vous allemand ?', 'Est-ce que vous parlez allemand ?', 'Vous parlez allemand ?'], erklaerung: 'est-ce que + vous-Form' },
      { typ: 'tippen', de: 'Wo sind die Toiletten?',         fr: 'Où sont les toilettes ?',                   erklaerung: 'où + être Plural: sont' },
      { typ: 'richtigfalsch', frage: 'Bei der Inversionsfrage tauschen Verb und Pronomen die Plätze: "Parles-tu ?"', antwort: true,
        erklaerung: 'Genau — Verb vor Pronomen, verbunden mit Bindestrich.' },
      { typ: 'richtigfalsch', frage: '"Est-ce que" kann nur vor Vokalen verwendet werden.', antwort: false,
        erklaerung: '"Est-ce que" wird immer vorne angehängt. Vor Vokalen wird es zu "Est-ce qu\'".' },
      { typ: 'luecke', satz: '___ est le restaurant ?', loesung: 'Où',  erklaerung: 'où = wo' },
      { typ: 'luecke', satz: 'Est-ce ___ vous avez une chambre libre ?', loesung: 'que', erklaerung: 'est-ce que — vor Konsonant bleibt "que"' },
      // ── Erweiterte Übungen (50-Fragen-Pool) ──
      { typ: 'tippen', de: 'Wo ist der Bahnhof?',            fr: 'Où est la gare ?',             erklaerung: 'où = wo; gare (f.) → la gare' },
      { typ: 'tippen', de: 'Wer ist das?',                   fr: 'Qui est-ce ?',                 erklaerung: 'qui = wer; est-ce = ist das' },
      { typ: 'tippen', de: 'Warum bist du müde?',            fr: 'Pourquoi es-tu fatigué ?',     erklaerung: 'pourquoi = warum; Inversion: es-tu' },
      { typ: 'tippen', de: 'Wie heißen Sie?',                fr: ['Comment vous appelez-vous ?', 'Comment est-ce que vous vous appelez ?', 'Vous vous appelez comment ?'], erklaerung: 'comment = wie; s\'appeler = heißen' },
      { typ: 'tippen', de: 'Wie geht es dir?',               fr: ['Comment vas-tu ?', 'Comment est-ce que tu vas ?', 'Tu vas comment ?', 'Ça va ?'], erklaerung: 'comment + aller = wie geht es' },
      { typ: 'tippen', de: 'Was ist das?',                   fr: ["Qu'est-ce que c'est ?", "C'est quoi ?"], erklaerung: 'qu\'est-ce que c\'est = Was ist das (förmlich)' },
      { typ: 'tippen', de: 'Wie viel kostet das Zimmer?',    fr: 'Combien coûte la chambre ?',    erklaerung: 'combien = wie viel; coûter = kosten' },
      { typ: 'tippen', de: 'Um wie viel Uhr öffnet das Museum?', fr: "À quelle heure ouvre le musée ?", erklaerung: 'à quelle heure = um wie viel Uhr; ouvrir = öffnen' },
      { typ: 'tippen', de: 'Gibt es hier ein Restaurant?',   fr: ['Est-ce qu\'il y a un restaurant ici ?', 'Il y a un restaurant ici ?'], erklaerung: 'il y a = es gibt; est-ce que → est-ce qu\' (vor Vokal)' },
      { typ: 'tippen', de: 'Können Sie mir helfen?',         fr: ["Est-ce que vous pouvez m'aider ?", "Pouvez-vous m'aider ?", "Vous pouvez m'aider ?"], erklaerung: 'pouvoir + Infinitiv; m\'aider = mir helfen' },
      { typ: 'tippen', de: 'Wo kann ich bezahlen?',          fr: 'Où est-ce que je peux payer ?', erklaerung: 'où + est-ce que; payer = bezahlen' },
      { typ: 'tippen', de: 'Wann kommst du?',                fr: ['Quand est-ce que tu viens ?', 'Tu viens quand ?', 'Quand viens-tu ?'], erklaerung: 'quand = wann; venir = kommen' },
      { typ: 'tippen', de: 'Hast du Geschwister?',           fr: ['Est-ce que tu as des frères et sœurs ?', 'Tu as des frères et sœurs ?', 'As-tu des frères et sœurs ?'], erklaerung: 'frères et sœurs = Geschwister' },
      { typ: 'tippen', de: 'Wie spät ist es?',               fr: ['Quelle heure est-il ?', 'Il est quelle heure ?'], erklaerung: 'quelle heure = welche Uhrzeit' },
      { typ: 'tippen', de: 'Wo wohnst du?',                  fr: ['Où est-ce que tu habites ?', 'Tu habites où ?', 'Où habites-tu ?'], erklaerung: 'où = wo; habiter = wohnen' },
      { typ: 'tippen', de: 'Was möchten Sie essen?',         fr: ['Qu\'est-ce que vous voulez manger ?', 'Vous voulez manger quoi ?'], erklaerung: 'qu\'est-ce que = was; manger = essen' },
      { typ: 'tippen', de: 'Ist das weit von hier?',         fr: ["C'est loin d'ici ?", "Est-ce que c'est loin d'ici ?"], erklaerung: 'loin = weit; d\'ici = von hier' },
      { typ: 'tippen', de: 'Wie komme ich zum Bahnhof?',     fr: ['Comment est-ce que je vais à la gare ?', 'Comment aller à la gare ?'], erklaerung: 'comment + aller à = wie komme ich zu' },
      { typ: 'tippen', de: 'Warum ist das Restaurant geschlossen?', fr: 'Pourquoi le restaurant est fermé ?', erklaerung: 'pourquoi = warum; fermé = geschlossen' },
      { typ: 'tippen', de: 'Wie viele Personen?',            fr: 'Combien de personnes ?',        erklaerung: 'combien de + Nomen = wie viele' },
      { typ: 'tippen', de: 'Darf ich fragen?',               fr: ['Est-ce que je peux demander ?', 'Je peux demander ?'], erklaerung: 'pouvoir + demander = dürfen/können fragen' },
      { typ: 'tippen', de: 'Welche Farbe möchten Sie?',      fr: 'Quelle couleur voulez-vous ?',  erklaerung: 'quel(le) = welche(r); couleur = Farbe' },
      { typ: 'tippen', de: 'Ist das inbegriffen?',           fr: ["C'est compris ?", "Est-ce que c'est compris ?"], erklaerung: 'compris = inbegriffen/inklusive' },
      { typ: 'luecke', satz: '___ tu es fatigué ?', loesung: 'Pourquoi', erklaerung: 'pourquoi = warum' },
      { typ: 'luecke', satz: '___ heure est-il ?', loesung: 'Quelle', erklaerung: 'quelle = welche (f.); heure = Uhrzeit' },
      { typ: 'luecke', satz: '___ est-ce que tu viens ?', loesung: 'Quand', erklaerung: 'quand = wann' },
      { typ: 'luecke', satz: '___ de personnes ?', loesung: 'Combien', erklaerung: 'combien de = wie viele' },
      { typ: 'luecke', satz: '___ est-ce que c\'est ?', loesung: "Qu'", erklaerung: 'qu\'est-ce que c\'est = was ist das' },
      { typ: 'luecke', satz: '___ est la pharmacie la plus proche ?', loesung: 'Où', erklaerung: 'où = wo; la plus proche = die nächste' },
      { typ: 'luecke', satz: '___ vous appelez-vous ?', loesung: 'Comment', erklaerung: 'comment = wie' },
      { typ: 'luecke', satz: 'Est-ce ___ il y a un bus pour la plage ?', loesung: "qu'", erklaerung: 'est-ce que → est-ce qu\' vor "il" (Vokal)' },
      { typ: 'richtigfalsch', frage: 'Die Intonationsfrage ist die einfachste Form: Man hebt nur die Stimme am Ende.', antwort: true,
        erklaerung: 'Genau — "Tu parles français ?" — gleiche Struktur, nur ansteigende Intonation.' },
      { typ: 'richtigfalsch', frage: '"Où" bedeutet "wann".', antwort: false,
        erklaerung: 'où = wo/wohin. Wann = quand.' },
      { typ: 'richtigfalsch', frage: '"Combien de" fragt nach einer Menge oder Anzahl.', antwort: true,
        erklaerung: 'combien de = wie viel/wie viele; combien de personnes = wie viele Personen' },
      { typ: 'richtigfalsch', frage: 'Bei der Inversion mit "il" braucht man manchmal ein "-t-": "Parle-t-il ?"', antwort: true,
        erklaerung: 'Wenn das Verb auf Vokal endet und das Pronomen mit Vokal beginnt, wird -t- eingefügt: parle-t-il, a-t-elle' },
      { typ: 'hoeren', fr: 'Où est la gare ?',              de: 'Wo ist der Bahnhof?',         erklaerung: 'où = wo; la gare = der Bahnhof' },
      { typ: 'hoeren', fr: 'Combien ça coûte ?',            de: 'Wie viel kostet das?',         erklaerung: 'combien = wie viel; coûter = kosten' },
      { typ: 'hoeren', fr: "Qu'est-ce que c'est ?",         de: 'Was ist das?',                 erklaerung: 'Standard-Frage für "Was ist das?"' },
      { typ: 'hoeren', fr: 'À quelle heure part le train ?', de: 'Um wie viel Uhr fährt der Zug?', erklaerung: 'à quelle heure = um wie viel Uhr' },
      { typ: 'hoeren', fr: 'Où sont les toilettes ?',       de: 'Wo sind die Toiletten?',       erklaerung: 'Sehr wichtige Alltagsfrage!' },
      { typ: 'hoeren', fr: 'Comment vous appelez-vous ?',   de: 'Wie heißen Sie?',              erklaerung: 'comment = wie; s\'appeler = heißen' }
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
      { typ: 'luecke', satz: 'une chambre ___ (großes Zimmer)', loesung: 'grande', erklaerung: 'chambre (f.) → grande (f.)' },
      // ── Erweiterte Übungen (50-Fragen-Pool) ──
      { typ: 'tippen', de: 'ein schönes Dorf',             fr: 'un beau village',       erklaerung: 'village (m.) → beau; BAGS-Adjektiv → vor dem Nomen' },
      { typ: 'tippen', de: 'eine alte Kirche',              fr: 'une vieille église',    erklaerung: 'vieux (m.) → vieille (f.); BAGS → vor dem Nomen' },
      { typ: 'tippen', de: 'ein kleines Café',              fr: 'un petit café',         erklaerung: 'petit steht vor dem Nomen (BAGS: Size)' },
      { typ: 'tippen', de: 'ein neues Restaurant',          fr: 'un nouveau restaurant', erklaerung: 'nouveau (m.) steht vor dem Nomen' },
      { typ: 'tippen', de: 'das blaue Meer',                fr: 'la mer bleue',          erklaerung: 'Farben stehen NACH dem Nomen; mer (f.) → bleue' },
      { typ: 'tippen', de: 'eine neue Freundin',            fr: 'une nouvelle amie',     erklaerung: 'nouveau (m.) → nouvelle (f.)' },
      { typ: 'tippen', de: 'ein junger Mann',               fr: 'un jeune homme',        erklaerung: 'jeune steht vor dem Nomen (BAGS: Age)' },
      { typ: 'tippen', de: 'ein großes Haus',               fr: 'une grande maison',     erklaerung: 'maison (f.) → grande; BAGS → vor dem Nomen' },
      { typ: 'tippen', de: 'kaltes Wasser',                 fr: "de l'eau froide",       erklaerung: 'froid (m.) → froide (f.); Adjektiv nach Nomen' },
      { typ: 'tippen', de: 'ein interessantes Buch',        fr: 'un livre intéressant',  erklaerung: 'intéressant steht nach dem Nomen (kein BAGS)' },
      { typ: 'tippen', de: 'ein heißer Kaffee',             fr: 'un café chaud',         erklaerung: 'chaud steht nach dem Nomen' },
      { typ: 'tippen', de: 'eine weiße Katze',              fr: 'un chat blanc',         erklaerung: 'Farben nach dem Nomen; chat (m.) → blanc' },
      { typ: 'tippen', de: 'ein schönes Mädchen',           fr: 'une belle fille',       erklaerung: 'beau (m.) → belle (f.); BAGS → vor dem Nomen' },
      { typ: 'tippen', de: 'eine lange Reise',              fr: 'un long voyage',        erklaerung: 'voyage (m.); long steht vor dem Nomen' },
      { typ: 'tippen', de: 'ein leckeres Essen',            fr: 'un repas délicieux',    erklaerung: 'délicieux steht nach dem Nomen' },
      { typ: 'tippen', de: 'die frischen Croissants',       fr: 'les croissants frais',  erklaerung: 'frais steht nach dem Nomen' },
      { typ: 'tippen', de: 'eine typische Straße',          fr: 'une rue typique',       erklaerung: 'typique steht nach dem Nomen; gleich m./f.' },
      { typ: 'tippen', de: 'ein alter Baum',                fr: 'un vieil arbre',        erklaerung: 'vieux → vieil vor Vokal (wie beau → bel)' },
      { typ: 'tippen', de: 'eine ruhige Straße',            fr: 'une rue calme',         erklaerung: 'calme steht nach dem Nomen; gleich m./f.' },
      { typ: 'tippen', de: 'ein teures Hotel',              fr: 'un hôtel cher',         erklaerung: 'cher steht nach dem Nomen' },
      { typ: 'tippen', de: 'eine gute Flasche Wein',        fr: 'une bonne bouteille de vin', erklaerung: 'bon → bonne (f.); BAGS → vor dem Nomen' },
      { typ: 'tippen', de: 'schwarze Schuhe',               fr: 'des chaussures noires', erklaerung: 'noir → noires (f. Pl.); Farben nach dem Nomen' },
      { typ: 'tippen', de: 'ein kleiner Hund',              fr: 'un petit chien',        erklaerung: 'petit steht vor dem Nomen (BAGS: Size)' },
      { typ: 'tippen', de: 'eine perfekte Aussicht',        fr: 'une vue parfaite',      erklaerung: 'parfait → parfaite (f.); nach dem Nomen' },
      { typ: 'tippen', de: 'der nächste Bus',               fr: 'le prochain bus',       erklaerung: 'prochain steht VOR dem Nomen bei Reihenfolge' },
      { typ: 'tippen', de: 'ein großer Garten',             fr: 'un grand jardin',       erklaerung: 'grand steht vor dem Nomen (BAGS: Size)' },
      { typ: 'tippen', de: 'eine gemütliche Terrasse',      fr: 'une terrasse agréable', erklaerung: 'agréable nach dem Nomen; gleich m./f.' },
      { typ: 'luecke', satz: 'un ___ arbre (alter Baum)',          loesung: 'vieil',    erklaerung: 'vieux → vieil vor Vokal' },
      { typ: 'luecke', satz: 'une mer ___ (blaues Meer)',          loesung: 'bleue',    erklaerung: 'bleu → bleue (f.); Farben nach dem Nomen' },
      { typ: 'luecke', satz: 'un café ___ (heißer Kaffee)',        loesung: 'chaud',    erklaerung: 'chaud steht nach dem Nomen' },
      { typ: 'luecke', satz: 'une ___ église (alte Kirche)',        loesung: 'vieille',  erklaerung: 'vieux → vieille (f.); BAGS → vor dem Nomen' },
      { typ: 'luecke', satz: 'des chaussures ___ (schwarze Schuhe)', loesung: 'noires',   erklaerung: 'noir → noires (f. Pl.)' },
      { typ: 'luecke', satz: 'un ___ restaurant (neues Restaurant)', loesung: 'nouveau', erklaerung: 'nouveau steht vor dem Nomen (BAGS)' },
      { typ: 'luecke', satz: 'une rue ___ (ruhige Straße)',         loesung: 'calme',    erklaerung: 'calme nach dem Nomen; gleich m./f.' },
      { typ: 'luecke', satz: 'un repas ___ (leckeres Essen)',       loesung: 'délicieux', erklaerung: 'délicieux nach dem Nomen' },
      { typ: 'richtigfalsch', frage: '"Beau" wird vor einem männlichen Nomen mit Vokalanfang zu "bel": "un bel hôtel".', antwort: true,
        erklaerung: 'Ja — wie le/la → l\' gibt es beau → bel vor Vokal/stumm-h.' },
      { typ: 'richtigfalsch', frage: 'Alle Adjektive stehen im Französischen nach dem Nomen.', antwort: false,
        erklaerung: 'Nein — BAGS-Adjektive (Beauty, Age, Goodness, Size) stehen VOR dem Nomen.' },
      { typ: 'richtigfalsch', frage: '"Nouveau" wird im Femininum zu "nouvelle".', antwort: true,
        erklaerung: 'Ja — nouveau (m.) → nouvelle (f.): une nouvelle voiture.' },
      { typ: 'richtigfalsch', frage: 'Adjektive wie "calme" oder "confortable" ändern sich im Femininum.', antwort: false,
        erklaerung: 'Adjektive auf -e sind bereits gleich für m. und f.: un homme calme, une femme calme.' },
      { typ: 'richtigfalsch', frage: '"Vieux" wird vor einem männlichen Vokal-Nomen zu "vieil": "un vieil ami".', antwort: true,
        erklaerung: 'Ja — wie beau → bel gibt es vieux → vieil vor Vokal.' },
      { typ: 'richtigfalsch', frage: '"Bleu" im Femininum Plural ist "bleues".', antwort: true,
        erklaerung: 'bleu → bleue (f. Sg.) → bleues (f. Pl.): des fleurs bleues.' },
      { typ: 'hoeren', fr: 'une grande plage',          de: 'ein großer Strand',         erklaerung: 'grande (f.); BAGS → vor dem Nomen' },
      { typ: 'hoeren', fr: 'un bel hôtel',              de: 'ein schönes Hotel',          erklaerung: 'beau → bel vor Vokal' },
      { typ: 'hoeren', fr: 'le vin rouge',              de: 'der Rotwein',                erklaerung: 'Farben nach dem Nomen' },
      { typ: 'hoeren', fr: 'une vieille église',        de: 'eine alte Kirche',            erklaerung: 'vieux → vieille (f.)' },
      { typ: 'hoeren', fr: 'un petit café',             de: 'ein kleines Café',            erklaerung: 'petit → BAGS → vor dem Nomen' },
      { typ: 'hoeren', fr: 'une chambre confortable',   de: 'ein komfortables Zimmer',     erklaerung: 'confortable nach dem Nomen; gleich m./f.' }
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
      { typ: 'luecke', satz: 'Vous ___ français ? (parler)',          loesung: 'parlez',    erklaerung: 'parler: vous → parlez' },
      // ── Erweiterte Übungen (50-Fragen-Pool) ──
      { typ: 'tippen', de: 'Er bestellt eine Pizza.',            fr: 'Il commande une pizza.',         erklaerung: 'commander: il → commande' },
      { typ: 'tippen', de: 'Du sprichst gut Französisch.',       fr: 'Tu parles bien français.',       erklaerung: 'parler: tu → parles' },
      { typ: 'tippen', de: 'Wir essen um 12 Uhr.',              fr: 'Nous mangeons à midi.',          erklaerung: 'manger: nous → mangeons (e bleibt!)' },
      { typ: 'tippen', de: 'Sie reisen nach Spanien.',           fr: 'Ils voyagent en Espagne.',       erklaerung: 'voyager: ils → voyagent' },
      { typ: 'tippen', de: 'Ich wohne in München.',              fr: "J'habite à Munich.",             erklaerung: 'habiter: je → j\'habite (Vokal!)' },
      { typ: 'tippen', de: 'Sie mag Schokolade.',                fr: 'Elle aime le chocolat.',         erklaerung: 'aimer: elle → aime' },
      { typ: 'tippen', de: 'Wir kommen um 8 Uhr an.',           fr: 'Nous arrivons à 8 heures.',      erklaerung: 'arriver: nous → arrivons' },
      { typ: 'tippen', de: 'Er sucht den Bahnhof.',              fr: 'Il cherche la gare.',            erklaerung: 'chercher: il → cherche' },
      { typ: 'tippen', de: 'Du bezahlst die Rechnung.',          fr: "Tu payes l'addition.",           erklaerung: 'payer: tu → payes; addition (f.) = Rechnung' },
      { typ: 'tippen', de: 'Wir schauen die Speisekarte an.',    fr: 'Nous regardons le menu.',        erklaerung: 'regarder: nous → regardons' },
      { typ: 'tippen', de: 'Ihr beginnt um 9 Uhr.',             fr: 'Vous commencez à 9 heures.',     erklaerung: 'commencer: vous → commencez' },
      { typ: 'tippen', de: 'Ich rufe ein Taxi.',                 fr: "J'appelle un taxi.",             erklaerung: 'appeler: j\'appelle (Konsonantenverdoppelung)' },
      { typ: 'tippen', de: 'Sie kochen gern.',                   fr: 'Ils aiment cuisiner.',           erklaerung: 'aimer + Infinitiv = gern etwas tun' },
      { typ: 'tippen', de: 'Er hört Musik.',                     fr: 'Il écoute de la musique.',       erklaerung: 'écouter: il → écoute; musique (f.) → de la' },
      { typ: 'tippen', de: 'Wir denken an den Urlaub.',          fr: 'Nous pensons aux vacances.',     erklaerung: 'penser à: nous → pensons; à + les = aux' },
      { typ: 'tippen', de: 'Ich warte auf den Bus.',             fr: "J'attends le bus.",              erklaerung: 'attendre: j\'attends — Achtung, -re Verb! (Falle)' },
      { typ: 'tippen', de: 'Du tanzt gut.',                      fr: 'Tu danses bien.',                erklaerung: 'danser: tu → danses' },
      { typ: 'tippen', de: 'Er fragt nach dem Weg.',             fr: 'Il demande le chemin.',          erklaerung: 'demander: il → demande; chemin = Weg' },
      { typ: 'tippen', de: 'Wir kaufen Brot.',                   fr: 'Nous achetons du pain.',         erklaerung: 'acheter: nous → achetons; pain (m.) → du' },
      { typ: 'tippen', de: 'Sie besucht ihre Eltern.',           fr: 'Elle visite ses parents.',       erklaerung: 'visiter: elle → visite' },
      { typ: 'tippen', de: 'Ich zähle bis zehn.',                fr: 'Je compte jusqu\'à dix.',        erklaerung: 'compter: je → compte' },
      { typ: 'tippen', de: 'Er benutzt das Telefon.',            fr: 'Il utilise le téléphone.',       erklaerung: 'utiliser: il → utilise' },
      { typ: 'tippen', de: 'Wir probieren das Essen.',           fr: 'Nous goûtons le repas.',         erklaerung: 'goûter: nous → goûtons' },
      { typ: 'tippen', de: 'Du trägst eine Sonnenbrille.',       fr: 'Tu portes des lunettes de soleil.', erklaerung: 'porter: tu → portes' },
      { typ: 'tippen', de: 'Sie erzählt eine Geschichte.',       fr: 'Elle raconte une histoire.',     erklaerung: 'raconter: elle → raconte' },
      { typ: 'tippen', de: 'Ich gebe meinen Namen an.',          fr: 'Je donne mon nom.',              erklaerung: 'donner: je → donne' },
      { typ: 'tippen', de: 'Wir beginnen die Reise.',            fr: 'Nous commençons le voyage.',     erklaerung: 'commencer: nous → commençons (ç vor o!)' },
      { typ: 'tippen', de: 'Er fotografiert den Strand.',        fr: 'Il photographie la plage.',      erklaerung: 'photographier: il → photographie' },
      { typ: 'luecke', satz: 'Nous ___ au restaurant ce soir. (manger)', loesung: 'mangeons', erklaerung: 'manger: nous → mangeons (e vor o für weichen Laut)' },
      { typ: 'luecke', satz: 'Tu ___ à Paris ? (habiter)',         loesung: 'habites', erklaerung: 'habiter: tu → habites' },
      { typ: 'luecke', satz: 'Ils ___ la tour Eiffel. (regarder)', loesung: 'regardent', erklaerung: 'regarder: ils → regardent' },
      { typ: 'luecke', satz: "J'___ un taxi. (appeler)",           loesung: 'appelle', erklaerung: 'appeler: j\'appelle (Konsonantenverdoppelung!)' },
      { typ: 'luecke', satz: 'Vous ___ bien ! (danser)',           loesung: 'dansez', erklaerung: 'danser: vous → dansez' },
      { typ: 'luecke', satz: 'Elle ___ le chemin. (chercher)',     loesung: 'cherche', erklaerung: 'chercher: elle → cherche' },
      { typ: 'luecke', satz: 'Nous ___ le voyage. (commencer)',    loesung: 'commençons', erklaerung: 'commencer: nous → commençons (ç vor o!)' },
      { typ: 'luecke', satz: 'Il ___ la musique. (écouter)',       loesung: 'écoute', erklaerung: 'écouter: il → écoute' },
      { typ: 'richtigfalsch', frage: '"Nous commençons" — das ç ist nötig, damit das c vor o weich bleibt.', antwort: true,
        erklaerung: 'Ja — ohne ç würde co hart klingen (wie "ko"). Das ç erhält den weichen s-Laut.' },
      { typ: 'richtigfalsch', frage: '"J\'appelle" hat doppeltes l — bei den meisten Formen von "appeler" verdoppelt sich das l.', antwort: false,
        erklaerung: 'Nur in betonten Formen: j\'appelle, tu appelles, il appelle, ils appellent — aber: nous appelons, vous appelez.' },
      { typ: 'richtigfalsch', frage: '"Voyager" konjugiert sich genauso wie "parler" — ohne Besonderheiten.', antwort: false,
        erklaerung: 'Bei voyager bleibt das e vor o/a: nous voyageons (wie manger → mangeons).' },
      { typ: 'richtigfalsch', frage: 'Die Endung "-ent" bei "ils parlent" ist stumm — es klingt wie "il parle".', antwort: true,
        erklaerung: 'Ja — parle, parles, parlent klingen alle gleich!' },
      { typ: 'richtigfalsch', frage: '"Aimer + Infinitiv" bedeutet "gern etwas tun": "J\'aime nager" = Ich schwimme gern.', antwort: true,
        erklaerung: 'Genau — aimer + Infinitiv ist die Standardform für "gern tun".' },
      { typ: 'richtigfalsch', frage: '"Payer" wird konjugiert: "je paye" oder "je paie" — beides ist korrekt.', antwort: true,
        erklaerung: 'Ja — bei Verben auf -ayer sind beide Formen möglich: je paye/je paie.' },
      { typ: 'hoeren', fr: 'Je parle français.',            de: 'Ich spreche Französisch.',     erklaerung: 'parler: je → parle' },
      { typ: 'hoeren', fr: 'Nous mangeons au restaurant.',  de: 'Wir essen im Restaurant.',     erklaerung: 'manger: nous → mangeons' },
      { typ: 'hoeren', fr: 'Elle travaille beaucoup.',      de: 'Sie arbeitet viel.',            erklaerung: 'travailler: elle → travaille' },
      { typ: 'hoeren', fr: "J'habite à Munich.",            de: 'Ich wohne in München.',         erklaerung: 'habiter: j\'habite' },
      { typ: 'hoeren', fr: 'Il commande une pizza.',        de: 'Er bestellt eine Pizza.',       erklaerung: 'commander: il → commande' },
      { typ: 'hoeren', fr: 'Vous voyagez souvent ?',        de: 'Reisen Sie oft?',               erklaerung: 'voyager: vous → voyagez' }
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
      { typ: 'tippen', de: 'Ich bin nach Paris gefahren.',       fr: ['Je suis allée à Paris.', 'Je suis allé à Paris.'], erklaerung: 'aller → mit être; Angleichung: allé (m.) / allée (f.)' },
      { typ: 'tippen', de: 'Wir haben viel gegessen.',           fr: 'Nous avons beaucoup mangé.',     erklaerung: 'manger → mangé; nous avons mangé' },
      { typ: 'richtigfalsch', frage: '"Aller" bildet das passé composé mit "avoir": "j\'ai allé".', antwort: false,
        erklaerung: '"Aller" gehört zu den être-Verben: je suis allé(e).' },
      { typ: 'richtigfalsch', frage: 'Das Partizip von "-er" Verben endet auf -é: manger → mangé.', antwort: true,
        erklaerung: 'Ja — -er Verben: Stamm + é. z.B. parler → parlé, visiter → visité.' },
      { typ: 'luecke', satz: 'Nous ___ visité le château hier. (avoir)', loesung: 'avons', erklaerung: 'avoir Pl.: nous avons' },
      { typ: 'luecke', satz: 'Elle ___ partie tôt. (être)',              loesung: 'est',   erklaerung: 'partir = être-Verb: elle est partie' },
      // ── Erweiterte Übungen (50-Fragen-Pool) ──
      { typ: 'tippen', de: 'Ich habe Kaffee getrunken.',           fr: "J'ai bu un café.",              erklaerung: 'boire → bu (unregelmäßig); avoir: j\'ai bu' },
      { typ: 'tippen', de: 'Er hat das Schloss gesehen.',          fr: 'Il a vu le château.',           erklaerung: 'voir → vu (unregelmäßig); avoir: il a vu' },
      { typ: 'tippen', de: 'Wir haben eine Bootsfahrt gemacht.',  fr: 'Nous avons fait une promenade en bateau.', erklaerung: 'faire → fait; nous avons fait' },
      { typ: 'tippen', de: 'Sie ist gestern angekommen.',          fr: 'Elle est arrivée hier.',        erklaerung: 'arriver → être; elle est arrivée (f. Angleichung!)' },
      { typ: 'tippen', de: 'Er ist um 8 Uhr abgefahren.',         fr: 'Il est parti à 8 heures.',      erklaerung: 'partir → être; il est parti' },
      { typ: 'tippen', de: 'Wir haben im Restaurant gegessen.',   fr: 'Nous avons mangé au restaurant.', erklaerung: 'manger → mangé; avoir: nous avons mangé' },
      { typ: 'tippen', de: 'Ich habe die Rechnung bezahlt.',      fr: "J'ai payé l'addition.",         erklaerung: 'payer → payé; avoir: j\'ai payé' },
      { typ: 'tippen', de: 'Sie haben ein Zimmer gebucht.',       fr: 'Ils ont réservé une chambre.',  erklaerung: 'réserver → réservé; avoir: ils ont réservé' },
      { typ: 'tippen', de: 'Ich bin ins Hotel gegangen.',          fr: ['Je suis allé à l\'hôtel.', "Je suis allée à l'hôtel."], erklaerung: 'aller → être; allé/allée je nach Geschlecht' },
      { typ: 'tippen', de: 'Er hat einen Brief geschrieben.',     fr: 'Il a écrit une lettre.',        erklaerung: 'écrire → écrit (unregelmäßig)' },
      { typ: 'tippen', de: 'Wir sind am Strand geblieben.',       fr: 'Nous sommes restés à la plage.', erklaerung: 'rester → être; restés (m. Pl. Angleichung)' },
      { typ: 'tippen', de: 'Sie hat Fotos gemacht.',               fr: 'Elle a fait des photos.',       erklaerung: 'faire → fait; avoir: elle a fait' },
      { typ: 'tippen', de: 'Ich habe den Schlüssel verloren.',    fr: "J'ai perdu la clé.",            erklaerung: 'perdre → perdu; avoir: j\'ai perdu' },
      { typ: 'tippen', de: 'Er ist in den Zug eingestiegen.',     fr: 'Il est monté dans le train.',   erklaerung: 'monter → être; il est monté' },
      { typ: 'tippen', de: 'Wir haben die Stadt besichtigt.',     fr: 'Nous avons visité la ville.',   erklaerung: 'visiter → visité; avoir: nous avons visité' },
      { typ: 'tippen', de: 'Sie sind nach Hause gegangen.',       fr: 'Ils sont rentrés à la maison.', erklaerung: 'rentrer → être; rentrés (m. Pl.)' },
      { typ: 'tippen', de: 'Ich habe gut geschlafen.',             fr: "J'ai bien dormi.",              erklaerung: 'dormir → dormi; avoir: j\'ai bien dormi' },
      { typ: 'tippen', de: 'Sie ist heruntergefallen.',            fr: 'Elle est tombée.',              erklaerung: 'tomber → être; tombée (f. Angleichung)' },
      { typ: 'tippen', de: 'Er hat das Essen probiert.',           fr: 'Il a goûté le repas.',          erklaerung: 'goûter → goûté; avoir: il a goûté' },
      { typ: 'tippen', de: 'Wir haben viel gelacht.',              fr: 'Nous avons beaucoup ri.',       erklaerung: 'rire → ri (unregelmäßig); avoir' },
      { typ: 'tippen', de: 'Sie ist zum Markt gegangen.',          fr: 'Elle est allée au marché.',     erklaerung: 'aller → être; allée (f.); au = à + le' },
      { typ: 'tippen', de: 'Hast du den Film gesehen?',            fr: ['Tu as vu le film ?', 'Est-ce que tu as vu le film ?'], erklaerung: 'voir → vu; avoir: tu as vu' },
      { typ: 'tippen', de: 'Ich habe den Koffer gepackt.',        fr: "J'ai fait la valise.",          erklaerung: 'faire la valise = den Koffer packen' },
      { typ: 'tippen', de: 'Er ist spät gekommen.',                fr: 'Il est venu tard.',             erklaerung: 'venir → être; venu (unregelmäßig)' },
      { typ: 'tippen', de: 'Wir haben Eis gegessen.',              fr: 'Nous avons mangé une glace.',   erklaerung: 'manger → mangé; une glace = ein Eis' },
      { typ: 'tippen', de: 'Sie hat ihm geantwortet.',             fr: 'Elle lui a répondu.',           erklaerung: 'répondre → répondu; lui = indirektes Pronomen' },
      { typ: 'tippen', de: 'Ich bin heute Morgen aufgestanden.',   fr: 'Je me suis levé ce matin.',     erklaerung: 'se lever → reflexiv → être; je me suis levé' },
      { typ: 'luecke', satz: "J'ai ___ un bon restaurant. (trouver)", loesung: 'trouvé', erklaerung: '-er Verb → Partizip auf -é: trouvé' },
      { typ: 'luecke', satz: 'Elle est ___ à la gare. (aller)',      loesung: 'allée',  erklaerung: 'aller + être; elle → allée (f. Angleichung!)' },
      { typ: 'luecke', satz: 'Nous avons ___ le musée. (visiter)',    loesung: 'visité', erklaerung: 'visiter → visité' },
      { typ: 'luecke', satz: 'Il a ___ le train. (prendre)',         loesung: 'pris',   erklaerung: 'prendre → pris (unregelmäßig)' },
      { typ: 'luecke', satz: "J'ai ___ un café. (boire)",            loesung: 'bu',     erklaerung: 'boire → bu (unregelmäßig)' },
      { typ: 'luecke', satz: 'Ils sont ___ hier soir. (arriver)',    loesung: 'arrivés', erklaerung: 'arriver + être; ils → arrivés (m. Pl.)' },
      { typ: 'luecke', satz: 'Elle a ___ des photos. (faire)',       loesung: 'fait',   erklaerung: 'faire → fait (unregelmäßig)' },
      { typ: 'luecke', satz: 'Nous sommes ___ à la plage. (rester)', loesung: 'restés', erklaerung: 'rester + être; nous → restés' },
      { typ: 'richtigfalsch', frage: 'Bei être-Verben wird das Partizip an das Subjekt angeglichen: "Elle est arrivéE."', antwort: true,
        erklaerung: 'Genau — bei être: Partizip + e (f.) / s (Pl.) / es (f. Pl.).' },
      { typ: 'richtigfalsch', frage: '"Faire" bildet das passé composé mit être: "Je suis fait."', antwort: false,
        erklaerung: 'Nein — faire nimmt avoir: J\'ai fait. Nur Bewegungs-/Zustandsverben nehmen être.' },
      { typ: 'richtigfalsch', frage: '"Dormir" hat ein regelmäßiges Partizip: dormi.', antwort: true,
        erklaerung: 'Ja — dormir → dormi (wie finir → fini). J\'ai bien dormi.' },
      { typ: 'richtigfalsch', frage: 'Reflexive Verben bilden das passé composé immer mit être.', antwort: true,
        erklaerung: 'Ja — se lever → je me suis levé(e), se coucher → je me suis couché(e).' },
      { typ: 'richtigfalsch', frage: '"Voir → vu" und "boire → bu" sind unregelmäßige Partizipien.', antwort: true,
        erklaerung: 'Genau — diese muss man auswendig lernen.' },
      { typ: 'richtigfalsch', frage: 'Im passé composé steht das Adverb "beaucoup" nach dem Partizip: "J\'ai mangé beaucoup."', antwort: false,
        erklaerung: 'Kurze Adverbien (bien, mal, beaucoup) stehen ZWISCHEN Hilfsverb und Partizip: J\'ai beaucoup mangé.' },
      { typ: 'hoeren', fr: "J'ai mangé une pizza.",         de: 'Ich habe eine Pizza gegessen.', erklaerung: 'manger → mangé; avoir' },
      { typ: 'hoeren', fr: "Elle est arrivée à l'hôtel.",  de: 'Sie ist im Hotel angekommen.',   erklaerung: 'arriver → être; arrivée (f.)' },
      { typ: 'hoeren', fr: 'Il a pris le train.',           de: 'Er hat den Zug genommen.',       erklaerung: 'prendre → pris (unregelmäßig)' },
      { typ: 'hoeren', fr: "J'ai bien dormi.",              de: 'Ich habe gut geschlafen.',       erklaerung: 'dormir → dormi; bien vor Partizip' },
      { typ: 'hoeren', fr: 'Nous avons fait des photos.',   de: 'Wir haben Fotos gemacht.',       erklaerung: 'faire → fait; avoir' },
      { typ: 'hoeren', fr: 'Il est parti à 8 heures.',      de: 'Er ist um 8 Uhr abgefahren.',    erklaerung: 'partir → être; parti' }
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
      { typ: 'luecke', satz: 'Est-ce que ___ chambre est prête ?', loesung: 'notre', erklaerung: 'nous → notre (Sg. Nomen, m. oder f. gleich)' },
      // ── Erweiterte Übungen (50-Fragen-Pool) ──
      { typ: 'tippen', de: 'mein Gepäck (Pl.)',             fr: 'mes bagages',        erklaerung: 'mes = mein + Plural' },
      { typ: 'tippen', de: 'dein Schlüssel (m.)',            fr: 'ta clé',             erklaerung: 'clé = f. → ta (nicht ton!)' },
      { typ: 'tippen', de: 'seine Mutter (f.)',              fr: 'sa mère',            erklaerung: 'mère = f. → sa' },
      { typ: 'tippen', de: 'ihre Kinder (Pl.)',              fr: 'ses enfants',        erklaerung: 'ses = sein/ihr + Plural' },
      { typ: 'tippen', de: 'Ihr Hotel (m., vous)',           fr: 'votre hôtel',        erklaerung: 'votre = vous-Form; egal ob m./f.' },
      { typ: 'tippen', de: 'unser Tisch (m.)',               fr: 'notre table',        erklaerung: 'table = f. → notre (gleich für m./f.)' },
      { typ: 'tippen', de: 'ihre Taschen (Pl., ils)',        fr: 'leurs sacs',         erklaerung: 'ils → leur(s); Plural → leurs' },
      { typ: 'tippen', de: 'meine Adresse (f., Vokal)',      fr: 'mon adresse',        erklaerung: 'adresse (f.) beginnt mit Vokal → mon statt ma' },
      { typ: 'tippen', de: 'deine Schwester (f.)',           fr: 'ta sœur',            erklaerung: 'sœur = f. → ta' },
      { typ: 'tippen', de: 'sein Auto (m.)',                 fr: 'sa voiture',         erklaerung: 'voiture = f. → sa' },
      { typ: 'tippen', de: 'Wo ist mein Koffer?',            fr: 'Où est ma valise ?', erklaerung: 'valise = f. → ma' },
      { typ: 'tippen', de: 'Hier ist Ihr Schlüssel.',        fr: 'Voici votre clé.',   erklaerung: 'votre = vous-Form (höflich)' },
      { typ: 'tippen', de: 'Sein Bruder arbeitet im Hotel.', fr: 'Son frère travaille à l\'hôtel.', erklaerung: 'frère = m. → son' },
      { typ: 'tippen', de: 'unsere Kinder spielen am Strand.', fr: 'Nos enfants jouent à la plage.', erklaerung: 'nos = wir + Plural' },
      { typ: 'tippen', de: 'Ihre Rechnung, bitte.',          fr: "Votre addition, s'il vous plaît.", erklaerung: 'votre = vous-Form' },
      { typ: 'tippen', de: 'mein Handy (m.)',                fr: 'mon téléphone',      erklaerung: 'téléphone = m. → mon' },
      { typ: 'tippen', de: 'deine Eltern (Pl.)',             fr: 'tes parents',        erklaerung: 'tes = tu + Plural' },
      { typ: 'tippen', de: 'ihre Tasche (f., elle)',         fr: 'son sac',            erklaerung: 'sac = m. → son (obwohl "ihre"!)' },
      { typ: 'tippen', de: 'Wo sind unsere Plätze?',         fr: 'Où sont nos places ?', erklaerung: 'nos = nous + Plural' },
      { typ: 'tippen', de: 'Ihr Name, bitte? (vous)',        fr: "Votre nom, s'il vous plaît ?", erklaerung: 'votre = vous-Form; nom = m.' },
      { typ: 'tippen', de: 'seine Frau (f.)',                fr: 'sa femme',           erklaerung: 'femme = f. → sa' },
      { typ: 'tippen', de: 'meine Schuhe (Pl.)',             fr: 'mes chaussures',     erklaerung: 'mes = mein + Plural' },
      { typ: 'tippen', de: 'ihre Idee (f., elle)',           fr: 'son idée',           erklaerung: 'idée (f.) beginnt mit Vokal → son statt sa!' },
      { typ: 'tippen', de: 'Das ist sein Problem.',          fr: 'C\'est son problème.', erklaerung: 'problème = m. → son' },
      { typ: 'tippen', de: 'unser Urlaub (Pl.)',             fr: 'nos vacances',       erklaerung: 'vacances = immer Plural → nos' },
      { typ: 'tippen', de: 'ihr Haus (ils/elles)',           fr: 'leur maison',        erklaerung: 'leur = ils/elles + Sg. Nomen' },
      { typ: 'luecke', satz: '___ valise est dans la chambre. (ich)', loesung: 'Ma', erklaerung: 'valise = f. → ma' },
      { typ: 'luecke', satz: 'Où est ___ passeport ? (du)',  loesung: 'ton', erklaerung: 'passeport = m. → ton' },
      { typ: 'luecke', satz: '___ enfants jouent dehors. (wir)', loesung: 'Nos', erklaerung: 'nos = nous + Plural' },
      { typ: 'luecke', satz: 'Elle cherche ___ clé. (sie, elle)', loesung: 'sa', erklaerung: 'clé = f. → sa' },
      { typ: 'luecke', satz: '___ réservation est à quel nom ? (Sie)', loesung: 'Votre', erklaerung: 'votre = vous-Form' },
      { typ: 'luecke', satz: 'Il a perdu ___ billet. (er)', loesung: 'son', erklaerung: 'billet = m. → son' },
      { typ: 'luecke', satz: '___ amie est française. (ich)', loesung: 'Mon', erklaerung: 'amie (f.) + Vokal → mon statt ma!' },
      { typ: 'luecke', satz: '___ hôtel est très bien. (wir)', loesung: 'Notre', erklaerung: 'notre = nous + Sg. (m./f. gleich)' },
      { typ: 'richtigfalsch', frage: '"Son" kann sowohl "sein" als auch "ihr" bedeuten.', antwort: true,
        erklaerung: 'Ja — son/sa/ses = sein ODER ihr. Der Kontext entscheidet!' },
      { typ: 'richtigfalsch', frage: '"Notre" und "votre" ändern sich je nach Geschlecht des Nomens.', antwort: false,
        erklaerung: 'Nein — notre/votre sind gleich für m. und f.: notre chambre (f.), notre hôtel (m.).' },
      { typ: 'richtigfalsch', frage: '"Leur" wird zu "leurs" im Plural: "leurs enfants".', antwort: true,
        erklaerung: 'Ja — leur (Sg. Nomen) → leurs (Pl. Nomen): leur maison, leurs enfants.' },
      { typ: 'richtigfalsch', frage: 'Vor einem femininen Nomen mit Vokal steht "ma": "ma amie".', antwort: false,
        erklaerung: 'Nein — vor Vokal steht mon (auch bei f.): mon amie, mon adresse.' },
      { typ: 'richtigfalsch', frage: '"Mes" wird für alle Pluralformen verwendet, egal ob männlich oder weiblich.', antwort: true,
        erklaerung: 'Genau — mes livres (m.), mes chaussures (f.) — Plural hat keine m./f. Unterscheidung.' },
      { typ: 'richtigfalsch', frage: '"Sa voiture" bedeutet "sein Auto" — weil voiture weiblich ist, steht "sa" (nicht "son").', antwort: true,
        erklaerung: 'Ja — der Possessivbegleiter richtet sich nach dem Nomen: voiture (f.) → sa.' },
      { typ: 'hoeren', fr: 'mon passeport',           de: 'mein Reisepass',          erklaerung: 'passeport = m. → mon' },
      { typ: 'hoeren', fr: 'votre réservation',       de: 'Ihre Reservierung',       erklaerung: 'votre = vous-Form (höflich)' },
      { typ: 'hoeren', fr: 'nos valises',              de: 'unsere Koffer',           erklaerung: 'nos = nous + Plural' },
      { typ: 'hoeren', fr: 'son billet',               de: 'sein/ihr Ticket',         erklaerung: 'billet = m. → son' },
      { typ: 'hoeren', fr: 'ma chambre',               de: 'mein Zimmer',             erklaerung: 'chambre = f. → ma' },
      { typ: 'hoeren', fr: 'leurs enfants',            de: 'ihre Kinder (Pl.)',       erklaerung: 'leur → leurs vor Pl. Nomen' }
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
      { typ: 'tippen', de: 'Können Sie mir helfen?',               fr: ["Vous pouvez m'aider ?", "Pouvez-vous m'aider ?", "Est-ce que vous pouvez m'aider ?"], erklaerung: 'pouvoir: vous → pouvez + Infinitiv aider' },
      { typ: 'tippen', de: 'Ich möchte einen Tisch reservieren.',  fr: 'Je veux réserver une table.', erklaerung: 'vouloir: je → veux + Infinitiv' },
      { typ: 'tippen', de: 'Er nimmt das Menu.',                   fr: 'Il prend le menu.',            erklaerung: 'prendre: il → prend' },
      { typ: 'tippen', de: 'Wir machen eine Pause.',               fr: 'Nous faisons une pause.',      erklaerung: 'faire: nous → faisons' },
      { typ: 'richtigfalsch', frage: '"Vous faites" ist die korrekte vous-Form von "faire".', antwort: true,
        erklaerung: 'Ja — faire ist unregelmäßig: vous faites (nicht "vous faisez").' },
      { typ: 'richtigfalsch', frage: '"Ils vont" kommt von "venir".', antwort: false,
        erklaerung: '"Ils vont" kommt von "aller". "Venir" wäre: ils viennent.' },
      { typ: 'luecke', satz: 'Tu ___ d\'où ? (venir)',             loesung: 'viens',  erklaerung: 'venir: tu → viens' },
      { typ: 'luecke', satz: 'Nous ___ une promenade. (faire)',    loesung: 'faisons', erklaerung: 'faire: nous → faisons' },
      // ── Erweiterte Übungen (50-Fragen-Pool) ──
      { typ: 'tippen', de: 'Wir gehen ins Restaurant.',          fr: 'Nous allons au restaurant.',     erklaerung: 'aller: nous → allons; au = à + le' },
      { typ: 'tippen', de: 'Ich kann nicht schwimmen.',           fr: 'Je ne peux pas nager.',          erklaerung: 'pouvoir: je → peux + ne…pas + Infinitiv' },
      { typ: 'tippen', de: 'Du willst Eis.',                      fr: 'Tu veux une glace.',             erklaerung: 'vouloir: tu → veux' },
      { typ: 'tippen', de: 'Sie machen einen Spaziergang.',      fr: 'Ils font une promenade.',        erklaerung: 'faire: ils → font' },
      { typ: 'tippen', de: 'Woher kommen Sie?',                  fr: ["D'où venez-vous ?", "Vous venez d'où ?", "D'où est-ce que vous venez ?"], erklaerung: 'venir: vous → venez; d\'où = woher' },
      { typ: 'tippen', de: 'Er geht zur Arbeit.',                 fr: 'Il va au travail.',              erklaerung: 'aller: il → va; au = à + le' },
      { typ: 'tippen', de: 'Wir können helfen.',                  fr: 'Nous pouvons aider.',            erklaerung: 'pouvoir: nous → pouvons + Infinitiv' },
      { typ: 'tippen', de: 'Was machen Sie heute?',               fr: ["Qu'est-ce que vous faites aujourd'hui ?", "Vous faites quoi aujourd'hui ?"], erklaerung: 'faire: vous → faites' },
      { typ: 'tippen', de: 'Sie kommen aus Paris.',               fr: 'Ils viennent de Paris.',         erklaerung: 'venir: ils → viennent; de = aus' },
      { typ: 'tippen', de: 'Ich nehme den Bus.',                  fr: 'Je prends le bus.',              erklaerung: 'prendre: je → prends' },
      { typ: 'tippen', de: 'Er will bezahlen.',                   fr: 'Il veut payer.',                 erklaerung: 'vouloir: il → veut + Infinitiv' },
      { typ: 'tippen', de: 'Wir fahren nach Nizza.',              fr: 'Nous allons à Nice.',            erklaerung: 'aller: nous → allons; à + Stadtname' },
      { typ: 'tippen', de: 'Kannst du Französisch?',              fr: ['Tu peux parler français ?', 'Est-ce que tu peux parler français ?'], erklaerung: 'pouvoir: tu → peux + Infinitiv' },
      { typ: 'tippen', de: 'Sie macht das Essen.',                fr: 'Elle fait le repas.',            erklaerung: 'faire: elle → fait' },
      { typ: 'tippen', de: 'Er kommt morgen.',                    fr: 'Il vient demain.',               erklaerung: 'venir: il → vient' },
      { typ: 'tippen', de: 'Wir wollen ein Zimmer.',              fr: 'Nous voulons une chambre.',      erklaerung: 'vouloir: nous → voulons' },
      { typ: 'tippen', de: 'Nimm den zweiten rechts.',            fr: 'Prenez la deuxième à droite.',   erklaerung: 'prendre: vous-Imperativ → prenez' },
      { typ: 'tippen', de: 'Sie gehen zum Markt.',                fr: 'Ils vont au marché.',            erklaerung: 'aller: ils → vont; au = à + le' },
      { typ: 'tippen', de: 'Ich kann es nicht finden.',            fr: 'Je ne peux pas le trouver.',     erklaerung: 'pouvoir + ne…pas; le = es (Pronomen vor Infinitiv)' },
      { typ: 'tippen', de: 'Er macht Sport.',                     fr: 'Il fait du sport.',              erklaerung: 'faire du sport = Sport treiben' },
      { typ: 'tippen', de: 'Sie nehmen den Zug.',                 fr: 'Ils prennent le train.',         erklaerung: 'prendre: ils → prennent' },
      { typ: 'tippen', de: 'Ich will nach Frankreich fahren.',    fr: 'Je veux aller en France.',       erklaerung: 'vouloir: je → veux + Infinitiv aller' },
      { typ: 'tippen', de: 'Wir kommen um 10 Uhr.',              fr: 'Nous venons à 10 heures.',       erklaerung: 'venir: nous → venons' },
      { typ: 'tippen', de: 'Wie geht es Ihnen?',                  fr: ['Comment allez-vous ?', 'Vous allez comment ?'], erklaerung: 'aller: vous → allez (Befinden!)' },
      { typ: 'tippen', de: 'Du machst zu viel.',                  fr: 'Tu fais trop.',                  erklaerung: 'faire: tu → fais; trop = zu viel' },
      { typ: 'luecke', satz: 'Ils ___ au marché. (aller)',         loesung: 'vont',      erklaerung: 'aller: ils → vont' },
      { typ: 'luecke', satz: 'Je ___ un café. (prendre)',          loesung: 'prends',    erklaerung: 'prendre: je → prends' },
      { typ: 'luecke', satz: 'Vous ___ quoi ce soir ? (faire)',    loesung: 'faites',    erklaerung: 'faire: vous → faites (nicht "faisez"!)' },
      { typ: 'luecke', satz: 'Elle ___ de Lyon. (venir)',          loesung: 'vient',     erklaerung: 'venir: elle → vient' },
      { typ: 'luecke', satz: 'Tu ___ m\'aider ? (pouvoir)',        loesung: 'peux',      erklaerung: 'pouvoir: tu → peux' },
      { typ: 'luecke', satz: 'Il ___ du sport. (faire)',           loesung: 'fait',      erklaerung: 'faire: il → fait' },
      { typ: 'luecke', satz: 'Nous ___ une chambre. (vouloir)',    loesung: 'voulons',   erklaerung: 'vouloir: nous → voulons' },
      { typ: 'luecke', satz: 'Ils ___ le train. (prendre)',        loesung: 'prennent',  erklaerung: 'prendre: ils → prennent' },
      { typ: 'richtigfalsch', frage: '"Ils prennent" ist die korrekte ils-Form von "prendre".', antwort: true,
        erklaerung: 'Ja — prendre: ils prennent (mit doppeltem n).' },
      { typ: 'richtigfalsch', frage: '"Pouvoir" und "vouloir" werden gleich konjugiert.', antwort: false,
        erklaerung: 'Ähnlich, aber nicht gleich: je peux/je veux, nous pouvons/nous voulons, ils peuvent/ils veulent.' },
      { typ: 'richtigfalsch', frage: '"Faire du sport" bedeutet "Sport treiben".', antwort: true,
        erklaerung: 'Genau — faire du/de la + Aktivität ist das Standard-Muster für Aktivitäten.' },
      { typ: 'richtigfalsch', frage: '"Nous allons" kommt von "aller", nicht von "venir".', antwort: true,
        erklaerung: 'Ja — nous allons = wir gehen (aller). Venir wäre: nous venons.' },
      { typ: 'hoeren', fr: 'Je vais à la plage.',          de: 'Ich gehe zum Strand.',        erklaerung: 'aller: je → vais' },
      { typ: 'hoeren', fr: "Qu'est-ce que tu fais ?",     de: 'Was machst du?',               erklaerung: 'faire: tu → fais' },
      { typ: 'hoeren', fr: "Vous pouvez m'aider ?",       de: 'Können Sie mir helfen?',       erklaerung: 'pouvoir: vous → pouvez' },
      { typ: 'hoeren', fr: 'Il prend le menu.',             de: 'Er nimmt das Menü.',           erklaerung: 'prendre: il → prend' },
      { typ: 'hoeren', fr: 'Elle vient avec nous.',         de: 'Sie kommt mit uns.',           erklaerung: 'venir: elle → vient' },
      { typ: 'hoeren', fr: 'Ils vont au marché.',           de: 'Sie gehen zum Markt.',         erklaerung: 'aller: ils → vont' }
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
      { typ: 'luecke', satz: 'Nous ___ manger au restaurant ce soir.',   loesung: 'allons', erklaerung: 'nous → allons (1. P. Pl. von aller)' },
      // ── Erweiterte Übungen (50-Fragen-Pool) ──
      { typ: 'tippen', de: 'Ich werde das bezahlen.',            fr: 'Je vais payer.',                    erklaerung: 'je vais + Infinitiv payer' },
      { typ: 'tippen', de: 'Du wirst Spaß haben.',               fr: 'Tu vas t\'amuser.',                 erklaerung: 'tu vas + reflexives Infinitiv: t\'amuser' },
      { typ: 'tippen', de: 'Er wird den Arzt anrufen.',          fr: 'Il va appeler le médecin.',         erklaerung: 'il va + Infinitiv appeler' },
      { typ: 'tippen', de: 'Wir werden am Strand spazieren.',    fr: 'Nous allons nous promener à la plage.', erklaerung: 'nous allons + reflexiv: nous promener' },
      { typ: 'tippen', de: 'Sie werden Fotos machen.',           fr: 'Ils vont faire des photos.',        erklaerung: 'ils vont + Infinitiv faire' },
      { typ: 'tippen', de: 'Ich werde ein Eis kaufen.',          fr: 'Je vais acheter une glace.',        erklaerung: 'je vais + Infinitiv acheter' },
      { typ: 'tippen', de: 'Sie wird früh aufstehen.',           fr: 'Elle va se lever tôt.',             erklaerung: 'elle va + reflexiv: se lever' },
      { typ: 'tippen', de: 'Es wird regnen.',                    fr: 'Il va pleuvoir.',                   erklaerung: 'il va + Infinitiv pleuvoir (unpersönlich)' },
      { typ: 'tippen', de: 'Wir werden den Zug nehmen.',         fr: 'Nous allons prendre le train.',     erklaerung: 'nous allons + Infinitiv prendre' },
      { typ: 'tippen', de: 'Wirst du kommen?',                   fr: ['Tu vas venir ?', 'Est-ce que tu vas venir ?'], erklaerung: 'tu vas + Infinitiv venir' },
      { typ: 'tippen', de: 'Er wird nicht arbeiten.',             fr: 'Il ne va pas travailler.',          erklaerung: 'Verneinung: ne + va + pas + Infinitiv' },
      { typ: 'tippen', de: 'Ich werde einen Salat nehmen.',      fr: 'Je vais prendre une salade.',       erklaerung: 'je vais + prendre = Restaurant-Standard' },
      { typ: 'tippen', de: 'Sie werden nach Lyon fahren.',       fr: 'Ils vont aller à Lyon.',            erklaerung: 'ils vont + Infinitiv aller' },
      { typ: 'tippen', de: 'Wir werden nicht zu spät kommen.',   fr: 'Nous ne allons pas arriver en retard.', erklaerung: 'Verneinung: ne + allons + pas; en retard = zu spät' },
      { typ: 'tippen', de: 'Er wird die Rechnung bezahlen.',     fr: "Il va payer l'addition.",            erklaerung: 'il va + Infinitiv payer; addition = Rechnung' },
      { typ: 'tippen', de: 'Du wirst es sehen.',                 fr: 'Tu vas voir.',                      erklaerung: 'tu vas + Infinitiv voir' },
      { typ: 'tippen', de: 'Ich werde mich ausruhen.',           fr: 'Je vais me reposer.',               erklaerung: 'je vais + reflexiv: me reposer' },
      { typ: 'tippen', de: 'Sie wird Kuchen backen.',            fr: 'Elle va faire un gâteau.',          erklaerung: 'elle va + faire = machen/backen' },
      { typ: 'tippen', de: 'Wir werden eine Bootsfahrt machen.', fr: 'Nous allons faire une promenade en bateau.', erklaerung: 'faire une promenade en bateau = Bootsfahrt' },
      { typ: 'tippen', de: 'Werden Sie reservieren?',            fr: ['Vous allez réserver ?', 'Est-ce que vous allez réserver ?', 'Allez-vous réserver ?'], erklaerung: 'vous allez + Infinitiv réserver' },
      { typ: 'tippen', de: 'Er wird heute Abend kochen.',        fr: 'Il va cuisiner ce soir.',           erklaerung: 'il va + cuisiner; ce soir = heute Abend' },
      { typ: 'tippen', de: 'Ich werde ein Taxi rufen.',          fr: 'Je vais appeler un taxi.',          erklaerung: 'je vais + appeler' },
      { typ: 'tippen', de: 'Wir werden uns treffen.',             fr: 'Nous allons nous retrouver.',       erklaerung: 'nous allons + reflexiv: nous retrouver' },
      { typ: 'tippen', de: 'Sie wird den Koffer packen.',        fr: 'Elle va faire sa valise.',          erklaerung: 'faire sa valise = den Koffer packen' },
      { typ: 'luecke', satz: 'Tu ___ acheter des souvenirs.',     loesung: 'vas',    erklaerung: 'tu → vas (2. P. Sg. von aller)' },
      { typ: 'luecke', satz: 'Ils ___ visiter le château.',       loesung: 'vont',   erklaerung: 'ils → vont (3. P. Pl. von aller)' },
      { typ: 'luecke', satz: 'Elle ___ se reposer.',              loesung: 'va',     erklaerung: 'elle → va (3. P. Sg. von aller)' },
      { typ: 'luecke', satz: 'Vous ___ prendre le train ?',       loesung: 'allez',  erklaerung: 'vous → allez (2. P. Pl. von aller)' },
      { typ: 'luecke', satz: 'Je ___ commander un dessert.',      loesung: 'vais',   erklaerung: 'je → vais (1. P. Sg. von aller)' },
      { typ: 'luecke', satz: 'Nous ne ___ pas nager.',            loesung: 'allons', erklaerung: 'Verneinung: ne + allons + pas + Infinitiv' },
      { typ: 'luecke', satz: 'Il ___ pleuvoir demain.',           loesung: 'va',     erklaerung: 'il → va (unpersönlich: es wird regnen)' },
      { typ: 'luecke', satz: 'Tu ___ te lever tôt ?',             loesung: 'vas',    erklaerung: 'tu → vas + reflexiv: te lever' },
      { typ: 'richtigfalsch', frage: 'Bei reflexiven Verben im futur proche steht das Reflexivpronomen vor dem Infinitiv: "Je vais ME lever."', antwort: true,
        erklaerung: 'Genau — je vais me lever, tu vas te reposer, elle va se coucher.' },
      { typ: 'richtigfalsch', frage: 'In der Verneinung des futur proche stehen ne…pas um den Infinitiv: "Je vais ne pas manger."', antwort: false,
        erklaerung: 'Ne…pas umschließen das konjugierte Verb (aller): Je NE vais PAS manger.' },
      { typ: 'richtigfalsch', frage: 'Das futur proche wird im Alltag viel häufiger benutzt als das futur simple.', antwort: true,
        erklaerung: 'Ja — im gesprochenen Französisch dominiert das futur proche (je vais + Inf.).' },
      { typ: 'richtigfalsch', frage: '"Il va pleuvoir" ist ein unpersönlicher Ausdruck für "Es wird regnen".', antwort: true,
        erklaerung: 'Genau — wie bei "il pleut" bleibt es unpersönlich: il va pleuvoir.' },
      { typ: 'hoeren', fr: 'Je vais commander une pizza.',    de: 'Ich werde eine Pizza bestellen.', erklaerung: 'je vais + commander' },
      { typ: 'hoeren', fr: 'Il va pleuvoir.',                 de: 'Es wird regnen.',                  erklaerung: 'il va + pleuvoir (unpersönlich)' },
      { typ: 'hoeren', fr: 'Nous allons prendre le train.',   de: 'Wir werden den Zug nehmen.',       erklaerung: 'nous allons + prendre' },
      { typ: 'hoeren', fr: 'Elle va réserver une chambre.',   de: 'Sie wird ein Zimmer reservieren.', erklaerung: 'elle va + réserver' },
      { typ: 'hoeren', fr: 'Tu vas voir.',                     de: 'Du wirst es sehen.',               erklaerung: 'tu vas + voir' },
      { typ: 'hoeren', fr: 'Je ne vais pas nager.',            de: 'Ich werde nicht schwimmen.',        erklaerung: 'Verneinung: ne + vais + pas' }
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
      { typ: 'luecke', satz: "Il n'y a pas ___ pain.",                    loesung: 'de', erklaerung: 'Nach Verneinung: du → de' },
      // ── Erweiterte Übungen (50-Fragen-Pool) ──
      { typ: 'tippen', de: 'Ich hätte gern Brot.',           fr: 'Je voudrais du pain.',           erklaerung: 'pain (m.) → du pain' },
      { typ: 'tippen', de: 'Ich möchte Butter.',              fr: 'Je voudrais du beurre.',         erklaerung: 'beurre (m.) → du beurre' },
      { typ: 'tippen', de: 'Gibt es Milch?',                  fr: ["Il y a du lait ?", "Est-ce qu'il y a du lait ?"], erklaerung: 'lait (m.) → du lait' },
      { typ: 'tippen', de: 'Ich trinke Tee.',                 fr: 'Je bois du thé.',                erklaerung: 'thé (m.) → du thé' },
      { typ: 'tippen', de: 'Er isst Schokolade.',             fr: 'Il mange du chocolat.',          erklaerung: 'chocolat (m.) → du chocolat' },
      { typ: 'tippen', de: 'Sie macht Salat.',                 fr: 'Elle fait de la salade.',        erklaerung: 'salade (f.) → de la salade' },
      { typ: 'tippen', de: 'Wir trinken Orangensaft.',        fr: "Nous buvons du jus d'orange.",   erklaerung: 'jus (m.) → du jus' },
      { typ: 'tippen', de: 'Ich habe kein Geld.',              fr: "Je n'ai pas d'argent.",          erklaerung: 'Verneinung: de l\'argent → pas d\'argent' },
      { typ: 'tippen', de: 'Es gibt keine Milch mehr.',       fr: "Il n'y a plus de lait.",         erklaerung: 'Verneinung: du lait → plus de lait' },
      { typ: 'tippen', de: 'Möchten Sie Kaffee?',             fr: ['Vous voulez du café ?', 'Est-ce que vous voulez du café ?'], erklaerung: 'café (m.) → du café' },
      { typ: 'tippen', de: 'Ich esse Gemüse.',                fr: 'Je mange des légumes.',          erklaerung: 'légumes (Pl.) → des légumes' },
      { typ: 'tippen', de: 'Er kauft Äpfel.',                 fr: 'Il achète des pommes.',          erklaerung: 'pommes (Pl.) → des pommes' },
      { typ: 'tippen', de: 'Ich nehme etwas Reis.',           fr: 'Je prends du riz.',              erklaerung: 'riz (m.) → du riz' },
      { typ: 'tippen', de: 'Sie trinkt Limonade.',            fr: 'Elle boit de la limonade.',      erklaerung: 'limonade (f.) → de la limonade' },
      { typ: 'tippen', de: 'Wir brauchen Mehl.',              fr: 'Nous avons besoin de farine.',   erklaerung: 'Nach "besoin de" kein Teilungsartikel!' },
      { typ: 'tippen', de: 'Ich hätte gern Eis.',             fr: 'Je voudrais de la glace.',       erklaerung: 'glace (f.) → de la glace' },
      { typ: 'tippen', de: 'Er isst keinen Käse.',            fr: 'Il ne mange pas de fromage.',    erklaerung: 'Verneinung: du → de' },
      { typ: 'tippen', de: 'Sie kauft Erdbeeren.',            fr: 'Elle achète des fraises.',       erklaerung: 'fraises (Pl.) → des fraises' },
      { typ: 'tippen', de: 'Möchtest du Suppe?',              fr: ['Tu veux de la soupe ?', 'Est-ce que tu veux de la soupe ?'], erklaerung: 'soupe (f.) → de la soupe' },
      { typ: 'tippen', de: 'Ich trinke keinen Alkohol.',      fr: "Je ne bois pas d'alcool.",       erklaerung: 'Verneinung + Vokal: de → d\'' },
      { typ: 'tippen', de: 'Wir essen Fisch.',                fr: 'Nous mangeons du poisson.',      erklaerung: 'poisson (m.) → du poisson' },
      { typ: 'tippen', de: 'Ich brauche Öl.',                  fr: "J'ai besoin d'huile.",           erklaerung: 'Nach "besoin de" + Vokal → d\'; kein Teilungsartikel' },
      { typ: 'tippen', de: 'Sie haben keine Eier mehr.',      fr: "Ils n'ont plus d'œufs.",         erklaerung: 'Verneinung: des → de/d\' (Vokal)' },
      { typ: 'tippen', de: 'Ein Kilo Tomaten, bitte.',        fr: "Un kilo de tomates, s'il vous plaît.", erklaerung: 'Nach Mengenangabe: de (kein Teilungsartikel!)' },
      { typ: 'tippen', de: 'Ich hätte gern eine Flasche Wein.', fr: 'Je voudrais une bouteille de vin.', erklaerung: 'Nach Mengenangabe (bouteille): de vin' },
      { typ: 'luecke', satz: 'Je bois ___ eau.', loesung: "de l'", erklaerung: 'eau beginnt mit Vokal → de l\'' },
      { typ: 'luecke', satz: 'Elle mange ___ salade.', loesung: 'de la', erklaerung: 'salade (f.) → de la' },
      { typ: 'luecke', satz: 'Il achète ___ pommes.', loesung: 'des', erklaerung: 'pommes (Pl.) → des' },
      { typ: 'luecke', satz: "Je ne bois pas ___ alcool.", loesung: "d'", erklaerung: 'Verneinung + Vokal: de → d\'' },
      { typ: 'luecke', satz: 'Nous mangeons ___ poisson.', loesung: 'du', erklaerung: 'poisson (m.) → du' },
      { typ: 'luecke', satz: 'Un kilo ___ tomates.', loesung: 'de', erklaerung: 'Nach Mengenangabe: immer "de" (kein Teilungsartikel)' },
      { typ: 'luecke', satz: "Il n'y a plus ___ lait.", loesung: 'de', erklaerung: 'Verneinung: du → de' },
      { typ: 'luecke', satz: 'Je voudrais ___ thé.', loesung: 'du', erklaerung: 'thé (m.) → du' },
      { typ: 'richtigfalsch', frage: 'Nach Mengenangaben (un kilo, une bouteille, beaucoup) steht nur "de", nicht der Teilungsartikel.', antwort: true,
        erklaerung: 'Genau — un kilo de tomates, beaucoup de vin, une bouteille de lait.' },
      { typ: 'richtigfalsch', frage: '"De l\'" steht vor allen Nomen, die mit Vokal beginnen — egal ob m. oder f.', antwort: true,
        erklaerung: 'Ja — de l\'eau (f.), de l\'argent (m.) — vor Vokal gibt es keine m./f. Unterscheidung.' },
      { typ: 'richtigfalsch', frage: 'Nach "avoir besoin de" steht ein Teilungsartikel: "J\'ai besoin du lait."', antwort: false,
        erklaerung: 'Nach "besoin de" steht nur "de": J\'ai besoin de lait (nicht "du lait").' },
      { typ: 'richtigfalsch', frage: '"Des" ist der Teilungsartikel für Pluralnomen: "des légumes" = Gemüse.', antwort: true,
        erklaerung: 'Genau — des wird für unzählbare Pluralmengen verwendet.' },
      { typ: 'hoeren', fr: 'Je voudrais du vin.',            de: 'Ich hätte gern Wein.',          erklaerung: 'vin (m.) → du' },
      { typ: 'hoeren', fr: "Je bois de l'eau.",              de: 'Ich trinke Wasser.',             erklaerung: 'eau (f.) + Vokal → de l\'' },
      { typ: 'hoeren', fr: 'Il ne mange pas de viande.',     de: 'Er isst kein Fleisch.',          erklaerung: 'Verneinung: de la → de' },
      { typ: 'hoeren', fr: "Il y a de la soupe.",            de: 'Es gibt Suppe.',                 erklaerung: 'soupe (f.) → de la' },
      { typ: 'hoeren', fr: 'Nous mangeons des fruits.',      de: 'Wir essen Obst.',                erklaerung: 'fruits (Pl.) → des' },
      { typ: 'hoeren', fr: 'Je voudrais du fromage.',        de: 'Ich hätte gern Käse.',           erklaerung: 'fromage (m.) → du' }
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
      { typ: 'luecke', satz: '___ du café ! (tu, trinken — boire: bois)', loesung: 'Bois', erklaerung: 'boire ist unregelmäßig: tu bois → Bois !' },
      // ── Erweiterte Übungen (50-Fragen-Pool) ──
      { typ: 'tippen', de: 'Nehmen Sie die erste links!',       fr: 'Prenez la première à gauche !',  erklaerung: 'prendre: vous → prenez' },
      { typ: 'tippen', de: 'Warte hier! (du-Form)',             fr: 'Attends ici !',                   erklaerung: 'attendre (-re): tu → attends (mit -s!)' },
      { typ: 'tippen', de: 'Essen wir im Restaurant!',          fr: 'Mangeons au restaurant !',        erklaerung: 'manger: nous → mangeons' },
      { typ: 'tippen', de: 'Hören Sie gut zu!',                 fr: 'Écoutez bien !',                  erklaerung: 'écouter: vous → écoutez' },
      { typ: 'tippen', de: 'Geh! (du-Form)',                    fr: 'Va !',                             erklaerung: 'aller: tu → va (unregelmäßig, kein -s)' },
      { typ: 'tippen', de: 'Seien Sie vorsichtig!',             fr: 'Soyez prudent !',                 erklaerung: 'être: vous → soyez (unregelmäßig)' },
      { typ: 'tippen', de: 'Schau! (du-Form)',                  fr: 'Regarde !',                        erklaerung: 'regarder (-er): tu → regarde (ohne -s)' },
      { typ: 'tippen', de: 'Reservieren Sie einen Tisch!',      fr: 'Réservez une table !',            erklaerung: 'réserver: vous → réservez' },
      { typ: 'tippen', de: 'Lass uns tanzen!',                  fr: 'Dansons !',                        erklaerung: 'danser: nous → dansons' },
      { typ: 'tippen', de: 'Sag die Wahrheit! (du-Form)',       fr: 'Dis la vérité !',                 erklaerung: 'dire: tu → dis (unregelmäßig)' },
      { typ: 'tippen', de: 'Kommen Sie herein!',                fr: 'Entrez !',                         erklaerung: 'entrer (-er): vous → entrez' },
      { typ: 'tippen', de: 'Sei geduldig! (du-Form)',           fr: 'Sois patient !',                  erklaerung: 'être: tu → sois (unregelmäßig)' },
      { typ: 'tippen', de: 'Lesen Sie die Karte!',              fr: 'Lisez le menu !',                 erklaerung: 'lire: vous → lisez' },
      { typ: 'tippen', de: 'Hab keine Angst! (du-Form)',        fr: "N'aie pas peur !",                erklaerung: 'avoir: tu → aie (unregelmäßig); Verneinung n\'…pas' },
      { typ: 'tippen', de: 'Bezahlen Sie an der Kasse!',        fr: 'Payez à la caisse !',             erklaerung: 'payer: vous → payez' },
      { typ: 'tippen', de: 'Dreh dich um! (du-Form)',           fr: 'Retourne-toi !',                  erklaerung: 'se retourner: tu → retourne + -toi (reflexiv nach Verb)' },
      { typ: 'tippen', de: 'Setzen wir uns!',                   fr: 'Asseyons-nous !',                 erklaerung: 's\'asseoir: nous → asseyons + -nous' },
      { typ: 'tippen', de: 'Gehen Sie nicht dorthin!',          fr: "N'allez pas là-bas !",            erklaerung: 'Verneinung: n\' + allez + pas; là-bas = dorthin' },
      { typ: 'tippen', de: 'Ruf mich an! (du-Form)',            fr: 'Appelle-moi !',                   erklaerung: 'appeler (-er): tu → appelle (ohne -s) + -moi' },
      { typ: 'tippen', de: 'Vergessen Sie Ihren Pass nicht!',   fr: "N'oubliez pas votre passeport !", erklaerung: 'oublier: vous → n\'oubliez pas' },
      { typ: 'tippen', de: 'Komm schnell! (du-Form)',           fr: 'Viens vite !',                    erklaerung: 'venir: tu → viens (behält -s bei -ir Verben)' },
      { typ: 'tippen', de: 'Machen Sie sich keine Sorgen!',     fr: 'Ne vous inquiétez pas !',         erklaerung: 'reflexiv + Verneinung: ne + vous + inquiétez + pas' },
      { typ: 'tippen', de: 'Probier das! (du-Form)',            fr: 'Goûte ça !',                      erklaerung: 'goûter (-er): tu → goûte (ohne -s)' },
      { typ: 'tippen', de: 'Gehen Sie geradeaus bis zur Ampel!', fr: "Continuez tout droit jusqu'au feu !", erklaerung: 'continuer: vous → continuez; feu = Ampel' },
      { typ: 'tippen', de: 'Lass uns gehen!',                   fr: 'Allons-y !',                      erklaerung: 'aller: nous → allons + y (= dahin)' },
      { typ: 'luecke', satz: '___ la première rue à droite ! (Sie, nehmen)', loesung: 'Prenez', erklaerung: 'prendre: vous → prenez' },
      { typ: 'luecke', satz: '___ ici ! (du, warten — attendre)', loesung: 'Attends', erklaerung: 'attendre (-re): tu → attends (mit -s!)' },
      { typ: 'luecke', satz: '___ prudent ! (du, être)',         loesung: 'Sois',    erklaerung: 'être: tu → sois (unregelmäßig)' },
      { typ: 'luecke', satz: '___ au restaurant ! (wir, essen)', loesung: 'Mangeons', erklaerung: 'manger: nous → mangeons' },
      { typ: 'luecke', satz: "N'___ pas peur ! (du, avoir)",    loesung: 'aie',     erklaerung: 'avoir: tu → aie (unregelmäßig)' },
      { typ: 'luecke', satz: '___ la vérité ! (du, sagen — dire)', loesung: 'Dis',    erklaerung: 'dire: tu → dis' },
      { typ: 'luecke', satz: '___-y ! (wir, aller)',             loesung: 'Allons',  erklaerung: 'aller: nous → allons; allons-y = los geht\'s' },
      { typ: 'luecke', satz: '___ bien ! (Sie, zuhören — écouter)', loesung: 'Écoutez', erklaerung: 'écouter: vous → écoutez' },
      { typ: 'richtigfalsch', frage: 'Bei -er Verben hat der tu-Imperativ KEIN -s: "Mange !" — aber bei -ir und -re Verben schon: "Finis !", "Attends !"', antwort: true,
        erklaerung: 'Genau — nur -er Verben verlieren das -s im tu-Imperativ.' },
      { typ: 'richtigfalsch', frage: '"Va !" ist die tu-Form des Imperativs von "aller".', antwort: true,
        erklaerung: 'Ja — aller: tu → va (aber: vas-y! — mit -s vor y).' },
      { typ: 'richtigfalsch', frage: 'Reflexivpronomen stehen im Imperativ VOR dem Verb: "Te retourne !"', antwort: false,
        erklaerung: 'Im bejahten Imperativ steht das Pronomen NACH dem Verb: "Retourne-toi !" Im verneinten Imperativ vor dem Verb: "Ne te retourne pas !"' },
      { typ: 'richtigfalsch', frage: '"Allons-y !" bedeutet "Gehen wir! / Los geht\'s!"', antwort: true,
        erklaerung: 'Genau — allons (nous-Imperativ) + y (= dahin). Sehr gebräuchlich!' },
      { typ: 'richtigfalsch', frage: 'Der vous-Imperativ ist immer gleich wie die vous-Präsensform.', antwort: true,
        erklaerung: 'Ja — vous parlez → Parlez ! Einzige Ausnahme: être (soyez), avoir (ayez), savoir (sachez).' },
      { typ: 'richtigfalsch', frage: '"N\'oubliez pas" bedeutet "Vergessen Sie nicht".', antwort: true,
        erklaerung: 'Genau — verneinter Imperativ: ne + Verb + pas.' },
      { typ: 'hoeren', fr: 'Tournez à gauche !',        de: 'Biegen Sie links ab!',          erklaerung: 'tourner: vous → tournez' },
      { typ: 'hoeren', fr: 'Allons-y !',                 de: 'Gehen wir! / Los!',             erklaerung: 'aller: nous → allons + y' },
      { typ: 'hoeren', fr: 'Écoutez bien !',             de: 'Hören Sie gut zu!',              erklaerung: 'écouter: vous → écoutez' },
      { typ: 'hoeren', fr: 'Attends ici !',              de: 'Warte hier!',                    erklaerung: 'attendre: tu → attends' },
      { typ: 'hoeren', fr: 'Prenez la première à droite !', de: 'Nehmen Sie die erste rechts!', erklaerung: 'prendre: vous → prenez' },
      { typ: 'hoeren', fr: "N'oubliez pas votre passeport !", de: 'Vergessen Sie Ihren Pass nicht!', erklaerung: 'oublier: vous → n\'oubliez pas' }
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
      { typ: 'tippen', de: 'Wählst du das Menü?',            fr: ['Tu choisis le menu ?', 'Est-ce que tu choisis le menu ?', 'Choisis-tu le menu ?'], erklaerung: 'choisir: tu → choisis' },
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
      { typ: 'luecke', satz: 'Nous ___ souvent à la mer. (aller)',             loesung: 'allions', erklaerung: 'aller → nous allons → all- + ions = allions' },
      // ── Erweiterte Übungen (50-Fragen-Pool) ──
      { typ: 'tippen', de: 'Die Sonne schien.',                    fr: 'Le soleil brillait.',             erklaerung: 'briller → nous brillons → brill- + ait = brillait' },
      { typ: 'tippen', de: 'Wir waren glücklich.',                  fr: 'Nous étions contents.',          erklaerung: 'être → Ausnahme: nous étions' },
      { typ: 'tippen', de: 'Er trank jeden Tag Kaffee.',            fr: 'Il buvait du café tous les jours.', erklaerung: 'boire → nous buvons → buv- + ait; Gewohnheit → imparfait' },
      { typ: 'tippen', de: 'Das Hotel war schön.',                  fr: "L'hôtel était beau.",             erklaerung: 'être → il était; Beschreibung → imparfait' },
      { typ: 'tippen', de: 'Es gab viele Touristen.',               fr: 'Il y avait beaucoup de touristes.', erklaerung: 'avoir → il y avait (Zustand → imparfait)' },
      { typ: 'tippen', de: 'Ich kannte die Stadt nicht.',           fr: 'Je ne connaissais pas la ville.', erklaerung: 'connaître → nous connaissons → connaiss- + ais' },
      { typ: 'tippen', de: 'Sie gingen jeden Abend spazieren.',    fr: 'Ils se promenaient tous les soirs.', erklaerung: 'se promener → imparfait; Gewohnheit → tous les soirs' },
      { typ: 'tippen', de: 'Das Meer war warm.',                    fr: 'La mer était chaude.',            erklaerung: 'être → était; chaude (f.) wegen mer (f.)' },
      { typ: 'tippen', de: 'Ich wollte schwimmen gehen.',          fr: 'Je voulais aller nager.',         erklaerung: 'vouloir → nous voulons → voul- + ais' },
      { typ: 'tippen', de: 'Die Kinder spielten am Strand.',       fr: 'Les enfants jouaient à la plage.', erklaerung: 'jouer → nous jouons → jou- + aient' },
      { typ: 'tippen', de: 'Wir hatten ein schönes Zimmer.',       fr: 'Nous avions une belle chambre.',  erklaerung: 'avoir → nous avons → av- + ions = avions' },
      { typ: 'tippen', de: 'Er sprach immer Französisch.',         fr: 'Il parlait toujours français.',   erklaerung: 'parler → parl- + ait; toujours = immer → Gewohnheit' },
      { typ: 'tippen', de: 'Ich wusste nicht, wo das Hotel war.',  fr: "Je ne savais pas où était l'hôtel.", erklaerung: 'savoir → nous savons → sav- + ais' },
      { typ: 'tippen', de: 'Es war kalt draußen.',                  fr: 'Il faisait froid dehors.',        erklaerung: 'faire → fais- + ait; Wetter → imparfait' },
      { typ: 'tippen', de: 'Sie aß gern Crêpes.',                  fr: 'Elle aimait manger des crêpes.',  erklaerung: 'aimer → aim- + ait; Vorliebe → imparfait' },
      { typ: 'tippen', de: 'Wir fuhren oft nach Frankreich.',      fr: 'Nous allions souvent en France.', erklaerung: 'aller → all- + ions; souvent → Gewohnheit' },
      { typ: 'tippen', de: 'Der Markt war sehr belebt.',           fr: 'Le marché était très animé.',     erklaerung: 'être → était; Beschreibung → imparfait' },
      { typ: 'tippen', de: 'Ich konnte das nicht verstehen.',      fr: 'Je ne pouvais pas comprendre.',   erklaerung: 'pouvoir → nous pouvons → pouv- + ais' },
      { typ: 'tippen', de: 'Sie arbeitete in einem Café.',         fr: 'Elle travaillait dans un café.',  erklaerung: 'travailler → travaill- + ait' },
      { typ: 'tippen', de: 'Wir wussten den Weg nicht.',           fr: 'Nous ne savions pas le chemin.',  erklaerung: 'savoir → sav- + ions' },
      { typ: 'tippen', de: 'Es war windig.',                        fr: 'Il y avait du vent.',             erklaerung: 'avoir → il y avait; Wetter → imparfait' },
      { typ: 'tippen', de: 'Die Leute tanzten auf der Straße.',    fr: 'Les gens dansaient dans la rue.', erklaerung: 'danser → dans- + aient; Hintergrund' },
      { typ: 'tippen', de: 'Ich hatte Hunger.',                     fr: "J'avais faim.",                   erklaerung: 'avoir → av- + ais; Zustand → imparfait' },
      { typ: 'tippen', de: 'Sie kannten sich seit Jahren.',         fr: 'Ils se connaissaient depuis des années.', erklaerung: 'se connaître → connaiss- + aient; Zustand' },
      { typ: 'luecke', satz: 'Il ___ beau et chaud. (faire)',       loesung: 'faisait', erklaerung: 'faire → fais- + ait; Wetter → imparfait' },
      { typ: 'luecke', satz: 'Nous ___ souvent au restaurant. (manger)', loesung: 'mangions', erklaerung: 'manger → mange- + ions = mangions' },
      { typ: 'luecke', satz: "J'___ une belle chambre. (avoir)",    loesung: 'avais',   erklaerung: 'avoir → av- + ais' },
      { typ: 'luecke', satz: 'Les enfants ___ sur la plage. (jouer)', loesung: 'jouaient', erklaerung: 'jouer → jou- + aient' },
      { typ: 'luecke', satz: 'Il ___ du vent. (il y avoir)',        loesung: 'y avait', erklaerung: 'il y avait = es gab (Zustand)' },
      { typ: 'luecke', satz: 'Elle ___ des crêpes. (aimer)',        loesung: 'aimait',  erklaerung: 'aimer → aim- + ait; Vorliebe' },
      { typ: 'luecke', satz: 'Nous ___ le chemin. (ne pas savoir)', loesung: 'ne savions pas', erklaerung: 'savoir → sav- + ions + Verneinung' },
      { typ: 'luecke', satz: 'Tu ___ petit quand nous habitions à Lyon. (être)', loesung: 'étais', erklaerung: 'être → ét- + ais (Ausnahme)' },
      { typ: 'richtigfalsch', frage: 'Das imparfait wird für Gewohnheiten in der Vergangenheit verwendet: "Tous les jours, il prenait le bus."', antwort: true,
        erklaerung: 'Genau — Signalwörter: tous les jours, souvent, toujours, d\'habitude.' },
      { typ: 'richtigfalsch', frage: '"Être" ist das einzige Verb mit einem unregelmäßigen Imparfait-Stamm.', antwort: true,
        erklaerung: 'Ja — être: j\'étais (nicht "nous sommes → som-"). Alle anderen: nous-Stamm.' },
      { typ: 'richtigfalsch', frage: 'Im imparfait klingen je, tu, il/elle und ils/elles unterschiedlich.', antwort: false,
        erklaerung: '-ais, -ais, -ait, -aient klingen alle gleich! Nur -ions und -iez klingen anders.' },
      { typ: 'richtigfalsch', frage: 'Wetterbeschreibungen stehen immer im imparfait: "Il faisait beau", "Il pleuvait".', antwort: true,
        erklaerung: 'Ja — Wetter ist Zustand/Hintergrund → immer imparfait.' },
      { typ: 'richtigfalsch', frage: '"Il y avait" ist das imparfait von "il y a" (es gibt).', antwort: true,
        erklaerung: 'Genau — il y a → il y avait. Z.B. Il y avait beaucoup de monde.' },
      { typ: 'richtigfalsch', frage: 'Wenn man imparfait und passé composé im selben Satz benutzt, steht das imparfait für die unterbrochene Handlung.', antwort: true,
        erklaerung: '"Je lisais (Hintergrund) quand il est arrivé (Ereignis)." — imparfait = was gerade lief.' },
      { typ: 'hoeren', fr: 'Il faisait beau.',               de: 'Das Wetter war schön.',          erklaerung: 'faire → faisait; Wetter → imparfait' },
      { typ: 'hoeren', fr: "J'étais enfant.",                de: 'Ich war Kind.',                   erklaerung: 'être → étais (Ausnahme)' },
      { typ: 'hoeren', fr: 'Il pleuvait.',                    de: 'Es regnete.',                     erklaerung: 'pleuvoir → pleuvait; Wetter' },
      { typ: 'hoeren', fr: 'Nous étions contents.',           de: 'Wir waren glücklich.',            erklaerung: 'être → étions' },
      { typ: 'hoeren', fr: 'Il y avait beaucoup de monde.',   de: 'Es waren viele Leute da.',        erklaerung: 'il y avait = es gab' },
      { typ: 'hoeren', fr: 'Elle travaillait dans un café.',  de: 'Sie arbeitete in einem Café.',    erklaerung: 'travailler → travaillait' }
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
      { typ: 'tippen', de: 'Hätten Sie ein Zimmer frei?',                 fr: ['Est-ce que vous auriez une chambre libre ?', 'Auriez-vous une chambre libre ?'], erklaerung: 'avoir → conditionnel: vous auriez' },
      { typ: 'richtigfalsch', frage: '"Je voudrais" ist höflicher als "je veux".', antwort: true,
        erklaerung: 'Ja — "je veux" klingt fordernd. Im Restaurant, Hotel usw. immer "je voudrais".' },
      { typ: 'richtigfalsch', frage: 'Der Conditionnel wird mit dem Präsensstamm + Imparfait-Endungen gebildet.', antwort: false,
        erklaerung: 'Nicht Präsensstamm — Futurstamm (= meist Infinitiv). z.B. manger → mangerais.' },
      { typ: 'luecke', satz: 'Je ___ visiter le château demain. (aimer)', loesung: 'aimerais', erklaerung: 'aimer → conditionnel: j\'aimerais' },
      { typ: 'luecke', satz: 'Ce ___ super de voyager ensemble ! (être)',  loesung: 'serait',   erklaerung: 'être → conditionnel: ce serait' },
      // ── Erweiterte Übungen (50-Fragen-Pool) ──
      { typ: 'tippen', de: 'Ich hätte gern die Speisekarte.',        fr: 'Je voudrais le menu.',                erklaerung: 'voudrais = höfliche Form von vouloir' },
      { typ: 'tippen', de: 'Könnten Sie das wiederholen?',           fr: ['Pourriez-vous répéter ?', 'Est-ce que vous pourriez répéter ?'], erklaerung: 'pouvoir → pourriez (höfliche Bitte)' },
      { typ: 'tippen', de: 'Ich würde gern bezahlen.',               fr: ['Je voudrais payer.', "J'aimerais payer."], erklaerung: 'voudrais oder aimerais + Infinitiv' },
      { typ: 'tippen', de: 'Wir würden gern einen Tisch für vier.',  fr: 'Nous voudrions une table pour quatre.', erklaerung: 'vouloir → nous voudrions' },
      { typ: 'tippen', de: 'Das wäre sehr nett.',                    fr: 'Ce serait très gentil.',              erklaerung: 'être → serait; gentil = nett' },
      { typ: 'tippen', de: 'Er würde gern nach Paris fahren.',       fr: 'Il aimerait aller à Paris.',          erklaerung: 'aimer → il aimerait + Infinitiv' },
      { typ: 'tippen', de: 'Man sollte reservieren.',                 fr: 'Il faudrait réserver.',               erklaerung: 'falloir → il faudrait (unpersönlich)' },
      { typ: 'tippen', de: 'Ich würde das Dessert nehmen.',          fr: 'Je prendrais le dessert.',            erklaerung: 'prendre → je prendrais (Futurstamm: prendr-)' },
      { typ: 'tippen', de: 'Wenn ich reich wäre, würde ich reisen.', fr: 'Si j\'étais riche, je voyagerais.',   erklaerung: 'si + imparfait → conditionnel: voyager → voyagerais' },
      { typ: 'tippen', de: 'Könnten Sie mir den Weg zeigen?',        fr: ['Pourriez-vous me montrer le chemin ?', 'Est-ce que vous pourriez me montrer le chemin ?'], erklaerung: 'pouvoir → pourriez; montrer = zeigen' },
      { typ: 'tippen', de: 'Wir hätten gern zwei Kaffees.',          fr: 'Nous voudrions deux cafés.',          erklaerung: 'vouloir → nous voudrions' },
      { typ: 'tippen', de: 'Es wäre besser, früh zu kommen.',       fr: 'Il vaudrait mieux venir tôt.',        erklaerung: 'valoir → il vaudrait mieux (es wäre besser)' },
      { typ: 'tippen', de: 'Sie würde gern am Strand bleiben.',     fr: 'Elle aimerait rester à la plage.',    erklaerung: 'aimer → elle aimerait + Infinitiv' },
      { typ: 'tippen', de: 'Wenn ich Zeit hätte, würde ich lesen.', fr: "Si j'avais le temps, je lirais.",     erklaerung: 'si + imparfait → conditionnel: lire → lirais' },
      { typ: 'tippen', de: 'Ich würde Ihnen empfehlen…',            fr: 'Je vous conseillerais…',              erklaerung: 'conseiller → conseillerais (Infinitiv + ais)' },
      { typ: 'tippen', de: 'Es würde mich freuen.',                  fr: 'Ça me ferait plaisir.',               erklaerung: 'faire → ferait (Futurstamm: fer-)' },
      { typ: 'tippen', de: 'Dürfte ich fragen?',                     fr: ['Pourrais-je demander ?', 'Est-ce que je pourrais demander ?'], erklaerung: 'pouvoir → je pourrais (sehr höflich)' },
      { typ: 'tippen', de: 'Wir könnten zusammen essen.',            fr: 'Nous pourrions manger ensemble.',     erklaerung: 'pouvoir → nous pourrions + Infinitiv' },
      { typ: 'tippen', de: 'Wenn es nicht regnen würde, würden wir spazieren gehen.', fr: "S'il ne pleuvait pas, nous nous promènerions.", erklaerung: 'si + imparfait → conditionnel' },
      { typ: 'tippen', de: 'Er hätte gern Wein.',                    fr: 'Il voudrait du vin.',                 erklaerung: 'vouloir → il voudrait' },
      { typ: 'tippen', de: 'Wir sollten den Zug nehmen.',            fr: 'Nous devrions prendre le train.',     erklaerung: 'devoir → nous devrions (Futurstamm: devr-)' },
      { typ: 'tippen', de: 'Sie würden gern ein Auto mieten.',      fr: 'Ils aimeraient louer une voiture.',   erklaerung: 'aimer → ils aimeraient; louer = mieten' },
      { typ: 'tippen', de: 'Ich an deiner Stelle würde akzeptieren.', fr: "À ta place, j'accepterais.",        erklaerung: 'à ta place = an deiner Stelle; accepter → accepterais' },
      { typ: 'tippen', de: 'Wüssten Sie, wo der Bahnhof ist?',     fr: ['Sauriez-vous où est la gare ?', 'Est-ce que vous sauriez où est la gare ?'], erklaerung: 'savoir → vous sauriez (Futurstamm: saur-)' },
      { typ: 'luecke', satz: 'Je ___ une table pour deux. (vouloir)', loesung: 'voudrais', erklaerung: 'vouloir → conditionnel: voudrais' },
      { typ: 'luecke', satz: 'Il ___ réserver. (falloir)',           loesung: 'faudrait', erklaerung: 'falloir → conditionnel: faudrait' },
      { typ: 'luecke', satz: 'Nous ___ manger ensemble. (pouvoir)', loesung: 'pourrions', erklaerung: 'pouvoir → conditionnel: pourrions' },
      { typ: 'luecke', satz: 'Ce ___ très gentil. (être)',          loesung: 'serait',   erklaerung: 'être → conditionnel: serait (Stamm: ser-)' },
      { typ: 'luecke', satz: 'Elle ___ rester à la plage. (aimer)', loesung: 'aimerait', erklaerung: 'aimer → conditionnel: aimerait' },
      { typ: 'luecke', satz: 'Vous ___ prendre le train. (devoir)', loesung: 'devriez',  erklaerung: 'devoir → conditionnel: devriez (Stamm: devr-)' },
      { typ: 'luecke', satz: 'Ça me ___ plaisir. (faire)',          loesung: 'ferait',   erklaerung: 'faire → conditionnel: ferait (Stamm: fer-)' },
      { typ: 'luecke', satz: 'Il ___ mieux venir tôt. (valoir)',    loesung: 'vaudrait', erklaerung: 'valoir → conditionnel: vaudrait (Stamm: vaudr-)' },
      { typ: 'richtigfalsch', frage: 'Der Conditionnel benutzt die gleichen Endungen wie das Imparfait: -ais, -ais, -ait, -ions, -iez, -aient.', antwort: true,
        erklaerung: 'Genau — die Endungen sind identisch. Der Unterschied liegt im Stamm (Futur- vs. nous-Präsensstamm).' },
      { typ: 'richtigfalsch', frage: '"Si j\'aurais" ist korrekt für "Wenn ich hätte".', antwort: false,
        erklaerung: 'Nach "si" steht IMMER das imparfait, nie der conditionnel: Si j\'AVAIS (imparfait).' },
      { typ: 'richtigfalsch', frage: '"Il faudrait" bedeutet "Man müsste / Es wäre nötig".', antwort: true,
        erklaerung: 'Ja — falloir im conditionnel: il faudrait. Höfliche Form von il faut.' },
      { typ: 'richtigfalsch', frage: 'Der Futurstamm von "avoir" ist "aur-": "j\'aurais, tu aurais, il aurait…"', antwort: true,
        erklaerung: 'Ja — avoir: Futurstamm aur- + Endungen: j\'aurais, nous aurions.' },
      { typ: 'richtigfalsch', frage: '"Nous devrions" bedeutet "Wir sollten".', antwort: true,
        erklaerung: 'Ja — devoir im conditionnel drückt eine Empfehlung/Pflicht aus: nous devrions = wir sollten.' },
      { typ: 'richtigfalsch', frage: 'Im Conditionnel haben alle regelmäßigen -er Verben den vollen Infinitiv als Stamm: "manger → mangerais".', antwort: true,
        erklaerung: 'Genau — bei regelmäßigen Verben: Infinitiv + Endung: mangerais, parlerais, voyagerais.' },
      { typ: 'hoeren', fr: 'Je voudrais une chambre.',        de: 'Ich hätte gern ein Zimmer.',       erklaerung: 'voudrais = höfliches "ich möchte"' },
      { typ: 'hoeren', fr: 'Ce serait parfait.',               de: 'Das wäre perfekt.',                 erklaerung: 'être → serait' },
      { typ: 'hoeren', fr: 'Pourriez-vous répéter ?',         de: 'Könnten Sie das wiederholen?',      erklaerung: 'pouvoir → pourriez (höfliche Bitte)' },
      { typ: 'hoeren', fr: "J'aimerais visiter le musée.",    de: 'Ich würde gern das Museum besuchen.', erklaerung: 'aimer → aimerais' },
      { typ: 'hoeren', fr: "Il faudrait réserver.",            de: 'Man müsste reservieren.',            erklaerung: 'falloir → faudrait' },
      { typ: 'hoeren', fr: 'Nous voudrions deux cafés.',       de: 'Wir hätten gern zwei Kaffees.',     erklaerung: 'vouloir → voudrions (nous)' }
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
