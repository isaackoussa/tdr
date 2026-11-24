PLUS('bilineaire', String.raw`
## TD entièrement corrigé | p. 34-36
Les huit exercices du TD, dans l'ordre. Les exercices 1-I, 1-III-a, 2 et 7 sont corrigés dans les leçons sur la projection et sur le théorème spectral ; tous les autres sont ici.
:::exo Exo 1-II-a : développer $\big[(1-X)^nX^i\big]^{(i-1)}$
L'exposant $(i-1)$ désigne la dérivée d'ordre $i-1$, avec $i\ge1$.
---
Binôme de Newton : $(1-X)^nX^i=\sum_{k=0}^n(-1)^k\binom nkX^{k+i}$. La dérivée d'ordre $i-1$ de $X^{k+i}$ est $\dfrac{(k+i)!}{(k+1)!}X^{k+1}$. Donc
$$\big[(1-X)^nX^i\big]^{(i-1)}=\sum_{k=0}^n(-1)^k\binom nk\frac{(k+i)!}{(k+1)!}\,X^{k+1}.$$
**Conséquence utile plus bas.** Pour $1\le i\le n$, $1$ est racine d'ordre $n$ de $(1-X)^nX^i$, donc encore racine après $i-1\le n-1$ dérivations. En $X=1$ :
$$\sum_{k=0}^n(-1)^k\binom nk\frac{(k+i)!}{(k+1)!}=0\qquad(1\le i\le n).$$
:::
:::exo Exo 1-II-b : $\displaystyle\inf_{a\in\mathbb R^n}\int_0^{+\infty}(1+a_1X+\dots+a_nX^n)\,e^{-X}dX$
---
**L'énoncé tel qu'il est imprimé.** Sans carré, l'intégrale vaut $1+\sum_k a_k\,k!$ (car $\int_0^\infty X^ke^{-X}dX=k!$) : c'est une fonction affine non constante de $a$, son infimum est $-\infty$. Il n'y a donc rien à justifier : il manque manifestement un **carré**, et c'est ce que prépare la question a.

**Version avec le carré.** On cherche $m=\inf_a\int_0^\infty(1+a_1X+\dots+a_nX^n)^2e^{-X}dX$. Sur $\mathbb R_n[X]$, $\langle P,Q\rangle=\int_0^\infty PQ\,e^{-X}dX$ est un produit scalaire, avec $\langle X^i,X^j\rangle=(i+j)!$. On a $m=d(1,F)^2$ avec $F=\operatorname{Vect}(X,\dots,X^n)$. $F$ est de dimension finie : la projection orthogonale existe, donc l'infimum **existe et est atteint** en un unique point.

Le minimiseur $P=1+\sum_{k\ge1}a_kX^k$ est caractérisé par $\langle P,X^i\rangle=0$ pour $1\le i\le n$, soit, avec $a_0=1$,
$$\sum_{k=0}^na_k\,(k+i)!=0\qquad(1\le i\le n).$$
La question a donne une solution : $a_k=(-1)^k\binom nk\dfrac1{(k+1)!}$, qui vérifie bien $a_0=1$. Par unicité, c'est la bonne. Enfin, comme $P\perp X^k$ pour $k\ge1$,
$$m=\langle P,P\rangle=\langle P,1\rangle=\sum_{k=0}^na_k\,k!=\sum_{k=0}^n\frac{(-1)^k}{k+1}\binom nk=\int_0^1(1-t)^ndt=\boxed{\frac1{n+1}}.$$
Vérification $n=1$ : $a_1=-\frac12$ et $\int(1-\frac X2)^2e^{-X}=1-1+\frac24=\frac12$ ✓.
:::
:::exo Exo 1-III-b : orthonormaliser $X^2-1,\ 3X+1,\ X^2+X$ dans $\mathbb R_2[X]$
L'énoncé ne précise pas le produit scalaire.
---
On prend le produit scalaire **canonique**, celui qui rend $(1,X,X^2)$ orthonormée (les coefficients jouent le rôle des coordonnées). En coordonnées sur $(1,X,X^2)$ : $u_1=(-1,0,1)$, $u_2=(1,3,0)$, $u_3=(0,1,1)$.

**Étape 1.** $e'_1=(-1,0,1)$, norme² 2.

**Étape 2.** $\langle e'_1,u_2\rangle=-1$, donc $e'_2=u_2+\frac12e'_1=\big(\frac12,3,\frac12\big)$ ; on garde la direction $(1,6,1)$, norme² 38.

**Étape 3.** $\langle e'_1,u_3\rangle=1$ et $\langle(1,6,1),u_3\rangle=7$ :
$$e'_3=(0,1,1)-\tfrac12(-1,0,1)-\tfrac7{38}(1,6,1)=\tfrac1{38}(12,-4,12)=\tfrac2{19}(3,-1,3).$$
Norme² de $(3,-1,3)$ : 19. **Base orthonormale :**
$$\frac{X^2-1}{\sqrt2},\qquad\frac{X^2+6X+1}{\sqrt{38}},\qquad\frac{3X^2-X+3}{\sqrt{19}}.$$
Contrôle : $(-1)(1)+0+1=0$ ; $-3+0+3=0$ ; $3-6+3=0$ ✓.

Avec un autre produit scalaire (par exemple $\int_0^1PQ$), la méthode est la même mais les nombres changent : demande lequel est attendu.
:::
:::exo Exo 3 : $H=\{f\in C([0,1]):f(0)=0\}$
Montrer que c'est un hyperplan, et trouver $H^\perp$ pour $\langle f,g\rangle=\int_0^1fg$.
---
**1) Hyperplan.** $H$ est le noyau de la forme linéaire **non nulle** $f\mapsto f(0)$ : c'est un hyperplan. Un supplémentaire est la droite des constantes : $f=(f-f(0))+f(0)$.

**2) Orthogonal.** Soit $g\in H^\perp$. La fonction $f(t)=t\,g(t)$ est dans $H$, donc $0=\int_0^1t\,g(t)^2dt$. L'intégrande est continu et positif, donc nul partout : $g(t)=0$ pour $t>0$, et $g(0)=0$ par continuité. Ainsi $H^\perp=\{0\}$.

**Moralité.** $H\oplus H^\perp=H\ne E$ : le théorème $E=F\oplus F^\perp$ est **faux** en dimension infinie quand $F$ n'est pas complet. Ici $H$ est dense dans $E$ pour cette norme.
:::
:::exo Exo 4 : exponentielle de matrices symétriques
1) $A$ symétrique réelle est un polynôme en $\exp(A)$. 2) $\exp A$ et $\exp B$ commutent ssi $A$ et $B$ commutent.
---
**1)** Théorème spectral : $A=PD\,{}^tP$, $D=\operatorname{diag}(\lambda_1,\dots,\lambda_n)$, donc $\exp A=P\operatorname{diag}(e^{\lambda_i})\,{}^tP$. Soient $\mu_1,\dots,\mu_r$ les valeurs propres **distinctes**. Les $e^{\mu_j}$ sont distincts (l'exponentielle est injective) : l'interpolation de Lagrange fournit un polynôme $Q$ avec $Q(e^{\mu_j})=\mu_j$ pour tout $j$. Alors $Q(\exp A)=P\operatorname{diag}(Q(e^{\lambda_i}))\,{}^tP=PD\,{}^tP=A$.

**2)** Si $AB=BA$, alors $\exp A$ et $\exp B$, limites de polynômes en $A$ et en $B$, commutent. Réciproquement, si $\exp A$ et $\exp B$ commutent, tout polynôme en $\exp A$ commute avec tout polynôme en $\exp B$ ; d'après 1), $A=Q(\exp A)$ et $B=R(\exp B)$ commutent.
:::
:::exo Exo 5 : écrire $u=\varpi\circ p$ (automorphisme $\circ$ projecteur)
---
**1)** Soit $S$ un supplémentaire de $\ker u$ : $E=\ker u\oplus S$. Soit $p$ le projecteur **sur $S$ parallèlement à $\ker u$**. La restriction $u_{|S}:S\to\operatorname{Im}u$ est un isomorphisme. Soit $T$ un supplémentaire de $\operatorname{Im}u$ : $\dim T=n-\operatorname{rg}u=\dim\ker u$, donc il existe un isomorphisme $w:\ker u\to T$. On pose $\varpi=u$ sur $S$ et $\varpi=w$ sur $\ker u$ : c'est un automorphisme. Pour $x=k+s$, $\varpi(p(x))=\varpi(s)=u(s)=u(x)$.

**2)** **Non**, en général. Si $\varpi$ est une isométrie et $p$ un projecteur orthogonal, $\|u(x)\|=\|p(x)\|\le\|x\|$ ; avec $u=2\,\mathrm{Id}$ c'est impossible. (On peut toujours prendre $p$ **orthogonal**, avec $S=(\ker u)^\perp$ ; c'est l'isométrie qui fait défaut. La bonne généralisation est la décomposition polaire $u=\varpi\circ s$ avec $\varpi$ isométrie et $s$ symétrique positif. La réponse est « oui » exactement quand $u$ est une isométrie **partielle**, c'est-à-dire conserve les normes sur $(\ker u)^\perp$.)

**3)** Dans $E=\mathbb R[X]$, soit $u(P)=XP$ : injectif, non surjectif. Si $u=\varpi\circ p$, alors $\ker p\subset\ker u=\{0\}$ ; un projecteur injectif est l'identité ($p(x-p(x))=0$). Donc $u=\varpi$ serait surjectif : absurde, $1\notin\operatorname{Im}u$.
:::
:::exo Exo 6 : hyperplans de $\mathbb C[X]$
$(X^n)$ est orthonormée, $\varphi$ forme linéaire non nulle, $H=\ker\varphi$, $a_n=\varphi(X^n)$.
---
**Condition nécessaire.** Si $\mathbb C[X]=H\oplus H^\perp$, alors $H^\perp$ est une droite $\mathbb C\,Q$, $Q=\sum_{k\le d}q_kX^k\ne0$, et $H=Q^\perp$ (car $H\subset Q^\perp$ et ce sont deux hyperplans). Les deux formes $\varphi$ et $P\mapsto\langle Q,P\rangle$ ont le même noyau : $\varphi=c\,\langle Q,\cdot\rangle$, donc $a_n=c\,\bar q_n=0$ pour $n>d$ : l'ensemble est fini.

**Condition suffisante.** Si $a_n=0$ pour $n>d$, posons $Q=\sum_{k\le d}\bar a_kX^k\ne0$ : $\langle Q,X^n\rangle=a_n$, donc $\varphi=\langle Q,\cdot\rangle$, $H=Q^\perp$. Tout $P$ s'écrit $\frac{\langle Q,P\rangle}{\|Q\|^2}Q+\Big(P-\frac{\langle Q,P\rangle}{\|Q\|^2}Q\Big)$ : $\mathbb C[X]=\mathbb CQ\oplus H$ orthogonalement.

**$H^\perp$ a toujours un supplémentaire orthogonal.** $\dim H^\perp\le1$, car deux vecteurs indépendants de $H^\perp$ auraient une combinaison non nulle $R$ telle que $\varphi(R)=0$ : $R\in H\cap H^\perp=\{0\}$, absurde. Un sous-espace de dimension **finie** $F$ vérifie toujours $E=F\oplus F^\perp$ (projection orthogonale). Si l'ensemble est infini, $H^\perp=\{0\}$ et son supplémentaire est $E$ tout entier.
:::
:::exo Exo 8-I : endomorphismes normaux
---
**a)** (i)⇒(ii) : $\langle u(x),u(y)\rangle=\langle x,u^*u(y)\rangle=\langle x,uu^*(y)\rangle=\langle u^*(x),u^*(y)\rangle$. (ii)⇒(iii) : $y=x$. (iii)⇒(i) : posons $s=u^*u-uu^*$, hermitien. (iii) dit $\langle x,s(x)\rangle=0$ pour tout $x$ ; par l'identité de polarisation hermitienne, $\langle x,s(y)\rangle=0$ pour tous $x,y$, donc $s=0$.

**b)** $\|u(x)\|=\|u^*(x)\|$ donne $\ker u=\ker u^*$. Or $\ker u^*=(\operatorname{Im}u)^\perp$, donc $E=\operatorname{Im}u\oplus(\operatorname{Im}u)^\perp=\operatorname{Im}u\oplus\ker u$, et la somme est **orthogonale**.
:::
:::exo Exo 8-II, a à d : diagonalisation des normaux
---
**a)** $u-\lambda\,\mathrm{Id}$ est normal (d'adjoint $u^*-\bar\lambda\,\mathrm{Id}$, qui commute avec lui). D'après I-b, $\ker(u-\lambda)=\ker(u^*-\bar\lambda)$ : $E_\lambda(u)=E_{\bar\lambda}(u^*)$, et $\bar\lambda$ est valeur propre de $u^*$. Si $x\in E_\lambda(u)^\perp$ et $y\in E_\lambda(u)$ : $\langle u(x),y\rangle=\langle x,u^*(y)\rangle=\langle x,\bar\lambda y\rangle=0$ : l'orthogonal est stable par $u$ (et de même par $u^*$).

**b)** $x\in E_\lambda$, $y\in E_\mu$ : $\mu\langle x,y\rangle=\langle x,u(y)\rangle=\langle u^*(x),y\rangle=\langle\bar\lambda x,y\rangle=\lambda\langle x,y\rangle$ (semi-linéarité à gauche). Comme $\lambda\ne\mu$, $\langle x,y\rangle=0$.

**c)** ⇐ : une matrice diagonale commute avec sa conjuguée. ⇒ : récurrence sur $\dim E$. Sur $\mathbb C$, $u$ a une valeur propre $\lambda$ ; $E_\lambda^\perp$ est stable par $u$ et $u^*$, la restriction y est normale, on applique l'hypothèse, et on réunit des bases orthonormales. Exemples : hermitiens ($u^*=u$, spectre réel), antihermitiens (spectre imaginaire pur), unitaires (spectre de module 1). Contre-exemple : $\begin{pmatrix}0&1\\0&0\end{pmatrix}$.

**d)** Dans une base orthonormale propre, $u=\operatorname{diag}(a_i)$ et $u^*=\operatorname{diag}(\bar a_i)$. Lagrange donne $P$ avec $P(a_i)=\bar a_i$ sur les valeurs propres distinctes (bien défini : $a_i=a_j\Rightarrow\bar a_i=\bar a_j$). Donc $P(u)=u^*$. **Réciproque vraie** : si $u^*=P(u)$, $u^*$ commute avec $u$.
:::
:::exo Exo 8-II, e et f : trace et produits de normaux
---
**e)** ⇒ : par c, $\operatorname{Tr}(u^*u)=\sum|a_i|^2$. ⇐ : théorème de **Schur** — dans une base orthonormale la matrice de $u$ est triangulaire supérieure $T$, de diagonale $(a_i)$. (Récurrence : prendre un vecteur propre unitaire, compléter, recommencer sur l'orthogonal.) $\operatorname{Tr}(u^*u)=\sum_{i\le j}|t_{ij}|^2=\sum|a_i|^2+\sum_{i<j}|t_{ij}|^2$. L'égalité force $t_{ij}=0$ pour $i<j$ : $T$ est diagonale, $u$ est normal.

**f, premier point.** $w\circ v=0$ signifie $\operatorname{Im}v\subset\ker w$. Comme $v,w$ sont normaux, $\ker v=(\operatorname{Im}v)^\perp$ et $\operatorname{Im}w=(\ker w)^\perp$. En passant aux orthogonaux : $\operatorname{Im}w=(\ker w)^\perp\subset(\operatorname{Im}v)^\perp=\ker v$, donc $v\circ w=0$.

**f, second point.** On utilise e. Pour des endomorphismes d'un espace de dimension finie, $vw$ et $wv$ ont le **même polynôme caractéristique**, donc les mêmes valeurs propres $c_i$. Il suffit de montrer $\operatorname{Tr}\big((vw)^*vw\big)=\operatorname{Tr}\big((wv)^*wv\big)$ :
$$\operatorname{Tr}(w^*v^*vw)=\operatorname{Tr}(v^*v\,ww^*)=\operatorname{Tr}(vv^*\,w^*w)=\operatorname{Tr}(v^*w^*w\,v),$$
en utilisant $\operatorname{Tr}(ab)=\operatorname{Tr}(ba)$, puis $v^*v=vv^*$ et $ww^*=w^*w$, puis à nouveau la cyclicité. Si $wv$ est normal, le membre de droite vaut $\sum|c_i|^2$ ; donc celui de gauche aussi, et $vw$ est normal d'après e.
:::
`);
