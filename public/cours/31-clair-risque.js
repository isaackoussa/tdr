EXPLIQUE('ruine', String.raw`
## 1
Un sinistre, c'est deux questions : *combien* y en aura-t-il (une loi discrète) et *combien* coûte chacun (une loi continue). Les **fonctions génératrices** sont des cartes d'identité : elles transforment les sommes de variables en produits, bien plus faciles.
- $N$ : nombre ; $X$ : coût ; $g_X(t)=E[e^{tX}]$ ; $\varphi_X$ : version complexe, qui existe toujours ; $P_N(z)$ : pour les entiers.

**À retenir** : les moments ne suffisent pas toujours (contre-exemple log-normal).
## 2
On additionne police par police : chacune a un sinistre avec sa probabilité, et un coût. La moyenne s'additionne ; la variance a deux morceaux, l'aléa du coût et l'aléa « sinistre ou pas ».
- $Z_i$ : 1 si sinistre ; $p_i$ : probabilité ; $S$ : total.

**À retenir** : l'indépendance permet d'additionner les variances.
## 3
Au lieu de suivre chaque police, on compte les sinistres du portefeuille puis on additionne leurs coûts : une somme dont le **nombre de termes est aléatoire**. Wald donne moyenne et variance.
- $S=\sum_{n\le N}X_n$ ; $E(N)$ : fréquence ; $E(X)$ : coût moyen.

**À retenir** : $E(S)=E(N)E(X)$ ; pour Poisson, $\operatorname{Var}(S)=\lambda E(X^2)$.
## 4
Mélanger des populations ajoute une variance *entre* groupes. Les Poisson composés s'additionnent sans changer de famille : on peut regrouper des branches. Et quand la formule exacte manque, on simule.
- $\mathcal P(\lambda)$ : Poisson ; $*$ : convolution, la loi d'une somme.

**À retenir** : le modèle collectif est plus prudent que l'individuel.
## 5
L'assureur s'assure à son tour. **Quote-part** : partager tout. **Excédent de sinistre** : le réassureur paie au-dessus d'une priorité, sinistre par sinistre. **Stop-loss** : au-dessus d'un seuil sur le total.
- $P$ : priorité ; $L$ : portée ; $I(S)$ : remboursement.

**À retenir** : $E[\min(X,P)]$ est l'aire sous la queue entre 0 et $P$.
## 6
Entre deux pertes, laquelle est pire ? **Ordre 1** : pire dans tous les cas. **Ordre 2** : pire pour quiconque n'aime pas le risque. Même moyenne mais plus dispersé, c'est pire à l'ordre 2.
- $X\ge_1Y$, $X\ge_2Y$ : $X$ est plus dangereux ; $F_X$ : fonction de répartition.

**À retenir** : ici ce sont des **pertes** ; plus grand veut dire pire.
## 7
Combien facturer ? Au moins la perte moyenne, plus un **chargement** pour le risque. Chaque règle de prime a un défaut ; on les compare à une liste de propriétés souhaitables.
- $H(X)$ : prime ; $\theta$, $\alpha$ : chargements ; $u$ : utilité.

**À retenir** : le principe de variance peut demander plus que la perte maximale.
## 8
La **VaR** répond : « quelle perte n'est dépassée que dans $1-\alpha$ des cas ? ». L'**ES** répond : « et quand on la dépasse, combien perd-on en moyenne ? ». La seconde récompense toujours la diversification.
- $\alpha$ : niveau (99,5 %) ; $\rho$ : mesure de risque ; $\Phi^{-1}$ : quantile normal.

**À retenir** : VaR = porte d'entrée de la catastrophe ; ES = ce qu'il y a derrière.
## 9
Les sinistres arrivent un par un, au hasard, sans mémoire : c'est le **processus de Poisson**. Le temps d'attente entre deux est exponentiel.
- $N_t$ : nombre à la date $t$ ; $\lambda$ : intensité ; martingale : jeu équitable.

**À retenir** : $N_t-\lambda t$ est un jeu équitable.
## 10
L'assureur démarre avec $u$, encaisse $c$ par unité de temps, paie des sinistres. Sera-t-il un jour dans le rouge ? Sans chargement, **sûrement**. Avec chargement, la probabilité décroît exponentiellement avec le capital : **Lundberg**.
- $u$ : capital ; $c$ : prime ; $\rho$ : chargement ; $R$ : coefficient d'ajustement ; $\psi(u)$ : probabilité de ruine.

**À retenir** : $\psi(u)\le e^{-Ru}$, si les queues ne sont pas trop lourdes.
`);
EXPLIQUE('extremes', String.raw`
## 1
La moyenne décrit les jours ordinaires ; les faillites viennent des jours extraordinaires. La théorie des **valeurs extrêmes** étudie le maximum, comme le théorème central limite étudie la somme.
- VaR, fonds propres, ratio McDonough : le vocabulaire bancaire du contexte.

**À retenir** : sept catastrophes (Herstatt, Barings, LTCM…) ont motivé ce cours.
## 2
On trie les observations : la plus petite, la deuxième… Ce sont les **statistiques d'ordre**. Les données donnent la courbe en escalier $F_n$, excellente au centre, muette au-delà du maximum observé.
- $X_{(k,n)}$ : la $k$-ième valeur ; $\bar F$ : probabilité de dépasser ; $F^{\leftarrow}$ : quantile.

**À retenir** : pour aller plus loin que les données, il faut un modèle de queue.
## 3
On découpe le temps en blocs et on garde le **maximum** de chaque bloc. Bien normalisé, ce maximum suit l'une de **trois** lois seulement : Fréchet (queue lourde), Gumbel (queue légère), Weibull (valeur maximale finie).
- $M_n$ : maximum ; $a_n$ : échelle ; $b_n$ : position.

**À retenir** : Pareto → Fréchet ; exponentielle → Gumbel ; uniforme → Weibull.
## 4
Les trois lois se résument en une, la **GEV**, avec un bouton $\xi$ : positif = dangereux, nul = calme, négatif = borné. On en tire le « niveau centennal ».
- $\mu$ : position ; $\sigma$ : échelle ; $\xi$ : épaisseur de queue ; $T$ : durée de retour.

**À retenir** : si $\xi\ge\frac12$, variance infinie ; $\xi\ge1$, moyenne infinie.
## 5
Garder un seul maximum par an gaspille des données. La méthode **POT** garde tout ce qui dépasse un seuil ; ces dépassements suivent une loi **GPD**, avec le **même** $\xi$.
- $u$ : seuil ; $y$ : excès au-dessus ; $G_{\xi,\sigma}$ : GPD.

**À retenir** : monter le seuil ne change pas $\xi$, seulement l'échelle ($+\xi\Delta u$).
## 6
Où placer le seuil ? On trace l'**excès moyen** au-dessus de $u$ : quand la courbe devient droite, la GPD est valable.
- $e(u)$ : excès moyen ; pente positive : queue lourde.

**À retenir** : trop bas = biais ; trop haut = trop peu de points.
## 7
Comment estimer $\xi$ ? Par maximum de vraisemblance, ou directement avec les plus grandes valeurs : **Hill** est la moyenne des logarithmes des dépassements relatifs.
- $k$ : nombre de grandes valeurs utilisées ; $\ell$ : log-vraisemblance.

**À retenir** : Hill seulement si $\xi>0$ ; choisir $k$ sur un plateau.
## 8
Avec la queue estimée, on calcule la perte dépassée une fois sur cent, même si on l'a à peine observée : on prolonge la courbe.
- $N_u$ : nombre de dépassements ; $n$ : taille ; $p$ : niveau.

**À retenir** : le facteur est $\frac\sigma\xi$ (le document l'inverse) ; vérifie les unités.
`);
EXPLIQUE('bale', String.raw`
## 1
Une banque prête l'argent des autres. Son **capital** est le coussin qui encaisse les pertes avant les déposants. Il rassure, protège et discipline.
- Capital = actif − dettes ; levier : combien de francs d'actif pour un franc de capital.

**À retenir** : solvabilité (assez de capital) et liquidité (assez de cash) sont deux choses.
## 2
Après chaque crise, une règle : **Bâle I** (8 % simple), **Bâle II** (trois piliers), **Bâle III** (meilleur capital, liquidité, levier), **Bâle IV** (limiter les modèles internes).
- LCR : tenir 30 jours ; NSFR : tenir un an ; levier : filet sans pondération.

**À retenir** : plus de risque ⇒ plus de capital.
## 3
**Pilier 1** : les chiffres minimaux. **Pilier 2** : la banque s'évalue (ICAAP), le superviseur vérifie (SREP). **Pilier 3** : publier pour que le marché juge.

**À retenir** : un ratio respecté ne prouve pas une bonne gestion.
## 4
Chaque crédit est pondéré selon son risque : c'est le **RWA**. En approche avancée, la banque estime elle-même probabilité de défaut, perte et exposition.
- PD, LGD, EAD, M : défaut, perte, exposition, maturité ; $K$ : exigence par unité ; $12{,}5=1/8\%$.

**À retenir** : $K$ = quantile à 99,9 % de la perte, moins la perte moyenne.
## 5
**Marché** : les prix bougent (VaR à 10 jours, 99 %). **Opérationnel** : fraude, panne, erreur (15 % du produit net bancaire).
- $z$ : quantile ; $\sigma$ : volatilité ; PNB : produit net bancaire.

**À retenir** : on passe d'un jour à dix jours en multipliant par $\sqrt{10}$.
## 6
La perte **attendue** se met dans le prix ; la perte **inattendue** se met en capital ; au-delà, c'est la faillite. Le capital économique mesure la deuxième avec les modèles de la banque.
- EL = PD × LGD × EAD ; EC = VaR − EL.

**À retenir** : on ne met pas de capital pour ce qui est déjà dans le prix.
## 7
Le capital total est connu ; comment le répartir entre métiers ? **Proportionnel** (simple), **Euler** (contribution marginale, somme exacte), **Shapley** (moyenne de tous les ordres d'arrivée).
- $w_i$ : taille ; $\Sigma$ : covariances ; $\sigma_p$ : risque total.

**À retenir** : toujours vérifier que les parts redonnent le total.
## 8
Gagner 10 avec 100 de capital ou avec 50, ce n'est pas pareil. **RAROC** : rendement par franc de capital. **EVA** : richesse créée après avoir payé le capital.
- $c$ : coût du capital.

**À retenir** : capital rare → RAROC ; capital abondant → EVA.
## 9
On déroule tout sur une banque fictive : solvabilité, VaR, capital économique, allocation, performance. C'est l'entraînement parfait avant l'examen.

**À retenir** : le corrigé officiel oublie le risque de marché et une addition ; ici tout est refait.
`);
EXPLIQUE('var', String.raw`
## 1
La **VaR** est une phrase : « avec 99 % de confiance, je ne perdrai pas plus de tant d'ici demain ». Un seul chiffre pour tout un portefeuille : pratique pour rendre compte, limiter, décider.

**À retenir** : elle dit la porte, pas ce qu'il y a derrière.
## 2
Gain ou perte = prix d'aujourd'hui + revenus − prix d'hier. On préfère les rendements **logarithmiques** car ils s'additionnent dans le temps.
- $P_t$ : prix ; $D_t$ : dividende ; $r_t$ : arithmétique ; $R_t$ : logarithmique.

**À retenir** : trois ingrédients : une loi, un niveau, un horizon.
## 3
Si les rendements sont normaux, la VaR se calcule en une ligne : moyenne et volatilité suffisent. Avec une loi de Student, les queues plus épaisses donnent une VaR plus grande.
- $\alpha$ : probabilité de dépasser (1 %) ; $\Phi^{-1}(0{,}01)=-2{,}326$.

**À retenir** : VaR $=-\mu-\sigma\Phi^{-1}(\alpha)$ ; « 1 % » et « 99 % » désignent la même VaR.
## 4
La VaR de demain dépend de ce qu'on sait aujourd'hui : c'est la version **conditionnelle**. Pour un horizon plus long, on multiplie par racine du temps, **si** les rendements sont indépendants.
- $\Omega_t$ : information disponible ; $\rho$ : autocorrélation ; $T$ : nombre de jours.

**À retenir** : si $\rho>0$, la règle $\sqrt T$ sous-estime.
## 5
Sans choisir de loi : on rejoue le passé. **Simulation historique** : trier les rendements et lire le quantile. Variantes : rééchantillonner, lisser, donner plus de poids au récent.
- $T_e$ : fenêtre ; $\lambda$ : poids décroissant.

**À retenir** : simple et honnête, mais lente à réagir.
## 6
Avec un modèle : simuler (Monte-Carlo), suivre la volatilité (RiskMetrics, GARCH), modéliser la queue (extrêmes), ou modéliser directement le quantile (**CAViaR**).
- $h_t$ : variance du jour ; $\beta$ : paramètres.

**À retenir** : pour une loi elliptique, prévoir la volatilité, c'est prévoir la VaR.
## 7
Le risque d'un portefeuille dépend des **corrélations** : la VaR totale est en général plus petite que la somme des VaR. La différence est le gain de diversification.
- $w$ : poids ; $\Sigma$ : covariances ; $x$ : montants.

**À retenir** : somme des VaR = cas où tout bouge ensemble.
## 8
Qui apporte le risque ? **Marginale** : un franc de plus. **Incrémentale** : vraie différence si on change la position. **Composée** : la part de chacun, qui s'additionne.
- $\beta_i$ : sensibilité au portefeuille.

**À retenir** : la composante n'est pas la baisse si on retire l'actif.
## 9
La VaR ignore l'ampleur des catastrophes et peut punir la diversification. Une bonne mesure (**cohérente**) respecte quatre règles ; l'**Expected Shortfall** les respecte.

**À retenir** : deux obligations sûres séparément peuvent avoir une VaR positive ensemble.
`);
EXPLIQUE('garch', String.raw`
## 1
Tous les marchés ont les mêmes habitudes : rendements imprévisibles, mais **calmes et tempêtes qui durent**, et des extrêmes plus fréquents que la loi normale. On les teste avec Ljung-Box et Jarque-Bera.
- $S$ : asymétrie ; $K$ : épaisseur des queues (3 pour la normale).

**À retenir** : les rendements n'ont pas de mémoire, leurs carrés en ont.
## 2
On ne peut pas prévoir si le marché montera, mais on peut prévoir s'il sera **agité**. On modélise donc la variance de demain sachant aujourd'hui.
- $V(r_{t+1}|\Omega_t)$ : variance conditionnelle, qui change ; $V(r)$ : moyenne, qui ne change pas.

**À retenir** : instable au jour le jour, stable en moyenne.
## 3
**ARCH** : un grand choc hier rend aujourd'hui plus agité. La variance du jour est une constante plus une part du carré d'hier.
- $h_t$ : variance du jour ; $\alpha_0$ : socle ; $\alpha_1$ : réaction ; $z_t$ : hasard pur.

**À retenir** : cela suffit à fabriquer des queues épaisses.
## 4
On ajoute un ARCH à un modèle de moyenne ; l'**intervalle de prévision** s'élargit après une tempête et se resserre par temps calme.
- $\mu,\rho$ : moyenne ; $\varepsilon_t$ : choc.

**À retenir** : la constante de la variance est $\alpha_0$, pas $\mu$.
## 5
**GARCH** ajoute la mémoire de la variance elle-même. Trois nombres résument un marché : socle, réaction, persistance.
- $\alpha_1$ : réaction ; $\beta_1$ : persistance ; $\alpha_1+\beta_1$ : vitesse d'oubli.

**À retenir** : demi-vie $=\frac{\ln0{,}5}{\ln(\alpha_1+\beta_1)}$.
## 6
On choisit les paramètres qui rendent les données les plus vraisemblables. Même si la loi n'est pas vraiment normale, l'estimation reste bonne ; il faut seulement corriger les écarts-types (**sandwich**).
- $L(\theta)$ : vraisemblance ; $I,J$ : matrices d'information.

**À retenir** : en pratique, demander QML.
## 7
Les commandes SAS et leur équivalent R, et surtout les vérifications après estimation : les résidus standardisés ne doivent plus avoir de mémoire.

**À retenir** : les bornes LCL/UCL de SAS supposent une variance constante : les recalculer.
`);
EXPLIQUE('gbongue', String.raw`
## 1
Une question simple : la guerre en Ukraine a-t-elle rendu les bourses africaines plus risquées ? On compare une période calme et une période de crise, sur neuf indices.
- T1, T2 : les deux périodes ; VaR, CVaR : mesures de perte.

**À retenir** : oui, surtout au Nigeria et au Maroc ; peu à la BRVM.
## 2
Chaque marché est d'abord nettoyé : sa moyenne (ARMA) et sa volatilité (GJR-GARCH), qui réagit plus aux **mauvaises** nouvelles.
- $\phi,\theta$ : moyenne ; $\lambda$ : supplément pour les baisses ; $z_t$ : résidu pur.

**À retenir** : $\lambda>0$ = effet de levier.
## 3
Une fois nettoyés, les résidus sont indépendants : on peut modéliser leurs queues par une GPD, le centre restant empirique.
- $\mu_L,\mu_U$ : seuils bas et haut ; $\xi,\gamma$ : forme, échelle.

**À retenir** : filtrer d'abord, extrêmes ensuite.
## 4
La **copule** est la colle : elle dit comment les marchés bougent ensemble, indépendamment de comment chacun bouge. Ce qui compte : s'effondrent-ils ensemble ?
- $C$ : copule ; $\lambda_L,\lambda_U$ : dépendance dans les krachs et les hausses.

**À retenir** : gaussienne = pas de krach commun ; Clayton = krachs communs ; Student = les deux.
## 5
On fabrique des milliers de futurs possibles avec ces pièces, on lit les pires : VaR et CVaR. Puis on vérifie sur le passé : la VaR a-t-elle été dépassée aussi souvent que prévu ?
- $I_t$ : 1 si dépassement ; $\hat p$ : fréquence ; $LR$ : statistique de test.

**À retenir** : Kupiec teste la fréquence, Christoffersen aussi l'indépendance.
## 6
L'effet propre de la crise est une **double différence** : écart du modèle à la normale en crise, moins le même écart avant.

**À retenir** : Nigeria +15,07 points, UEMOA +1,43 ; deux lignes du tableau sont incohérentes.
`);
