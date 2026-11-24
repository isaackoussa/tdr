PLUS('mesure', String.raw`
## @2
### Démonstrations
:::preuve Toutes les propriétés d'une mesure (proposition 1.3)
**(i)** Additivité finie : $\sigma$-additivité avec $A_n=\emptyset$ à partir d'un rang. **(ii)** $B=A\sqcup(B\setminus A)$ donc $\mu(B)=\mu(A)+\mu(B\setminus A)\ge\mu(A)$ ; si $\mu(A)<\infty$ on peut soustraire. **(iii)** $A\cup B=A\sqcup(B\setminus(A\cap B))$ et (ii). **(iv)** Continuité croissante : voir plus haut. **(v)** $A_1\setminus A_n$ croît vers $A_1\setminus\bigcap A_k$ ; (iv) donne $\mu(A_1)-\mu(A_n)\to\mu(A_1)-\mu(\bigcap A_k)$, et $\mu(A_1)<\infty$ permet de simplifier. **(vi)** $B_n=A_n\setminus\bigcup_{k<n}A_k$ sont disjoints, de même réunion, et $\mu(B_n)\le\mu(A_n)$.
:::

## @3
:::preuve Lemme de classe monotone (1.10)
Soit $\mathcal M_0$ la plus petite classe monotone contenant $\mathcal A$ (intersection de toutes). On montre qu'elle est stable par $\cap$ : elle sera alors une tribu (exercice 41), donc $\sigma(\mathcal A)\subset\mathcal M_0\subset\mathcal M$.

**Étape 1.** Fixons $A\in\mathcal A$ et $\mathcal M_A=\{B\in\mathcal M_0:A\cap B\in\mathcal M_0\}$. C'est une classe monotone (différences propres et réunions croissantes passent à travers $A\cap\cdot$), qui contient $\mathcal A$ car $\mathcal A$ est stable par $\cap$. Donc $\mathcal M_A=\mathcal M_0$.

**Étape 2.** Fixons maintenant $B\in\mathcal M_0$ quelconque : $\mathcal M_B$ est une classe monotone qui contient $\mathcal A$ d'après l'étape 1. Donc $\mathcal M_B=\mathcal M_0$ : $\mathcal M_0$ est stable par intersection.
:::

## @6
:::preuve Carathéodory (3.2) : les ensembles mesurables forment une tribu
**Complémentaire** : la définition est symétrique en $A$ et $A^c$. **Réunion de deux** : $A_1,A_2\in\mathcal M$, $B$ quelconque :
$$\mu(B)=\mu(B\cap A_1)+\mu(B\cap A_1^c)=\mu(B\cap A_1)+\mu(B\cap A_1^c\cap A_2)+\mu(B\cap A_1^c\cap A_2^c)\ge\mu(B\cap(A_1\cup A_2))+\mu(B\cap(A_1\cup A_2)^c),$$
l'autre inégalité étant la sous-additivité. **Réunion dénombrable disjointe** : par récurrence $\mu(B\cap\bigsqcup_{k\le n}A_k)=\sum_{k\le n}\mu(B\cap A_k)$. Donc $\mu(B)\ge\sum_{k\le n}\mu(B\cap A_k)+\mu\big(B\cap(\bigsqcup_kA_k)^c\big)$ ; on fait $n\to\infty$ et on utilise la $\sigma$-sous-additivité. On obtient à la fois la mesurabilité de la réunion et, en prenant $B=\bigsqcup A_k$, la **$\sigma$-additivité**.
:::
:::preuve Invariances de $\lambda_d$
**Translation, dilatation** : $A\mapsto\lambda(\alpha A+\beta)/|\alpha|$ est une mesure qui donne $b-a$ à $[a,b]$ ; l'unicité conclut. **Seules mesures invariantes par translation** : si $c=\mu([0,1[^d)$, en découpant le cube unité en $N^d$ petits cubes translatés, chacun a la masse $cN^{-d}$ ; donc $\mu=c\lambda_d$ sur les cubes dyadiques, famille stable par $\cap$ qui engendre. **Isométries** : $\mu(A)=\lambda_d(RA)$ est invariante par translation, donc $\mu=c\lambda_d$ ; la boule unité est invariante par $R$, d'où $c=1$.
:::

## @7
:::preuve Fubini : la chaîne complète (3.16 à 3.20)
**1. Sections (lemme 3.18).** Pour $C\in\mathcal E\otimes\mathcal F$, $C_x=\{y:(x,y)\in C\}$ est mesurable et, si $\nu$ est finie, $x\mapsto\nu(C_x)$ est mesurable : c'est vrai pour les pavés ($\nu(C_x)=\mathbf 1_A(x)\nu(B)$), et les $C$ qui conviennent forment une classe monotone. Cas $\sigma$-fini : on découpe.

**2. Existence.** $(\mu\otimes\nu)(C)=\int\nu(C_x)\,d\mu(x)$ est $\sigma$-additive par convergence monotone. **Unicité** : les pavés sont stables par $\cap$ et engendrent. L'autre ordre d'intégration définit aussi une mesure valant $\mu(A)\nu(B)$ : elles coïncident.

**3. Tonelli.** Vrai pour les indicatrices (point 2), donc pour les étagées (linéarité), donc pour les positives (monotone, deux fois).

**4. Fubini.** Si $f$ est intégrable, Tonelli appliqué à $|f|$ montre que $\int|f(x,y)|d\nu(y)<\infty$ pour $\mu$-presque tout $x$ ; on soustrait $f^+$ et $f^-$.
:::
:::piege Les deux hypothèses sont indispensables
**Intégrabilité** : $f(x,y)=\dfrac{x^2-y^2}{(x^2+y^2)^2}$ sur $]0,1[^2$. Comme $f=\partial_y\frac y{x^2+y^2}$, $\int_0^1f\,dy=\frac1{1+x^2}$, d'intégrale $\frac\pi4$ ; dans l'autre ordre on trouve $-\frac\pi4$. Deux intégrales itérées égales ne suffisent pas non plus : la remarque 3.21 donne une fonction impaire dont les deux intégrales itérées sont nulles sans que $f$ soit intégrable. **$\sigma$-finitude** : $\lambda\otimes$ comptage sur la diagonale de $[0,1]^2$ : $\int\!\big(\int\mathbf 1_\Delta\,d\,\text{compt}\big)d\lambda=1$ mais $\int\!\big(\int\mathbf 1_\Delta\,d\lambda\big)d\,\text{compt}=0$.
:::
:::exemple Volume de la boule unité
Par Fubini sur les deux premières coordonnées puis polaires :
$$v_d=\int_{x_1^2+x_2^2\le1}v_{d-2}(1-x_1^2-x_2^2)^{\frac{d-2}2}dx=2\pi v_{d-2}\int_0^1(1-r^2)^{\frac{d-2}2}r\,dr=\frac{2\pi}d\,v_{d-2}.$$
Avec $v_1=2,\ v_2=\pi$ :
$$v_{2k}=\frac{\pi^k}{k!},\qquad v_{2k+1}=\frac{\pi^k}{(k+\frac12)(k-\frac12)\cdots\frac12},\qquad v_d=\frac{\pi^{d/2}}{\Gamma(d/2+1)}.$$
$v_3=\frac43\pi$, $v_4=\frac{\pi^2}2$, $v_5=\frac8{15}\pi^2$ ; $v_d\to0$ : en grande dimension, la boule ne remplit presque rien de son cube.
:::
:::preuve Changement de variables (3.25)
**1. Linéaire.** $\mu(A)=\lambda_d(MA)$ est invariante par translation, donc $\mu=c(M)\lambda_d$ et $c(MN)=c(M)c(N)$. Par le pivot de Gauss, $M$ est un produit de matrices élémentaires : permutation ($c=1$), dilatation d'une coordonnée ($c=|\alpha|$), transvection ($c=1$ par Fubini : chaque coupe est translatée). Donc $c(M)=|\det M|$.

**2. Localement.** Sur un petit cube $Q$ de centre $u$, $\varphi(u+h)=\varphi(u)+d\varphi(u)h+o(h)$, uniformément sur un compact. Donc $\varphi(Q)$ est compris entre les images affines de $(1\pm\varepsilon)Q$ : $\lambda_d(\varphi(Q))=(1+O(\varepsilon))|\det d\varphi(u)|\lambda_d(Q)$.

**3. Globalement.** On somme sur une grille fine (somme de Riemann de la fonction continue $|\det d\varphi|$) : $\lambda_d(\varphi(Q))=\int_Q|\det d\varphi|$ pour tout cube. Les deux membres sont des mesures en $Q$ ; les cubes engendrent : égalité pour tout borélien. Puis étagées, positives, intégrables.
:::
:::preuve Régularité (3.28) et espaces polonais (3.30)
**$\mu$ finie sur un métrique.** Soit $\mathcal C$ l'ensemble des $A$ tels que pour tout $\varepsilon$ il existe $F\subset A\subset U$, $F$ fermé, $U$ ouvert, $\mu(U\setminus F)<\varepsilon$. Un fermé est dans $\mathcal C$ ($U_n=\{d(\cdot,F)<1/n\}$ décroît vers $F$). $\mathcal C$ est stable par complémentaire, et par réunion dénombrable (prendre $\varepsilon2^{-n}$, puis un nombre fini des $F_n$). Donc $\mathcal C\supset\mathcal B(E)$. **Propre** : les fermés sont $\sigma$-compacts, on remplace $F$ fermé par $F\cap\overline B(x,R)$ compact ; si $\mu$ n'est que finie sur les compacts, on travaille couronne par couronne.

**Polonais.** Soit $(x_i)$ dense. Pour tout $n$ il existe $N_n$ tel que $\mu\big(\bigcup_{i\le N_n}\overline B(x_i,\frac1n)\big)>\mu(E)-\varepsilon2^{-n}$. $K=\bigcap_n\bigcup_{i\le N_n}\overline B(x_i,\frac1n)$ est fermé et précompact, donc **compact** ($E$ complet), et $\mu(K^c)\le\varepsilon$ : toute probabilité sur un polonais est *tendue*.
:::
:::preuve Représentation de Riesz (3.33) : les étapes
**1. Urysohn** : $K\subset U$, $\delta=\operatorname{dist}(K,U^c)$, $f(y)=\max\{1-\delta^{-1}\operatorname{dist}(y,K),0\}$ vaut 1 sur $K$, 0 hors de $U$. **2.** Pour $U$ ouvert, $\mu(U)=\sup\{\Lambda(f):f\in C_c,\ 0\le f\le\mathbf 1_U\}$ (support dans $U$) ; pour $A$ quelconque, $\mu(A)=\inf\{\mu(U):U\supset A\}$. **3.** C'est une mesure extérieure : si $f\le\mathbf 1_{\bigcup U_n}$, son support compact est couvert par un nombre fini de $U_n$ ; une partition de l'unité écrit $f=\sum f_n$. **4.** Elle est additive sur les ensembles à distance positive : par Carathéodory les boréliens sont mesurables. **5. Identité** $\Lambda(f)=\int f\,d\mu$ : on découpe $0\le f$ en tranches horizontales $f_n=\min\{(f-n\varepsilon)^+,\varepsilon\}$, $f=\sum f_n$. Comme $\varepsilon\mathbf 1_{\{f\ge(n+1)\varepsilon\}}\le f_n\le\varepsilon\mathbf 1_{\{f>n\varepsilon\}}$, $\Lambda(f_n)$ et $\int f_n$ sont tous deux encadrés par $\varepsilon\mu(f\ge(n+1)\varepsilon)$ et $\varepsilon\mu(\overline{\{f>n\varepsilon\}})$. La différence des sommes est $\le C\varepsilon\,\mu(\operatorname{supp}f)$, et $\varepsilon\to0$. **6. Unicité** : deux mesures régulières donnant les mêmes $\int f$ coïncident sur les ouverts.
:::
:::preuve Banach-Tarski : l'idée complète
**1. Groupe libre.** Deux rotations d'angle $\arccos\frac13$ autour de $Oz$ et de $Ox$ engendrent un groupe libre $F(a,b)$ : pour un mot réduit de longueur $n$, l'image de $(1,0,0)$ (ou de $(0,0,1)$) a pour coordonnées $3^{-n}(p,q\sqrt2,r)$ avec des entiers non tous divisibles par 3 (récurrence modulo 3), donc ce n'est pas l'identité.

**2. Paradoxe du groupe.** Soit $A_x$ l'ensemble des mots réduits commençant par $x$. Alors $F=A_a\sqcup A_{a^{-1}}\sqcup A_b\sqcup A_{b^{-1}}\sqcup\{e\}$, et pourtant $F=A_a\sqcup a\,A_{a^{-1}}$ et $F=A_b\sqcup b\,A_{b^{-1}}$ : avec quatre morceaux on refait **deux** copies.

**3. Transport sur la sphère.** Chaque rotation fixe deux points : l'ensemble $D$ des points fixes est dénombrable. Sur $S^2\setminus D$, $F$ agit sans point fixe ; l'axiome du choix prend un point par orbite, et le découpage de $F$ devient un découpage de $S^2\setminus D$.

**4. Réparer $D$.** Une rotation $\rho$ bien choisie rend les $\rho^nD$ disjoints : $S^2=\big(\bigsqcup_{n\ge0}\rho^nD\big)\sqcup R$ devient $S^2\setminus D$ en appliquant $\rho$ au premier morceau. **Dimensions 1 et 2** : le groupe des isométries est moyennable, une mesure finiment additive invariante existe, et le paradoxe est impossible.
:::

## @8
### Démonstrations et exemples traités
:::preuve $\mathcal H^d$ est une mesure borélienne ; valeur critique (4.3 à 4.7)
$\mathcal H^d_\varepsilon$ est une mesure extérieure (réunir des recouvrements optimaux à $\eta2^{-n}$ près), croissante quand $\varepsilon\downarrow0$ : la limite est un supremum de mesures extérieures. Si $\operatorname{dist}(A,B)>\varepsilon$, un recouvrement par des morceaux de diamètre $\le\varepsilon$ se sépare en deux : additivité, donc Carathéodory s'applique et les boréliens sont mesurables. **Valeur critique** : $\sum\operatorname{diam}(B_k)^{d'}\le\varepsilon^{d'-d}\sum\operatorname{diam}(B_k)^d$ ; si $\mathcal H^d(A)<\infty$, faire $\varepsilon\to0$ donne $\mathcal H^{d'}(A)=0$. **Lipschitz** : $\operatorname{diam}f(B)\le C\operatorname{diam}B$.
:::
:::preuve $\mathcal H^n=\lambda_n$ (4.12)
$\mathcal H^n$ est invariante par translation et finie non nulle sur les cubes : $\mathcal H^n=c\lambda_n$. Pour $c\ge1$ : l'**inégalité isodiamétrique** $\lambda_n(B)\le\alpha(n)(\operatorname{diam}B/2)^n$ donne $\lambda_n(A)\le\sum\frac{\alpha(n)}{2^n}\operatorname{diam}(B_k)^n$. Pour $c\le1$ : on remplit presque tout un ouvert par des boules disjointes de petit diamètre (Vitali), pour lesquelles il y a égalité ; le reste est négligeable.
:::
:::preuve $\mathcal H^1$ est la longueur (4.15)
$\gamma:[0,1]\to\mathbb R^n$ injective de longueur $\ell$, paramétrée par l'arc sur $[0,\ell]$ : 1-lipschitzienne, donc $\mathcal H^1(\gamma)\le\ell$. Réciproquement $\mathcal H^1(\gamma([s,t]))\ge|\gamma(t)-\gamma(s)|$ (projeter sur la corde, 1-lipschitzienne), et les morceaux étant presque disjoints, $\mathcal H^1(\gamma)\ge\sum|\gamma(t_{i+1})-\gamma(t_i)|$, dont le sup est $\ell$.
:::
:::preuve Coordonnées sphériques (4.17)
Pour les secteurs $\{rz:a<r<b,\ z\in A\}$, $A\subset S^{n-1}$ : l'application $A\mapsto\lambda_n(\{rz:0<r\le1,z\in A\})$ est une mesure sur la sphère invariante par rotation, donc proportionnelle à $\mathcal H^{n-1}$ ; en comparant la coquille $\{1<|x|<1+\varepsilon\}$, d'épaisseur $\varepsilon$, la constante est $\frac1n$. Donc $\lambda_n(\text{secteur})=\frac{b^n-a^n}n\mathcal H^{n-1}(A)=\int_a^br^{n-1}dr\,\mathcal H^{n-1}(A)$ : c'est la formule pour les indicatrices de secteurs, famille stable par $\cap$ qui engendre ; classe monotone puis fonctions étagées.
:::

## @9
### Démonstrations
:::preuve Cauchy-Schwarz et cas d'égalité ; dimension infinie (5.9)
Le trinôme $\|x+ty\|^2\ge0$ donne $\langle x,y\rangle^2\le\|x\|^2\|y\|^2$, avec égalité ssi il a une racine, c'est-à-dire ssi $x,y$ sont **colinéaires**. **5.9** : si $\dim E=\infty$, lemme de Riesz : pour $F\subsetneq E$ fermé et $\eta<1$ il existe $\|x\|=1$ avec $\operatorname{dist}(x,F)\ge\eta$. On construit $x_{n+1}$ à distance $\ge\frac12$ de $\operatorname{Vect}(x_1,\dots,x_n)$ (en dimension finie, la distance est atteinte, on peut même prendre 1) : la suite n'a aucune sous-suite de Cauchy.
:::
:::preuve Applications linéaires continues (5.11), dual complet (5.15), bidual (5.16)
**5.11.** Continue en 0 : $\exists\delta$, $\|x\|\le\delta\Rightarrow\|u(x)\|\le1$ ; par homogénéité $\|u(x)\|\le\delta^{-1}\|x\|$. Réciproque : $\|u(x)-u(y)\|\le\|u\|\,\|x-y\|$. **5.15.** $(\Lambda_n)$ de Cauchy : pour chaque $x$, $(\Lambda_n(x))$ est de Cauchy dans $\mathbb R$ ; la limite $\Lambda$ est linéaire, et $|\Lambda_n(x)-\Lambda(x)|\le\varepsilon\|x\|$ pour $n\ge N$. **5.16.** $J(x)(\Lambda)=\Lambda(x)$ : $\|J(x)\|\le\|x\|$, et Hahn-Banach donne $\Lambda$ de norme 1 avec $\Lambda(x)=\|x\|$ : égalité.
:::
:::preuve Hahn-Banach
**Une dimension de plus.** $\Lambda$ sur $F$, $\|\Lambda\|\le1$, $x\notin F$. Il faut choisir $a=\Lambda(x)$ avec $|\Lambda(y)+a|\le\|y+x\|$ pour tout $y\in F$ (l'homogénéité fait le reste), c'est-à-dire
$$\sup_{y\in F}\big(-\|y+x\|-\Lambda(y)\big)\le a\le\inf_{z\in F}\big(\|z+x\|-\Lambda(z)\big).$$
C'est possible car $\Lambda(z)-\Lambda(y)\le\|z-y\|\le\|z+x\|+\|y+x\|$. **Zorn.** Les prolongements de norme $\le1$, ordonnés par extension, sont inductifs (réunion d'une chaîne) ; un élément maximal est défini sur tout $E$, sinon on ajoute une dimension.
:::
:::preuve Banach-Alaoglu (cas séparable)
Soit $(x_k)$ dense dans la boule unité de $E$, $d(\Lambda,\Lambda')=\sum2^{-k}|\Lambda(x_k)-\Lambda'(x_k)|$ : cette distance décrit la convergence faible-* sur la boule de $E^*$. Soit $(\Lambda_n)$ avec $\|\Lambda_n\|\le1$ : $(\Lambda_n(x_1))$ est bornée, on extrait ; puis $x_2$, etc. ; l'**extraction diagonale** converge en tous les $x_k$. Comme les $\Lambda_n$ sont 1-lipschitziennes, la convergence s'étend à tout $x$, et la limite est linéaire de norme $\le1$.
:::
:::preuve Projection dans un Hilbert (5.27)
Identité du parallélogramme : $\|x+y\|^2+\|x-y\|^2=2\|x\|^2+2\|y\|^2$. Soit $\delta=\operatorname{dist}(x,F)$, $y_n\in F$ avec $\|x-y_n\|\to\delta$. Appliquée à $x-y_n$ et $x-y_m$ : $\|y_n-y_m\|^2=2\|x-y_n\|^2+2\|x-y_m\|^2-4\|x-\frac{y_n+y_m}2\|^2\le2\|x-y_n\|^2+2\|x-y_m\|^2-4\delta^2\to0$. La suite est de Cauchy, converge vers $\pi(x)\in F$ (fermé). **Orthogonalité** : pour $z\in F$, $\|x-\pi(x)+\lambda z\|^2=\delta^2+2\lambda\langle x-\pi(x),z\rangle+\lambda^2\|z\|^2\ge\delta^2$ pour tout $\lambda$, donc le terme linéaire est nul. (Le $\lambda^2$ manque dans le polycopié.) **Unicité** : Pythagore.
:::
:::preuve Bases hilbertiennes (5.30) et auto-dualité (5.31)
**Bessel** : $\|x-\sum_{i\le n}\langle x,e_i\rangle e_i\|^2=\|x\|^2-\sum_{i\le n}\langle x,e_i\rangle^2\ge0$ ; la série converge donc, et $y=\sum\langle x,e_i\rangle e_i$ est la projection de $x$ sur l'adhérence de $\operatorname{Vect}(e_i)$. Si la famille est totale, $y=x$, et Pythagore donne Parseval. Existence : Gram-Schmidt sur une suite dense (cas séparable), Zorn sinon. **Riesz** : $\Lambda\ne0$, $H=\ker\Lambda$ fermé, $e\in H^\perp$ unitaire. Pour tout $y$, $\Lambda(y)e-\Lambda(e)y\in H$ ; produit scalaire avec $e$ : $\Lambda(y)=\Lambda(e)\langle e,y\rangle$, donc $x_\Lambda=\Lambda(e)e$. Norme : Cauchy-Schwarz, égalité en $y=x_\Lambda$.
:::

## @10
### Démonstrations
:::preuve Minkowski par convexité
Si $\lambda=\frac{\|f\|_p}{\|f\|_p+\|g\|_p}$, $F=\frac{|f|}{\|f\|_p}$, $G=\frac{|g|}{\|g\|_p}$ : $\Big(\frac{|f+g|}{\|f\|_p+\|g\|_p}\Big)^p\le(\lambda F+(1-\lambda)G)^p\le\lambda F^p+(1-\lambda)G^p$. On intègre : le membre de droite vaut 1.
:::
:::preuve Riesz-Fischer (6.6)
$(f_n)$ de Cauchy dans $L^p$ ; on extrait $n_k$ avec $\|f_{n_{k+1}}-f_{n_k}\|_p\le4^{-k}$. $A_k=\{|f_{n_{k+1}}-f_{n_k}|>2^{-k}\}$ : Markov donne $\mu(A_k)\le2^{kp}4^{-kp}=2^{-kp}$, sommable ; presque tout $x$ n'est que dans un nombre fini de $A_k$, donc $f_{n_k}(x)$ converge, vers $f(x)$. $g=|f_{n_1}|+\sum_k|f_{n_{k+1}}-f_{n_k}|\in L^p$ (Minkowski et monotone) domine : $\|f_{n_k}-f\|_p\to0$. Une suite de Cauchy ayant une valeur d'adhérence converge. Pour $p=\infty$ : convergence uniforme hors d'un négligeable. **Corollaire** : la convergence dans $L^p$ entraîne la convergence p.p. **d'une sous-suite**.
:::
:::preuve Inclusions (6.7 à 6.9)
**Mesure finie** : $x^p\le x^q+1$ pour $x\ge0$, $p\le q$, donc $\int|f|^p\le\int|f|^q+\mu(E)$. (Pour $q=\infty$, la borne est $\|f\|_\infty^p\mu(E)$ : l'exposant $p$ manque dans le polycopié.) **Comptage** : $\sum|x_n|^p<\infty$ force $|x_n|\le1$ à partir d'un rang, donc $|x_n|^q\le|x_n|^p$. **Interpolation** : $L^p\cap L^q\subset L^r$ pour $p\le r\le q$, car $|f|^r\le|f|^p+|f|^q$ ; plus précisément $\|f\|_r\le\|f\|_p^{\theta}\|f\|_q^{1-\theta}$ avec $\frac1r=\frac\theta p+\frac{1-\theta}q$.
:::
:::preuve Densités ($p<\infty$) et adhérence dans $L^\infty$
**Étagées** : $f\ge0$, $f_n\uparrow f$ étagées, $|f-f_n|^p\le f^p$ : dominée. **$C_c$** : il suffit d'approcher $\mathbf 1_A$, $\mu(A)<\infty$ : régularité $K\subset A\subset U$, $\mu(U\setminus K)<\varepsilon$, Urysohn $\mathbf 1_K\le\varphi\le\mathbf 1_U$, $\|\varphi-\mathbf 1_A\|_p^p\le\varepsilon$. **$L^\infty$** (6.14-6.15) : une limite uniforme de fonctions de $C_c$ est continue et tend vers 0 à l'infini ; réciproquement $f\in C_0$ est approchée par $f\chi_n$.
:::
:::preuve L'isométrie $L^p\to(L^q)^*$ (6.17) et l'espérance conditionnelle (6.21)
**6.17.** $\Lambda_f(g)=\int fg$, $|\Lambda_f(g)|\le\|f\|_p\|g\|_q$ ; égalité avec $g=\operatorname{sgn}(f)|f|^{p-1}$ : $\|g\|_q=\|f\|_p^{p-1}$ et $\int fg=\|f\|_p^p$. **6.21.** $L^2(\mathcal F)$ est complet donc fermé dans $L^2(\mathcal E)$ ; $g=\pi(f)$ vérifie $\langle f-g,h\rangle=0$. Unicité : $h=\mathbf 1_{\{g>g'\}}$. Pour $f\in L^1$ : approcher par $\min(f,n)$, la positivité ($\int_{\{g<0\}}g=\int_{\{g<0\}}f\ge0$) donne une suite croissante.
:::
:::exemple Fourier : une base hilbertienne
Sur $L^2([0,1],\mathbb C)$, $\chi_k(t)=e^{2i\pi kt}$ est orthonormée, et totale car les polynômes trigonométriques sont denses dans les continues périodiques (Stone-Weierstrass), elles-mêmes denses dans $L^2$. D'où $f=\sum_k\hat f(k)\chi_k$ et Parseval $\int|f|^2=\sum|\hat f(k)|^2$.
:::

## @11
### Démonstrations
:::preuve $|\mu|$ est une mesure finie (7.4)
**$\sigma$-additive** : raffiner les partitions. **Finie** : lemme — si $|\mu|(A)=\infty$, il existe $A=B\sqcup C$ avec $|\mu(B)|>1$ et $|\mu|(C)=\infty$ (choisir une partition avec $\sum|\mu(A_n)|>2(1+|\mu(A)|)$, regrouper les termes de même signe : $|\mu(B)|>1+|\mu(A)|$, donc $|\mu(C)|>1$ aussi ; l'un des deux est de variation infinie). On itère : des $B_n$ disjoints avec $|\mu(B_n)|>1$, donc la série $\sum\mu(B_n)$ ne converge pas : absurde. **Banach (7.5)** : une suite de Cauchy pour $\|\cdot\|_{VT}$ converge uniformément en $A$ ; la limite est $\sigma$-additive.
:::
:::preuve Décomposition de Hahn (7.6)
Posons $\mu^\pm=\frac12(|\mu|\pm\mu)\ge0$ ; on montre qu'elles sont étrangères. $\mu^+(E)=\sup_A\mu(A)$ (partitions à deux morceaux). Choisir $A_k$ avec $\mu(A_k)\ge\mu^+(E)-2^{-k}$ : alors $\mu^+(A_k^c)\le2^{-k}$ et $\mu^-(A_k)\le2^{-k}$. $B=\limsup A_k=\bigcap_n\bigcup_{k\ge n}A_k$ : $\mu^-(B)\le\sum_{k\ge n}2^{-k}\to0$ ; $\mu^+(B^c)=\mu^+(\liminf A_k^c)\le\liminf\mu^+(A_k^c)=0$ (Fatou).
:::
:::preuve Lebesgue et Radon-Nikodym (8.1), preuve de von Neumann
$\mu,\nu$ finies positives. $\Lambda(f)=\int f\,d\nu$ est continue sur $L^2(\mu+\nu)$ (Cauchy-Schwarz) : par Riesz, il existe $g$ avec
$$\int f\,d\nu=\int fg\,d(\mu+\nu)\quad\text{soit}\quad\int f(1-g)\,d\nu=\int fg\,d\mu.$$
En prenant $f=\mathbf 1_{\{g<0\}}$ puis $\mathbf 1_{\{g>1\}}$ : $0\le g\le1$ p.p. Soit $B=\{g=1\}$ ; $f=\mathbf 1_B$ donne $\mu(B)=0$. Donc $\nu_1=\nu(\cdot\cap B)\perp\mu$. Sur $B^c$, prendre $f=\mathbf 1_{A\cap B^c}(1+g+\dots+g^n)$ : $\int_{A\cap B^c}(1-g^{n+1})d\nu=\int_{A\cap B^c}g(1+\dots+g^n)d\mu$, et la convergence monotone donne $\nu(A\cap B^c)=\int_A\frac g{1-g}\,d\mu$. La densité est $\frac g{1-g}\mathbf 1_{B^c}$. **Unicité** : une mesure à la fois $\ll\mu$ et $\perp\mu$ est nulle. Cas $\sigma$-fini : on découpe ; cas signé : $\nu^+$ et $\nu^-$.
:::
:::theo Décomposition sur $\mathbb R$ (8.1 du cours, section Lebesgue)
Toute mesure finie sur les compacts s'écrit $\nu=\underbrace{f\,d\lambda}_{\text{abs. continue}}+\underbrace{\sum a_x\delta_x}_{\text{atomique}}+\underbrace{\nu_s}_{\text{singulière sans atome}}$ ; sa fonction de répartition est dérivable $\lambda$-p.p., de dérivée $f$. La loi de Cantor est purement du troisième type.
:::
:::preuve $(L^q)^*=L^p$ (9.1)
$\mu$ finie, $\Lambda\in(L^q)^*$, $q<\infty$ : $\nu(A)=\Lambda(\mathbf 1_A)$ est $\sigma$-additive ($\|\mathbf 1_{\bigsqcup_{k>n}A_k}\|_q\to0$, c'est là que $q<\infty$ sert) et $\nu\ll\mu$. Radon-Nikodym : $\nu=f\,d\mu$ ; donc $\Lambda(g)=\int fg$ pour $g$ étagée. En testant $g=\operatorname{sgn}(f)|f|^{p-1}\mathbf 1_{\{|f|\le n\}}$ on obtient $\|f\mathbf 1_{\{|f|\le n\}}\|_p\le\|\Lambda\|$, puis monotone. Densité des étagées : égalité partout. **Réflexivité** : appliquer deux fois.
:::
:::preuve Riesz signé (9.4) et dual de $L^\infty$ (9.7)
**9.4.** $\Lambda\in C_0(E)^*$ ; pour $f\ge0$, $\Phi(f)=\sup\{\Lambda(g):|g|\le f\}$ est additive, positive, finie : elle se représente par une mesure positive $\rho$ ; $\Lambda$ est continue pour la norme $L^1(\rho)$, donc $\Lambda(f)=\int fh\,d\rho$ avec $|h|\le1$, et $\mu=h\,d\rho$. **9.7.** $\nu(A)=\Lambda(\mathbf 1_A)$ est seulement **finiment** additive : $\mathbf 1_{\bigsqcup_{k>n}A_k}$ ne tend pas vers 0 dans $L^\infty$. On obtient $\mathrm{ba}(\mu)$. (Coquille : le polycopié y dit « $\mathrm{ba}$ et $L^\infty$ » ; c'est $\mathrm{ba}$ et le **dual** de $L^\infty$.)
:::
`);
