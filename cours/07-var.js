COURS({
  id: 'var',
  titre: 'Économétrie de la finance 1 : Value-at-Risk',
  fichier: 'Econometrie_Finance_Slides_Partie1.pdf',
  auteur: 'Christophe Hurlin, Université d’Orléans',
  pages: 280,
  famille: 'Économétrie financière',
  resume: 'Définition de la VaR, rendements, VaR normale et Student, horizon, simulation historique, Monte-Carlo, RiskMetrics, GARCH, CAViaR, VaR de portefeuille, cohérence, Expected Shortfall.'
}, String.raw`
## Qu'est-ce que la VaR, à quoi sert-elle | p. 1-38
:::def Value-at-Risk (Jorion 2007)
Montant de pertes qui **ne devrait pas être dépassé** pour un niveau de confiance donné, sur un horizon donné.
:::
:::exemple Lire une VaR
VaR quotidienne de 50 millions \$ à 99 % : une chance sur 100, dans des conditions normales de marché, que la perte d'un jour **excède** 50 millions. Elle ne dit pas *de combien*.
:::
**Histoire** : née dans l'assurance ; Bankers Trust à la fin des années 1980 ; terme popularisé par le rapport du G30 (juillet 1993) puis **RiskMetrics** de JP Morgan (1994) ; consacrée par Bâle II.
### Trois usages
1. **Passif** — reporting : un seul chiffre, en monnaie, compréhensible.
2. **Défensif** — contrôle : limites par trader ou par unité (dénominateur commun entre marchés).
3. **Actif** — management : allocation du capital, RAPM, optimisation moyenne-VaR.

Utilisateurs : institutions financières, régulateurs, entreprises (*Cash-Flow at Risk*), gérants d'actifs.
### Quels risques ?
| Risque | Définition | VaR adaptée ? |
|---|---|---|
| **Marché** | variation des prix ou des volatilités (absolu ou relatif à un benchmark) | oui, champ principal |
| **Liquidité d'actif** | transaction impossible au prix prévu, vu la taille de la position | via LVaR |
| **Liquidité de financement** | ne pas pouvoir payer → liquidations forcées, pertes « papier » réalisées | indirect (TaR) |
| **Crédit** | contrepartie incapable ou refusant de payer | rarement : on préfère pertes attendues, *worst credit exposure* |
| **Opérationnel** | processus, systèmes, événements externes (modèle, personnes, juridique) | théorique, données rares |

## Rendements et distribution de P&L | p. 40-65
Trois ingrédients : la **distribution des profits et pertes (P&L)**, le **niveau de confiance**, l'**horizon**.
:::formule Profits et pertes
$$P/L_t=P_t+D_t-P_{t-1}\qquad\text{valeur présente}=\frac{P_t+D_t}{1+d}-P_{t-1}\qquad L/P_t=-P/L_t$$
$D_t$ : paiements intermédiaires (dividendes, coupons).
:::
:::formule Rendements
$$r_t=\frac{P_t+D_t}{P_{t-1}}-1\ \text{(arithmétique)}\qquad R_t=\ln\frac{P_t+D_t}{P_{t-1}}\ \text{(géométrique)}\qquad R_t=\ln(1+r_t)$$
:::
:::exemple Conversion
$r=5\%\Rightarrow R=\ln1{,}05=4{,}88\%$ ; $R=5\%\Rightarrow r=e^{0{,}05}-1=5{,}13\%$.
:::
:::intuition Pourquoi les rendements géométriques
Ils s'**additionnent** dans le temps, supposent un réinvestissement continu des revenus, et garantissent des prix **positifs** : $P_t=P_{t-1}e^{R_t}>0$.
:::

## Définition statistique et VaR paramétrique | p. 67-85
:::formule Convention du cours (VaR positive, taux de couverture $\alpha$)
$$\operatorname{VaR}_t(\alpha)=-F_{R_t}^{-1}(\alpha),\qquad P\big[R_t<-\operatorname{VaR}_t(\alpha)\big]=\alpha$$
:::
:::piege Deux conventions qui se croisent
Hurlin parle de **taux de couverture** $\alpha=1\%$ ; Jorion parle de **niveau de confiance** 99 %. « VaR(1 %) » et « VaR à 99 % » désignent la même chose. Dans le cours de ruine, $X$ est une *perte* et la VaR un quantile à droite.
:::
:::theo VaR normale
Si $R\sim\mathcal N(\mu,\sigma^2)$ :
$$\operatorname{VaR}(\alpha)=-\mu-\sigma\,\Phi^{-1}(\alpha)$$
:::
:::preuve
$P\Big[\frac{R-\mu}\sigma<\frac{-\operatorname{VaR}-\mu}\sigma\Big]=\alpha$, donc $\frac{-\operatorname{VaR}-\mu}\sigma=\Phi^{-1}(\alpha)$.
:::
:::exemple Exemple du cours ($\mu=0{,}01\%$, $\sigma=1{,}5\%$), recalculé
$\operatorname{VaR}(5\%)=-0{,}01+1{,}5\times1{,}6449=2{,}457\%$ ✓.
$\operatorname{VaR}(1\%)=-0{,}01+1{,}5\times2{,}3263=\mathbf{3{,}480\%}$.
Pour 1 M€ : 24 573 € et 34 795 €.
:::
:::piege Erreur numérique, p. 78
Les diapositives donnent $3{,}2451\%$ pour la VaR à 1 %. Cela correspondrait à $z=2{,}17$, pas à $\Phi^{-1}(0{,}01)=-2{,}3263$. La valeur correcte est $3{,}4795\%$.
:::
:::formule VaR de Student
$$\operatorname{VaR}(\alpha)=-G^{-1}(\alpha;\nu)\qquad\text{avec échelle : }-\mu-\sigma\sqrt{\tfrac{\nu-2}\nu}\,G^{-1}(\alpha;\nu)$$
:::
$t(5)$ : $\operatorname{VaR}(1\%)=3{,}365\%$, $\operatorname{VaR}(5\%)=2{,}015\%$ (pour 1 M€ : 33 649 € et 20 150 €). La seconde forme, où $\sigma$ est le vrai écart-type, est un complément utile.
:::methode Méthode paramétrique
1. Postuler une loi. 2. Estimer ses paramètres. 3. Calculer le fractile.
:::
:::labo var
:::

## VaR conditionnelle et changement d'horizon | p. 86-102
:::def VaR conditionnelle et prévision
$$\operatorname{VaR}_t(\alpha\mid\Omega_t)=-F^{-1}_{R_t}(\alpha\mid\Omega_t),\qquad\operatorname{VaR}_{t+1|t}(\alpha)=-\hat\mu_{t+1|t}-\hat\sigma_{t+1|t}\,\Phi^{-1}(\alpha)$$
où $\hat\mu_{t+1|t}=E(R_{t+1}|\Omega_t)$, $\hat\sigma^2_{t+1|t}=V(R_{t+1}|\Omega_t)$.
:::
:::intuition Conditionnelle ou non ?
La VaR **non conditionnelle** est la météo moyenne de l'année ; la **conditionnelle** est la prévision de demain sachant le ciel d'aujourd'hui.
:::
:::formule Agrégation temporelle, rendements i.i.d.
$$E=\mu_{an}T,\qquad V=\sigma^2_{an}T\quad\Rightarrow\quad\sigma_T=\sigma_{an}\sqrt T$$
:::
:::exemple EUR/USD (Jorion)
Mensuel : moyenne $-0{,}15\%$, volatilité $3{,}28\%$. Annuel : $-1{,}8\%$ et $3{,}28\sqrt{12}=11{,}4\%$.
:::
:::formule Rendements autocorrélés $R_t=\rho R_{t-1}+\varepsilon_t$
$$V\Big(\sum_{i=1}^TR_i\Big)=\sigma_R^2\big[T+2(T-1)\rho+2(T-2)\rho^2+\dots+2\rho^{T-1}\big],\quad\sigma_R^2=\frac{\sigma_\varepsilon^2}{1-\rho^2}$$
:::
:::preuve
$V(\sum R_i)=\sum_{i,j}\operatorname{cov}(R_i,R_j)=\sigma_R^2\sum_{i,j}\rho^{|i-j|}$ : $T$ termes diagonaux et $2(T-k)$ termes à distance $k$.
:::
:::exemple Volatilité sur 10 jours à partir de 1 %
$\rho=0$ : $\times3{,}16$ ; $\rho=0{,}2$ : $\times3{,}79$ ; $\rho=0{,}5$ : $\times5{,}10$. La règle $\sqrt T$ **sous-estime** le risque si $\rho>0$.
:::
:::exo Calculer le facteur pour $T=3,\rho=0{,}5$
---
$3+2\times2\times0{,}5+2\times1\times0{,}25=3+2+0{,}5=5{,}5$ ; $\sqrt{5{,}5}=2{,}345$ contre $\sqrt3=1{,}732$.
:::

## Méthodes non paramétriques | p. 104-160
:::methode Trois familles d'estimation
- **Non paramétriques** : HS, BHS, noyau, WHS/hybride, FHS.
- **Paramétriques** : Monte-Carlo, RiskMetrics, (G)ARCH.
- **Semi-paramétriques** : valeurs extrêmes, CAViaR.

On dit **estimation** et non « calcul » : la loi du P&L est inconnue.
:::
:::formule Simulation historique (HS)
$$\widehat{\operatorname{VaR}}_{t|t-1}(\alpha)=-\operatorname{percentile}\big(\{r_j\}_{j=t-T_e}^{t-1},100\alpha\big)$$
Avec 1000 rendements, la VaR à 5 % est la 50ᵉ plus forte perte.
:::
**Hypothèse** : rendements i.i.d. (sinon une seule réalisation par date rend l'estimation impossible). **Défaut** : prévisions « plates », lentes à réagir. Fenêtre $T_e$ courte → VaR volatile ; longue → VaR presque constante. On utilise une fenêtre **glissante** (250 jours, Nasdaq 2005-2006).
:::formule Bootstrap historique (BHS)
$$\widehat{\operatorname{VaR}}(\alpha)=\frac1S\sum_{s=1}^S\widetilde{\operatorname{VaR}}_s(\alpha)\qquad\text{(}S\text{ rééchantillons tirés avec remise)}$$
Exemple S&P CNX Nifty, 10 000 rééchantillons : HS 49,935, BHS 51,23.
:::
:::formule HS à noyau (Butler et Schachter)
$$\hat f(r_0)=\frac1{T\lambda}\sum_{t=1}^TK\Big(\frac{r_t-r_0}\lambda\Big),\qquad\alpha=\int_{-\infty}^{-\widehat{\operatorname{VaR}}}\hat f(r)\,dr$$
Permet n'importe quel $\alpha$, mais imprécise sur les bords, justement où vit la VaR.
:::
:::methode VaR hybride (âge-pondérée, Boudoukh et al. 1998)
1. Poids décroissants $\frac{1-\lambda}{1-\lambda^{T_e}},\ \frac{1-\lambda}{1-\lambda^{T_e}}\lambda,\ \dots,\ \frac{1-\lambda}{1-\lambda^{T_e}}\lambda^{T_e-1}$.
2. Trier les rendements par ordre croissant, avec leurs poids.
3. Cumuler les poids jusqu'à $\alpha$ : le rendement atteint donne la VaR.

Variantes : pondération par la volatilité (Hull-White), par la corrélation. Exemple : $\lambda=0{,}98,T_e=250$.
:::
:::exo HS : rendements (%) −4, −3, −2, −1, 0, 1, 1, 2, 2, 3. VaR à 20 % ?
---
20 % de 10 = 2ᵉ plus petit : −3. VaR = 3 %.
:::
:::piege Une date à vérifier
L'exemple du Nikkei annonce « 5 550 observations quotidiennes du 05/01/2004 au 02/05/2006 » : deux ans ne contiennent qu'environ 580 séances. 5 550 séances correspondent à environ 22 ans : la date de départ est sans doute 1984.
:::

## Monte-Carlo, RiskMetrics, GARCH, EVT, CAViaR | p. 161-191
:::methode Monte-Carlo
1. Choisir un modèle des facteurs de risque. 2. Simuler des milliers de trajectoires. 3. Réévaluer le portefeuille. 4. Prendre le quantile des P&L. Convient aux **options** et aux queues épaisses ; coûteux.
:::
:::formule RiskMetrics (EWMA)
$$h_t=\lambda h_{t-1}+(1-\lambda)r_{t-1}^2,\qquad\operatorname{VaR}_t(\alpha)=-\Phi^{-1}(\alpha)\sqrt{h_t}-\mu$$
Cas particulier d'**IGARCH**. Le cours prend $\lambda=0{,}97$ ; la norme JP Morgan est 0,94 en quotidien, 0,97 en mensuel.
:::
Avantages : rapide, seule la matrice de covariance suffit. Limites : normalité, linéarité (inadapté aux options), $\lambda$ fixé.
:::exo $h=1$, $r=-3$ (%), $\lambda=0{,}94$. $h$ suivant et VaR 1 % ?
---
$0{,}94+0{,}06\times9=1{,}48$ ; $\sqrt{1{,}48}=1{,}2166$ ; VaR $=2{,}3263\times1{,}2166=2{,}83\%$.
:::
:::formule GARCH
$$\operatorname{VaR}_{t+1|t}(\alpha)=-\mu-\sqrt{h_{t+1}}\,\Phi^{-1}(\alpha)$$
:::
:::theo Lois elliptiques
Pour toute loi elliptique (normale, Student…), la VaR est une transformation **linéaire** de la volatilité : prévoir la variance, c'est prévoir la VaR.
:::
:::formule CAViaR (Engle et Manganelli 2004)
$$\operatorname{VaR}_{t|t-1}=\beta_0+\beta_1\operatorname{VaR}_{t-1|t-2}+l(\beta_2,\dots;r_{t-1},\operatorname{VaR}_{t-1|t-2})$$
Pente asymétrique : $l=\beta_2\max(r_{t-1},0)-\beta_3\min(r_{t-1},0)$. Estimation par **régression quantile** (Koenker-Bassett) :
$$\min_\beta\sum_t\big(\alpha-\mathbf 1_{\{r_t<q_t(\beta)\}}\big)\big(r_t-q_t(\beta)\big)$$
On modélise le quantile **directement**, sans loi.
:::

## VaR d'un portefeuille | p. 192-212
:::formule Rendement et variance
$$R_p=\sum_iw_iR_i=w'R,\qquad\sigma_p^2=w'\Sigma w=\sum_iw_i^2\sigma_i^2+2\sum_i\sum_{j<i}w_iw_j\sigma_{ij},\qquad\sigma_p^2W^2=x'\Sigma x$$
$w_i=W_i/W$, $x=(W_1,\dots,W_N)'$.
:::
:::formule VaR diversifiée et non diversifiée (normale, moyenne nulle)
$$\operatorname{VaR}_p=-\Phi^{-1}(\alpha)\sqrt{x'\Sigma x}\qquad\operatorname{VaR}_i=-\Phi^{-1}(\alpha)\,\sigma_i|W_i|\qquad\operatorname{VaR}_u=\sum_i\operatorname{VaR}_i$$
$\operatorname{VaR}_u-\operatorname{VaR}_p$ = gain de diversification. $\operatorname{VaR}_u$ correspond à des corrélations toutes égales à 1.
:::
:::exemple CAD / EUR (Jorion), fil rouge
2 M\$ en CAD ($\sigma=5\%$), 1 M\$ en EUR ($12\%$), corrélation nulle.
$x'\Sigma x=4\times0{,}0025+1\times0{,}0144=0{,}0244$ ; $\sqrt{0{,}0244}=0{,}15620$.
$\operatorname{VaR}_p(5\%)=1{,}6449\times0{,}15620=0{,}256934$ M\$ = **256 934 \$**.
$\operatorname{VaR}_{CAD}=1{,}65\times0{,}05\times2=165\,000$ ; $\operatorname{VaR}_{EUR}=1{,}65\times0{,}12\times1=198\,000$ ; somme **363 000 \$**.
:::
:::piege Coquille p. 211
La diapositive place des racines ($\sqrt{0{,}05}$, $\sqrt{0{,}12}$) : 5 % et 12 % sont déjà des écarts-types, il ne faut pas de racine (les résultats affichés, eux, sont bons, avec $z\approx1{,}65$).
:::

## VaR marginale, incrémentale, composée | p. 213-243
:::def VaR marginale
$\Delta\operatorname{VaR}_i=\frac{\partial\operatorname{VaR}_p}{\partial W_i}$ : effet d'une unité monétaire de plus sur l'actif $i$.
:::
:::formule Sous normalité
$$\Delta\operatorname{VaR}_i=-\Phi^{-1}(\alpha)\frac{\operatorname{cov}(R_i,R_p)}{\sigma_p}=\frac{\operatorname{VaR}_p}W\,\beta_i,\qquad\beta_i=\frac{\operatorname{cov}(R_i,R_p)}{\sigma_p^2},\qquad\Delta\operatorname{VaR}=\frac{-\Phi^{-1}(\alpha)}{\sqrt{x'\Sigma x}}\,\Sigma x$$
:::
:::preuve
$\frac{\partial\sigma_p^2}{\partial w_i}=2w_i\sigma_i^2+2\sum_{j\ne i}w_j\sigma_{ij}=2\operatorname{cov}(R_i,R_p)$, et $\frac{\partial\sigma_p^2}{\partial w_i}=2\sigma_p\frac{\partial\sigma_p}{\partial w_i}$.
:::
:::def VaR incrémentale
$\operatorname{VaR}_{p_2}-\operatorname{VaR}_{p_1}$ : variation **exacte** quand on passe d'une position à une autre. À préférer quand le changement est grand (non-linéarité).
:::
:::formule VaR composée (component VaR)
$$\operatorname{CVaR}_i=\Delta\operatorname{VaR}_i\times W_i=\operatorname{VaR}_p\,\beta_iw_i,\qquad\sum_i\operatorname{CVaR}_i=\operatorname{VaR}_p,\qquad\frac{\operatorname{CVaR}_i}{\operatorname{VaR}_p}=\beta_iw_i$$
:::
:::exemple Suite CAD/EUR
$\Sigma x=(0{,}005;\ 0{,}0144)$, $\Delta\operatorname{VaR}=\frac{1{,}6449}{0{,}1562}(0{,}005;0{,}0144)=(0{,}0527;0{,}1516)$.
Incrémentale pour +10 000 \$ en CAD : $257\,461-256\,934=527$ \$ (marginale : $0{,}0527\times10\,000=527$ ✓).
Composées : 105 300 \$ (41 %) et 151 600 \$ (59 %) ; total 256 934 \$.
:::
:::piege « Retirer l'actif diminue la VaR de 59 % » ?
C'est une approximation **linéaire**. En retirant vraiment l'euro, la VaR devient $1{,}6449\times0{,}05\times2=164\,490$ \$ : baisse de 36 % seulement. La composante mesure une *contribution*, pas un retrait total.
:::
:::exemple Barings
Leeson : 7,7 Md\$ de futures Nikkei longs et 16 Md\$ d'obligations d'État japonaises vendues à découvert. Une VaR de portefeuille aurait révélé un risque énorme **concentré** : les deux paris ne se couvraient pas, ils s'ajoutaient.
:::

## Limites, cohérence, Expected Shortfall | p. 244-280
:::piege Trois limites propres à la VaR
1. **Aveugle au-delà** du seuil : deux positions de même VaR peuvent avoir des queues très différentes.
2. Peut conduire à de **mauvaises décisions** (accepter un projet à pertes rares mais colossales).
3. **Incitations perverses** : un trader limité en VaR peut vendre des options très en dehors de la monnaie : pertes rares, donc invisibles, mais énormes.
:::
:::def Mesure cohérente (Artzner et al. 1997-1999), convention P&L
Monotonie : $Y\ge X\Rightarrow\rho(Y)\le\rho(X)$. Sous-additivité : $\rho(X+Y)\le\rho(X)+\rho(Y)$. Homogénéité : $\rho(hX)=h\rho(X)$. Invariance : $\rho(X+n)=\rho(X)-n$.
:::
:::exemple VaR non sous-additive (Dowd)
Deux obligations indépendantes, défaut 4 %, perte 100. Seule : $P(\text{défaut})=4\%<5\%$, VaR(5 %) = 0. Ensemble : $P(0)=0{,}96^2=0{,}9216$, $P(100)=0{,}0768$, $P(200)=0{,}0016$ ; $P(\text{perte})=7{,}84\%>5\%$ : VaR = 100 > 0 + 0.
:::
La VaR redevient sous-additive pour les lois **elliptiques** (aux niveaux usuels).
:::formule Expected Shortfall
$$\operatorname{ES}(\alpha)=-\frac1\alpha\int_0^\alpha F^{-1}(p)\,dp\qquad\text{normale : }\operatorname{ES}=-\mu+\sigma\,\frac{\varphi(\Phi^{-1}(\alpha))}\alpha$$
Discret : moyenne des $\alpha\%$ pires pertes.
:::
:::preuve Cohérence, cas discret équiprobable
$\operatorname{ES}_A+\operatorname{ES}_B$ = moyenne des pires pertes de $A$ + moyenne des pires de $B$ (dans des états éventuellement **différents**) $\ge$ moyenne des pires pertes de $A+B$ (mêmes états).
:::
| $\alpha$ | VaR $\mathcal N(0,1)$ | ES |
|---|---|---|
| 5 % | 1,6449 | 2,0627 |
| 1 % | 2,3263 | 2,6652 |

Approximation par moyenne de 10 VaR entre 0,1 % et 5 % : 2,0728 (vraie valeur 2,0627).
:::exo ES de l'exemple à deux obligations, $\alpha=5\%$
---
Seule : les 5 % pires contiennent 4 % à 100 et 1 % à 0 : $\operatorname{ES}=\frac{4\times100}5=80$ chacune. Ensemble : $\frac{0{,}16\times200+4{,}84\times100}{5}=103{,}2\le160$ ✓.
:::

## QUIZ
? VaR(1 %) au sens de Hurlin est la VaR à…
- 1 % de confiance
+ 99 % de confiance
- 50 %
- 95 %
> $\alpha$ est le taux de couverture.
? VaR normale ?
+ $-\mu-\sigma\Phi^{-1}(\alpha)$
- $\mu+\sigma\Phi^{-1}(\alpha)$
- $\sigma\alpha$
- $-\Phi(\alpha)$
> $\Phi^{-1}(\alpha)<0$, donc la VaR est positive.
? La règle $\sqrt T$ suppose…
- la normalité seule
+ des rendements i.i.d.
- des rendements autocorrélés
- une loi de Student
> Avec $\rho>0$ elle sous-estime.
? Principal défaut de la simulation historique ?
- trop rapide
+ prévisions plates, peu réactives
- suppose la normalité
- nécessite GARCH
> Elle estime une VaR non conditionnelle.
? RiskMetrics est un cas particulier de…
+ IGARCH
- CAViaR
- EVT
- Monte-Carlo
> $\lambda+(1-\lambda)=1$.
? CAViaR modélise…
- la variance
+ le quantile lui-même
- la moyenne
- la loi
> Par régression quantile.
? Somme des VaR composées ?
+ égale à la VaR du portefeuille
- à la VaR non diversifiée
- à 1
- à l'ES
> Euler, homogénéité.
? VaR marginale et CAPM ?
+ $\frac{\operatorname{VaR}_p}W\beta_i$
- $\beta_i$
- $W\beta_i$
- $\operatorname{VaR}_p/\beta_i$
> Lois elliptiques.
? Axiome violé par la VaR ?
- monotonie
+ sous-additivité
- homogénéité
- invariance
> Exemple des obligations.
? ES(5 %) d'une $\mathcal N(0,1)$ ?
- 1,645
+ 2,063
- 2,326
- 2,665
> $\varphi(1{,}645)/0{,}05$.

## CARTES
VaR (convention du cours) :: $-F^{-1}(\alpha)$
Rendement géométrique :: $\ln\frac{P_t+D_t}{P_{t-1}}$
VaR normale :: $-\mu-\sigma\Phi^{-1}(\alpha)$
Quantiles normaux :: 5 % : 1,6449 ; 1 % : 2,3263 ; 0,5 % : 2,5758
EWMA :: $h_t=\lambda h_{t-1}+(1-\lambda)r_{t-1}^2$
VaR diversifiée :: $-\Phi^{-1}(\alpha)\sqrt{x'\Sigma x}$
VaR marginale :: $\partial\operatorname{VaR}/\partial W_i$
VaR composée :: $\operatorname{VaR}_p\beta_iw_i$
VaR incrémentale :: différence exacte entre deux positions
ES normale :: $-\mu+\sigma\varphi(\Phi^{-1}(\alpha))/\alpha$
Axiomes d'Artzner :: monotonie, sous-additivité, homogénéité, invariance
BHS :: moyenne des VaR HS sur des rééchantillons bootstrap

## PODCAST Un chiffre pour tout le risque
A: Bienvenue ! Aujourd'hui, la première partie du cours de Christophe Hurlin : la Value-at-Risk.
B: Un seul chiffre pour résumer tout le risque d'une banque ?
A: C'est sa force et sa faiblesse. La VaR à un pour cent, c'est la perte que l'on ne dépasse qu'un jour sur cent.
B: Trois ingrédients ?
A: La distribution des profits et pertes, le niveau de confiance, et l'horizon. Change l'un des trois, la VaR change.
B: Sous la loi normale ?
A: Moins mu, moins sigma fois le quantile. Le quantile à cinq pour cent est moins un virgule six quatre cinq, à un pour cent moins deux virgule trois deux six. Vérifie toujours : le cours affiche trois virgule vingt-quatre pour l'exemple, alors que le calcul donne trois virgule quarante-huit.
B: Et pour passer d'un jour à dix jours ?
A: On multiplie par racine de dix, mais seulement si les rendements sont indépendants. Avec une autocorrélation de zéro virgule cinq, il faut multiplier par cinq virgule un.
B: Comment estimer la VaR sans supposer de loi ?
A: Simulation historique : tu tries les rendements passés et tu lis le quantile. Simple, mais paresseux : la prévision est plate. On peut améliorer avec le bootstrap, un noyau, ou en donnant plus de poids aux jours récents : c'est la méthode hybride.
B: Et les méthodes paramétriques ?
A: RiskMetrics lisse la variance : quatre-vingt-quatorze pour cent de l'ancienne, six pour cent du dernier rendement au carré. GARCH généralise. Monte-Carlo simule des milliers d'avenirs, parfait pour les options.
B: Et CAViaR ?
A: Une idée élégante : au lieu de modéliser toute la loi, on modélise directement le quantile par une équation autorégressive.
B: Pour un portefeuille ?
A: Racine de x prime Sigma x, fois le quantile. L'exemple du cours : deux millions de dollars canadiens et un million d'euros. VaR diversifiée : deux cent cinquante-sept mille. Somme des VaR individuelles : trois cent soixante-trois mille. La différence, c'est la diversification.
B: Marginale, incrémentale, composée : aide-moi.
A: Marginale : je mets un franc de plus, de combien monte la VaR ? Incrémentale : je change vraiment de position, quelle est la différence exacte ? Composée : quelle part du total vient de chaque actif ? Et la somme des composées redonne la VaR.
B: Les défauts ?
A: La VaR ne dit rien de ce qui se passe après. Deux obligations à quatre pour cent de défaut ont chacune une VaR nulle à cinq pour cent, mais ensemble une VaR de cent. Elle n'est pas sous-additive.
B: Et la solution ?
A: L'expected shortfall, la moyenne des pires pertes. Sur le même exemple : quatre-vingts chacune, cent trois ensemble. Cette fois, la diversification réduit le risque. À bientôt !
`);
