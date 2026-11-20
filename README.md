
Aucune installation nécessaire : ouvre simplement `index.html` dans un navigateur.

Ou avec un petit serveur local :

```bash
python3 -m http.server 8080
# puis ouvrir http://localhost:8080
```

## Niveaux

Un menu déroulant dans l'en-tête permet de choisir le niveau ; la progression et l'examen final sont enregistrés séparément pour chaque niveau.

### A1 · Débutant — 9 leçons

1. L'alphabet grec et sa prononciation (24 lettres, sons doubles, accent tonique)
2. Se saluer et se présenter (Γεια σου / Γεια σας, se présenter, formules de politesse)
3. Είμαι et έχω : être et avoir (conjugaison au présent)
4. Les articles : ο, η, το (les trois genres, article défini et indéfini)
5. Les verbes en -ω au présent (modèle γράφω)
6. Les nombres (0 à 20 et au-delà, demander le prix)
7. La vie quotidienne (jours de la semaine, demander son chemin, l'heure)
8. La Grèce : culture et civilisation (symboles, grandes dates, valeurs et traditions, institutions, personnalités, mots français venus du grec)
9. Vocabulaire : les mots du quotidien (banque de 100 mots — 10 tirés au sort à chaque chargement)

### A2 · Élémentaire — 6 leçons

1. L'aoriste : le passé simple (l'augment, modèles διαβάζω / γράφω, irréguliers έφαγα, ήπια, είδα, ήρθα)
2. Le futur avec θα (particule θα + forme perfective, négation δεν θα, mots du temps)
3. Les possessifs (μου, σου, του… placés après le nom)
4. Le comparatif et le superlatif (πιο + adjectif, irréguliers καλύτερος, χειρότερος…)
5. Sorties et invitations (Θέλεις να… ; Ας πάμε !, σε + article)
6. Vocabulaire : la vie pratique (banque de 100 mots — 10 tirés au sort à chaque chargement)

### B1 · Intermédiaire — 5 leçons

1. L'imparfait (παρατατικός) : ήμουν, είχα…, contraste imparfait / aoriste
2. Le passé composé (έχω + forme perfective non conjuguée)
3. Les pronoms relatifs (που, ο οποίος, όπου)
4. Donner son avis et argumenter (νομίζω ότι, connecteurs logiques)
5. Vocabulaire : médias, formation et émotions (banque de 100 mots — 10 tirés au sort à chaque chargement)

### B2 · Avancé — 3 leçons

1. Les verbes déponents (κοιμάμαι, φοβάμαι…) et la voix moyenne
2. La Grèce moderne : institutions et Europe (république 1974, la Βουλή, Europe 1981, euro 2002, fêtes nationales)
3. Vocabulaire : société et monde contemporain (banque de 100 mots — 10 tirés au sort à chaque chargement)

## Fonctionnalités

- **Cours** : règles claires + exemples pour chaque leçon
- **Cartes mémoire** : mot grec → traduction française, à retourner, avec progression
- **Quiz** : choix multiples, questions et réponses mélangées, questions générées à partir des tableaux de conjugaison et du vocabulaire, résultat détaillé
- **Examen final** : 20 questions tirées au sort dans les leçons du niveau choisi, un examen distinct par niveau (A1 à B2), meilleur score et nombre de tentatives enregistrés
- **Niveaux** : menu déroulant A1 / A2 / B1 / B2 dans l'en-tête, leçons et progression par niveau (niveau mémorisé dans le navigateur)
- **Progression** : meilleur score par leçon et cartes consultées, sauvegardés dans le navigateur (localStorage), sans compte ni serveur
- **Vocabulaire** : une banque de 500 mots en A1, de 1 000 mots en A2, de 2 000 mots en B1 et de 1 446 mots en B2 (4 946 mots au total) ; à chaque chargement de la page, 10 mots sont tirés au sort pour les cartes mémoire et le quiz du module — le tirage change à chaque visite
- **Numéro de version** affiché en bas de page pour vérifier que tu utilises la dernière version

## Versions

- **2.12.0** (build du 2026-11-20 à 21:38 UTC) : la leçon « La Grèce : culture et civilisation » est enrichie au niveau du module « La France : culture et citoyenneté » du cours de français — 6 volets (symboles, grandes dates, valeurs et traditions, institutions, mots venus du grec, personnalités), 10 cartes et 15 questions de quiz
- **2.11.0** (build du 2026-11-20 à 21:31 UTC) : banque de vocabulaire B2 portée à 1 446 mots (4 946 mots uniques au total) — quatrième tranche B2, dans la perspective des repères CECRL (500/1 000/2 000/5 000)
- **2.10.0** (build du 2026-11-20 à 19:09 UTC) : banque de vocabulaire B2 portée à 1 241 mots (4 741 mots uniques au total) — troisième tranche B2, dans la perspective des repères CECRL (500/1 000/2 000/5 000)
- **2.9.0** (build du 2026-11-20 à 18:08 UTC) : banque de vocabulaire B2 portée à 1 030 mots (4 530 mots uniques au total) — deuxième tranche B2, dans la perspective des repères CECRL (500/1 000/2 000/5 000)
- **2.8.0** (build du 2026-11-20 à 16:25 UTC) : banque de vocabulaire B2 portée à 848 mots (4 348 mots uniques au total) — première tranche B2, dans la perspective des repères CECRL (500/1 000/2 000/5 000)
- **2.7.0** (build du 2026-11-20 à 15:49 UTC) : banque de vocabulaire B1 portée à 2 000 mots (3 900 mots uniques au total), dans la perspective des repères CECRL (500/1 000/2 000/5 000)
- **2.6.0** (build du 2026-11-20 à 15:27 UTC) : banque de vocabulaire B1 portée à 1 200 mots (3 100 mots uniques au total), dans la perspective des repères CECRL (500/1 000/2 000/5 000)
- **2.5.0** (build du 2026-11-20 à 14:37 UTC) : banque de vocabulaire A2 portée à 1 000 mots (2 300 mots uniques au total), dans la perspective des repères CECRL (500/1 000/2 000/5 000)
- **2.4.0** (build du 2026-11-20 à 14:12 UTC) : banques de vocabulaire élargies — 500 mots en A1, 400 en A2/B1/B2 (1 700 mots uniques au total), dans la perspective des repères CECRL (500/1 000/2 000/5 000)
- **2.3.0** (build du 2026-11-20 à 13:32 UTC) : banques de vocabulaire portées à 200 mots par niveau (800 mots au total), dont 10 tirés au sort à chaque chargement de la page
- **2.2.0** (build du 2026-11-20 à 12:45 UTC) : banques de 100 mots de vocabulaire par niveau (400 mots au total), dont 10 tirés au sort à chaque chargement de la page pour les cartes mémoire et le quiz du module vocabulaire
- **2.1.0** (build du 2026-11-20 à 12:30 UTC) : un module de vocabulaire thématique par niveau (10 mots + quiz chacun) — famille/couleurs (A1), ville et voyage (A2), travail et émotions (B1), société et mots abstraits (B2) — soit 23 leçons au total
- **2.0.0** (build du 2026-11-20 à 12:05 UTC) : sélecteur de niveau A1/A2/B1/B2 avec 11 nouvelles leçons (5 A2, 4 B1, 2 B2), examens et progression par niveau
- **1.0.0** (build du 2026-11-20 à 11:50 UTC) : première version — 8 leçons de grec A1 (alphabet, salutations, être/avoir, articles, verbes en -ω, nombres, vie quotidienne, culture), cartes mémoire, quiz avec générateur de questions (214 questions disponibles), examen final 20 questions, progression locale
