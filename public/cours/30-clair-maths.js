EXPLIQUE('topologie', String.raw`
## 1
Avant de dire « cette suite converge » ou « ces deux portefeuilles se ressemblent », il faut un mètre. La **distance** est ce mètre : elle donne un nombre à chaque paire de points. La **norme** est une distance particulière, qui mesure la longueur d'un vecteur. On peut choisir plusieurs mètres (aller en ligne droite, ou en suivant les rues) : en dimension finie ils sont équivalents, ils disent la même chose sur ce qui converge.
- $E$ : l'ensemble des points ; $d(x,y)$ : la distance de $x$ à $y$.
- $\|x\|$ : la longueur de $x$ ; $N_1$ additionne, $N_2$ est Pythagore, $N_\infty$ garde la plus grande coordonnée.

**À retenir** : trois règles (nulle seulement si égaux, symétrique, le détour est plus long).
## 2
Un ensemble est **ouvert** si, où que tu sois dedans, tu peux bouger un peu sans en sortir : il n'a pas de bord. Il est **fermé** s'il contient son bord : on ne peut pas en sortir par une limite. La boule est l'outil de base : tous les points à moins de $r$ d'un centre $a$.
- $B(a,r)$ : boule ouverte ; $B_f$ : fermée ; $S$ : la coque.
- $\delta(A)$ : diamètre, la plus grande distance entre deux points.

**À retenir** : ouvert et fermé ne sont pas des contraires ; on peut n'être ni l'un ni l'autre.
## 3
Imagine un champ clôturé. L'**intérieur**, ce sont les points d'où l'on ne touche pas la clôture ; l'**adhérence**, le champ avec sa clôture ; la **frontière**, la clôture seule. Un ensemble est **dense** s'il s'approche de tout, comme les rationnels dans les réels.
- $\mathring A$ : intérieur ; $\overline A$ : adhérence ; $\operatorname{Fr}A$ : frontière ; $\mathcal V(a)$ : voisinages de $a$.

**À retenir** : intérieur = plus grand ouvert dedans ; adhérence = plus petit fermé autour.
## 4
Une suite **converge** quand ses termes s'approchent d'un point. Elle est **de Cauchy** quand ses termes s'approchent *les uns des autres*, sans qu'on sache vers quoi. Un espace est **complet** s'il n'a pas de trou : toute suite de Cauchy y trouve son point d'arrivée. Les rationnels ont des trous ($\sqrt2$), pas les réels.
- $\varepsilon$ : la précision demandée ; $N$ : le rang à partir duquel elle est atteinte.

**À retenir** : convergente ⇒ Cauchy ⇒ bornée ; la réciproque de la première flèche demande la complétude.
## 5
**Continue** : un petit déplacement en entrée produit un petit déplacement en sortie. **Uniformément continue** : la même précision en entrée suffit partout. **Lipschitzienne** : la pente ne dépasse jamais $k$.
- $\varepsilon$ : tolérance en sortie ; $\eta$ : précision en entrée ; $k$ : pente maximale.

**À retenir** : lipschitzienne ⇒ uniformément continue ⇒ continue. $x^2$ sur $\mathbb R$ casse la deuxième flèche.
## 6
Un **compact** est un ensemble infini qui se comporte comme un ensemble fini : on peut toujours le surveiller avec un nombre fini de caméras. Dans $\mathbb R^n$, c'est simplement « fermé et borné ». Conséquence précieuse : une fonction continue y a toujours un maximum et un minimum.
- $K$ : le compact ; recouvrement : des ouverts qui ensemble contiennent $K$.

**À retenir** : compact = fermé borné **en dimension finie seulement** ; c'est ce qui garantit qu'un optimum existe.
## 7
Près d'un point, une fonction lisse ressemble à une fonction linéaire, comme la Terre paraît plate à nos pieds. La **différentielle** est cette approximation ; la **jacobienne** est le tableau de ses coefficients, les dérivées partielles.
- $df(a)$ : l'approximation linéaire en $a$ ; $h$ : le petit pas ; $\varepsilon(h)$ : l'erreur relative, qui tend vers 0.
- $\frac{\partial f}{\partial x_i}$ : pente dans la direction $i$ ; $J_f$ : tableau des pentes.

**À retenir** : avoir des dérivées partielles ne suffit pas ; il faut qu'elles soient continues.
## 8
Pour trouver un sommet ou un creux, on cherche les endroits où la pente est nulle, puis on regarde la courbure : creux (bol), sommet (dôme) ou col (selle de cheval). **Taylor** fournit la courbure par les dérivées secondes.
- $r,s,t$ : dérivées secondes en $xx$, $xy$, $yy$ ; $q_a$ : la forme quadratique de courbure.

**À retenir** : $rt-s^2>0$ et $r>0$ : minimum ; $r<0$ : maximum ; $rt-s^2<0$ : col.
## 9
Parfois $y$ est caché dans une équation, comme le taux actuariel dans le prix d'une obligation. Le théorème des **fonctions implicites** dit quand on peut écrire $y$ en fonction de $x$, et donne sa dérivée sans résoudre. L'**inversion locale** dit quand on peut revenir en arrière.
- $\varphi$ : la fonction cachée ; $\det J_f$ : le facteur d'agrandissement, qui ne doit pas être nul.

**À retenir** : $\varphi'=-\frac{\partial_xf}{\partial_yf}$, à condition que $\partial_yf\ne0$.
## 10
Une intégrale double additionne une quantité sur une surface ; on la calcule en **balayant** une direction puis l'autre. Changer de coordonnées simplifie le domaine, mais déforme les petits carrés : le **jacobien** corrige cette déformation.
- $dx\,dy$ : petit carré ; $|\det J|$ : le facteur de correction ($r$ en polaires).

**À retenir** : choisir l'ordre le plus simple, puis ne jamais oublier le jacobien.
## 11
On a une intégrale qui dépend d'un réglage $x$. Peut-on faire varier $x$ *sous* le signe somme ? Oui si une même fonction intégrable $g$ contrôle tout. Cela donne de jolis calculs, comme la constante de la loi normale.
- $F(x)$ : l'intégrale vue comme fonction du paramètre ; $g$ : la fonction qui domine.

**À retenir** : trouver $g(t)$ sans $x$, intégrable, qui majore ; alors on dérive sous l'intégrale.
`);
EXPLIQUE('mesure', String.raw`
## 1
Riemann découpe l'axe horizontal ; cela échoue dès que la fonction saute partout. Lebesgue découpe l'axe **vertical** : pour chaque valeur, il demande « sur quelle taille d'ensemble la prend-on ? ». Il faut donc savoir mesurer les ensembles : c'est tout le cours.
- $\mathbf 1_A$ : vaut 1 sur $A$, 0 ailleurs ; $f^+,f^-$ : parties positive et négative.

**À retenir** : Riemann = colonnes ; Lebesgue = couches.
## 2
Une **tribu** est la liste des questions auxquelles on a le droit de répondre (« le résultat est-il dans $A$ ? »). Une **mesure** donne une taille à chacune : longueur, nombre, probabilité. La règle d'or : la taille d'une réunion d'ensembles séparés est la somme des tailles, même s'il y en a une infinité dénombrable.
- $E$ : l'univers ; $\mathcal E$ : la tribu ; $\mu$ : la mesure ; $\sigma$ : « dénombrable ».

**À retenir** : complémentaire et réunions dénombrables restent dans la tribu.
## 3
Vérifier une propriété pour *tous* les ensembles est impossible à la main. Le lemme de **classe monotone** dit : vérifie-la sur des ensembles simples (intervalles), montre qu'elle résiste à deux opérations, et elle est vraie partout. C'est ainsi que l'on prouve qu'une loi est déterminée par sa fonction de répartition.
- $\mathcal A$ : les ensembles simples ; $\sigma(\mathcal A)$ : tout ce qu'ils engendrent.

**À retenir** : deux mesures égales sur les intervalles sont égales.
## 4
On construit l'intégrale en trois marches : d'abord les fonctions en escalier (somme hauteur × taille), puis les positives (par en dessous), enfin les autres (positif moins négatif). En probabilités, c'est l'espérance.
- $\int f\,d\mu$ : la somme pondérée ; $\mathcal L^1$ : fonctions dont $|f|$ a une intégrale finie.

**À retenir** : Markov, $\mu(f\ge\lambda)\le\frac1\lambda\int f$ : une grande valeur ne peut pas être fréquente.
## 5
Peut-on échanger limite et intégrale ? Pas toujours : la masse peut se concentrer, s'étaler ou fuir à l'infini. Trois théorèmes disent quand c'est permis : suite **croissante**, suite **dominée**, ou seulement une inégalité (**Fatou**).
- $f_n\to f$ : convergence en chaque point ; $g$ : la fonction qui domine ; $\liminf$ : plus petite limite possible.

**À retenir** : cherche d'abord un majorant intégrable indépendant de $n$.
## 6
Comment fabriquer la « longueur » de tout ensemble raisonnable ? On recouvre par des intervalles et on prend le meilleur recouvrement. **Carathéodory** garantit que cela donne une vraie mesure. Mais pas pour tous les ensembles : Vitali en fabrique un qui n'a pas de longueur possible.
- $\lambda$ : mesure de Lebesgue (longueur) ; $F_\mu$ : fonction de répartition ; négligeable : de taille nulle.

**À retenir** : une fonction croissante, continue à droite, et une mesure, c'est le même objet.
## 7
Pour calculer un volume, on additionne des tranches, dans l'ordre qu'on veut : **Fubini**. Pour une fonction positive, toujours permis ; sinon, vérifier d'abord que l'intégrale de $|f|$ est finie. Le changement de variables mesure la déformation.
- $\mu\otimes\nu$ : mesure produit (indépendance) ; $\det d\varphi$ : facteur de déformation.

**À retenir** : Tonelli sur $|f|$, puis Fubini sur $f$.
## 8
Une courbe a une longueur, une surface une aire ; et le bord d'un flocon ? La mesure de **Hausdorff** recouvre par de petits morceaux et additionne « taille puissance $d$ ». Un seul $d$ donne un résultat ni nul ni infini : c'est la **dimension**, qui peut ne pas être entière.
- $\mathcal H^d$ : taille en dimension $d$ ; $\dim_H$ : la dimension critique.

**À retenir** : Cantor a pour dimension $\frac{\ln2}{\ln3}\approx0{,}63$.
## 9
On traite des fonctions comme des vecteurs : on leur donne une longueur, parfois un angle. En dimension infinie, la boule n'est plus compacte, mais deux outils sauvent la mise : la **projection** (Hilbert) et le **prolongement** des formes linéaires (Hahn-Banach).
- $E^*$ : les mesures linéaires possibles sur $E$ (dual) ; $\pi(x)$ : point le plus proche ; $F^\perp$ : les vecteurs perpendiculaires.

**À retenir** : dans un Hilbert, toute forme linéaire continue est un produit scalaire.
## 10
$L^p$ rassemble les fonctions dont la puissance $p$ est intégrable : en finance, « avoir un moment d'ordre $p$ ». $L^2$ est le meilleur, car on y projette : l'**espérance conditionnelle** est la projection sur ce que l'on sait.
- $\|f\|_p$ : taille ; $p,q$ conjugués : $\frac1p+\frac1q=1$.

**À retenir** : Hölder borne un produit, Minkowski borne une somme.
## 11
Une **mesure signée** peut être négative (comme un gain moins une perte). **Radon-Nikodym** dit : si $\nu$ ignore tout ce que $\mu$ ignore, alors $\nu$ s'obtient en pondérant $\mu$ par une densité. C'est le passage à la probabilité risque-neutre.
- $\nu\ll\mu$ : absolument continue ; $\nu\perp\mu$ : portées par des ensembles disjoints ; $\frac{d\nu}{d\mu}$ : la densité.

**À retenir** : une mesure = partie à densité + atomes + partie singulière.
## 12
Les 23 premiers exercices rejouent Riemann, puis la boîte à outils de topologie. Le réflexe : pour « il existe », construire ; pour « pour tout », fixer un $\varepsilon$ ; pour « faux », chercher un contre-exemple simple.
- $\tilde{\mathcal T}$ : topologie décrite par les suites ; propre : boules fermées compactes.

**À retenir** : trois énoncés du polycopié sont à corriger (11, 14-2, 23-a) ; ils sont signalés.
## 13
Ici on manipule tribus, mesures et classes monotones. Presque tout se ramène à trois gestes : rendre disjoint, passer au complémentaire, appliquer la classe monotone.
- $\bigsqcup$ : réunion d'ensembles disjoints.

**À retenir** : la famille des ensembles pour lesquels une propriété est vraie est l'objet à étudier.
## 14
On entraîne l'intégrale et les théorèmes de convergence. Avant chaque exercice, demande-toi : croissante, dominée, ou Fatou ?
- $f*g$ : convolution, la moyenne glissante de $g$ pondérée par $f$.

**À retenir** : toute sous-suite a une sous-sous-suite dominée : cela suffit.
## 15
Construction de mesures, Cantor, régularité, Hausdorff. L'idée qui revient : approcher par des compacts de l'intérieur et par des ouverts de l'extérieur.
- $C_\infty$ : ensemble de Cantor ; $N_\varepsilon$ : nombre de boules de rayon $\varepsilon$ nécessaires.

**À retenir** : pour minorer une dimension, trouver une mesure qui ne charge pas trop les petites boules.
## 16
Analyse fonctionnelle et $L^p$ : continuité des formes linéaires, complétude, densité. Pour montrer qu'une forme est discontinue, construis des vecteurs petits dont l'image est grande.
- $\ell_c$ : suites finies ; $\ell^2$ : suites de carré sommable.

**À retenir** : en dimension finie tout est continu ; en dimension infinie, il faut le vérifier.
## 17
Mesures signées, Radon-Nikodym, dualités. L'exercice 119 est le plus utile : la distance en variation totale est deux fois la plus petite probabilité que deux variables couplées diffèrent.
- $\|\mu-\nu\|_{VT}$ : distance entre lois ; $\overset{*}{\to}$ : convergence faible.

**À retenir** : convergence faible (en loi) n'est pas convergence en variation totale.
`);
EXPLIQUE('bilineaire', String.raw`
## 1
Une forme **bilinéaire** est une machine : on lui donne deux vecteurs, elle rend un nombre, et elle respecte les sommes de chaque côté. On la range dans un tableau, sa **matrice**. La covariance en est une.
- $f(x,y)$ : le nombre ; $A$ : la matrice ; $ {}^tX$ : la colonne couchée en ligne ; $P$ : passage d'une base à l'autre.

**À retenir** : changement de base $ {}^tPAP$, pas $P^{-1}AP$.
## 2
Mettre deux fois le même vecteur donne une **forme quadratique** : un polynôme où tout est de degré 2, comme la variance d'un portefeuille. Et on peut revenir en arrière : $q$ détermine $f$.
- $q(x)=f(x,x)$ ; termes carrés : diagonale ; termes rectangles : partagés en deux.

**À retenir** : diviser par 2 les coefficients rectangles en remplissant la matrice.
## 3
Deux vecteurs sont **orthogonaux** si la machine rend 0. Le **noyau** regroupe ceux qui donnent 0 avec tout le monde : ce sont les directions invisibles. Un vecteur **isotrope** donne 0 avec lui-même sans être forcément invisible.
- $A^\perp$ : tout ce qui est orthogonal à $A$ ; $\operatorname{rg}$ : nombre de directions utiles.

**À retenir** : il existe toujours une base orthogonale ; pas toujours une base orthonormale.
## 4
La méthode de **Gauss** réécrit $q$ comme une somme de carrés, en complétant les carrés un par un. On compte ensuite les $+$ et les $-$ : c'est la **signature**, la carte d'identité de la forme.
- $l_i$ : formes linéaires indépendantes ; $(r,s)$ : nombre de $+$ et de $-$.

**À retenir** : terme carré → compléter ; pas de carré → $uv=\frac14[(u+v)^2-(u-v)^2]$.
## 5
Avec une forme positive, on sait mesurer longueurs et angles. **Schwarz** dit qu'un produit scalaire ne dépasse pas le produit des longueurs : donc une corrélation est entre $-1$ et 1. **Minkowski** dit que diversifier ne peut pas augmenter l'écart-type total.
- $\langle x,y\rangle$ : produit scalaire ; $\|x\|$ : longueur.

**À retenir** : orthogonaux non nuls ⇒ indépendants.
## 6
**Projeter**, c'est chercher dans un plan le point le plus proche : on laisse tomber une perpendiculaire. C'est exactement la régression. **Gram-Schmidt** fabrique une base bien carrée en retirant à chaque vecteur son ombre sur les précédents.
- $p_F(x)$ : projeté ; $e'_k$ : vecteur redressé ; $e''_k$ : normalisé.

**À retenir** : le résidu est perpendiculaire à l'espace.
## 7
Une **isométrie** déplace sans déformer : rotations et réflexions. Le déterminant dit si l'orientation est gardée ($+1$) ou renversée ($-1$).
- $O_n$ : toutes les isométries ; $SO_n$ : les rotations ; $\theta$ : l'angle.

**À retenir** : $ {}^tUU=I$ : les colonnes forment une base orthonormée.
## 8
L'**adjoint** fait passer un endomorphisme de l'autre côté du produit scalaire. S'il est égal à lui-même, le **théorème spectral** garantit une base orthonormale où la matrice est diagonale : des axes naturels. C'est l'analyse en composantes principales.
- $f^*$ : adjoint ; $\bar\lambda$ : conjugué ; $\Phi$ : forme hermitienne.

**À retenir** : symétrique réelle ⇒ valeurs propres réelles et axes perpendiculaires.
## 9
Tout le TD est corrigé. Fais-les dans l'ordre : 1 (projection et Laguerre), 2 (Parseval), 3 (dimension infinie), 4 (exponentielle), 5 (automorphisme et projecteur), 6 (polynômes), 7 (spectre), 8 (normaux).
- $\varpi$ : automorphisme ; $u$ normal : $u^*u=uu^*$.

**À retenir** : l'énoncé 1-II-b a perdu un carré ; avec lui, la réponse est $\frac1{n+1}$.
`);
