COURS({
  id: 'cima2',
  titre: 'CIMA 2 : bases techniques et tarification',
  fichier: 'Module2_Bases_techniques_et_tarification.pdf',
  auteur: 'Florent Gbongué, droit arrêté au 24 novembre 2026',
  pages: 47,
  famille: 'Actuariat vie CIMA',
  resume: 'Article 338, tarif d’inventaire, taux majorés, taux net, construction des tables CIMA H et F, plafond de 3,5 %, article 336, cinq contrats types, rentabilité.'
}, String.raw`
## Le prix du contrat d'Awa | p. 2-4
Awa, 35 ans : mixte 20 ans, 10 000 000 FCFA au décès avant 55 ans ou en vie à 55 ans.

| Composante | FCFA |
|---|---|
| Prime pure | 364 121 |
| Acquisition (3 % du capital amorti) | 21 069 |
| Gestion (0,25 % du capital/an) | 25 000 |
| Encaissement (5 % de la prime) | 21 589 |
| **Prime commerciale** | **431 779** |

Questions : pourquoi 3,5 % et pas 5 % ? pourquoi la table H pour une femme ? qui vérifie les frais ? pourquoi un rendement de 1,38 % au terme ?

## Ce que le Code impose | p. 5-12
:::formule Article 338 : deux paramètres, un standard, un visa
$$\text{Table : CIMA H (décès), CIMA F (vie)}\qquad i\le3{,}5\%\qquad\text{chargements justifiables et raisonnables}$$
Tarif présenté au **visa** du ministre avec note technique et conditions générales.
:::
:::piege Le visa contrôle les bases, pas la rentabilité
Il n'exige ni test de rentabilité, ni hypothèses de rachat ou de frais réels, ni marge pour risque, ni adossement. Un tarif peut être conforme et **destructeur de valeur**.
:::
:::formule Tarif d'inventaire (art. 338-1)
$$P^{inv}=\text{prime pure}+\text{acquisition}=364\,121+21\,069=385\,190$$
$$\text{Prime commerciale}\to\text{tarif d'inventaire}\to\text{provision zillmérisée (334-3)}\to\text{valeur de rachat (74, 76)}$$
:::
:::piege Faux ami
En France, la prime d'inventaire = pure + **gestion**. En CIMA = pure + **acquisition**.
:::
:::formule Taux majorés (art. 338-2 et 334-6)
Rentes immédiates souscrites à 65 ans ou plus ; contrats à prime unique de 10 ans au plus. Actif **cantonné** :
$$r_{actif}\ge\tfrac43\,i_{tarif},\qquad i_{provision}\le\min\big(i_{tarif},\ \tfrac45\,r_{\text{réel}}\big)$$
Tarif 4 % : actif ≥ 5,33 %. Si le rendement tombe à 4,5 % : provision à 3,6 % au plus.
:::
Incohérence du texte : « un tiers » (4,67 %) et « 33 % » (4,655 %).
:::formule Taux affiché net (circulaire CRCA 2014)
$$i_{net}=(1+i)(1-f)-1,\quad\text{deux décimales, arrondi }\textbf{inférieur}$$
$3\%,1\%\to1{,}97\%$ ; $3{,}5\%,0{,}5\%\to2{,}98\%$.
:::
:::exo 3,5 % et 1 % de prélèvement ?
---
$1{,}035\times0{,}99-1=2{,}465\%$, affiché **2,46 %**.
:::
:::formule Frais affichés (règl. d'application 02/2018)
$$f_1\ge1-\frac{VR\text{ après 1re prime}}{P_1},\qquad f_k\ge1-\frac{\Delta VR}{P_k}$$
Prime 100, VR 80 juste après : afficher au moins 20 %.
:::
**Quatre silences** (grille R) : table des contrats mixtes décès-vie ; risques aggravés ; table d'expérience propre ; preuve de rentabilité.

## Les tables CIMA H et F | p. 13-22
| Indicateur | H | F | F/H |
|---|---|---|---|
| $q_{40}$ (‰) | 3,50 | 1,89 | 0,54 |
| $q_{65}$ (‰) | 20,78 | 10,86 | 0,52 |
| $e_{65}$ (ans) | 16,9 | 22,1 | 1,31 |
| Rente de 1 à 65 ans, 3,5 % | 12,521 | 15,166 | 1,21 |

:::intuition La table suit la garantie
Femme en temporaire décès : table **H**, prime pure 84,5 % plus chère que sur F. Homme en rente : table **F**, 21,1 % plus chère que sur H. Prudence pour l'assureur, payée par l'assuré.
:::
En 2013, H et F remplacent TD et TV (1999) : mortalité plus faible, donc décès **allégé** (à 65 ans 20,8 ‰ contre 32,5 ‰) et rentes **alourdies** ($e_{65}$ 22,1 contre 16,1).
**Données** : 2003-2006, 1 551 780 années-personnes, 17 assureurs (11 UEMOA, 6 CEMAC), âges 30-55 exploitables, ≈ 5 937 décès. **Aucun rentier** observé.
:::methode Six opérations de construction (Kamega 2011)
1. Taux bruts (Hoem) : $\hat q_x=\dfrac{d_x}{\sum_ie_{i,x}}$.
2. Brass : $\operatorname{logit}\hat q_x^r=a_r\operatorname{logit}q_x^{TH}+b_r$, $\operatorname{logit}q=\ln\frac q{1-q}$. CEMAC $(0{,}8236;-0{,}5878)$, UEMOA $(0{,}7989;-1{,}0821)$.
3. Abattement : $\operatorname{logit}\tilde q_x=(1-c)\operatorname{logit}\hat q_x$, $c=2\%$.
4. Tables féminines (Cox) : $q_x^F=1-(1-q_x^H)^{k_r}$, $k=0{,}518$ (CEMAC), $0{,}53$ (UEMOA).
5. Raccords : au-delà de 66 ans UEMOA = CEMAC ; avant 20 ans l'inverse.
6. Pondération : $q^{CIMA}=w\,q^{CEMAC}+(1-w)\,q^{UEMOA}$, $w=37{,}4\%$ (H), $46{,}5\%$ (F) ; Gompertz après 90 ans.
:::
:::intuition Pourquoi l'abattement augmente la mortalité
Les logits sont négatifs ($q<\frac12$) : les réduire en valeur absolue les rapproche de 0, donc **élève** $q$ (de 9,4 % à 13,8 %).
:::
Choix pesant : sans abattement −9,9 % sur la temporaire ; tables CEMAC seules +22 % ; UEMOA seules −13,2 % : les assurés UEMOA paient une marge que ceux de la CEMAC ne paient pas.
**Transition 2013** (effet 1er février) : primes en cours **inchangées** ; provisions recalculées ; étalement 5 ans si hausse > 5 %. À 65 ans : −35 % (temporaire), +24 % (rente).
:::piege Dérive depuis 20 ans
Décès : marge implicite de 11 % à 76 % selon la part $s$ de l'amélioration transmise. Rente d'une **assurée** : −1,3 % à −5,5 % : **insuffisante**. Rente d'un assuré : +13 à +19 %.
:::
:::formule Suivi A/E
$$Z=\frac{D-E}{\sqrt E}\approx\mathcal N(0,1),\qquad597\text{ décès attendus pour détecter un écart de }10\%$$
Moins d'un an à l'échelle de la zone, 17 ans pour le Gabon, 45 ans pour le Mali : il faut **mutualiser** les données.
:::
:::exo $E=400$ décès attendus, $D=440$ observés ?
---
$Z=\frac{40}{20}=2>1{,}96$ : mortalité significativement supérieure à la table.
:::

## Le plafond de 3,5 % | p. 23-28
Rendement publié des placements vie **sous 3,5 % depuis 2010** : 4,34 % (2005), 2,93 % (2022 ; UEMOA 3,13, CEMAC 2,22). Dans les sociétés (525 exercices, 2007-2021) : 57,3 % sous 3,5 % ; persistance 85,7 % ; médiane 3,27 % → 2,58 %.
:::formule Quatre seuils dérivés de 3,5 %
$$3{,}50\%\ (338)\qquad\frac{3{,}5\%}{0{,}85}=4{,}12\%\ (82\text{-}84)\qquad\frac{3{,}5\%}{0{,}8}=4{,}375\%\ (334\text{-}6)\qquad3{,}5\%\times\tfrac43=4{,}67\%\ (338\text{-}2)$$
:::
**Paradoxe** : titres publics 10 ans à 5,38 %, placements vie à 2,93 % (composition des actifs, coût historique : pistes non démontrées).
:::formule Article 336
$$\text{Majoration des provisions}\ \ge\ 10\times(\text{intérêts crédités}-\text{revenu net})-\text{plus-values latentes}$$
:::
:::preuve Pourquoi 10 ?
$a_{\overline{n}|}=\frac{1-1{,}035^{-n}}{0{,}035}=10$ donne $n=\frac{-\ln0{,}65}{\ln1{,}035}=12{,}5$ ans : une insuffisance constante pendant 12,5 ans à 3,5 %.
:::
| Régime | Plafond |
|---|---|
| CIMA | 3,5 % absolu |
| France (A. 132-1) | 75 % du TME ; min(3,5 %, 60 % TME) si > 8 ans |
| Solvabilité II | aucun ; courbe EIOPA |

Un plafond relatif suppose une courbe de référence officielle, qui n'existe pas ici.

## Calculer un tarif | p. 29-34, 43
:::formule Valeurs actuelles probables
$$v=\frac1{1+i},\quad{}_kp_x=\frac{l_{x+k}}{l_x},\quad\ddot a_{x:\overline n|}=\sum_{k=0}^{n-1}v^k\,{}_kp_x,\quad A^1_{x:\overline n|}=\sum_{k=0}^{n-1}v^{k+1}\,{}_kp_x\,q_{x+k},\quad{}_nE_x=v^n\,{}_np_x$$
$$A_{x:\overline n|}=A^1_{x:\overline n|}+{}_nE_x,\qquad A_{x:\overline n|}=1-d\,\ddot a_{x:\overline n|},\ d=\frac i{1+i}$$
:::
:::preuve Vérifier avec Awa
$d=\frac{0{,}035}{1{,}035}=0{,}033816$ ; $1-0{,}033816\times14{,}2392=0{,}51848$ ✓ : l'identité contrôle la table.
:::
:::formule Principe d'équivalence, prime commerciale
$$P''(1-\gamma)\,\ddot a=S\,A+\alpha S+\beta S\,\ddot a\qquad\Rightarrow\qquad P''=\frac{SA+\alpha S+\beta S\ddot a}{(1-\gamma)\ddot a}$$
$\alpha$ acquisition, $\beta$ gestion, $\gamma$ encaissement.
:::
:::exemple Awa pas à pas
$\ddot a=14{,}2392$ ; $A^1=0{,}06619$ ; $ {}_{20}E=0{,}45229$ ; $A=0{,}51848$.
Pure : $10^7\times\frac{0{,}51848}{14{,}2392}=364\,121$. Acquisition : $\frac{300\,000}{14{,}2392}=21\,069$. Gestion : 25 000. Somme : 410 190. Commerciale : $\frac{410\,190}{0{,}95}=431\,779$ ✓.
20 primes : 8 635 572 ; rendement au terme 1,38 %/an. Chargements : 15,7 % de la prime. À 2,5 % : 471 605 (+9,2 %).
:::
:::formule Formulaire des cinq contrats
$$\text{Temporaire : }P''=\frac{SA^1_{40:\overline{10}|}+\alpha S+\beta S\ddot a}{(1-\gamma)\ddot a}\qquad\text{Emprunteur : }\Pi=\frac1{1-\alpha}\sum_{k=0}^9v^{k+1}\,{}_kp_{40}\,q_{40+k}\,K_k$$
$$\text{Capital différé + contre-assurance : }P''\big[(1-\gamma)\ddot a_{45:\overline{15}|}-(IA)^1_{45:\overline{15}|}\big]=S\,{}_{15}E_{45}+\alpha S+\beta S\ddot a$$
$$\text{Rente : }\Pi=\frac{(1+\sigma)R\,\ddot a_{65}}{1-\alpha}$$
:::
| Contrat | Table | Pure | Commerciale | Écart |
|---|---|---|---|---|
| Temporaire 10 ans, 40 ans | H | 48 113 | 68 365 | +42,1 % |
| Emprunteur 10 ans (9 %) | H, unique | 241 442 | 284 050 | +17,6 % |
| Mixte Awa | H | 364 121 | 431 779 | +18,6 % |
| Capital différé 15 ans, 45 ans | F | 479 430* | 579 175 | +20,8 % |
| Rente 65 ans, 1,2 M/an | F, unique | 18 198 762 | 18 949 226 | +4,1 % |

*seule garantie au terme ; 496 594 avec contre-assurance.
:::exo Vérifier la rente
---
$1\,200\,000\times15{,}166=18\,199\,200$ (arrondi de la table) ; $\frac{18\,198\,762\times1{,}01}{0{,}97}=18\,949\,226$ ✓.
:::
**Sensibilité** (prime pure, 3,5 % → 2,5 % puis → 0 %) : temporaire +1,6 / +5,7 ; emprunteur +4,5 / +17,1 ; mixte +10,8 / +42,6 ; différé +8,7 / +33,5 ; rente +10,9 / +48,8. L'effet croît avec la durée.
:::piege Une table par garantie dans un même contrat ?
Impossible : survie sur F et décès sur H ne somment plus à 1. Enjeu : −0,1 % (différé), **−18,9 %** (rente différée). Exiger que la note technique justifie la table.
:::

## Rentabilité et partage | p. 35-40
Frais du marché : 24,8 % des primes (2022). Chargements d'Ébène Vie : 4 % à 30 %. Insuffisance → **provision de gestion**.
| Contrat (rendement 3 %) | VAN au plafond | Taux d'équilibre |
|---|---|---|
| Capitalisation 15 ans | −9,6 % | 1,46 % |
| Mixte 20 ans | −5,2 % | 2,72 % |
| Emprunteur | −3,3 % | 2,67 % |
| Rente 65 ans | −6,8 % | 2,52 % |

:::intuition
Au plafond avec 3 % de rendement, **aucun** contrat n'est rentable. La variable décisive est rendement − taux garanti. Et c'est **l'emprunteur**, exclu de la participation, qui paie la prudence de la table H.
:::

## QUIZ
? Femme de 40 ans, temporaire décès : table ?
+ H
- F
- moyenne
- TD
> Garantie décès.
? Taux plafond du tarif ?
- 2,5 %
+ 3,5 %
- 4,67 %
- 5 %
> Art. 338.
? Tarif d'inventaire CIMA ?
+ pure + acquisition
- pure + gestion
- commerciale − commission
- pure
> Art. 338-1.
? Rente à 4 % à 66 ans ?
- interdite
+ possible, actif cantonné ≥ 5,33 %
- libre
- à 4,5 %
> Art. 338-2.
? 3,5 % et 0,5 % : affichage ?
- 3,00 %
+ 2,98 %
- 2,99 %
- 3,50 %
> Arrondi inférieur.
? $A_{x:n}$ en fonction de $\ddot a$ ?
+ $1-d\ddot a$
- $1-i\ddot a$
- $d\ddot a$
- $v\ddot a$
> $d=i/(1+i)$.
? Le plus sensible au taux ?
- temporaire
- emprunteur
- différé
+ rente
> +48,8 % à 0 %.
? L'abattement de 2 % des logits…
- baisse $q$
+ augmente $q$
- ne change rien
- supprime Gompertz
> Logits négatifs.
? Facteur 10 de l'art. 336 à 3,5 % ?
- 10 ans
+ 12,5 ans
- 20 ans
- 5 ans
> $a_n=10$.

## CARTES
Art. 338 :: table H/F, taux ≤ 3,5 %, chargements justifiables, visa
Taux net :: $(1+i)(1-f)-1$, tronqué
Taux majoré :: actif ≥ 4/3 du tarif ; provision ≤ 4/5 du rendement
Brass :: $\operatorname{logit}q=a\operatorname{logit}q^{ref}+b$
Cox féminin :: $q^F=1-(1-q^H)^k$
Équivalence :: $P''(1-\gamma)\ddot a=SA+\alpha S+\beta S\ddot a$
Contrôle :: $A=1-d\ddot a$
$Z$ A/E :: $(D-E)/\sqrt E$
Données des tables :: 2003-2006, 17 assureurs, 1,55 M années-personnes, aucun rentier
Transition :: 1er février 2013, primes en cours inchangées

## PODCAST D'où viennent 431 779 francs ?
A: Épisode deux : le tarif. Awa paie quatre cent trente et un mille sept cent soixante-dix-neuf francs par an pour dix millions à cinquante-cinq ans. D'où vient ce chiffre ?
B: D'un calcul de probabilités ?
A: D'une égalité. La valeur actuelle probable des primes égale celle des prestations plus les frais. C'est le principe d'équivalence.
B: Avec quel taux ?
A: Trois et demi pour cent au plus. C'est un plafond, pas un conseil.
B: Et quelle table ?
A: H, parce que la garantie principale est le décès. La table suit la garantie, pas le sexe.
B: Fais-moi le calcul.
A: L'annuité vaut quatorze virgule vingt-quatre. La valeur du capital mixte, zéro virgule cinq cent dix-huit. Dix millions fois l'un divisé par l'autre : trois cent soixante-quatre mille de prime pure. Plus vingt et un mille d'acquisition, plus vingt-cinq mille de gestion, et on divise par zéro virgule quatre-vingt-quinze.
B: Comment vérifier ?
A: Une identité : A égale un moins d fois a. Elle tombe juste.
B: D'où viennent les tables ?
A: De dix-sept assureurs, observés de deux mille trois à deux mille six. On a lissé en se plaçant par rapport à la table française, puis on a réduit les logits de deux pour cent. Comme ils sont négatifs, cela augmente la mortalité.
B: Et les rentes ?
A: La table F tarife les rentes, mais aucun rentier n'a été observé. Pour les femmes, elle est aujourd'hui insuffisante.
B: Le taux de trois et demi est-il tenable ?
A: Les placements rapportent moins depuis deux mille dix. L'article trois cent trente-six fait payer l'écart : dix fois l'insuffisance en provision. Dix fois, c'est douze ans et demi de manque à trois et demi pour cent.
B: Donc un tarif peut être visé et perdre de l'argent ?
A: Oui. Le visa contrôle les bases, pas la rentabilité. Au plafond, avec trois pour cent de rendement, aucun contrat type n'est rentable. À bientôt pour les options d'Awa.
`);
