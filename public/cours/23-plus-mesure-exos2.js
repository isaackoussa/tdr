PLUS('mesure', String.raw`
## Exercices 61 à 85 corrigés | p. 53-105
:::exo Ex. 61. Algèbre stable par unions dénombrables disjointes
---
$\bigcup A_n=\bigsqcup\big(A_n\setminus\bigcup_{k<n}A_k\big)$, et chaque terme est dans l'algèbre (opérations finies).
:::
:::exo Ex. 62. Construction métrique $\mu_0=\lim\mu_\delta$
---
$\mu_\delta$ est une mesure extérieure (recouvrements à $\eta2^{-n}$ près) et croît quand $\delta\downarrow0$ ; un sup croissant de mesures extérieures en est une. Si $\operatorname{dist}(A,B)>\delta$, aucun $A_n$ de diamètre $<\delta$ ne touche les deux : tout recouvrement de $A\cup B$ se scinde, $\mu_\delta(A\cup B)\ge\mu_\delta(A)+\mu_\delta(B)$. Donc $\mu_0$ est additive sur les ensembles éloignés, et le théorème 3.4 donne $\mathcal B(E)\subset\mathcal M(\mu_0)$.
:::
:::exo Ex. 63. Distance et adhérences dans un compact
Dans l'énoncé, lire $\overline A\cap\overline B=\emptyset$.
---
$\overline A,\overline B$ compacts disjoints : $(a,b)\mapsto d(a,b)$ est continue sur $\overline A\times\overline B$ compact, atteint son minimum, non nul. Réciproque : un point commun donne distance 0. Non compact : dans $\mathbb R$, $A=\{2,3,\dots\}$ et $B=\{n+\frac1n:n\ge2\}$ sont fermés, disjoints, à distance 0.
:::
:::exo Ex. 64. Lebesgue par le théorème d'extension
---
**c)** Une union finie disjointe dans $I$ : ordonner les intervalles, la somme des longueurs est $\le\rho(I)$ ; $N\to\infty$. **d)** $J=[c,d]$ compact couvert par des ouverts $J_n$ : sous-recouvrement fini, chaîne qui se chevauche de $c$ à $d$, somme $\ge d-c$. Pour $I$ quelconque : le rétrécir de $\varepsilon$ en un fermé $J$, agrandir $I_n$ de $\varepsilon2^{-n}$ ; $\rho(I)-\varepsilon\le\sum\rho(I_n)+\varepsilon$. **e)** Deux écritures de $A$ se raffinent mutuellement. **f)** Carathéodory prolonge $\rho$ à $\sigma(\mathcal A)=\mathcal B(\mathbb R)$.
:::
:::exo Ex. 65. Borélien invariant par les translations rationnelles
---
$\mu=\lambda(A\cap\cdot)$ est invariante par translation rationnelle ; $t\mapsto\mu([a+t,b+t])$ est continue, donc invariante par **toute** translation : $\mu=c\lambda$. Évalué en $A^c$ : $0=c\,\lambda(A^c)$. Soit $\lambda(A^c)=0$, soit $c=0$ et $\lambda(A)=\mu(\mathbb R)=0$.
:::
:::exo Ex. 66. Sauts d'une fonction croissante
---
**a)** $F$ est à valeurs dans un $[0,M]$ : au plus $nM$ sauts de taille $>\frac1n$. **b)** $\tilde F$ est croissante, continue à droite, et a les mêmes limites à droite et à gauche. **c)** La somme d'un nombre fini de sauts avant $x$ est $\le F(x)$. **d)** $F-G$ : pour $x<y$, $F(y)-F(x)\ge$ somme des sauts dans $]x,y]$, donc croissante ; ses sauts sont nuls et elle est continue à droite : continue. **e)** Les deux mesures ont la même fonction de répartition $(F-G)+G$ : unicité.
:::
:::exo Ex. 67. Mesure de Lebesgue-Stieltjes, première construction
---
**a)** Copier Lebesgue avec $F(b)-F(a)$ ; on peut couper les intervalles sans changer la somme car $F$ est continue, d'où la condition $b_n-a_n<\varepsilon$ ; elle donne l'additivité sur les ensembles éloignés. $\mu([a,b])=F(b)-F(a)$ par compacité. **b)** $G$ : mesure $\sum m(x)\delta_x$ ; $\tilde F=F-G$ continue : point a. **c)** $\mu=\tilde\mu+m$.
:::
:::exo Ex. 68. Deuxième construction : image de $\lambda$
---
**a)** Les $F^{-1}(\{x\})$ sont des intervalles disjoints ; ceux qui ont plus d'un point sont d'intérieur non vide, donc en nombre dénombrable. **b)** $\mathcal C$ contient les intervalles (l'image est un intervalle privé d'une réunion dénombrable d'intervalles, les sauts) ; stable par réunion dénombrable ; par complémentaire car $F(A)\cap F(A^c)$ est dénombrable d'après a). **c)** Les images d'ensembles disjoints ne se coupent qu'en un ensemble dénombrable : $\sigma$-additivité ; $\mu(]-\infty,t])=\lambda(F(]-\infty,t]))=F(t)$. **d)** Même preuve en ajoutant les intervalles de saut. **e)** On perd les sauts : $\nu$ est la mesure de $F-G$, la partie **sans atome**.
:::
:::exo Ex. 69. $F_\mu\in C^1\Rightarrow$ densité $F'_\mu$
---
$\mu(]a,b])=F(b)-F(a)=\int_a^bF'$ ; les intervalles engendrent et sont stables par $\cap$ : unicité.
:::
:::exo Ex. 70. Cantor, complet
---
**a)** $\lambda(C_n)=(\frac23)^n\to0$. **c)** $F_{n+1}(x)=\frac12F_n(3x)$ sur $[0,\frac13]$, $\frac12$ sur $[\frac13,\frac23]$, $\frac12+\frac12F_n(3x-2)$ ensuite. Donc $\|F_{n+1}-F_n\|_\infty\le\frac12\|F_n-F_{n-1}\|_\infty$ : convergence **uniforme**. **d)** Limite uniforme de continues croissantes. **e)** $F$ est constante sur chaque intervalle retiré : $\mu(C_\infty^c)=0$ ; continue donc sans atome. **f)** Non : $\mu(C_\infty)=1$ mais $\int_{C_\infty}f\,d\lambda=0$.
:::
:::exo Ex. 71. Mesures infinies, finies sur les segments
---
**a)** $F(x)=\mu(]0,x])$ si $x\ge0$, $-\mu(]x,0])$ sinon. **b)** Unique à une constante près ; unique si $F(0)=0$. **c)** Croissante, continue à droite, limites à gauche ; pas de limite finie imposée. **d)** Oui : construire sur chaque $]n,n+1]$ et recoller ; unicité car les $]a,b]$ engendrent et $]-n,n]\uparrow\mathbb R$.
:::
:::exo Ex. 72. $\mathcal B(\mathbb R)\ne\overline{\mathcal B(\mathbb R)}$
---
$N=\{x\in C_\infty:F(x)\in E\}\subset C_\infty$ est négligeable, donc dans la tribu complétée. $F(C_\infty)=[0,1]$ donc $F(N)=E$. Si $N$ était borélien, l'exercice 68-b donnerait $E$ borélien : absurde.
:::
:::exo Ex. 73. Critère de Lebesgue
Pour $f$ bornée sur un segment.
---
$f_n^-$ et $f_n^+$ : inf et sup de $f$ sur chaque intervalle dyadique de rang $n$. $f_n^-\uparrow\underline f$, $f_n^+\downarrow\overline f$, et hors des dyadiques (négligeables) $\underline f(x)=\overline f(x)\iff f$ continue en $x$. Dominée : $\int f_n^\pm\to\int\overline f,\int\underline f$. Riemann-intégrable $\iff\int(\overline f-\underline f)=0\iff\overline f=\underline f$ p.p. $\iff f$ continue p.p.
:::
:::exo Ex. 74 à 76. Régularité
---
**74** : le plus petit fermé contenant $A$ est $\overline A$ : l'inf vaut $\mu(\overline A)$ ; le plus grand ouvert inclus est $\mathring A$. **75** : a) les composantes connexes sont des intervalles ouverts, chacune contient un rationnel ; b) la définition de $\lambda$ par recouvrements d'ouverts **est** la régularité extérieure ; c) $U\supset]-M,M[\,\setminus A$ avec petit excès, $K=[-M+\eta,M-\eta]\setminus U$ ; d) $M\to\infty$ ; e) identique avec $F(b)-F(a)$. **76** : chaque $x\in K$ a un voisinage ouvert précompact, un nombre fini suffit. Métrique : $\operatorname{dist}(\cdot,U^c)$ est continue et $>0$ sur $K$, donc minorée par $\varepsilon$.
:::
:::exo Ex. 78. $\mu(A)=|A\cap\mathbb Q|$
---
a) $\mathbb R=(\mathbb R\setminus\mathbb Q)\cup\bigcup_q\{q\}$, mesures 0 et 1. b) Un ouvert non vide contient une infinité de rationnels. c) $A=\{\sqrt2\}$ : $\mu(A)=0$ mais tout ouvert le contenant a mesure $\infty$. d) $E=\bigsqcup E_n$, $\mu(E_n)<\infty$ : $\mu_{|E_n}$ est régulière (3.30), choisir $K_n\subset A\cap E_n$ à $\varepsilon2^{-n}$ près, et prendre $K_1\cup\dots\cup K_N$.
:::
:::exo Ex. 79 à 81. Diamètres, $\mathcal H^0$, $\mathcal H^1$
---
**79** : $d(y,z)\le2r$ ; strict pour la distance discrète, $r=\frac34$. $A\subset\overline B(a,\operatorname{diam}A)$ pour $a\in A$ ; triangle équilatéral de côté 1 : il faut un rayon $\frac1{\sqrt3}>\frac12$. **80** : $\operatorname{diam}^0=1$ : on compte les morceaux ; $n$ points exigent $n$ morceaux dès que $\varepsilon$ est petit. **81** : $\mathcal H^1=\lambda$ ; pour $A\subset\mathbb R\times\{0\}$, la longueur de sa projection (l'injection est une isométrie).
:::
:::exo Ex. 82. Dimension de Cantor, rigoureusement
$d=\frac{\ln2}{\ln3}$, donc $3^d=2$.
---
**b)** $2^n$ intervalles de longueur $3^{-n}$ : $\sum\operatorname{diam}^d=2^n3^{-nd}=1$. (Avec le facteur $\frac{\alpha(d)}{2^d}\approx1{,}03$ de la définition, on obtient $\le1{,}03$ ; le « $\le1$ » de l'énoncé vaut sans ce facteur.) **c)** $|F_n(x)-F_n(y)|\le|x-y|^d$ par récurrence. Même tiers : $\frac12|3x-3y|^d=|x-y|^d$. Tiers extrêmes, $x=\frac v3$, $y=\frac{u+2}3$ : l'écart vaut $\frac12[F_n(u)+1-F_n(v)]\le\frac12[u^d+(1-v)^d]\le\big(\frac s2\big)^d$, $s=u+1-v\le2$ (concavité), et $y-x=\frac{s+1}3\ge\frac s2$. Tiers central : $F$ y est constante, on se ramène au bord. **d)** $1=\mu(C_\infty)\le\sum\mu(B_k)\le\sum\operatorname{diam}(B_k)^d$ pour tout recouvrement : $\mathcal H^d(C_\infty)>0$. **e)** $\mathcal H^d_{|C_\infty}$ est finie, non nulle, et donne la même masse aux $2^n$ morceaux de rang $n$ (translatés) : c'est $c\,\mu$ sur une famille qui engendre.
:::
:::exo Ex. 83. Flocon de Koch
---
Les paramétrages $\gamma_n$ vérifient $\|\gamma_{n+1}-\gamma_n\|_\infty\le C3^{-n}$ : limite uniforme, continue. Longueur $(\frac43)^n\to\infty$, et tout sous-arc contient une copie réduite : non rectifiable. **Dimension** $\frac{\ln4}{\ln3}\approx1{,}26$ : $4^n$ morceaux de diamètre $3^{-n}$ donnent la majoration ; la mesure donnant $4^{-n}$ à chaque morceau vérifie $\mu(B(x,3^{-n}))\le C4^{-n}$ (une boule ne rencontre qu'un nombre borné de morceaux de son échelle), d'où $\sum\operatorname{diam}^d\ge\frac1{C'}$.
:::
:::exo Ex. 84. Les secteurs engendrent $\mathcal B(\mathbb R^d)$
---
$\mathcal C$ : les $\{rz:a<r<b,\ z\in A\}$, $A$ borélien de $S^{d-1}$. $(r,z)\mapsto rz$ est un homéomorphisme de $]0,\infty[\times S^{d-1}$ sur $\mathbb R^d\setminus\{0\}$ : autour de $x\ne0$, un petit secteur contient une boule et reste dans $U$. Un ouvert privé de 0 est réunion dénombrable de tels secteurs (centres et tailles dans un dense dénombrable) ; $\{0\}$ est le complémentaire du secteur total.
:::
:::exo Ex. 85. Dimension de Minkowski
---
**a)** Sous-espace de dimension $d$ (4.18) : il faut de l'ordre de $\varepsilon^{-d}$ boules (comparer les volumes $d$-dimensionnels). **4.19** : un ensemble maximal de points à distance $\ge2\varepsilon$ donne des boules disjointes dans $A+B(0,\varepsilon)$ : $N_{2\varepsilon}(A)v_n\varepsilon^n\le\lambda_n(A+B(0,\varepsilon))\le N_\varepsilon(A)v_n(2\varepsilon)^n$ ; prendre les logarithmes. **Comparaison** : $N_\varepsilon\approx\varepsilon^{-d}$ donne $\sum\operatorname{diam}^{d'}\le C\varepsilon^{d'-d}\to0$ : $\dim_H\le\dim_M$. **b)** $N_\varepsilon(A)=N_\varepsilon(\overline A)$ à une constante près, et $\overline{\mathbb Q\cap[0,1]}=[0,1]$. **c)** Un Cantor où l'on retire le tiers central pendant de très longues plages d'étapes, puis le milieu très fin pendant de bien plus longues, en alternant : $\frac{\ln N_\varepsilon}{-\ln\varepsilon}$ oscille entre deux valeurs.
:::

## Exercices 87 à 112 corrigés | p. 112-144
L'exercice 86 est l'exercice 16.
:::exo Ex. 87 et 88. Séries absolument convergentes ; point fixe de Banach
---
**87** : $\|S_N-S_M\|\le\sum_{M<n\le N}\|x_n\|$ : Cauchy. Le reste est la limite de $S_K-S_N$, de norme $\le\sum_{n>N}\|x_n\|$. **88** : $\|x_{n+1}-x_n\|\le c^n\|x_1-x_0\|$, sommable : $x_n\to x$, et $f$ continue donne $f(x)=x$. Unicité : $\|x-y\|\le c\|x-y\|$. Vitesse : $\|x_n-x\|\le\frac{c^n}{1-c}\|x_1-x_0\|$.
:::
:::exo Ex. 89 et 90. Normes équivalentes ; dimension finie complète
---
**89** : ⇒ chaque boule d'une norme contient une boule de l'autre ; ⇐ $\{|||x|||<1\}$ contient $\{\|x\|<\delta\}$, homogénéité. Cauchy et convergence se transportent. **90** : base $(e_i)$ ; $N\le C\|\cdot\|_\infty$ par l'inégalité triangulaire ; $N$ est donc continue sur la sphère unité de $\|\cdot\|_\infty$, **compacte**, son minimum $c>0$ donne $c\|\cdot\|_\infty\le N$. Complétude coordonnée par coordonnée.
:::
:::exo Ex. 91 à 93. Formes linéaires et sous-espaces
---
**91** : $|\Lambda(x)-\Lambda(y)|\le\|\Lambda\|\|x-y\|$. **92** : $|\sum x_i\Lambda(e_i)|\le(\sum|\Lambda(e_i)|)\|x\|_\infty$. **93** : a) $F$ est complet, donc fermé ; b) $\ell_c\subset\ell^2$, dense et différent ; c) un sous-espace ouvert contient une boule $B(0,r)$, donc tout $E$.
:::
:::exo Ex. 94 et 95. Formes discontinues
---
**94** : norme $\|\cdot\|_\infty$ sur $\ell_c$ ; $x\mapsto x_1$ est continue ; $x\mapsto\sum x_n$ ne l'est pas ($x=(1,\dots,1,0\dots)$ : norme 1, image $n$). **95** : b) $f_n(x)=\frac1n\sin(n^2x)$ : $\|f_n\|_\infty\to0$, $f_n'(0)=n$. c) $|f'(0)|\le|||f|||$. d) Si $(f_n)$ est de Cauchy, $f_n\to f$ et $f_n'\to g$ uniformément ; $f_n(x)=f_n(0)+\int_0^xf_n'$ passe à la limite : $f'=g$.
:::
:::exo Ex. 96 et 97. Réflexivité ; dual d'un sous-espace
---
**96** : a) $\dim E^{**}=\dim E^*=\dim E$ et $E\to E^{**}$ est injective. b) $E=E^{**}$ est un dual, donc complet. **97** : la restriction $E^*\to F^*$ est continue et (Hahn-Banach) surjective, mais elle n'est **injective que si $F$ est dense** : l'affirmation « $E^*$ sous-espace de $F^*$ » est abusive sinon (si $F=\{0\}$, $F^*=\{0\}$). Si $F$ est dense : injective et isométrique, $E^*=F^*$ (prolongement de l'ex. 16).
:::
:::exo Ex. 98. Interprétation géométrique de Hahn-Banach
---
**a)** $\|\lambda x+(1-\lambda)y\|<1$. **b)** Sur $\operatorname{Vect}(x,y)$ soit $\ell$ de norme 1 avec $\ell(x)=1$. La bonne direction est $v=y-\ell(y)x\in\ker\ell$ (avec $\lambda=-\ell(y)$, direction $y+\lambda x$ ; l'énoncé écrit $\lambda y+x$, qui ne convient que si $\ell(y)\ne0$). Alors $\|x+tv\|\ge\ell(x+tv)=1$ : la droite évite la boule ouverte. **c)** Norme euclidienne : la tangente au cercle, unique. Norme sup : en un coin, toute une famille ; sur un côté, le côté lui-même. **d)** $\Lambda\in E^*$, $\|\Lambda\|=1=\Lambda(x)$, $H=\ker\Lambda$ : $x+H=\{\Lambda=1\}$.
:::
:::exo Ex. 99 et 100. Bases algébriques
---
**99** : a) $f$ hors de l'espace engendré. b) Les familles libres contenant la famille donnée, ordonnées par inclusion ; une chaîne a sa réunion pour majorant (une relation n'utilise qu'un nombre fini de vecteurs, tous dans un même maillon). Maximale ⇒ génératrice. **100** : a) sinon dimension finie. b) Unicité de l'écriture. c) Choisir une suite $(e_n)$ de vecteurs distincts de la base, $a_{e_n}=n\|e_n\|$, 0 ailleurs : $u(e_n/\|e_n\|)=n$.
:::
:::exo Ex. 101. $\Lambda_N\to\Lambda_\infty$ faible-* mais pas en norme
---
$|\Lambda_N(x)|\le\|x\|_1$, égalité en $e_1$ : normes 1. Pour $x\in\ell_c$, $\Lambda_N(x)=\Lambda_\infty(x)$ dès que $N$ dépasse le support. $(\Lambda_\infty-\Lambda_N)(e_{N+1})=1$ : norme 1.
:::
:::exo Ex. 102, 103, 105, 112. $\ell^2$
---
Complet : limite coordonnée par coordonnée, puis Fatou pour la série. Base orthonormée : $x^{(k)}=(0,\dots,1,\dots)$ (totale car $\langle u,x^{(k)}\rangle=u_k=0\ \forall k\Rightarrow u=0$) ; $u=\sum u_kx^{(k)}$. **103** : non isomorphes ; en dimension finie, ssi même dimension. **105** : sesquilinéarité par linéarité de la somme ; complétude identique avec $|\cdot|$ complexe.
:::
:::exo Ex. 104. $(A^\perp)^\perp$
---
C'est $\overline{\operatorname{Vect}(A)}=:F$. ⊃ : fermé contenant $A$. ⊂ : si $x\in A^{\perp\perp}$, $x-\pi_F(x)\in F^\perp=A^\perp$, et il est aussi dans $A^{\perp\perp}$ : orthogonal à lui-même, donc nul.
:::
:::exo Ex. 106. $p\mapsto\|f\|_p$
---
$|f|^r\le|f|^p+|f|^q$ : intervalle. Continuité : sur $\{|f|\le1\}$ et $\{|f|>1\}$, $|f|^r$ est monotone en $r$ : convergence monotone ou dominée, y compris aux bornes de $I$. En $\infty$ : $\|f\|_r\ge\mu(|f|>c)^{1/r}c\to c$ pour $c<\|f\|_\infty$, et $\|f\|_r\le\|f\|_p^{p/r}\|f\|_\infty^{1-p/r}\to\|f\|_\infty$.
:::
:::exo Ex. 107. $f\in L^q\iff q\in[p,p']$ (resp. $]p,p'[$)
---
**Fermé** : $x^{-1/p'}|\ln x|^{-2/p'}$ sur $]0,\frac12[$ (dans $L^q$ ssi $q\le p'$) plus $x^{-1/p}(\ln x)^{-2/p}$ sur $]2,\infty[$ (ssi $q\ge p$). **Ouvert** : les mêmes sans les logarithmes. $p'=\infty$ : fermé, garder seulement la seconde partie (bornée) ; ouvert, remplacer la première par $|\ln x|$.
:::
:::exo Ex. 108. Convergence dans $L^p$ contre $L^q$
---
$f_n=n^{1/q}\mathbf 1_{[0,1/n]}$ : $\|f_n\|_q=1$, $\|f_n\|_p=n^{1/q-1/p}\to0$ ($q=\infty$ : $f_n=\mathbf 1_{[0,1/n]}$). $g_n=n^{-1/p}\mathbf 1_{[0,n]}$ : $\|g_n\|_p=1$, $\|g_n\|_q\to0$. Enfin $\|h\|_r\le\|h\|_p^\theta\|h\|_q^{1-\theta}$.
:::
:::exo Ex. 109. $\|f\|_p\le\|f\|_q\,\mu(E)^{1/p-1/q}$
---
Hölder avec $|f|^p\cdot1$ et l'exposant $\frac qp$ : $\int|f|^p\le\big(\int|f|^q\big)^{p/q}\mu(E)^{1-p/q}$ ; racine $p$-ième.
:::
:::exo Ex. 110. $C_c^\infty$ dense dans $C_0$
---
a) $h(x)=c\,e^{-1/(1-|x|^2)}\mathbf 1_{|x|<1}$. b) $f*h=h*f$ : exercice 60 ; support dans $\operatorname{supp}f+\overline B(0,1)$. c) $|f*h_n(x)-f(x)|\le\int|f(x-t)-f(x)|h_n(t)dt\le\sup_{|t|\le1/n}|f(x-t)-f(x)|\to0$ (uniforme continuité). d) Densité en deux temps. Pour l'exercice 95 : $\sqrt{x^2+\frac1n}\to|x|$ uniformément, donc $C^1$ n'est pas complet pour $\|\cdot\|_\infty$.
:::
:::exo Ex. 111. Adhérence des étagées dans $L^\infty$
---
Étagées = combinaisons d'indicatrices d'ensembles de **mesure finie**. Si $\|f-g\|_\infty<\varepsilon$, $\{|f|>\varepsilon\}\subset\{g\ne0\}$, de mesure finie. Réciproquement, pour $f\ge0$ bornée, $2^{-n}\lfloor2^nf\rfloor$ ne prend qu'un nombre fini de valeurs, son support $\{f\ge2^{-n}\}$ est de mesure finie, erreur $\le2^{-n}$. $\mu(E)=\infty$ : la constante 1 n'est pas approchable.
:::

## Exercices 113 à 130 corrigés | p. 150-168
:::exo Ex. 113. $\nu=f\,d\mu$
---
Dominée : $\sigma$-additive. $|\nu(A)|\le\int_A|f|$ ; avec $A\cap\{f\ge0\}$ et $A\cap\{f<0\}$ on obtient l'égalité : $|\nu|=|f|d\mu$, $\|\nu\|_{VT}=\|f\|_1$. $\nu^\pm=f^\pm d\mu$, $B=\{f\ge0\}$.
:::
:::exo Ex. 114 et 115. Règles pour les mesures signées
---
$A\cup B=A\sqcup(B\setminus A)$, et tout est **fini** : on soustrait librement. Continuité décroissante : $A_0\setminus A_n$ croissante, sans condition supplémentaire puisque $|\mu|$ est finie.
:::
:::exo Ex. 116. Intégrer contre une mesure signée
---
$\mu^\pm\le|\mu|$ donne a) ; b) $|\int f\,d\mu|\le\int|f|d\mu^++\int|f|d\mu^-=\int|f|\,d|\mu|$ ; c) linéarité pour $\mu^+$ et $\mu^-$, et pour la seconde : $\alpha\mu+\beta\mu'=(\dots)^+-(\dots)^-$, réarranger les termes positifs (l'énoncé a oublié le prime : $\beta\int f\,d\mu'$) ; d) $\mu^\pm=h^\pm d\nu$ et ex. 54.
:::
:::exo Ex. 117. Étrangères : énoncé à corriger
---
L'énoncé « $|\nu|\perp\mu$ ssi $\mu(A)>0\Rightarrow\nu(A)=0$ » est **faux** : $\mu=\lambda$ sur $[0,1]$, $\nu=\delta_0$ sont étrangères, mais $A=[0,1]$ donne $\nu(A)=1$. La bonne caractérisation : $|\nu|\perp\mu$ ssi il existe $B$ avec $\mu(B)=0$ et $\nu(A)=0$ pour **tout** $A\subset B^c$. Preuve : $|\nu|(B^c)=\sup\sum|\nu(A_n)|$ sur les partitions de $B^c$, nul ssi tous les $\nu(A)$ le sont.
:::
:::exo Ex. 118. Deux morceaux suffisent
---
Hahn : $B_1=A\cap B$, $B_2=A\cap B^c$ ; $|\mu(B_1)|+|\mu(B_2)|=\mu^+(A)+\mu^-(A)=|\mu|(A)$ : le sup est atteint.
:::
:::exo Ex. 119. Variation totale et couplage
---
**a)** $(\mu-\nu)(E)=0$ donc $(\mu-\nu)^+(E)=(\mu-\nu)^-(E)=\sup_A(\mu(A)-\nu(A))$ ; la norme est la somme. **b)** $P(X\ne Y)\ge P(X\in A,Y\notin A)\ge\mu(A)-\nu(A)$ ; sup sur $A$. **c)** $\tau=\mu-(\mu-\nu)^+\ge0$, masse $1-\frac12\|\mu-\nu\|_{VT}$. **d)** $P=\tilde\tau+\rho$, avec $\rho=\frac{(\mu-\nu)^+\otimes(\mu-\nu)^-}{(\mu-\nu)^+(E)}$ : marginales $\tau+(\mu-\nu)^+=\mu$ et $\nu$ ; $P(X=Y)\ge\tau(E)$. D'où $\min P(X\ne Y)=\frac12\|\mu-\nu\|_{VT}$.
:::
:::exo Ex. 120. $\nu\ll\mu$ et $\nu\perp\mu\Rightarrow\nu=0$
---
$B$ avec $\mu(B)=0$ et $|\nu|(B^c)=0$ ; $\nu\ll\mu$ donne $\nu(A)=0$ pour $A\subset B$. Donc $\nu(A)=\nu(A\cap B)+\nu(A\cap B^c)=0$.
:::
:::exo Ex. 121. Hahn par Radon-Nikodym
---
a) $\nu\ll|\nu|$. b) $A=\{f>1+\varepsilon\}$ : $\nu(A)\ge(1+\varepsilon)|\nu|(A)$ force $|\nu|(A)=0$. c) Sur $A=\{|f|\le1-\varepsilon\}$ : toute partition vérifie $\sum|\nu(A_n)|\le(1-\varepsilon)|\nu|(A)$, donc $|\nu|(A)\le(1-\varepsilon)|\nu|(A)$. d) $\nu^\pm=\frac12(|\nu|\pm\nu)=\mathbf 1_{\{f=\pm1\}}|\nu|$, portées par des ensembles disjoints.
:::
:::exo Ex. 122. Comptage sur un dénombrable
---
$\mu(A)=0\iff A=\emptyset$, donc $\nu\ll\mu$ ; densité $x\mapsto\nu(\{x\})$.
:::
:::exo Ex. 123. Radon-Nikodym par Hahn
---
**a)** $\int_A\max(f,g)=\int_{A\cap\{f\ge g\}}f+\int_{A\cap\{f<g\}}g\le\nu(A)$ ; monotone. Suite $f_n$ maximisante, $g=\lim\uparrow\max(f_1,\dots,f_n)$. **b)** Définition de $\mathcal F$. **c)** $\nu_1-\epsilon\mu\le0$ sur $A_\epsilon^c$ : $\nu_1(A_\epsilon^c)\le\epsilon\mu(E)$. **d)** Sur $A_\epsilon$, $\nu_1\ge\epsilon\mu$, donc $g+\epsilon\mathbf 1_{A_\epsilon}\in\mathcal F$ ; maximalité ($\int g\le\nu(E)<\infty$) : $\mu(A_\epsilon)=0$. **e)** $\mu(A_0)=0$ ; $\nu_1(A_0^c)\le\frac{\mu(E)}n$ pour tout $n$. **f)** $\nu=g\,d\mu+\nu_1$, $\nu_1\perp\mu$.
:::
:::exo Ex. 124. Radon-Nikodym pour les mesures finies sur les compacts
---
Appliquer 8.1 à $\nu_{|[n,n+1[}$, finie, et sommer : $f=\sum f_n$, intégrable sur tout compact. Réciproque : densité ⇒ absolument continue.
:::
:::exo Ex. 125 et 126. Partie atomique
---
**125** : a) $\mu([-M,M])=\sum_{A\cap[-M,M]}a_x=\int_0^\infty|A_\epsilon\cap[-M,M]|\,d\epsilon<\infty$ pour tout $M$ ; en particulier chaque $A_\epsilon\cap[-M,M]$ est fini, et $A=\bigcup_{n,M}A_{1/n}\cap[-M,M]$ est dénombrable. b) $\lambda(A)=0$ et $\mu(A^c)=0$. **126** (lire $\mu(\{x\})$) : $\mu_{at}(B)=\mu(B\cap D)$, $D$ l'ensemble dénombrable des atomes ; $\mu-\mu_{at}=\mu(\cdot\cap D^c)\ge0$, sans atome.
:::
:::exo Ex. 127. Convexité uniforme et Milman-Pettis
---
**a, $p\ge2$.** $|\frac{s+t}2|^p+|\frac{s-t}2|^p\le\big(|\frac{s+t}2|^2+|\frac{s-t}2|^2\big)^{p/2}=\big(\frac{s^2+t^2}2\big)^{p/2}\le\frac{|s|^p+|t|^p}2$. On intègre : $\|\frac{f+g}2\|^p\le1-(\frac\epsilon2)^p$.

**a, $1<p<2$.** Par homogénéité et compacité ($|s|+|t|=1$, convexité stricte), $\frac{|s|^p+|t|^p}2-\big|\frac{s+t}2\big|^p\ge c\,|s-t|^2(|s|+|t|)^{p-2}$. En intégrant, $c\int|f-g|^2(|f|+|g|)^{p-2}\le1-\|\frac{f+g}2\|^p$. Hölder (exposants $\frac2p,\frac2{2-p}$) : $\|f-g\|_p^p\le\big(\int|f-g|^2(|f|+|g|)^{p-2}\big)^{p/2}\big(\int(|f|+|g|)^p\big)^{1-p/2}$, dont le dernier facteur est borné. Donc $\|f-g\|>\epsilon$ force $\|\frac{f+g}2\|\le1-\delta$. **$L^1$** : $f=2\cdot\mathbf 1_{[0,1/2]}$, $g=2\cdot\mathbf 1_{[1/2,1]}$, $\|\frac{f+g}2\|=1$, $\|f-g\|=2$. **$L^\infty$** : $f=1$, $g=\mathbf 1_{[0,1/2]}-\mathbf 1_{]1/2,1]}$.

**b)** $\|x-y_n\|\to\delta_0=\operatorname{dist}(x,Y)>0$. Les vecteurs $u_n=\frac{x-y_n}{\|x-y_n\|}$ : $\|\frac{u_n+u_m}2\|\to1$ car $\frac{y_n+y_m}2\in Y$ ; la convexité uniforme force $u_n$ de Cauchy, donc $y_n$ aussi. Unicité : même argument.

**c)** Soit $\xi\in X^{**}$, $\|\xi\|=1$, $\epsilon>0$, $\delta$ associé. Choisir $\Lambda\in X^*$, $\|\Lambda\|=1$, $\xi(\Lambda)>1-\frac\delta2$. Le théorème de Goldstine dit que la boule $B_X$ est faible-* dense dans $B_{X^{**}}$ : $V=\{\eta\in B_{X^{**}}:|\eta(\Lambda)-\xi(\Lambda)|<\frac\delta2\}$ rencontre $B_X$ en $x$. Deux points $x,x'$ de $B_X\cap V$ vérifient $\Lambda(\frac{x+x'}2)>1-\delta$, donc $\|x-x'\|\le\epsilon$ (à un ajustement des constantes près pour les normes un peu inférieures à 1). Ainsi $B_X\cap V\subset x+\epsilon B_{X^{**}}$, ensemble faible-* fermé, qui contient donc $\xi$ : $\operatorname{dist}(\xi,X)\le\epsilon$. $X$ étant complet, il est fermé dans $X^{**}$ : $\xi\in X$.
:::
:::exo Ex. 128 et 129. $C_c$ et $C_0$
---
**128** : $K$ compact, $\mu(K)\ge n$, Urysohn $\mathbf 1_K\le f\le1$, $\|f\|_\infty=1$, $\Lambda(f)\ge n$. **129** : $f\in C_0$, $K=\{|f|\ge\varepsilon\}$ compact, $\chi\in C_c$ valant 1 sur $K$ : $\|f-f\chi\|_\infty\le\varepsilon$. Puis exercice 97 (cas dense).
:::
:::exo Ex. 130. Convergence faible des mesures
---
**a)** $|\int f\,d(\mu_n-\nu)|\le\|f\|_\infty\|\mu_n-\nu\|_{VT}$. **b)** $\delta_{1/n}\to\delta_0$, norme toujours 2. **c)** $C_c$ est dense dans $C_0$ et les masses valent 1 : $|\int f\,d\mu_n-\int f\,d\nu|\le2\|f-g\|_\infty+|\int g\,d\mu_n-\int g\,d\nu|$. (De plus aucune masse ne fuit puisque $\nu$ est une probabilité : la convergence vaut même pour $f$ continue bornée.) **d)** $\mu_n=n\delta_n$ : $\int f\,d\mu_n=0$ à partir d'un rang pour $f\in C_c$, mais $f(x)=\frac1{\sqrt{1+|x|}}\in C_0$ donne $\infty$. **e)** $E=\bigcup K_m$ compacts ; $C(K_m)$ est séparable (Stone-Weierstrass avec les fonctions $d(x_i,\cdot)$ à coefficients rationnels) ; multiplier par des fonctions plateau : $(f_k)$ dense dans $C_c$. Sur les probabilités, $d(\mu,\nu)=\sum_k2^{-k}\min\{1,|\int f_k\,d(\mu-\nu)|\}$.
:::
`);
