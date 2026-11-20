# Révision Grec A1

Application web simple (HTML/CSS/JavaScript, sans dépendance) pour apprendre les bases du grec moderne de niveau A1 — en français. Fonctionne 100 % hors ligne.

## Lancer l'application

Aucune installation nécessaire : ouvre simplement `index.html` dans un navigateur.

Ou avec un petit serveur local :

```bash
python3 -m http.server 8080
# puis ouvrir http://localhost:8080
```

## Contenu

8 leçons de niveau A1 :

1. L'alphabet grec et sa prononciation (24 lettres, sons doubles, accent tonique)
2. Se saluer et se présenter (Γεια σου / Γεια σας, se présenter, formules de politesse)
3. Είμαι et έχω : être et avoir (conjugaison au présent)
4. Les articles : ο, η, το (les trois genres, article défini et indéfini)
5. Les verbes en -ω au présent (modèle γράφω)
6. Les nombres (0 à 20 et au-delà, demander le prix)
7. La vie quotidienne (jours de la semaine, demander son chemin, l'heure)
8. La Grèce : culture et civilisation (symboles, grandes dates, mots français venus du grec)

## Fonctionnalités

- **Cours** : règle claire + exemples pour chaque leçon
- **Cartes mémoire** : mot grec → traduction française, à retourner, avec progression
- **Quiz** : choix multiples, questions et réponses mélangées, questions générées à partir des tableaux de conjugaison et du vocabulaire, résultat détaillé
- **Examen final** : 20 questions tirées au sort dans les 8 leçons, thème indiqué à chaque question, meilleur score et nombre de tentatives enregistrés
- **Progression** : meilleur score par leçon et cartes consultées, sauvegardés dans le navigateur (localStorage), sans compte ni serveur
- **Numéro de version** affiché en bas de page pour vérifier que tu utilises la dernière version

## Versions

- **1.0.0** (build du 2026-11-20 à 11:50 UTC) : première version — 8 leçons de grec A1 (alphabet, salutations, être/avoir, articles, verbes en -ω, nombres, vie quotidienne, culture), cartes mémoire, quiz avec générateur de questions (214 questions disponibles), examen final 20 questions, progression locale
