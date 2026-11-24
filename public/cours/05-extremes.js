COURS({
  id: 'extremes',
  titre: 'Théorie des valeurs extrêmes',
  fichier: 'COURS THEORIE VALEURS EXTREMES.docx',
  auteur: 'Dr Okou Guei Cyrille',
  pages: 16,
  famille: 'Risque et assurance',
  resume: 'Statistiques d’ordre, Fisher-Tippett, GEV, domaines d’attraction, méthode POT, Pickands-Balkema-de Haan, GPD, choix du seuil, Hill, Pickands, VaR extrême.'
}, String.raw`
## Pourquoi s'occuper des extrêmes | Motivation
:::intuition La moyenne ne dit rien de la catastrophe
Le théorème central limite décrit les **sommes** (le comportement moyen). Mais une banque ne meurt pas d'un jour moyen : elle meurt d'un jour extrême. La théorie des valeurs extrêmes (TVE) est l'équivalent du TCL pour les **maxima**.
:::
### Le contexte du cours
Jusqu'à la fin des années 1980, deux risques dominaient : **crédit** (défaillance de l'emprunteur) et **liquidité** (ne pas pouvoir exécuter vite une transaction sans perte). Dans les années 1990, dérivés et libéralisation des capitaux font exploser le **risque de marché**.

| Année | Cas | Perte |
|---|---|---|
| 1974 | Herstatt Bank | 620 millions \$ (règlement des opérations de change) |
| 1994 | Metallgesellschaft | 1,34 milliard \$ (futures pétrole) |
| 1994 | Orange County | 1,81 milliard \$ (reverse repos) |
| 1994 | Procter & Gamble | 102 millions \$ (swaps à cliquet) |
| 1995 | Barings | 1,33 milliard \$ (futures sur indice) |
| 1997 | Natwest | 127 millions \$ (swaptions) |
| 1998 | LTCM | 2 milliards \$ (crise de liquidité) |

:::formule Ratio McDonough
$$\frac{\text{Fonds propres}}{\text{Risque de crédit}+\text{Risque de marché}+\text{Risque opérationnel}}\ge8\%$$
:::
La **CAD** (Capital Adequacy Directive) demande d'ajuster en permanence les fonds propres à la grandeur des risques.

## Statistiques d'ordre, quantiles, fonction empirique | I
On observe $X_1,\dots,X_n$ i.i.d. de fonction de répartition $F$, densité $f$, **survie** (queue) $\bar F(x)=1-F(x)=P(X>x)$.
:::def Statistiques d'ordre
On range l'échantillon : $X_{(1,n)}\le X_{(2,n)}\le\dots\le X_{(n,n)}$. Le minimum est $X_{(1,n)}$, le maximum $M_n=X_{(n,n)}$.
:::
:::formule Loi de la $k$-ième statistique d'ordre
$$F_{X_{(k,n)}}(x)=\sum_{j=k}^n\binom njF(x)^j[1-F(x)]^{n-j}$$
$$f_{X_{(k,n)}}(x)=\frac{n!}{(k-1)!\,(n-k)!}\,F(x)^{k-1}[1-F(x)]^{n-k}f(x)$$
:::
:::preuve
$X_{(k,n)}\le x$ signifie « au moins $k$ observations sont $\le x$ ». Le nombre d'observations $\le x$ suit $\mathcal B(n,F(x))$ : on somme de $k$ à $n$. La densité s'obtient en dérivant (la somme se télescope) ou directement : choisir 1 observation en $x$, $k-1$ en dessous, $n-k$ au-dessus.
:::
:::def Inverse généralisé, quantile, point terminal
$$F^{\leftarrow}(p)=\inf\{x:F(x)\ge p\}=x_p,\qquad x_F=\sup\{x:F(x)<1\}$$
Si $F$ est continue strictement croissante, $F^{\leftarrow}=F^{-1}$. $x_F$ est la plus grande valeur possible (finie pour l'uniforme, infinie pour la normale).
:::
:::def Fonction de répartition empirique
$$F_n(x)=\frac1n\sum_{k=1}^n\mathbf 1_{\{X_k\le x\}},\qquad F_n(x)=\frac kn\ \text{ si }X_{(k,n)}\le x<X_{(k+1,n)}$$
:::
:::theo Glivenko-Cantelli
$$\lim_{n\to\infty}\sup_{x}|F_n(x)-F(x)|=0\quad\text{p.s.}$$
:::
:::formule Quantile de queue et quantile extrême
$$U(t)=F^{\leftarrow}\Big(1-\frac1t\Big),\ t>1\qquad\text{quantile extrême : }x_{1-p}=F^{\leftarrow}(1-p),\ p\to0$$
:::
:::piege Limite de la fonction empirique
$F_n$ ne sait **rien** au-delà du maximum observé : $1-F_n(x)=0$ pour $x\ge X_{(n,n)}$. Elle ne peut pas estimer un quantile à 99,99 % avec 1 000 données. Il faut *extrapoler* : c'est la raison d'être de la TVE. (Dans le document, la définition du quantile extrême « d'ordre $1-p$ » est réécrite avec $F(x)\ge p$ : il faut lire $F(x)\ge1-p$.)
:::

## Méthode des blocs et théorème de Fisher-Tippett | 1.1
:::def Block maxima
On découpe la série en blocs (année, trimestre, mois) et on ne garde que le maximum de chaque bloc. Par indépendance :
$$P(M_n\le x)=F(x)^n.$$
:::
:::piege Loi limite dégénérée
$F(x)^n\to0$ si $x<x_F$ et $1$ si $x\geq x_F$ : le maximum s'écrase sur $x_F$. Il faut **normaliser**, comme dans le TCL : $\dfrac{M_n-b_n}{a_n}$ avec $a_n>0$ (échelle), $b_n\in\mathbb R$ (position).
:::
:::theo Fisher-Tippett (1928)
S'il existe $a_n>0$, $b_n$ avec $P\big(\frac{M_n-b_n}{a_n}\le x\big)=F^n(a_nx+b_n)\to H(x)$ non dégénérée, alors $H$ est, à une transformation affine près, **l'une de ces trois lois** :
$$\text{Fréchet }\Phi_\alpha(x)=\begin{cases}0&x\le0\\e^{-x^{-\alpha}}&x>0\end{cases}\qquad\text{Weibull }\Psi_\alpha(x)=\begin{cases}e^{-(-x)^\alpha}&x<0\\1&x\ge0\end{cases}\qquad\text{Gumbel }\Lambda(x)=e^{-e^{-x}}$$
:::
:::exemple Loi exponentielle → Gumbel (exemple 1)
$F(x)=1-e^{-x}$, $a_n=1$, $b_n=\ln n$ :
$$P(M_n-\ln n\le x)=\big(1-e^{-x-\ln n}\big)^n=\Big(1-\frac{e^{-x}}n\Big)^n\longrightarrow\exp(-e^{-x})=\Lambda(x).$$
:::
:::exo Pareto $F(x)=1-x^{-\alpha}$, $x\ge1$ : quelle limite ?
---
$a_n=n^{1/\alpha}$, $b_n=0$ : $F(a_nx)^n=\big(1-\frac{x^{-\alpha}}n\big)^n\to e^{-x^{-\alpha}}=\Phi_\alpha(x)$. Fréchet.
:::
:::exo Uniforme sur $[0,1]$ ?
---
$a_n=\frac1n$, $b_n=1$ : $F(1+\frac xn)^n=(1+\frac xn)^n\to e^{x}$ pour $x<0$ : $\Psi_1$, Weibull.
:::

## La loi GEV et les domaines d'attraction | 1.1-1.2
:::formule GEV (représentation de Jenkinson–von Mises)
$$H_{\mu,\sigma,\xi}(x)=\begin{cases}\exp\Big\{-\Big[1+\xi\,\dfrac{x-\mu}\sigma\Big]^{-1/\xi}\Big\}&\xi\ne0,\ \ 1+\xi\frac{x-\mu}\sigma>0\\[2mm]\exp\Big\{-\exp\Big(-\dfrac{x-\mu}\sigma\Big)\Big\}&\xi=0\end{cases}$$
$\mu$ position, $\sigma>0$ échelle, $\xi$ **forme** (indice de queue), $|\xi|=1/\alpha$.
:::
| $\xi$ | Famille | Queue | Exemples dans le domaine d'attraction |
|---|---|---|---|
| $\xi>0$ | Fréchet | épaisse (puissance) | Cauchy, Pareto, Student, $\alpha$-stable ($\alpha<2$) |
| $\xi=0$ | Gumbel | fine (exponentielle) | exponentielle, normale, gamma, log-normale |
| $\xi<0$ | Weibull | bornée à droite | uniforme, bêta |

:::def Domaine d'attraction
$F\in MDA(H)$ si le maximum normalisé de $F$ converge vers $H$.
:::
:::intuition Lire $\xi$
Plus $\xi$ est grand, plus les catastrophes sont violentes. Pour $\xi>0$, les moments d'ordre $\ge1/\xi$ sont **infinis** : $\xi\geq\frac12$ signifie variance infinie, $\xi\ge1$ moyenne infinie.
:::
:::preuve Gumbel est la limite $\xi\to0$
$(1+\xi z)^{-1/\xi}=\exp\big(-\frac1\xi\ln(1+\xi z)\big)\to e^{-z}$.
:::
:::formule Quantile GEV et niveau de retour
$$x_p=\mu+\frac\sigma\xi\Big[(-\ln p)^{-\xi}-1\Big]\quad(\xi\ne0),\qquad x_p=\mu-\sigma\ln(-\ln p)\quad(\xi=0)$$
Niveau de retour de $T$ blocs : $p=1-\frac1T$ (dépassé en moyenne une fois tous les $T$ blocs).
:::
:::exo Maxima annuels Gumbel, $\mu=100,\sigma=20$ : niveau centennal ?
---
$p=0{,}99$, $-\ln p=0{,}01005$, $\ln(0{,}01005)=-4{,}600$. $x=100+20\times4{,}600=192{,}0$.
:::
:::labo gev
:::

## La méthode POT et la loi GPD | 1.3
:::intuition Le défaut des blocs
Une année avec deux krachs n'en garde qu'un ; une année calme livre un faux extrême. **POT** (Peaks Over Threshold) garde *toutes* les observations au-dessus d'un seuil $u$ : plus de données, l'information sur le nombre **et** l'amplitude des dépassements, variance d'estimation plus faible.
:::
:::def Loi des excès
$$F_u(y)=P(X-u\le y\mid X>u)=\frac{F(u+y)-F(u)}{1-F(u)},\qquad0\le y\le x_F-u$$
:::
:::theo Pickands–Balkema–de Haan (1974-1975)
$F$ est dans le domaine d'attraction d'une GEV de forme $\xi$ si et seulement s'il existe $\sigma(u)>0$ telle que
$$\lim_{u\to x_F}\ \sup_{0<y<x_F-u}\big|F_u(y)-G_{\xi,\sigma(u)}(y)\big|=0.$$
**Le même $\xi$** apparaît dans la GEV et dans la GPD.
:::
:::formule GPD (Pareto généralisée)
$$G_{\xi,\sigma}(y)=\begin{cases}1-\Big(1+\dfrac{\xi y}\sigma\Big)^{-1/\xi}&\xi\ne0\\[2mm]1-e^{-y/\sigma}&\xi=0\end{cases}$$
Support : $y\ge0$ si $\xi\ge0$ ; $0\le y\le-\sigma/\xi$ si $\xi<0$. Densité $g(y)=\frac1\sigma(1+\xi y/\sigma)^{-1/\xi-1}$. Moyenne $\frac\sigma{1-\xi}$ si $\xi<1$.
:::
:::exemple Exponentielle (exemple 2)
$F_u(y)=\dfrac{e^{-u}-e^{-u-y}}{e^{-u}}=1-e^{-y}$ : GPD exacte avec $\xi=0,\sigma=1$, quel que soit $u$ (absence de mémoire).
:::
:::theo Stabilité par changement de seuil
Si les excès au-dessus de $u_1$ suivent une GPD$(\xi,\sigma_{u_1})$, alors au-dessus de $u_2>u_1$ ils suivent une GPD de **même $\xi$** et
$$\sigma_{u_2}=\sigma_{u_1}+\xi(u_2-u_1).$$
:::
:::preuve
$\frac{1-G(u_2-u_1+y)}{1-G(u_2-u_1)}=\Big(\frac{\sigma+\xi(u_2-u_1)+\xi y}{\sigma+\xi(u_2-u_1)}\Big)^{-1/\xi}$ : GPD d'échelle $\sigma+\xi(u_2-u_1)$.
:::
:::piege Signe à corriger
Le document écrit $\sigma_{u_2}=\sigma_{u_1}-\xi(u_2-u_1)$. La preuve ci-dessus (et Coles 2001) donne un **plus**.
:::

## Choisir le seuil : la moyenne des excès | 2.1
:::def Fonction moyenne des excès (FME / MRL)
$$e(u)=E[X-u\mid X>u],\qquad\hat e_n(u)=\frac{\sum_{i=1}^n(x_i-u)^+}{\sum_{i=1}^n\mathbf 1_{\{x_i>u\}}}$$
:::
:::formule FME d'une GPD : une droite
$$e(u)=\frac{\sigma_{u^*}+\xi(u-u^*)}{1-\xi},\qquad u>u^*,\ \xi<1$$
:::
:::methode Lire le MRL plot
1. Tracer les points $\{(u,\hat e_n(u)):u<X_{(n,n)}\}$.
2. Choisir $u^*$ : le plus petit seuil à partir duquel la courbe est à peu près **linéaire**.
3. Pente **positive** : $\xi>0$, type Fréchet. **Horizontale** : $\xi=0$, Gumbel. **Négative** : $\xi<0$, Weibull.
:::
:::piege Le dilemme biais-variance
Seuil trop **bas** : beaucoup de données, mais l'approximation GPD est fausse (**biais**). Seuil trop **haut** : bonne approximation, peu de points (**variance**).
:::
:::exo Pertes : 2, 3, 5, 8, 12. Calculer $\hat e(4)$
---
Dépassements : 5, 8, 12, excès 1, 4, 8, moyenne $\frac{13}3\approx4{,}33$.
:::

## Estimer les paramètres | 2.2
:::formule Densité et log-vraisemblance GEV
Avec $z=1+\xi\frac{x-\mu}\sigma$ :
$$h(x)=\frac1\sigma\,z^{-1/\xi-1}\exp\big(-z^{-1/\xi}\big)$$
$$\ell(\theta)=-K\ln\sigma-\Big(1+\frac1\xi\Big)\sum_k\ln z_k-\sum_kz_k^{-1/\xi}$$
On découpe $T=Kn$ données en $K$ blocs, $Y_k=\max$ du bloc $k$ ; on maximise numériquement (quasi-Newton).
:::
:::formule Log-vraisemblance GPD
$$\ell(\xi,\sigma)=-N_u\ln\sigma-\Big(1+\frac1\xi\Big)\sum_{i=1}^{N_u}\ln\Big(1+\frac{\xi y_i}\sigma\Big)\qquad(\xi\ne0)$$
:::
### Estimateurs de l'indice de queue (sur les $k$ plus grandes valeurs)
:::formule Hill (1975), $\xi>0$ seulement
$$\hat\xi^H_{k}=\frac1k\sum_{i=1}^k\ln X_{(n-i+1,n)}-\ln X_{(n-k,n)}$$
:::
:::formule Pickands (1975), tout $\xi$
$$\hat\xi^P_k=\frac1{\ln2}\,\ln\frac{X_{(n-k+1,n)}-X_{(n-2k+1,n)}}{X_{(n-2k+1,n)}-X_{(n-4k+1,n)}}$$
:::
:::formule Dekkers–Einmahl–de Haan, tout $\xi$
$$\hat\xi^D_k=M_1+1-\frac12\Big(1-\frac{M_1^2}{M_2}\Big)^{-1},\qquad M_r=\frac1k\sum_{i=1}^k\big(\ln X_{(n-i+1,n)}-\ln X_{(n-k,n)}\big)^r$$
:::
:::theo Normalité asymptotique
$\sqrt k(\hat\xi-\xi)\to\mathcal N(0,v)$ avec $v_{Hill}=\xi^2$, $v_{DEdH}=1+\xi^2$ ($\xi\ge0$), $v_{Pickands}=\dfrac{\xi^2(2^{2\xi+1}+1)}{(2(2^\xi-1)\ln2)^2}$. Pour $\xi>0$, **Hill a la plus petite variance** : c'est le plus utilisé.
:::
:::intuition D'où vient Hill ?
Pour une Pareto, $\ln(X/x_m)\sim\mathcal E(\alpha)$ : sa moyenne est $1/\alpha=\xi$. Hill est donc la moyenne des log-excès au-dessus du seuil $X_{(n-k,n)}$.
:::
:::exo Échantillon : 10, 20, 40, 80 (4 plus grandes valeurs, seuil 10). Hill avec $k=3$ ?
---
$\frac13[\ln80+\ln40+\ln20]-\ln10=\frac13[\ln8+\ln4+\ln2]=\frac13\times6\ln2=2\ln2\approx1{,}386$. Donc $\alpha=1/\xi\approx0{,}72$ : moyenne infinie.
:::
:::piege Choix de $k$
$k$ petit : biais faible, variance forte. $k$ grand : biais fort, variance faible. On trace $\hat\xi_k$ contre $k$ et on cherche un **plateau**.
:::

## Value-at-Risk et Expected Shortfall extrêmes | III
:::def VaR
« Combien l'établissement peut-il perdre, au plus, avec une probabilité donnée, sur un horizon $h$ ? » C'est un **quantile extrême** de la loi des pertes.
:::
:::formule Queue estimée par POT
$$\widehat{\bar F}(x)=\frac{N_u}n\Big(1+\xi\,\frac{x-u}\sigma\Big)^{-1/\xi},\qquad x>u$$
:::
:::formule VaR GPD (niveau de confiance $p$)
$$\operatorname{VaR}_p=u+\frac\sigma\xi\Big[\Big(\frac n{N_u}(1-p)\Big)^{-\xi}-1\Big]$$
:::
:::preuve
Écrire $\bar F(x)=P(X>u)\,P(X-u>x-u\mid X>u)\approx\frac{N_u}n(1+\xi\frac{x-u}\sigma)^{-1/\xi}=1-p$ et résoudre en $x$.
:::
:::piege Coquille importante du document
La formule finale y est écrite avec $\frac\xi\sigma$. La preuve montre que c'est $\frac\sigma\xi$. Vérifie toujours les unités : $\sigma$ est en francs, $\xi$ n'a pas d'unité, la VaR est en francs.
:::
:::formule Expected Shortfall GPD ($\xi<1$, complément)
$$\operatorname{ES}_p=\frac{\operatorname{VaR}_p}{1-\xi}+\frac{\sigma-\xi u}{1-\xi}$$
:::
:::exemple Application complète
$n=1000$ rendements, $u=2\%$, $N_u=50$, $\xi=0{,}2$, $\sigma=0{,}8\%$, $p=99\%$.
$\frac n{N_u}(1-p)=20\times0{,}01=0{,}2$ ; $0{,}2^{-0{,}2}=1{,}3797$.
$\operatorname{VaR}=2+\frac{0{,}8}{0{,}2}(0{,}3797)=3{,}519\%$.
$\operatorname{ES}=\frac{3{,}519}{0{,}8}+\frac{0{,}8-0{,}4}{0{,}8}=4{,}399+0{,}5=4{,}899\%$.
:::

## QUIZ
? Loi du maximum de $n$ variables i.i.d. ?
- $nF(x)$
+ $F(x)^n$
- $1-(1-F)^n$
- $F(x/n)$
> Toutes doivent être $\le x$. La troisième est la loi du minimum.
? La loi normale est dans le domaine d'attraction de…
- Fréchet
+ Gumbel
- Weibull
- aucune
> Queue fine.
? $\xi>0$ signifie…
+ queue épaisse (Fréchet)
- queue bornée
- loi exponentielle
- variance finie
> La variance n'est finie que si $\xi<1/2$.
? Le théorème de Pickands-Balkema-de Haan dit que les excès suivent…
- une GEV
- une normale
+ une GPD
- une Poisson
> Au-dessus d'un seuil élevé.
? $\sigma_{u_2}$ pour $u_2>u_1$ ?
+ $\sigma_{u_1}+\xi(u_2-u_1)$
- $\sigma_{u_1}-\xi(u_2-u_1)$
- $\xi\sigma_{u_1}$
- $\sigma_{u_1}$
> Le document a une erreur de signe.
? MRL plot de pente négative ?
- $\xi>0$
- $\xi=0$
+ $\xi<0$
- $\xi>1$
> Pente $\xi/(1-\xi)$.
? L'estimateur de Hill suppose…
+ $\xi>0$
- $\xi<0$
- $\xi=0$
- rien
> Il repose sur le logarithme d'une queue de Pareto.
? Seuil trop bas :
+ biais fort
- variance forte
- plus aucune donnée
- $\xi=0$
> L'approximation GPD n'est plus valable.
? VaR GPD : le facteur devant le crochet ?
- $\xi/\sigma$
+ $\sigma/\xi$
- $\sigma\xi$
- $1/\xi$
> Homogénéité : la VaR est en unités monétaires.
? Avantage de POT sur les blocs ?
+ utilise plus de données extrêmes
- pas de seuil à choisir
- pas de paramètre
- marche sans i.i.d.
> Tous les dépassements comptent.

## CARTES
Fisher-Tippett :: le maximum normalisé ne peut converger que vers Fréchet, Weibull ou Gumbel
GEV :: $\exp\{-[1+\xi\frac{x-\mu}\sigma]^{-1/\xi}\}$
GPD :: $1-(1+\xi y/\sigma)^{-1/\xi}$
Loi des excès :: $F_u(y)=\frac{F(u+y)-F(u)}{1-F(u)}$
FME :: $e(u)=E[X-u|X>u]$
Hill :: moyenne des $\ln X_{(n-i+1)}-\ln X_{(n-k)}$, $i\le k$
VaR GPD :: $u+\frac\sigma\xi[(\frac n{N_u}(1-p))^{-\xi}-1]$
Point terminal :: $x_F=\sup\{x:F(x)<1\}$
Glivenko-Cantelli :: $\sup|F_n-F|\to0$ p.s.
Niveau de retour T :: quantile d'ordre $1-1/T$
Normalisation de l'exponentielle :: $a_n=1,\ b_n=\ln n$, limite Gumbel

## PODCAST Le jour où tout casse
A: Bonjour ! Aujourd'hui, la théorie des valeurs extrêmes. Kofi, pour construire une digue, tu regardes la hauteur moyenne de la mer ?
B: Non, la plus haute vague possible !
A: Voilà tout le sujet. Barings, LTCM, Metallgesellschaft : personne n'a fait faillite un jour moyen.
B: Mais comment connaître la loi du maximum ?
A: Si les observations sont indépendantes, la probabilité que le maximum soit inférieur à x, c'est F de x puissance n. Seulement F est inconnue, et quand n grandit, la limite s'écrase.
B: Donc on normalise, comme dans le théorème central limite.
A: Exactement. Et le théorème de Fisher-Tippett dit une chose stupéfiante : quelle que soit la loi de départ, il n'y a que trois limites possibles. Gumbel pour les queues fines, comme la loi normale. Fréchet pour les queues épaisses, comme Pareto. Weibull pour les lois bornées, comme l'uniforme.
B: Et la GEV ?
A: C'est la formule qui réunit les trois. Trois paramètres : mu la position, sigma l'échelle, et xi la forme. Tout le danger est dans xi. Xi positif : queue épaisse. Xi nul : Gumbel. Xi négatif : queue bornée.
B: En pratique, on découpe en blocs ?
A: C'est la première méthode, les blocs de maxima. Mais elle gaspille : une année avec deux krachs n'en retient qu'un. D'où la deuxième méthode, POT : on choisit un seuil et on garde tous les dépassements.
B: Et ils suivent quelle loi ?
A: La loi de Pareto généralisée, la GPD. C'est le théorème de Pickands, Balkema et de Haan. Et bonne nouvelle, c'est le même xi.
B: Comment choisir le seuil ?
A: On trace la moyenne des excès en fonction du seuil. Quand la courbe devient une droite, on s'arrête. Si la droite monte, xi est positif. Si elle est plate, xi est nul. Si elle descend, xi est négatif.
B: Trop bas ou trop haut, quel est le problème ?
A: Trop bas, il y a du biais. Trop haut, il reste trop peu de points, donc de la variance.
B: Et pour estimer xi ?
A: Maximum de vraisemblance, ou bien l'estimateur de Hill : la moyenne des logarithmes des plus grandes valeurs, moins le logarithme du seuil. Il exige xi positif. Pickands et Dekkers-Einmahl-de Haan marchent pour tous les signes.
B: Enfin la VaR.
A: Seuil u, plus sigma sur xi, fois, n sur N u fois un moins p, le tout puissance moins xi, moins un. Attention, c'est sigma sur xi. Le document a inversé la fraction. Vérifie les unités : une VaR est en francs, donc sigma est au numérateur.
B: Excellent réflexe.
A: Retiens : trois lois pour les maxima, une loi pour les excès, et un seul paramètre qui dit tout, xi. À bientôt !
`);
