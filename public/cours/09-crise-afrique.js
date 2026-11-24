COURS({
  id: 'gbongue',
  titre: 'Article : crise russo-ukrainienne et marchés africains',
  fichier: 'Gbongue et al. ADR_2023.pdf',
  auteur: 'Gbongue, Okou, Mbeng Mezui — African Development Review, 2023',
  pages: 16,
  famille: 'Économétrie financière',
  resume: 'Lire un article de recherche : ARMA-GJR-GARCH, valeurs extrêmes conditionnelles, copules, simulation, backtesting et capital-risque sur neuf indices boursiers.'
}, String.raw`
## La question, les données, la réponse | p. 1-2, 5-6
:::intuition L'article en trois phrases
**Question** : la crise russo-ukrainienne a-t-elle augmenté le risque des bourses africaines ? **Méthode** : un modèle de marges (ARMA-GJR-GARCH + valeurs extrêmes), une copule pour la dépendance, une simulation, puis VaR et CVaR. **Réponse** : oui ; le capital-risque dépasse celui de la loi normale de 1 % à 18 % pendant la crise, et l'**effet additionnel** par rapport à la période calme va de 0,05 % à 15,07 %.
:::
**Données** : clôtures quotidiennes (Bloomberg) de 9 indices, du 24/01/2017 au 24/01/2023 ; 87 % de la capitalisation africaine.

| Indice | Marché |
|---|---|
| BRVM composite | UEMOA |
| NGX-ASI | Nigeria |
| FTSE/JSE-ASI | Afrique du Sud |
| NASI | Kenya |
| BSE-DCI | Botswana |
| EGX 30 | Égypte |
| MASI | Maroc |
| CAC 40, NASDAQ | comparaison Europe et États-Unis |

:::methode Deux périodes pour isoler la crise
**T1** (référence, avant Covid) : 24/01/2017 – 15/11/2019. **T2** (crise) : 24/02/2022 – 24/01/2023. La période Covid est **exclue** pour ne pas mélanger les chocs.
:::
:::piege « Effet de 18 % » : de quoi parle-t-on ?
Les pourcentages sont des **différences de niveau de VaR** en points (VaR du modèle moins VaR normale), pas des taux de croissance. Exemple Nigeria, CVaR 1 % en T2 : $20{,}90-2{,}86=18{,}04$.
:::

## Étape 1 — la marge : ARMA-GJR-GARCH | p. 2-3, 7-9
:::formule Équation de la moyenne : ARMA(p,q)
$$r_t=\phi_0+\sum_{j=1}^p\phi_jr_{t-j}+\sum_{i=1}^q\theta_i\varepsilon_{t-i}+\varepsilon_t$$
:::
:::formule Équation de la variance : GJR-GARCH (Glosten et al. 1993)
$$\varepsilon_t=\sigma_tz_t,\qquad\sigma_t^2=\omega+\sum_{k=1}^r\beta_k\sigma_{t-k}^2+\sum_{h=1}^m\alpha_h\varepsilon_{t-h}^2+\sum_{h=1}^m\lambda_h\varepsilon_{t-h}^2\,\mathbf 1_{\{\varepsilon_{t-h}<0\}}$$
:::
:::intuition Le rôle de $\lambda$
Une bonne nouvelle pèse $\alpha$, une mauvaise pèse $\alpha+\lambda$. Si $\lambda>0$ : **effet de levier**. C'est la version asymétrique du GARCH.
:::
$z_t$ i.i.d., moyenne 0, variance 1, suit une **skewed-t de Hansen** : queues épaisses et asymétrie.
:::exemple Lire les estimations
CAC 40 avant crise : $\beta_1=0{,}81$, $\alpha_1\approx0$, $\lambda_1=0{,}26^{***}$ : presque tout l'effet passe par les mauvaises nouvelles. Tous les indices retiennent GJR-GARCH(1,1), choisi par AIC/BIC ; l'ordre ARMA change d'un indice à l'autre (BRVM : (2,2) en T1, (1,0) en T2).
:::
:::formule Stationnarité du GJR-GARCH(1,1) (complément, $z$ symétrique)
$$\alpha+\beta+\frac\lambda2<1,\qquad V=\frac\omega{1-\alpha-\beta-\lambda/2}$$
:::
### Diagnostics
- Avant modélisation : Jarque-Bera (non-normalité), Ljung-Box (autocorrélation), test ARCH d'Engle (hétéroscédasticité), ADF/PP/KPSS (stationnarité).
- Après : sur $z_t$, Ljung-Box et ARCH **ne rejettent plus** : les résidus sont i.i.d., on peut appliquer la TVE.
:::piege ADF contre KPSS
ADF et PP ont pour hypothèse nulle la **racine unitaire** (on veut rejeter). KPSS a pour nulle la **stationnarité** (on veut ne pas rejeter).
:::

## Étape 2 — les queues : valeurs extrêmes conditionnelles | p. 2-3, 10
:::intuition TVE conditionnelle (McNeil et Frey 2000)
La théorie des valeurs extrêmes exige des données i.i.d. ; les rendements ne le sont pas. On filtre d'abord par GARCH, puis on applique POT aux **résidus standardisés**.
:::
:::formule Distribution semi-paramétrique des résidus (4.a)
$$F(z)=\begin{cases}\dfrac{N_{\mu_L}}N\Big(1+\xi_L\dfrac{\mu_L-z}{\gamma_L}\Big)^{-1/\xi_L}&z<\mu_L\\[2mm]\hat F(z)&\mu_L\le z\le\mu_U\\[1mm]1-\dfrac{N_{\mu_U}}N\Big(1+\xi_U\dfrac{z-\mu_U}{\gamma_U}\Big)^{-1/\xi_U}&z>\mu_U\end{cases}$$
:::
$N_{\mu}$ : nombre de dépassements ; $\xi$ forme ; $\gamma$ échelle. Le centre est **empirique**, les deux queues sont **GPD**. Estimation par maximum de vraisemblance. En T2 les seuils montent pour la plupart des indices : davantage de valeurs extrêmes.
:::piege Tableau 7 : colonnes vraisemblablement inversées
Le tableau donne des « $\gamma$ » négatifs ($-0{,}18$, $-1{,}23$…). Une **échelle est toujours positive**. Les lignes $\xi$ et $\gamma$ semblent donc interverties : $\xi_L\approx-0{,}18$ et $\gamma_L\approx0{,}75$ pour la BRVM. De bons réflexes de lecteur critique !
:::

## Étape 3 — la dépendance : copules | p. 3-5, 10-11
:::theo Sklar
Pour toute loi jointe $F$ de marges $F_i$ (continues), il existe une unique copule $C$ sur $[0,1]^d$ :
$$F(z_1,\dots,z_d)=C\big(F_1(z_1),\dots,F_d(z_d)\big),\qquad C(u)=F\big(F_1^{-1}(u_1),\dots,F_d^{-1}(u_d)\big)$$
$$f(z_1,\dots,z_d)=c\big(F_1(z_1),\dots,F_d(z_d)\big)\prod_{i=1}^df_i(z_i)$$
:::
:::intuition Séparer les ingrédients
Les marges disent *comment chaque marché bouge* ; la copule dit *comment ils bougent ensemble*. On peut les choisir séparément.
:::
:::formule Dépendance de queue
$$\lambda_L=\lim_{u\to0^+}\frac{C(u,u)}u,\qquad\lambda_U=\lim_{u\to1^-}\frac{1-2u+C(u,u)}{1-u}$$
$\lambda_L$ : probabilité qu'un marché s'effondre sachant que l'autre s'effondre.
:::
(L'article écrit le second numérateur « $C(u,u)-2u+1$ » : c'est la même chose.)

| Copule | Formule | Queue |
|---|---|---|
| Gaussienne | $\Phi_\rho(\Phi^{-1}(u_1),\dots,\Phi^{-1}(u_d))$ | aucune : $\lambda_L=\lambda_U=0$ |
| Student-t | $t_{\rho,\nu}(t_\nu^{-1}(u_1),\dots,t_\nu^{-1}(u_d))$ | symétrique : $2\,t_{\nu+1}\big(-\sqrt{\nu+1}\sqrt{\tfrac{1-\rho}{1+\rho}}\big)$ |
| Gumbel, $\delta>1$ | $\exp\{-[\sum(-\ln u_i)^\delta]^{1/\delta}\}$ | haute : $\lambda_U=2-2^{1/\delta}$ |
| Clayton, $\kappa>0$ | $\big(\sum u_i^{-\kappa}-d+1\big)^{-1/\kappa}$ | basse : $\lambda_L=2^{-1/\kappa}$ |
| Frank, $\eta>0$ | $-\frac1\eta\ln\Big[1+\frac{\prod(e^{-\eta u_i}-1)}{(e^{-\eta}-1)^{d-1}}\Big]$ | aucune |

(L'exposant $d-1$ de Frank est rétabli ici.)
:::methode Calibrer une copule
1. **Spécifier** plusieurs familles.
2. **Estimer** par IFM (Joe et Xu 1996) : d'abord les marges, puis la copule avec les marges estimées :
$$\hat\varsigma_3=\arg\max\sum_t\ln c\big(F_1(z_{1t};\hat\varsigma_2),\dots,F_d(z_{dt};\hat\varsigma_2);\varsigma_3\big)$$
3. **Choisir** : log-vraisemblance, AIC, tests d'ajustement Cramér–von Mises $S_n$ et Anderson–Darling $R_n$ (p-value > 5 % : acceptée, par bootstrap paramétrique).
:::
:::exemple Résultats
T1 : Clayton a le meilleur AIC ($-11{,}74$). T2 : Student-t ($-6{,}72$, $\nu=51{,}8$). Retenues : **Student et Clayton**.
:::
:::piege Regard critique
Avec $\rho=0{,}015$ puis $0{,}032$ et $\nu=203$ puis $52$, la dépendance estimée est très faible et proche de l'indépendance (un seul paramètre pour 9 marchés). Par exemple pour Clayton $\kappa=0{,}032$, $\lambda_L=2^{-31}\approx0$. La conclusion « la copule de Student capte la dépendance extrême » doit être nuancée ; les auteurs suggèrent eux-mêmes des paramètres variables dans le temps.
:::
:::exo $\lambda_L$ d'une Clayton de paramètre $\kappa=2$ ?
---
$2^{-1/2}\approx0{,}707$ : si un marché est dans ses pires valeurs, l'autre y est aussi avec probabilité 71 %.
:::

## Étapes 4 et 5 — simulation et backtesting | p. 5, 11-12
:::formule Équation de simulation (9)
$$\hat r_t=\hat A_t+\hat\sigma_t\,\hat F^{-1}(U_t),\qquad U_t\sim\hat C$$
:::
:::methode L'algorithme
1. Tirer $U_t=(U_{1t},\dots,U_{dt})$ dans la copule. 2. Transformer par quantile : $z_{it}=\hat F_i^{-1}(U_{it})$. 3. Multiplier par $\hat\sigma_{it}$ (GARCH), ajouter $\hat A_{it}$ (ARMA). 4. Recommencer.
:::
:::formule Mesures de risque (10)
$$\operatorname{VaR}_k=\hat F_r^{-1}(k),\quad k\in\{1\%,5\%,10\%\},\qquad\operatorname{CVaR}_k\approx\frac1{10}\sum_{i\in\{k/10,2k/10,\dots,k\}}\operatorname{VaR}_i$$
La CVaR est la moyenne de 10 VaR plus profondes : c'est l'approximation de l'Expected Shortfall.
:::
### Backtesting : la VaR est-elle juste ?
Violation : $I_t=1$ si $r_t<\operatorname{VaR}_t$. On veut la bonne **fréquence** et l'**indépendance**.
:::formule Kupiec (1995), couverture inconditionnelle
$$LR_{uc}=-2\ln\frac{(1-\alpha)^{T-N}\alpha^N}{(1-\hat p)^{T-N}\hat p^N}\ \to\chi^2(1),\qquad\hat p=\frac NT$$
:::
:::formule Christoffersen (1998), couverture conditionnelle
$$LR_{cc}=LR_{uc}+LR_{ind}\ \to\chi^2(2)$$
:::
**DQ** (Engle-Manganelli) : régresser $I_t-\alpha$ sur son passé et la VaR ; tous les coefficients doivent être nuls.
:::exo 250 jours, VaR 1 %, 7 violations : Kupiec ?
---
$\hat p=0{,}028$. $\ln L_0=243\ln0{,}99+7\ln0{,}01=-2{,}442-32{,}236=-34{,}678$. $\ln L_1=243\ln0{,}972+7\ln0{,}028=-6{,}901-25{,}029=-31{,}930$. $LR=5{,}50>3{,}84$ : VaR rejetée au seuil de 5 %.
:::
Dans l'article, les tests **acceptent** presque partout (exceptions au seuil de 5 % : Nigeria en T2, $LR_{uc}=4{,}05$, $p=0{,}04$ et $DQ$ $p=0{,}03$ ; MASI-Clayton en T2, $DQ$ $p=0{,}03$).

## Résultats et implications | p. 12-15
### CVaR 1 % (modèle Student) et effet additionnel
| Marché | T1 | T2 | Effet additionnel CVaR 1 % |
|---|---|---|---|
| Nigeria (NGX) | −5,52 | −20,90 | **15,07** |
| Maroc (MASI) | −2,10 | −9,48 | 5,54 |
| Botswana | −0,95 | −3,31 | 3,08 |
| Égypte | −5,41 | −7,37 | 2,71 |
| Kenya | −7,85 | −9,70 | 2,57 |
| Afrique du Sud | −5,02 | −6,99 | 2,17 |
| UEMOA (BRVM) | −4,89 | −5,10 | **1,43** |

:::formule Comment est calculé l'effet additionnel
$$\text{Effet}=\big(\operatorname{CVaR}^{mod}-\operatorname{CVaR}^{norm}\big)_{T2}-\big(\operatorname{CVaR}^{mod}-\operatorname{CVaR}^{norm}\big)_{T1}$$
Nigeria : $18{,}04-2{,}97=15{,}07$ ✓. UEMOA : $3{,}88-2{,}45=1{,}43$ ✓. C'est une **double différence**.
:::
**Interprétation** : les plus intégrés aux marchés mondiaux et aux matières premières (Nigeria, Maroc) souffrent le plus ; la BRVM, moins ouverte, résiste. Canaux probables : **matières premières et change**.
**Recommandations** : diversifier produits et instruments de couverture (développer et réguler les dérivés), renforcer la base des **investisseurs locaux**.
:::piege Incohérence à repérer
Botswana T1 à 1 % : VaR $=-1{,}48$ mais CVaR $=-0{,}95$. Une CVaR ne peut pas être moins sévère que la VaR au même seuil. (De même l'Égypte : $-5{,}42$ contre $-5{,}41$.) Ces lignes sont à prendre avec prudence.
:::
:::methode Comment présenter cet article à l'oral
1. Motivation. 2. Données et choix T1/T2. 3. Chaîne : ARMA → GJR-GARCH → POT → copule → simulation → VaR/CVaR. 4. Backtesting. 5. Classement des marchés. 6. Limites : copule statique à un paramètre, T2 courte (≈ 230 points), tableau 7.
:::

## QUIZ
? Pourquoi filtrer par GARCH avant la TVE ?
- pour accélérer
+ pour obtenir des résidus i.i.d.
- pour avoir une loi normale
- pour supprimer les extrêmes
> McNeil et Frey.
? Dans GJR, une mauvaise nouvelle pèse…
- $\alpha$
+ $\alpha+\lambda$
- $\lambda$
- $\beta$
> L'indicatrice vaut 1 si $\varepsilon<0$.
? Copule avec dépendance de queue basse seulement ?
- Gumbel
+ Clayton
- Frank
- Gaussienne
> $\lambda_L=2^{-1/\kappa}$.
? Le théorème de Sklar relie…
+ loi jointe, marges et copule
- VaR et CVaR
- ARMA et GARCH
- GPD et GEV
> $F=C(F_1,\dots,F_d)$.
? IFM signifie…
+ estimer les marges puis la copule
- tout estimer ensemble
- ne pas estimer les marges
- bootstrap
> Inference functions for margins.
? Kupiec teste…
+ la fréquence des violations
- leur indépendance
- la normalité
- la stationnarité
> Christoffersen ajoute l'indépendance.
? Marché africain le moins touché ?
- Nigeria
- Maroc
+ UEMOA
- Kenya
> 1,43 en CVaR 1 %.
? L'effet additionnel est…
- un ratio
+ une double différence
- une moyenne
- une VaR
> (Modèle − normale) en T2 moins T1.
? Hypothèse nulle de KPSS ?
+ stationnarité
- racine unitaire
- normalité
- indépendance
> Inverse d'ADF.

## CARTES
GJR-GARCH :: $\sigma_t^2=\omega+\beta\sigma_{t-1}^2+\alpha\varepsilon_{t-1}^2+\lambda\varepsilon_{t-1}^2\mathbf 1_{\varepsilon<0}$
TVE conditionnelle :: GARCH puis POT sur les résidus standardisés
Sklar :: $F=C(F_1,\dots,F_d)$
$\lambda_U$ de Gumbel :: $2-2^{1/\delta}$
$\lambda_L$ de Clayton :: $2^{-1/\kappa}$
Simulation :: $\hat r=\hat A+\hat\sigma\hat F^{-1}(U)$, $U\sim\hat C$
Kupiec :: $LR_{uc}\to\chi^2(1)$
Christoffersen :: $LR_{cc}=LR_{uc}+LR_{ind}\to\chi^2(2)$
T1 / T2 :: avant Covid (2017-2019) / crise (fév. 2022 – janv. 2023)
Classement :: Nigeria, Maroc, Botswana, Égypte, Kenya, Afrique du Sud, UEMOA

## PODCAST Une guerre lointaine, des bourses qui tremblent
A: Bonjour ! Aujourd'hui nous lisons un article de recherche publié en deux mille vingt-trois par Gbongue, Okou et Mbeng Mezui.
B: Okou, comme le professeur du cours de valeurs extrêmes ?
A: Le même. La question : la guerre en Ukraine a-t-elle augmenté le risque des bourses africaines ?
B: Comment isoler cet effet du Covid ?
A: Ils comparent deux fenêtres. T un, avant le Covid, de janvier deux mille dix-sept à novembre deux mille dix-neuf. T deux, de février deux mille vingt-deux à janvier deux mille vingt-trois. Le Covid est mis de côté.
B: Et la méthode a un nom à rallonge : ARMA, GJR, GARCH, TVE, copule.
A: Décompose. ARMA, c'est la moyenne. GJR-GARCH, c'est la variance, avec un bonus lambda quand la nouvelle est mauvaise. Ce qu'il reste, les résidus, sont indépendants.
B: Et la TVE s'applique aux résidus ?
A: Oui, c'est l'idée de McNeil et Frey. Le centre de la distribution est empirique, les deux queues sont des Pareto généralisées.
B: Et la copule ?
A: Le théorème de Sklar : une loi jointe, c'est des marges plus une copule. Les marges disent comment chaque marché bouge, la copule comment ils bougent ensemble. Clayton capte les chutes communes, Gumbel les hausses communes, Student les deux, la gaussienne aucune.
B: Ensuite on simule ?
A: On tire dans la copule, on transforme par les quantiles, on multiplie par la volatilité, on ajoute la moyenne. Des milliers de fois. Puis on lit la VaR et la CVaR.
B: Et on vérifie ?
A: Par backtesting. Kupiec compte les violations. Christoffersen vérifie qu'elles ne viennent pas en grappes. DQ teste la prévisibilité.
B: Le résultat ?
A: Le Nigeria est le plus touché, quinze points d'effet additionnel. Puis le Maroc, le Botswana, l'Égypte, le Kenya, l'Afrique du Sud. L'UEMOA, la moins touchée : un virgule quarante-trois.
B: Pourquoi la BRVM résiste ?
A: Elle est moins intégrée aux marchés mondiaux. Les canaux sont sans doute les matières premières et le change.
B: Et avec un œil critique ?
A: Trois remarques. La dépendance estimée est presque nulle, un seul paramètre pour neuf marchés. Le tableau sept semble avoir inversé forme et échelle, puisqu'une échelle ne peut pas être négative. Et pour le Botswana, la CVaR est moins sévère que la VaR, ce qui est impossible.
B: Donc, lire un article, c'est aussi vérifier.
A: Exactement. À bientôt !
`);
