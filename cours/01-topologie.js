COURS({
  id: 'topologie',
  titre: 'Topologie et calcul différentiel',
  fichier: 'Topologie.pdf',
  auteur: 'Polycopié de cours (4 chapitres)',
  pages: 53,
  famille: 'Mathématiques',
  resume: 'Espaces métriques et normés, ouverts, suites, complétude, compacité, différentielle, Taylor, extrema, fonctions implicites, intégrales multiples et à paramètre.'
}, String.raw`
## Distances et normes | p. 3-7
:::intuition À quoi sert la topologie
Dire qu'un estimateur converge, qu'une fonction de risque est continue, qu'un optimum existe : tout cela suppose de savoir ce que veut dire « être proche ». La topologie est la théorie de la **proximité**. On commence par la mesurer avec une distance.
:::
:::def Distance, espace métrique
Une **distance** sur $E\neq\emptyset$ est une application $d:E\times E\to\mathbb R_+$ telle que, pour tous $x,y,z$ :
- **séparation** : $d(x,y)=0\iff x=y$ ;
- **symétrie** : $d(x,y)=d(y,x)$ ;
- **inégalité triangulaire** : $d(x,z)\le d(x,y)+d(y,z)$.

$(E,d)$ est alors un **espace métrique**.
:::
:::formule Seconde inégalité triangulaire
$$|d(x,z)-d(y,z)|\le d(x,y)$$
:::
:::preuve
$d(x,z)\le d(x,y)+d(y,z)$ donne $d(x,z)-d(y,z)\le d(x,y)$. En échangeant $x$ et $y$ on obtient aussi l'opposé. Les deux ensemble donnent la valeur absolue.
:::
Exemples : $|x-y|$ sur $\mathbb R$, $|z-z'|$ sur $\mathbb C$. Toute partie non vide $A\subset E$ munie de $d$ restreinte est un **sous-espace métrique** ($\mathbb N,\mathbb Z,\mathbb Q$ dans $\mathbb R$).
:::def Norme
Sur un $\mathbb K$-espace vectoriel, une **norme** vérifie : $\|x\|=0\iff x=0$ ; $\|\lambda x\|=|\lambda|\,\|x\|$ ; $\|x+y\|\le\|x\|+\|y\|$. Elle définit la distance $d(x,y)=\|x-y\|$. On a aussi $\big|\|x\|-\|y\|\big|\le\|x-y\|$.
:::
:::formule Les trois normes usuelles de $\mathbb R^n$
$$N_\infty(x)=\max_i|x_i|,\qquad N_1(x)=\sum_{i=1}^n|x_i|,\qquad N_2(x)=\sqrt{\sum_{i=1}^n|x_i|^2}$$
$$N_\infty\le N_1\le\sqrt n\,N_2\le n\,N_\infty$$
:::
:::def Équivalence
$d_1$ et $d_2$ sont équivalentes s'il existe $\alpha,\beta>0$ avec $\alpha d_1\le d_2\le\beta d_1$. Même définition pour les normes. Deux distances équivalentes ont **les mêmes ouverts, les mêmes suites convergentes, les mêmes fonctions continues**. Sur un produit $E_1\times\dots\times E_n$, $\delta_\infty,\delta_1,\delta_2$ (max, somme, racine de somme des carrés des distances) sont équivalentes.
:::
:::piege Toute norme donne une distance, pas l'inverse
La distance discrète ($d(x,y)=1$ si $x\ne y$, 0 sinon) ne vient d'aucune norme : on devrait avoir $d(2x,0)=2d(x,0)$.
:::
:::exemple Les trois normes sur un exemple
$x=(3,-4)$ : $N_\infty=4$, $N_1=7$, $N_2=5$. La boule unité est un carré pour $N_\infty$, un losange pour $N_1$, un disque pour $N_2$.
:::

## Boules, ouverts, fermés | p. 7-10
:::def Boules, sphère, diamètre
$$B(a,r)=\{x:d(a,x)<r\},\quad B_f(a,r)=\{x:d(a,x)\le r\},\quad S(a,r)=\{x:d(a,x)=r\}$$
$\delta(A)=\sup\{d(x,y):x,y\in A\}$ est le **diamètre** ; $A$ est **bornée** si $\delta(A)<\infty$, ce qui équivaut à être contenue dans une boule. Dans $\mathbb R$ : $B(a,r)=\,]a-r,a+r[$.
:::
:::def Ouvert, fermé
$O$ est **ouvert** si autour de chacun de ses points on peut placer une petite boule qui reste dedans : $\forall x\in O,\ \exists r>0,\ B(x,r)\subset O$. $F$ est **fermé** si son complémentaire est ouvert.
:::
:::theo Règles de stabilité
- Réunion **quelconque** d'ouverts : ouverte. Intersection **finie** d'ouverts : ouverte.
- Intersection **quelconque** de fermés : fermée. Réunion **finie** de fermés : fermée.
- Boule ouverte : ouverte. Boule fermée, sphère, singleton : fermés. $E$ et $\emptyset$ sont les deux à la fois.
:::
:::preuve Boule ouverte
Si $x\in B(a,r)$, posons $\varepsilon=r-d(a,x)>0$. Si $y\in B(x,\varepsilon)$, alors $d(a,y)\le d(a,x)+d(x,y)<d(a,x)+\varepsilon=r$. Donc $B(x,\varepsilon)\subset B(a,r)$.
:::
:::preuve Intersection finie
Si $x\in\bigcap_{i\le n}O_i$, chaque $O_i$ contient $B(x,r_i)$. On prend $r=\min r_i>0$. C'est ici que « fini » est indispensable : l'infimum d'une infinité de rayons peut être 0.
:::
:::piege Trois confusions
1. « Non ouvert » ne veut pas dire « fermé » : $[0,1[$ n'est ni l'un ni l'autre.
2. $\bigcap_n]-\tfrac1n,\tfrac1n[\,=\{0\}$ n'est pas ouvert.
3. $\bigcup_n[\tfrac1n,1]=\,]0,1]$ n'est pas fermé.
:::

## Voisinage, intérieur, adhérence, frontière | p. 11-14
:::def Voisinage
$V$ est un **voisinage** de $a$ s'il contient une boule $B(a,r)$, $r>0$. On note $\mathcal V(a)$ leur ensemble. Un ensemble est ouvert **ssi** il est voisinage de chacun de ses points.
:::
:::theo Un espace métrique est séparé
Si $a\ne b$, il existe des voisinages disjoints. Preuve : $r=\tfrac13d(a,b)$ ; si $x$ était dans les deux boules, $3r=d(a,b)\le d(a,x)+d(x,b)<2r$, absurde. C'est ce qui garantit **l'unicité de la limite**.
:::
:::def Intérieur, adhérence, frontière
- $\mathring A$ : points dont $A$ est un voisinage ; c'est le **plus grand ouvert contenu dans** $A$.
- $\overline A$ : points $x$ dont tout voisinage rencontre $A$ ; c'est le **plus petit fermé contenant** $A$.
- $\operatorname{Fr}(A)=\overline A\cap\overline{E\setminus A}=\overline A\setminus\mathring A$.
- $A$ est **dense** si $\overline A=E$ (exemple : $\overline{\mathbb Q}=\mathbb R$).
- $x\in A$ **isolé** : un voisinage ne rencontre $A$ qu'en $x$. $x$ **point d'accumulation** : tout voisinage contient une infinité de points de $A$.
:::
:::formule Dualité
$$A\ \text{ouvert}\iff A=\mathring A,\qquad A\ \text{fermé}\iff A=\overline A,\qquad E\setminus\overline A=\mathring{\widehat{E\setminus A}}$$
:::
:::exemple Exemples du cours
$A=[1,5[$ : $\mathring A=\,]1,5[$, $\overline A=[1,5]$, $\operatorname{Fr}A=\{1,5\}$. $A=\,]-3,2[\,\cup\{7\}$ : 7 est isolé, $-3$ est un point d'accumulation (qui n'appartient pas à $A$).
:::
:::exo Adhérence et intérieur de $\mathbb Q\cap[0,1]$ dans $\mathbb R$ ?
---
Tout intervalle ouvert contient des rationnels et des irrationnels. Donc l'intérieur est vide, l'adhérence est $[0,1]$, la frontière est $[0,1]$.
:::

## Suites, valeurs d'adhérence, Cauchy, complétude | p. 14-18
:::def Convergence
$x_n\to x$ si $\forall\varepsilon>0,\ \exists N,\ n\ge N\Rightarrow d(x_n,x)<\varepsilon$. Autrement dit la suite **réelle** $d(x_n,x)$ tend vers 0. Dans $\mathbb R^k$ : convergence coordonnée par coordonnée.
:::
:::theo Caractérisation séquentielle de l'adhérence
$x\in\overline A\iff$ il existe une suite de points de $A$ qui converge vers $x$. Donc $F$ est fermé ssi il contient les limites de ses suites convergentes.
:::
:::preuve
Si $x\in\overline A$, la boule $B(x,\tfrac1n)$ rencontre $A$ : on y choisit $a_n$, et $d(a_n,x)\le\tfrac1n\to0$. Réciproquement, tout voisinage de $x$ contient $a_n$ pour $n$ grand.
:::
:::def Valeur d'adhérence
$a$ est valeur d'adhérence de $(x_n)$ si $\forall\varepsilon>0,\forall N,\exists n\ge N$ : $d(x_n,a)<\varepsilon$. C'est équivalent à : **une sous-suite converge vers $a$**. Exemple : $(-1)^n$ a pour valeurs d'adhérence $1$ et $-1$, et ne converge pas.
:::
:::def Suite de Cauchy, espace complet
$(x_n)$ est de **Cauchy** si $\forall\varepsilon>0,\exists N,\ p,q\ge N\Rightarrow d(x_p,x_q)<\varepsilon$ : les termes se rapprochent *entre eux*. $E$ est **complet** si toute suite de Cauchy y converge.
:::
:::theo La chaîne d'implications
$$\text{convergente}\ \Rightarrow\ \text{Cauchy}\ \Rightarrow\ \text{bornée}$$
$$\text{Cauchy}+\text{une valeur d'adhérence}\ \Rightarrow\ \text{convergente}$$
:::
:::preuve Cauchy + valeur d'adhérence
On fixe $\varepsilon$. Cauchy : $d(x_p,x_n)<\varepsilon/2$ dès $p,n\ge N_1$. Valeur d'adhérence : il existe $q\ge N_1$ avec $d(x_q,x)<\varepsilon/2$. Donc pour $n\ge N_1$ : $d(x_n,x)\le d(x_n,x_q)+d(x_q,x)<\varepsilon$.
:::
:::theo $\mathbb R$ et $\mathbb R^n$ sont complets
Une suite de Cauchy réelle est bornée ; **Bolzano-Weierstrass** (toute suite réelle bornée a une sous-suite convergente) lui donne une valeur d'adhérence ; elle converge donc. Un produit d'espaces complets est complet.
:::
:::piege $\mathbb Q$ n'est pas complet
Les approximations décimales de $\sqrt2$ forment une suite de Cauchy de $\mathbb Q$ qui ne converge pas **dans $\mathbb Q$**.
:::

## Continuité, uniforme continuité, Lipschitz | p. 18-19
:::def Continuité
$f$ est continue en $x_0$ si $\forall\varepsilon>0,\exists\eta>0,\ d_E(x,x_0)<\eta\Rightarrow d_F(f(x),f(x_0))<\varepsilon$. La composée de fonctions continues est continue.
:::
:::def Uniforme continuité (énoncé complété)
$$\forall\varepsilon>0,\ \exists\eta>0,\ \forall x,y\in E,\quad d_E(x,y)<\eta\Rightarrow d_F(f(x),f(y))<\varepsilon.$$
Le **même** $\eta$ marche partout. (Le polycopié p. 19 a oublié la condition $d_E(x,y)<\eta$.)
:::
:::theo Hiérarchie
$$k\text{-lipschitzienne}\ (d_F(f(x),f(y))\le k\,d_E(x,y))\ \Rightarrow\ \text{unif. continue}\ \Rightarrow\ \text{continue}$$
Il suffit de prendre $\eta=\varepsilon/k$. Les réciproques sont fausses.
:::
:::exemple $x^2$ n'est pas uniformément continue sur $\mathbb R$
Prenons $x_n=n$ et $y_n=n+\tfrac1n$ : $|x_n-y_n|\to0$, mais $y_n^2-x_n^2=2+\tfrac1{n^2}\ge2$.
:::

## Compacité | p. 20-23
:::def Compact
$K$ est **compact** si de *tout* recouvrement par des ouverts on peut extraire un recouvrement **fini**.
:::
:::intuition L'idée
Un compact est un ensemble « presque fini » : on peut passer d'une infinité de contrôles locaux à un nombre fini de contrôles, donc prendre un minimum ou un maximum.
:::
:::theo Propriétés générales
Compact $\Rightarrow$ fermé et borné. Fermé dans un compact $\Rightarrow$ compact. Produit de compacts $\Rightarrow$ compact.
:::
:::theo Borel-Lebesgue
$[a,b]$ est compact. Dans $\mathbb R^n$ : $K$ compact $\iff$ $K$ fermé **et** borné.
:::
:::preuve Idée pour $[a,b]$
Soit $A$ l'ensemble des $x$ tels que $[a,x]$ soit recouvert par un nombre fini d'ouverts, $M=\sup A$. $M$ est dans un ouvert $O_j$, qui déborde de part et d'autre de $M$ ; on ajoute cet ouvert au recouvrement fini d'un $[a,x]$ proche de $M$ : $M\in A$, et si $M<b$ on dépasse $M$, contradiction. Donc $M=b$.
:::
:::theo Image continue d'un compact
Si $f$ est continue et $K$ compact, $f(K)$ est compact. Si $f$ est à valeurs réelles, elle est **bornée et atteint ses bornes** sur $K$ : $\exists\alpha,\beta\in K$, $f(\alpha)=\min_Kf$, $f(\beta)=\max_Kf$.
:::
:::piege Fermé borné suffit seulement en dimension finie
Dans un espace de dimension infinie, la boule unité fermée n'est jamais compacte.
:::
:::exemple Pourquoi un portefeuille optimal existe
L'ensemble des poids $\{w\ge0,\sum w_i=1\}$ est fermé borné dans $\mathbb R^n$, donc compact ; la variance $w'\Sigma w$ est continue : un portefeuille de variance minimale **existe**.
:::

## Différentielle, dérivées partielles, jacobienne | p. 24-33
:::theo Applications linéaires continues
Pour $f$ linéaire entre espaces normés, sont équivalents : continue partout ; continue en 0 ; $\exists k,\ \|f(x)\|\le k\|x\|$. En dimension **finie**, toute application linéaire est continue.
:::
:::def Différentiabilité
$f$ est différentiable en $a$ s'il existe $L$ linéaire continue telle que
$$f(a+h)=f(a)+L(h)+\|h\|\,\varepsilon(h),\qquad\varepsilon(h)\xrightarrow[h\to0]{}0.$$
$L$ est unique, notée $df(a)$ : c'est **la meilleure approximation linéaire** de $f$ près de $a$.
:::
:::def Dérivée suivant $v$, dérivées partielles
$$df(a,v)=\lim_{t\to0}\frac{f(a+tv)-f(a)}t,\qquad\frac{\partial f}{\partial x_i}(a)=df(a,e_i)$$
Si $f$ est différentiable, $df(a,v)=df(a)(v)$.
:::
:::formule Différentielle et jacobienne
$$df(a)=\sum_{i=1}^n\frac{\partial f}{\partial x_i}(a)\,dx_i,\qquad J_f(a)=\left(\frac{\partial f_i}{\partial x_j}(a)\right)_{1\le i\le p,\ 1\le j\le n},\qquad J_{g\circ f}(a)=J_g(f(a))\,J_f(a)$$
:::
:::theo Ce qui implique quoi
$$C^1\ \Rightarrow\ \text{différentiable}\ \Rightarrow\ \begin{cases}\text{continue}\\\text{dérivées partielles}\end{cases}$$
Dérivées partielles **existantes et continues** près de $a$ $\Rightarrow$ différentiable en $a$. Aucune flèche ne se retourne.
:::
:::piege Dérivées partielles sans continuité
$f(x,y)=\frac{xy}{x^2+y^2}$, $f(0,0)=0$ : les deux dérivées partielles en 0 existent (nulles), mais $f(t,t)=\tfrac12$ : $f$ n'est même pas continue.
:::
:::exemple Exemples du cours
$f=x^5y^6+x\sin z$ : $\partial_xf=5x^4y^6+\sin z$, $\partial_yf=6x^5y^5$, $\partial_zf=x\cos z$.

$f=(x^4y^2\cos z,\ \sin x\,e^yz^5)$ :
$$J_f=\begin{pmatrix}4x^3y^2\cos z&2x^4y\cos z&-x^4y^2\sin z\\\cos x\,e^yz^5&\sin x\,e^yz^5&5\sin x\,e^yz^4\end{pmatrix}$$
:::
:::formule Produit, inverse, quotient
$$d(fg)=g\,df+f\,dg,\qquad d\Big(\frac1g\Big)=-\frac{dg}{g^2},\qquad d\Big(\frac fg\Big)=\frac{g\,df-f\,dg}{g^2}$$
(Le signe moins de $d(1/g)$ a disparu dans le polycopié p. 30.)
:::
:::theo Schwarz (dérivées croisées)
Si $f$ est $C^2$ : $\dfrac{\partial^2f}{\partial x_i\partial x_j}=\dfrac{\partial^2f}{\partial x_j\partial x_i}$. Exemple : $f=x^5y^8$, les deux valent $40x^4y^7$.
:::

## Taylor et extrema | p. 33-37
:::formule Accroissements finis et Taylor
$$f(x_0+h)-f(x_0)=\sum_ih_i\frac{\partial f}{\partial x_i}(x_0+\theta h),\quad\theta\in]0,1[$$
$$f(a+h)=f(a)+\sum_ih_i\,\partial_if(a)+\frac12\sum_{i,j}h_ih_j\,\partial^2_{ij}f(a)+o(\|h\|^2)\qquad(\text{Taylor-Young, ordre }2)$$
$$f(a+h)=f(a)+\sum_{k=1}^{r-1}\frac1{k!}f^{(k)}(a)(h)^k+\frac1{r!}f^{(r)}(a+\theta h)(h)^r\qquad(\text{Taylor-Lagrange})$$
:::
:::theo Condition nécessaire
Si $f$ est différentiable sur un ouvert et a un extremum relatif en $a$, alors $df(a)=0$ : $a$ est un **point critique**. Ce n'est pas suffisant ($x^3$ en 0).
:::
:::theo Condition suffisante
En un point critique, $f$ de classe $C^2$, $q_a(h)=\sum_{i,j}h_ih_j\,\partial^2_{ij}f(a)$ :
- $q_a$ définie positive : **minimum** strict ;
- $q_a$ définie négative : **maximum** strict ;
- $q_a$ prend les deux signes : **point selle** (col) ;
- autrement (dégénérée de signe constant) : on ne peut pas conclure.
:::
:::preuve Pourquoi
$f(a+h)-f(a)=\frac{\|h\|^2}2\big[q_a(h/\|h\|)+\varepsilon(h)\big]$. Sur la sphère unité, **compacte**, $|q_a|$ atteint un minimum $m>0$ si $q_a$ est définie. Pour $\|h\|$ assez petit $|\varepsilon(h)|<m$ : le signe est celui de $q_a$.
:::
:::methode En deux variables : notations de Monge
$r=\partial^2_{xx}f,\ s=\partial^2_{xy}f,\ t=\partial^2_{yy}f$ au point critique.
1. $rt-s^2>0$ et $r>0$ : minimum.
2. $rt-s^2>0$ et $r<0$ : maximum.
3. $rt-s^2<0$ : point selle.
4. $rt-s^2=0$ : on ne peut pas conclure.
:::
:::piege Erreur du polycopié p. 36
Le théorème 2.6.3 écrit « maximum si $r>0$ ». C'est un **minimum** si $r>0$, comme le dit la démonstration juste au-dessus.
:::
:::exo Étudier $f(x,y)=x^3+y^3-3xy$
---
$\partial_x=3x^2-3y=0$ et $\partial_y=3y^2-3x=0$ : $y=x^2$, $x=x^4$, donc $(0,0)$ et $(1,1)$. $r=6x,\ s=-3,\ t=6y$. En $(0,0)$ : $rt-s^2=-9<0$, selle. En $(1,1)$ : $36-9=27>0$, $r=6>0$ : minimum local, $f=-1$.
:::

## Inversion locale et fonctions implicites | p. 37-39
:::theo Inversion locale
$f:U\subset\mathbb R^n\to\mathbb R^n$ de classe $C^k$, $k\ge1$. Si $\det J_f(a)\ne0$, $f$ est un **difféomorphisme** $C^k$ d'un voisinage de $a$ sur un voisinage de $f(a)$, et $J_{f^{-1}}(f(a))=[J_f(a)]^{-1}$.
:::
:::theo Fonctions implicites
Si $f$ est $C^1$ près de $(a,b)$, $f(a,b)=0$ et $\dfrac{\partial f}{\partial y}(a,b)\neq0$, alors près de $(a,b)$ l'équation $f(x,y)=0$ équivaut à $y=\varphi(x)$, avec $\varphi$ de classe $C^1$.
:::
:::formule Dérivée d'une fonction implicite
$$\varphi'(x)=-\frac{\dfrac{\partial f}{\partial x}(x,\varphi(x))}{\dfrac{\partial f}{\partial y}(x,\varphi(x))},\qquad\frac{\partial\varphi}{\partial x_i}=-\frac{\partial f/\partial x_i}{\partial f/\partial x_n}$$
(Pour retrouver le signe : dériver $f(x,\varphi(x))=0$ en chaîne.)
:::
:::exemple Exemple du cours
$y^4+3x^2y-5x^4+3y=0$ près de $(0,0)$. $f(0,0)=0$, $\partial_yf=4y^3+3x^2+3$ vaut $3\ne0$. Donc $\varphi$ existe et
$$\varphi'(x)=-\frac{6x\varphi(x)-20x^3}{4\varphi(x)^3+3x^2+3},\qquad\varphi'(0)=0.$$
:::
:::exemple En finance
Le rendement actuariel $r$ d'une obligation est défini **implicitement** par $P=\sum_tC_t(1+r)^{-t}$. La formule donne $\frac{dr}{dP}=-\frac{1}{\sum t\,C_t(1+r)^{-t-1}}$ : c'est l'inverse de la sensibilité (duration).
:::

## Intégrales doubles et triples | p. 40-48
:::theo Fubini
Pour $f$ continue sur $[a,b]\times[c,d]$ :
$$\iint f\,dx\,dy=\int_a^b\Big(\int_c^df(x,y)\,dy\Big)dx=\int_c^d\Big(\int_a^bf(x,y)\,dx\Big)dy.$$
Sur $K=\{a\le x\le b,\ \varphi_1(x)\le y\le\varphi_2(x)\}$ : $\displaystyle\iint_Kf=\int_a^b\Big(\int_{\varphi_1(x)}^{\varphi_2(x)}f\,dy\Big)dx$.
:::
:::exemple Deux calculs du cours
$\displaystyle\iint_{[0,1]^2}\frac{dx\,dy}{x+y+1}=\int_0^1[\ln(x+2)-\ln(x+1)]dx=3\ln3-4\ln2.$

Quart de disque : $\displaystyle\iint xy\,dx\,dy=\int_0^1x\,\frac{1-x^2}2dx=\frac12\Big(\frac12-\frac14\Big)=\frac18.$
:::
:::theo Changement de variables
$$\iint_Df(x,y)\,dx\,dy=\iint_\Delta f(\varphi(u,v))\,|\det J_\varphi(u,v)|\,du\,dv$$
:::
:::formule Jacobiens à connaître
| Coordonnées | Changement | Facteur |
|---|---|---|
| Polaires | $x=r\cos\theta,\ y=r\sin\theta$ | $r$ |
| Elliptiques | $x=au\cos\theta,\ y=bu\sin\theta$ | $abu$ |
| Cylindriques | $(r\cos\theta,r\sin\theta,z)$ | $r$ |
| Sphériques (latitude $\varphi\in]-\frac\pi2,\frac\pi2[$) | $(r\cos\theta\cos\varphi,\ r\sin\theta\cos\varphi,\ r\sin\varphi)$ | $r^2\cos\varphi$ |
| Sphériques (colatitude $\varphi'\in]0,\pi[$) | $(r\cos\theta\sin\varphi',\ r\sin\theta\sin\varphi',\ r\cos\varphi')$ | $r^2\sin\varphi'$ |
| Ellipsoïdales | $(au\cos\theta\cos\varphi,\ bu\sin\theta\cos\varphi,\ cu\sin\varphi)$ | $abc\,u^2\cos\varphi$ |
:::
Applications : aire de l'ellipse $\pi ab$ ; volume de l'ellipsoïde $\frac43\pi abc$.
:::methode Piles ou tranches
- **Piles** : $\iiint_\Omega f=\iint_\Delta\big(\int_{\varphi_1(x,y)}^{\varphi_2(x,y)}f\,dz\big)dx\,dy$.
- **Tranches** : $\iiint_\Omega f=\int_\alpha^\beta\big(\iint_{\Delta_z}f\,dx\,dy\big)dz$. À utiliser quand l'aire de la coupe est connue.
:::
:::exemple Tranches (demi-boule, exemple du cours)
$\displaystyle\iiint z^2=\int_0^1z^2\,\pi(1-z^2)\,dz=\pi\Big(\frac13-\frac15\Big)=\frac{2\pi}{15}.$
:::
:::exo Terminer l'exemple 3.2.1 : $\iiint e^{x+y+z}$ sur $0\le x\le1,\ 0\le y\le\frac\pi2,\ 0\le z\le x+y$
---
$I=\iint(e^{2x}e^{2y}-e^xe^y)\,dx\,dy=\dfrac{(e^2-1)(e^\pi-1)}4-(e-1)(e^{\pi/2}-1).$
:::

## Intégrales dépendant d'un paramètre | p. 49-53
:::theo Sur un segment $[a,b]$
Si $f(t,x)$ est continue, $F(x)=\int_a^bf(t,x)\,dt$ est continue. Si de plus $\partial_xf$ est continue, $F$ est dérivable et
$$F'(x)=\int_a^b\frac{\partial f}{\partial x}(t,x)\,dt.$$
:::
:::def Intégrale généralisée : convergence normale
$\int_a^bf(t,x)\,dt$ converge **normalement** s'il existe $g$ intégrable avec $\|f(t,x)\|\le g(t)$ pour tous $t,x$. Normale $\Rightarrow$ **uniforme** (le reste $\int_\alpha^b f$ est petit, uniformément en $x$).
:::
:::theo Généralisée
Continuité de $F$ : $f$ continue + convergence uniforme de $\int f$. Dérivabilité : $f$ et $\partial_xf$ continues + $\int f$ converge + $\int\partial_xf$ converge uniformément.
:::
:::exemple De l'exemple du cours à l'intégrale de Gauss
$F(x)=\displaystyle\int_0^1\frac{e^{-x^2(1+t^2)}}{1+t^2}dt$, $F'(x)=-2x\displaystyle\int_0^1e^{-x^2(1+t^2)}dt=-2e^{-x^2}\int_0^xe^{-u^2}du$ (poser $u=xt$).
Donc $F(x)+\big(\int_0^xe^{-u^2}du\big)^2$ est constante, égale à $F(0)=\frac\pi4$. Quand $x\to\infty$, $F\to0$, d'où
$$\int_0^{+\infty}e^{-u^2}du=\frac{\sqrt\pi}2.$$
C'est la constante de normalisation de la loi normale.
:::
:::exemple Second exemple, calcul achevé
$F(x)=\displaystyle\int_{\mathbb R}\frac{\arctan(x+t)}{1+t^2}dt$. Domination par $\frac{\pi/2}{1+t^2}$, puis $|\partial_xf|\le\frac1{1+t^2}$. $F'(x)=\displaystyle\int_{\mathbb R}\frac{dt}{(1+t^2)(1+(x+t)^2)}=\frac{2\pi}{x^2+4}$, et $F(0)=0$ par imparité, donc $F(x)=\pi\arctan\frac x2$.
:::

## QUIZ
? Laquelle de ces propriétés est vraie dans tout espace métrique ?
- Une intersection quelconque d'ouverts est ouverte
+ Une intersection quelconque de fermés est fermée
- Une réunion quelconque de fermés est fermée
- Un ensemble non ouvert est fermé
> $\bigcap]-1/n,1/n[=\{0\}$ contredit la première, $\bigcup[1/n,1]=]0,1]$ la troisième.
? Que vaut $\overline{\mathbb Q}$ dans $\mathbb R$ ?
- $\mathbb Q$
- $\emptyset$
+ $\mathbb R$
- les irrationnels
> $\mathbb Q$ est dense.
? Une suite de Cauchy qui possède une valeur d'adhérence…
+ converge vers elle
- est seulement bornée
- peut diverger
- est constante
> C'est la propriété 1.7.3 ; elle sert à prouver que $\mathbb R$ est complet.
? $x\mapsto x^2$ sur $\mathbb R$ est…
- lipschitzienne
- uniformément continue
+ continue mais pas uniformément
- discontinue à l'infini
> $n$ et $n+1/n$ se rapprochent mais leurs carrés restent à distance au moins 2.
? Dans $\mathbb R^n$, compact équivaut à…
- fermé
- borné
+ fermé et borné
- complet
> Borel-Lebesgue, valable en dimension finie.
? Quelle implication est FAUSSE ?
- $C^1$ ⇒ différentiable
- différentiable ⇒ continue
+ dérivées partielles en $a$ ⇒ différentiable en $a$
- différentiable ⇒ dérivées partielles
> Contre-exemple $xy/(x^2+y^2)$.
? Au point critique, $r=2,s=1,t=3$. C'est…
+ un minimum
- un maximum
- un point selle
- indéterminé
> $rt-s^2=5>0$ et $r>0$.
? Dérivée d'une fonction implicite $f(x,y)=0$ ?
- $f_x/f_y$
+ $-f_x/f_y$
- $-f_y/f_x$
- $f_y$
> On dérive $f(x,\varphi(x))=0$ : $f_x+f_y\varphi'=0$.
? Facteur à ajouter en coordonnées polaires ?
- $1$
+ $r$
- $r^2$
- $\cos\theta$
> Le déterminant jacobien vaut $r$.
? Pour dériver sous une intégrale généralisée on demande surtout…
- la dérivabilité de $f$ en $t$
+ la convergence uniforme (ou normale) de l'intégrale de $\partial_xf$
- que $f$ soit positive
- que $X$ soit compact
> La convergence normale (domination) est le moyen pratique de l'obtenir.

## CARTES
Distance : 3 axiomes :: séparation, symétrie, inégalité triangulaire
Ouvert :: $\forall x\in O,\exists r>0,B(x,r)\subset O$
Intérieur :: plus grand ouvert contenu dans $A$
Adhérence :: plus petit fermé contenant $A$
Suite de Cauchy :: $\forall\varepsilon,\exists N,\ p,q\ge N\Rightarrow d(x_p,x_q)<\varepsilon$
Espace complet :: toute suite de Cauchy y converge
Compact :: tout recouvrement ouvert admet un sous-recouvrement fini
Théorème des bornes atteintes :: $f$ continue sur un compact est bornée et atteint ses bornes
Différentielle :: $f(a+h)=f(a)+df(a)(h)+\|h\|\varepsilon(h)$
Jacobienne d'une composée :: $J_{g\circ f}(a)=J_g(f(a))J_f(a)$
Monge :: $rt-s^2>0$ : extremum ($r>0$ min, $r<0$ max) ; $<0$ : selle
Implicite :: $\varphi'=-f_x/f_y$
Jacobien sphérique (colatitude) :: $r^2\sin\varphi'$
Intégrale de Gauss :: $\int_0^\infty e^{-u^2}du=\sqrt\pi/2$

## PODCAST Être proche, c'est quoi ?
A: Bienvenue dans l'épisode topologie. Une question simple pour commencer : comment dire que deux objets sont proches ?
B: Je mesure la distance entre eux.
A: Parfait. Et une distance, c'est trois règles. Nulle seulement si les deux points sont confondus. La même dans les deux sens. Et le détour n'est jamais plus court que la ligne directe : c'est l'inégalité triangulaire.
B: Et une norme ?
A: Une norme mesure la taille d'un vecteur. La distance entre x et y est la norme de la différence. Dans R n, il y a trois normes usuelles : le maximum, la somme, et la racine de la somme des carrés. Elles sont équivalentes : peu importe laquelle, les suites convergentes sont les mêmes.
B: Passons aux ouverts.
A: Un ouvert, c'est un ensemble où tu n'es jamais au bord : autour de chaque point, il y a une petite boule qui reste dedans. Un fermé, c'est le complémentaire d'un ouvert.
B: Donc un ensemble est soit ouvert, soit fermé ?
A: Non ! C'est LE piège. L'intervalle de zéro inclus à un exclu n'est ni l'un ni l'autre. Et l'espace entier est les deux à la fois.
B: Et les opérations ?
A: Pour les ouverts : réunion quelconque, mais intersection finie seulement. Pour les fermés, c'est l'inverse.
B: Ensuite viennent les suites de Cauchy.
A: Une suite de Cauchy, ce sont des termes qui se rapprochent les uns des autres. Un espace complet, c'est un espace sans trou : toute suite de Cauchy y trouve sa limite. Les rationnels ont des trous, par exemple en racine de deux. Les réels n'en ont pas.
B: Le mot qui fait peur : compact.
A: Dans R n, compact veut dire fermé et borné. Et la conséquence utile est énorme : une fonction continue sur un compact atteint son minimum et son maximum. C'est pour cela qu'un portefeuille de variance minimale existe.
B: Passons au calcul différentiel. C'est quoi, la différentielle ?
A: C'est la meilleure approximation linéaire. f de a plus h vaut f de a, plus une partie linéaire en h, plus une erreur négligeable devant la taille de h.
B: Et les dérivées partielles suffisent ?
A: Non, sauf si elles sont continues. L'exemple x y sur x carré plus y carré a des dérivées partielles en zéro, et pourtant il n'est même pas continu.
B: Pour les extrema ?
A: Étape un, annuler le gradient. Étape deux, regarder la hessienne. En deux variables, on calcule r t moins s carré. Positif, c'est un extremum : minimum si r est positif, maximum si r est négatif. Négatif, c'est un point selle. Nul, on ne sait pas. Et attention, le polycopié contient une faute d'inattention à cet endroit.
B: Les fonctions implicites, j'aime bien.
A: Si f de x, y égale zéro, et si la dérivée par rapport à y n'est pas nulle, alors localement y est fonction de x, et sa dérivée est moins f x sur f y. N'oublie pas le signe moins : il a disparu deux fois dans le polycopié. Application : le rendement d'une obligation est une fonction implicite de son prix.
B: On termine par les intégrales.
A: Fubini : on intègre une variable après l'autre. Changement de variables : on multiplie par la valeur absolue du jacobien. En polaires, c'est r. En sphériques, r carré fois sinus de la colatitude.
B: Et l'intégrale à paramètre ?
A: Pour dériver sous le signe somme, il faut dominer la dérivée par une fonction intégrable qui ne dépend pas du paramètre. Avec cela, le cours permet de prouver que l'intégrale de e puissance moins u carré, de zéro à l'infini, vaut racine de pi sur deux. C'est la clé de la loi normale.
B: Magnifique. À la prochaine !
`);
