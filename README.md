# TDR — Théorie du risque, Master 2

Application web d'apprentissage : les 14 documents du Master expliqués un par un.
118 leçons, formules en LaTeX, démonstrations, exercices corrigés, quiz, cartes
mémoire, 6 simulateurs et 14 podcasts.

## Lancer

Ouvrir `index.html` dans un navigateur suffit. Ou, pour un serveur local :

    python -m http.server 4190

puis <http://localhost:4190>. Aucune installation, aucun appel réseau.

## Publier avec GitHub Pages

Settings → Pages → Deploy from a branch → `main` / `(root)`.

## Organisation

| Dossier | Rôle |
|---|---|
| `cours/` | un fichier par document (leçons, QUIZ, CARTES, PODCAST) |
| `js/moteur.js` | transforme le texte balisé en pages |
| `js/oral.js` | lecture à voix haute des leçons et lecteur de podcasts |
| `js/labos.js` | simulateurs (ruine, Poisson composé, GEV, VaR, GARCH, Euler) |
| `audio/` | podcasts MP3 et minutages |
| `vendor/katex/` | KaTeX 0.16.11 (licence MIT) |
| `outils/` | vérification et fabrication des podcasts |

## Modifier un cours

1. Éditer le fichier de `cours/`. Ne jamais écrire `${` ni d'accent grave dans le texte.
2. Vérifier : `node outils/verif.mjs` (formules, blocs, quiz).
3. Si un dialogue a changé, sous Windows : `node outils/scripts-podcasts.mjs s.json`
   puis `outils\podcasts.ps1 -Json <chemin>\s.json -Tmp <dossier> -Out <chemin>\audio`.

La progression est gardée dans le navigateur (localStorage), jamais envoyée.
