COURS({
  id: 'bilineaire',
  titre: 'Algèbre bilinéaire',
  fichier: 'Algebre.bilineaire.pdf',
  auteur: 'Adolphe Codjia, édition 2012',
  pages: 37,
  famille: 'Mathématiques',
  resume: 'Formes bilinéaires et quadratiques, réduction de Gauss, signature, espaces euclidiens et hermitiens, Gram-Schmidt, projections, adjoint et théorème spectral.'
}, String.raw`
## Forme bilinéaire et matrice | p. 3-6
:::intuition Pourquoi ce cours existe
Une application **linéaire** transforme un vecteur en vecteur. Une forme **bilinéaire** prend *deux* vecteurs et rend *un nombre*. C'est l'outil qui permet de parler de longueur, d'angle, de perpendiculaire, de distance : le produit scalaire en est le cas le plus célèbre. En finance, la covariance $\operatorname{Cov}(X,Y)$ est une forme bilinéaire symétrique positive, et la variance d'un portefeuille $ {}^t w\,\Sigma\,w$ est une forme quadratique. Tout ce cours s'applique donc directement au risque.
:::
:::def Forme bilinéaire
Soit $E$ un $\mathbb K$-espace vectoriel. Une application $f : E\times E\to\mathbb K$ est **bilinéaire** si elle est linéaire par rapport à chaque variable, l'autre étant fixée :
$$f(\lambda x+x',y)=\lambda f(x,y)+f(x',y),\qquad f(x,\lambda y+y')=\lambda f(x,y)+f(x,y').$$
On note $\mathcal L_2(E)$ l'ensemble de ces formes.
:::
### De la forme à la matrice
Prenons une base $\beta=(e_1,\dots,e_n)$, $x=\sum_i x_ie_i$ et $y=\sum_j y_je_j$. En développant d'abord à gauche, puis à droite :
$$f(x,y)=\sum_{i=1}^n\sum_{j=1}^n x_i\,y_j\,f(e_i,e_j).$$
Il suffit donc de connaître les $n^2$ nombres $a_{ij}=f(e_i,e_j)$. On les range dans $A=\operatorname{Mat}(f,\beta)$.
:::formule Écriture matricielle d'une forme bilinéaire
$$f(x,y)={}^tX\,A\,Y,\qquad a_{ij}=f(e_i,e_j)$$
où $X$ et $Y$ sont les colonnes des coordonnées de $x$ et $y$.
:::
:::exemple Exercice du cours
$E=\mathbb R^2$, $f(x,y)=3x_1y_1+x_1y_2+x_2y_1-x_2y_2$. Le coefficient de $x_iy_j$ est $a_{ij}$, d'où
$$A=\begin{pmatrix}3&1\\1&-1\end{pmatrix},\qquad {}^tXAY=(x_1\ \ x_2)\begin{pmatrix}3y_1+y_2\\y_1-y_2\end{pmatrix}=3x_1y_1+x_1y_2+x_2y_1-x_2y_2.$$
On retrouve bien $f(x,y)$.
:::
:::theo Changement de base
Si $P$ est la matrice de passage de $\beta$ à $\beta'$, alors
$$A'={}^tP\,A\,P.$$
:::
:::preuve
On a $X=PX'$ et $Y=PY'$. Donc $f(x,y)={}^tXAY={}^t(PX')A(PY')={}^tX'\,({}^tPAP)\,Y'$. Comme aussi $f(x,y)={}^tX'A'Y'$ pour **tous** $X',Y'$, les deux matrices sont égales : il suffit de prendre pour $X'$ et $Y'$ les colonnes de la base canonique pour lire chaque coefficient.
:::
:::piege Ne pas confondre avec une application linéaire
Pour un endomorphisme, le changement de base est $A'=P^{-1}AP$. Pour une forme bilinéaire, c'est $ {}^tPAP$. Les deux coïncident **seulement** si $P$ est orthogonale ($ {}^tP=P^{-1}$). Conséquence : le rang de $A$ ne dépend pas de la base, mais son déterminant est multiplié par $(\det P)^2$ et ses valeurs propres changent.
:::

## Formes symétriques et quadratiques | p. 7-9
:::def Forme symétrique
$f$ est **symétrique** si $f(x,y)=f(y,x)$ pour tous $x,y$, ce qui équivaut à $A={}^tA$ dans une base (donc dans toutes). Leur ensemble $\mathcal S_2(E)$ est un sous-espace vectoriel de $\mathcal L_2(E)$.
:::
:::def Forme quadratique
$q:E\to\mathbb K$ est une **forme quadratique** si, dans une base, $q(x)$ est un polynôme homogène de degré 2 en les coordonnées. En particulier $q(\lambda x)=\lambda^2q(x)$. On écrit
$$q(x)=\underbrace{\sum_{i}a_{ii}x_i^2}_{\text{termes carrés}}+\underbrace{2\sum_{i<j}a_{ij}x_ix_j}_{\text{termes rectangles}}={}^tXAX.$$
:::
On suppose $\mathbb K$ de caractéristique différente de 2, c'est-à-dire que l'on a le droit de diviser par 2 (dans $\mathbb Z/2\mathbb Z$, $2=0$ et tout s'effondre).
:::theo Correspondance forme quadratique – forme polaire
L'application $f\mapsto q$, avec $q(x)=f(x,x)$, est un isomorphisme de $\mathcal S_2(E)$ sur l'espace $Q(E)$ des formes quadratiques. L'unique $f$ associée à $q$ s'appelle sa **forme polaire**.
:::
:::preuve
Si $f$ symétrique vérifie $f(x,x)=q(x)$, alors $q(x+y)=f(x+y,x+y)=q(x)+2f(x,y)+q(y)$. On isole $f(x,y)$ : elle est donc **unique**. Réciproquement, la formule trouvée définit bien une forme bilinéaire symétrique avec $f(x,x)=\tfrac12[q(2x)-2q(x)]=\tfrac12[4q(x)-2q(x)]=q(x)$.
:::
:::formule Forme polaire
$$f(x,y)=\tfrac12\big[q(x+y)-q(x)-q(y)\big]$$
:::
:::methode Règle du dédoublement (la méthode rapide)
1. Remplacer chaque $x_i^2$ par $x_iy_i$.
2. Remplacer chaque $2x_ix_j$ par $x_iy_j+x_jy_i$. Autrement dit $x_ix_j\to\tfrac12(x_iy_j+x_jy_i)$.
:::
:::exemple Exercice du cours (matrice et forme polaire)
$q(x)=x_1^2+4x_2^2+x_3^2+4x_1x_2+2x_1x_3+6x_2x_3$. Les carrés vont sur la diagonale ; **la moitié** de chaque coefficient rectangle va de part et d'autre :
$$A=\begin{pmatrix}1&2&1\\2&4&3\\1&3&1\end{pmatrix}$$
$$f(x,y)=x_1y_1+4x_2y_2+x_3y_3+2(x_1y_2+x_2y_1)+(x_1y_3+x_3y_1)+3(x_2y_3+x_3y_2).$$
:::
:::piege L'erreur la plus fréquente
Oublier de **diviser par deux** les coefficients rectangles en remplissant la matrice.
:::

## Orthogonalité, noyau, rang, isotropie | p. 9-12
:::def Vocabulaire
- $x\perp y$ (relativement à $f$) si $f(x,y)=0$.
- $A^\perp=\{x\in E:\ x\perp a\ \ \forall a\in A\}$ : c'est toujours un sous-espace vectoriel, même si $A$ n'en est pas un.
- **Noyau** : $\ker f=E^\perp=\{x:\ f(x,y)=0\ \forall y\}$. $f$ est **non dégénérée** si $\ker f=\{0\}$.
- $x$ est **isotrope** si $q(x)=0$. **Cône isotrope** : $C(q)=\{x:\ q(x)=0\}$.
- $q$ est **définie** si $C(q)=\{0\}$.
- **Rang** : $\operatorname{rg}f=\dim E-\dim\ker f=\operatorname{rg}A$.
:::
:::theo Non dégénérescence
$$f\ \text{non dégénérée}\iff\ker f=\{0\}\iff\operatorname{rg}f=n\iff A\ \text{inversible}.$$
:::
:::piege Noyau et cône isotrope
On a toujours $\ker f\subset C(q)$, car si $x$ est orthogonal à tous, il l'est à lui-même. La réciproque est fausse : pour $q(x)=x_1^2-x_2^2$, $C(q)$ est formé de deux droites alors que $\ker q=\{0\}$. L'égalité $\ker f=C(q)$ a lieu dès que $q$ est de signe constant (c'est une conséquence de l'inégalité de Schwarz).
:::
:::theo Existence d'une base orthogonale
Toute forme bilinéaire symétrique sur $E$ de dimension finie admet une base orthogonale. Version matricielle : pour toute $S$ symétrique, il existe $P$ inversible et $D$ diagonale telles que $S={}^tPDP$.
:::
:::preuve
Récurrence sur la dimension. Dimension 1 : évident. Passage de $n$ à $n+1$ : si $q=0$, toute base convient. Sinon on choisit $e_{n+1}$ avec $q(e_{n+1})\neq0$ et $F=\operatorname{Vect}(e_{n+1})$. $F^\perp$ est le noyau de la forme linéaire non nulle $f(e_{n+1},\cdot)$, donc de dimension $n$ ; et $F\cap F^\perp=\{0\}$ car $q(e_{n+1})\ne0$. Donc $E=F\oplus F^\perp$. L'hypothèse de récurrence donne une base orthogonale de $F^\perp$, que l'on complète par $e_{n+1}$.
:::
Dans une base orthogonale, $A$ est diagonale et tout devient simple :
$$f(x,y)=\sum_{i=1}^r a_{ii}x_iy_i,\qquad q(x)=\sum_{i=1}^r a_{ii}x_i^2,$$
où $r=\operatorname{rg}f$ est le nombre de coefficients diagonaux non nuls : il ne dépend pas de la base choisie.
:::piege Orthogonale ne veut pas dire orthonormale
Une base **orthonormale** (avec $f(e_i,e_i)=1$) n'existe pas toujours : sur $\mathbb R$, si $q(e)=-1$ on ne peut pas normaliser à $+1$. Exemple : $x_1y_1+x_2y_2+x_3y_3-x_4y_4$ sur $\mathbb R^4$ (la forme de la relativité restreinte).
:::

## Positivité, méthode de Gauss, signature | p. 12-14
:::def Signe d'une forme réelle
$q$ est **positive** si $q(x)\ge0$ partout ; **négative** si $q(x)\le0$ partout ; **définie positive** si $q(x)\ge0$ et $q(x)=0\Rightarrow x=0$.
:::
:::def Décomposition en carrés et signature
Toute forme quadratique réelle s'écrit
$$q(x)=d_1\,l_1(x)^2+\dots+d_p\,l_p(x)^2,$$
avec $d_i\neq0$ et $l_1,\dots,l_p$ formes linéaires **linéairement indépendantes**. Alors $p=\operatorname{rg}q$. Si $r$ des $d_i$ sont positifs et $s$ négatifs, la **signature** est $(r,s)$, avec $r+s=p$ (loi d'inertie de Sylvester : elle ne dépend pas de la décomposition).
:::
:::formule Lire le noyau dans la décomposition
$$\ker q=\bigcap_{i=1}^p\ker l_i\qquad f(x,y)=\sum_{i=1}^p d_i\,l_i(x)\,l_i(y)$$
:::
:::methode Algorithme de Gauss
**Cas 1 — il y a un terme carré** $ax^2$, $a\ne0$ : regrouper tout ce qui contient $x$ et compléter le carré :
$$ax^2+2xB(y,z,\dots)=a\Big(x+\tfrac{B}{a}\Big)^2-\tfrac{B^2}{a}.$$
Puis recommencer sur le reste, qui ne contient plus $x$.

**Cas 2 — aucun carré** mais un terme $axy$ : écrire $q=a(x+U)(y+V)+\text{reste}$ (les facteurs sont donnés par $\partial q/\partial x$ et $\partial q/\partial y$), puis utiliser
$$uv=\tfrac14\big[(u+v)^2-(u-v)^2\big].$$
:::
:::exemple Cas 1, exemple du cours
$q(x,y,z)=x^2-y^2+3z^2+4xy+6xz+8yz$.

**Étape 1.** Termes en $x$ : $x^2+2x(2y+3z)=(x+2y+3z)^2-(2y+3z)^2$.

Reste : $-4y^2-12yz-9z^2-y^2+3z^2+8yz=-5y^2-4yz-6z^2$.

**Étape 2.** $-5\big(y^2+\tfrac45yz\big)=-5\big(y+\tfrac25z\big)^2+\tfrac45z^2$.

**Étape 3.** $-6+\tfrac45=-\tfrac{26}5$. D'où
$$q=(x+2y+3z)^2-5\big(y+\tfrac25z\big)^2-\tfrac{26}{5}z^2.$$
Rang 3, signature $(1,2)$, noyau réduit à $\{0\}$ : $q$ est non dégénérée mais ni positive ni négative.
:::
:::exemple Cas 2, exemple du cours
$q=xy+yz+xz$. $\partial_xq=y+z$ et $\partial_yq=x+z$, donc $q=(y+z)(x+z)-z^2$ et
$$q=\tfrac14(x+y+2z)^2-\tfrac14(x-y)^2-z^2,\qquad\text{signature }(1,2).$$
:::
:::exo Réduire la forme $q$ de l'exercice p. 9
$q(x)=x_1^2+4x_2^2+x_3^2+4x_1x_2+2x_1x_3+6x_2x_3$ : donner rang et signature.
---
$(x_1+2x_2+x_3)^2=x_1^2+4x_2^2+x_3^2+4x_1x_2+2x_1x_3+4x_2x_3$. Il reste $2x_2x_3=\tfrac12[(x_2+x_3)^2-(x_2-x_3)^2]$. Donc $q=(x_1+2x_2+x_3)^2+\tfrac12(x_2+x_3)^2-\tfrac12(x_2-x_3)^2$ : rang 3, signature $(2,1)$.
:::
:::piege Indépendance obligatoire
Si vos $l_i$ ne sont pas indépendantes, rang et signature sont faux. L'algorithme de Gauss garantit l'indépendance ; un bricolage « à vue » non.
:::

## Schwarz, Minkowski et espaces euclidiens | p. 14-16
:::theo Inégalité de Schwarz
Si $f$ est bilinéaire symétrique **positive** :
$$[f(x,y)]^2\le f(x,x)\,f(y,y).$$
:::
:::preuve
Pour tout $\lambda\in\mathbb R$ : $0\le f(x+\lambda y,x+\lambda y)=\lambda^2f(y,y)+2\lambda f(x,y)+f(x,x)$.
**Cas $f(y,y)=0$** : la fonction affine $2\lambda f(x,y)+f(x,x)$ reste positive pour tout $\lambda$, ce qui force $f(x,y)=0$.
**Cas $f(y,y)>0$** : trinôme en $\lambda$ toujours positif, donc discriminant réduit $f(x,y)^2-f(x,x)f(y,y)\le0$.
:::
:::theo Inégalité de Minkowski
$$\sqrt{q(x+y)}\le\sqrt{q(x)}+\sqrt{q(y)}.$$
:::
:::preuve
$q(x+y)=q(x)+q(y)+2f(x,y)\le q(x)+q(y)+2\sqrt{q(x)q(y)}=(\sqrt{q(x)}+\sqrt{q(y)})^2$.
:::
:::def Espace euclidien
Un **produit scalaire** est une forme bilinéaire symétrique définie positive, notée $\langle x,y\rangle$. Un **espace euclidien** est un $\mathbb R$-espace de dimension finie muni d'un produit scalaire. $\|x\|=\sqrt{\langle x,x\rangle}$ est une norme (l'inégalité triangulaire est Minkowski). En dimension quelconque, on dit *préhilbertien* ; **hilbertien** si en plus toute suite de Cauchy converge.
:::
:::formule Dans une base orthonormale
$$\langle x,y\rangle=\sum_{i=1}^nx_iy_i,\qquad\|x\|^2=\sum_{i=1}^nx_i^2,\qquad x_i=\langle x,e_i\rangle$$
:::
:::theo Pythagore et liberté
$x\perp y\iff\|x+y\|^2=\|x\|^2+\|y\|^2$. Et toute famille orthogonale de vecteurs **non nuls** est libre.
:::
:::preuve
$\|x+y\|^2=\|x\|^2+\|y\|^2+2\langle x,y\rangle$ donne le premier point. Si $\sum\lambda_ie_i=0$, en prenant le produit scalaire avec $e_j$ il ne reste que $\lambda_j\|e_j\|^2=0$, donc $\lambda_j=0$.
:::
:::exemple Lien avec le risque
Sur les variables aléatoires centrées de carré intégrable, $\langle X,Y\rangle=\operatorname{Cov}(X,Y)$. Schwarz devient $|\operatorname{Cov}(X,Y)|\le\sigma_X\sigma_Y$, donc la corrélation est entre $-1$ et $1$. Minkowski devient $\sigma(X+Y)\le\sigma(X)+\sigma(Y)$ : c'est **la diversification**.
:::

## Projection orthogonale et Gram-Schmidt | p. 15-17
:::theo Projection orthogonale
Soit $F$ un sous-espace (affine) d'un espace euclidien et $a$ un point. Il existe un **unique** $p(a)\in F$ tel que
$$d(a,F)=\inf_{y\in F}\|a-y\|=\|a-p(a)\|,$$
et c'est l'unique point de $F$ tel que $a-p(a)$ soit orthogonal à (la direction de) $F$.
:::
:::formule Projection avec une base orthonormale de $F$
$$p_F(x)=\sum_{i=1}^p\langle x,e_i\rangle\,e_i\qquad\text{(sous-espace affine passant par }h:\ p(a)=h+\sum_i\langle a-h,e_i\rangle e_i)$$
:::
:::preuve
On cherche $x=h+\sum\alpha_ie_i$ avec $(x-a)\perp e_j$ pour tout $j$ : $\langle h-a,e_j\rangle+\alpha_j=0$, soit $\alpha_j=\langle a-h,e_j\rangle$. Pour tout autre point $p(a)+x_0$ de $F$, Pythagore donne $\|a-p(a)-x_0\|^2=\|a-p(a)\|^2+\|x_0\|^2>\|a-p(a)\|^2$.
:::
:::formule Projecteur et symétrie
$$p\circ p=p,\quad\operatorname{Im}p=F,\quad\ker p=F^\perp,\qquad s_F=2p_F-\mathrm{Id},\quad s_F\circ s_F=\mathrm{Id}$$
:::
:::intuition La projection, c'est la régression
Les moindres carrés ordinaires projettent le vecteur $y$ sur l'espace engendré par les colonnes de $X$ : $\hat y=X({}^tXX)^{-1}{}^tX\,y$. L'orthogonalité du résidu donne les équations normales. L'espérance conditionnelle est la même idée dans $L^2$.
:::
:::methode Gram-Schmidt
Partant d'une base $(e_1,\dots,e_n)$ : $e'_1=e_1$, puis
$$e'_k=e_k-\sum_{i=1}^{k-1}\frac{\langle e'_i,e_k\rangle}{\|e'_i\|^2}\,e'_i,\qquad\text{enfin}\quad e''_k=\frac{e'_k}{\|e'_k\|}.$$
En mots : à chaque nouveau vecteur, on **retire son ombre** sur les précédents, puis on normalise.
:::
:::exo TD, exo 1-III-a : orthonormaliser $(1,1,1),(1,0,1),(0,1,1)$
---
$e'_1=(1,1,1)$, $\|e'_1\|^2=3$.
$e'_2=(1,0,1)-\tfrac23(1,1,1)=\tfrac13(1,-2,1)$ ; on garde la direction $(1,-2,1)$, de norme² 6.
$e'_3=(0,1,1)-\tfrac23(1,1,1)-\tfrac{-1}{6}(1,-2,1)=\big(-\tfrac12,0,\tfrac12\big)$.
Base orthonormale : $\tfrac1{\sqrt3}(1,1,1)$, $\tfrac1{\sqrt6}(1,-2,1)$, $\tfrac1{\sqrt2}(-1,0,1)$.
:::
:::exo TD, exo 1-I : projection dans $M_2(\mathbb R)$
Avec $\langle A,B\rangle=\operatorname{tr}({}^tAB)$ et $F=\Big\{\begin{pmatrix}a&b\\b&-a\end{pmatrix}\Big\}$, trouver $F^\perp$ et projeter $B=\begin{pmatrix}1&0\\1&0\end{pmatrix}$.
---
$\operatorname{tr}({}^tAB)=\sum a_{ij}b_{ij}$ : c'est le produit scalaire canonique de $\mathbb R^4$. $F=\operatorname{Vect}(U,V)$, $U=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$, $V=\begin{pmatrix}0&1\\1&0\end{pmatrix}$, orthogonaux, de norme² 2. $M\perp U$ donne $m_{11}=m_{22}$, $M\perp V$ donne $m_{12}=-m_{21}$, donc $F^\perp=\operatorname{Vect}\Big(I_2,\begin{pmatrix}0&1\\-1&0\end{pmatrix}\Big)$. $\langle B,U\rangle=1$, $\langle B,V\rangle=1$, donc $p_F(B)=\tfrac12U+\tfrac12V=\tfrac12\begin{pmatrix}1&1\\1&-1\end{pmatrix}$.
:::

## Endomorphismes et matrices orthogonaux | p. 17-20
:::def Endomorphisme orthogonal (isométrie)
$u\in\mathcal L(\mathbb R^n)$ est orthogonal si $\langle u(x),u(y)\rangle=\langle x,y\rangle$ pour tous $x,y$ ; c'est équivalent à $\|u(x)\|=\|x\|$ pour tout $x$. Ils forment le **groupe orthogonal** $O(\mathbb R^n)$.
:::
:::theo Caractérisations d'une matrice orthogonale
$U\in O_n(\mathbb R)$ équivaut à chacune de ces propriétés : $ {}^tUU=I_n$ ; $U\,{}^tU=I_n$ ; les **colonnes** forment une base orthonormée ; les **lignes** forment une base orthonormée ; $U$ représente une isométrie dans une base orthonormée.
:::
:::formule Déterminant et valeurs propres
$$(\det U)^2=1\Rightarrow\det U=\pm1\qquad\operatorname{Sp}_{\mathbb R}(U)\subset\{-1,1\}$$
$\det=1$ : **rotation** ($SO_n$). $\det=-1$ : antidéplacement.
:::
$$SO_2(\mathbb R)=\left\{\begin{pmatrix}\cos\theta&-\sin\theta\\\sin\theta&\cos\theta\end{pmatrix},\ \theta\in\mathbb R\right\}$$
:::theo Sous-espaces stables
Si $F$ est stable par $u$ orthogonal, alors $u(F)=F$ et $F^\perp$ est aussi stable. $\ker(u-\mathrm{Id})\perp\ker(u+\mathrm{Id})$. $u$ est diagonalisable **ssi** c'est une symétrie orthogonale.
:::
:::formule Réflexion échangeant deux vecteurs unitaires $a\ne b$
$$S_{a,b}(x)=x-2\langle x,e\rangle\,e,\qquad e=\frac{a-b}{\|a-b\|}$$
:::
### Classification en petite dimension
| Dimension | Valeurs propres réelles | Nature | $\det$ |
|---|---|---|---|
| 2 | aucune | rotation d'angle $\theta\not\equiv0\,[\pi]$ | 1 |
| 2 | $1$ seulement | $\mathrm{Id}$ | 1 |
| 2 | $-1$ seulement | $-\mathrm{Id}$ | 1 |
| 2 | $1$ et $-1$ | réflexion par rapport à $E_1$ | $-1$ |
| 3 | $1$, $E_1=E$ | $\mathrm{Id}$ | 1 |
| 3 | $1$, $E_1$ droite | rotation d'axe $E_1$ | 1 |
| 3 | $-1$, $E_{-1}=E$ | $-\mathrm{Id}$ | $-1$ |
| 3 | $-1$, $E_{-1}$ droite | rotation d'axe $E_{-1}$ composée avec la réflexion par rapport à $E_{-1}^\perp$ | $-1$ |
| 3 | $1$ (plan) et $-1$ | réflexion par rapport à $E_1$ | $-1$ |
| 3 | $1$ (droite) et $-1$ | demi-tour d'axe $E_1$ | 1 |

## Adjoint, formes hermitiennes, théorème spectral | p. 20-33
:::def Adjoint
$f^*$ est l'**adjoint** de $f$ si $\langle f(x),y\rangle=\langle x,f^*(y)\rangle$ pour tous $x,y$. Il est unique ; en dimension finie il existe toujours, et dans une base **orthonormale** $\operatorname{Mat}(f^*)={}^t\operatorname{Mat}(f)$ (réel) ou $ {}^t\overline{\operatorname{Mat}(f)}$ (complexe).
:::
:::formule Règles de calcul de l'adjoint
$$(\lambda f+g)^*=\bar\lambda f^*+g^*,\quad(g\circ f)^*=f^*\circ g^*,\quad f^{**}=f,\quad\ker f^*=(\operatorname{Im}f)^\perp,\quad\operatorname{Im}f^*=(\ker f)^\perp$$
(Dans le cas réel, $\bar\lambda=\lambda$. $\ker$ et $\operatorname{Im}$ : en dimension finie.)
:::
$u$ est **auto-adjoint** (symétrique / hermitien) si $u^*=u$, **antisymétrique** (antihermitien) si $u^*=-u$. Projections et symétries orthogonales sont auto-adjointes.
### Passer au complexe
:::def Forme sesquilinéaire hermitienne
Sur un $\mathbb C$-espace, $\varphi$ est linéaire en $y$ et **semi-linéaire** en $x$ : $\varphi(\lambda x+x',y)=\bar\lambda\varphi(x,y)+\varphi(x',y)$. Elle est hermitienne si $\varphi(x,y)=\overline{\varphi(y,x)}$, donc $\Phi(x)=\varphi(x,x)$ est **réel**.
:::
:::formule Dictionnaire réel → complexe
$$\varphi(x,y)={}^t\overline X\,A\,Y,\qquad{}^t\overline A=A,\qquad A'={}^t\overline P\,A\,P$$
$$\varphi(x,y)=\tfrac14\big[\Phi(x+y)-\Phi(x-y)-i\,\Phi(x+iy)+i\,\Phi(x-iy)\big]$$
$$\Phi(x)=\sum_id_i|l_i(x)|^2,\ d_i\in\mathbb R\qquad u\bar v+\bar uv=\tfrac12\big(|u+v|^2-|u-v|^2\big)$$
$$|\varphi(x,y)|^2\le\varphi(x,x)\,\varphi(y,y)$$
:::
:::piege Deux coquilles à corriger dans le polycopié
1. Page 22, $\mathcal{SH}(E)$ est un espace sur $\mathbb R$ mais **pas** sur $\mathbb C$ : multiplier par $i$ détruit la symétrie hermitienne.
2. Page 31, pour $M$ **unitaire** le cours écrit $\det M\in\{-1,1\}$. Le calcul donne $|\det M|^2=1$, donc $\det M$ est un complexe de module 1 (par exemple $\operatorname{diag}(i,1)$ est unitaire de déterminant $i$). De même, la trace, le déterminant et le spectre de $f^*$ sont les **conjugués** de ceux de $f$.
:::
:::exemple Gauss hermitien, exemple du cours
$\Phi=x\bar x+3y\bar y+6z\bar z+(i\bar xy-ix\bar y)-(2\bar xz+2x\bar z)$ devient
$$\Phi=|x+iy-2z|^2+2|y-iz|^2.$$
Rang 2, signature $(2,0)$ ; le noyau est donné par $y=iz$, $x=2z-iy=3z$, soit $\operatorname{Vect}(3,i,1)$.
:::
:::theo Théorème spectral
Un opérateur **auto-adjoint** d'un espace hermitien (ou euclidien) a toutes ses valeurs propres **réelles**, est **diagonalisable dans une base orthonormale**, et ses sous-espaces propres sont deux à deux orthogonaux.
:::
:::preuve
Récurrence sur $\dim E$. Soit $E_1$ un sous-espace propre et $F_1=E_1^\perp$. Si $x\in E_1$, $y\in F_1$ : $\langle\varphi(y),x\rangle=\langle y,\varphi(x)\rangle=\lambda_1\langle y,x\rangle=0$, donc $F_1$ est stable. La restriction à $F_1$ est encore auto-adjointe : on lui applique l'hypothèse. Réunir les bases donne une base orthonormale de vecteurs propres. La matrice y est diagonale et hermitienne, donc à coefficients réels.
:::
:::exemple Application : composantes principales
Une matrice de covariance $\Sigma$ est symétrique positive : $\Sigma=Q\,\operatorname{diag}(\lambda_1,\dots,\lambda_n)\,{}^tQ$ avec $\lambda_i\ge0$ et $Q$ orthogonale. Les colonnes de $Q$ sont les facteurs de risque non corrélés, $\lambda_i$ leur variance.
:::
:::def Matrice unitaire, endomorphisme normal
$U$ **unitaire** : $ {}^t\overline UU=I_n$. $u$ **normal** : $u^*u=uu^*$, ce qui équivaut à $\|u(x)\|=\|u^*(x)\|$ pour tout $x$, et à l'existence d'une base orthonormale de diagonalisation (sur $\mathbb C$).
:::
:::exo TD exo 7 : spectre d'une matrice hermitienne
Montrer qu'il est réel ; que dire si elle est positive, définie positive ?
---
Si $AX=\lambda X$ avec $X\ne0$ : $ {}^t\overline XAX=\lambda\|X\|^2$. Le membre de gauche est réel car égal à son conjugué (puisque $ {}^t\overline A=A$), donc $\lambda$ est réel. Si $A$ est positive, $\lambda=\frac{{}^t\overline XAX}{\|X\|^2}\ge0$ ; définie positive : $\lambda>0$.
:::
:::exo TD exo 2 : $\|x\|^2=\sum\langle x,e_i\rangle^2$ pour tout $x$ ($n$ vecteurs non nuls)
---
**Base** : on suppose $\dim E=n$ à établir. Si $x\perp$ tous les $e_i$, alors $\|x\|^2=0$, donc $(e_i)$ engendre $E$. **Polarisation** : appliquer l'identité à $x+y$ et soustraire donne $\langle x,y\rangle=\sum\langle x,e_i\rangle\langle y,e_i\rangle$. **Gram** : avec $x=e_i,y=e_j$, $G_{ij}=\sum_kG_{ik}G_{jk}=(G^2)_{ij}$, donc $G^2=G$. Attention : sans hypothèse $\dim E=n$, une telle famille (« repère de Parseval ») peut être liée. L'énoncé suppose que $E$ est de dimension $n$ ; alors $(e_i)$ génératrice de $n$ vecteurs est une base, $G$ est inversible et $G^2=G$ donne $G=I_n$ : la famille est **orthonormale**.
:::

## QUIZ
? Comment se transforme la matrice d'une forme bilinéaire lors d'un changement de base de matrice $P$ ?
- $P^{-1}AP$
+ $ {}^tPAP$
- $PA\,{}^tP^{-1}$
- $PAP$
> $f(x,y)={}^tXAY$ avec $X=PX'$ : on obtient $ {}^tX'({}^tPAP)Y'$.
? Dans $q=x^2+6xy+2y^2$, quel est le coefficient $a_{12}$ de la matrice symétrique ?
- 6
+ 3
- 2
- 12
> On partage le coefficient rectangle en deux : $6=2a_{12}$.
? Quelle est la signature de $xy+yz+xz$ ?
- $(3,0)$
- $(2,1)$
+ $(1,2)$
- $(1,1)$
> $\frac14(x+y+2z)^2-\frac14(x-y)^2-z^2$ : un plus, deux moins.
? Quelle affirmation est vraie ?
- $C(q)\subset\ker q$ toujours
+ $\ker q\subset C(q)$ toujours
- $\ker q=C(q)$ toujours
- Les deux sont disjoints
> Un vecteur du noyau est orthogonal à tous, donc à lui-même. Pour $x^2-y^2$ l'inclusion est stricte.
? L'inégalité de Schwarz $f(x,y)^2\le f(x,x)f(y,y)$ exige que $f$ soit…
- seulement symétrique
+ symétrique positive
- non dégénérée
- antisymétrique
> C'est la positivité du trinôme en $\lambda$ qui fournit l'inégalité.
? Que vaut $p_F(x)$ si $(e_1,\dots,e_p)$ est une base **orthonormée** de $F$ ?
+ $\sum\langle x,e_i\rangle e_i$
- $\sum\langle x,e_i\rangle$
- $x-\sum\langle x,e_i\rangle e_i$
- $\sum\|e_i\|x$
> La troisième expression est la projection sur $F^\perp$.
? Une matrice unitaire complexe a un déterminant…
- égal à 1
- égal à $\pm1$
+ de module 1
- réel positif
> $|\det M|^2=1$ ; $\operatorname{diag}(i,1)$ a pour déterminant $i$.
? Une isométrie de $\mathbb R^3$ a pour valeurs propres $1$ (droite) et $-1$ (plan). C'est…
- une réflexion
+ un demi-tour
- $-\mathrm{Id}$
- impossible
> Déterminant $1\times(-1)^2=1$ : rotation d'angle $\pi$ autour de $E_1$.
? Que dit le théorème spectral ?
- Toute matrice est diagonalisable
- Toute matrice orthogonale est diagonalisable sur $\mathbb R$
+ Tout auto-adjoint est diagonalisable en base orthonormale, à valeurs propres réelles
- Les valeurs propres d'un auto-adjoint sont positives
> La positivité demande une hypothèse supplémentaire.

## CARTES
Matrice d'une forme bilinéaire :: $a_{ij}=f(e_i,e_j)$ et $f(x,y)={}^tXAY$
Forme polaire de $q$ :: $f(x,y)=\frac12[q(x+y)-q(x)-q(y)]$
Règle du dédoublement :: $x_i^2\to x_iy_i$ ; $2x_ix_j\to x_iy_j+x_jy_i$
Noyau de $f$ :: $E^\perp=\{x:f(x,y)=0\ \forall y\}$
Rang de $f$ :: $\dim E-\dim\ker f=\operatorname{rg}A$
Signature :: (nombre de $d_i>0$, nombre de $d_i<0$) dans une décomposition en carrés indépendants
Astuce de Gauss sans carré :: $uv=\frac14[(u+v)^2-(u-v)^2]$
Gram-Schmidt :: $e'_k=e_k-\sum_{i<k}\frac{\langle e'_i,e_k\rangle}{\|e'_i\|^2}e'_i$
Symétrie orthogonale :: $s_F=2p_F-\mathrm{Id}$
Adjoint :: $\langle f(x),y\rangle=\langle x,f^*(y)\rangle$
Forme hermitienne :: $\varphi(x,y)=\overline{\varphi(y,x)}$, linéaire en $y$, semi-linéaire en $x$

## PODCAST Mesurer des angles entre n'importe quoi
A: Bonjour et bienvenue. Aujourd'hui, l'algèbre bilinéaire. Kofi, si je te dis « produit scalaire », tu penses à quoi ?
B: Aux flèches du lycée, et à l'angle droit quand le résultat fait zéro.
A: C'est exactement le point de départ. Le cours d'Adolphe Codjia se demande : que reste-t-il du produit scalaire si on ne garde que sa règle de calcul ? Ce qui reste, c'est la forme bilinéaire. Elle prend deux vecteurs, elle rend un nombre, et elle est linéaire de chaque côté.
B: Et on la met dans une matrice ?
A: Oui. La case ligne i, colonne j, c'est la valeur de la forme sur les vecteurs de base e i et e j. Ensuite, f de x, y vaut transposée de X, fois A, fois Y.
B: Et quand on change de base ?
A: Transposée de P, fois A, fois P. Surtout pas P moins un, A, P. Ça, c'est pour les applications linéaires. C'est le premier piège d'examen.
B: D'accord. Et la forme quadratique ?
A: Tu mets le même vecteur des deux côtés. q de x égale f de x, x. On obtient un polynôme de degré deux. Et réciproquement, on retrouve f par la forme polaire : un demi de q de x plus y, moins q de x, moins q de y.
B: En pratique, pour remplir la matrice ?
A: Les carrés sur la diagonale. Et chaque coefficient rectangle, tu le coupes en deux, moitié au-dessus, moitié en dessous. Six x y donne trois et trois.
B: Arrive ensuite la méthode de Gauss. Je m'y perds toujours.
A: Il n'y a que deux cas. Premier cas : il existe un carré, disons x carré. Tu ramasses tous les termes où x apparaît, tu complètes le carré, tu corriges, et x disparaît du reste. Tu recommences. Deuxième cas : aucun carré, seulement des produits. Alors tu utilises : u fois v égale un quart de, u plus v au carré, moins u moins v au carré.
B: Et à la fin je compte les signes ?
A: Oui. Le nombre de plus et le nombre de moins, c'est la signature. Leur somme, c'est le rang. Et ce résultat ne dépend pas du chemin suivi : c'est la loi d'inertie de Sylvester.
B: À quoi cela sert dans nos études de risque ?
A: À tout ! La covariance est une forme bilinéaire symétrique positive. La variance d'un portefeuille, c'est la forme quadratique transposée de w, Sigma, w. L'inégalité de Schwarz te dit que la corrélation est entre moins un et un. Et l'inégalité de Minkowski te dit que l'écart-type d'une somme est inférieur à la somme des écarts-types.
B: Mais c'est la diversification !
A: Exactement. Maintenant, la projection orthogonale. Le point d'un sous-espace le plus proche de toi, c'est le pied de la perpendiculaire. Si on a une base orthonormée, la projection de x, c'est la somme des produits scalaires de x avec chaque e i, fois e i.
B: Et la régression linéaire, c'est ça ?
A: C'est ça. Le vecteur ajusté est la projection des observations sur l'espace des variables explicatives.
B: Et Gram-Schmidt ?
A: Une recette : à chaque nouveau vecteur, tu retires son ombre sur les précédents, puis tu mets la longueur à un.
B: Dernier grand moment : le théorème spectral.
A: Un endomorphisme égal à son adjoint a des valeurs propres réelles, et se diagonalise dans une base orthonormale. Pour une matrice de covariance, les vecteurs propres sont les facteurs de risque non corrélés. C'est l'analyse en composantes principales.
B: Et dans le cas complexe ?
A: On ajoute des barres de conjugaison sur le premier vecteur, pour que la forme évaluée en x, x reste réelle. Et attention à une coquille du polycopié : une matrice unitaire a un déterminant de module un, pas forcément plus ou moins un.
B: Si je dois retenir trois choses ?
A: Un : transposée de P, A, P. Deux : Gauss, deux cas, puis compter les signes. Trois : auto-adjoint implique diagonalisable en base orthonormale avec des valeurs propres réelles. Fais le quiz, et à bientôt !
`);
