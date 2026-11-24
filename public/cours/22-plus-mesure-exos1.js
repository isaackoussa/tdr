PLUS('mesure', String.raw`
## Exercices 1 à 23 corrigés | p. 11-22
Les numéros sont ceux du polycopié. Cherche toujours dix minutes avant d'ouvrir une solution.
### Riemann et Jordan
:::exo Ex. 1. $\{x\}$ est Jordan-mesurable, $\mathbb Q$ ne l'est pas
---
$\{x\}\subset[x-\varepsilon,x+\varepsilon]$ : l'approximation extérieure vaut au plus $2\varepsilon$, l'intérieure 0. Taille 0. Pour $\mathbb Q\cap[0,1]$ : toute union finie d'intervalles qui le contient contient $[0,1]$ à un nombre fini de points près (longueur $\ge1$) ; toute union finie d'intervalles contenue dedans est faite de points (longueur 0). $\mathbb Q$ n'est de plus pas borné.
:::
:::exo Ex. 2. Support compact $\iff$ nulle hors d'un segment
---
$\operatorname{supp}f=\overline{\{f\ne0\}}$. Compact $\Rightarrow$ borné $\Rightarrow$ contenu dans un $[a,b]$. Réciproquement, fermé inclus dans $[a,b]$, donc compact. $f\mathbf 1_{[a,b]}$ est nulle hors de $[a,b]$.
:::
:::exo Ex. 3. Le sup des sommes inférieures est $\le$ l'inf des sommes supérieures
---
Soient $g=\sum\lambda_j\mathbf 1_{[a_j,b_j]}\le f\le h=\sum\mu_k\mathbf 1_{[c_k,d_k]}$. On ordonne toutes les bornes $t_0<\dots<t_m$ : sur chaque $]t_{i-1},t_i[$, $g$ et $h$ sont constantes, $g\le h$. La somme $\sum\lambda_j(b_j-a_j)$ vaut $\sum_i g_i(t_i-t_{i-1})\le\sum_ih_i(t_i-t_{i-1})$. Prendre sup et inf.
:::
:::exo Ex. 4. Linéarité de l'intégrale de Riemann
---
Pour $f,g\ge0$ à support compact et $\lambda,\nu\ge0$ : si $g_1\le f\le h_1$ et $g_2\le g\le h_2$ en escalier, $\lambda g_1+\nu g_2\le\lambda f+\nu g\le\lambda h_1+\nu h_2$ et l'écart est $\lambda\int(h_1-g_1)+\nu\int(h_2-g_2)$, aussi petit qu'on veut. Cas général : $f=f^+-f^-$ ; si $u=f+g$, $u^++f^-+g^-=u^-+f^++g^+$, on intègre et on réarrange. (L'énoncé écrit $\mu$ à la place de $\nu$ dans la formule.)
:::
:::exo Ex. 5. Existence de la limite, trois exemples
---
$f\ge0$ : $\int_a^bf$ croît quand $[a,b]$ grandit, donc a une limite dans $[0,\infty]$. Exemples : $f=1$ (finie sur chaque segment, totale infinie) ; $f(x)=e^{-|x|}>0$ partout, intégrale 2. **Deuxième point** : avec la définition du cours, une fonction à support compact Riemann-intégrable est **bornée** (il faut une fonction en escalier au-dessus), donc d'intégrale finie : un exemple n'existe que si l'on autorise l'intégrale impropre, comme $\frac1x\mathbf 1_{]0,1]}$.
:::
:::exo Ex. 6. Une fonction continue à support compact est Riemann-intégrable
---
Elle est uniformément continue : $|x-y|<\delta\Rightarrow|f(x)-f(y)|<\varepsilon$. On découpe $[a,b]$ en pas $<\delta$ : les sommes de min et de max diffèrent d'au plus $\varepsilon(b-a)$. Continue par morceaux (limites finies aux points de coupure) : sur chaque morceau, prolonger par continuité.
:::
:::exo Ex. 7. Jordan et Riemann
---
$\mathbf 1_A$ encadrée par des fonctions en escalier revient à encadrer $A$ par des unions finies d'intervalles : si $g\le\mathbf 1_A\le h$ en escalier, $\{g>0\}\subset A\subset\{h\ge1\}$, unions finies de longueur $\ge\int g$ et $\le\int h$. Réciproquement les indicatrices des unions conviennent. Pour $f$ bornée : l'aire sous une fonction en escalier est une union finie de rectangles ; inversement, un encadrement du sous-graphe par des rectangles, ordonnés selon leurs abscisses, donne des fonctions en escalier en dessous et au-dessus de $f$ avec la même différence d'aires.
:::
:::exo Ex. 9. Infinité des nombres premiers par la topologie
---
**a)** $U_{a,b}\cap U_{a',b'}$ est vide ou égal à $U_{c,\operatorname{ppcm}(b,b')}$ : les intersections de réunions sont des réunions. **b)** Le complémentaire de $U_{a,b}$ est $\bigcup_{r=1}^{b-1}U_{a+r,b}$, ouvert. **c)** Tout entier différent de $\pm1$ a un diviseur premier : $\mathbb Z\setminus\{-1,1\}=\bigcup_pU_{0,p}$. Si les premiers sont en nombre fini, c'est une réunion **finie** de fermés : fermé, donc $\{-1,1\}$ est ouvert. **d)** Or tout ouvert non vide contient un $U_{a,b}$, infini. Contradiction.
:::
### Topologie et espaces métriques
:::exo Ex. 10. Unicité de la limite (Hausdorff)
---
Si $x_n\to x$ et $x_n\to y\ne x$, des ouverts disjoints $U\ni x$, $V\ni y$ contiennent tous deux $x_n$ pour $n$ grand : absurde.
:::
:::exo Ex. 11. La topologie séquentielle $\tilde{\mathcal T}$
$\tilde{\mathcal T}$ : les $U$ tels que $x_n\to x\in U$ entraîne $x_n\in U$ à partir d'un rang. (L'énoncé imprimé oublie « $x_n\in U$ à partir d'un rang ».)
---
**a)** $\emptyset,E$ : oui ; réunions : $x$ est dans l'un des $U_i$ ; intersections finies : prendre le max des rangs. **b)** C'est la définition de la convergence. **c)** Topologie codénombrable sur $\mathbb R$ : une suite converge ssi elle est stationnaire ($\{x_n:x_n\ne x\}$ est dénombrable, son complémentaire est un voisinage de $x$). Donc $\tilde{\mathcal T}=\mathcal P(\mathbb R)\ne\mathcal T$. **d)** Il suffit que chaque point ait une base **dénombrable** de voisinages (en particulier : métrique) : si $U\notin\mathcal T$, il existe $x\in U$ et $x_n\in V_n\setminus U$ avec $V_n$ base décroissante, donc $x_n\to x$ hors de $U$.
:::
:::exo Ex. 12. Sous-espace métrique
---
Les trois axiomes sont vrais pour tous les points de $E$, donc pour ceux de $F$.
:::
:::exo Ex. 13. Trois définitions équivalentes de la continuité
---
(i)⇒(ii) : $f^{-1}(B(f(x),\varepsilon))$ est ouvert et contient $x$, donc une boule $B(x,\delta)$. (ii)⇒(iii) : $d(x_n,x)<\delta$ à partir d'un rang. (iii)⇒(i) : si $f^{-1}(U)$ n'est pas ouvert, il existe $x$ dedans et $x_n\to x$ dehors ; $f(x_n)\to f(x)\in U$ ouvert, donc $f(x_n)\in U$ : absurde.
:::
:::exo Ex. 14. Höldérienne, uniformément continue, continue
---
**1)** Si $d\le1$, $d^\alpha\le d^\beta$ ; si $d>1$, $|f(x)-f(y)|\le2\|f\|_\infty\le2\|f\|_\infty d^\beta$. **2)** L'énoncé (« 1-höldérienne ⇒ $\beta$-höldérienne ») est vrai si $f$ ou $E$ est **borné** ; sur $\mathbb R$, $f(x)=x$ est 1-höldérienne mais pas $\frac12$-höldérienne ($|x-y|\le C|x-y|^{1/2}$ échoue loin). **3)** $\delta=(\varepsilon/C)^{1/\alpha}$. **4)** Clair. Contre-exemples inverses : $\sqrt x$ sur $[0,1]$ est $\frac12$-höldérienne, pas lipschitzienne ; $\frac1{|\ln x|}$ (0 en 0) sur $[0,\frac12]$ est uniformément continue mais $\alpha$-höldérienne pour aucun $\alpha$ ; $x^2$ sur $\mathbb R$ est continue, pas uniformément.
:::
:::exo Ex. 15. Adhérence, intérieur, densité par les distances
---
a) et b) : $x\in\overline A\iff$ toute $B(x,\frac1n)$ rencontre $A\iff$ il existe $a_n\in A$, $a_n\to x\iff\operatorname{dist}(x,A)=0$. c) $x\in\mathring A\iff\exists r,\ B(x,r)\subset A\iff\operatorname{dist}(x,A^c)\ge r>0$. d) C'est $\overline A=E$.
:::
:::exo Ex. 16 et 86. Prolonger une fonction uniformément continue
---
$x\in E$, $a_n\in A$, $a_n\to x$ : $(a_n)$ est de Cauchy, donc $(f(a_n))$ aussi par uniforme continuité ; $\mathbb R$ complet : elle converge. La limite ne dépend pas de la suite (entrelacer deux suites). On pose $F(x)=\lim f(a_n)$. Si $d(x,y)<\delta$, $d(a_n,b_n)<\delta$ à partir d'un rang, donc $|F(x)-F(y)|\le\varepsilon$ : uniformément continue. Unicité : deux fonctions continues égales sur un dense. **Contre-exemple** : $f(x)=\frac1x$ continue sur $A=\,]0,1]$ dense dans $[0,1]$.
:::
:::exo Ex. 17. Unicité du complété
---
L'inclusion $E\to G$ est isométrique donc uniformément continue : elle se prolonge (ex. 16, $G$ complet) en $\phi:F\to G$, isométrique par passage à la limite. De même $\psi:G\to F$. $\psi\circ\phi$ est continue et vaut l'identité sur $E$ dense : $\psi\circ\phi=\mathrm{Id}_F$, et de même dans l'autre sens.
:::
:::exo Ex. 18. Compacité et compacité séquentielle
---
(i)⇒(ii) : si $(x_n)$ n'a aucune valeur d'adhérence dans $A$, chaque $a\in A$ a une boule ne contenant $x_n$ que pour un nombre fini de $n$ ; un sous-recouvrement fini ne contiendrait qu'un nombre fini d'indices : absurde. (ii)⇒(i) : **Nombre de Lebesgue** : il existe $r>0$ tel que toute $B(a,r)$, $a\in A$, soit dans un $U_i$ ; sinon $B(a_n,\frac1n)$ n'est dans aucun, $a_{\sigma(n)}\to a\in U_i$, absurde. **Précompacité** : $A$ est couvert par un nombre fini de $B(a_k,r)$ ; sinon on construit une suite avec $d(a_n,a_m)\ge r$, sans sous-suite convergente. Conclusion : choisir un $U_i$ par boule.
:::
:::exo Ex. 19. Compact $\Rightarrow$ complet et borné
---
Complet : une suite de Cauchy ayant une sous-suite convergente converge. Borné : sinon on choisit $x_{n+1}$ avec $d(x_0,x_{n+1})>d(x_0,x_n)+1$, donc $d(x_n,x_m)>1$. $A$ compact est complet donc fermé. Réciproque fausse en général : boule unité fermée d'un espace de dimension infinie, ou $\mathbb N$ avec la distance discrète.
:::
:::exo Ex. 20. Fonctions continues sur un compact
---
$f(K)$ est compact dans $\mathbb R$ : fermé borné, il contient son sup et son inf. Appliquer à $z\mapsto d(x,z)$. Uniforme continuité : sinon $d(x_n,y_n)\to0$ et $|f(x_n)-f(y_n)|\ge\varepsilon$ ; on extrait $x_{\sigma(n)}\to x$, donc $y_{\sigma(n)}\to x$, et $f$ continue en $x$ : contradiction.
:::
:::exo Ex. 21. $\mathbb R$
---
Distance : propriétés de la valeur absolue. Fermé borné ⇒ compact : toute suite de $[a,b]$ a une sous-suite convergente (dichotomie : on garde toujours une moitié contenant une infinité de termes). Donc $\mathbb R$ n'est pas compact ; $\sigma$-compact ($\bigcup[-n,n]$) ; localement compact ; séparable ($\mathbb Q$).
:::
:::exo Ex. 22. L'espace $\mathbb R^{\mathbb N}$
---
**a)** La série est majorée par $\sum2^{-n}$ ; $\min\{\cdot,1\}$ conserve l'inégalité triangulaire. **b)** ⇒ : $\min\{|x_n^{(k)}-y_n|,1\}\le2^n\operatorname{dist}$. ⇐ : couper à $N$ avec $\sum_{n>N}2^{-n}<\varepsilon$. **c)** $B_{N,\varepsilon}(y)$ est ouvert : c'est une intersection finie d'images réciproques d'ouverts par les coordonnées, continues. Si $x\in U$ ouvert contenant $B(x,r)$ : choisir $N$ avec $\sum_{n>N}2^{-n}<\frac r2$, $\varepsilon=\frac r4$ ; alors $B_{N,\varepsilon}(x)\subset B(x,r)$. **d)** Approcher $x_0,\dots,x_N$ par des rationnels, mettre 0 après : famille **dénombrable**. Donc $\mathbb R^{\mathbb N}$ est séparable ; il est aussi complet (coordonnée par coordonnée) : polonais.
:::
:::exo Ex. 23 et 77. Localement compact, propre, $\sigma$-compact
---
**a) L'énoncé est faux tel quel** : $]0,1[$ est localement compact et non complet. La bonne implication est *propre* ⇒ complet. **b)** Propre : une suite de Cauchy est bornée, contenue dans une boule fermée compacte, donc converge ; $E=\bigcup\overline B(x,n)$ est $\sigma$-compact ; chaque compact est séparable. **c)** $\ell^2$ : complet, séparable ; aucune boule n'est compacte, donc tout compact est d'intérieur vide, et par Baire $\ell^2$ n'est pas $\sigma$-compact. **d)** Un ensemble non dénombrable avec la distance discrète. **e)** ⇒ : réunion dénombrable de séparables. ⇐ : les boules $\overline B(x_i,r)$, $x_i$ dans un dense dénombrable, $r$ rationnel, compactes, recouvrent $E$. **f)** $K_n\subset\mathring K_{n+1}$ exhaustion ; $f=\sum_nf_n$ avec $f_n$ continue, $0\le f_n\le1$, nulle sur $K_n$, égale à 1 hors de $K_{n+1}$ (somme localement finie). $d'(x,y)=d(x,y)+|f(x)-f(y)|$ a la même topologie, et une $d'$-boule fermée est dans $\{f\le c\}\subset K_m$ : compacte. **g)** $\mathbb R$ avec $\min(|x-y|,1)$ : la boule fermée de rayon 1 est $\mathbb R$.
:::

## Exercices 24 à 46 corrigés | p. 25-32
:::exo Ex. 24 et 25. Premières règles
---
$A\cup B=A\cup B\cup\emptyset\cup\cdots$ ; $A\cap B=(A^c\cup B^c)^c$ ; $A\setminus B=A\cap B^c$ ; $\bigcap A_n=(\bigcup A_n^c)^c$. $\{\emptyset,E\}$ et $\mathcal P(E)$ vérifient les trois axiomes de façon évidente.
:::
:::exo Ex. 26. $0$ si fini, $\infty$ sinon ; $0$ si dénombrable, $\infty$ sinon
---
La première **n'est pas** une mesure : $\mathbb N=\bigsqcup\{n\}$ donne $\infty=0$. La seconde **l'est** : une réunion dénombrable d'ensembles dénombrables est dénombrable ; si l'un des $A_n$ ne l'est pas, les deux membres valent $\infty$.
:::
:::exo Ex. 27. Proposition 1.3 et contre-exemple
---
Démonstration dans la leçon « Tribus et mesures ». Contre-exemple : $A_n=[n,\infty[$, $\lambda(A_n)=\infty$, $\bigcap A_n=\emptyset$.
:::
:::exo Ex. 28. Sommes de familles
---
$J\subset I_1\sqcup I_2$ fini se coupe en $J_1\sqcup J_2$ : $\sum_J=\sum_{J_1}+\sum_{J_2}\le\sum_{I_1}+\sum_{I_2}$ ; réciproquement choisir $J_1,J_2$ presque optimaux. Si $I$ est non dénombrable et $a_i>0$ : $I=\bigcup_n\{a_i>\frac1n\}$, l'un de ces ensembles est infini, donc la somme est infinie.
:::
:::exo Ex. 29, 30, 31. Comptage, restriction, combinaison
---
**29** : le cardinal d'une réunion disjointe est la somme ; $\sigma$-finie ssi $E$ est dénombrable. **30** : $A\cap\bigsqcup B_n=\bigsqcup(A\cap B_n)$. **31** : échange de deux sommes à termes positifs (sup de sommes finies).
:::
:::exo Ex. 32. Inclusion-exclusion
---
$n=2$ : proposition (iii). De $n$ à $n+1$ : $\mu(U\cup A_{n+1})=\mu(U)+\mu(A_{n+1})-\mu\big(\bigcup_{k\le n}(A_k\cap A_{n+1})\big)$ avec $U=\bigcup_{k\le n}A_k$. L'hypothèse sur $U$ donne les $I$ ne contenant pas $n+1$ ; $\mu(A_{n+1})$ est $I=\{n+1\}$ ; le dernier terme donne les autres $I$ contenant $n+1$, avec le bon signe.
:::
:::exo Ex. 33. Tribu engendrée par les singletons
---
Les ensembles **dénombrables ou de complémentaire dénombrable** : cette famille est une tribu, contient les singletons, et tout dénombrable est réunion dénombrable de singletons.
:::
:::exo Ex. 34 et 35. Fermés ; intervalles
---
$F=(F^c)^c$ avec $F^c$ ouvert. $\sigma(\mathcal I)=\mathcal B(\mathbb R)$ : tout ouvert de $\mathbb R$ est réunion dénombrable d'intervalles ouverts à bornes rationnelles. Fermés : $]a,b[\,=\bigcup[a+\frac1n,b-\frac1n]$ ; semi-ouverts de même. Bornes rationnelles : cela suffit.
:::
:::exo Ex. 36. Boréliens de $\overline{\mathbb R}$
---
$\{+\infty\}=\bigcap\,]n,+\infty]$ et $\{-\infty\}$ sont boréliens ; les ouverts de $\mathbb R$ sont ouverts dans $\overline{\mathbb R}$, donc $\mathcal B(\mathbb R)\subset\mathcal B(\overline{\mathbb R})$ : la condition suffit. Nécessaire : $\{A:A\setminus\{\pm\infty\}\in\mathcal B(\mathbb R)\}$ est une tribu contenant les ouverts.
:::
:::exo Ex. 37 et 38. Associativité ; produits dénombrables
---
**37** : les deux tribus sont engendrées par les pavés $A\times B\times C$. (À $A$ fixé, $\{D\in\mathcal F\otimes\mathcal G:A\times D\in\sigma(\text{pavés})\}$ est stable par complémentaire relatif et réunion, contient les $B\times C$.) **38** : $\prod A_i=\bigcap_i\pi_i^{-1}(A_i)$, intersection dénombrable.
:::
:::exo Ex. 39 et 40. $\mathcal B(\mathbb R^2)=\mathcal B(\mathbb R)^{\otimes2}$, $\mathcal B(\mathbb R^{\mathbb N})=\bigotimes\mathcal B(\mathbb R)$
---
⊃ : les projections sont continues, donc $\pi_1^{-1}(A)\cap\pi_2^{-1}(B)$ est borélien. ⊂ : tout ouvert est réunion **dénombrable** de pavés ouverts à bornes rationnelles. Même preuve pour $\mathbb R^d$, et pour $\mathbb R^{\mathbb N}$ avec la base dénombrable de l'exercice 22.
:::
:::exo Ex. 41 et 42. Classes monotones
---
**42** : $A\cap B=\emptyset$ donne $A\subset B^c$, donc $B^c\setminus A\in\mathcal M$ et $A\sqcup B=(B^c\setminus A)^c\in\mathcal M$ ($X^c=E\setminus X$). **41** : stable par complémentaire ; $A\cup B=(A^c\cap B^c)^c$ ; $\bigcup A_n$ est la réunion **croissante** des $\bigcup_{k\le n}A_k$.
:::
:::exo Ex. 43. Parties de cardinal pair
---
$E$ est pair ; pair moins pair inclus est pair ; une réunion croissante est stationnaire. Pas une tribu dès que $|E|\ge4$ : $\{1,2\}\cap\{2,3\}=\{2\}$. (Pour $|E|=2$ c'est la tribu triviale.)
:::
:::exo Ex. 44. $\mathcal M=\{B:\lambda(B\cap[0,M])\in\mathbb N\}$
---
**a)** $\lambda([0,M])=M$ ; différences d'entiers ; une suite croissante d'entiers bornée par $M$ est stationnaire. $[0,\frac12]\notin\mathcal M$. **b)** Chaque élément a une trace de longueur 1. Pour $M\ge2$ : avec $a<a'$, $[a,a+1[\,\cap[a',a'+1[\,=[a',a+1[$ et $[a,a+1[\,\setminus[a',a'+1[\,=[a,a'[$ : tous les petits intervalles de $[0,M[$, puis les $B$ hors de $[0,M[$ par différence ; donc $\sigma(\mathcal A)=\mathcal B$. (Pour $M=1$, seul $a=0$ est permis et l'affirmation est fausse.) **c)** $\sigma(\mathcal A')=\mathcal B$. La classe monotone engendrée aussi : réunions disjointes (ex. 42) et croissantes donnent $[a,\infty[\,=\bigsqcup_k[a+k,a+k+1[$, puis $[a,b[\,=[a,\infty[\,\setminus[b,\infty[$ ; cette famille (avec $\emptyset$) est stable par $\cap$.
:::
:::exo Ex. 45. Unicité des mesures
---
**a)** $\{A:\mu(A)=\nu(A)\}$ est une classe monotone (mesures finies et $\mu(E)=\nu(E)$) contenant $\mathcal A$. **b)** Appliquer a) à $\mu(\cdot\cap A_k)$ et $\nu(\cdot\cap A_k)$, puis $k\to\infty$. **c)** Intervalles $[a,b[$ de $\mathbb R$, $\mu$ = comptage, $\nu=2\mu$ : égales ($\infty$ ou 0) sur tous les intervalles, différentes sur $\{0\}$.
:::
:::exo Ex. 46. Pas de borélien « moitié partout »
---
Si $\lambda(A\cap[a,b])=\frac12(b-a)$ toujours, les mesures $\lambda(A\cap\cdot)$ et $\frac12\lambda$ coïncident (unicité). En $A\cap[0,1]$ : $\lambda(A\cap[0,1])=\frac12\lambda(A\cap[0,1])$, donc 0 ; or elle vaut $\frac12$. Absurde.
:::

## Exercices 47 à 60 corrigés | p. 34-50
:::exo Ex. 47 et 48. Limites supérieures ; continue par morceaux
---
$\limsup f_n=\inf_n\sup_{k\ge n}f_k$ (et $\inf f=-\sup(-f)$). $\{\lim\text{ existe}\}=\{\limsup=\liminf\}$ : image réciproque de la diagonale, fermée, par une fonction mesurable (pour une limite finie, intersecter avec $\{|\limsup|<\infty\}$). **48** : $f=\sum_if\mathbf 1_{I_i}$, une somme dénombrable de continues restreintes à des intervalles, plus des points.
:::
:::exo Ex. 49. Les images directes ne forment pas une tribu
---
Si $f$ n'est pas surjective, $F$ n'est pas une image. Et même surjective, $f(B^c)\ne f(B)^c$ en général : $E=\{1,2,3\}$, $f(1)=a$, $f(2)=f(3)=b$... avec $\mathcal E=\sigma(\{1,2\})$ : images $\emptyset,\{a,b\},\{b\}$ ; $\{b\}^c=\{a\}$ manque.
:::
:::exo Ex. 50 et 51. Limite d'étagées ; monotone généralisée
---
**50** : une limite simple de mesurables est mesurable. **51** : hors d'un négligeable, $f_n-f_1\ge0$ croît vers $f-f_1$. Convergence monotone : $\int f_n-\int f_1\to\int f-\int f_1$, et $\int f_1$ est finie : on simplifie.
:::
:::exo Ex. 52 et 53. Intégrale infinie ; Fatou strict
---
**52** : $f=1$ sur $\mathbb R$. Avec $\mu(E)<\infty$ aussi : $f(x)=\frac1x$ sur $]0,1]$. **53** : $\liminf f_n=0$ partout sauf en $x=0$ où elle vaut 1 : intégrale 0, contre 1. $g_n(x)=0$ dès que $n>x$ ; $1>0$.
:::
:::exo Ex. 54. $\int f\,d\nu=\int fg\,d\mu$
---
$f=\mathbf 1_A$ : définition. Étagée : linéarité. Positive : $f_n\uparrow f$, donc $f_ng\uparrow fg$, convergence monotone des deux côtés.
:::
:::exo Ex. 55. Concentration, étalement, fuite
---
$f_n(x)=0$ dès que $n|x|>1$ ($x\ne0$) ; $g_n\le\frac{\max\varphi}n$ ; $h_n(x)=0$ dès que $n>x+1$. Changement de variable : les trois intégrales valent 1. Trois contre-exemples à l'échange limite-intégrale.
:::
:::exo Ex. 56 (fin). Domination le long de sous-sous-suites
---
$\int f_n=\frac1n\to0$. Toute sous-suite a une sous-sous-suite $n_k\ge2^k$ : $g=\sum_k\frac1{n_k}\mathbf 1_{[n_k,n_k+1[}$ domine, $\int g\le\sum2^{-k}$. **Principe général** : si $\int f_n\not\to\int f$, une sous-suite reste à distance $\varepsilon$ ; une sous-sous-suite dominée converge : contradiction.
:::
:::exo Ex. 57. Théorème d'Egorov
---
$A_{k,N}=\bigcup_{n\ge N}\{|f_n-f|\ge\frac1k\}$ décroît en $N$ vers un ensemble négligeable ; $\mu$ **finie** : il existe $N_k$ avec $\mu(A_{k,N_k})<\varepsilon2^{-k}$. $A=\bigcup_kA_{k,N_k}$ : $\mu(A)<\varepsilon$, et sur $A^c$, $|f_n-f|<\frac1k$ pour tout $n\ge N_k$.
:::
:::exo Ex. 58 et 59. Continuité et dérivation sous l'intégrale
---
**58** : si $t_n\to t$, $f(x,t_n)\to f(x,t)$ p.p. et $|f(x,t_n)|\le g$ : dominée. **59** : $\frac{f(x,t+h)-f(x,t)}h\to\partial_tf(x,t)$, et l'inégalité des accroissements finis le borne par $g(x)$ : dominée ; $F'$ est continue par 58.
:::
:::exo Ex. 60. Convolution
---
$|f(t)g(x-t)|\le\|g\|_\infty|f(t)|\in L^1$ : bien définie ; continue en $x$ par 58. Si $g$ est $C^1$ à dérivée bornée, 59 donne $(f*g)'=f*g'$ ; récurrence pour $C^i$, $C^\infty$.
:::
`);
