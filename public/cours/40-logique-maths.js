LOGIQUE('topologie', String.raw`
## 1
p Dire « proche » ne veut rien dire tant qu'on n'a pas choisi comment mesurer.
i Garder de la distance usuelle seulement les trois règles dont les preuves se servent vraiment.
d Toute fonction qui respecte ces règles est une distance ; les théorèmes valent alors pour des points, des fonctions, des lois.
s Sans l'inégalité triangulaire, deux points proches d'un même troisième pourraient être très éloignés : la notion de limite s'effondre.
e On sait mesurer l'écart ; il faut maintenant décrire les ensembles où l'on peut bouger.
## 2
p Pour parler de limite ou de dérivée en un point, il faut pouvoir s'en approcher de tous les côtés.
i Demander qu'une petite boule autour du point reste dans l'ensemble.
d Les ouverts sont les ensembles « sans bord » ; leurs complémentaires, les fermés, gardent leurs limites.
s Avec une intersection infinie d'ouverts, les rayons peuvent tendre vers 0 : il ne reste parfois qu'un point. D'où le mot « finie ».
e Un ensemble quelconque n'est souvent ni l'un ni l'autre : on va l'encadrer.
## 3
p Que faire d'un ensemble ni ouvert ni fermé, comme $[0,1[$ ?
i L'encadrer par le plus grand ouvert dedans et le plus petit fermé autour.
d La différence est la frontière : elle mesure exactement ce qui manque pour être ouvert ou fermé.
s Si un ensemble est dense, son adhérence est tout l'espace : approcher suffit, sans jamais atteindre.
e « S'approcher » se décrit concrètement avec des suites.
## 4
p Comment savoir qu'une suite converge si l'on ne connaît pas sa limite ?
i Regarder si les termes se rapprochent entre eux plutôt que d'une cible.
d Dans un espace complet, cela suffit : c'est ainsi que l'on prouve l'existence d'une solution sans la calculer.
s Dans $\mathbb Q$, la suite se resserre autour d'un trou : elle est de Cauchy mais n'a pas de limite.
e Après les points, on étudie les fonctions qui respectent la proximité.
## 5
p Quand puis-je remplacer une donnée par une valeur approchée sans fausser le résultat ?
i Exiger qu'une petite erreur en entrée donne une petite erreur en sortie.
d Selon que la précision dépend du point ou non, on obtient la continuité ou l'uniforme continuité ; une pente bornée donne les deux.
s Pour $x^2$, la pente grandit sans limite : aucune précision unique ne convient partout.
e Quel type d'ensemble rend la continuité automatiquement uniforme ?
## 6
p Une fonction continue atteint-elle son minimum ? Pas sur $]0,1[$, où $x$ s'approche de 0 sans l'atteindre.
i Chercher les ensembles d'où rien ne peut s'échapper : ni vers un bord manquant, ni vers l'infini.
d En dimension finie : fermé et borné. Toute suite y a une sous-suite qui converge, donc l'optimum existe.
s Retire « fermé » : l'optimum est sur le bord absent. Retire « borné » : il fuit à l'infini.
e L'optimum existe ; pour le trouver, il faut dériver.
## 7
p Une fonction de plusieurs variables est trop compliquée pour être étudiée d'un coup.
i La remplacer, près d'un point, par la fonction linéaire la plus proche.
d Cette approximation est la différentielle ; la composition devient un produit de matrices.
s Les dérivées partielles ne regardent que les axes : une fonction peut être sage sur les axes et sauter en diagonale.
e L'ordre 1 dit la pente ; l'ordre 2 dira la forme.
## 8
p Pente nulle : sommet, creux ou col ?
i Aller un cran plus loin dans l'approximation : les dérivées secondes.
d Près du point critique, la fonction se comporte comme une forme quadratique ; son signe donne la réponse.
s Si la forme est nulle dans une direction, l'ordre 2 se tait : les termes suivants décident.
e On sait dériver une fonction connue ; et une fonction cachée dans une équation ?
## 9
p L'équation $f(x,y)=0$ définit-elle $y$ en fonction de $x$ ?
i Remplacer $f$ par son approximation linéaire : une équation linéaire se résout si le coefficient de $y$ n'est pas nul.
d La même condition suffit pour la vraie équation, localement ; et la dérivée en découle.
s Sur le cercle, au point $(1,0)$, le coefficient de $y$ est nul : deux valeurs de $y$ partent du même $x$.
e Après dériver, intégrer en plusieurs variables.
## 10
p Comment additionner une quantité sur une surface avec des outils à une variable ?
i Découper en bandes, intégrer chaque bande, puis additionner les bandes.
d L'ordre n'importe pas (Fubini) ; un bon changement de coordonnées redresse le domaine, au prix d'un facteur d'aire.
s Oublier le jacobien, c'est compter chaque petit carré déformé comme s'il avait gardé sa taille.
e Et si l'intégrale dépend d'un réglage ?
## 11
p Dériver une intégrale par rapport à un paramètre : peut-on entrer sous le signe somme ?
i Contrôler toutes les valeurs du paramètre par une seule fonction intégrable.
d Alors aucune masse ne s'échappe quand le paramètre bouge, et l'échange est permis.
s Sans majorant commun, un pic peut se déplacer avec le paramètre et l'échange donne un faux résultat.
e C'est exactement la question centrale de la théorie de la mesure.
`);
LOGIQUE('mesure', String.raw`
## 1
p Une limite de fonctions simples peut ne plus être intégrable au sens de Riemann.
i Ne plus découper l'axe des $x$, mais celui des valeurs.
d Il suffit alors de savoir « quelle taille a l'ensemble où $f$ vaut à peu près cela » : il faut une mesure.
s Avec Riemann, $\mathbf 1_{\mathbb Q}$ oscille dans chaque bande, si fine soit-elle ; avec Lebesgue, elle vaut 1 sur un ensemble de taille 0 : intégrale 0.
e Quels ensembles a-t-on le droit de mesurer ?
## 2
p On voudrait mesurer toutes les parties ; c'est impossible sans contradiction.
i Se limiter à une famille stable par les opérations utiles : complémentaire et réunions dénombrables.
d Sur cette tribu, l'additivité dénombrable suffit à donner continuité, croissance et toutes les formules.
s Si l'additivité portait sur des réunions non dénombrables, $[0,1]$, réunion de points de longueur 0, aurait une longueur nulle.
e Une tribu est énorme : comment prouver quelque chose sur tous ses éléments ?
## 3
p On ne sait pas décrire un borélien général.
i Ne jamais le décrire : montrer que l'ensemble des bons boréliens absorbe tout ce que les intervalles engendrent.
d Une propriété vraie sur les intervalles et stable par deux opérations est vraie partout.
s Si la famille de départ n'est pas stable par intersection, deux lois différentes peuvent coïncider dessus.
e Les ensembles étant maîtrisés, passons aux fonctions.
## 4
p Comment définir l'intégrale d'une fonction quelconque à partir de la taille des ensembles ?
i Commencer par ce qui est évident (hauteur fois taille) et monter par approximation croissante.
d Étagées, puis positives, puis signées : chaque marche n'utilise que la précédente.
s Sans la condition $\int|f|<\infty$, on tomberait sur $\infty-\infty$.
e L'intégrale est construite par limites : se comporte-t-elle bien avec elles ?
## 5
p $\lim\int f_n$ et $\int\lim f_n$ diffèrent parfois.
i Comprendre où part la masse : pic, étalement, fuite.
d Croissance ou domination interdisent ces trois fuites ; sans elles, il reste l'inégalité de Fatou.
s $n\mathbf 1_{]0,1/n]}$ garde une intégrale 1 et tend vers 0 : aucun majorant intégrable.
e Reste à prouver que la mesure « longueur » existe vraiment.
## 6
p On connaît la longueur des intervalles ; comment l'étendre aux ensembles compliqués ?
i Recouvrir au mieux par des intervalles, puis garder les ensembles qui découpent proprement tous les autres.
d Ces bons ensembles forment une tribu où la longueur est une vraie mesure, unique.
s Avec l'axiome du choix, on fabrique un ensemble qui ne coupe pas proprement : il n'a pas de longueur.
e Et en plusieurs dimensions ?
## 7
p Aire, volume, loi d'un couple : comment les obtenir à partir d'une dimension ?
i Mesurer tranche par tranche.
d La mesure produit existe, est unique, et l'ordre des tranches est indifférent si tout est positif ou intégrable.
s Sans intégrabilité, l'ordre change le résultat ($\pm\frac\pi4$), comme réordonner une série non absolument convergente.
e Les tranches mesurent les objets de dimension entière ; et les autres ?
## 8
p Une courbe a une aire nulle et une longueur ; un ensemble de Cantor a une longueur nulle : comment le mesurer ?
i Compter des petits morceaux de taille $\varepsilon$ avec le poids $\varepsilon^d$, et chercher le bon $d$.
d Trop grand : 0. Trop petit : infini. Le seuil est la dimension.
s Si l'on n'obligeait pas les morceaux à devenir petits, un seul gros morceau suffirait et la structure fine disparaîtrait.
e On quitte les ensembles pour les espaces de fonctions.
## 9
p On veut faire de la géométrie avec des fonctions, en dimension infinie.
i Garder norme, produit scalaire et complétude ; remplacer la compacité perdue.
d Projection et Hahn-Banach redonnent les outils de la dimension finie ; la convergence faible-* redonne de la compacité.
s Sans complétude, la projection peut ne pas exister : la suite qui s'approche tombe dans un trou.
e Quels espaces de fonctions concrets ont ces propriétés ?
## 10
p Quelles fonctions mesurer, et avec quelle norme ?
i Contrôler l'intégrale de la puissance $p$, et identifier les fonctions égales presque partout.
d On obtient des espaces complets ; pour $p=2$, une géométrie où l'espérance conditionnelle est une projection.
s Sans l'identification, une fonction non nulle sur un point aurait une norme nulle.
e Les formes linéaires sur ces espaces sont des mesures signées.
## 11
p Comment comparer deux mesures, ou changer de probabilité ?
i Chercher une fonction qui transforme l'une en l'autre par pondération.
d Elle existe dès que la seconde ignore ce que la première ignore ; le reste est porté ailleurs.
s $\delta_0$ n'a pas de densité par rapport à la longueur : elle charge un point que la longueur ignore.
e Les exercices vérifient que tu sais refaire ces gestes seul.
## 12
p Un énoncé abstrait arrive : par où commencer ?
i Traduire chaque mot par sa définition avec ses quantificateurs.
d La traduction montre presque toujours quoi construire : un $\delta$, une suite, une sous-suite.
s Si tu n'arrives pas à prouver, cherche un contre-exemple : trois énoncés du polycopié sont vraiment faux.
e Même méthode, avec des tribus.
## 13
p Prouver une égalité entre deux tribus ou deux mesures.
i Double inclusion sur les générateurs ; unicité par classe monotone.
d On ne manipule jamais un élément général de la tribu.
s Oublier la finitude ruine les soustractions : $\infty-\infty$.
e Passons aux intégrales.
## 14
p Calculer une limite d'intégrales ou dériver sous l'intégrale.
i Chercher le majorant d'abord, le calcul ensuite.
d Le théorème se choisit tout seul : croissant, dominé, ou Fatou.
s L'exercice 56 montre que la domination n'est pas nécessaire : on peut converger sans elle.
e On construit maintenant les mesures elles-mêmes.
## 15
p Mesurer un objet irrégulier : Cantor, Koch, un ensemble de Vitali.
i Majorer par un recouvrement explicite, minorer par une mesure bien répartie.
d Les deux bornes se rejoignent : c'est la preuve.
s Une seule des deux bornes ne prouve rien : recouvrir mal donne une dimension trop grande.
e Retour aux espaces de fonctions.
## 16
p Montrer qu'un objet est continu, fermé, complet, dense.
i Pour la continuité, une inégalité ; pour la discontinuité, une suite de vecteurs unitaires dont l'image explose.
d La densité permet ensuite de ne prouver que sur les objets simples.
s L'exercice 97 montre le danger : restreindre à un sous-espace non dense perd de l'information.
e Dernière famille : les mesures comme vecteurs.
## 17
p Décomposer, comparer, coupler des mesures.
i Séparer l'espace en morceaux où tout a un signe (Hahn) ou une densité (Radon-Nikodym).
d Chaque exercice devient un calcul sur deux ou trois morceaux.
s L'exercice 117 tombe dans le piège : « $\nu(A)=0$ » pour un grand $A$ ne dit rien des morceaux.
e Ces outils servent au changement de probabilité, aux copules et aux mesures de risque.
`);
LOGIQUE('bilineaire', String.raw`
## 1
p Longueur, angle, covariance : y a-t-il une structure commune ?
i Une machine à deux entrées, linéaire en chacune.
d Connaître son résultat sur les vecteurs de base suffit : d'où la matrice.
s Si elle n'était linéaire que d'un côté, $n^2$ nombres ne suffiraient plus.
e Que se passe-t-il quand les deux entrées sont le même vecteur ?
## 2
p La variance ne prend qu'un portefeuille, la covariance en prend deux : qui détermine l'autre ?
i Développer $q(x+y)$ : le terme croisé isole $f(x,y)$.
d Forme symétrique et forme quadratique contiennent la même information.
s En caractéristique 2 on ne peut pas diviser par 2 : la correspondance casse.
e Le terme croisé nul a un sens : la perpendicularité.
## 3
p Une matrice pleine est illisible.
i Choisir des directions qui ne se parlent pas : $f(e_i,e_j)=0$.
d Dans cette base, tout se lit sur la diagonale.
s Si un vecteur est isotrope, il est perpendiculaire à lui-même : il ne peut pas servir de direction de départ.
e Comment trouver ces directions à la main ?
## 4
p Décider si une forme est toujours positive sans tester tous les vecteurs.
i L'écrire comme somme de carrés.
d Le signe se lit sur les coefficients, et leur nombre de $+$ et de $-$ ne dépend pas du calcul.
s Si les carrés ne sont pas indépendants, un $+$ et un $-$ peuvent se compenser : la lecture est fausse.
e Quand tout est positif, la forme devient une vraie géométrie.
## 5
p À quelles conditions peut-on parler de longueur et d'angle ?
i La forme $\lambda\mapsto q(x+\lambda y)$ est un trinôme qui ne devient jamais négatif.
d Son discriminant est négatif : c'est Schwarz, d'où le cosinus, la norme et la diversification.
s Si la forme change de signe, le « cosinus » peut dépasser 1.
e Avec des longueurs, on peut chercher le plus proche.
## 6
p Approcher un vecteur par un sous-espace, une donnée par un modèle.
i Le plus court chemin tombe à angle droit.
d Il suffit d'annuler les produits scalaires : des équations linéaires, donc la régression.
s En dimension infinie non complète, le point le plus proche peut ne pas exister (exo 3).
e Quelles transformations respectent cette géométrie ?
## 7
p Quels mouvements ne déforment rien ?
i Conserver les longueurs suffit à conserver les angles (polarisation).
d Ce sont les matrices à colonnes orthonormées ; en dimension 2 et 3, il n'y a que rotations et réflexions.
s Si seul le volume était conservé, on pourrait étirer d'un côté et écraser de l'autre.
e Et les transformations qui étirent le long d'axes perpendiculaires ?
## 8
p Quand une matrice a-t-elle des axes propres perpendiculaires ?
i Si l'endomorphisme est son propre adjoint, l'orthogonal d'un axe propre est stable.
d On recommence dans cet orthogonal, plus petit : récurrence, donc base orthonormée complète.
s Sans symétrie, $\begin{pmatrix}0&1\\0&0\end{pmatrix}$ n'a qu'un axe : on reste bloqué.
e Le TD demande de réutiliser chacune de ces idées.
## 9
p Reconnaître l'outil caché derrière chaque exercice.
i « inf d'une intégrale » = distance = projection ; « polynôme en $A$ » = interpolation sur les valeurs propres ; « normal » = diagonaliser.
d L'énoncé change, l'outil est toujours dans la liste.
s Vérifie les hypothèses : l'énoncé 1-II-b sans carré donne $-\infty$.
e Ces outils reviennent dans la covariance d'un portefeuille.
`);
