LOGIQUE('ruine', String.raw`
## 1
p On veut la loi d'un total de sinistres, mais additionner des lois est compliqué.
i Transformer chaque loi en fonction, de sorte que la somme devienne un produit.
d Fonctions génératrices : on calcule facilement puis on reconnaît la loi.
s Pour la log-normale, l'espérance de $e^{tX}$ est infinie : seule la fonction caractéristique marche toujours.
e Appliquons cela à un portefeuille, police par police.
## 2
p Quelle charge attendre d'un portefeuille de polices connues ?
i Chaque police est « sinistre ou pas » fois « coût ».
d Les espérances s'additionnent toujours ; les variances, grâce à l'indépendance.
s Avec une inondation commune, les polices sont dépendantes : la variance réelle est bien plus grande.
e Suivre chaque police devient vite trop lourd.
## 3
p Pourquoi savoir quelle police a eu le sinistre, si seul le total compte ?
i Compter les sinistres puis additionner leurs coûts.
d En conditionnant par le nombre, on sépare l'aléa du nombre et celui du coût : Wald.
s Si le nombre dépend des coûts, la factorisation tombe.
e Et si le portefeuille mélange plusieurs populations ?
## 4
p Les conducteurs ne se ressemblent pas, et la loi du total n'a pas de formule.
i Mélanger les lois ; regrouper les Poisson ; simuler le reste.
d Le mélange de Poisson composés reste un Poisson composé : la structure se conserve.
s L'approximation normale suppose des queues légères : elle manque justement les gros sinistres.
e Quand la queue fait peur, on la cède.
## 5
p Comment se protéger sans perdre le métier ?
i Découper la charge : par proportion, par sinistre au-dessus d'un seuil, ou sur le total.
d Chaque contrat est une fonction du sinistre ; son prix est l'espérance d'une tranche.
s Si on remboursait plus que l'aggravation du sinistre, l'assuré gagnerait à l'aggraver.
e Avant et après réassurance, lequel est le moins risqué ?
## 6
p Comparer deux risques sans choisir une formule de prix.
i Demander l'accord de tout le monde : de tous ceux qui préfèrent plus, ou de tous les prudents.
d Deux ordres, testables sur les fonctions de répartition ou les primes stop-loss.
s Beaucoup de risques ne sont pas comparables : l'unanimité n'existe pas toujours.
e Il faut pourtant un prix : un seul nombre.
## 7
p Transformer une loi en un prix.
i Partir de la moyenne et ajouter une compensation du risque.
d Chaque principe respecte certaines propriétés et en viole d'autres.
s À la moyenne pure, la ruine est certaine à long terme (leçon 10).
e Le prix protège en moyenne ; le capital protège des mauvais jours.
## 8
p Combien de capital pour survivre à une mauvaise année ?
i Fixer une probabilité tolérée et lire la perte correspondante.
d VaR, puis ES pour regarder derrière la porte.
s La VaR peut dire que deux crédits séparés sont sans risque et leur réunion risquée.
e Un an ne suffit pas : regardons le temps passer.
## 9
p Modéliser l'arrivée des sinistres au fil du temps.
i Aucune mémoire, aucune simultanéité, rythme constant.
d Ces trois idées imposent Poisson pour le nombre et l'exponentielle pour l'attente.
s Avec la saison des pluies, le rythme change : le modèle doit devenir inhomogène.
e On ajoute les primes : l'assureur survivra-t-il ?
## 10
p Primes régulières contre sinistres aléatoires : quelle chance d'être un jour dans le rouge ?
i Chercher l'exposant $R$ qui rend $e^{-RU_t}$ équitable.
d Ce jeu équitable borne la ruine par $e^{-Ru}$ : le capital protège exponentiellement.
s Sans chargement, $R=0$ : la borne vaut 1, la ruine est certaine. Avec queues lourdes, $R$ n'existe pas.
e Pour les queues lourdes, il faut la théorie des extrêmes.
`);
LOGIQUE('extremes', String.raw`
## 1
p Les modèles calés sur les jours ordinaires ratent les catastrophes.
i Étudier les maxima pour eux-mêmes.
d Une théorie jumelle du théorème central limite, pour les extrêmes.
s Une normale donne au krach de 1987 une probabilité quasi nulle : il a pourtant eu lieu.
e Commençons par ce que disent les données.
## 2
p Que peut-on apprendre de la queue avec $n$ observations ?
i Les trier et regarder les plus grandes.
d Les lois des rangs s'obtiennent en comptant les succès d'une binomiale.
s Au-delà du maximum observé, l'empirique dit zéro : il faut extrapoler.
e Extrapoler avec quelle loi ?
## 3
p Le maximum dépend de la loi de départ, inconnue.
i Le recentrer et le réduire, comme une moyenne dans le TCL.
d À la limite, trois formes seulement, quelle que soit la loi.
s Sans normalisation, le maximum s'écrase sur la borne supérieure.
e Trois cas à traiter, c'est encore trop.
## 4
p Il faudrait choisir la famille avant d'estimer.
i Une formule unique avec un paramètre de forme.
d Les données choisissent elles-mêmes le signe de $\xi$.
s Se tromper de signe, c'est déclarer bornée une perte qui ne l'est pas.
e Un maximum par bloc, c'est peu de données.
## 5
p Une année à deux krachs ne compte qu'une fois.
i Garder tout ce qui dépasse un seuil.
d Les excès suivent une loi unique, avec le même $\xi$ : les deux théories n'en font qu'une.
s Le théorème est asymptotique : il faut un seuil haut.
e Haut comment ?
## 6
p Choisir le seuil sans tricher.
i Pour une GPD, l'excès moyen est une droite en fonction du seuil.
d Dès que le graphique devient droit, on est dans la zone valable.
s Seuil trop haut : trois points, n'importe quelle droite passe.
e Au-dessus du seuil, on estime.
## 7
p Trouver $\xi$ à partir de peu de points.
i Pour une Pareto, le logarithme est exponentiel de moyenne $\xi$ : une simple moyenne suffit.
d C'est Hill ; les autres estimateurs étendent l'idée à tous les signes.
s Utilisé avec $\xi\le0$, Hill donne quand même un nombre positif : faux.
e On a la queue : on peut y lire des quantiles.
## 8
p Calculer une perte plus rare que tout ce qu'on a vu.
i Probabilité de dépasser = probabilité de passer le seuil fois la queue GPD.
d On inverse : c'est la VaR extrême, puis l'ES.
s Appliqué à des rendements bruts, dépendants, le calcul est biaisé : on filtre d'abord.
e Ce filtrage est l'idée centrale de l'article sur les marchés africains.
`);
LOGIQUE('bale', String.raw`
## 1
p Pourquoi imposer du capital à une banque ?
i Elle joue avec l'argent des autres : elle garde les gains et partage les pertes.
d Le capital lui fait supporter les premières pertes : protection et discipline à la fois.
s Sans capital et avec dépôts garantis, prendre des risques énormes devient rationnel.
e Combien, et qui décide ?
## 2
p Une banque internationale choisirait le pays le moins exigeant.
i Une règle commune.
d Chaque version corrige l'abus permis par la précédente.
s Des pondérations grossières poussent à choisir les clients les plus risqués de chaque case.
e Un seul ratio peut-il tout voir ?
## 3
p Un ratio ne voit ni la gestion ni les risques difficiles à chiffrer.
i Trois regards : règle, superviseur, marché.
d Ce que l'un manque, un autre le voit.
s Retire la transparence : le marché ne peut plus sanctionner.
e Entrons dans le premier pilier.
## 4
p Cent francs prêtés à un État et à une PME ne pèsent pas pareil.
i Pondérer l'exposition par son risque.
d On additionne des francs comparables et on exige 8 %.
s $K$ retire la perte moyenne : elle est déjà payée par la marge d'intérêt.
e Le crédit n'est pas le seul danger.
## 5
p Prix qui bougent, fraude, panne : comment les mettre dans la même balance ?
i Calculer un capital puis le convertir en actifs pondérés ($\times12{,}5$).
d Le dénominateur reste unique.
s Le $\sqrt t$ suppose des jours indépendants : en crise ils ne le sont pas.
e La règle est commune ; la banque, elle, connaît son propre risque.
## 6
p Le capital réglementaire n'est pas le vrai risque de la banque.
i Séparer ce qui est attendu de ce qui surprend.
d L'attendu va dans le prix, la surprise dans le capital, l'extrême dans la faillite tolérée.
s Compter l'attendu deux fois renchérit inutilement le crédit.
e Ce capital total doit être réparti.
## 7
p Comment facturer à chaque métier un risque qui se diversifie entre eux ?
i Mesurer ce que chacun ajoute à la marge.
d Si le risque est homogène, les contributions marginales s'additionnent exactement (Euler).
s La répartition proportionnelle ignore que certains métiers réduisent le risque des autres.
e On peut maintenant juger la performance.
## 8
p Deux métiers gagnent autant, mais l'un immobilise deux fois plus de capital.
i Rapporter le gain net du risque au capital utilisé.
d Un taux (RAROC) ou une richesse (EVA), selon ce qui est rare.
s Maximiser le seul taux conduit à refuser de bons projets plus gros.
e L'étude de cas enchaîne tout.
## 9
p Passer d'un bilan à une décision.
i Suivre l'ordre : exigence, mesure, agrégation, allocation, performance.
d Chaque résultat est l'entrée du suivant.
s Oublier un risque au début (le marché) fausse tout le reste.
e La VaR utilisée ici est l'objet du document suivant.
`);
LOGIQUE('var', String.raw`
## 1
p Un directeur veut un seul chiffre pour mille positions.
i Exprimer tout en perte possible, à une probabilité donnée.
d Un langage commun à tous les marchés.
s Un seul chiffre cache la forme de la queue.
e Perte de quoi exactement ?
## 2
p Comparer des gains à des dates et des tailles différentes.
i Travailler en rendements, additifs dans le temps si on prend le logarithme.
d On peut passer d'un jour à une année en additionnant.
s Les rendements logarithmiques ne s'additionnent pas entre actifs : pour un portefeuille, on utilise les arithmétiques.
e Il faut une loi pour ces rendements.
## 3
p Transformer une loi en une perte.
i Standardiser : tout se ramène au quantile de la loi réduite.
d La volatilité devient le seul ingrédient à estimer.
s Si les queues sont épaisses, la normale sous-estime : 3,365 contre 2,326 pour une Student à 5 degrés sans échelle.
e La volatilité change avec le temps.
## 4
p Le risque de demain n'est pas le risque moyen.
i Conditionner par l'information d'aujourd'hui.
d Moyenne et variance prévues remplacent les moyennes historiques.
s Multiplier par $\sqrt T$ des jours corrélés sous-estime.
e Et si l'on ne veut choisir aucune loi ?
## 5
p Toute loi choisie peut être fausse.
i Laisser parler le passé.
d Le quantile observé est la VaR ; pondérer améliore la réactivité.
s Une catastrophe absente de la fenêtre est impossible pour la méthode.
e Entre « tout modèle » et « aucun modèle », il y a des compromis.
## 6
p Réagir vite, voir les queues, traiter les options.
i Modéliser chacun une partie : volatilité, queue ou quantile.
d On choisit selon ce qui domine le risque du portefeuille.
s RiskMetrics suppose la linéarité : il se trompe sur les options.
e Passons à plusieurs actifs.
## 7
p Le risque d'un tout n'est pas la somme des risques.
i La covariance compte autant que la variance.
d Une forme quadratique $x'\Sigma x$ contient tout.
s En crise, les corrélations montent vers 1 : le gain de diversification fond.
e D'où vient le risque ?
## 8
p Quel actif faut-il réduire ?
i Dériver la VaR par rapport à chaque position.
d Comme la VaR est homogène, les contributions s'additionnent.
s Une dérivée vaut pour un petit changement, pas pour un retrait complet.
e La VaR est utile ; est-elle une bonne mesure ?
## 9
p Une mesure peut pousser à de mauvaises décisions.
i Écrire ce qu'on attend d'elle : quatre axiomes.
d La VaR viole la sous-additivité ; l'ES, moyenne au-delà, la respecte.
s Un trader limité en VaR peut vendre des pertes rares et énormes, invisibles.
e Toutes ces méthodes demandent une volatilité : c'est GARCH.
`);
LOGIQUE('garch', String.raw`
## 1
p Avant de modéliser, que montrent toutes les séries ?
i Lister les régularités communes.
d Un bon modèle doit reproduire les huit.
s Un bruit gaussien indépendant en rate presque toutes.
e La plus importante : la volatilité dure.
## 2
p L'efficience interdit de prévoir le rendement.
i Rien n'interdit de prévoir son ampleur.
d On modélise la variance conditionnelle, la moyenne restant libre.
s Confondre variance conditionnelle et totale fait croire que la série n'est pas stationnaire.
e Quelle équation pour cette variance ?
## 3
p Les grands chocs se suivent.
i Faire dépendre la variance du carré d'hier.
d Le carré devient un AR(1) : clusters et queues épaisses sortent tout seuls.
s Si $\alpha_1\ge1$, la variance explose ; au-delà de $\frac1{\sqrt3}$, la kurtosis est infinie.
e Les rendements ont aussi une moyenne.
## 4
p Donner un intervalle honnête pour demain.
i Superposer un modèle de moyenne et un ARCH sur l'erreur.
d La largeur suit le dernier choc.
s Un intervalle à variance fixe est trop étroit en crise, trop large au calme.
e ARCH oublie trop vite.
## 5
p La volatilité reste élevée des semaines : il faudrait beaucoup de retards.
i Ajouter la variance d'hier, qui résume tout le passé.
d Trois paramètres remplacent une infinité.
s Si $\alpha_1+\beta_1=1$, un choc ne s'oublie jamais : IGARCH.
e Comment trouver ces paramètres ?
## 6
p La variance n'est pas observée : pas de régression possible.
i Choisir les paramètres qui rendent les rendements observés les plus plausibles.
d Même avec une loi fausse, moyenne et variance restent bien estimées.
s Sans corriger les écarts-types, les tests sont trop optimistes.
e Reste à le faire sur machine.
## 7
p Un logiciel donne toujours un résultat : est-il bon ?
i Examiner ce que le modèle n'a pas expliqué.
d Résidus sans mémoire, carrés sans mémoire : le modèle a fait son travail.
s Les bornes automatiques de SAS ignorent le GARCH : à recalculer.
e L'article suivant assemble GARCH, extrêmes et copules.
`);
LOGIQUE('gbongue', String.raw`
## 1
p Comment isoler l'effet d'une guerre parmi tous les chocs ?
i Comparer une période calme et une période de crise, en écartant la Covid.
d La différence est attribuée à la crise.
s Garder la Covid mélangerait deux causes.
e Il faut mesurer le risque de chaque marché.
## 2
p Les rendements ont une mémoire et une volatilité changeante.
i Les filtrer, en traitant les baisses à part.
d Il reste un résidu pur, indépendant.
s Sans filtrage, la théorie des extrêmes ne s'applique pas.
e Le résidu a des queues épaisses.
## 3
p Modéliser le centre et les queues en même temps force un compromis.
i Centre empirique, queues GPD.
d Chaque zone a l'outil adapté.
s Une échelle négative dans le tableau 7 est impossible : colonnes sans doute inversées.
e Les marchés ne sont pas isolés.
## 4
p Comment les marchés tombent-ils ensemble ?
i Séparer chaque loi de la façon dont elles se lient.
d Les copules se comparent sur leur dépendance de queue.
s La gaussienne a une dépendance de queue nulle : elle ignore les krachs communs.
e On a toutes les pièces : simulons.
## 5
p Aucune formule ne donne la VaR de l'ensemble.
i Fabriquer des milliers de scénarios, puis vérifier sur le passé.
d Les tests jugent fréquence et regroupement des dépassements.
s Une VaR juste en moyenne mais dépassée dix jours de suite est mauvaise.
e Qu'est-ce que cela change pour l'Afrique ?
## 6
p Séparer l'effet de la crise de celui du modèle.
i Différence des différences.
d Le biais commun aux deux périodes s'annule.
s Si un autre choc frappe T2, il est compté avec la guerre.
e Conclusion : couvrir, diversifier, renforcer les investisseurs locaux.
`);
