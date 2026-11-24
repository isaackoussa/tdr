COURS({
  id: 'cima4',
  titre: 'CIMA 4 : provisions et leur représentation',
  fichier: 'Module4_Provisions_et_representation.pdf',
  auteur: 'Florent Gbongué, droit arrêté au 24 novembre 2026',
  pages: 50,
  famille: 'Actuariat vie CIMA',
  resume: 'Engagements réglementés, provision zillmérisée et bornée, récurrence, provision de gestion, article 336, risque d’exigibilité, actifs admis, couverture d’Ébène Vie, marges implicites, Shapley.'
}, String.raw`
## Combien l'assureur doit-il, et où est l'argent ? | p. 2-6
Fin de 6e année : 2 071 935 FCFA dus à Awa → Ébène Vie : 50 185 M d'engagements réglementés → 56 169 M d'actifs admis → couverture **111,9 %**.
:::def Passif réglementé vie (334-2)
1° **PM** ; 2° participation aux excédents ; 3° **gestion** ; 4° **risque d'exigibilité** (PRE) ; 5° autres (CRCA). Plus : créances privilégiées, dépôts de garantie, prévoyance du personnel. Trois principes : à **toute époque** ; **sans déduction** de réassurance ; dans la **monnaie** de la garantie.
:::

## La provision mathématique | p. 7-11
:::formule Prospective, zillmérisée, bornée (334-3)
$$V_t^{\text{rég}}=\max\big(0\,;\ VR_t\,;\ V_t^{\text{réd}}\,;\ \min(V_t\,;\ \bar B_t)\big)$$
$\bar B_t=1{,}10\,VR_t$ si le chargement d'acquisition n'est **pas déterminé**, $+\infty$ sinon. (En cas de conflit plancher/plafond, les planchers prévalent dans cette lecture.)
:::
:::formule Zillmérisation
$$V_t^{pure}-V_t^{zill}=z\,\ddot a_{x+t:\overline{n-t}|},\qquad z=\frac{\alpha S}{\ddot a_{x:\overline n|}}$$
:::
:::preuve
$V^{pure}=SA-P\ddot a$ et $V^{zill}=SA-(P+z)\ddot a$ : différence $z\ddot a$. À $t=0$ : $V^{zill}=-\alpha S=-300\,000$, d'où le plancher 0.
:::
:::intuition Zillmériser
L'assureur a avancé les frais de vente ; l'assuré les remboursera dans ses primes. On déduit cette créance future de la dette.
:::
:::exemple Awa
$z=21\,069$. Écart : 289 411 (an 1), 230 915 (an 6), 0 au terme.
| An | Pure | Zillmérisée | VR | 110 % VR | Plafonnée |
|---|---|---|---|---|---|
| 1 | 352 970 | 63 559 | 60 381 | 66 419 | 66 419 |
| 3 | 1 094 675 | 827 516 | 786 140 | 864 754 | 864 754 |
| 5 | 1 886 861 | 1 643 466 | 1 561 293 | 1 717 422 | 1 717 422 |
| 10 | 4 111 648 | 3 934 997 | 3 934 997 | 4 328 497 | 4 111 648 |
:::
:::exo VR = 100, pure = 140, chargement non déterminé ?
---
$\max(0,100,\min(140,110))=\mathbf{110}$.
:::
**Bases** : celles du tarif (334-4, 1°). Rentes viagères : recalculées à chaque inventaire sur les bases **en vigueur** (334-5), étalement 5 ans possible. Taux majoré : $\min(\text{tarif};\frac45r)$. Autres contrats : nouvelles bases **sur autorisation** (334-4, 3°).
:::formule Récurrence (Fouret)
$$(V_s+\pi_s)(1+i)=q_{x+s}C_{s+1}+p_{x+s}V_{s+1},\qquad V_n=E$$
:::
:::intuition Lire la récurrence
Provision + prime, placées un an, paient le décès des uns et constituent la provision des survivants.
:::
:::formule Sensibilités
$$\frac{\partial V_t}{\partial i}=-\sum_{s=t}^{n-1}v^{s+1-t}\,{}_{s-t}p_{x+t}\,(V_s+\pi_s)\qquad\frac{\partial V_t}{\partial q_{x+s}}=v^{s+1-t}\,{}_{s-t}p_{x+t}\,(C_{s+1}-V_{s+1})$$
:::
:::theo Conséquence pour l'article 338
Si $V_s+\pi_s\geq 0$, la provision **décroît** toujours avec le taux : un plafond unique est prudent pour tous. Pour la mortalité, le signe est celui du **capital sous risque** $C-V$ : décès ($C>V$), mortalité forte prudente ; rente ($C=0<V$), mortalité faible prudente. D'où **deux tables**.
:::

## Provision de gestion | p. 12-16
:::formule Art. 334-4, 2° (rédaction 2024)
$$x_c=\sum_{k=1}^{D_c}\frac{\bar E_c-\bar R_c}{(1+\bar\rho)^k},\qquad PG^{sc}=\sum_cx_c^+,\qquad PG^c=\Big(\sum_cx_c\Big)^+$$
$$PG^{sc}-PG^c=\min\Big(\sum x_c^+;\ \sum x_c^-\Big)$$
$\bar E$ charges, $\bar R$ ressources, $\bar\rho$ rendement : moyennes sur **3 exercices** ; $D$ durée restante avec sorties anticipées.
:::
:::preuve Identité de compensation
Posons $a=\sum x^+$, $b=\sum x^-$ : $PG^{sc}=a$, $PG^c=(a-b)^+$. Si $a\ge b$ : écart $b$ ; sinon écart $a$. Donc $\min(a,b)$.
:::
:::exemple Ébène Vie ($\bar\rho=3\%$)
Épargne : $-120$ sur 6 ans : $-120\times5{,}4172=-650$. Mixtes : $50\times7{,}7861=389$ (9 ans). Décès : $120\times3{,}7171=446$ (4 ans). Déficits 835, excédents 650. **Sans** compensation 835 ; **avec** 185.
:::
:::exo $x=+300,+100,-250$
---
Sans : 400. Avec : $150$.
:::
**Histoire** : 2016 (création) → 2018 (durées forfaitaires, compensation jusqu'à fin 2022) → 2024 (compensation autorisée, forfaits supprimés). Règlement d'application **non retrouvé** : catégories, ressources « disponibles », durée, étalement restent ouverts.

## Article 336 et risque d'exigibilité | p. 17-20
:::formule Art. 336-3
$$\text{Majoration}\ \ge\ 10\,(I-R)^+-PV^+,\qquad I=\sum_jPM_j\,i_j+\sum_jPPE_j\,\tau_j$$
(plancher à 0). **Déclencheur** (336-4) : revenu hors cessions < intérêts dus.
:::
:::formule Étalement des décotes (336-1, lecture du cours)
$$s=(P^{remb}-V^{aff})\,\frac{i_m}{(1+i_m)^n-1},\qquad i_m=\frac I{\sum PM+\sum PPE}$$
C'est une rente constante qui capitalise jusqu'à la décote.
:::
:::exemple Ébène Vie
$I=36\,000\times3{,}5\%+12\,000\times2{,}5\%=1\,260+300=1\,560$.
| Scénario | $R$ | $10(I-R)^+$ | PV | Majoration |
|---|---|---|---|---|
| Base | 2 650 | 0 | 3 150 | 0 |
| Dépôts ÷ 2, dividendes suspendus | 2 036 | 0 | 3 150 | 0 |
| + coupon État A impayé | 1 519 | 414 | 3 150 | 0 |
| + actions −30 %, immobilier −40 % | 1 519 | 414 | −1 650 | **414** |

(L'écart affiché est 41 ; $10\times41{,}4=414$.)
:::
:::intuition
« Le revenu, pas la valeur, déclenche le test ; la valeur, pas le revenu, l'éteint. »
:::
:::exo $R=900$, $I=1000$, PV 600
---
$10\times100-600=\mathbf{400}$.
:::
Marché 2022 : produits 64 852 M / PM 1 995 223 M = 3,25 % ; écart à 3,5 % : 4 981 M ; majoration simulée 49 808 M (2,5 % des PM), **ordre de grandeur** seulement.
:::def Dépréciations (410) et PRE (334-14)
**Ligne à ligne** (à l'actif) : coté si moins-value > 5 % ; non coté dès le premier franc. **Globale** (au passif) : PRE = valeur au bilan − valeur de réalisation de l'ensemble (hors obligations 335-11), si positive. Le 3° de 335-12 semble redire la PRE.
:::

## Représenter les engagements | p. 21-26, 47
:::methode Cinq principes
Couvrir à **toute époque** ; **localiser** (≤ 50 % dans d'autres États CIMA) ; **détenir** en propre ; **sans gage** (sauf CRCA) ; bonne **monnaie**.
:::
| Actif (% des engagements sauf mention) | Limite |
|---|---|
| Valeurs publiques (1°) | min 15 %, max 50 % |
| Obligations, actions, OPCVM (2°) | 40 % |
| Immeubles (3°) | 40 % |
| Prêts aux États (4°) | 20 % |
| Prêts hypothécaires et bancaires (5°) | 10 % |
| Comptes (6°), vie | min 10 %, max 35 % (non-vie 40 %) |
| Avances | 30 % des **PM** |
| Primes < 3 mois | 5 % des **PM** |
| Un même émetteur | 5 % (10 % si l'ensemble > 5 % ne dépasse pas 40 %) ; États exemptés |
| Un immeuble / un non coté | 15 % / 2 % |
| Prêt hypothécaire | 65 % du gage |
| Réassureurs (vie) | dépôts espèces seulement |

:::formule Évaluation (335-11, 335-12)
$$\text{Obligations : }\min(\text{acquisition};\ \text{remboursement};\ \text{vénale})\qquad\text{Autres : prix d'achat}-\text{dépréciation}\qquad\text{Immeubles : revient}-2\%/\text{an}$$
:::
:::exo Obligation achetée 100, remboursée 100, cote 92 ?
---
**92**. Les baisses se voient tout de suite, les hausses jamais.
:::
:::exo Engagements 10 000, dépôts 4 000 : admis ?
---
Vie : **3 500** (35 %). Non-vie : **4 000** (40 %).
:::
:::formule Couverture
$$\frac{\sum_a\min(V_a^{couv};\text{plafonds})}{E^{\text{rég}}+PRE}\ge100\%$$
:::
:::exemple Ébène Vie (M FCFA)
Engagements : $48\,000+600+185+900+500=50\,185$. Au bilan 59 650, admis **56 169** ; 3 481 ne comptent pas (non admissibles 1 200, dépôts 935, primes 500, 335-11, non coté 396). $\frac{56\,169}{50\,185}=111{,}9\%$, marge ≈ 5 983.
Plafond dépôts : $35\%\times50\,185=17\,565$ ✓. Primes : $5\%\times48\,000=2\,400$ ✓. Non coté : $2\%\times50\,185=1\,004$ ✓.
:::

## Chocs, marché, défaut | p. 27-32
| Choc | Couverture |
|---|---|
| Base | 111,9 % |
| Taux +200 pb | 108,0 % |
| Actions −30 % | 110,1 % |
| Immobilier −40 % | 110,4 % |
| Les trois | 103,9 % |
| Dépôts soumis à dispersion (lecture extensive) | 106,0 % |

:::piege Quatre effets contre-intuitifs
1. La plus-value du siège n'amortit pas une baisse d'actions (ligne à ligne). 2. Une baisse immobilière **augmente** les engagements (PRE) et desserre les plafonds. 3. Hausse des taux vue tout de suite, baisse jamais. 4. La trésorerie au-delà de 35 % ne compte pas.
:::
Marché 2022 : 109,7 % (Tchad 116,7 ; Niger **98,6**). Trésorerie 35,8 % **des engagements** (plafond 35), 32,7 % des actifs : attention au dénominateur. Tout franc de provision appelle ≥ 0,15 de titres publics et ≥ 0,10 de comptes.
**Défaut** : plan sous 2 mois, couverture rétablie en 3 (321-1) ; blocage d'actifs ; pas de dividende (329-8). États C4, C4S, C6S, T2 (transition fin 2027).

## Au-delà du réglementaire | p. 33-39
:::formule Marge implicite et Shapley
$$\Delta=V^{\text{rég}}-V^{\text{réf}},\qquad\kappa=\frac\Delta{V^{\text{rég}}},\qquad\Delta=\Delta_{taux}+\Delta_{mort}$$
$$\Delta_{taux}=\tfrac12\big[V(q^r,i^r)-V(q^r,i^c)+V(q^c,i^r)-V(q^c,i^c)\big]$$
Shapley : moyenne de l'effet du taux selon qu'on le change en premier ou en second ; les deux contributions s'additionnent exactement.
:::
$\kappa$ contre la courbe souveraine : temporaire 13,1 ; emprunteur 6,5 ; mixte 22,9 ; différé 20,0 ; rente 17,0 %. Contre 3 % : −4,2 ; −2,1 ; −6,8 ; −5,9 ; −5,2 %. **Le signe dépend de la référence.** Emprunteur selon la population : de −11 % (hommes CEMAC) à +55 % (femmes UEMOA).
:::formule Effet d'un renforcement sur la marge
$$M^{vie}=0{,}05\,\varrho\,(PM+PG),\qquad\frac{\partial M}{\partial(PM+PG)}=0{,}05\,\varrho\in[4{,}25\%;5\%]$$
Renforcer de 50 : disponible −50, exigence +2,1 à +2,5. De $\frac{100}{50}=200\%$ à $\frac{50}{52{,}5}=95\%$.
:::
Art. 337-1, 6° : admettre la surestimation du passif (70/52,5 = 133 %), usage non documenté. Proposition du projet : **état pilote** de rapprochement.
| | CIMA | Solvabilité II |
|---|---|---|
| Provisions | bases du tarif, planchers | meilleure estimation + marge |
| Taux | ≤ 3,5 % | courbe EIOPA |
| Actifs | listes et limites | personne prudente |

## QUIZ
? Provision zillmérisée à $t=0$ ?
- 0
+ $-\alpha S$
- $+\alpha S$
- $P$
> Plancher 0 ensuite.
? VR=100, pure=140, non déterminé ?
- 100
+ 110
- 140
- 120
> Plafond 110 %.
? Effet du taux sur la provision ?
+ décroissante
- croissante
- nul
- dépend du sexe
> Si $V+\pi\ge0$.
? Signe de l'effet de $q$ ?
+ $C-V$
- $V-\pi$
- $i$
- toujours positif
> Capital sous risque.
? $x=(300,100,-250)$ avec compensation ?
- 400
+ 150
- 250
- 0
> Solde.
? Art. 336 : I=1000, R=900, PV=600 ?
- 100
- 1000
+ 400
- 0
> $10\times100-600$.
? Dépôts admis en vie, engagements 10 000 ?
- 4 000
+ 3 500
- 1 000
- 5 000
> 35 %.
? Valeur d'une obligation ?
- prix d'achat
- marché
+ la plus faible de trois valeurs
- moyenne
> 335-11.
? Minimum de valeurs publiques ?
- 10 %
+ 15 %
- 35 %
- 50 %
> 335-1.
? Une baisse de l'immobilier peut…
+ augmenter les engagements via la PRE
- réduire les engagements
- rien
- annuler l'art. 336
> Au passif.

## CARTES
Provision réglementaire :: $\max(0;VR;V^{\text{réd}};\min(V;\bar B))$
Écart pur − zillmérisé :: $z\,\ddot a_{x+t}$
Récurrence :: $(V+\pi)(1+i)=qC+pV'$
PG :: $\sum x^+$ ou $(\sum x)^+$
Art. 336-3 :: $10(I-R)^+-PV^+$
PRE :: moins-value globale résiduelle
Minima d'actifs :: 15 % publics, 10 % comptes
Plafond comptes vie :: 35 %
Dispersion :: 5 % (10 %/40 %), immeuble 15 %, non coté 2 %
Plan de redressement :: 2 mois + 3 mois
Shapley :: moyenne des effets selon l'ordre

## PODCAST Où est l'argent d'Awa ?
A: Épisode quatre, les provisions. Après six ans, Ébène Vie doit deux millions soixante-douze mille francs à Awa. Où sont-ils ?
B: Dans un coffre ?
A: Non. C'est une dette au passif, en face de laquelle il y a des actifs : titres publics, immeubles, dépôts.
B: Comment calcule-t-on la dette ?
A: Valeur des engagements de l'assureur moins valeur des primes futures. Et on zillmérise : l'assureur a avancé trois cent mille francs de frais de vente, qu'Awa rembourse dans ses primes ; on déduit ce reste à recevoir.
B: Avec des bornes ?
A: Jamais négative, jamais sous la valeur de rachat, jamais sous la provision du capital réduit. Et si le chargement n'est pas connu, au plus cent dix pour cent de la valeur de rachat.
B: Un taux plus bas augmente la provision ?
A: Toujours. C'est pourquoi un plafond unique suffit. Mais pour la mortalité, cela dépend du capital sous risque. Pour un décès, une mortalité forte est prudente. Pour une rente, c'est l'inverse. D'où deux tables.
B: La provision de gestion ?
A: Les frais futurs non couverts. Ébène Vie : huit cent trente-cinq millions sans compensation, cent quatre-vingt-cinq avec. L'écart, c'est le plus petit des déficits ou des excédents.
B: Et l'article trois cent trente-six ?
A: Si les revenus ne paient pas les intérêts promis, on provisionne dix fois l'écart, moins les plus-values. Le revenu déclenche, la valeur éteint.
B: Quels actifs comptent ?
A: Au moins quinze pour cent de titres publics, dix pour cent de comptes, au plus trente-cinq. Une obligation compte pour la plus faible de trois valeurs : achat, remboursement, marché.
B: La couverture d'Ébène Vie ?
A: Cent onze virgule neuf pour cent. Avec un choc de taux, cent huit. Avec les trois chocs, cent trois virgule neuf.
B: Et une chose étonnante ?
A: Si l'immobilier baisse, les engagements augmentent, à cause de la provision pour risque d'exigibilité. Et la prudence dépend de la référence : forte contre la courbe souveraine, négative contre un rendement de trois pour cent.
B: Merci, je vois enfin où est l'argent d'Awa !
`);
