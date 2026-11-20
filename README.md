
Aucune installation nécessaire : ouvre simplement `index.html` dans un navigateur.

Ou avec un petit serveur local :

```bash
python3 -m http.server 8080
# puis ouvrir http://localhost:8080
```

## Niveaux

Un menu déroulant dans l'en-tête permet de choisir le niveau ; la progression et l'examen final sont enregistrés séparément pour chaque niveau.

### A1 · Débutant — 8 leçons

1. L'alphabet grec et sa prononciation (24 lettres, sons doubles, accent tonique)
2. Se saluer et se présenter (Γεια σου / Γεια σας, se présenter, formules de politesse)
3. Είμαι et έχω : être et avoir (conjugaison au présent)
4. Les articles : ο, η, το (les trois genres, article défini et indéfini)
5. Les verbes en -ω au présent (modèle γράφω)
6. Les nombres (0 à 20 et au-delà, demander le prix)
7. La vie quotidienne (jours de la semaine, demander son chemin, l'heure)
8. La Grèce : culture et civilisation (symboles, grandes dates, mots français venus du grec)

### A2 · Élémentaire — 5 leçons

1. L'aoriste : le passé simple (l'augment, modèles διαβάζω / γράφω, irréguliers έφαγα, ήπια, είδα, ήρθα)
2. Le futur avec θα (particule θα + forme perfective, négation δεν θα, mots du temps)
3. Les possessifs (μου, σου, του… placés après le nom)
4. Le comparatif et le superlatif (πιο + adjectif, irréguliers καλύτερος, χειρότερος…)
5. Sorties et invitations (Θέλεις να… ; Ας πάμε !, σε + article)

### B1 · Intermédiaire — 4 leçons

1. L'imparfait (παρατατικός) : ήμουν, είχα…, contraste imparfait / aoriste
2. Le passé composé (έχω + forme perfective non conjuguée)
3. Les pronoms relatifs (που, ο οποίος, όπου)
4. Donner son avis et argumenter (νομίζω ότι, connecteurs logiques)

### B2 · Avancé — 2 leçons

1. Les verbes déponents (κοιμάμαι, φοβάμαι…) et la voix moyenne
2. La Grèce moderne : institutions et Europe (république 1974, la Βουλή, Europe 1981, euro 2002, fêtes nationales)

## Fonctionnalités

- **Cours** : règles claires + exemples pour chaque leçon
- **Cartes mémoire** : mot grec → traduction française, à retourner, avec progression
- **Quiz** : choix multiples, questions et réponses mélangées, questions générées à partir des tableaux de conjugaison et du vocabulaire, résultat détaillé
- **Examen final** : 20 questions tirées au sort dans les leçons du niveau choisi, un examen distinct par niveau (A1 à B2), meilleur score et nombre de tentatives enregistrés
- **Niveaux** : menu déroulant A1 / A2 / B1 / B2 dans l'en-tête, leçons et progression par niveau (niveau mémorisé dans le navigateur)
- **Progression** : meilleur score par leçon et cartes consultées, sauvegardés dans le navigateur (localStorage), sans compte ni serveur
- **Numéro de version** affiché en bas de page pour vérifier que tu utilises la dernière version

## Versions

- **2.0.0** (build du 2026-11-20 à 12:05 UTC) : sélecteur de niveau A1/A2/B1/B2 avec 11 nouvelles leçons (5 A2, 4 B1, 2 B2), examens et progression par niveau
- **1.0.0** (build du 2026-11-20 à 11:50 UTC) : première version — 8 leçons de grec A1 (alphabet, salutations, être/avoir, articles, verbes en -ω, nombres, vie quotidienne, culture), cartes mémoire, quiz avec générateur de questions (214 questions disponibles), examen final 20 questions, progression locale
__README__
echo "README OK"