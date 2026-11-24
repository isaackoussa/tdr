COURS({
  id: 'mesure',
  titre: 'Théorie de la mesure et intégration',
  fichier: 'Mesure_integration.pdf',
  auteur: 'Ioan Manolescu, 29 novembre 2023',
  pages: 171,
  famille: 'Mathématiques',
  resume: 'Tribus, mesures, intégrale de Lebesgue, Fatou, convergence monotone et dominée, Carathéodory, Fubini, Hausdorff, espaces Lp, Hilbert, Radon-Nikodym et dualité.'
}, String.raw`
## Pourquoi dépasser Riemann | p. 9-13
:::intuition Le problème de départ
On veut mesurer la taille d'un ensemble $A\subset\mathbb R$. Méthode de **Jordan** : l'encadrer par des unions *finies* d'intervalles, par en dessous et par au-dessus. Si les deux approximations se rejoignent, $A$ est Jordan-mesurable. L'intégrale de **Riemann** fait la même chose avec l'aire sous une courbe.
:::
:::def Riemann-intégrable
$f\ge0$ à support compact est Riemann-intégrable si le supremum des intégrales des fonctions en escalier **sous** $f$ est égal à l'infimum de celles **au-dessus** de $f$. Pour $f$ de signe quelconque : $f=f^+-f^-$, $f^+=\max(f,0)$, $f^-=-\min(f,0)$.
:::
:::piege Les trois défauts de Riemann
1. Une limite simple de fonctions Riemann-intégrables peut ne pas l'être ($\mathbf 1_{\mathbb Q\cap[0,1]}$ est limite croissante d'indicatrices d'ensembles finis).
2. Il existe $F$ dérivable dont $F'$ n'est pas Riemann-intégrable.
3. Elle dépend de la structure de $\mathbb R$ : impossible de l'utiliser sur un espace de probabilité $\Omega$ quelconque.
:::
:::intuition Le billet de banque
Pour compter une pile de monnaie, Riemann prend les pièces dans l'ordre où elles viennent et les additionne (découpage **vertical**). Lebesgue trie d'abord par valeur, compte combien il y a de pièces de chaque valeur, puis fait $\sum$ valeur $\times$ quantité (découpage **horizontal**). Pour « compter combien », il faut une *mesure*.
:::
:::exo Exercice 8 : recouvrir $\mathbb Q$ par des intervalles de longueur totale $<\varepsilon$
---
On numérote $\mathbb Q=\{q_1,q_2,\dots\}$ et on prend $]q_n-\varepsilon2^{-n-2},\,q_n+\varepsilon2^{-n-2}[$, de longueur $\varepsilon2^{-n-1}$. La somme vaut $\varepsilon/2<\varepsilon$. Donc $\mathbb Q$ est négligeable, bien que dense.
:::

## Tribus et mesures | p. 23-28
:::def Tribu ($\sigma$-algèbre)
$\mathcal E\subset\mathcal P(E)$ est une **tribu** si :
1. $\emptyset\in\mathcal E$ ;
2. $A\in\mathcal E\Rightarrow A^c\in\mathcal E$ ;
3. $A_1,A_2,\dots\in\mathcal E\Rightarrow\bigcup_{n\ge1}A_n\in\mathcal E$.

$(E,\mathcal E)$ est un **espace mesurable**. Par passage au complémentaire, une tribu est aussi stable par intersection dénombrable.
:::
:::def Mesure
$\mu:\mathcal E\to[0,+\infty]$ avec $\mu(\emptyset)=0$ et la **$\sigma$-additivité** : pour des $A_n$ deux à deux disjoints,
$$\mu\Big(\bigsqcup_nA_n\Big)=\sum_n\mu(A_n).$$
$\mu$ est **finie** si $\mu(E)<\infty$, **de probabilité** si $\mu(E)=1$, **$\sigma$-finie** si $E=\bigcup A_n$ avec $\mu(A_n)<\infty$. Un **atome** est un point tel que $\mu(\{x\})>0$.
:::
Exemples : mesure de **Dirac** $\delta_x(A)=\mathbf 1_A(x)$ ; mesure de **comptage** $A\mapsto|A|$ ; mesure atomique $\sum_ia_i\delta_{x_i}$ (une loi discrète).
:::formule Propriétés d'une mesure
$$A\subset B\Rightarrow\mu(A)\le\mu(B),\qquad\mu(B\setminus A)=\mu(B)-\mu(A)\ \ \text{si }\mu(A)<\infty$$
$$\mu(A\cup B)=\mu(A)+\mu(B)-\mu(A\cap B)\ \ \text{si }\mu(A\cap B)<\infty$$
$$A_n\uparrow:\ \mu\Big(\bigcup A_n\Big)=\lim\uparrow\mu(A_n)\qquad A_n\downarrow,\ \mu(A_1)<\infty:\ \mu\Big(\bigcap A_n\Big)=\lim\downarrow\mu(A_n)$$
$$\mu\Big(\bigcup A_n\Big)\le\sum\mu(A_n)\qquad(\sigma\text{-sous-additivité})$$
:::
:::preuve Continuité croissante
Poser $B_1=A_1$, $B_n=A_n\setminus A_{n-1}$, disjoints. $\bigcup A_n=\bigsqcup B_n$, donc $\mu(\bigcup A_n)=\sum_n\mu(B_n)=\lim_N\sum_{n\le N}\mu(B_n)=\lim_N\mu(A_N)$.
:::
:::piege Continuité décroissante : $\mu(A_1)<\infty$ est indispensable
$A_n=[n,+\infty[$ : $\lambda(A_n)=\infty$ pour tout $n$, mais $\bigcap A_n=\emptyset$ de mesure 0.
:::
:::formule Inclusion-exclusion (exercice 32)
$$\mu\Big(\bigcup_{k=1}^nA_k\Big)=\sum_{\emptyset\ne I\subset\{1..n\}}(-1)^{|I|+1}\mu\Big(\bigcap_{k\in I}A_k\Big)$$
:::
:::def Tribu engendrée, borélienne, produit
$\sigma(\mathcal A)$ : la plus petite tribu contenant $\mathcal A$ (intersection de toutes). **Borélienne** $\mathcal B(E)$ : engendrée par les ouverts. **Produit** $\mathcal E\otimes\mathcal F$ : engendrée par les pavés $U\times V$. $\mathcal B(\mathbb R)$ est engendrée par les intervalles, même à bornes rationnelles ; $\mathcal B(\mathbb R^2)=\mathcal B(\mathbb R)\otimes\mathcal B(\mathbb R)$.
:::
:::piege Réunion de tribus
Une **intersection** quelconque de tribus est une tribu ; une **réunion** en général non.
:::

## Classes monotones et unicité | p. 29-32
:::def Classe monotone
$\mathcal M$ contient $E$, est stable par différence propre ($A\subset B\Rightarrow B\setminus A\in\mathcal M$) et par réunion **croissante** dénombrable.
:::
:::theo Lemme de classe monotone (1.10)
Si $\mathcal A$ est stable par intersection finie et $\mathcal A\subset\mathcal M$, alors $\sigma(\mathcal A)\subset\mathcal M$.
:::
:::methode Comment l'utiliser
Pour montrer qu'une propriété vaut pour **tous** les éléments d'une tribu :
1. la montrer sur une famille simple $\mathcal A$, stable par $\cap$, qui engendre la tribu ;
2. montrer que les ensembles qui ont la propriété forment une classe monotone ;
3. conclure par le lemme.
:::
:::theo Unicité (1.12)
Si $\mu=\nu$ sur $\mathcal A$ stable par $\cap$ qui engendre $\mathcal E$, et s'il existe $A_k\uparrow E$ dans $\mathcal A$ avec $\mu(A_k)<\infty$, alors $\mu=\nu$.
:::
:::exemple Ce que cela donne
- Il existe **au plus une** mesure avec $\lambda([a,b])=b-a$.
- Deux lois de même fonction de répartition sont égales (les $]-\infty,t]$ sont stables par intersection).
:::
:::preuve Unicité de Lebesgue
Deux candidates $\lambda,\nu$. On fixe $M$ et $\mathcal M=\{A:\lambda(A\cap[-M,M])=\nu(A\cap[-M,M])\}$. La restriction à $[-M,M]$ rend tout fini, donc on peut soustraire : $\mathcal M$ est une classe monotone qui contient les segments. Donc $\mathcal M=\mathcal B(\mathbb R)$, puis $M\to\infty$.
:::

## Fonctions mesurables et intégrale | p. 33-47
:::def Fonction mesurable
$f:(E,\mathcal E)\to(F,\mathcal F)$ est mesurable si $f^{-1}(B)\in\mathcal E$ pour tout $B\in\mathcal F$. Il **suffit** de le vérifier sur une famille qui engendre $\mathcal F$ : pour une fonction réelle, les $\{f<a\}$. C'est la définition d'une variable aléatoire.
:::
:::theo Stabilité
Continue $\Rightarrow$ mesurable. Sommes, produits, max, min, composées, **sup, inf, limsup, liminf et limites simples** de suites mesurables sont mesurables. $\mathbf 1_A$ mesurable $\iff A\in\mathcal E$.
:::
### Construction de l'intégrale en trois étages
:::def 1. Fonctions étagées positives
$f=\sum_{k=1}^na_k\mathbf 1_{A_k}$ : $\displaystyle\int f\,d\mu=\sum_{k=1}^na_k\,\mu(A_k)$ (indépendant de l'écriture, lemme 2.7).
:::
:::def 2. Fonctions mesurables positives
$\displaystyle\int f\,d\mu=\sup\Big\{\int g\,d\mu:\ g\text{ étagée},\ 0\le g\le f\Big\}\in[0,+\infty]$.
:::
:::def 3. Fonctions intégrables
Si $\int|f|\,d\mu<\infty$ : $\displaystyle\int f\,d\mu=\int f^+d\mu-\int f^-d\mu$. On note $\mathcal L^1(E,\mathcal E,\mu)$ leur ensemble (espace vectoriel).
:::
:::formule Approximation canonique par des fonctions étagées
$$f_n(x)=\min\big\{2^{-n}\lfloor2^nf(x)\rfloor,\ 2^n\big\}\ \nearrow\ f(x)$$
:::
:::formule Propriétés
$$\int(af+bg)=a\int f+b\int g,\quad f\le g\Rightarrow\int f\le\int g,\quad\Big|\int f\Big|\le\int|f|,\quad\int\sum_nf_n=\sum_n\int f_n\ (f_n\ge0)$$
:::
:::theo Inégalité de Markov (2.16)
Pour $f\ge0$ et $\lambda>0$ : $\displaystyle\mu(\{f\ge\lambda\})\le\frac1\lambda\int f\,d\mu$.
:::
:::preuve
$f\ge\lambda\mathbf 1_{\{f\ge\lambda\}}$ partout ; intégrer. Conséquences : pour $f\ge0$, $\int f=0\iff f=0$ presque partout ; $\int f<\infty\Rightarrow f<\infty$ p.p.
:::
:::def Mesure à densité (2.19)
$\nu(A)=\int_Af\,d\mu$ définit une mesure, notée $\nu=f\,d\mu$, et $\int g\,d\nu=\int gf\,d\mu$. C'est ainsi qu'une densité $f_X$ donne une loi : $P(X\in A)=\int_Af_X(x)\,dx$ et $E[g(X)]=\int g f_X$.
:::
:::exemple Traduction probabiliste
$E[X]=\int_\Omega X\,dP$. Markov devient $P(X\ge\lambda)\le E[X]/\lambda$. « Presque partout » devient « presque sûrement ».
:::

## Les trois grands théorèmes de convergence | p. 40-50
La question : quand a-t-on $\lim\int f_n=\int\lim f_n$ ?
:::theo Convergence monotone (Beppo Levi, 2.13)
Si $0\le f_1\le f_2\le\dots$ et $f_n\to f$, alors $\displaystyle\int f_n\,d\mu\ \nearrow\ \int f\,d\mu$ (éventuellement $+\infty$).
:::
:::preuve
$\le$ : évident par monotonie. $\ge$ : soit $g$ étagée, $0\le g\le f$, et $\varepsilon>0$. $E_n=\{f_n\ge(1-\varepsilon)g\}$ croît vers $E$. Alors $\int f_n\ge(1-\varepsilon)\int_{E_n}g=(1-\varepsilon)\sum a_k\mu(A_k\cap E_n)\to(1-\varepsilon)\int g$ par continuité croissante de $\mu$. Puis $\varepsilon\to0$ et sup sur $g$.
:::
:::theo Lemme de Fatou (2.18)
Pour $f_n\ge0$ mesurables : $\displaystyle\int\liminf_nf_n\,d\mu\ \le\ \liminf_n\int f_n\,d\mu$.
:::
:::preuve
$g_n=\inf_{k\ge n}f_k$ croît vers $\liminf f_k$. Monotone : $\int\liminf f_k=\lim\int g_n$. Et $g_n\le f_\ell$ pour $\ell\ge n$, donc $\int g_n\le\inf_{\ell\ge n}\int f_\ell$. On passe à la limite.
:::
:::intuition Sens de l'inégalité de Fatou
À la limite, de la masse peut **disparaître**, jamais apparaître. Exemple : $f_n=\mathbf 1_{[n,n+1]}$, $\int f_n=1$ mais $f_n\to0$ : $0\le1$.
:::
:::theo Convergence dominée (Lebesgue, 2.24)
Si $f_n\to f$ p.p. et s'il existe $g$ **intégrable** avec $|f_n|\le g$ p.p. pour tout $n$, alors $f$ est intégrable, $\int|f_n-f|\,d\mu\to0$ et $\int f_n\to\int f$.
:::
:::preuve
Appliquer Fatou à $2g-|f_n-f|\ge0$ : $\int2g\le\int2g-\limsup\int|f_n-f|$. Comme $\int2g<\infty$, on simplifie : $\limsup\int|f_n-f|\le0$.
:::
:::piege Les trois façons de perdre de la masse (exercice 55)
Avec $\varphi\ge0$, $\int\varphi=1$ :
- **concentration** $n\varphi(nx)$ : pic de plus en plus haut ;
- **étalement** $\frac1n\varphi(\frac xn)$ ;
- **fuite à l'infini** $\varphi(x-n)$.

Dans les trois cas l'intégrale reste 1, la limite est 0 p.p. : aucune domination intégrable n'existe.
:::
:::methode Choisir le bon théorème
1. Suite positive croissante → **monotone**.
2. Domination $|f_n|\le g$ intégrable → **dominée**.
3. Seulement $f_n\ge0$ → **Fatou** (une inégalité).
4. Série de termes positifs → échange toujours permis.
:::
:::formule Intégrale à paramètre (exercices 58-59)
$$F(t)=\int f(x,t)\,d\mu(x)$$
Continue si $t\mapsto f(x,t)$ l'est et $|f(x,t)|\le g(x)\in L^1$. $C^1$ avec $F'(t)=\int\partial_tf\,d\mu$ si $|\partial_tf(x,t)|\le g(x)\in L^1$.
:::
:::exo Calculer $\lim_n\int_0^n\big(1-\frac xn\big)^nx^{a-1}dx$ pour $a>0$
---
$f_n(x)=(1-\frac xn)^nx^{a-1}\mathbf 1_{[0,n]}\to e^{-x}x^{a-1}$ et $0\le f_n\le e^{-x}x^{a-1}$ (car $1-u\le e^{-u}$), intégrable. Dominée : la limite est $\Gamma(a)$.
:::
:::exo Exercice 56 : $f_n=\frac1n\mathbf 1_{[n,n+1)}$
L'intégrale tend vers 0, mais la convergence n'est pas dominée. Pourquoi ?
---
Toute $g\ge|f_n|$ vérifie $g\ge\frac1n$ sur $[n,n+1)$, donc $\int g\ge\sum\frac1n=\infty$. La domination est **suffisante, pas nécessaire**.
:::

## Construire des mesures : Carathéodory et Lebesgue | p. 51-66
:::def Mesure extérieure
$\mu:\mathcal P(E)\to[0,\infty]$ nulle en $\emptyset$, croissante et $\sigma$-sous-additive. $A$ est **$\mu$-mesurable** s'il coupe proprement tout ensemble : $\forall B,\ \mu(B)=\mu(A\cap B)+\mu(A^c\cap B)$.
:::
:::theo Carathéodory (3.2, 3.3, 3.4)
- Les ensembles $\mu$-mesurables forment une tribu $\mathcal M(\mu)$ sur laquelle $\mu$ est une **mesure**.
- Si $\rho$ est $\sigma$-additive sur une algèbre $\mathcal A$, $\mu(A)=\inf\{\sum\rho(A_n):A\subset\bigcup A_n\}$ la prolonge ; le prolongement est unique si $\sigma$-fini.
- Sur un espace métrique, si $\mu(A\cup B)=\mu(A)+\mu(B)$ dès que $\operatorname{dist}(A,B)>0$, alors $\mathcal B(E)\subset\mathcal M(\mu)$.
:::
:::theo Mesure de Lebesgue (3.8)
Il existe une unique mesure $\lambda$ sur $(\mathbb R,\mathcal B(\mathbb R))$ avec $\lambda([a,b])=b-a$ :
$$\lambda(A)=\inf\Big\{\sum_{n}(b_n-a_n):\ A\subset\bigcup_n\,]a_n,b_n[\Big\}.$$
:::
:::preuve Le cœur : $\lambda([a,b])\ge b-a$
D'un recouvrement ouvert du **compact** $[a,b]$ on extrait un recouvrement fini ; on ordonne les intervalles qui se chevauchent et on télescope : la somme des longueurs dépasse $b-a$.
:::
:::formule Invariances
$$\lambda(\alpha A+\beta)=|\alpha|\,\lambda(A),\qquad\lambda_d(\alpha A)=|\alpha|^d\lambda_d(A),\qquad\lambda_d(MA)=|\det M|\,\lambda_d(A)$$
Les seules mesures invariantes par translation et finies sur les compacts sont les multiples de $\lambda_d$.
:::
:::def Négligeable, tribu complétée
$A$ est $\mu$-négligeable s'il est inclus dans un $B\in\mathcal E$ de mesure nulle. $\overline{\mathcal E}=\{A\cup N\}$ : on ajoute les négligeables.
:::
:::theo Fonction de répartition (3.11, 3.13)
$F_\mu(t)=\mu(]-\infty,t])$ est croissante, continue à droite avec limites à gauche, tend vers 0 en $-\infty$ et vers $\mu(\mathbb R)$ en $+\infty$. Réciproquement, toute fonction ayant ces propriétés est la fonction de répartition d'une **unique** mesure finie. Les sauts sont les atomes : $\mu(\{x\})=F(x)-F(x^-)$.
:::
:::exemple Cantor : ni densité, ni atome (exercice 70)
$C_\infty$ s'obtient en retirant le tiers central indéfiniment : $\lambda(C_n)=(2/3)^n\to0$. La fonction de Cantor est continue, croissante de 0 à 1, constante hors de $C_\infty$ : sa mesure est de masse 1 sur un ensemble de longueur nulle, **sans atome**. Une loi n'est donc pas toujours « discrète + à densité ».
:::
:::exemple Vitali : un ensemble non mesurable
On choisit (axiome du choix) un représentant dans $[0,1]$ de chaque classe de $\mathbb R/\mathbb Q$. Les translatés rationnels sont disjoints. $\sum_{q\in\mathbb Q\cap[0,1]}\lambda(E)\le2$ force $\lambda(E)=0$ ; mais leur réunion pour $q\in[-1,1]$ contient $[0,1]$, ce qui force une mesure $\ge1$. Contradiction : $E$ n'est pas mesurable.
:::
:::theo Riemann et Lebesgue (3.15)
Toute fonction Riemann-intégrable est Lebesgue-intégrable avec la même valeur (pour la tribu complétée). $f$ bornée sur un segment est Riemann-intégrable $\iff$ ses discontinuités forment un ensemble négligeable.
:::

## Mesure produit, Fubini, changement de variables | p. 66-85
:::theo Mesure produit (3.16)
Si $\mu,\nu$ sont $\sigma$-finies, il existe une unique mesure avec $(\mu\otimes\nu)(A\times B)=\mu(A)\nu(B)$. En probabilités : c'est **l'indépendance**.
:::
:::theo Fubini-Tonelli, fonctions positives (3.19)
Pour $f\ge0$ mesurable, sans autre condition :
$$\int f\,d(\mu\otimes\nu)=\int\Big(\int f(x,y)\,d\mu(x)\Big)d\nu(y)=\int\Big(\int f(x,y)\,d\nu(y)\Big)d\mu(x).$$
:::
:::theo Fubini, fonctions quelconques (3.20)
La même égalité vaut si $f$ est **intégrable** pour $\mu\otimes\nu$.
:::
:::methode Le réflexe en deux temps
1. Tonelli sur $|f|$ : calculer $\int(\int|f|)$ dans l'ordre le plus facile.
2. Si c'est fini, Fubini sur $f$.
:::
:::exemple Formule de la queue
Pour $X\ge0$ : $E[X]=E\Big[\int_0^\infty\mathbf 1_{\{t<X\}}dt\Big]=\int_0^\infty P(X>t)\,dt$. Même idée : $E[X^k]=\int_0^\infty kt^{k-1}P(X>t)\,dt$. C'est l'outil de base de l'assurance et des valeurs extrêmes.
:::
:::theo Changement de variables (3.25)
$\varphi:U\to V$ difféomorphisme $C^1$ : $\displaystyle\int_Vf(v)\,dv=\int_Uf(\varphi(u))\,|\det d\varphi(u)|\,du$.
:::
:::def Régularité et théorème de Riesz (3.27-3.33)
$\mu$ borélienne est **régulière** si $\mu(A)=\sup\{\mu(K):K\subset A\text{ compact}\}=\inf\{\mu(U):U\supset A\text{ ouvert}\}$. C'est le cas sur un espace métrique propre si $\mu$ est finie sur les compacts, et pour toute probabilité sur un espace polonais. **Riesz** : toute forme linéaire positive sur $C_c(E)$ s'écrit $\Lambda(f)=\int f\,d\mu$ pour une unique $\mu$.
:::
:::exemple Banach-Tarski (p. 85)
La sphère de $\mathbb R^3$ peut se découper en 10 morceaux (non mesurables) qu'on réassemble par rotations en **deux** sphères identiques. Conclusion : en dimension $\ge3$, on ne peut pas mesurer toutes les parties, même avec la simple additivité. D'où l'obligation de choisir une tribu.
:::

## Mesure et dimension de Hausdorff | p. 91-106
:::def Mesure de Hausdorff
$$\mathcal H^d(A)=\lim_{\varepsilon\to0}\ \inf\Big\{\frac{\alpha(d)}{2^d}\sum_k\operatorname{diam}(B_k)^d:\ A\subset\bigcup B_k,\ \operatorname{diam}B_k\le\varepsilon\Big\}$$
On recouvre $A$ par de petits morceaux et on additionne « taille puissance $d$ ». $\alpha(d)$ est le volume de la boule unité : ainsi $\mathcal H^n=\lambda_n$ sur $\mathbb R^n$.
:::
:::theo Une valeur critique
$\mathcal H^d(A)<\infty\Rightarrow\mathcal H^{d'}(A)=0$ pour $d'>d$ ; $\mathcal H^{d'}(A)>0\Rightarrow\mathcal H^d(A)=\infty$ pour $d<d'$. D'où
$$\dim_H(A)=\inf\{d\ge0:\mathcal H^d(A)=0\}.$$
:::
:::formule Règles
$$\mathcal H^d(\beta A)=\beta^d\mathcal H^d(A),\qquad\dim_H\Big(\bigcup_kA_k\Big)=\sup_k\dim_H(A_k),\qquad f\ C\text{-lip.}:\ \mathcal H^d(f(A))\le C^d\mathcal H^d(A)$$
:::
Courbe rectifiable : dimension 1, $\mathcal H^1$ = longueur. Variété de dimension $d$ : $\dim_H=d$. $\dim_H\le\dim_{\text{Minkowski}}$ ; pour $\mathbb Q\cap[0,1]$ la première vaut 0 et la seconde 1.
:::exemple Dimension de l'ensemble de Cantor
Deux copies réduites d'un facteur 3 : $\mathcal H^d(C)=2\cdot3^{-d}\mathcal H^d(C)$. À la dimension critique (mesure finie non nulle) : $2\cdot3^{-d}=1$, $d=\dfrac{\ln2}{\ln3}\approx0{,}63$.
:::
:::formule Coordonnées sphériques
$$\int_{\mathbb R^n}f\,d\lambda_n=\int_0^\infty\int_{S^{n-1}}f(rz)\,r^{n-1}\,d\mathcal H^{n-1}(z)\,dr$$
:::

## Espaces normés, dual, Hilbert | p. 109-130
:::def Banach, Hilbert
**Banach** : espace normé complet. **Hilbert** : complet pour la norme d'un produit scalaire.
:::
:::theo Dimension finie contre infinie
En dimension finie : toutes les normes sont équivalentes, tout espace est complet, fermé borné = compact. **La boule unité est précompacte $\iff$ la dimension est finie** (5.9).
:::
:::def Norme d'opérateur et dual
$\|u\|=\sup_{\|x\|=1}\|u(x)\|$ ; $u$ continue $\iff\|u\|<\infty$. $E^*=\mathcal L(E,\mathbb R)$ est toujours un Banach. $E$ s'injecte isométriquement dans $E^{**}$ ; **réflexif** si $E=E^{**}$.
:::
:::theo Hahn-Banach (5.17-5.18)
Une forme linéaire continue sur un sous-espace se prolonge à tout $E$ **sans augmenter sa norme**.
:::
:::def Convergence faible-*, Banach-Alaoglu
$\Lambda_n\overset{*}{\rightharpoonup}\Lambda$ si $\Lambda_n(x)\to\Lambda(x)$ pour tout $x$. **Banach-Alaoglu** : la boule unité fermée de $E^*$ est compacte pour la topologie faible-* : on récupère de la compacité en dimension infinie.
:::
:::theo Projection dans un Hilbert (5.27)
$F$ sous-espace **fermé** : tout $x$ a une unique projection $\pi(x)\in F$ avec $x-\pi(x)\in F^\perp$, et $\|x-\pi(x)\|=\operatorname{dist}(x,F)$.
:::
:::formule Base hilbertienne et Riesz
$$x=\sum_{i}\langle x,e_i\rangle e_i,\qquad\|x\|^2=\sum_i\langle x,e_i\rangle^2,\qquad E^*\simeq E:\ \Lambda(y)=\langle x_\Lambda,y\rangle$$
:::

## Espaces $L^p$ | p. 131-144
:::def $L^p$
$\mathcal L^p=\{f:\int|f|^pd\mu<\infty\}$, $\|f\|_p=\big(\int|f|^p\big)^{1/p}$ ; $\mathcal L^\infty$ : fonctions bornées p.p., $\|f\|_\infty=\inf\{C:|f|\le C\ \text{p.p.}\}$. $L^p$ est le quotient par l'égalité p.p. (sinon $\|f\|_p=0$ n'entraînerait pas $f=0$).
:::
:::formule Hölder et Minkowski
$$\int|fg|\,d\mu\le\|f\|_p\|g\|_q,\quad\frac1p+\frac1q=1\qquad\qquad\|f+g\|_p\le\|f\|_p+\|g\|_p\quad(p\ge1)$$
:::
:::preuve Hölder
Young : $ab\le\frac{a^p}p+\frac{b^q}q$ (concavité du logarithme). Avec $a=|f|/\|f\|_p$, $b=|g|/\|g\|_q$, intégrer : $\int ab\le\frac1p+\frac1q=1$.
:::
:::theo Riesz-Fischer (6.6)
$L^p$ est un **Banach** pour tout $p\in[1,\infty]$ ; $L^2$ est un **Hilbert** avec $\langle f,g\rangle=\int fg$.
:::
:::theo Inclusions
Mesure **finie** (proba) : $p\le q\Rightarrow L^q\subset L^p$ (avoir un moment d'ordre 4 implique en avoir un d'ordre 2). Pour la mesure de comptage, l'inclusion est **inverse** : $\ell^p\subset\ell^q$. Sur $\mathbb R$ : aucune.
:::
:::theo Densité
Les fonctions étagées intégrables et $C_c(E)$ sont denses dans $L^p$ pour $p<\infty$. Dans $L^\infty$, l'adhérence de $C_c$ est seulement $C_0$.
:::
:::theo Espérance conditionnelle (6.21)
Pour $f\in L^2$ et une sous-tribu $\mathcal F$, il existe une unique $g$ $\mathcal F$-mesurable avec $\int fh\,dP=\int gh\,dP$ pour toute $h$ $\mathcal F$-mesurable bornée : $g=E[f\mid\mathcal F]$. C'est la **projection orthogonale** de $f$ sur $L^2(\mathcal F)$.
:::

## Mesures signées, Radon-Nikodym, dualité | p. 145-170
:::def Mesure signée, variation totale, Hahn
$\mu:\mathcal E\to\mathbb R$ $\sigma$-additive. $|\mu|(A)=\sup\sum|\mu(A_n)|$ sur les partitions ; $\|\mu\|_{VT}=|\mu|(E)$. **Hahn** : $E=B\sqcup B^c$, avec $\mu^+=|\mu|_{|B}$ et $\mu^-=|\mu|_{|B^c}$, $\mu=\mu^+-\mu^-$.
:::
:::def Absolument continue, étrangère
$\nu\ll\mu$ si $\mu(A)=0\Rightarrow\nu(A)=0$. $\nu\perp\mu$ si elles sont portées par des ensembles disjoints.
:::
:::theo Lebesgue et Radon-Nikodym (8.1-8.2)
$\mu$ $\sigma$-finie : $\nu=\nu_0+\nu_1$ de façon unique, $\nu_0\ll\mu$, $\nu_1\perp\mu$, et $\nu_0=f\,d\mu$. Si $\nu\ll\mu$ :
$$\nu(A)=\int_A\frac{d\nu}{d\mu}\,d\mu.$$
:::
:::exemple Finance : la probabilité risque-neutre
Le changement de mesure $\frac{dQ}{dP}=Z$ est une densité de Radon-Nikodym : $E_Q[X]=E_P[ZX]$. $Q\sim P$ veut dire $Q\ll P$ et $P\ll Q$ : les deux probabilités ont les mêmes événements impossibles.
:::
:::theo Dualités (9.1-9.7)
$(L^q)^*=L^p$ pour $1\le q<\infty$, $\frac1p+\frac1q=1$ ; $L^p$ est réflexif pour $1<p<\infty$ ; $C_0(E)^*=\mathcal M(E)$ (mesures signées) ; $(L^\infty)^*$ est l'espace des mesures **additives** bornées, absolument continues par rapport à $\mu$ — plus grand que $L^1$.
:::
:::piege Pourquoi cela compte pour les mesures de risque
Sur $L^\infty$, la représentation $\rho(X)=\sup_Q E_Q[\cdot]$ d'une mesure de risque cohérente ne donne que des $Q$ *finiment additives* ; il faut ajouter la **propriété de Fatou** pour obtenir de vraies probabilités.
:::

## QUIZ
? Quelle propriété ne fait PAS partie de la définition d'une tribu ?
- Contenir $\emptyset$
- Stabilité par complémentaire
- Stabilité par réunion dénombrable
+ Stabilité par réunion quelconque
> Les singletons sont dans $\mathcal B(\mathbb R)$ ; une réunion quelconque donnerait toutes les parties.
? $A_n\downarrow A$ et $\mu(A_n)\to\mu(A)$ exige…
+ $\mu(A_1)<\infty$ (ou fini à partir d'un rang)
- rien
- $\mu$ de probabilité
- $A=\emptyset$
> Contre-exemple : $[n,\infty[$.
? $f_n=\mathbf 1_{[n,n+1]}$. Que dit Fatou ?
- $1\le0$
+ $0\le1$
- $0=1$
- rien
> $\int\liminf=0\le\liminf\int=1$.
? La convergence dominée requiert une domination par…
- une constante
+ une fonction intégrable indépendante de $n$
- une fonction mesurable
- $f$ elle-même
> Une constante ne suffit que si la mesure est finie.
? La mesure de Lebesgue de $\mathbb Q$ est…
+ 0
- 1
- $+\infty$
- non définie
> Dénombrable, donc négligeable.
? Pour échanger deux intégrales d'une fonction de signe quelconque :
- toujours permis
+ vérifier $\iint|f|<\infty$
- $f$ continue suffit
- $f$ bornée suffit
> Tonelli sur $|f|$, puis Fubini.
? Sur un espace de probabilité :
+ $L^2\subset L^1$
- $L^1\subset L^2$
- $L^1=L^2$
- aucune inclusion
> Hölder avec $g=1$ : $E|X|\le\sqrt{E X^2}$.
? $E[X\mid\mathcal F]$ dans $L^2$ est…
- une constante
+ la projection orthogonale sur $L^2(\mathcal F)$
- la médiane
- une dérivée
> Le résidu $X-E[X|\mathcal F]$ est orthogonal à toute variable $\mathcal F$-mesurable.
? Radon-Nikodym s'applique si…
- $\nu\perp\mu$
+ $\nu\ll\mu$ et $\mu$ $\sigma$-finie
- $\mu\ll\nu$
- $\nu$ atomique
> La densité $d\nu/d\mu$ existe alors.
? La dimension de Hausdorff de l'ensemble de Cantor est…
- 0
+ $\ln2/\ln3$
- 1/2
- 1
> $2\cdot3^{-d}=1$.
? La mesure de Cantor est…
- discrète
- à densité
+ sans atome et étrangère à Lebesgue
- nulle
> Fonction de répartition continue, support de longueur nulle.

## CARTES
Tribu :: $\emptyset$, complémentaire, réunion dénombrable
Mesure :: $\mu(\emptyset)=0$ et $\sigma$-additivité
Lemme de classe monotone :: $\mathcal A$ stable par $\cap$, $\mathcal A\subset\mathcal M\Rightarrow\sigma(\mathcal A)\subset\mathcal M$
Markov :: $\mu(f\ge\lambda)\le\frac1\lambda\int f$
Convergence monotone :: $0\le f_n\nearrow f\Rightarrow\int f_n\nearrow\int f$
Fatou :: $f_n\ge0$ : $\int\liminf f_n\le\liminf\int f_n$
Convergence dominée :: $f_n\to f$ p.p., $|f_n|\le g\in L^1\Rightarrow\int|f_n-f|\to0$
Formule de la queue :: $E[X]=\int_0^\infty P(X>t)dt$ pour $X\ge0$
Hölder :: $\int|fg|\le\|f\|_p\|g\|_q$, $\frac1p+\frac1q=1$
Riesz-Fischer :: $L^p$ est complet
Radon-Nikodym :: $\nu\ll\mu\Rightarrow\nu=f\,d\mu$
Carathéodory : mesurable :: $\mu(B)=\mu(A\cap B)+\mu(A^c\cap B)$ pour tout $B$
Banach-Alaoglu :: boule unité de $E^*$ compacte pour la topologie faible-*
Fonction de répartition :: croissante, continue à droite, $F(-\infty)=0$

## PODCAST Compter la monnaie : Riemann contre Lebesgue
A: Aujourd'hui, la théorie de la mesure. Imagine une pile de pièces à compter, Kofi.
B: Je les prends une par une et j'additionne.
A: Ça, c'est Riemann : dans l'ordre où elles viennent. Lebesgue, lui, trie d'abord par valeur, compte combien il y en a de chaque, puis multiplie et additionne.
B: Le total est le même.
A: Oui, mais la méthode de Lebesgue marche même quand les pièces sont mélangées de façon épouvantable. Seulement, il faut savoir dire combien il y en a. C'est le rôle de la mesure.
B: Et la tribu ?
A: C'est la liste des ensembles que l'on a le droit de mesurer. Elle contient le vide, elle est stable par complémentaire et par réunion dénombrable. Le mot dénombrable est crucial.
B: Pourquoi ne pas tout mesurer ?
A: Parce que c'est impossible. L'ensemble de Vitali n'a pas de longueur cohérente. Et Banach et Tarski ont montré qu'on peut découper une sphère en dix morceaux et en refaire deux. Les morceaux sont si tordus qu'ils n'ont pas de volume.
B: D'accord, donc on choisit une tribu. Et l'intégrale, comment la construit-on ?
A: En trois étages. Un, les fonctions étagées : somme des valeurs fois la mesure. Deux, les fonctions positives : le supremum des étagées qui sont en dessous. Trois, les fonctions quelconques : partie positive moins partie négative, à condition que la valeur absolue soit intégrable.
B: Venons-en aux théorèmes de convergence. Monotone, Fatou, dominée. Je les confonds.
A: Retiens une histoire de masse. Convergence monotone : la masse ne fait qu'augmenter, donc on peut échanger limite et intégrale. Fatou : la masse peut disparaître à la limite, mais jamais apparaître. Donc l'intégrale de la limite inférieure est plus petite. Dominée : on met un couvercle intégrable au-dessus de toutes les fonctions, donc la masse ne peut pas s'échapper.
B: Et comment la masse s'échappe-t-elle ?
A: Trois façons. Elle se concentre en un pic infiniment haut. Elle s'étale à l'infini. Ou elle glisse vers l'infini, comme l'indicatrice de n, n plus un.
B: Et Fubini ?
A: Deux temps. D'abord la valeur absolue, pour vérifier que c'est fini. Ensuite, tu échanges. La plus belle application : l'espérance d'une variable positive est l'intégrale de sa queue, la probabilité que X dépasse t. Tu la reverras en théorie de la ruine et en valeurs extrêmes.
B: Les espaces L p, maintenant.
A: Ce sont les fonctions dont la puissance p est intégrable. Ils sont complets : c'est Riesz-Fischer. Deux inégalités : Hölder pour les produits, Minkowski pour les sommes. Et L deux est un espace de Hilbert. Du coup, l'espérance conditionnelle devient une projection orthogonale.
B: Cela rejoint l'algèbre bilinéaire.
A: Tout se tient. Enfin, Radon-Nikodym : si une mesure nu ne charge rien de ce que mu ignore, alors nu a une densité par rapport à mu. En finance, la densité de la probabilité risque-neutre par rapport à la probabilité historique, c'est exactement cela.
B: Trois choses à retenir ?
A: La tribu dit ce qu'on mesure. L'intégrale trie par valeurs. Et pour échanger limite et intégrale : croissante, ou dominée. À bientôt !
`);
