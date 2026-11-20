"use strict";

const LESSONS = [
  {
    id: "alphabet",
    title: "L'alphabet grec et sa prononciation",
    emoji: "🔤",
    theory: [
      {
        title: "24 lettres, beaucoup de fausses amies",
        body: "L'alphabet grec compte 24 lettres. Attention aux pièges : la lettre « Β β » ne se prononce pas comme le B français mais comme un « v » (avion). « Π π » = p, « Ρ ρ » = r roulé, « Χ χ » = kh (comme la jota espagnole), « Δ δ » = th sonore de « this » (anglais), « Θ θ » = th soufflé de « three ».",
      },
      {
        title: "Les sons doubles",
        list: [
          "ου = « ou » (toujours !)",
          "αι, ει, οι = tous les trois « é » / « i »",
          "αυ = « av » ou « af » · ευ = « év » ou « éf »",
          "μπ = « b » (souvent) · ντ = « d » · γκ = « g » (en début de mot) · τζ = « dz »",
        ],
      },
      {
        title: "L'accent tonique",
        body: "Presque chaque mot de plusieurs syllabes porte un accent écrit (ά, έ, ή…). Il indique la syllabe à prononcer plus fort : Κα-λη-ΜΕ-ρα. C'est capital pour être compris.",
      },
    ],
    vocab: [
      { word: "Β β", def: "la bêta — se prononce « v » comme « avion »" },
      { word: "Δ δ", def: "la delta — se prononce « th » sonore de « this » (anglais)" },
      { word: "Θ θ", def: "la thêta — se prononce « th » soufflé de « three » (anglais)" },
      { word: "Χ χ", def: "la khi — se prononce « kh » comme en allemand « Bach »" },
      { word: "Γ γ", def: "la gamma — se prononce « gh » (entre g râpé et y)" },
      { word: "ου", def: "un groupe de deux voyelles qui se prononce toujours « ou »" },
      { word: "αι", def: "un groupe de deux voyelles qui se prononce « é »" },
      { word: "μπ", def: "un groupe qui se prononce souvent « b »" },
    ],
    quiz: [
      {
        q: "La lettre « Β » se prononce comme dans :",
        choices: ["avion", "bateau", "vélo"],
        answer: 0,
      },
      {
        q: "La séquence « ου » se prononce :",
        choices: ["o…u", "ou", "ô"],
        answer: 1,
      },
      {
        q: "Combien de lettres compte l'alphabet grec ?",
        choices: ["26", "21", "24"],
        answer: 2,
      },
      {
        q: "La suite « μπ » se prononce souvent :",
        choices: ["b", "m-p", "v"],
        answer: 0,
      },
      {
        q: "La lettre « Δ » se prononce comme :",
        choices: ["d de « dame »", "th de « this » (anglais)", "t de « table »"],
        answer: 1,
      },
      {
        q: "À quoi sert l'accent écrit (ά, έ, ώ) ?",
        choices: ["À marquer les voyelles longues", "À décorer les majuscules", "À indiquer la syllabe accentuée"],
        answer: 2,
      },
      {
        q: "La lettre « Χ » correspond à un son proche de :",
        choices: ["kh (bach)", "x de « taxi »", "h anglais de « hello »"],
        answer: 0,
      },
      {
        q: "Comment se prononcent « ει » et « οι » ?",
        choices: ["comme « i » de « île »", "comme « ou »", "comme « a »"],
        answer: 0,
      },
    ],
  },
  {
    id: "salutations",
    title: "Se saluer et se présenter",
    emoji: "👋",
    theory: [
      {
        title: "Saluer selon le moment et la personne",
        body: "« Γεια σου » s'utilise avec tes amis (tutoiement) et « Γεια σας » avec plusieurs personnes ou pour être poli (vouvoiement). « Καλημέρα » = bonjour (le matin et même l'après-midi), « Καλησπέρα » = bonsoir, « Καληνύχτα » = bonne nuit.",
      },
      {
        title: "Les questions de base",
        list: [
          "Πώς σε λένε ; → Με λένε Αλαίν. (Comment tu t'appelles ? → Je m'appelle Alain.)",
          "Πώς είσαι ; → Καλά, ευχαριστώ. (Comment vas-tu ? → Bien, merci.)",
          "Από πού είσαι ; → Είμαι από τη Γαλλία. (Tu es d'où ? → Je suis de France.)",
        ],
      },
      {
        title: "Formules utiles",
        body: "« Χάρηκα ! » = enchanté(e). « Αντίο » = au revoir. « Ευχαριστώ » = merci. « Παρακαλώ » = s'il vous plaît / de rien.",
      },
    ],
    vocab: [
      { word: "Γεια σου", def: "salut (entre amis, tutoiement)" },
      { word: "Γεια σας", def: "bonjour (vouvoiement ou à plusieurs personnes)" },
      { word: "Καλημέρα", def: "bonjour (le matin et l'après-midi)" },
      { word: "Καλησπέρα", def: "bonsoir" },
      { word: "Καληνύχτα", def: "bonne nuit" },
      { word: "Με λένε…", def: "je m'appelle…" },
      { word: "Πώς σε λένε ;", def: "comment tu t'appelles ?" },
      { word: "Χάρηκα !", def: "enchanté de faire ta connaissance" },
      { word: "Αντίο", def: "au revoir" },
      { word: "Ευχαριστώ", def: "merci" },
    ],
    quiz: [
      {
        q: "Vous parlez à un inconnu (vouvoiement). Vous dites :",
        choices: ["Γεια σου", "Γεια σας", "Καληνύχτα"],
        answer: 1,
      },
      {
        q: "« Comment tu t'appelles ? » se dit :",
        choices: ["Πώς σε λένε ;", "Από πού είσαι ;", "Πώς είσαι ;"],
        answer: 0,
      },
      {
        q: "Le soir, pour saluer, on dit :",
        choices: ["Καλησπέρα", "Καλημέρα", "Καληνύχτα"],
        answer: 0,
      },
      {
        q: "« Με λένε Μαρία. » signifie :",
        choices: ["Je m'appelle Maria.", "Je préfère Maria.", "Je viens avec Maria."],
        answer: 0,
      },
      {
        q: "Comment dit-on « merci » ?",
        choices: ["Παρακαλώ", "Αντίο", "Ευχαριστώ"],
        answer: 2,
      },
      {
        q: "« Από πού είσαι ; » demande :",
        choices: ["L'âge", "L'origine : tu es d'où ?", "L'humeur"],
        answer: 1,
      },
      {
        q: "On dit « Καληνύχτα » :",
        choices: ["En arrivant le matin", "Avant de dormir", "Pendant la sieste"],
        answer: 1,
      },
      {
        q: "« Χάρηκα ! » peut se traduire par :",
        choices: ["Enchanté !", "Pardon !", "Au revoir !"],
        answer: 0,
      },
    ],
  },
  {
    id: "etre-avoir",
    title: "Είμαι et έχω : être et avoir",
    emoji: "✅",
    theory: [
      {
        title: "Le verbe είμαι (être)",
        list: [
          "εγώ είμαι (je suis)",
          "εσύ είσαι (tu es)",
          "αυτός / αυτή είναι (il / elle est)",
          "εμείς είμαστε (nous sommes)",
          "εσείς είστε (vous êtes)",
          "αυτοί είναι (ils sont)",
        ],
      },
      {
        title: "Le verbe έχω (avoir)",
        list: [
          "εγώ έχω (j'ai)",
          "εσύ έχεις (tu as)",
          "αυτός / αυτή έχει (il / elle a)",
          "εμείς έχουμε (nous avons)",
          "εσείς έχετε (vous avez)",
          "αυτοί έχουν (ils ont)",
        ],
      },
      {
        title: "Attention aux différences avec le français !",
        body: "« J'ai 30 ans » se dit Είμαι 30 χρονών (littéralement « je suis de 30 ans »). « J'ai faim » se dit Έχω πείνα : ici l'usage grec et le français coïncident. « Je m'appelle » se dit Με λένε (littéralement « on m'appelle »).",
      },
    ],
    vocab: [
      { word: "είμαι", def: "être (je suis)" },
      { word: "είσαι", def: "être (tu es)" },
      { word: "είμαστε", def: "être (nous sommes)" },
      { word: "έχω", def: "avoir (j'ai)" },
      { word: "έχεις", def: "avoir (tu as)" },
      { word: "έχουμε", def: "avoir (nous avons)" },
      { word: "Χαίρομαι !", def: "je suis content (formule de présentation)" },
      { word: "Και εγώ", def: "moi aussi" },
    ],
    quiz: [
      {
        q: "Εγώ ___ Έλληνας. (Je suis Grec.)",
        choices: ["είμαστε", "είμαι", "έχω"],
        answer: 1,
      },
      {
        q: "Εσύ ___ χρόνα; (Tu as du temps ?)",
        choices: ["έχεις", "είσαι", "έχουμε"],
        answer: 0,
      },
      {
        q: "Εμείς ___ από τη Γαλλία. (Nous sommes de France.)",
        choices: ["είναι", "είστε", "είμαστε"],
        answer: 2,
      },
      {
        q: "« J'ai 30 ans » se dit en grec :",
        choices: ["Έχω 30 χρόνια.", "Είμαι 30 χρονών.", "Με λένε 30."],
        answer: 1,
      },
      {
        q: "Αυτοί ___ φίλοι. (Ils sont amis.)",
        choices: ["είναι", "είστε", "έχουν"],
        answer: 0,
      },
      {
        q: "« J'ai faim » se dit :",
        choices: ["Είμαι πείνα.", "Έχω πείνα.", "Έμαι πείνα."],
        answer: 1,
      },
      {
        q: "Εσείς ___ δίκιο. (Vous avez raison.)",
        choices: ["είστε", "έχετε", "είμαι"],
        answer: 1,
      },
      {
        q: "Αυτή ___ καθηγήτρια. (Elle est professeure.)",
        choices: ["έχει", "είναι", "έχουν"],
        answer: 1,
      },
    ],
    genVerbs: ["είμαι", "έχω"],
  },
  {
    id: "articles",
    title: "Les articles : ο, η, το",
    emoji: "📚",
    theory: [
      {
        title: "Les articles définis",
        list: [
          "ο = le (masculin : ο φίλος — l'ami)",
          "η = la (féminin : η θάλασσα — la mer)",
          "το = le (neutre : το βιβλίο — le livre)",
          "οι = les (masculin et féminin pluriel)",
          "τα = les (neutre pluriel : τα βιβλία — les livres)",
        ],
      },
      {
        title: "Trois genres, comme l'allemand",
        body: "Le grec a trois genres : masculin, féminin et neutre. Le neutre est très courant et souvent se retrouve — il est en ε au pluriel. Un mot est toujours appris avec son article : ο καφές, η πόλη, το νερό.",
      },
      {
        title: "L'article indéfini",
        list: [
          "ένας = un (masculin)",
          "μία / μια = une (féminin)",
          "ένα = un (neutre)",
          "En grec, on ne dit généralement pas d'article indéfini au pluriel.",
        ],
      },
    ],
    vocab: [
      { word: "ο φίλος", def: "l'ami" },
      { word: "η θάλασσα", def: "la mer" },
      { word: "το βιβλίο", def: "le livre" },
      { word: "ο καφές", def: "le café (la boisson)" },
      { word: "η πόλη", def: "la ville" },
      { word: "το νερό", def: "l'eau" },
      { word: "ο δρόμος", def: "la rue, la route" },
      { word: "το σπίτι", def: "la maison" },
    ],
    quiz: [
      {
        q: "___ θάλασσα (la mer) — quel article ?",
        choices: ["ο", "η", "το"],
        answer: 1,
      },
      {
        q: "___ νερό (l'eau) — quel article ?",
        choices: ["η", "ο", "το"],
        answer: 2,
      },
      {
        q: "___ φίλος (l'ami) — quel article ?",
        choices: ["ο", "η", "το"],
        answer: 0,
      },
      {
        q: "Au pluriel, le neutre το βιβλίο devient :",
        choices: ["οι βιβλία", "τα βιβλία", "τα βιβλίων"],
        answer: 1,
      },
      {
        q: "Combien de genres a le nom grec ?",
        choices: ["Deux", "Trois", "Six"],
        answer: 1,
      },
      {
        q: "« une ville » (indéfini) se dit :",
        choices: ["μια πόλη", "η μία πόλης", "ένα πόλη"],
        answer: 0,
      },
      {
        q: "Les masculins pluriel article défini est :",
        choices: ["τα", "οι", "ενας"],
        answer: 1,
      },
      {
        q: "Il vaut mieux apprendre un mot grec…",
        choices: ["seul, sans article", "avec son article (ο / η / το)", "toujours au pluriel"],
        answer: 1,
      },
    ],
  },
  {
    id: "verbes-omega",
    title: "Les verbes en -ω au présent",
    emoji: "✏️",
    theory: [
      {
        title: "Le modèle γράφω (écrire)",
        list: [
          "εγώ γράφω (j'écris)",
          "εσύ γράφεις (tu écris)",
          "αυτός / αυτή γράφει (il / elle écrit)",
          "εμείς γράφουμε (nous écrivons)",
          "εσείς γράφετε (vous écrivez)",
          "αυτοί γράφουν (ils écrivent)",
        ],
      },
      {
        title: "Comment former le présent ?",
        body: "Presque tous les verbes du grec finissent en -ω au présent. On remplace la terminaison -ω par -εις, -ει, -ουμε, -ετε, -ουν : διαβάζω devient διαβάζεις, διαβάζει… L'accent tonique reste sur la même voyelle du radical (γράφω → γράφουμε).",
      },
      {
        title: "Exemples",
        list: [
          "Διαβάζω ένα βιβλίο. (Je lis un livre.)",
          "Μαθαίνω ελληνικά. (J'apprends le grec.)",
          "Πίνω έναν καφέ. (Je bois un café.)",
        ],
      },
    ],
    vocab: [
      { word: "γράφω", def: "écrire" },
      { word: "διαβάζω", def: "lire" },
      { word: "μιλάω", def: "parler" },
      { word: "μαθαίνω", def: "apprendre" },
      { word: "πίνω", def: "boire" },
      { word: "τρώω", def: "manger" },
      { word: "μένω", def: "rester, habiter" },
      { word: "βλέπω", def: "voir" },
    ],
    quiz: [
      {
        q: "Εγώ ___ ελληνικά. (J'apprends le grec.)",
        choices: ["μαθαίνεις", "μαθαίνω", "μαθαίνουμε"],
        answer: 1,
      },
      {
        q: "Quelle est la terminaison de la 2ème personne du singulier (tu) ?",
        choices: ["-ω", "-εις", "-ει"],
        answer: 1,
      },
      {
        q: "Εσείς ___ έναν καφέ. (Vous buvez un café.)",
        choices: ["πίνετε", "πίνουμε", "πίνει"],
        answer: 0,
      },
      {
        q: "Αυτός ___ ένα γράμμα. (Il écrit une lettre.)",
        choices: ["γράφω", "γράφεις", "γράφει"],
        answer: 2,
      },
      {
        q: "Comment dit-on « j'apprends le grec » ?",
        choices: ["Μαθαίνω ελληνικά.", "Μαθαίνεις ελληνικά.", "Μαθαίνει ελληνικά."],
        answer: 0,
      },
      {
        q: "« Τρώω » veut dire :",
        choices: ["boire", "manger", "voir"],
        answer: 1,
      },
      {
        q: "Εμείς ___ το βιβλίο. (Nous lisons le livre.)",
        choices: ["διαβάζουμε", "διαβάζω", "διαβάζουν"],
        answer: 0,
      },
      {
        q: "Comment dit-on « je vois » ?",
        choices: ["βλέπει", "βλέπεις", "βλέπω"],
        answer: 2,
      },
    ],
    genVerbs: ["γράφω", "διαβάζω", "μαθαίνω", "πίνω"],
  },
  {
    id: "nombres",
    title: "Les nombres (0 à 20 et au-delà)",
    emoji: "🔢",
    theory: [
      {
        title: "De 0 à 10",
        list: [
          "0 μηδέν · 1 ένα · 2 δύο · 3 τρία · 4 τέσσερα · 5 πέντε",
          "6 έξι · 7 επτά (ou εφτά) · 8 οκτώ (ou οχτώ) · 9 εννέα (ou εννιά) · 10 δέκα",
        ],
      },
      {
        title: "De 11 à 20",
        body: "À partir de 13, on combine : 13 = δεκατρία (10 + 3), 14 = δεκατέσσερα… 20 = είκοσι. Pour les dizaines : 30 τριάντα, 40 σαράντα, 50 πενήντα… et 100 = εκατό.",
      },
      {
        title: "Utiliser les nombres",
        body: "« Πόσο κάνει ; » = « Combien ça coûte ? ». La réponse est souvent au neutre : Κάνει πέντε ευρώ (Ça fait cinq euros).",
      },
    ],
    vocab: [
      { word: "ένα", def: "un / une" },
      { word: "δύο", def: "deux" },
      { word: "τρία", def: "trois" },
      { word: "πέντε", def: "cinq" },
      { word: "δέκα", def: "dix" },
      { word: "είκοσι", def: "vingt" },
      { word: "Πόσο κάνει ;", def: "combien ça coûte ?" },
      { word: "136", def: "numéro d'urgence des pharmacies de garde (en Grèce)" },
    ],
    quiz: [
      {
        q: "Quel nombre s'écrit « πέντε » ?",
        choices: ["4", "5", "6"],
        answer: 1,
      },
      {
        q: "« δύο » signifie :",
        choices: ["deux", "trois", "deux fois"],
        answer: 0,
      },
      {
        q: "Comment dit-on « sept » ?",
        choices: ["έξι", "εφτά", "οχτώ"],
        answer: 1,
      },
      {
        q: "« δεκαπέντε » signifie :",
        choices: ["cinquante", "quinze", "cinq cents"],
        answer: 1,
      },
      {
        q: "Comment écrit-on 20 ?",
        choices: ["τριάντα", "σαράντα", "είκοσι"],
        answer: 2,
      },
      {
        q: "« Πόσο κάνει ; » demande :",
        choices: ["L'heure", "L'âge", "Le prix"],
        answer: 2,
      },
      {
        q: "Comment dit-on « un café » ?",
        choices: ["ένας καφές", "μια καφές", "δύο καφέ"],
        answer: 0,
      },
      {
        q: "Le numéro d'urgence des pharmacies de garde en Grèce est :",
        choices: ["112", "15", "136"],
        answer: 2,
      },
    ],
  },
  {
    id: "vie-quotidienne",
    title: "La vie quotidienne",
    emoji: "🏠",
    theory: [
      {
        title: "Les jours de la semaine",
        list: [
          "Δευτέρα (lundi) · Τρίτη (mardi) · Τετάρτη (mercredi) · Πέμπτη (jeudi)",
          "Παρασκευή (vendredi) · Σάββατο (samedi) · Κυριακή (dimanche)",
        ],
      },
      {
        title: "Demander son chemin",
        list: [
          "Πού είναι η Ακρόπολη ; → Où est l'Acropole ?",
          "Τι ώρα είναι ; → Quelle heure est-il ?",
          "Θέλω έναν καφέ, παρακαλώ. → Je voudrais un café, s'il vous plaît.",
        ],
      },
      {
        title: "Dans la ville",
        body: "Pour dire où tu habites : Μένω στην Αθήνα (j'habite à Athènes). La préposition s'adapte au nom (στη / στην / στου…).",
      },
    ],
    vocab: [
      { word: "Δευτέρα", def: "lundi" },
      { word: "Τετάρτη", def: "mercredi" },
      { word: "Κυριακή", def: "dimanche" },
      { word: "Πού είναι… ;", def: "où est… ?" },
      { word: "Τι ώρα είναι ;", def: "quelle heure est-il ?" },
      { word: "Θέλω…", def: "je voudrais / je veux…" },
      { word: "Μένω…", def: "j'habite (à)…" },
      { word: "η Αθήνα", def: "Athènes" },
    ],
    quiz: [
      {
        q: "Quel jour vient juste après « Τρίτη » ?",
        choices: ["Πέμπτη", "Τετάρτη", "Δευτέρα"],
        answer: 1,
      },
      {
        q: "« Κυριακή » signifie :",
        choices: ["dimanche", "vendredi", "samedi"],
        answer: 0,
      },
      {
        q: "« Quelle heure est-il ? » se dit :",
        choices: ["Πού είναι ;", "Πόσο κάνει ;", "Τι ώρα είναι ;"],
        answer: 2,
      },
      {
        q: "« Θέλω έναν καφέ, παρακαλώ. » signifie :",
        choices: ["Je voudrais un café, s'il vous plaît.", "Le café coûte cher.", "Tu veux un café ?"],
        answer: 0,
      },
      {
        q: "« Μένω στην Αθήνα. » signifie :",
        choices: ["Je vais à Athènes.", "J'habite à Athènes.", "Je quitte Athènes."],
        answer: 1,
      },
      {
        q: "« Πού είναι η θάλασσα ; » demande où est :",
        choices: ["la gare", "la mer", "la poste"],
        answer: 1,
      },
      {
        q: "Le premier jour de la semaine grecque (lundi) est :",
        choices: ["Σάββατο", "Δευτέρα", "Παρασκευή"],
        answer: 1,
      },
      {
        q: "« Πέμπτη » est :",
        choices: ["jeudi", "mardi", "mercredi"],
        answer: 0,
      },
    ],
  },
  {
    id: "culture-grece",
    title: "La Grèce : culture et civilisation",
    emoji: "🏛️",
    theory: [
      {
        title: "Symboles de la Grèce",
        body: "La capitale est Athènes (Αθήνα). Le drapeau est bleu et blanc avec une croix (l'orthodoxie) et neuf bandes. L'hymne national est le « Ύμνος εις την Ελευθερίαν » (Hymne à la liberté), écrit par Dionyssios Solomós. La devise héritée de la guerre d'indépendance est « Ελευθερία ή θάνατος » — « La liberté ou la mort ».",
      },
      {
        title: "Les grandes dates",
        list: [
          "25 mars 1821 : début de la guerre d'indépendance contre l'Empire ottoman (fête nationale)",
          "25 mars aussi : l'Annonciation, fête religieuse majeure",
          "28 octobre 1940 : le « Non » (OXI) à l'ultimatum italien — deuxième fête nationale",
          "1981 : la Grèce rejoint la Communauté européenne · 2002 : l'euro remplace la drachme",
        ],
      },
      {
        title: "Mots français venus du grec",
        body: "« Démocratie » (δημοκρατία = le pouvoir du peuple), « philosophie » (φιλοσοφία = l'amour de la sagesse), « théâtre » (θέατρο), « école » (σχολείο). Contrairement à la France, la Grèce ne pratique pas une laïcité stricte : la religion orthodoxe est majoritaire (environ 90 % de la population).",
      },
      {
        title: "Personnalités et trésors",
        list: [
          "Socrate, Platon et Aristote : philosophes de l'Antiquité",
          "le mont Olympe (2 917 m), les îles de la mer Égée",
          "l'Acropole et le Parthénon, à Athènes",
          "Dionyssios Solomós (hymne), Nikos Kazantzákis (Zorba, la nouvelle « Alexis Zorbas »)",
        ],
      },
    ],
    vocab: [
      { word: "Ελευθερία", def: "la liberté" },
      { word: "Δημοκρατία", def: "la démocratie (mot d'origine grecque)" },
      { word: "φιλοξενία", def: "l'hospitalité, littéralement « l'amour de l'étranger »" },
      { word: "η θάλασσα", def: "la mer" },
      { word: "το νησί", def: "l'île" },
      { word: "Αθήνα", def: "Athènes (la capitale)" },
      { word: "Ακρόπολη", def: "l'Acropole (site emblématique d'Athènes)" },
      { word: "OXI", def: "le « Non » du 28 octobre 1940, fête nationale" },
    ],
    quiz: [
      {
        q: "Quelle est la capitale de la Grèce ?",
        choices: ["Thessalonique", "Sparte", "Athènes"],
        answer: 2,
      },
      {
        q: "En quelle année commence la guerre d'indépendance grecque ?",
        choices: ["1789", "1821", "1945"],
        answer: 1,
      },
      {
        q: "Que signifie la devise « Ελευθερία ή θάνατος » ?",
        choices: ["La liberté ou la mort", "La force et l'honneur", "L'amour de la patrie"],
        answer: 0,
      },
      {
        q: "De quel mot grec vient « démocratie » ?",
        choices: ["δημοκρατία (le pouvoir du peuple)", "δράκος (le dragon)", "δίπλωμα (le diplôme)"],
        answer: 0,
      },
      {
        q: "Que célèbre la Grèce le 28 octobre ?",
        choices: ["La fin de la guerre civile", "Le « Non » (OXI) de 1940", "L'entrée dans l'Union européenne"],
        answer: 1,
      },
      {
        q: "Qui a écrit l'hymne national grec ?",
        choices: ["Nikos Kazantzákis", "Homère", "Dionyssios Solomós"],
        answer: 2,
      },
      {
        q: "Quelle mer sépare la Grèce de la Turquie ?",
        choices: ["La mer Ionienne", "La mer Égée", "La mer Adriatique"],
        answer: 1,
      },
      {
        q: "Le site le plus emblématique d'Athènes est :",
        choices: ["le Colisée", "l'Acropole et son Parthénon", "le monastère des Météores"],
        answer: 1,
      },
    ],
  },
];

const PRONOUNS = [
  { pronoun: "εγώ (je)", key: "εγώ" },
  { pronoun: "εσύ (tu)", key: "εσύ" },
  { pronoun: "αυτός / αυτή (il/elle)", key: "αυτός" },
  { pronoun: "εμείς (nous)", key: "εμείς" },
  { pronoun: "εσείς (vous)", key: "εσείς" },
  { pronoun: "αυτοί (ils/elles)", key: "αυτοί" },
];

const VERB_TABLES = {
  "είμαι": { "εγώ": "είμαι", "εσύ": "είσαι", "αυτός": "είναι", "εμείς": "είμαστε", "εσείς": "είστε", "αυτοί": "είναι" },
  "έχω": { "εγώ": "έχω", "εσύ": "έχεις", "αυτός": "έχει", "εμείς": "έχουμε", "εσείς": "έχετε", "αυτοί": "έχουν" },
  "γράφω": { "εγώ": "γράφω", "εσύ": "γράφεις", "αυτός": "γράφει", "εμείς": "γράφουμε", "εσείς": "γράφετε", "αυτοί": "γράφουν" },
  "διαβάζω": { "εγώ": "διαβάζω", "εσύ": "διαβάζεις", "αυτός": "διαβάζει", "εμείς": "διαβάζουμε", "εσείς": "διαβάζετε", "αυτοί": "διαβάζουν" },
  "μαθαίνω": { "εγώ": "μαθαίνω", "εσύ": "μαθαίνεις", "αυτός": "μαθαίνει", "εμείς": "μαθαίνουμε", "εσείς": "μαθαίνετε", "αυτοί": "μαθαίνουν" },
  "πίνω": { "εγώ": "πίνω", "εσύ": "πίνεις", "αυτός": "πίνει", "εμείς": "πίνουμε", "εσείς": "πίνετε", "αυτοί": "πίνουν" },
};
