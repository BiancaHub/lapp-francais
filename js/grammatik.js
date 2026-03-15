/* L'App français - Grammatik-Tab */
var Grammatik = (function() {

  // ─── DATEN ────────────────────────────────────────────────────────────────
  var themen = [
    // ── A1 ──
    {
      id: 'artikel', level: 'A1', titel: 'Artikel: le, la, les, un, une',
      erklaerung: 'Im Französischen hat jedes Nomen ein Geschlecht — männlich (<em>masculin</em>) oder weiblich (<em>féminin</em>).<br><br>' +
        '<strong>Bestimmte Artikel</strong> (= "der/die/das"):<br>' +
        '• <em>le</em> → männlich: <em>le chat</em> (die Katze)<br>' +
        '• <em>la</em> → weiblich: <em>la maison</em> (das Haus)<br>' +
        '• <em>les</em> → Plural: <em>les enfants</em> (die Kinder)<br><br>' +
        '<strong>Unbestimmte Artikel</strong> (= "ein/eine"):<br>' +
        '• <em>un</em> → männlich: <em>un chien</em> (ein Hund)<br>' +
        '• <em>une</em> → weiblich: <em>une fleur</em> (eine Blume)<br><br>' +
        '<strong>Achtung:</strong> Vor Vokalen wird <em>le/la</em> zu <em>l\'</em>: <em>l\'ami</em>, <em>l\'école</em>',
      beispiele: [
        { fr: 'le livre', de: 'das Buch' },
        { fr: 'la femme', de: 'die Frau' },
        { fr: 'les amis', de: 'die Freunde' },
        { fr: 'un garçon', de: 'ein Junge' },
        { fr: 'une ville', de: 'eine Stadt' }
      ],
      uebungen: [
        {
          typ: 'luecke',
          frage: '___ soleil brille. (Sonne = männlich)',
          optionen: ['le', 'la', 'les', 'une'],
          antwort: 0,
          erklaerung: '"soleil" (Sonne) ist männlich → le soleil'
        },
        {
          typ: 'luecke',
          frage: 'Je vois ___ étoile. (Stern = weiblich, beginnt mit Vokal)',
          optionen: ['le', 'la', "l'", 'un'],
          antwort: 2,
          erklaerung: '"étoile" beginnt mit Vokal → l\'étoile'
        },
        {
          typ: 'richtigfalsch',
          frage: '"Une maison" bedeutet "das Haus".',
          antwort: false,
          erklaerung: '"une" = ein/eine (unbestimmt). "Das Haus" = la maison'
        }
      ]
    },
    {
      id: 'pronomen', level: 'A1', titel: 'Personalpronomen',
      erklaerung: 'Die Personalpronomen ersetzen Namen und bestimmen die Verbform:<br><br>' +
        '<table class="gram-table"><tr><th>Pronomen</th><th>Bedeutung</th></tr>' +
        '<tr><td><em>je (j\')</em></td><td>ich</td></tr>' +
        '<tr><td><em>tu</em></td><td>du (vertraut)</td></tr>' +
        '<tr><td><em>il / elle</em></td><td>er / sie</td></tr>' +
        '<tr><td><em>nous</em></td><td>wir</td></tr>' +
        '<tr><td><em>vous</em></td><td>ihr / Sie (förmlich)</td></tr>' +
        '<tr><td><em>ils / elles</em></td><td>sie (Pl. m. / Pl. f.)</td></tr></table><br>' +
        '<strong>Tipp:</strong> <em>vous</em> ist sowohl Plural ("ihr") als auch Höflichkeitsform ("Sie") — genau wie im Deutschen!',
      beispiele: [
        { fr: 'Je suis française.', de: 'Ich bin Französin.' },
        { fr: 'Tu parles bien.', de: 'Du sprichst gut.' },
        { fr: 'Elle aime le café.', de: 'Sie mag Kaffee.' },
        { fr: 'Nous habitons à Paris.', de: 'Wir wohnen in Paris.' },
        { fr: 'Ils travaillent beaucoup.', de: 'Sie arbeiten viel.' }
      ],
      uebungen: [
        {
          typ: 'luecke',
          frage: '___ s\'appelle Marie. (Sie heißt Marie.)',
          optionen: ['Je', 'Tu', 'Elle', 'Nous'],
          antwort: 2,
          erklaerung: '"Elle" = sie (weiblich, Singular)'
        },
        {
          typ: 'zuordnung',
          frage: 'Was bedeutet "vous"?',
          optionen: ['ich', 'du', 'ihr / Sie', 'wir'],
          antwort: 2,
          erklaerung: '"vous" = ihr (Plural) oder Sie (Höflichkeit)'
        },
        {
          typ: 'richtigfalsch',
          frage: '"Ils" kann nur männliche Personen beschreiben.',
          antwort: false,
          erklaerung: '"Ils" gilt auch für gemischte Gruppen (Männer + Frauen).'
        }
      ]
    },
    {
      id: 'etre', level: 'A1', titel: 'être — sein',
      erklaerung: '<em>être</em> (sein) ist eines der wichtigsten Verben. Es ist unregelmäßig:<br><br>' +
        '<table class="gram-table">' +
        '<tr><td><em>je suis</em></td><td>ich bin</td></tr>' +
        '<tr><td><em>tu es</em></td><td>du bist</td></tr>' +
        '<tr><td><em>il/elle est</em></td><td>er/sie ist</td></tr>' +
        '<tr><td><em>nous sommes</em></td><td>wir sind</td></tr>' +
        '<tr><td><em>vous êtes</em></td><td>ihr seid / Sie sind</td></tr>' +
        '<tr><td><em>ils/elles sont</em></td><td>sie sind</td></tr>' +
        '</table><br>' +
        '<strong>être</strong> braucht man auch für Berufe, Nationalitäten und Eigenschaften.',
      beispiele: [
        { fr: 'Je suis professeur.', de: 'Ich bin Lehrer/in.' },
        { fr: 'Tu es gentil.', de: 'Du bist nett.' },
        { fr: 'Il est médecin.', de: 'Er ist Arzt.' },
        { fr: 'Nous sommes amis.', de: 'Wir sind Freunde.' },
        { fr: 'Elles sont belles.', de: 'Sie sind schön.' }
      ],
      uebungen: [
        {
          typ: 'luecke',
          frage: 'Vous ___ à Paris? (Ihr seid in Paris?)',
          optionen: ['suis', 'es', 'êtes', 'sont'],
          antwort: 2,
          erklaerung: 'vous → êtes'
        },
        {
          typ: 'luecke',
          frage: 'Ils ___ médecins. (Sie sind Ärzte.)',
          optionen: ['suis', 'es', 'est', 'sont'],
          antwort: 3,
          erklaerung: 'ils → sont'
        },
        {
          typ: 'richtigfalsch',
          frage: '"Je suis" bedeutet "ich habe".',
          antwort: false,
          erklaerung: '"Je suis" = ich bin. "Ich habe" = j\'ai (avoir)'
        }
      ]
    },
    {
      id: 'avoir', level: 'A1', titel: 'avoir — haben',
      erklaerung: '<em>avoir</em> (haben) — ebenfalls unregelmäßig und sehr wichtig:<br><br>' +
        '<table class="gram-table">' +
        '<tr><td><em>j\'ai</em></td><td>ich habe</td></tr>' +
        '<tr><td><em>tu as</em></td><td>du hast</td></tr>' +
        '<tr><td><em>il/elle a</em></td><td>er/sie hat</td></tr>' +
        '<tr><td><em>nous avons</em></td><td>wir haben</td></tr>' +
        '<tr><td><em>vous avez</em></td><td>ihr habt / Sie haben</td></tr>' +
        '<tr><td><em>ils/elles ont</em></td><td>sie haben</td></tr>' +
        '</table><br>' +
        '<strong>Wichtig:</strong> Im Französischen sagt man "ich habe Hunger/Durst/Angst" mit <em>avoir</em>, nicht mit <em>être</em>:<br>' +
        '→ <em>J\'ai faim.</em> (Ich bin hungrig. / lit. Ich habe Hunger.)',
      beispiele: [
        { fr: "J'ai un chien.", de: 'Ich habe einen Hund.' },
        { fr: 'Tu as raison.', de: 'Du hast recht.' },
        { fr: 'Elle a faim.', de: 'Sie hat Hunger.' },
        { fr: 'Nous avons une voiture.', de: 'Wir haben ein Auto.' },
        { fr: 'Ils ont froid.', de: 'Sie frieren. (lit. Sie haben Kälte.)' }
      ],
      uebungen: [
        {
          typ: 'luecke',
          frage: 'Tu ___ soif? (Hast du Durst?)',
          optionen: ['ai', 'as', 'a', 'avez'],
          antwort: 1,
          erklaerung: 'tu → as'
        },
        {
          typ: 'luecke',
          frage: 'Nous ___ deux enfants. (Wir haben zwei Kinder.)',
          optionen: ['ont', 'avons', 'avez', 'ai'],
          antwort: 1,
          erklaerung: 'nous → avons'
        },
        {
          typ: 'richtigfalsch',
          frage: '"J\'ai peur" bedeutet "Ich bin mutig".',
          antwort: false,
          erklaerung: '"J\'ai peur" = Ich habe Angst (ich bin ängstlich).'
        }
      ]
    },
    {
      id: 'verneinung', level: 'A1', titel: 'Verneinung: ne … pas',
      erklaerung: 'Im Französischen steht die Verneinung um das Verb herum:<br><br>' +
        '<strong>Formel: ne + Verb + pas</strong><br><br>' +
        '• <em>Je parle.</em> → <em>Je <u>ne</u> parle <u>pas</u>.</em><br>' +
        '• <em>Il est là.</em> → <em>Il <u>n\'</u>est <u>pas</u> là.</em><br><br>' +
        'Vor Vokalen wird <em>ne</em> zu <em>n\'</em>.<br><br>' +
        'In der Umgangssprache fällt <em>ne</em> oft weg:<br>' +
        '→ <em>Je sais pas.</em> (Ich weiß nicht.) — aber schreib es lieber vollständig!',
      beispiele: [
        { fr: 'Je ne comprends pas.', de: 'Ich verstehe nicht.' },
        { fr: "Il n'est pas là.", de: 'Er ist nicht da.' },
        { fr: 'Nous n\'avons pas faim.', de: 'Wir haben keinen Hunger.' },
        { fr: 'Elle ne parle pas anglais.', de: 'Sie spricht kein Englisch.' },
        { fr: 'Ce n\'est pas vrai.', de: 'Das stimmt nicht.' }
      ],
      uebungen: [
        {
          typ: 'luecke',
          frage: 'Je ___ suis ___ français. (Ich bin nicht Franzose.)',
          optionen: ['ne … pas', 'n\'… pas', 'pas … ne', 'ne … point'],
          antwort: 0,
          erklaerung: '"suis" beginnt mit Konsonant → ne suis pas'
        },
        {
          typ: 'richtigfalsch',
          frage: '"Il n\'est pas" — das n\' kommt wegen des Vokals.',
          antwort: true,
          erklaerung: 'Vor Vokalen (est, a, ai…) wird ne zu n\''
        },
        {
          typ: 'zuordnung',
          frage: 'Wie verneinst du "Tu aimes le sport"?',
          optionen: ['Tu ne aimes pas le sport', 'Tu n\'aimes pas le sport', 'Tu aimes pas ne le sport', 'Tu pas aimes le sport'],
          antwort: 1,
          erklaerung: 'aimes beginnt mit Vokal → n\'aimes pas'
        }
      ]
    },

    // ── A2 ──
    {
      id: 'er-verben', level: 'A2', titel: 'Verben auf -er im Präsens',
      erklaerung: 'Die meisten französischen Verben enden auf <strong>-er</strong> (z.B. <em>parler, manger, habiter</em>). Sie sind regelmäßig — du brauchst nur die Endungen:<br><br>' +
        '<table class="gram-table"><tr><th>Pronomen</th><th>Endung</th><th>parler</th></tr>' +
        '<tr><td>je</td><td>-e</td><td>je parle</td></tr>' +
        '<tr><td>tu</td><td>-es</td><td>tu parles</td></tr>' +
        '<tr><td>il/elle</td><td>-e</td><td>il parle</td></tr>' +
        '<tr><td>nous</td><td>-ons</td><td>nous parlons</td></tr>' +
        '<tr><td>vous</td><td>-ez</td><td>vous parlez</td></tr>' +
        '<tr><td>ils/elles</td><td>-ent</td><td>ils parlent</td></tr>' +
        '</table><br>' +
        '<strong>Trick:</strong> je/tu/il/elle/ils/elles klingen oft gleich — der Unterschied ist nur in der Schreibung!',
      beispiele: [
        { fr: 'Je mange une pizza.', de: 'Ich esse eine Pizza.' },
        { fr: 'Tu habites à Munich.', de: 'Du wohnst in München.' },
        { fr: 'Nous aimons la musique.', de: 'Wir mögen Musik.' },
        { fr: 'Vous travaillez bien.', de: 'Sie arbeiten gut.' },
        { fr: 'Elles chantent bien.', de: 'Sie singen gut.' }
      ],
      uebungen: [
        {
          typ: 'luecke',
          frage: 'Il ___ (travailler) beaucoup. (Er arbeitet viel.)',
          optionen: ['travaille', 'travailles', 'travaillons', 'travaillez'],
          antwort: 0,
          erklaerung: 'il → Endung -e → travaille'
        },
        {
          typ: 'luecke',
          frage: 'Nous ___ (écouter) de la musique.',
          optionen: ['écoutes', 'écoutez', 'écoutons', 'écoutent'],
          antwort: 2,
          erklaerung: 'nous → Endung -ons → écoutons'
        },
        {
          typ: 'richtigfalsch',
          frage: '"Ils parlent" und "il parle" klingen identisch.',
          antwort: true,
          erklaerung: 'Die -ent Endung ist stumm — beide klingen wie "parl".'
        },
        {
          typ: 'luecke',
          frage: 'Vous ___ (habiter) à Munich? (Wohnen Sie in München?)',
          optionen: ['habitez', 'habites', 'habite', 'habitons'],
          antwort: 0,
          erklaerung: 'vous → Endung -ez → habitez'
        },
        {
          typ: 'luecke',
          frage: 'Elles ___ (chercher) l\'hôtel. (Sie suchen das Hotel.)',
          optionen: ['cherche', 'cherches', 'cherchent', 'cherchez'],
          antwort: 2,
          erklaerung: 'elles → Endung -ent → cherchent (stumm ausgesprochen!)'
        },
        {
          typ: 'zuordnung',
          frage: 'Wie lautet "commander" (bestellen) für "tu"?',
          optionen: ['commande', 'commandes', 'commandons', 'commandent'],
          antwort: 1,
          erklaerung: 'tu → Endung -es → tu commandes'
        }
      ]
    },
    {
      id: 'passe-compose', level: 'A2', titel: 'Passé composé — Vergangenheit',
      erklaerung: 'Das <strong>Passé composé</strong> ist die häufigste Vergangenheitsform — man benutzt es für abgeschlossene Handlungen.<br><br>' +
        '<strong>Formel: avoir/être (Präsens) + Partizip (participe passé)</strong><br><br>' +
        '<strong>Mit avoir</strong> (die meisten Verben):<br>' +
        '→ <em>manger → mangé:</em> J\'ai mangé. (Ich habe gegessen.)<br><br>' +
        '<strong>Mit être</strong> (Bewegungsverben + reflexive):<br>' +
        '→ <em>aller → allé:</em> Je suis allé(e). (Ich bin gegangen.)<br><br>' +
        '<strong>Partizip bilden:</strong><br>' +
        '• -er Verben → -é: parler → parlé<br>' +
        '• -ir Verben → -i: finir → fini<br>' +
        '• -re Verben → -u: vendre → vendu',
      beispiele: [
        { fr: "J'ai mangé une pomme.", de: 'Ich habe einen Apfel gegessen.' },
        { fr: 'Elle a travaillé hier.', de: 'Sie hat gestern gearbeitet.' },
        { fr: 'Nous sommes allés au cinéma.', de: 'Wir sind ins Kino gegangen.' },
        { fr: 'Tu as fini?', de: 'Hast du fertig?' },
        { fr: 'Ils ont vendu la maison.', de: 'Sie haben das Haus verkauft.' }
      ],
      uebungen: [
        {
          typ: 'luecke',
          frage: 'Elle ___ (manger) une salade. (Sie hat einen Salat gegessen.)',
          optionen: ['a mangé', 'est mangé', 'ai mangé', 'a manger'],
          antwort: 0,
          erklaerung: 'manger → avoir + mangé → elle a mangé'
        },
        {
          typ: 'luecke',
          frage: 'Nous ___ (aller) à la mer. (Wir sind ans Meer gefahren.)',
          optionen: ['avons allé', 'sommes allés', 'avons allés', 'sommes aller'],
          antwort: 1,
          erklaerung: 'aller → être + allé → nous sommes allés'
        },
        {
          typ: 'richtigfalsch',
          frage: 'Alle Verben bilden das Passé composé mit "avoir".',
          antwort: false,
          erklaerung: 'Bewegungsverben (aller, venir, partir...) und reflexive Verben nehmen "être".'
        },
        {
          typ: 'luecke',
          frage: 'Je ___ (partir) à 8 heures. (Ich bin um 8 Uhr abgefahren.)',
          optionen: ['ai parti', 'suis parti(e)', 'ai partis', 'est parti'],
          antwort: 1,
          erklaerung: 'partir = Bewegungsverb → être + parti → je suis parti(e)'
        },
        {
          typ: 'luecke',
          frage: 'Vous ___ (commander) quoi? (Was haben Sie bestellt?)',
          optionen: ['avez commandé', 'êtes commandé', 'avez commander', 'ont commandé'],
          antwort: 0,
          erklaerung: 'commander → avoir + commandé → vous avez commandé'
        },
        {
          typ: 'zuordnung',
          frage: 'Welches Verb bildet das Passé composé mit "être"?',
          optionen: ['manger', 'parler', 'arriver', 'finir'],
          antwort: 2,
          erklaerung: 'arriver = Bewegungsverb → je suis arrivé(e)'
        }
      ]
    },
    {
      id: 'possessiv', level: 'A2', titel: 'Possessivbegleiter (mein, dein…)',
      erklaerung: 'Possessivbegleiter richten sich nach dem <strong>Geschlecht des Besitzes</strong> (nicht des Besitzers!):<br><br>' +
        '<table class="gram-table">' +
        '<tr><th></th><th>männl.</th><th>weibl.</th><th>Plural</th></tr>' +
        '<tr><td>mein(e)</td><td>mon</td><td>ma</td><td>mes</td></tr>' +
        '<tr><td>dein(e)</td><td>ton</td><td>ta</td><td>tes</td></tr>' +
        '<tr><td>sein/ihr(e)</td><td>son</td><td>sa</td><td>ses</td></tr>' +
        '<tr><td>unser(e)</td><td>notre</td><td>notre</td><td>nos</td></tr>' +
        '<tr><td>euer/Ihr(e)</td><td>votre</td><td>votre</td><td>vos</td></tr>' +
        '<tr><td>ihr(e) (Pl.)</td><td>leur</td><td>leur</td><td>leurs</td></tr>' +
        '</table><br>' +
        '<strong>Achtung:</strong> Vor Vokalen: ma → mon: <em>mon amie</em> (meine Freundin!)',
      beispiele: [
        { fr: 'mon frère', de: 'mein Bruder' },
        { fr: 'ma sœur', de: 'meine Schwester' },
        { fr: 'ses enfants', de: 'seine/ihre Kinder' },
        { fr: 'notre maison', de: 'unser Haus' },
        { fr: 'mon amie', de: 'meine Freundin (wegen Vokal: mon, nicht ma)' }
      ],
      uebungen: [
        {
          typ: 'luecke',
          frage: '___ chien est mignon. (Mein Hund ist süß. chien = männl.)',
          optionen: ['Ma', 'Mon', 'Mes', 'Ton'],
          antwort: 1,
          erklaerung: 'chien = männlich → mon chien'
        },
        {
          typ: 'luecke',
          frage: 'C\'est ___ amie. (Das ist meine Freundin. amie = weibl., beginnt mit a)',
          optionen: ['ma', 'mon', 'mes', 'sa'],
          antwort: 1,
          erklaerung: 'Vor Vokal: ma → mon → mon amie'
        },
        {
          typ: 'richtigfalsch',
          frage: '"Son" kann sowohl "sein" als auch "ihr" bedeuten.',
          antwort: true,
          erklaerung: '"son/sa/ses" hängt vom Objekt ab, nicht vom Geschlecht des Besitzers.'
        },
        {
          typ: 'luecke',
          frage: '___ valise est lourde. (Mein Koffer ist schwer. valise = weibl.)',
          optionen: ['Mon', 'Ma', 'Mes', 'Son'],
          antwort: 1,
          erklaerung: 'valise = weiblich, Konsonant → ma valise'
        },
        {
          typ: 'zuordnung',
          frage: '"Nos enfants" bedeutet...?',
          optionen: ['meine Kinder', 'eure Kinder', 'unsere Kinder', 'ihre Kinder'],
          antwort: 2,
          erklaerung: 'nos = unsere (Plural von notre)'
        }
      ]
    },

    {
      id: 'irreg-verben', level: 'A2', titel: 'Unregelmäßige Verben — die wichtigsten',
      erklaerung: 'Diese Verben musst du auswendig kennen — sie kommen im Urlaub ständig vor:<br><br>' +
        '<table class="gram-table">' +
        '<tr><th></th><th>aller (gehen)</th><th>faire (machen)</th><th>venir (kommen)</th></tr>' +
        '<tr><td>je/j\'</td><td><em>vais</em></td><td><em>fais</em></td><td><em>viens</em></td></tr>' +
        '<tr><td>tu</td><td><em>vas</em></td><td><em>fais</em></td><td><em>viens</em></td></tr>' +
        '<tr><td>il/elle</td><td><em>va</em></td><td><em>fait</em></td><td><em>vient</em></td></tr>' +
        '<tr><td>nous</td><td><em>allons</em></td><td><em>faisons</em></td><td><em>venons</em></td></tr>' +
        '<tr><td>vous</td><td><em>allez</em></td><td><em>faites</em></td><td><em>venez</em></td></tr>' +
        '<tr><td>ils/elles</td><td><em>vont</em></td><td><em>font</em></td><td><em>viennent</em></td></tr>' +
        '</table><br>' +
        '<table class="gram-table">' +
        '<tr><th></th><th>pouvoir (können)</th><th>vouloir (wollen)</th><th>prendre (nehmen)</th></tr>' +
        '<tr><td>je/j\'</td><td><em>peux</em></td><td><em>veux</em></td><td><em>prends</em></td></tr>' +
        '<tr><td>tu</td><td><em>peux</em></td><td><em>veux</em></td><td><em>prends</em></td></tr>' +
        '<tr><td>il/elle</td><td><em>peut</em></td><td><em>veut</em></td><td><em>prend</em></td></tr>' +
        '<tr><td>nous</td><td><em>pouvons</em></td><td><em>voulons</em></td><td><em>prenons</em></td></tr>' +
        '<tr><td>vous</td><td><em>pouvez</em></td><td><em>voulez</em></td><td><em>prenez</em></td></tr>' +
        '<tr><td>ils/elles</td><td><em>peuvent</em></td><td><em>veulent</em></td><td><em>prennent</em></td></tr>' +
        '</table><br>' +
        '<strong>Tipp:</strong> <em>pouvoir</em> + Infinitiv = können: <em>Je peux vous aider.</em><br>' +
        '<strong>Tipp:</strong> <em>vouloir</em> + Infinitiv = wollen: <em>Je voudrais une table.</em>',
      beispiele: [
        { fr: 'Je vais à la plage.', de: 'Ich gehe zum Strand.' },
        { fr: "Qu'est-ce que tu fais?", de: 'Was machst du?' },
        { fr: 'Il vient de Paris.', de: 'Er kommt aus Paris.' },
        { fr: 'Vous pouvez m\'aider?', de: 'Können Sie mir helfen?' },
        { fr: 'Je voudrais une table pour deux.', de: 'Ich hätte gern einen Tisch für zwei.' },
        { fr: 'On prend le bus.', de: 'Wir nehmen den Bus.' }
      ],
      uebungen: [
        {
          typ: 'luecke',
          frage: 'Je ___ (aller) à la plage demain. (Ich gehe morgen zum Strand.)',
          optionen: ['vas', 'vais', 'va', 'allons'],
          antwort: 1,
          erklaerung: 'aller: je → vais'
        },
        {
          typ: 'luecke',
          frage: "Qu'est-ce que vous ___ (faire) ce soir? (Was machen Sie heute Abend?)",
          optionen: ['faites', 'fait', 'faisez', 'font'],
          antwort: 0,
          erklaerung: 'faire: vous → faites (unregelmäßig!)'
        },
        {
          typ: 'luecke',
          frage: "Nous ___ (vouloir) deux cafés, s'il vous plaît.",
          optionen: ['voulez', 'voulons', 'veulent', 'veux'],
          antwort: 1,
          erklaerung: 'vouloir: nous → voulons'
        },
        {
          typ: 'luecke',
          frage: 'Tu ___ (pouvoir) m\'aider? (Kannst du mir helfen?)',
          optionen: ['peut', 'pouvez', 'peux', 'peuvent'],
          antwort: 2,
          erklaerung: 'pouvoir: tu → peux'
        },
        {
          typ: 'luecke',
          frage: 'Il ___ (prendre) le bus. (Er nimmt den Bus.)',
          optionen: ['prend', 'prends', 'prenons', 'prennent'],
          antwort: 0,
          erklaerung: 'prendre: il → prend (kein -s!)'
        },
        {
          typ: 'luecke',
          frage: 'Ils ___ (venir) à quelle heure? (Um wieviel Uhr kommen sie?)',
          optionen: ['viennent', 'venez', 'vient', 'venons'],
          antwort: 0,
          erklaerung: 'venir: ils → viennent'
        },
        {
          typ: 'zuordnung',
          frage: '"Ils vont au restaurant." — Was bedeutet "vont"?',
          optionen: ['sie haben', 'sie gehen', 'sie kommen', 'sie machen'],
          antwort: 1,
          erklaerung: 'aller: ils → vont = sie gehen'
        },
        {
          typ: 'richtigfalsch',
          frage: '"Je fait du sport" ist korrekt für "Ich mache Sport".',
          antwort: false,
          erklaerung: 'Falsch: faire → je fais (nicht je fait!)'
        }
      ]
    },

    // ── B1 ──

    {
      id: 'imparfait', level: 'B1', titel: 'Imparfait vs. Passé composé',
      erklaerung: 'Beide sind Vergangenheitsformen — aber mit unterschiedlicher Funktion:<br><br>' +
        '<strong>Passé composé</strong> → abgeschlossene Handlung, einmaliges Ereignis:<br>' +
        '→ <em>Il a plu hier.</em> (Es hat gestern geregnet.)<br>' +
        '→ <em>Elle est venue à 8h.</em> (Sie kam um 8 Uhr.)<br><br>' +
        '<strong>Imparfait</strong> → Zustand in der Vergangenheit, Gewohnheit, Hintergrund:<br>' +
        '→ <em>Il faisait beau.</em> (Es war schönes Wetter.)<br>' +
        '→ <em>Chaque jour, je marchais.</em> (Jeden Tag lief ich.)<br><br>' +
        '<strong>Imparfait bilden:</strong> nous-Form Präsens + Endungen -ais, -ais, -ait, -ions, -iez, -aient',
      beispiele: [
        { fr: 'Quand j\'étais enfant, j\'habitais à Lyon.', de: 'Als ich Kind war, wohnte ich in Lyon. (Zustand → Imparfait)' },
        { fr: "Hier, j'ai rencontré Marie.", de: 'Gestern traf ich Marie. (Ereignis → Passé composé)' },
        { fr: 'Il pleuvait quand je suis sorti.', de: 'Es regnete (Imparfait), als ich rausging (PC).' },
        { fr: 'Nous mangions toujours ensemble.', de: 'Wir aßen immer zusammen. (Gewohnheit → Imparfait)' }
      ],
      uebungen: [
        {
          typ: 'zuordnung',
          frage: '"Chaque matin, il buvait du café." — Welche Form ist das?',
          optionen: ['Passé composé (Ereignis)', 'Imparfait (Gewohnheit)', 'Futur (Zukunft)', 'Présent (Gegenwart)'],
          antwort: 1,
          erklaerung: '"Chaque matin" (jeden Morgen) zeigt Gewohnheit → Imparfait'
        },
        {
          typ: 'zuordnung',
          frage: '"Elle a téléphoné à 10h." — Welche Form ist das?',
          optionen: ['Imparfait', 'Passé composé', 'Présent', 'Futur'],
          antwort: 1,
          erklaerung: 'Einmaliges Ereignis (um 10 Uhr) → Passé composé'
        },
        {
          typ: 'richtigfalsch',
          frage: 'Das Imparfait benutzt man für einmalige abgeschlossene Ereignisse.',
          antwort: false,
          erklaerung: 'Nein — das ist das Passé composé. Imparfait = Zustände, Gewohnheiten, Hintergründe.'
        },
        {
          typ: 'luecke',
          frage: 'Quand j\'étais en France, je ___ (manger) du fromage chaque jour.',
          optionen: ['mangeais', 'ai mangé', 'mange', 'mangerais'],
          antwort: 0,
          erklaerung: '"chaque jour" (jeden Tag) = Gewohnheit → Imparfait: mangeais'
        },
        {
          typ: 'zuordnung',
          frage: '"Il pleuvait quand je suis sorti." — Welche Form ist "pleuvait"?',
          optionen: ['Présent', 'Passé composé', 'Imparfait', 'Futur'],
          antwort: 2,
          erklaerung: 'pleuvait = Imparfait — Hintergrundzustand (es regnete gerade, als…)'
        },
        {
          typ: 'richtigfalsch',
          frage: '"Hier soir, j\'ai regardé un film" steht im Imparfait.',
          antwort: false,
          erklaerung: '"j\'ai regardé" ist Passé composé — einmaliges abgeschlossenes Ereignis.'
        }
      ]
    },
    {
      id: 'futur', level: 'B1', titel: 'Futur simple — Zukunft',
      erklaerung: 'Das <strong>Futur simple</strong> drückt Zukünftiges aus (Pläne, Vorhersagen, Versprechen).<br><br>' +
        '<strong>Bildung:</strong> Infinitiv + Endungen<br>' +
        '<em>-ai, -as, -a, -ons, -ez, -ont</em><br><br>' +
        '• <em>parler →</em> je parlerai, tu parleras, il parlera…<br><br>' +
        '<strong>Unregelmäßige Stämme (wichtigste):</strong><br>' +
        '• être → <em>ser-</em>: je serai<br>' +
        '• avoir → <em>aur-</em>: j\'aurai<br>' +
        '• aller → <em>ir-</em>: j\'irai<br>' +
        '• faire → <em>fer-</em>: je ferai<br>' +
        '• venir → <em>viendr-</em>: je viendrai<br><br>' +
        '<strong>Tipp:</strong> Im Alltag nimmt man oft "aller + Infinitiv" (futur proche):<br>' +
        '→ <em>Je vais partir.</em> (Ich werde abfahren.) — einfacher!',
      beispiele: [
        { fr: "Demain, j'irai au marché.", de: 'Morgen werde ich auf den Markt gehen.' },
        { fr: 'Il fera beau ce weekend.', de: 'Es wird schönes Wetter am Wochenende sein.' },
        { fr: 'Nous partirons à 8h.', de: 'Wir werden um 8 Uhr abfahren.' },
        { fr: 'Tu seras contente!', de: 'Du wirst zufrieden sein!' },
        { fr: 'Je vous enverrai un email.', de: 'Ich werde Ihnen eine E-Mail schicken.' }
      ],
      uebungen: [
        {
          typ: 'luecke',
          frage: 'Je ___ (partir) demain. (Ich werde morgen abreisen.)',
          optionen: ['pars', 'partirai', 'partiras', 'suis parti'],
          antwort: 1,
          erklaerung: 'partir Futur: je partirai'
        },
        {
          typ: 'luecke',
          frage: 'Il ___ (être) médecin. (Er wird Arzt sein.)',
          optionen: ['sera', 'serai', 'seront', 'est'],
          antwort: 0,
          erklaerung: 'être Futur unregelmäßig: ser- + a → sera'
        },
        {
          typ: 'richtigfalsch',
          frage: '"Je vais manger" und "Je mangerai" drücken beide Zukunft aus.',
          antwort: true,
          erklaerung: 'Beides ist Zukunft. "vais manger" (futur proche) ist umgangssprachlicher.'
        },
        {
          typ: 'luecke',
          frage: 'Nous ___ (partir) en vacances la semaine prochaine.',
          optionen: ['partirez', 'partirons', 'partira', 'partirai'],
          antwort: 1,
          erklaerung: 'partir Futur: nous → partirons'
        },
        {
          typ: 'luecke',
          frage: 'Tu ___ (avoir) le temps demain? (Hast du morgen Zeit?)',
          optionen: ['auras', 'avras', 'aurai', 'auront'],
          antwort: 0,
          erklaerung: 'avoir Futur unregelmäßig: aur- + as → tu auras'
        },
        {
          typ: 'zuordnung',
          frage: 'Wie sagt man im Alltag "Ich werde essen" (futur proche)?',
          optionen: ['Je mangerai', 'Je vais manger', 'Je mange demain', 'Je voulais manger'],
          antwort: 1,
          erklaerung: 'Futur proche = aller (Präsens) + Infinitiv → je vais manger'
        }
      ]
    },
    {
      id: 'relativ', level: 'B1', titel: 'Relativpronomen: qui und que',
      erklaerung: 'Relativpronomen verbinden zwei Sätze und beziehen sich auf ein Nomen.<br><br>' +
        '<strong>qui</strong> = der/die/das (Subjekt im Relativsatz)<br>' +
        '→ Das Pronomen macht die Handlung: <em>L\'homme <u>qui</u> parle...</em> (Der Mann, der spricht...)<br><br>' +
        '<strong>que</strong> = den/die/das (Objekt im Relativsatz)<br>' +
        '→ Das Pronomen empfängt die Handlung: <em>Le livre <u>que</u> je lis...</em> (Das Buch, das ich lese...)<br><br>' +
        '<strong>Eselsbrücke:</strong><br>' +
        '• <em>qui</em> = subject → wer/was macht es?<br>' +
        '• <em>que</em> = object → wen/was betrifft es?<br><br>' +
        'Vor Vokal: <em>que → qu\'</em>',
      beispiele: [
        { fr: "C'est l'ami qui habite à Paris.", de: 'Das ist der Freund, der in Paris wohnt.' },
        { fr: "C'est le film que j'aime.", de: 'Das ist der Film, den ich mag.' },
        { fr: 'La femme qui chante est belle.', de: 'Die Frau, die singt, ist schön.' },
        { fr: "Le café qu'il boit est chaud.", de: 'Der Kaffee, den er trinkt, ist heiß.' }
      ],
      uebungen: [
        {
          typ: 'luecke',
          frage: "C'est le chien ___ aboie. (Das ist der Hund, der bellt.)",
          optionen: ['que', 'qui', "qu'", 'dont'],
          antwort: 1,
          erklaerung: '"aboie" = Verb → der Hund ist Subjekt → qui'
        },
        {
          typ: 'luecke',
          frage: "C'est la robe ___ je préfère. (Das ist das Kleid, das ich bevorzuge.)",
          optionen: ['qui', 'que', "qu'", 'dont'],
          antwort: 1,
          erklaerung: '"je préfère" hat schon ein Subjekt → la robe ist Objekt → que'
        },
        {
          typ: 'richtigfalsch',
          frage: '"Qui" ersetzt immer das Objekt eines Satzes.',
          antwort: false,
          erklaerung: '"Qui" ersetzt das Subjekt. Das Objekt wird durch "que" ersetzt.'
        },
        {
          typ: 'luecke',
          frage: 'Le restaurant ___ vous recommandez est excellent. (Das Restaurant, das Sie empfehlen…)',
          optionen: ['qui', 'que', "qu'", 'dont'],
          antwort: 1,
          erklaerung: '"vous recommandez" hat schon ein Subjekt → le restaurant ist Objekt → que'
        },
        {
          typ: 'luecke',
          frage: "J'ai une amie ___ habite à Nice. (Ich habe eine Freundin, die in Nizza wohnt.)",
          optionen: ['que', "qu'", 'qui', 'dont'],
          antwort: 2,
          erklaerung: '"habite" braucht ein Subjekt → l\'amie ist Subjekt → qui'
        },
        {
          typ: 'richtigfalsch',
          frage: 'Vor einem Vokal wird "que" zu "qu\'" (z.B. le film qu\'il aime).',
          antwort: true,
          erklaerung: 'Richtig: que + Vokal → qu\': le film qu\'il aime.'
        }
      ]
    }
  ];

    // ── B2 ──
    {
      id: 'subjonctif', level: 'B2', titel: 'Subjonctif présent — Konjunktiv',
      erklaerung: 'Der <strong>Subjonctif</strong> drückt Zweifel, Wunsch, Emotion, Notwendigkeit oder Ungewissheit aus. Er steht meist in Nebensätzen nach bestimmten Ausdrücken.<br><br>' +
        '<strong>Bildung:</strong> ils-Form Präsens (ohne -ent) + Endungen:<br>' +
        '<em>-e, -es, -e, -ions, -iez, -ent</em><br><br>' +
        '<strong>Beispiel: finir</strong> (ils finissent → finiss-)<br>' +
        '<table class="gram-table">' +
        '<tr><td>que je <em>finisse</em></td><td>que nous <em>finissions</em></td></tr>' +
        '<tr><td>que tu <em>finisses</em></td><td>que vous <em>finissiez</em></td></tr>' +
        '<tr><td>qu\'il <em>finisse</em></td><td>qu\'ils <em>finissent</em></td></tr>' +
        '</table><br>' +
        '<strong>Typische Auslöser:</strong><br>' +
        '• Wunsch: <em>vouloir que, souhaiter que, désirer que</em><br>' +
        '• Emotion: <em>être content(e) que, regretter que, avoir peur que</em><br>' +
        '• Notwendigkeit: <em>il faut que, il est nécessaire que</em><br>' +
        '• Zweifel: <em>douter que, ne pas croire que</em><br><br>' +
        '<strong>Unregelmäßige Formen (auswendig!):</strong><br>' +
        '• être → <em>que je sois</em><br>' +
        '• avoir → <em>que j\'aie</em><br>' +
        '• aller → <em>que j\'aille</em><br>' +
        '• faire → <em>que je fasse</em><br>' +
        '• pouvoir → <em>que je puisse</em><br>' +
        '• savoir → <em>que je sache</em><br>' +
        '• vouloir → <em>que je veuille</em>',
      beispiele: [
        { fr: 'Il faut que tu finisses tes devoirs.', de: 'Du musst deine Hausaufgaben beenden.' },
        { fr: 'Je veux que tu sois heureux.', de: 'Ich möchte, dass du glücklich bist.' },
        { fr: 'Elle regrette que nous partions.', de: 'Sie bedauert, dass wir abreisen.' },
        { fr: 'Il est possible qu\'il pleuve demain.', de: 'Es ist möglich, dass es morgen regnet.' },
        { fr: 'Je doute qu\'il ait raison.', de: 'Ich bezweifle, dass er recht hat.' }
      ],
      uebungen: [
        {
          typ: 'luecke',
          frage: 'Il faut que vous ___ (être) à l\'heure. (Sie müssen pünktlich sein.)',
          optionen: ['êtes', 'soyez', 'serez', 'étiez'],
          antwort: 1,
          erklaerung: 'être im Subjonctif: vous → soyez'
        },
        {
          typ: 'luecke',
          frage: 'Je veux qu\'il ___ (faire) la vaisselle. (Ich will, dass er abwäscht.)',
          optionen: ['fait', 'fera', 'fasse', 'faisait'],
          antwort: 2,
          erklaerung: 'faire im Subjonctif: il → fasse'
        },
        {
          typ: 'richtigfalsch',
          frage: 'Nach "je pense que" steht immer der Subjonctif.',
          antwort: false,
          erklaerung: '"je pense que" → Indikativ! Subjonctif erst bei "je ne pense pas que".'
        },
        {
          typ: 'luecke',
          frage: 'Il est possible que tu ___ (avoir) tort. (Es ist möglich, dass du unrecht hast.)',
          optionen: ['as', 'auras', 'aies', 'avais'],
          antwort: 2,
          erklaerung: 'avoir im Subjonctif: tu → aies'
        },
        {
          typ: 'zuordnung',
          frage: 'Nach welchem Ausdruck steht der Subjonctif?',
          optionen: ['Je sais que...', 'Il est certain que...', 'Il faut que...', 'Je pense que...'],
          antwort: 2,
          erklaerung: '"il faut que" drückt Notwendigkeit aus → immer Subjonctif'
        },
        {
          typ: 'luecke',
          frage: 'Elle veut que nous ___ (aller) au marché. (Sie will, dass wir auf den Markt gehen.)',
          optionen: ['allons', 'irons', 'allions', 'aillons'],
          antwort: 2,
          erklaerung: 'aller im Subjonctif: nous → allions (nous-Form: allons → all- + ions)'
        },
        {
          typ: 'richtigfalsch',
          frage: '"Bien que" (obwohl) löst den Subjonctif aus.',
          antwort: true,
          erklaerung: 'Richtig: "bien que tu sois fatigué" = obwohl du müde bist.'
        }
      ]
    },
    {
      id: 'conditionnel', level: 'B2', titel: 'Conditionnel présent — Konditional',
      erklaerung: 'Der <strong>Conditionnel</strong> drückt aus:<br>' +
        '1. Hypothetisches / Irreales (wenn … dann)<br>' +
        '2. Höfliche Bitten (je voudrais, pourriez-vous…)<br>' +
        '3. Informationen aus zweiter Hand (Il serait malade = Er soll krank sein)<br><br>' +
        '<strong>Bildung:</strong> Futur-Stamm + Imparfait-Endungen<br>' +
        '<em>-ais, -ais, -ait, -ions, -iez, -aient</em><br><br>' +
        '<strong>Beispiel: partir</strong><br>' +
        '<table class="gram-table">' +
        '<tr><td>je <em>partirais</em></td><td>nous <em>partirions</em></td></tr>' +
        '<tr><td>tu <em>partirais</em></td><td>vous <em>partiriez</em></td></tr>' +
        '<tr><td>il <em>partirait</em></td><td>ils <em>partiraient</em></td></tr>' +
        '</table><br>' +
        '<strong>Unregelmäßige Stämme</strong> (= gleich wie Futur):<br>' +
        '• être → <em>ser-</em>: je serais<br>' +
        '• avoir → <em>aur-</em>: j\'aurais<br>' +
        '• aller → <em>ir-</em>: j\'irais<br>' +
        '• faire → <em>fer-</em>: je ferais<br><br>' +
        '<strong>Si-Sätze (Typ II — Gegenwart irreal):</strong><br>' +
        'Si + Imparfait → Conditionnel présent<br>' +
        '→ <em>Si j\'avais le temps, j\'irais au cinéma.</em>',
      beispiele: [
        { fr: 'Je voudrais une table pour deux, s\'il vous plaît.', de: 'Ich hätte gern einen Tisch für zwei, bitte.' },
        { fr: 'Si j\'étais riche, j\'achèterais une maison.', de: 'Wenn ich reich wäre, würde ich ein Haus kaufen.' },
        { fr: 'Pourriez-vous m\'aider?', de: 'Könnten Sie mir helfen?' },
        { fr: 'Il serait malade, selon la presse.', de: 'Er soll laut Presse krank sein.' },
        { fr: 'Tu devrais te reposer.', de: 'Du solltest dich ausruhen.' }
      ],
      uebungen: [
        {
          typ: 'luecke',
          frage: 'Si j\'avais le temps, je ___ (voyager) plus. (Wenn ich Zeit hätte, würde ich mehr reisen.)',
          optionen: ['voyage', 'voyagerai', 'voyagerais', 'voyageais'],
          antwort: 2,
          erklaerung: 'Si + Imparfait → Conditionnel: je voyagerais'
        },
        {
          typ: 'luecke',
          frage: 'Je ___ (vouloir) un café, s\'il vous plaît. (Höfliche Bitte)',
          optionen: ['veux', 'voulais', 'voudrais', 'voudrai'],
          antwort: 2,
          erklaerung: 'Höfliche Form: je voudrais (Conditionnel von vouloir)'
        },
        {
          typ: 'richtigfalsch',
          frage: '"Si tu viendrais" ist grammatisch korrekt.',
          antwort: false,
          erklaerung: 'Falsch! Nach "si" steht Imparfait, nicht Conditionnel: "Si tu venais..."'
        },
        {
          typ: 'luecke',
          frage: 'Tu ___ (devoir) appeler le médecin. (Du solltest den Arzt anrufen.)',
          optionen: ['dois', 'devais', 'devrais', 'devras'],
          antwort: 2,
          erklaerung: 'devoir im Conditionnel: tu devrais = du solltest'
        },
        {
          typ: 'zuordnung',
          frage: '"Selon le journal, il y aurait eu un accident." — Welche Funktion hat "aurait"?',
          optionen: ['Hypothese', 'Höflichkeit', 'Information aus zweiter Hand', 'Rat'],
          antwort: 2,
          erklaerung: 'Conditionnel = nicht bestätigte Information (laut Presse/Gerücht)'
        },
        {
          typ: 'luecke',
          frage: 'Nous ___ (faire) une excursion si le temps était beau.',
          optionen: ['ferons', 'ferions', 'faisions', 'faisions'],
          antwort: 1,
          erklaerung: 'faire Conditionnel: nous ferions'
        }
      ]
    },
    {
      id: 'voix-passive', level: 'B2', titel: 'Voix passive — Passiv',
      erklaerung: 'Im Passiv rückt das Objekt in den Mittelpunkt. Der eigentliche Täter wird optional mit <em>par</em> angegeben.<br><br>' +
        '<strong>Bildung: être (konjugiert) + Partizip (participe passé)</strong><br>' +
        'Das Partizip stimmt im Genus/Numerus mit dem Subjekt überein!<br><br>' +
        '<strong>Zeiten im Passiv:</strong><br>' +
        '• Présent: <em>La lettre est écrite.</em> (Der Brief wird geschrieben.)<br>' +
        '• Passé composé: <em>La lettre a été écrite.</em> (Der Brief wurde geschrieben.)<br>' +
        '• Futur: <em>La lettre sera écrite.</em> (Der Brief wird geschrieben werden.)<br>' +
        '• Imparfait: <em>La lettre était écrite.</em> (Der Brief wurde [gerade] geschrieben.)<br><br>' +
        '<strong>Täter mit "par":</strong><br>' +
        '→ <em>Le gâteau a été mangé par les enfants.</em><br><br>' +
        '<strong>Alternativen zum Passiv:</strong><br>' +
        '• Aktiv mit "on": <em>On a réparé la voiture.</em> (Man hat das Auto repariert.)<br>' +
        '• Reflexiv: <em>Ça se dit.</em> (Das sagt man so.)',
      beispiele: [
        { fr: 'La maison est vendue.', de: 'Das Haus wird verkauft.' },
        { fr: 'Le voleur a été arrêté par la police.', de: 'Der Dieb wurde von der Polizei festgenommen.' },
        { fr: 'Les billets seront confirmés demain.', de: 'Die Tickets werden morgen bestätigt.' },
        { fr: 'La réunion était annulée.', de: 'Das Treffen war abgesagt.' },
        { fr: 'On parle français ici. / Le français est parlé ici.', de: 'Hier wird Französisch gesprochen.' }
      ],
      uebungen: [
        {
          typ: 'luecke',
          frage: 'La voiture ___ (réparer) par le mécanicien. (Das Auto wurde vom Mechaniker repariert.)',
          optionen: ['est réparé', 'a été réparée', 'est réparée', 'a été réparé'],
          antwort: 1,
          erklaerung: 'Passé composé passif: avoir été + réparée (voiture = weiblich → -e)'
        },
        {
          typ: 'richtigfalsch',
          frage: '"Les enfants sont aimés de leurs parents" — das ist korrekt passiv.',
          antwort: true,
          erklaerung: 'Richtig! Bei Empfindungsverben (aimer, respecter) kann man "de" statt "par" verwenden.'
        },
        {
          typ: 'luecke',
          frage: 'Le rapport ___ (écrire) demain. (Der Bericht wird morgen geschrieben werden.)',
          optionen: ['est écrit', 'sera écrit', 'a été écrit', 'était écrit'],
          antwort: 1,
          erklaerung: 'Zukunft passiv: sera écrit (rapport = männlich → kein -e)'
        },
        {
          typ: 'zuordnung',
          frage: 'Wie sagt man aktiv: "Les fenêtres ont été fermées par Marie"?',
          optionen: ['Marie ferme les fenêtres.', 'Marie a fermé les fenêtres.', 'Marie fermait les fenêtres.', 'Marie fermera les fenêtres.'],
          antwort: 1,
          erklaerung: 'ont été fermées = Passé composé passiv → aktiv: Marie a fermé (Passé composé)'
        },
        {
          typ: 'richtigfalsch',
          frage: '"On parle français ici" und "Le français est parlé ici" bedeuten dasselbe.',
          antwort: true,
          erklaerung: '"On" + Aktiv ist eine häufige Alternative zum Passiv im Französischen.'
        }
      ]
    },
    {
      id: 'pronoms-relatifs', level: 'B2', titel: 'Relativpronomen: dont, où, lequel',
      erklaerung: '<strong>dont</strong> — ersetzt "de + Nomen":<br>' +
        '• nach Verben mit <em>de</em>: parler de, avoir besoin de, se souvenir de<br>' +
        '→ <em>C\'est le livre <u>dont</u> j\'ai besoin.</em> (Das ist das Buch, das ich brauche.)<br>' +
        '→ <em>L\'ami <u>dont</u> je t\'ai parlé.</em> (Der Freund, von dem ich dir erzählt habe.)<br><br>' +
        '<strong>où</strong> — Ort oder Zeit:<br>' +
        '→ <em>La ville <u>où</u> j\'habite.</em> (Die Stadt, in der ich wohne.)<br>' +
        '→ <em>Le jour <u>où</u> il est arrivé.</em> (Der Tag, an dem er ankam.)<br><br>' +
        '<strong>lequel / laquelle / lesquels / lesquelles</strong> — nach Präpositionen (außer de):<br>' +
        '→ <em>La table sur <u>laquelle</u> j\'écris.</em> (Der Tisch, auf dem ich schreibe.)<br>' +
        '→ <em>Le stylo avec <u>lequel</u> il signe.</em> (Der Stift, mit dem er unterschreibt.)<br><br>' +
        '<strong>Verschmelzungen:</strong> à + lequel → <em>auquel</em> | de + lequel → <em>duquel</em>',
      beispiele: [
        { fr: 'C\'est le film dont tout le monde parle.', de: 'Das ist der Film, über den alle reden.' },
        { fr: 'La raison pour laquelle il est parti.', de: 'Der Grund, aus dem er gegangen ist.' },
        { fr: 'Le village où nous avons passé nos vacances.', de: 'Das Dorf, wo wir unseren Urlaub verbracht haben.' },
        { fr: 'C\'est l\'homme dont je connais la femme.', de: 'Das ist der Mann, dessen Frau ich kenne.' },
        { fr: 'L\'époque à laquelle il vivait.', de: 'Die Epoche, in der er lebte.' }
      ],
      uebungen: [
        {
          typ: 'luecke',
          frage: 'C\'est la ville ___ je viens. (Das ist die Stadt, aus der ich komme.)',
          optionen: ['que', 'qui', 'dont', 'où'],
          antwort: 2,
          erklaerung: '"venir de" → de ersetzt durch dont: la ville dont je viens'
        },
        {
          typ: 'luecke',
          frage: 'Le restaurant ___ nous mangeons est fermé le lundi. (Das Restaurant, in dem wir essen…)',
          optionen: ['que', 'qui', 'dont', 'où'],
          antwort: 3,
          erklaerung: 'Ortsangabe → où: le restaurant où nous mangeons'
        },
        {
          typ: 'luecke',
          frage: 'La chaise sur ___ tu es assis est fragile. (Der Stuhl, auf dem du sitzt, ist zerbrechlich.)',
          optionen: ['laquelle', 'lequel', 'que', 'qui'],
          antwort: 0,
          erklaerung: 'sur + chaise (weiblich) → sur laquelle'
        },
        {
          typ: 'richtigfalsch',
          frage: '"Dont" kann "dessen/deren" ausdrücken: "L\'homme dont la femme est médecin."',
          antwort: true,
          erklaerung: 'Richtig: dont = de + lequel → aussi "dessen/deren" bei Besitz.'
        },
        {
          typ: 'luecke',
          frage: 'Le problème ___ je t\'ai parlé est résolu. (Das Problem, von dem ich dir erzählt habe, ist gelöst.)',
          optionen: ['que', 'qui', 'dont', 'auquel'],
          antwort: 2,
          erklaerung: '"parler de" → dont: le problème dont je t\'ai parlé'
        },
        {
          typ: 'zuordnung',
          frage: '"À laquelle" ist die Verschmelzung von…?',
          optionen: ['de + laquelle', 'à + laquelle', 'en + laquelle', 'par + laquelle'],
          antwort: 1,
          erklaerung: 'à + laquelle bleibt à laquelle (nur de schmilzt zu "dont" oder "duquel")'
        }
      ]
    },
    {
      id: 'discours-indirect', level: 'B2', titel: 'Discours indirect — indirekte Rede',
      erklaerung: 'Im <strong>discours indirect</strong> gibt man wieder, was jemand gesagt hat — mit Zeitverschiebung der Tempi.<br><br>' +
        '<strong>Einleitung mit Präsens</strong> → keine Zeitverschiebung:<br>' +
        '→ Elle dit: "Je suis fatiguée." → Elle dit qu\'elle est fatiguée.<br><br>' +
        '<strong>Einleitung mit Vergangenheit</strong> → Tempi rücken zurück:<br>' +
        '<table class="gram-table">' +
        '<tr><th>Direkt</th><th>Indirekt (nach Vergangenheit)</th></tr>' +
        '<tr><td>Présent</td><td>→ Imparfait</td></tr>' +
        '<tr><td>Passé composé</td><td>→ Plus-que-parfait</td></tr>' +
        '<tr><td>Futur simple</td><td>→ Conditionnel présent</td></tr>' +
        '<tr><td>Futur proche</td><td>→ Aller (Imparfait) + Infinitif</td></tr>' +
        '</table><br>' +
        '<strong>Fragewörter ändern sich:</strong><br>' +
        '• Entscheidungsfrage: <em>si</em> → Il a demandé si tu venais.<br>' +
        '• W-Frage: unverändert → Il a demandé où tu habitais.<br>' +
        '• Qu\'est-ce que → ce que → Il a demandé ce que tu faisais.<br><br>' +
        '<strong>Pronomen & Zeitausdrücke ändern sich:</strong><br>' +
        'aujourd\'hui → ce jour-là | demain → le lendemain | hier → la veille',
      beispiele: [
        { fr: 'Il a dit: "Je pars demain." → Il a dit qu\'il partait le lendemain.', de: 'Er sagte: "Ich fahre morgen ab." → Er sagte, er fahre am nächsten Tag ab.' },
        { fr: 'Elle m\'a demandé: "Tu viens?" → Elle m\'a demandé si je venais.', de: 'Sie fragte mich: "Kommst du?" → Sie fragte mich, ob ich käme.' },
        { fr: 'Il a demandé: "Qu\'est-ce que tu fais?" → Il a demandé ce que je faisais.', de: 'Er fragte: "Was machst du?" → Er fragte, was ich mache.' }
      ],
      uebungen: [
        {
          typ: 'luecke',
          frage: 'Il a dit: "Je suis malade." → Il a dit qu\'il ___ malade.',
          optionen: ['est', 'était', 'sera', 'serait'],
          antwort: 1,
          erklaerung: 'Présent → Imparfait in der indirekten Rede nach Vergangenheit'
        },
        {
          typ: 'luecke',
          frage: 'Elle a demandé: "Tu as mangé?" → Elle a demandé si j\'___ mangé.',
          optionen: ['ai', 'avais', 'aurais', 'aurai'],
          antwort: 1,
          erklaerung: 'Passé composé → Plus-que-parfait: avais mangé'
        },
        {
          typ: 'richtigfalsch',
          frage: 'Nach "il dit que" (Präsens) muss das Tempus verschoben werden.',
          antwort: false,
          erklaerung: 'Nur nach Vergangenheitsform (il a dit, il disait) wird das Tempus verschoben.'
        },
        {
          typ: 'luecke',
          frage: '"Qu\'est-ce que tu veux?" → Elle a demandé ___ je voulais.',
          optionen: ['si', 'que', 'ce que', 'qu\'est-ce que'],
          antwort: 2,
          erklaerung: 'Qu\'est-ce que → ce que in der indirekten Rede'
        },
        {
          typ: 'zuordnung',
          frage: '"Demain" wird in der indirekten Rede (Vergangenheit) zu…?',
          optionen: ['aujourd\'hui', 'le lendemain', 'hier', 'la veille'],
          antwort: 1,
          erklaerung: 'demain → le lendemain (der nächste Tag)'
        }
      ]
    },
    {
      id: 'gerondif', level: 'B2', titel: 'Gérondif — gleichzeitige Handlung',
      erklaerung: 'Der <strong>Gérondif</strong> drückt aus, dass zwei Handlungen gleichzeitig stattfinden, oder gibt die Art und Weise an.<br><br>' +
        '<strong>Bildung: en + présent participe</strong><br>' +
        'Présent Participe = nous-Form (ohne -ons) + <em>-ant</em><br>' +
        '• parler → nous parlons → parl- + ant → <em>en parlant</em><br>' +
        '• finir → nous finissons → finiss- + ant → <em>en finissant</em><br>' +
        '• prendre → nous prenons → pren- + ant → <em>en prenant</em><br><br>' +
        '<strong>Unregelmäßig:</strong><br>' +
        '• être → <em>en étant</em><br>' +
        '• avoir → <em>en ayant</em><br>' +
        '• savoir → <em>en sachant</em><br><br>' +
        '<strong>Bedeutungen:</strong><br>' +
        '• Gleichzeitigkeit: <em>Il chante en travaillant.</em> (Er singt beim Arbeiten.)<br>' +
        '• Art und Weise: <em>Elle répond en souriant.</em> (Sie antwortet lächelnd.)<br>' +
        '• Bedingung: <em>En travaillant plus, tu réussiras.</em> (Wenn du mehr arbeitest, wirst du Erfolg haben.)',
      beispiele: [
        { fr: 'Il lit le journal en prenant son café.', de: 'Er liest die Zeitung beim Kaffeetrinken.' },
        { fr: 'Elle apprend le français en regardant des films.', de: 'Sie lernt Französisch, indem sie Filme schaut.' },
        { fr: 'En sortant, j\'ai vu Marie.', de: 'Als ich rausging, sah ich Marie.' },
        { fr: 'Il a répondu en souriant.', de: 'Er antwortete lächelnd.' },
        { fr: 'En faisant du sport régulièrement, tu resteras en forme.', de: 'Wenn du regelmäßig Sport machst, bleibst du fit.' }
      ],
      uebungen: [
        {
          typ: 'luecke',
          frage: 'Il écoute de la musique ___ (faire) la cuisine. (Er hört Musik beim Kochen.)',
          optionen: ['en faisant', 'en faisait', 'en fait', 'faire'],
          antwort: 0,
          erklaerung: 'Gérondif: en + faisant (faire → nous faisons → fais- + ant)'
        },
        {
          typ: 'richtigfalsch',
          frage: 'Das Subjekt des Gérondif muss immer gleich sein wie das Hauptsatz-Subjekt.',
          antwort: true,
          erklaerung: 'Richtig! "En travaillant" muss dieselbe Person betreffen wie das Hauptverb.'
        },
        {
          typ: 'luecke',
          frage: '___ (étudier) sérieusement, tu réussiras ton examen.',
          optionen: ['En étudiant', 'En étude', 'En étudié', 'En études'],
          antwort: 0,
          erklaerung: 'étudier → nous étudions → étudi- + ant → en étudiant'
        },
        {
          typ: 'zuordnung',
          frage: '"Elle a appris la nouvelle en lisant le journal." — Was drückt "en lisant" aus?',
          optionen: ['Absicht', 'Art und Weise / gleichzeitige Handlung', 'Vergangenheit', 'Bedingung'],
          antwort: 1,
          erklaerung: 'Sie hat die Neuigkeit erfahren, indem sie (gleichzeitig) die Zeitung las.'
        }
      ]
    },

    // ── C1 ──
    {
      id: 'subjonctif-passe', level: 'C1', titel: 'Subjonctif passé — Konjunktiv Vergangenheit',
      erklaerung: 'Der <strong>Subjonctif passé</strong> drückt eine abgeschlossene Handlung aus, die im Subjonctif steht.<br><br>' +
        '<strong>Bildung: avoir/être (Subjonctif présent) + participe passé</strong><br><br>' +
        '• Mit avoir: <em>que j\'aie mangé, que tu aies fini…</em><br>' +
        '• Mit être: <em>que je sois allé(e), que tu sois parti(e)…</em><br><br>' +
        '<strong>Verwendung:</strong><br>' +
        '→ Die gleichen Auslöser wie beim Subjonctif présent, aber die Handlung ist <em>bereits abgeschlossen</em>:<br>' +
        '• <em>Je suis content qu\'il soit venu.</em> (Ich bin froh, dass er gekommen ist.)<br>' +
        '• <em>Il est possible qu\'elle ait oublié.</em> (Es ist möglich, dass sie es vergessen hat.)<br>' +
        '• <em>Bien qu\'il ait beaucoup travaillé, il a échoué.</em> (Obwohl er viel gearbeitet hat, ist er gescheitert.)<br><br>' +
        '<strong>Sequenz:</strong><br>' +
        'Hauptsatz Gegenwart + Subjonctif passé → Nebensatz-Handlung liegt VOR dem Hauptsatz.',
      beispiele: [
        { fr: 'Je regrette qu\'il soit parti sans dire au revoir.', de: 'Es tut mir leid, dass er gegangen ist, ohne Auf Wiedersehen zu sagen.' },
        { fr: 'C\'est dommage que tu n\'aies pas pu venir.', de: 'Es ist schade, dass du nicht kommen konntest.' },
        { fr: 'Bien qu\'il ait plu, nous sommes sortis.', de: 'Obwohl es geregnet hat, sind wir ausgegangen.' },
        { fr: 'Je ne crois pas qu\'elle ait menti.', de: 'Ich glaube nicht, dass sie gelogen hat.' }
      ],
      uebungen: [
        {
          typ: 'luecke',
          frage: 'Je suis désolé qu\'il ___ (partir) si tôt. (Ich bin traurig, dass er so früh gegangen ist.)',
          optionen: ['est parti', 'soit parti', 'partait', 'soit partis'],
          antwort: 1,
          erklaerung: 'Subjonctif passé mit être: que il → soit parti'
        },
        {
          typ: 'luecke',
          frage: 'Il est possible qu\'elle ___ (oublier) notre rendez-vous. (Es ist möglich, dass sie unseren Termin vergessen hat.)',
          optionen: ['a oublié', 'ait oublié', 'aurait oublié', 'avait oublié'],
          antwort: 1,
          erklaerung: 'Subjonctif passé mit avoir: que elle → ait oublié'
        },
        {
          typ: 'richtigfalsch',
          frage: 'Subjonctif passé und Subjonctif présent haben dieselben Auslöser.',
          antwort: true,
          erklaerung: 'Richtig — der Unterschied liegt nur im Zeitverhältnis: abgeschlossen vs. gleichzeitig/zukünftig.'
        },
        {
          typ: 'luecke',
          frage: 'Bien qu\'il ___ (beaucoup travailler), il n\'a pas réussi.',
          optionen: ['ait beaucoup travaillé', 'a beaucoup travaillé', 'avait beaucoup travaillé', 'aurait travaillé'],
          antwort: 0,
          erklaerung: '"bien que" → immer Subjonctif + abgeschlossene Handlung → passé'
        }
      ]
    },
    {
      id: 'conditionnel-passe', level: 'C1', titel: 'Conditionnel passé — vergangene Hypothese',
      erklaerung: 'Der <strong>Conditionnel passé</strong> drückt aus:<br>' +
        '1. Was in der Vergangenheit gewesen wäre (Bedauern, Vorwurf, Irreales)<br>' +
        '2. Si-Sätze Typ III (Vergangenheit irreal)<br>' +
        '3. Nicht bestätigte vergangene Information<br><br>' +
        '<strong>Bildung: avoir/être (Conditionnel présent) + participe passé</strong><br>' +
        '• j\'aurais mangé, tu aurais fini, il serait allé…<br><br>' +
        '<strong>Si-Sätze Typ III:</strong><br>' +
        'Si + Plus-que-parfait → Conditionnel passé<br>' +
        '→ <em>Si j\'avais su, je ne serais pas venu.</em> (Wenn ich es gewusst hätte, wäre ich nicht gekommen.)<br><br>' +
        '<strong>Gemischte Si-Sätze (häufig!):</strong><br>' +
        'Si + Plus-que-parfait → Conditionnel présent<br>' +
        '→ <em>Si tu avais étudié, tu réussirais maintenant.</em> (Hättest du gelernt, würdest du jetzt Erfolg haben.)<br><br>' +
        '<strong>Vorwurf / Bedauern:</strong><br>' +
        '→ <em>Tu aurais dû m\'appeler.</em> (Du hättest mich anrufen sollen.)<br>' +
        '→ <em>J\'aurais voulu te voir.</em> (Ich hätte dich gerne gesehen.)',
      beispiele: [
        { fr: 'Si tu avais étudié, tu aurais réussi.', de: 'Wenn du gelernt hättest, hättest du bestanden.' },
        { fr: 'Il aurait dû prendre le train.', de: 'Er hätte den Zug nehmen sollen.' },
        { fr: 'Selon la police, il y aurait eu un accident.', de: 'Laut Polizei soll es einen Unfall gegeben haben.' },
        { fr: 'Sans ta aide, je n\'aurais pas réussi.', de: 'Ohne deine Hilfe hätte ich nicht geschafft.' },
        { fr: 'Elle serait arrivée plus tôt si elle n\'avait pas raté le bus.', de: 'Sie wäre früher angekommen, wenn sie den Bus nicht verpasst hätte.' }
      ],
      uebungen: [
        {
          typ: 'luecke',
          frage: 'Si tu m\'avais prévenu, je ___ (venir). (Wenn du mich gewarnt hättest, wäre ich gekommen.)',
          optionen: ['serais venu(e)', 'suis venu(e)', 'viendrai', 'venais'],
          antwort: 0,
          erklaerung: 'Si + Plus-que-parfait → Conditionnel passé: serais venu(e)'
        },
        {
          typ: 'luecke',
          frage: 'Il ___ (devoir) s\'excuser. (Er hätte sich entschuldigen sollen.)',
          optionen: ['devait', 'devrait', 'aurait dû', 'avait dû'],
          antwort: 2,
          erklaerung: 'Vorwurf/Bedauern Vergangenheit: aurait dû + Infinitiv'
        },
        {
          typ: 'richtigfalsch',
          frage: 'Nach "si" kann der Conditionnel passé stehen.',
          antwort: false,
          erklaerung: 'Nein! Nach "si" steht Plus-que-parfait (niemals Conditionnel). Der Conditionnel steht im Hauptsatz.'
        },
        {
          typ: 'zuordnung',
          frage: 'Typ III Si-Satz: Welche Kombination ist korrekt?',
          optionen: [
            'Si + Présent → Futur',
            'Si + Imparfait → Conditionnel présent',
            'Si + Plus-que-parfait → Conditionnel passé',
            'Si + Conditionnel → Conditionnel'
          ],
          antwort: 2,
          erklaerung: 'Typ III: Vergangenheit irreal → Si + PQP → Conditionnel passé'
        },
        {
          typ: 'luecke',
          frage: 'Sans ton aide, je ___ (échouer). (Ohne deine Hilfe wäre ich gescheitert.)',
          optionen: ['aurais échoué', 'avais échoué', 'échouerais', 'ai échoué'],
          antwort: 0,
          erklaerung: 'Conditionnel passé: aurais échoué'
        }
      ]
    },
    {
      id: 'plus-que-parfait', level: 'C1', titel: 'Plus-que-parfait — Vorvergangenheit',
      erklaerung: 'Das <strong>Plus-que-parfait</strong> (Plusquamperfekt) drückt aus, was <em>vor</em> einer anderen Vergangenheitshandlung geschehen ist.<br><br>' +
        '<strong>Bildung: avoir/être (Imparfait) + participe passé</strong><br>' +
        '• j\'avais mangé, tu avais fini, il était allé…<br><br>' +
        '<table class="gram-table">' +
        '<tr><th>Pronomen</th><th>avoir</th><th>être (aller)</th></tr>' +
        '<tr><td>je</td><td>j\'avais mangé</td><td>j\'étais allé(e)</td></tr>' +
        '<tr><td>tu</td><td>tu avais fini</td><td>tu étais parti(e)</td></tr>' +
        '<tr><td>il/elle</td><td>il avait pris</td><td>elle était venue</td></tr>' +
        '<tr><td>nous</td><td>nous avions vu</td><td>nous étions sortis</td></tr>' +
        '</table><br>' +
        '<strong>Verwendung:</strong><br>' +
        '1. Vorvergangenheit: <em>Il était déjà parti quand j\'ai appelé.</em> (Er war schon weg, als ich anrief.)<br>' +
        '2. In Si-Sätzen Typ III: Si j\'avais su…<br>' +
        '3. In der indirekten Rede (nach Vergangenheit, statt Passé composé)',
      beispiele: [
        { fr: 'Quand nous sommes arrivés, il avait déjà mangé.', de: 'Als wir ankamen, hatte er schon gegessen.' },
        { fr: 'Elle ne savait pas qu\'il était parti.', de: 'Sie wusste nicht, dass er gegangen war.' },
        { fr: 'J\'avais oublié mes clés — j\'ai dû rentrer.', de: 'Ich hatte meine Schlüssel vergessen — ich musste zurück.' },
        { fr: 'Si j\'avais su, j\'aurais agi différemment.', de: 'Wenn ich es gewusst hätte, hätte ich anders gehandelt.' }
      ],
      uebungen: [
        {
          typ: 'luecke',
          frage: 'Quand il est arrivé, elle ___ (partir) déjà. (Als er ankam, war sie schon gegangen.)',
          optionen: ['est partie', 'partait', 'était partie', 'avait partie'],
          antwort: 2,
          erklaerung: 'Vorvergangenheit + être: était partie (partir = Bewegungsverb)'
        },
        {
          typ: 'luecke',
          frage: 'Je ne savais pas qu\'il ___ (mentir). (Ich wusste nicht, dass er gelogen hatte.)',
          optionen: ['mentait', 'a menti', 'avait menti', 'aurait menti'],
          antwort: 2,
          erklaerung: 'Indirekte Rede nach Vergangenheit: Passé composé → Plus-que-parfait'
        },
        {
          typ: 'richtigfalsch',
          frage: 'Das Plus-que-parfait drückt die "Vergangenheit der Vergangenheit" aus.',
          antwort: true,
          erklaerung: 'Genau — es liegt zeitlich VOR einer anderen Vergangenheitsform (PC oder Imparfait).'
        },
        {
          typ: 'luecke',
          frage: 'Si tu ___ (écouter), tu n\'aurais pas fait d\'erreur.',
          optionen: ['écoutais', 'avais écouté', 'aurais écouté', 'as écouté'],
          antwort: 1,
          erklaerung: 'Si Typ III: Si + Plus-que-parfait → avais écouté'
        },
        {
          typ: 'zuordnung',
          frage: 'Was ist die Bildung des Plus-que-parfait?',
          optionen: [
            'avoir/être (Présent) + participe passé',
            'avoir/être (Imparfait) + participe passé',
            'avoir/être (Conditionnel) + participe passé',
            'avoir/être (Futur) + participe passé'
          ],
          antwort: 1,
          erklaerung: 'PQP = Hilfsverb im Imparfait + participe passé'
        }
      ]
    },
    {
      id: 'pronoms-y-en', level: 'C1', titel: 'Pronomen y und en',
      erklaerung: '<strong>y</strong> — ersetzt:<br>' +
        '1. Ort mit Präposition <em>à, dans, en, sur</em>…:<br>' +
        '→ <em>Je vais à Paris. → J\'y vais.</em> (Ich gehe dorthin.)<br>' +
        '2. Ergänzung mit <em>à</em> + Sache (nicht Person!):<br>' +
        '→ <em>Je pense à ce problème. → J\'y pense.</em> (Ich denke daran.)<br><br>' +
        '<strong>en</strong> — ersetzt:<br>' +
        '1. Ort mit <em>de</em> (Herkunft):<br>' +
        '→ <em>Elle vient de Paris. → Elle en vient.</em> (Sie kommt von dort.)<br>' +
        '2. Ergänzung mit <em>de</em> + Sache:<br>' +
        '→ <em>Il parle de ce film. → Il en parle.</em> (Er spricht davon.)<br>' +
        '3. Mengangabe (mit Zahl):<br>' +
        '→ <em>J\'ai trois chats. → J\'en ai trois.</em> (Ich habe drei davon.)<br><br>' +
        '<strong>Reihenfolge mehrerer Pronomen:</strong><br>' +
        'me/te/se/nous/vous → le/la/les → lui/leur → y → en<br>' +
        '→ <em>Il me l\'a donné.</em> | <em>Il y en a.</em>',
      beispiele: [
        { fr: 'Tu vas au marché? — Oui, j\'y vais.', de: 'Gehst du auf den Markt? — Ja, ich gehe dorthin.' },
        { fr: 'Tu as des frères? — Oui, j\'en ai deux.', de: 'Hast du Geschwister? — Ja, ich habe zwei.' },
        { fr: 'Il pense à ses vacances. → Il y pense.', de: 'Er denkt an seinen Urlaub. → Er denkt daran.' },
        { fr: 'Elle vient de Lyon. → Elle en vient.', de: 'Sie kommt aus Lyon. → Sie kommt von dort.' },
        { fr: 'Il y en a beaucoup dans ce quartier.', de: 'Es gibt davon viele in diesem Viertel.' }
      ],
      uebungen: [
        {
          typ: 'luecke',
          frage: 'Tu penses à ce projet? — Oui, j\'___ pense. (Ja, ich denke daran.)',
          optionen: ['y', 'en', 'le', 'lui'],
          antwort: 0,
          erklaerung: 'penser à + Sache → y: j\'y pense'
        },
        {
          typ: 'luecke',
          frage: 'Tu as du pain? — Oui, j\'___ ai acheté ce matin. (Ja, ich habe heute Morgen welches gekauft.)',
          optionen: ['y', 'en', 'le', 'lui'],
          antwort: 1,
          erklaerung: 'Mengangabe (du pain = partitif) → en: j\'en ai acheté'
        },
        {
          typ: 'richtigfalsch',
          frage: '"Y" kann Personen ersetzen bei Verben mit "à".',
          antwort: false,
          erklaerung: 'Nein! Bei Personen mit "à" nimmt man lui/leur, nicht y. Y = nur für Sachen/Orte.'
        },
        {
          typ: 'luecke',
          frage: 'Combien de cafés veux-tu? — J\'___ veux deux. (Ich möchte zwei davon.)',
          optionen: ['y', 'en', 'les', 'lui'],
          antwort: 1,
          erklaerung: 'Zahl + Menge → en: j\'en veux deux'
        },
        {
          typ: 'luecke',
          frage: 'Tu vas souvent en France? — Oui, j\'___ vais chaque été.',
          optionen: ['en', 'y', 'lui', 'le'],
          antwort: 1,
          erklaerung: 'Ort (en France = Ziel) → y: j\'y vais'
        },
        {
          typ: 'zuordnung',
          frage: '"Il parle de ce livre." → Ersetze "de ce livre" korrekt:',
          optionen: ['Il lui parle.', 'Il y parle.', 'Il en parle.', 'Il le parle.'],
          antwort: 2,
          erklaerung: 'parler de + Sache → en: il en parle'
        }
      ]
    },
    {
      id: 'accord-participe', level: 'C1', titel: 'Accord du participe passé — Angleichung',
      erklaerung: 'Das <strong>Partizip</strong> im Passé composé kann sich angleichen — die Regeln sind komplex.<br><br>' +
        '<strong>Mit être:</strong> Partizip stimmt mit dem Subjekt überein (Genus + Numerus).<br>' +
        '→ Elle est <em>partie</em>. | Ils sont <em>partis</em>. | Elles sont <em>parties</em>.<br><br>' +
        '<strong>Mit avoir:</strong> Partizip stimmt mit dem <em>vorangestellten direkten Objekt</em> überein.<br>' +
        '→ Les fleurs que j\'ai <em>achetées</em>. (que = les fleurs, weiblich Plural)<br>' +
        '→ Je les ai <em>vues</em>. (les = Frauen, weiblich Plural)<br>' +
        '→ Kein vorangestelltes Objekt → keine Angleichung: J\'ai mangé une pomme.<br><br>' +
        '<strong>Reflexive Verben:</strong> meist Angleichung mit dem Subjekt,<br>' +
        '<em>außer</em> das reflexive Pronomen ist indirektes Objekt:<br>' +
        '→ Elle s\'est lavée. (se laver = sich waschen — reflexiv direkt → Angleichung)<br>' +
        '→ Elle s\'est lavé les mains. (se laver les mains — les mains = direkt, kommt nach → keine Angleichung)<br><br>' +
        '<strong>Besondere Fälle:</strong><br>' +
        '• "en" → keine Angleichung: Des fleurs? J\'en ai acheté.<br>' +
        '• Infinitivkonstruktion: La chanson que j\'ai entendu chanter. (chanter ist der eigentliche Infinitiv)',
      beispiele: [
        { fr: 'Les lettres que j\'ai écrites.', de: 'Die Briefe, die ich geschrieben habe. (que = les lettres, weibl. Pl. → écrites)' },
        { fr: 'Elle s\'est trompée.', de: 'Sie hat sich geirrt. (reflexiv direkt → Angleichung)' },
        { fr: 'Nous les avons vus, tes amis.', de: 'Wir haben sie gesehen, deine Freunde. (les = masc. Pl. → vus)' },
        { fr: 'Des pommes? J\'en ai mangé.', de: 'Äpfel? Ich habe welche gegessen. (en → keine Angleichung)' }
      ],
      uebungen: [
        {
          typ: 'luecke',
          frage: 'Les filles sont ___ (partir) très tôt. (Die Mädchen sind sehr früh aufgebrochen.)',
          optionen: ['parti', 'partis', 'parties', 'partie'],
          antwort: 2,
          erklaerung: 'être + Subjekt weibl. Plural (les filles) → parties'
        },
        {
          typ: 'luecke',
          frage: 'La robe que tu as ___ (acheter) est magnifique.',
          optionen: ['acheté', 'achetée', 'achetés', 'achetées'],
          antwort: 1,
          erklaerung: 'que = la robe (weibl. Sing., vorangestellt) → achetée'
        },
        {
          typ: 'richtigfalsch',
          frage: '"J\'ai mangé des pommes" → Das Partizip bleibt unveränderlich: "mangé".',
          antwort: true,
          erklaerung: 'Richtig — kein vorangestelltes direktes Objekt → keine Angleichung.'
        },
        {
          typ: 'luecke',
          frage: 'Elle s\'est ___ (blesser) au bras. (Sie hat sich am Arm verletzt.)',
          optionen: ['blessé', 'blessée', 'blessés', 'blessées'],
          antwort: 0,
          erklaerung: 'se blesser + direktes Objekt "au bras" → das reflexive Pronomen ist INDIREKT → keine Angleichung'
        },
        {
          typ: 'luecke',
          frage: 'Des livres? Il en a ___ (lire) beaucoup. (Bücher? Er hat viele gelesen.)',
          optionen: ['lu', 'lus', 'lue', 'lues'],
          antwort: 0,
          erklaerung: 'en als Objekt → keine Angleichung → lu'
        }
      ]
    },
    {
      id: 'connecteurs', level: 'C1', titel: 'Connecteurs logiques — Verknüpfung von Ideen',
      erklaerung: 'Konnektoren strukturieren Texte und Argumente. Auf C1-Niveau erwartet man Präzision:<br><br>' +
        '<strong>Ursache / Grund:</strong><br>' +
        '• <em>puisque</em> (da, weil — bekannte Tatsache): Puisque tu es là, aide-moi.<br>' +
        '• <em>étant donné que</em> (angesichts der Tatsache, dass)<br>' +
        '• <em>vu que</em> (in Anbetracht von)<br>' +
        '• <em>d\'autant plus que</em> (umso mehr als)<br><br>' +
        '<strong>Einräumung / Gegensatz:</strong><br>' +
        '• <em>bien que / quoique</em> + Subjonctif (obwohl)<br>' +
        '• <em>même si</em> + Indikativ (selbst wenn)<br>' +
        '• <em>pourtant, cependant, néanmoins</em> (dennoch, jedoch, nichtsdestotrotz)<br>' +
        '• <em>or</em> (nun aber — Wendepunkt im Argument)<br><br>' +
        '<strong>Folge / Schlussfolgerung:</strong><br>' +
        '• <em>donc, ainsi, par conséquent, de ce fait, c\'est pourquoi</em><br>' +
        '• <em>si bien que</em> + Indikativ (so dass)<br>' +
        '• <em>de sorte que</em> + Subjonctif (so dass / damit)<br><br>' +
        '<strong>Einschränkung:</strong><br>' +
        '• <em>à condition que</em> + Subjonctif (vorausgesetzt, dass)<br>' +
        '• <em>à moins que</em> + Subjonctif (außer wenn)',
      beispiele: [
        { fr: 'Puisque tu le sais, dis-le-moi.', de: 'Da du es weißt, sag es mir.' },
        { fr: 'Bien qu\'il soit fatigué, il continue à travailler.', de: 'Obwohl er müde ist, arbeitet er weiter.' },
        { fr: 'Il a raté son examen; c\'est pourquoi il est triste.', de: 'Er hat seine Prüfung nicht bestanden; deshalb ist er traurig.' },
        { fr: 'Il viendra, à condition que vous l\'invitiez.', de: 'Er wird kommen, vorausgesetzt, Sie laden ihn ein.' },
        { fr: 'Or, les résultats montrent le contraire.', de: 'Nun aber zeigen die Ergebnisse das Gegenteil.' }
      ],
      uebungen: [
        {
          typ: 'zuordnung',
          frage: '"Bien que" löst aus…?',
          optionen: ['Indikativ', 'Subjonctif', 'Conditionnel', 'Infinitif'],
          antwort: 1,
          erklaerung: '"bien que" (obwohl) → immer Subjonctif: bien qu\'il soit…'
        },
        {
          typ: 'luecke',
          frage: 'Il était tard; ___ (deshalb/folglich), nous sommes rentrés.',
          optionen: ['pourtant', 'cependant', 'c\'est pourquoi', 'puisque'],
          antwort: 2,
          erklaerung: '"c\'est pourquoi" = deshalb/folglich (Schlussfolgerung)'
        },
        {
          typ: 'zuordnung',
          frage: 'Was ist der Unterschied zwischen "parce que" und "puisque"?',
          optionen: [
            'Kein Unterschied',
            '"parce que" gibt neue Info, "puisque" verweist auf Bekanntes',
            '"puisque" gibt neue Info, "parce que" verweist auf Bekanntes',
            '"puisque" braucht Subjonctif'
          ],
          antwort: 1,
          erklaerung: '"parce que" → Erklärung/neue Info. "puisque" → bereits bekannte/offensichtliche Tatsache.'
        },
        {
          typ: 'luecke',
          frage: 'Je t\'aiderai ___ (vorausgesetzt, dass) tu fasses un effort.',
          optionen: ['bien que', 'à condition que', 'même si', 'à moins que'],
          antwort: 1,
          erklaerung: '"à condition que" + Subjonctif = vorausgesetzt, dass'
        },
        {
          typ: 'richtigfalsch',
          frage: '"Or" am Satzanfang markiert eine Folge/Schlussfolgerung.',
          antwort: false,
          erklaerung: '"Or" markiert einen Wendepunkt oder Widerspruch im Argument (nun aber / allerdings).'
        }
      ]
    },

    // ── C2 ──
    {
      id: 'passe-simple', level: 'C2', titel: 'Passé simple — Literarische Vergangenheit',
      erklaerung: 'Das <strong>Passé simple</strong> ist die Schriftsprache-Vergangenheit: Romane, Märchen, historische Texte, offizielle Berichte. Im Gespräch verwendet man stattdessen das Passé composé.<br><br>' +
        '<strong>Bildung — -er Verben:</strong> Stamm + <em>-ai, -as, -a, -âmes, -âtes, -èrent</em><br>' +
        '→ parler: je parlai, tu parlas, il parla, nous parlâmes, vous parlâtes, ils parlèrent<br><br>' +
        '<strong>Bildung — -ir/-re Verben:</strong> Stamm + <em>-is, -is, -it, -îmes, -îtes, -irent</em><br>' +
        '→ finir: je finis, tu finis, il finit… | prendre: je pris, il prit…<br><br>' +
        '<strong>Bildung — u-Typ (viele unregelmäßige):</strong> Stamm + <em>-us, -us, -ut, -ûmes, -ûtes, -urent</em><br>' +
        '→ avoir: j\'eus, tu eus, il eut | être: je fus, tu fus, il fut<br>' +
        '→ venir: je vins, tu vins, il vint, nous vînmes, ils vinrent<br><br>' +
        '<strong>Häufigste unregelmäßige Formen:</strong><br>' +
        '• être: il fut | avoir: il eut | faire: il fit | aller: il alla<br>' +
        '• venir: il vint | voir: il vit | pouvoir: il put | savoir: il sut',
      beispiele: [
        { fr: 'Il se leva et sortit sans dire un mot.', de: 'Er stand auf und ging, ohne ein Wort zu sagen.' },
        { fr: 'La reine parla d\'une voix ferme.', de: 'Die Königin sprach mit fester Stimme.' },
        { fr: 'Ils arrivèrent au château au coucher du soleil.', de: 'Sie kamen bei Sonnenuntergang am Schloss an.' },
        { fr: 'Ce fut un moment inoubliable.', de: 'Es war ein unvergesslicher Moment.' },
        { fr: 'Il vit la lumière et comprit tout.', de: 'Er sah das Licht und verstand alles.' }
      ],
      uebungen: [
        {
          typ: 'zuordnung',
          frage: 'In welchem Kontext benutzt man das Passé simple?',
          optionen: ['Gespräch / Alltag', 'Literatur, Romane, Historisches', 'Höfliche Bitten', 'Zukunft ausdrücken'],
          antwort: 1,
          erklaerung: 'Passé simple = Schriftsprache. Im Gespräch: Passé composé.'
        },
        {
          typ: 'luecke',
          frage: '"faire" im Passé simple — il…?',
          optionen: ['faisit', 'fit', 'fait', 'ferait'],
          antwort: 1,
          erklaerung: 'faire Passé simple: je fis, tu fis, il fit (unregelmäßig!)'
        },
        {
          typ: 'luecke',
          frage: '"parler" im Passé simple — ils…?',
          optionen: ['parlirent', 'parlèrent', 'parlaient', 'parlèrent'],
          antwort: 1,
          erklaerung: '-er Verben Passé simple: ils parlèrent (Endung -èrent)'
        },
        {
          typ: 'richtigfalsch',
          frage: '"Il fut" ist die Passé-simple-Form von "être".',
          antwort: true,
          erklaerung: 'Richtig: être → je fus, tu fus, il fut, nous fûmes, vous fûtes, ils furent'
        },
        {
          typ: 'zuordnung',
          frage: '"Il vint, il vit, il vainquit" — aus welchen Verben kommen diese Formen?',
          optionen: ['avoir, être, faire', 'venir, voir, vaincre', 'vouloir, viser, vendre', 'vivre, voler, valoir'],
          antwort: 1,
          erklaerung: 'venir → vint | voir → vit | vaincre → vainquit'
        },
        {
          typ: 'luecke',
          frage: '"venir" im Passé simple — nous…?',
          optionen: ['venions', 'vinrent', 'vînmes', 'venûmes'],
          antwort: 2,
          erklaerung: 'venir Passé simple: je vins, tu vins, il vint, nous vînmes, vous vîntes, ils vinrent'
        }
      ]
    },
    {
      id: 'subjonctif-imparfait', level: 'C2', titel: 'Subjonctif imparfait — Literarische Form',
      erklaerung: 'Der <strong>Subjonctif imparfait</strong> ist eine veraltete, literarische Form, die man vor allem in klassischen Texten (19./frühen 20. Jhd.) trifft. Modern ersetzt man ihn durch Subjonctif présent oder passé.<br><br>' +
        '<strong>Bildung:</strong> Passé-simple-Stamm + Endungen<br>' +
        '• -er Verben: <em>-asse, -asses, -ât, -assions, -assiez, -assent</em><br>' +
        '  parler (Ps: parla-) → je parlasse, il parlât<br>' +
        '• -ir/-re Verben: <em>-isse, -isses, -ît, …</em><br>' +
        '  finir (Ps: fini-) → je finisse, il finît | prendre (Ps: pri-) → il prît<br>' +
        '• u-Typ: <em>-usse, -usses, -ût, …</em><br>' +
        '  avoir (Ps: eu-) → il eût | être (Ps: fu-) → il fût<br><br>' +
        '<strong>Erkennen ist wichtiger als Produzieren!</strong><br>' +
        'Die Form mit Zirkumflex (ê, â, î, û) in der 3. Person Singular ist das Erkennungsmerkmal:<br>' +
        '→ <em>il fût, il parlât, il finît, il prît, il eût</em><br><br>' +
        '<strong>Subjonctif plus-que-parfait:</strong><br>' +
        'Avoir/être (Subjonctif imparfait) + participe passé<br>' +
        '→ <em>qu\'il eût parlé, qu\'elle fût partie</em>',
      beispiele: [
        { fr: 'Il fallait qu\'il partît immédiatement. (literarisch)', de: 'Es war notwendig, dass er sofort aufbreche. (Modern: parte)' },
        { fr: 'Bien qu\'il fût fatigué, il continua. (literarisch)', de: 'Obwohl er müde war, fuhr er fort. (Modern: soit)' },
        { fr: 'Elle voulait qu\'il eût fini avant minuit. (literarisch)', de: 'Sie wollte, dass er vor Mitternacht fertig sei. (Modern: ait fini)' },
        { fr: 'C\'était le plus bel endroit qu\'il eût jamais vu. (literarisch)', de: 'Es war der schönste Ort, den er je gesehen hatte.' }
      ],
      uebungen: [
        {
          typ: 'zuordnung',
          frage: 'Woran erkennt man den Subjonctif imparfait in der 3. Person Singular?',
          optionen: [
            'An der Endung -ait',
            'Am Zirkumflex (â, ê, î, û) über dem letzten Vokal vor -t',
            'Am fehlenden -s',
            'An der Endung -ait'
          ],
          antwort: 1,
          erklaerung: 'Erkennungsmerkmal: il parlât, il fût, il eût — Zirkumflex!'
        },
        {
          typ: 'richtigfalsch',
          frage: 'Im modernen Alltag benutzt man den Subjonctif imparfait normal.',
          antwort: false,
          erklaerung: 'Nein — er ist veraltet und wirkt heute geschwollen/komisch. Nur in literarischen Texten aktiv gebraucht.'
        },
        {
          typ: 'zuordnung',
          frage: '"Il eût parlé" ist welche Form?',
          optionen: ['Conditionnel passé', 'Subjonctif plus-que-parfait', 'Passé simple', 'Subjonctif présent'],
          antwort: 1,
          erklaerung: 'avoir (Subjonctif imparfait: eût) + parlé = Subjonctif plus-que-parfait'
        },
        {
          typ: 'richtigfalsch',
          frage: '"Bien qu\'il fût fatigué" — modern würde man "bien qu\'il soit fatigué" sagen.',
          antwort: true,
          erklaerung: 'Richtig: Subjonctif imparfait (fût) → moderner Ersatz: Subjonctif présent (soit)'
        }
      ]
    },
    {
      id: 'nominalisation', level: 'C2', titel: 'Nominalisation — Substantivierung',
      erklaerung: 'Die <strong>Nominalisation</strong> ist ein zentrales Stilmerkmal des gehobenen Schriftfranzösisch. Verben und Adjektive werden zu Substantiven umgewandelt, um Sätze zu verdichten.<br><br>' +
        '<strong>Verb → Substantiv:</strong><br>' +
        '• décider → la décision<br>' +
        '• augmenter → l\'augmentation<br>' +
        '• partir → le départ<br>' +
        '• réaliser → la réalisation<br>' +
        '• améliorer → l\'amélioration<br><br>' +
        '<strong>Adjektiv → Substantiv:</strong><br>' +
        '• libre → la liberté<br>' +
        '• fort → la force<br>' +
        '• capable → la capacité<br>' +
        '• efficace → l\'efficacité<br><br>' +
        '<strong>Wann?</strong><br>' +
        '• Formelle Texte, Zeitungssprache, wissenschaftliches Schreiben<br>' +
        '• "Leur arrivée a surpris tout le monde." statt "Ils sont arrivés et ça a surpris tout le monde."<br><br>' +
        '<strong>Häufige Suffixe:</strong><br>' +
        '• Verben: -tion/-sion, -ment, -age, -ance/-ence, -ure, -ée<br>' +
        '• Adjektive: -ité/-té, -esse, -eur/-eur, -ance/-ence',
      beispiele: [
        { fr: 'La montée des prix inquiète les consommateurs.', de: 'Der Preisanstieg beunruhigt die Verbraucher. (statt: les prix montent et ça inquiète…)' },
        { fr: 'Son refus de coopérer a tout bloqué.', de: 'Seine Weigerung zu kooperieren hat alles blockiert.' },
        { fr: 'La mise en œuvre du projet est en cours.', de: 'Die Umsetzung des Projekts ist im Gange.' },
        { fr: 'L\'amélioration des conditions de travail est prioritaire.', de: 'Die Verbesserung der Arbeitsbedingungen hat Priorität.' }
      ],
      uebungen: [
        {
          typ: 'zuordnung',
          frage: 'Welches Substantiv entspricht dem Verb "partir"?',
          optionen: ['la partance', 'le départ', 'la partie', 'le partage'],
          antwort: 1,
          erklaerung: 'partir → le départ (Abfahrt, Abreise)'
        },
        {
          typ: 'zuordnung',
          frage: 'Verwandle in Nominalstil: "Les prix augmentent rapidement."',
          optionen: [
            'L\'augmentation rapide des prix.',
            'Les prix font une augmentation.',
            'Il y a des prix qui augmentent.',
            'Les prix vont augmenter.'
          ],
          antwort: 0,
          erklaerung: 'augmenter → l\'augmentation + Adjektiv: l\'augmentation rapide des prix.'
        },
        {
          typ: 'richtigfalsch',
          frage: 'Nominalisierung ist typisch für formelle Schriftsprache.',
          antwort: true,
          erklaerung: 'Genau — Presse, Wissenschaft, Verwaltung benutzen stark nominalisierte Strukturen.'
        },
        {
          typ: 'zuordnung',
          frage: 'Welches Suffix bildet Substantive aus Adjektiven wie "libre", "capable"?',
          optionen: ['-tion', '-age', '-ité/-té', '-ment'],
          antwort: 2,
          erklaerung: 'libre → la liberté | capable → la capacité → Suffix -ité/-té'
        }
      ]
    },
    {
      id: 'registres', level: 'C2', titel: 'Niveaux de langue — Sprachregister',
      erklaerung: 'Das <strong>Sprachregister</strong> zeigt das Verhältnis zwischen Sprecher und Situation. Auf C2-Niveau muss man alle Register kennen, verstehen und angemessen einsetzen.<br><br>' +
        '<strong>Registres:</strong><br>' +
        '<table class="gram-table">' +
        '<tr><th>Register</th><th>Beispiel</th><th>Kontext</th></tr>' +
        '<tr><td><em>soutenu</em> (gehoben)</td><td>Je ne saurais vous remercier davantage.</td><td>Literatur, Reden</td></tr>' +
        '<tr><td><em>courant/standard</em></td><td>Je vous remercie beaucoup.</td><td>Formelles Gespräch, Briefe</td></tr>' +
        '<tr><td><em>familier</em> (umgangssprachlich)</td><td>Merci beaucoup!</td><td>Freunde, Familie</td></tr>' +
        '<tr><td><em>argotique/populaire</em></td><td>Trop sympa!</td><td>Jugendsprache</td></tr>' +
        '</table><br>' +
        '<strong>Typische Unterschiede:</strong><br>' +
        '• Verneinung: <em>je ne sais pas</em> (standard) → <em>je sais pas</em> (familier)<br>' +
        '• Pronomen: <em>nous allons</em> (standard) → <em>on va</em> (familier)<br>' +
        '• Frage: <em>Où allez-vous?</em> → <em>Où est-ce que vous allez?</em> → <em>Vous allez où?</em><br>' +
        '• Wortschatz: <em>voiture</em> ↔ <em>bagnole</em> (Auto) | <em>maison</em> ↔ <em>baraque</em><br><br>' +
        '<strong>Inversion:</strong> Typisch für gehobenes Register:<br>' +
        '→ <em>Savez-vous…? Serait-il possible…? Auriez-vous…?</em>',
      beispiele: [
        { fr: 'Soutenu: "Je n\'ignore pas que cette décision est difficile."', de: 'Gehoben: "Ich bin mir bewusst, dass diese Entscheidung schwierig ist."' },
        { fr: 'Standard: "Je sais que c\'est difficile."', de: 'Standard: "Ich weiß, dass es schwierig ist."' },
        { fr: 'Familier: "C\'est dur, hein?"', de: 'Umgangssprachlich: "Ist schon hart, oder?"' },
        { fr: '"Nous partons" (soutenu) vs. "On part" (familier)', de: 'Wir gehen (gehoben) vs. Wir gehen (umgangssprachlich)' }
      ],
      uebungen: [
        {
          typ: 'zuordnung',
          frage: '"Je sais pas" ist welches Register?',
          optionen: ['soutenu', 'standard', 'familier', 'argotique'],
          antwort: 2,
          erklaerung: 'Weglassen des "ne" → familier/umgangssprachlich'
        },
        {
          typ: 'richtigfalsch',
          frage: 'Die Inversion ("Savez-vous?") gehört zum gehobenen Register.',
          antwort: true,
          erklaerung: 'Richtig — Inversion ist formell/soutenu. Im Alltag: "Est-ce que vous savez?"'
        },
        {
          typ: 'zuordnung',
          frage: 'Wie fragt man im umgangssprachlichen Stil: "Où vas-tu?"',
          optionen: ['Où est-ce que tu vas?', 'Où tu vas?', 'Où tu ailles?', 'Où iras-tu?'],
          antwort: 1,
          erklaerung: 'Familier: Satzstellung wie Aussagesatz: "Où tu vas?"'
        },
        {
          typ: 'zuordnung',
          frage: '"Nous partons" (standard) → Was ist das familière Entsprechung?',
          optionen: ['Vous partez', 'On part', 'Ils partent', 'Je pars'],
          antwort: 1,
          erklaerung: '"on" ersetzt "nous" im umgangssprachlichen Gebrauch → on part'
        },
        {
          typ: 'richtigfalsch',
          frage: '"Bagnole" ist das gehobene Wort für "Auto".',
          antwort: false,
          erklaerung: '"bagnole" ist argotique/familier für "voiture" (Auto). Gehoben wäre "automobile".'
        }
      ]
    },
    {
      id: 'figures-style', level: 'C2', titel: 'Figures de style — Stilmittel',
      erklaerung: 'Auf C2-Niveau erkennt und benutzt man literarische Stilmittel bewusst.<br><br>' +
        '<strong>Comparaison</strong> (Vergleich): mit <em>comme, tel que, ainsi que</em><br>' +
        '→ <em>Il est fort comme un lion.</em><br><br>' +
        '<strong>Métaphore</strong> (Metapher): indirekter Vergleich ohne Vergleichswort<br>' +
        '→ <em>C\'est un lion. / La vie est un voyage.</em><br><br>' +
        '<strong>Métonymie</strong> (Metonymie): Teil steht für Ganzes / Behälter für Inhalt<br>' +
        '→ <em>Boire un verre.</em> (Das Glas = das Getränk darin)<br><br>' +
        '<strong>Euphémisme</strong> (Euphemismus): Abschwächung<br>' +
        '→ <em>Il a disparu.</em> (Er ist gestorben — abgemildert)<br><br>' +
        '<strong>Litote</strong> (Litotes): Untertreibung durch Verneinung des Gegenteils<br>' +
        '→ <em>Ce n\'est pas mal.</em> (= Das ist eigentlich sehr gut.)<br><br>' +
        '<strong>Hyperbole</strong> (Hyperbel): Übertreibung<br>' +
        '→ <em>Je t\'ai dit mille fois!</em><br><br>' +
        '<strong>Périphrase</strong>: Umschreibung statt direktem Namen<br>' +
        '→ <em>La Ville Lumière</em> (= Paris)<br><br>' +
        '<strong>Anaphore</strong>: Wiederholung am Satzanfang<br>' +
        '→ <em>Il chantait. Il dansait. Il riait.</em>',
      beispiele: [
        { fr: 'Sa voix est du miel. (Métaphore)', de: 'Ihre Stimme ist Honig.' },
        { fr: 'Il est fort comme un bœuf. (Comparaison)', de: 'Er ist stark wie ein Ochse.' },
        { fr: 'Ce n\'est pas mal du tout! (Litote)', de: 'Das ist eigentlich richtig gut! (Untertreibung)' },
        { fr: 'Je meurs de faim. (Hyperbole)', de: 'Ich sterbe vor Hunger. (Übertreibung)' },
        { fr: 'La Cité des Lumières a accueilli des millions de touristes. (Périphrase pour Paris)', de: 'Die Stadt der Lichter hat Millionen Touristen empfangen.' }
      ],
      uebungen: [
        {
          typ: 'zuordnung',
          frage: '"Il est fort comme un lion." — Welches Stilmittel ist das?',
          optionen: ['Métaphore', 'Comparaison', 'Hyperbole', 'Litote'],
          antwort: 1,
          erklaerung: 'Mit "comme" → direkter Vergleich = comparaison'
        },
        {
          typ: 'zuordnung',
          frage: '"C\'est un lion!" (über einen mutigen Menschen) — Stilmittel?',
          optionen: ['Comparaison', 'Litote', 'Métaphore', 'Euphémisme'],
          antwort: 2,
          erklaerung: 'Ohne "comme" → indirekter Vergleich = métaphore'
        },
        {
          typ: 'richtigfalsch',
          frage: '"Ce n\'est pas mal" ist eine Litote, die Begeisterung ausdrücken kann.',
          antwort: true,
          erklaerung: 'Richtig — Litote: Verneinung des Gegenteils um etwas Positives dezent auszudrücken.'
        },
        {
          typ: 'zuordnung',
          frage: '"Il est décédé" anstelle von "il est mort" — welches Stilmittel?',
          optionen: ['Hyperbole', 'Euphémisme', 'Litote', 'Métonymie'],
          antwort: 1,
          erklaerung: 'Abschwächung eines harten Begriffs → Euphémisme'
        },
        {
          typ: 'zuordnung',
          frage: '"Boire un verre" (das Glas trinken, meint den Inhalt) — Stilmittel?',
          optionen: ['Métaphore', 'Comparaison', 'Métonymie', 'Anaphore'],
          antwort: 2,
          erklaerung: 'Behälter steht für den Inhalt → Métonymie'
        },
        {
          typ: 'richtigfalsch',
          frage: '"Je t\'ai dit mille fois!" ist eine Hyperbole.',
          antwort: true,
          erklaerung: 'Richtig — bewusste Übertreibung zur Betonung = Hyperbole'
        }
      ]
    },
    {
      id: 'style-indirect-libre', level: 'C2', titel: 'Style indirect libre — Innenperspektive',
      erklaerung: 'Der <strong>style indirect libre</strong> ist ein literarisches Mittel: Man gibt Gedanken oder Worte einer Figur wieder — ohne Einleitung ("il pensait que", "elle dit que") und ohne direkte Rede-Anführungszeichen.<br><br>' +
        '<strong>Wirkung:</strong> Der Leser taucht direkt in den Bewusstseinsstrom der Figur ein.<br><br>' +
        '<strong>Erkennungsmerkmale:</strong><br>' +
        '• Tempus: Imparfait oder Conditionnel (Zeitverschiebung wie indirekte Rede)<br>' +
        '• Keine Einleitung, keine Anführungszeichen<br>' +
        '• Erste/zweite Person bleibt oder wechselt zu dritter Person<br>' +
        '• Ausrufe- und Fragezeichen bleiben erhalten<br><br>' +
        '<strong>Vergleich der Stile:</strong><br>' +
        '• Direkt: Elle pensa: "Je ne suis pas faite pour cela."<br>' +
        '• Indirect: Elle pensa qu\'elle n\'était pas faite pour cela.<br>' +
        '• Indirect libre: Elle n\'était pas faite pour cela. Pourquoi s\'entêter?<br><br>' +
        '<strong>Typisch bei:</strong> Flaubert, Zola, Maupassant, Proust, nouveau roman.',
      beispiele: [
        { fr: 'Il regarda la lettre. Tout était perdu, maintenant. À quoi bon continuer?', de: 'Er sah den Brief. Alles war verloren, jetzt. Wozu weitermachen? (→ seine Gedanken, ohne Einleitung)' },
        { fr: 'Elle sortit. L\'air était doux. Quelle belle journée! Elle sourit.', de: 'Sie trat hinaus. Die Luft war mild. Was für ein schöner Tag! Sie lächelte.' },
        { fr: 'Il hésita. Devait-il lui dire la vérité? Non, c\'était impossible.', de: 'Er zögerte. Sollte er ihr die Wahrheit sagen? Nein, das war unmöglich.' }
      ],
      uebungen: [
        {
          typ: 'zuordnung',
          frage: 'Woran erkennt man den style indirect libre?',
          optionen: [
            'Anführungszeichen + Einleitung',
            'Kein "que", kein Anführungszeichen — Imparfait/Conditionnel, Frage-/Ausrufezeichen',
            'Nur Présent-Tempus',
            'Immer erste Person Singular'
          ],
          antwort: 1,
          erklaerung: 'Kein Verb der Einleitung + kein Anführungszeichen + Imparfait = style indirect libre'
        },
        {
          typ: 'richtigfalsch',
          frage: '"Elle pensa qu\'elle était fatiguée." ist style indirect libre.',
          antwort: false,
          erklaerung: 'Nein — "qu\'elle" zeigt eine Einleitung → das ist style indirect (nicht libre).'
        },
        {
          typ: 'zuordnung',
          frage: '"Il regarda la mer. Comme elle était belle! Il ne partirait jamais." — Welcher Satz ist style indirect libre?',
          optionen: ['Il regarda la mer.', 'Comme elle était belle!', 'Il ne partirait jamais.', 'Alle drei'],
          antwort: 3,
          erklaerung: 'Alle drei: Erzählung (regarda), dann Gedanke ohne Einleitung (Comme elle était belle!), dann innere Entscheidung (ne partirait jamais).'
        },
        {
          typ: 'richtigfalsch',
          frage: 'Der style indirect libre ist typisch für das klassische Theater des 17. Jahrhunderts.',
          antwort: false,
          erklaerung: 'Falsch — er ist typisch für den Realismus/Naturalismus (Flaubert, Zola) und den modernen Roman.'
        }
      ]
    }
  ];

  // ─── STATE ────────────────────────────────────────────────────────────────
  var aktuellesThema = null;
  var aktuelleUebungIdx = 0;
  var uebungBeantwortet = false;

  // ─── RENDER: ÜBERSICHT ────────────────────────────────────────────────────
  function renderUebersicht() {
    var levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
    var html = '<h2 style="margin-bottom:16px;font-size:20px;">📝 Grammatik</h2>';

    levels.forEach(function(lvl) {
      var gruppe = themen.filter(function(t) { return t.level === lvl; });
      html += '<div class="gram-level-header gram-level-' + lvl + '">' + lvl + '</div>';
      html += '<div class="gram-topic-list">';
      gruppe.forEach(function(t) {
        var tStatus = (App.state.grammatikStatus || {})[t.id];
        var dot = tStatus === 'done'
          ? '<span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:#4ade80;margin-right:8px;flex-shrink:0;align-self:center;"></span>'
          : tStatus === 'schwierig'
          ? '<span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:#fbbf24;margin-right:8px;flex-shrink:0;align-self:center;"></span>'
          : '<span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:#e5e7eb;margin-right:8px;flex-shrink:0;align-self:center;"></span>';
        html += '<div class="gram-topic-item" onclick="Grammatik.showThema(\'' + t.id + '\')">' +
          dot + '<span class="gram-topic-title">' + t.titel + '</span>' +
          '<span class="gram-arrow">›</span></div>';
      });
      html += '</div>';
    });

    document.getElementById('grammatikContent').innerHTML = html;
    App.showSection('grammatik');
  }

  // ─── RENDER: THEMA ────────────────────────────────────────────────────────
  function showThema(id) {
    aktuellesThema = themen.find(function(t) { return t.id === id; });
    if (!aktuellesThema) return;
    aktuelleUebungIdx = 0;
    uebungBeantwortet = false;
    renderThemaDetail();
  }

  function renderThemaDetail() {
    var t = aktuellesThema;
    var tStatus = (App.state.grammatikStatus || {})[t.id];
    var statusBadge = '';
    if (tStatus === 'done') {
      statusBadge = '<span onclick="Grammatik.setStatus(\'' + t.id + '\', \'schwierig\')" title="Klicken zum Ändern" style="cursor:pointer;font-size:12px;background:#dcfce7;color:#14532d;border-radius:12px;padding:2px 10px;margin-left:6px">✅ Gut drauf</span>';
    } else if (tStatus === 'schwierig') {
      statusBadge = '<span onclick="Grammatik.setStatus(\'' + t.id + '\', \'done\')" title="Klicken zum Ändern" style="cursor:pointer;font-size:12px;background:#fef9c3;color:#78350f;border-radius:12px;padding:2px 10px;margin-left:6px">⚠️ Noch üben</span>';
    }
    var html = '<div class="gram-back-row">' +
      '<button class="btn btn-secondary btn-sm" onclick="Grammatik.show()">← Alle Themen</button>' +
      '<div style="display:flex;align-items:center;">' +
      '<span class="topic-level-tag level-' + t.level + '">' + t.level + '</span>' +
      statusBadge + '</div></div>';

    html += '<div class="gram-card">';
    html += '<h3 class="gram-thema-titel">' + t.titel + '</h3>';
    html += '<div class="gram-erklaerung">' + t.erklaerung + '</div>';
    html += '</div>';

    // Beispiele
    html += '<div class="gram-card">';
    html += '<h4 class="gram-subtitle">Beispiele</h4>';
    html += '<div class="gram-beispiele">';
    t.beispiele.forEach(function(b) {
      html += '<div class="gram-beispiel-row">' +
        '<span class="gram-fr">' + b.fr + '</span>' +
        '<button class="audio-btn" data-speak="' + b.fr.replace(/"/g, '&quot;') + '" onclick="TTS.speak(this.dataset.speak)" title="Anhören">🔊</button>' +
        '<span class="gram-de">' + b.de + '</span>' +
        '</div>';
    });
    html += '</div></div>';

    // Übungen
    html += '<div class="gram-card" id="uebungCard">';
    html += '<h4 class="gram-subtitle">Übungen</h4>';
    html += '<div id="uebungBereich">';
    html += renderUebung(0);
    html += '</div></div>';

    document.getElementById('grammatikContent').innerHTML = html;
  }

  function renderUebung(idx) {
    var t = aktuellesThema;
    if (idx >= t.uebungen.length) {
      return '<div class="gram-uebung-fertig">🎉 Alle Übungen geschafft!<br>' +
        '<p style="font-size:13px;color:#666;margin:10px 0 4px;">Wie war das Thema für dich?</p>' +
        '<div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-bottom:10px">' +
        '<button class="btn btn-sm" onclick="Grammatik.setStatus(\'' + t.id + '\', \'done\');Grammatik.show()" style="background:#4ade80;border:1px solid #22c55e;color:#14532d;padding:6px 14px">✅ Gut drauf!</button>' +
        '<button class="btn btn-sm" onclick="Grammatik.setStatus(\'' + t.id + '\', \'schwierig\');Grammatik.show()" style="background:#fbbf24;border:1px solid #f59e0b;color:#78350f;padding:6px 14px">⚠️ Noch üben</button>' +
        '</div>' +
        '<button class="btn btn-secondary btn-sm" onclick="Grammatik.resetUebungen()">🔄 Nochmal üben</button>' +
        '</div>';
    }
    var u = t.uebungen[idx];
    var fortschritt = (idx + 1) + ' / ' + t.uebungen.length;

    var optionen = u.typ === 'richtigfalsch' ? ['✓ Richtig', '✗ Falsch'] : u.optionen;
    var html = '<div class="gram-uebung-progress">' + fortschritt + '</div>';
    html += '<div class="gram-uebung-frage">' + u.frage + '</div>';
    html += '<div class="gram-uebung-optionen" id="optionenGrid">';
    optionen.forEach(function(opt, i) {
      html += '<button class="gram-option" id="opt' + i + '" onclick="Grammatik.antworten(' + i + ')">' + opt + '</button>';
    });
    html += '</div>';
    html += '<div class="gram-feedback" id="gramFeedback" style="display:none"></div>';
    html += '<div style="text-align:center;margin-top:12px">' +
      '<button class="btn btn-primary btn-sm" id="weiterBtn" onclick="Grammatik.naechsteUebung()" style="display:none">Weiter →</button>' +
      '</div>';
    return html;
  }

  // ─── ÜBUNGS-LOGIK ─────────────────────────────────────────────────────────
  function antworten(idx) {
    if (uebungBeantwortet) return;
    uebungBeantwortet = true;

    var u = aktuellesThema.uebungen[aktuelleUebungIdx];
    // richtigfalsch: true→Index 0, false→Index 1
    var correctIdx = u.typ === 'richtigfalsch' ? (u.antwort === true ? 0 : 1) : u.antwort;
    var richtig = (idx === correctIdx);
    var feedbackEl = document.getElementById('gramFeedback');
    var anzahl = u.typ === 'richtigfalsch' ? 2 : u.optionen.length;

    // Buttons einfärben
    for (var i = 0; i < anzahl; i++) {
      var btn = document.getElementById('opt' + i);
      if (!btn) continue;
      btn.disabled = true;
      if (i === correctIdx) btn.classList.add('gram-option-richtig');
      else if (i === idx && !richtig) btn.classList.add('gram-option-falsch');
    }

    feedbackEl.style.display = 'block';
    feedbackEl.className = 'gram-feedback ' + (richtig ? 'gram-feedback-richtig' : 'gram-feedback-falsch');
    feedbackEl.innerHTML = (richtig ? '✅ Richtig! ' : '❌ Nicht ganz. ') + u.erklaerung;

    if (richtig) {
      // Auto-weiter nach 1200ms (kurze Bestätigung sehen, dann weiter)
      setTimeout(function() { Grammatik.naechsteUebung(); }, 1200);
    } else {
      // Falsch: Weiter-Button zum manuellen Bestätigen
      var weiterBtn = document.getElementById('weiterBtn');
      if (weiterBtn) weiterBtn.style.display = 'inline-block';
    }
  }

  function naechsteUebung() {
    aktuelleUebungIdx++;
    uebungBeantwortet = false;
    document.getElementById('uebungBereich').innerHTML = renderUebung(aktuelleUebungIdx);
  }

  function resetUebungen() {
    aktuelleUebungIdx = 0;
    uebungBeantwortet = false;
    document.getElementById('uebungBereich').innerHTML = renderUebung(0);
  }

  function setStatus(id, status) {
    if (!App.state.grammatikStatus) App.state.grammatikStatus = {};
    App.state.grammatikStatus[id] = status;
    App.saveState();
  }

  // ─── PUBLIC ───────────────────────────────────────────────────────────────
  function show() {
    renderUebersicht();
  }

  return { show: show, showThema: showThema, antworten: antworten, naechsteUebung: naechsteUebung, resetUebungen: resetUebungen, setStatus: setStatus };
})();
