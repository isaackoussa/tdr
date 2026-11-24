COURS({
  id: 'garch',
  titre: 'Économétrie de la finance 2 : modèles GARCH',
  fichier: 'Econometrie_Finance_Slides_Partie2.pdf',
  auteur: 'Christophe Hurlin, Université d’Orléans',
  pages: 141,
  famille: 'Économétrie financière',
  resume: 'Huit propriétés des séries financières, tests de Ljung-Box et Jarque-Bera, ARCH, GARCH, moments, kurtosis, intervalles de prévision, maximum de vraisemblance et pseudo-MV, SAS.'
}, String.raw`
## Les huit propriétés des séries financières | p. 1-38
$r_t=\ln p_t-\ln p_{t-1}=\ln(1+R_t)$. Fil rouge : S&P 500 quotidien, 03/07/1989 – 24/11/2003 (3 755 rendements).
:::methode Les 8 faits stylisés (Charpentier 2002)
1. **Stationnarité** : prix non stationnaires, rendements stationnaires au second ordre.
2. **Autocorrélation des carrés** : $r_t$ presque non corrélés, $r_t^2$ très corrélés.
3. **Queues épaisses** (leptokurtiques).
4. **Clusters de volatilité** : les gros mouvements se suivent.
5. **Queues épaisses conditionnelles** : même après correction ARCH.
6. **Effet de levier** : une baisse augmente plus la volatilité qu'une hausse égale.
7. **Saisonnalité** : effet janvier, effet week-end.
8. **Asymétrie** : plus de fortes baisses que de fortes hausses.
:::
:::piege 6 n'est pas 8
L'effet de levier concerne la relation *passé → volatilité*. L'asymétrie concerne la *distribution* des rendements.
:::
:::def Stationnarité
**Forte** : la loi de $(x_{t_1},\dots,x_{t_n})$ ne change pas par translation du temps. **Second ordre** : $E(x_t^2)<\infty$, $E(x_t)=m$ constant, $\operatorname{cov}(x_t,x_{t+h})=\gamma(h)$ ne dépend que de $h$.
:::
:::theo Efficience (EMH)
$r_{t+1}=E_tr_{t+1}+\varepsilon_{t+1}$, $E(\varepsilon_{t+1}\mid\Omega_t)=0$. Une autocorrélation des $r_t$ violerait l'efficience (sous anticipations rationnelles) ; une autocorrélation des $r_t^2$ **non** : la variance peut être prévisible.
:::
:::formule Tests d'autocorrélation
$$Q_{BP}=T\sum_{k=1}^K\hat a_k^2\ \to\chi^2(K)\qquad Q_{LB}=T(T+2)\sum_{k=1}^K\frac{\hat a_k^2}{T-k}\ \to\chi^2(K)$$
$H_0:a_1=\dots=a_K=0$.
:::
:::formule Kurtosis, skewness, Jarque-Bera
$$K=\frac{\mu_4}{\mu_2^2},\quad\frac{\hat K-3}{\sqrt{24/T}}\to\mathcal N(0,1)\qquad S=\frac{\mu_3}{\sigma^3},\quad\frac{\hat S}{\sqrt{6/T}}\to\mathcal N(0,1)$$
$$JB=\frac T6\hat S^2+\frac T{24}(\hat K-3)^2\ \to\chi^2(2)$$
:::
$K>3$ leptokurtique, $K<3$ platykurtique, $K=3$ mésokurtique (la normale l'est, mais $K=3$ ne prouve pas la normalité).
:::exemple S&P 500 : on refait le calcul
$S=-0{,}1562$, $K=7{,}0701$, $T=3755$. $\frac{3755}6\times0{,}0244=15{,}27$ ; $\frac{3755}{24}\times4{,}0701^2=2591{,}8$ ; $JB=2607{,}1$ ✓. Normalité rejetée massivement. Skewness : $\frac{-0{,}1562}{\sqrt{6/3755}}=-3{,}91$ : asymétrie à gauche significative.
:::
:::piege Notation
Dans le cours, « Sk » désigne le **carré** de la skewness ($\mu_3^2/\sigma^6$), d'où $(Sk)^{1/2}$ et $\frac T6Sk$. Les formules ci-dessus utilisent la skewness usuelle.
:::
**Effet janvier** (Rozeff et Kinney) 1904-1974 : 3,48 % en janvier contre 0,42 % les autres mois. Explication de Keim : plus fort pour les petites capitalisations (*tax loss selling* : on vend en fin d'année les titres en perte pour l'impôt).

## Principe : modéliser la variance conditionnelle | p. 39-47
:::intuition La bonne question
Prévoir la *moyenne* des rendements est presque impossible (efficience). Prévoir leur *variance* est possible (clusters). Engle (1982) : faire pour la variance ce que Box et Jenkins font pour la moyenne.
:::
:::formule Le double visage
$$V(r_{t+1}\mid\Omega_t)=f(t;\beta)\ \text{(varie : hétéroscédastique)}\qquad V(r_{t+1})=\gamma(0)\ \text{(constante : stationnaire)}$$
:::
Deux familles : **symétriques** (ARCH, GARCH ; équation de variance linéaire) et **asymétriques** (réagissent différemment aux bonnes et mauvaises nouvelles, comme EGARCH, GJR).

## Le modèle ARCH(1) | p. 48-76
:::def ARCH(1)
$$X_t=z_t\sqrt{h_t},\qquad h_t=\alpha_0+\alpha_1X_{t-1}^2,\qquad\alpha_0>0,\ 0\le\alpha_1<1$$
$z_t$ bruit blanc, $E(z_t)=0$, $E(z_t^2)=\sigma_z^2$ (souvent 1). Sachant le passé, $h_t$ est **connu**.
:::
:::theo Représentation AR(1) du carré
$$X_t^2=\alpha_0+\alpha_1X_{t-1}^2+\varepsilon_t,\qquad\varepsilon_t=X_t^2-h_t,\ E(\varepsilon_t\mid\underline X_{t-1})=0.$$
:::
:::theo Propriété 1 : bruit blanc
$E(X_t\mid\underline X_{t-1})=0$, $V(X_t)=\dfrac{\alpha_0}{1-\alpha_1}$.
:::
:::preuve
$E(X_t|\underline X_{t-1})=\sqrt{h_t}\,E(z_t|\underline X_{t-1})=0$. Espérances itérées : $E(X_t|\underline X_{t-h})=E[E(X_t|\underline X_{t-1})|\underline X_{t-h}]=0$. Variance : $V=\alpha_0+\alpha_1V$ par stationnarité.
:::
:::theo Propriété 2 : variance conditionnelle variable
$$V(X_t\mid\underline X_{t-h})=\alpha_0\,\frac{1-\alpha_1^h}{1-\alpha_1}+\alpha_1^hX_{t-h}^2\ \xrightarrow[h\to\infty]{}\ \frac{\alpha_0}{1-\alpha_1}$$
:::
:::preuve
Itérer l'AR(1) du carré : $X_t^2=\alpha_0(1+\alpha_1+\dots+\alpha_1^{h-1})+\sum_{j<h}\alpha_1^j\varepsilon_{t-j}+\alpha_1^hX_{t-h}^2$ et prendre l'espérance conditionnelle.
:::
:::theo Propriété 3 : pas de mémoire linéaire
$\operatorname{cov}(X_t,X_{t+k}\mid\underline X_{t-h})=0$ pour $k\ge1$.
:::
:::theo Propriété 4 : queues épaisses ($z_t$ gaussien)
$$E(X_t^4\mid\underline X_{t-1})=3(\alpha_0+\alpha_1X_{t-1}^2)^2,\qquad E(X_t^4)=\frac{3\alpha_0^2(1+\alpha_1)}{(1-3\alpha_1^2)(1-\alpha_1)}$$
$$\text{Kurtosis}=3\,\frac{1-\alpha_1^2}{1-3\alpha_1^2}>3\qquad\text{si }3\alpha_1^2<1$$
:::
:::preuve
$E(X^4)=3E[(\alpha_0+\alpha_1X^2)^2]=3\big[\alpha_0^2+2\alpha_0\alpha_1\tfrac{\alpha_0}{1-\alpha_1}+\alpha_1^2E(X^4)\big]$, soit $E(X^4)(1-3\alpha_1^2)=3\alpha_0^2\frac{1+\alpha_1}{1-\alpha_1}$. Diviser par $\frac{\alpha_0^2}{(1-\alpha_1)^2}$.
:::
:::exo $\alpha_0=0{,}5$, $\alpha_1=0{,}5$, $X_{t-1}=2$ : $h_t$, variance, kurtosis ?
---
$h_t=0{,}5+0{,}5\times4=2{,}5$. $V=\frac{0{,}5}{0{,}5}=1$. Kurtosis $=3\frac{0{,}75}{0{,}25}=9$.
:::
:::methode Ce que l'ARCH explique
Différence de martingale (EMH) ; clusters ; stationnarité ; non-autocorrélation ; queues épaisses même si $z_t$ est normal.
:::
:::formule ARCH(q)
$$h_t=\alpha_0+\sum_{i=1}^q\alpha_iX_{t-i}^2$$
:::

## Erreurs ARCH et intervalles de prévision | p. 77-88
:::def Modèle à erreurs ARCH
$$Y_t=E(Y_t\mid\underline Y_{t-1})+\varepsilon_t,\qquad\varepsilon_t=z_t\sqrt{h_t},\qquad h_t=\alpha_0+\sum_i\alpha_i\varepsilon_{t-i}^2$$
:::
:::exemple AR(1)-ARCH(1)
$Y_t=\mu+\rho Y_{t-1}+\varepsilon_t$ :
$$E(Y_t\mid\underline Y_{t-h})=\mu\frac{1-\rho^h}{1-\rho}+\rho^hY_{t-h}$$
$$V(Y_t\mid\underline Y_{t-h})=\frac{\alpha_0}{1-\alpha_1}\left[\frac{1-\rho^{2h}}{1-\rho^2}-\alpha_1\frac{\alpha_1^h-\rho^{2h}}{\alpha_1-\rho^2}\right]+\alpha_1\frac{\alpha_1^h-\rho^{2h}}{\alpha_1-\rho^2}\,\varepsilon_{t-h}^2$$
À l'horizon 1 : $\alpha_0+\alpha_1\varepsilon_{t-1}^2$.
:::
:::piege Coquille p. 84
Le cours écrit $\mu$ à la place de $\alpha_0$ dans la variance (« $V=\mu+\alpha_1\varepsilon^2_{t-1}$ »). La constante de la **variance** est $\alpha_0$ ; $\mu$ est celle de la moyenne. Vérification avec $h=1$ : crochet $=1-\alpha_1$, d'où $\alpha_0+\alpha_1\varepsilon_{t-1}^2$ ✓.
:::
:::formule Intervalle de confiance du rendement de demain
$$IC_{1-\alpha}=\Big[\mu\pm\Phi^{-1}\big(1-\tfrac\alpha2\big)\sqrt{\alpha_0+\alpha_1(r_t-\mu)^2}\Big]$$
Plus le choc d'aujourd'hui est fort, plus l'intervalle de demain est large.
:::

## Le modèle GARCH(p,q) | p. 89-101
:::intuition Pourquoi GARCH
Pour capter une longue mémoire de volatilité, un ARCH exige beaucoup de retards. Bollerslev (1986) ajoute la variance passée : c'est l'équivalent du passage de MA(∞) à ARMA.
:::
:::def GARCH(p,q)
$$h_t=\alpha_0+\sum_{i=1}^q\alpha_i\varepsilon_{t-i}^2+\sum_{i=1}^p\beta_ih_{t-i},\qquad\alpha_0>0,\ \alpha_i\ge0,\ \beta_i\ge0$$
:::
:::theo Représentation ARMA du carré
Avec $\mu_t=\varepsilon_t^2-h_t$ :
$$\varepsilon_t^2=\alpha_0+\sum_{i=1}^{\max(p,q)}(\alpha_i+\beta_i)\varepsilon_{t-i}^2+\mu_t-\sum_{i=1}^p\beta_i\mu_{t-i}$$
soit un **ARMA(max(p,q), p)**.
:::
:::formule GARCH(1,1)
$$h_t=\alpha_0+\alpha_1\varepsilon_{t-1}^2+\beta_1h_{t-1},\qquad V(\varepsilon)=\frac{\alpha_0}{1-\alpha_1-\beta_1}\ \text{ si }\alpha_1+\beta_1<1$$
$$K=\frac{3\big[1-(\alpha_1+\beta_1)^2\big]}{1-(\alpha_1+\beta_1)^2-2\alpha_1^2}>3\ \text{ si }(\alpha_1+\beta_1)^2+2\alpha_1^2<1$$
:::
:::formule Excès de kurtosis
$$\frac{E(\varepsilon^4)}{E(\varepsilon^2)^2}-3=3\,\frac{\operatorname{var}\big(E(\varepsilon_t^2\mid\underline\varepsilon_{t-1})\big)}{E(\varepsilon_t^2)^2}$$
L'épaisseur des queues vient de la **variabilité de la variance**.
:::
:::formule Prévision et demi-vie (complément)
$$E_t[h_{t+k}]=\bar h+(\alpha_1+\beta_1)^{k-1}(h_{t+1}-\bar h),\quad\bar h=\frac{\alpha_0}{1-\alpha_1-\beta_1}\qquad\text{demi-vie}=\frac{\ln0{,}5}{\ln(\alpha_1+\beta_1)}$$
:::
:::exemple Calcul complet
$\alpha_0=0{,}02,\alpha_1=0{,}08,\beta_1=0{,}90$ (% au carré). $\bar h=\frac{0{,}02}{0{,}02}=1$. Hier $h=1{,}5$, $\varepsilon=-3$ : $h=0{,}02+0{,}72+1{,}35=2{,}09$, $\sigma=1{,}446\%$, VaR(1 %) $=2{,}326\times1{,}446=3{,}36\%$. Demi-vie : $\frac{-0{,}693}{\ln0{,}98}=34$ jours. Kurtosis : $\frac{3(1-0{,}9604)}{1-0{,}9604-0{,}0128}=4{,}43$.
:::
$\alpha_1$ : réaction aux chocs. $\beta_1$ : persistance. $\alpha_1+\beta_1=1$ : **IGARCH** (RiskMetrics), variance inconditionnelle infinie.
:::labo garch
:::

## Estimation : MV et pseudo-MV | p. 102-120
:::formule Log-vraisemblance gaussienne
$$\log L(\theta)=-\frac T2\ln2\pi-\frac12\sum_{t=1}^T\ln h_t(\theta)-\frac12\sum_{t=1}^T\frac{[y_t-m_t(\theta)]^2}{h_t(\theta)}$$
:::
:::preuve
Conditionnellement au passé, $Y_t\sim\mathcal N(m_t,h_t)$ ; la vraisemblance est le produit des densités conditionnelles ; on prend le logarithme.
:::
:::formule Conditions du premier ordre
$$-\frac12\sum\frac1{h_t}\frac{\partial h_t}{\partial\theta}+\frac12\sum\frac{(y_t-m_t)^2}{h_t^2}\frac{\partial h_t}{\partial\theta}+\sum\frac{y_t-m_t}{h_t}\frac{\partial m_t}{\partial\theta}=0$$
Si les paramètres de moyenne et de variance sont séparés, le système se décompose en deux.
:::
:::theo Pseudo-maximum de vraisemblance (Gouriéroux-Monfort-Trognon)
Même si la vraie loi n'est pas normale (mais reste dans la bonne classe, moyenne et variance bien spécifiées), maximiser la vraisemblance gaussienne donne un estimateur convergent :
$$\sqrt T(\hat\theta-\theta)\to\mathcal N\big(0,\ J^{-1}IJ^{-1}\big),\quad J=E_0\Big[-\frac{\partial^2\log L}{\partial\theta\partial\theta'}\Big],\quad I=E_0\Big[\frac{\partial\log L}{\partial\theta}\frac{\partial\log L}{\partial\theta'}\Big]$$
Si la loi est vraiment normale, $I=J$ et la variance se réduit à $J^{-1}$.
:::
:::intuition Le sandwich
$J^{-1}IJ^{-1}$ : le point estimé reste bon, mais il faut corriger les **écarts-types** de l'erreur sur la loi.
:::

## Mise en pratique (SAS, et l'équivalent R) | p. 121-141
:::methode PROC AUTOREG
- Forme : PROC AUTOREG options ; MODEL y = x / nlag=... garch=(p=..., q=...) ; OUTPUT OUT=... ;
- GARCH(1,1) : garch=(q=1, p=1). Retards sautés : garch=(q=(1 3), p=1).
- DIST=T (Student) ou NORMAL ; TYPE=NONNEG ou STATIONARY.
- COVEST=HESSIAN (MV) ou **QML** (PMV, écarts-types robustes).
- CEV= ou HT= : variance conditionnelle ; PREDICTED=, RESIDUAL=, LCL=, UCL=.
:::
:::exemple AR(2)-GARCH avec retards 1 et 3 (S&P 500)
$dlsp_t=c+\phi_1dlsp_{t-1}+\phi_2dlsp_{t-2}+\varepsilon_t$, $h_t=\alpha_0+\alpha_1\varepsilon_{t-1}^2+\alpha_3\varepsilon_{t-3}^2+\beta_1h_{t-1}$ :
model dlsp = / nlag=2 garch=(q=(1 3), p=1) covest=qml;
En R : rugarch::ugarchspec(variance.model=list(garchOrder=c(1,1))) puis ugarchfit.
:::
:::piege Limites LCL / UCL
Elles sont calculées comme si la variance était **constante**, même avec GARCH. Reconstruire l'intervalle avec $\hat\mu\pm z\sqrt{\hat h_t}$.
:::
:::methode Après l'estimation
Vérifier $\hat z_t=\hat\varepsilon_t/\sqrt{\hat h_t}$ : Ljung-Box sur $\hat z_t$ **et** $\hat z_t^2$ (plus d'ARCH), Jarque-Bera. Si la normalité est rejetée : COVEST=QML, ou loi de Student.
:::

## QUIZ
? Les rendements sont peu autocorrélés mais leurs carrés le sont beaucoup. Cela…
- viole l'efficience
+ est compatible avec l'efficience
- prouve la normalité
- est impossible
> L'EMH porte sur le premier moment.
? Variance inconditionnelle d'un ARCH(1) ?
- $\alpha_0+\alpha_1$
+ $\alpha_0/(1-\alpha_1)$
- $h_t$
- infinie
> $V=\alpha_0+\alpha_1V$.
? Kurtosis d'un ARCH(1) gaussien, $\alpha_1=0{,}5$ ?
- 3
- 6
+ 9
- infinie
> $3\times0{,}75/0{,}25$.
? $\varepsilon_t^2$ d'un GARCH(1,1) est un…
- AR(1)
+ ARMA(1,1)
- MA(1)
- bruit blanc
> Coefficient AR $\alpha_1+\beta_1$, MA $-\beta_1$.
? Stationnarité du GARCH(1,1) ?
+ $\alpha_1+\beta_1<1$
- $\alpha_1<1$
- $\beta_1<1$
- $\alpha_0<1$
> Sinon IGARCH.
? Effet de levier ?
+ une baisse augmente davantage la volatilité
- la distribution est symétrique
- l'endettement baisse
- effet janvier
> À distinguer de la skewness.
? JB sous $H_0$ suit…
- $\mathcal N(0,1)$
+ $\chi^2(2)$
- $\chi^2(K)$
- Student
> Skewness et kurtosis.
? Variance asymptotique du PMV ?
- $J^{-1}$
- $I^{-1}$
+ $J^{-1}IJ^{-1}$
- $IJ$
> Le sandwich.
? Option SAS pour des écarts-types robustes ?
- DIST=T
+ COVEST=QML
- NLAG
- CEV
> Pseudo-MV.

## CARTES
ARCH(1) :: $h_t=\alpha_0+\alpha_1X_{t-1}^2$
GARCH(1,1) :: $h_t=\alpha_0+\alpha_1\varepsilon_{t-1}^2+\beta_1h_{t-1}$
Variance GARCH :: $\alpha_0/(1-\alpha_1-\beta_1)$
Kurtosis ARCH :: $3(1-\alpha_1^2)/(1-3\alpha_1^2)$
Ljung-Box :: $T(T+2)\sum\hat a_k^2/(T-k)\to\chi^2(K)$
Jarque-Bera :: $\frac T6S^2+\frac T{24}(K-3)^2\to\chi^2(2)$
IGARCH :: $\alpha_1+\beta_1=1$
PMV :: variance $J^{-1}IJ^{-1}$
Différence de martingale :: $E(X_t|\text{passé})=0$
Demi-vie :: $\ln0{,}5/\ln(\alpha_1+\beta_1)$

## PODCAST La météo de la volatilité
A: Bonjour ! Aujourd'hui les modèles GARCH. Kofi, peux-tu prévoir le rendement de la bourse demain ?
B: Non, sinon je serais riche.
A: C'est l'hypothèse d'efficience. Mais peux-tu prévoir si demain sera agité ?
B: Si aujourd'hui a été très agité, sans doute oui.
A: Voilà le clustering de volatilité. La moyenne est imprévisible, la variance est prévisible.
B: Le cours liste huit propriétés.
A: Stationnarité des rendements, autocorrélation des carrés, queues épaisses, clusters, queues épaisses même conditionnelles, effet de levier, saisonnalité, asymétrie. L'effet de levier, c'est qu'une chute rend le marché plus nerveux qu'une hausse de même taille.
B: Comment vérifie-t-on les queues épaisses ?
A: La kurtosis. Trois pour la normale. Le S&P cinq cents donne sept. Le test de Jarque-Bera vaut deux mille six cents : la normalité est balayée.
B: Alors, l'ARCH ?
A: X t égale z t fois racine de h t. Et h t, la variance de demain, vaut alpha zéro plus alpha un fois le carré d'aujourd'hui. Un gros choc aujourd'hui gonfle la variance de demain.
B: Mais la variance de long terme est constante ?
A: Oui : alpha zéro sur un moins alpha un. C'est le double visage : variance conditionnelle qui bouge, variance inconditionnelle stable.
B: Et les queues épaisses viennent toutes seules ?
A: Oui, même avec des chocs normaux. Kurtosis : trois fois un moins alpha un carré, sur un moins trois alpha un carré. C'est parce que la variance elle-même varie.
B: Pourquoi GARCH alors ?
A: Pour ne pas mettre vingt retards. On ajoute bêta fois la variance d'hier. Le carré du choc devient un ARMA. La somme alpha plus bêta mesure la persistance. Souvent autour de zéro virgule quatre-vingt-dix-huit : un choc met un mois à s'effacer de moitié.
B: Et si la somme vaut un ?
A: C'est IGARCH, le modèle de RiskMetrics.
B: L'estimation ?
A: Maximum de vraisemblance. Et si la loi n'est pas normale, le pseudo maximum de vraisemblance reste convergent, mais on corrige les écarts-types avec la formule sandwich : J moins un, I, J moins un. Dans SAS, c'est COVEST égale QML.
B: Et la VaR ?
A: Moins mu, moins racine de h fois le quantile. Elle monte quand le marché s'agite, et redescend quand il se calme. À bientôt !
`);
