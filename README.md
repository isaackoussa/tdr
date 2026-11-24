# TDR — Théorie du risque, Master 2

Application web d'apprentissage : les 14 documents du Master expliqués un par un.
128 leçons avec un encadré « En clair », formules en LaTeX, démonstrations, tous les
exercices des polycopiés corrigés, quiz, cartes mémoire, 6 simulateurs, 14 podcasts,
et des demandes à l'IA (Gemini) : podcast sur mesure, explication, exemple, exercices,
quiz, fiche, question libre.

## Mettre en ligne avec Netlify

1. Netlify → **Add new project** → **Import an existing project** → GitHub → `tdr`.
   Tout est déjà réglé par `netlify.toml` : ne rien remplir, cliquer sur **Deploy**.
2. Créer une clé Gemini sur <https://aistudio.google.com/apikey>.
3. Netlify → **Project configuration → Environment variables** :

| Variable | Rôle | Obligatoire |
|---|---|---|
| `GEMINI_API_KEY` | une clé Gemini, ou plusieurs séparées par des virgules | oui |
| `GEMINI_API_KEY_1` … `_20` | autre façon d'ajouter des clés, une par variable | non |
| `ACCES_CODE` | mot de passe demandé avant chaque demande : protège ton quota | conseillé |
| `GEMINI_MODEL` | modèle de texte (défaut `gemini-3.8-flash`) | non |
| `GEMINI_TTS_MODEL` | modèle de voix (défaut `gemini-3.8-flash-tts`) | non |
| `VOIX_AWA`, `VOIX_KOFI` | voix (défaut `Kore`, `Puck`) | non |

4. **Deploys → Trigger deploy** : une variable n'est prise en compte qu'après un déploiement.

Avec plusieurs clés, le site les utilise à tour de rôle ; si l'une est épuisée, refusée ou en
panne, il passe à la suivante. Chez Google le quota est compté **par projet** : des clés d'un
même projet partagent le même quota.

Ne jamais écrire la clé dans un fichier du dépôt. Sans `ACCES_CODE`, toute personne qui
connaît l'adresse du site peut utiliser ton quota Gemini (dans la limite de 12 demandes
de texte et 30 de voix par minute et par adresse).

Le dépôt sert aussi sans IA : `public/index.html` s'ouvre directement dans un navigateur.

## Essayer sur son ordinateur

    node outils/serveur.mjs --essai     # fausses réponses, sans clé
    node outils/serveur.mjs             # vraies réponses, si GEMINI_API_KEY est défini

puis <http://localhost:4190>.

## Organisation

| Dossier | Rôle |
|---|---|
| `public/cours/01` à `14` | un fichier par document (leçons, QUIZ, CARTES, PODCAST) |
| `public/cours/20` à `24` | démonstrations et exercices ajoutés (`PLUS`) |
| `public/cours/30` à `32` | encadrés « En clair » (`EXPLIQUE`) |
| `public/js/` | moteur, voix, simulateurs, demandes IA, pages |
| `public/audio/` | podcasts MP3 et minutages |
| `public/vendor/katex/` | KaTeX 0.16.11 (licence MIT) |
| `netlify/functions/` | `/api/ia` (texte) et `/api/voix` (son) |
| `outils/` | vérification, serveur local, fabrication des podcasts |

## Modifier un cours

1. Éditer le fichier de `public/cours/`. Ne jamais écrire `${` ni d'accent grave dans le texte.
2. Vérifier : `node outils/verif.mjs` (formules, blocs, quiz, « En clair »).
3. Si un dialogue a changé, sous Windows : `node outils/scripts-podcasts.mjs s.json`
   puis `outils\podcasts.ps1 -Json <chemin>\s.json -Tmp <dossier> -Out <chemin>\public\audio`.

La progression et les demandes sont gardées dans le navigateur. Une demande à l'IA envoie à
Google le texte de la leçon et ce que tu as écrit, rien d'autre.
