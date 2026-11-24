COURS({
  id: 'bale',
  titre: 'Allocation du capital, Bâle II et III',
  fichier: 'Allocation Capital et Bâle II & III S.pdf',
  auteur: 'Séminaire IUA, avril 2026',
  pages: 107,
  famille: 'Banque et réglementation',
  resume: 'Rôle du capital, accords de Bâle, trois piliers, crédit standard et IRB, marché, opérationnel, capital économique, allocation d’Euler, RAROC, EVA, étude de cas BAF corrigée.'
}, String.raw`
## Le capital dans la banque | p. 5-18
:::intuition Une entreprise pas comme les autres
Une banque collecte l'épargne, accorde des crédits, et transforme les risques (crédit, liquidité, marché). Sa particularité : **elle travaille principalement avec l'argent des autres**. Le capital ne représente que 5 à 12 % du bilan, mais c'est lui qui encaisse les coups.
:::
| | Entreprise classique | Banque |
|---|---|---|
| Financement | capital + dettes | dépôts |
| Endettement | modéré | très fort levier |
| Risque | limité aux actionnaires | **systémique** |

:::def Capital bancaire (fonds propres)
Ressources qui appartiennent aux actionnaires, ne sont pas à rembourser en situation normale, et **absorbent les pertes en premier** : capital social, réserves, report à nouveau, certains instruments hybrides.
:::
| Source | Propriétaire | Remboursement | Risque |
|---|---|---|---|
| Dépôts | clients | oui | faible |
| Dettes | créanciers | oui | modéré |
| Capital | actionnaires | non garanti | très élevé |

### Les trois fonctions du capital
1. **Absorber les pertes** : perte → résultat → capital. Capital 100, pertes 30 → capital 70.
2. **Protéger les déposants** : c'est un matelas entre les pertes et l'épargne.
3. **Garantir la confiance** : « une banque peut survivre à des pertes, pas à une crise de confiance ».

Il a aussi un rôle **disciplinaire** : peu de capital + dépôts garantis = **aléa moral** (tentation de prendre trop de risques, puisque d'autres paieront). Plus l'actionnaire a à perdre, plus il exige de prudence.
:::formule Solvabilité
$$\text{Capital}=\text{Actif}-\text{Dettes}\qquad\text{solvable}\iff\text{Actif}>\text{Dettes}$$
:::
:::piege Capital contre liquidité
Capital : long terme, absorbe les pertes, problème de **solvabilité**. Liquidité : court terme, permet de payer, problème de **paiement**. Une banque peut être solvable mais illiquide, ou liquide mais insolvable.
:::
:::exemple Lire le bilan de la SGCI (en milliers de FCFA)
| | 2023 | 2024 |
|---|---|---|
| Total actif | 3 424 129 728 | 3 599 277 572 |
| Crédits clientèle | 2 358 356 362 | 2 409 228 130 |
| Dettes envers la clientèle | 2 650 588 154 | 2 664 347 556 |
| Capitaux propres | 402 266 371 | 447 200 448 |

Capitaux propres / actif : $\frac{402{,}3}{3424{,}1}=11{,}7\%$ puis $\frac{447{,}2}{3599{,}3}=12{,}4\%$. Levier : $\frac{3599{,}3}{447{,}2}\approx8$ : 1 franc de capital porte 8 francs d'actifs.
:::

## De Bâle I à Bâle IV | p. 19-30
Crises répétées (années 1930, chocs pétroliers, faillites des années 1980), banques internationales mais règles **nationales** : c'est l'**arbitrage réglementaire**. Déclencheur : la faillite de la banque allemande **Herstatt (1974)**, qui désorganise les paiements internationaux. Le G10 crée la même année le **Comité de Bâle (BCBS)**, à la BRI : pas une autorité supranationale, mais un producteur de standards.
:::formule Principe fondamental
$$\text{Plus une banque prend de risques, plus elle doit détenir de capital.}\qquad\text{Ratio}=\frac{\text{Capital}}{\text{Actifs pondérés des risques}}\ge8\%$$
:::
| Accord | Nouveautés | Limites |
|---|---|---|
| **Bâle I** (1988) | ratio Cooke 8 % ; crédit seulement (marché ajouté en 1996) | pondérations grossières : État 0 %, banques 20 %, immobilier 50 %, entreprises 100 % ; optimisation réglementaire |
| **Bâle II** (2004) | 3 piliers, risque opérationnel, modèles internes | sous-estimation du risque systémique |
| **Bâle III** (2010) | meilleur capital (CET1), coussins de conservation et contracyclique, levier, LCR, NSFR, vision **macroprudentielle** | complexité |
| **Bâle IV** (2022) | planchers (output floor 72,5 % du standard), abandon des modèles internes en opérationnel, Expected Shortfall au lieu de la VaR en marché | |

:::formule Ratios de Bâle III/IV
$$\text{LCR}=\frac{\text{Actifs liquides de haute qualité}}{\text{Sorties nettes de trésorerie à 30 jours}}\ge100\%\qquad\text{Levier}=\frac{\text{Tier 1}}{\text{Exposition totale}}\ge3\%$$
$$\text{NSFR}=\frac{\text{Financement stable disponible}}{\text{Financement stable exigé (1 an)}}\ge100\%$$
:::
:::piege Le levier est aveugle au risque, et c'est voulu
Il ne pondère rien : c'est un filet de sécurité contre des modèles internes trop optimistes.
:::

## Les trois piliers | p. 31-42
:::methode Vue d'ensemble
1. **Pilier 1 — exigences minimales** : crédit, marché, opérationnel ; solvabilité, liquidité, levier.
2. **Pilier 2 — surveillance** : ICAAP (la banque s'auto-évalue) et SREP (le superviseur examine).
3. **Pilier 3 — discipline de marché** : transparence (capital, risques, méthodes, gouvernance).
:::
:::def ICAAP
*Internal Capital Adequacy Assessment Process* : la banque identifie **tous** ses risques, les mesure, évalue le capital nécessaire, se projette (scénarios, stress tests). Il ajoute : concentration, liquidité, taux du portefeuille bancaire, stratégique, réputation, pays. « Tout risque significatif doit être pris en compte, même s'il n'est pas réglementé. » Exemple : minimum 8 %, mais profil réel 10 %.
:::
:::def SREP
*Supervisory Review and Evaluation Process* : le superviseur analyse l'ICAAP, la gouvernance, les scénarios, le contrôle interne. Il peut exiger plus de capital, limiter l'activité, imposer des mesures correctives.
:::
**Pourquoi trois ?** Un ratio respecté ne garantit pas une bonne gestion, certains risques se quantifient mal, et deux banques au même ratio peuvent être très différentes.

## Pilier 1 : le risque de crédit | p. 43-52
:::formule Ratio complet
$$\frac{\text{Fonds propres}}{\text{RWA}_{\text{crédit}}+12{,}5\,K_{\text{marché}}+12{,}5\,K_{\text{opérationnel}}}\ge8\%$$
:::
:::intuition Pourquoi 12,5 ?
$12{,}5=1/8\%$. Multiplier une exigence de capital par 12,5 la convertit en « actifs pondérés équivalents », homogènes au reste du dénominateur.
:::
| Approche | Ce que la banque estime |
|---|---|
| Standard | rien : pondérations du texte, notations externes |
| IRB Fondation | **PD** seulement |
| IRB Avancée | **PD, LGD, EAD, M** |

Crédit : 3 méthodes (standard, IRBF, IRBA). Marché : 2 (standard, modèles internes). Opérationnel : 3 (BIA, standard, AMA). Classes d'exposition : souverains, banques, entreprises, retail.
:::formule Approche standard
$$\text{RWA}=\text{Exposition}\times\text{Pondération}$$
:::
### Grilles UMOA
| Notation | AAA à AA− | A+ à A− | BBB+ à BBB− | BB+ à B− | < B− | Non noté |
|---|---|---|---|---|---|---|
| Souverains | 0 % | 20 % | 50 % | 100 % | 150 % | 100 % |
| Institutions fin. > 3 mois | 20 % | 50 % | 50 % | 100 % | 150 % | 50 % |
| Institutions fin. ≤ 3 mois | 20 % | 20 % | 20 % | 50 % | 150 % | 20 % |

:::def PD, LGD, EAD, M
**PD** probabilité de défaut à un an ; **LGD** part perdue en cas de défaut ($1-$ taux de recouvrement) ; **EAD** exposition au moment du défaut ; **M** maturité.
:::
:::formule IRB
$$\text{RWA}=12{,}5\times K\times\text{EAD},\qquad\text{Capital}=8\%\times\text{RWA}=K\times\text{EAD}$$
:::
:::exemple Exercices du cours
**Fondation** : EAD 100, PD 2 %, LGD 45 %, $K=8\%$ : RWA $=12{,}5\times8\%\times100=100$ M, capital 8 M.
**Avancée** : PD 1 %, LGD 40 %, $K=5\%$ : RWA $=62{,}5$ M, capital 5 M.
Le cours donne $K$ ; voici comment on le calcule vraiment.
:::
:::formule D'où vient $K$ (formule de Vasicek, complément)
$$K=\text{LGD}\left[\Phi\!\left(\frac{\Phi^{-1}(PD)+\sqrt\rho\,\Phi^{-1}(0{,}999)}{\sqrt{1-\rho}}\right)-PD\right]\times\frac{1+(M-2{,}5)\,b(PD)}{1-1{,}5\,b(PD)}$$
$$b(PD)=(0{,}11852-0{,}05478\ln PD)^2,\quad\rho_{\text{entreprises}}=0{,}12\tfrac{1-e^{-50PD}}{1-e^{-50}}+0{,}24\Big(1-\tfrac{1-e^{-50PD}}{1-e^{-50}}\Big)$$
C'est le quantile à 99,9 % de la perte, **moins** la perte attendue.
:::

## Risques de marché et opérationnel | p. 53-62
:::def Risque de marché
Pertes dues aux variations de taux, change, actions, matières premières, sur le **trading book** (pas le banking book). Norme du cours : 10 jours, 99 %.
:::
:::formule Approche standard
$$\text{Capital}=\text{Risque spécifique}+\text{Risque général}$$
Exemple : obligation 100 M × 8 % = 8 M. Simple et robuste, mais insensible à la diversification.
:::
:::formule Modèle interne
$$\text{Capital}=\max\big(\operatorname{VaR}_{t-1}\,;\ m\times\overline{\operatorname{VaR}}_{60j}\big),\qquad m\ge3$$
:::
:::formule VaR paramétrique
$$\operatorname{VaR}=z\times\sigma\times\sqrt t\times\text{Exposition}$$
Exemple : $2{,}33\times2\%\times100=4{,}66$ M à 1 jour. À 10 jours : $4{,}66\sqrt{10}=14{,}74$ M.
:::
:::piege La racine de $t$
Dans la diapositive, la formule affiche « $t$ » : il faut lire $\sqrt t$ (rendements indépendants : les *variances* s'additionnent). VaR **historique** : on prend directement le quantile des pertes passées.
:::
:::def Risque opérationnel
Pertes dues à l'inadéquation ou la défaillance de **processus, personnes, systèmes**, ou à des **événements externes**. Sept catégories : fraude interne ; fraude externe ; pratiques d'emploi ; clients/produits ; dommages aux actifs ; défaillance informatique ; exécution/livraison.
:::
:::formule Trois méthodes
$$\text{BIA : }K=15\%\times\overline{PNB}\qquad\text{TSA : }K=\sum_i\beta_i\,PNB_i\qquad\text{AMA : modèle interne (abandonné par Bâle IV)}$$
Bêtas du cours : banque de détail 12 %, commerciale 15 %, trading 18 %. Exemple BIA : $15\%\times100=15$ M.
:::

## Capital économique : EL, UL, VaR, ES | p. 63-71
:::def Capital économique
Montant de capital pour absorber les pertes **inattendues** avec un niveau de confiance donné sur un horizon donné, selon des modèles internes.
:::
| Critère | Réglementaire | Économique |
|---|---|---|
| Objectif | respecter Bâle | pilotage interne |
| Méthode | standardisée | modèles internes |
| Horizon | 1 an | flexible |
| Risques | limités | exhaustifs |

:::formule Les pertes
$$EL=PD\times LGD\times EAD\qquad UL=\text{volatilité des pertes autour de }EL$$
$$EC=\text{Mesure de risque}-EL=\operatorname{VaR}_{99{,}9\%}-EL$$
:::
:::intuition Qui paie quoi ?
La perte **attendue** est un coût normal : elle est couverte par le prix et les provisions. La perte **inattendue** est couverte par le capital. Au-delà du quantile : c'est la faillite (ou l'État).
:::
Niveaux usuels : 99,5 % en assurance, 99,9 % en banque. La VaR ignore ce qui se passe au-delà et n'est pas sous-additive ; l'ES $=E[L\mid L>\operatorname{VaR}]$ est cohérente.
:::exo EAD 200 M, PD 1,5 %, LGD 40 %, VaR 99,9 % = 14 M. EC ?
---
$EL=0{,}015\times0{,}4\times200=1{,}2$ M. $EC=14-1{,}2=12{,}8$ M.
:::

## Allouer le capital : proportionnel, Euler, Shapley | p. 72-88
:::def Le problème
$L=\sum L_i$, capital total $EC$. Trouver $EC_i$ avec $\sum EC_i=EC$. Bonne allocation : additive, cohérente, sensible au risque, incitative.
:::
:::formule Trois méthodes
$$\text{Proportionnelle : }EC_i=EC\times\frac{Risk_i}{\sum_jRisk_j}\qquad\text{Euler : }EC_i=w_i\frac{\partial EC}{\partial w_i}$$
$$\text{Shapley : }EC_i=\text{moyenne, sur toutes les permutations, de la contribution marginale de }i$$
:::
:::preuve Pourquoi Euler somme exactement au total
Si $EC$ est homogène de degré 1 ($EC(\lambda w)=\lambda EC(w)$), dériver en $\lambda=1$ : $\sum_iw_i\frac{\partial EC}{\partial w_i}=EC$. C'est le théorème d'Euler.
:::
:::exemple Proportionnelle (cours)
VaR 100, 200, 300, capital 480 : $480\times\frac{100}{600}=80$, 160, 240.
:::
:::exemple Diversification (cours)
Deux activités de VaR 100, corrélation 0,2 : $\sqrt{100^2+100^2+2\times0{,}2\times100^2}=\sqrt{24\,000}\approx155$. Gain de diversification : $200-155=45$. Allocation égale : 77,5 chacune.
:::
:::formule Euler pour $EC=\sigma_p=\sqrt{w'\Sigma w}$
$$EC_i=\frac{w_i(\Sigma w)_i}{\sigma_p},\qquad(\Sigma w)_i=\sigma_i\sum_j\rho_{ij}\sigma_jw_j$$
:::
:::exemple Euler, calcul exact
Retail 10 %, Corporate 15 %, Market 20 %, $w_i=1$ ; $\rho_{RC}=0{,}3,\rho_{RM}=0{,}2,\rho_{CM}=0{,}5$.
$\sigma_p^2=100+225+400+90+80+300=1195$, $\sigma_p=34{,}57$.
- $(\Sigma w)_R=10(10+4{,}5+4)=185$, $EC_R=\frac{185}{34{,}57}=5{,}35$
- $(\Sigma w)_C=15(3+15+10)=420$, $EC_C=12{,}15$
- $(\Sigma w)_M=20(2+7{,}5+20)=590$, $EC_M=17{,}07$

Total : $34{,}57$ ✓. Parts : 15 %, 35 %, 49 %.
:::
:::piege Erreur à corriger, diapositives 85 à 88
Le corrigé écrit $EC_R=18{,}5$, $EC_C=28$, $EC_M=29{,}5$ et un total « ≈ 34,57 ». Mais $18{,}5+28+29{,}5=76$. On a **oublié le facteur $\sigma_i$** dans $(\Sigma w)_i$, puis *multiplié* au lieu de diviser par $\sigma_p$. Réflexe : **toujours vérifier que la somme des contributions redonne le total**. Les conclusions (Market consomme le plus, Retail le moins) restent vraies.
:::
:::exo Shapley à deux activités : $EC(A)=100$, $EC(B)=100$, $EC(AB)=155$
---
Ordre AB : A apporte 100, B apporte 55. Ordre BA : A apporte 55, B 100. Moyenne : 77,5 chacun.
:::

## RAROC et EVA | p. 77, 89-95
:::formule Performance ajustée du risque
$$\text{RAROC}=\frac{\text{Revenu}-EL}{\text{Capital économique}}\qquad\text{EVA}=(\text{Revenu}-EL)-c\times\text{Capital}$$
Accepter si RAROC > coût du capital $c$, ce qui équivaut à EVA > 0.
:::
| Activité | Revenu | EL | Capital | Résultat ajusté | RAROC | EVA ($c=12\%$) |
|---|---|---|---|---|---|---|
| Retail | 80 | 20 | 100 | 60 | 60 % | $60-12=48$ |
| Corporate | 120 | 50 | 150 | 70 | 46,7 % | $70-18=52$ |
| Market | 150 | 70 | 200 | 80 | 40 % | $80-24=56$ |

:::intuition Le dilemme
Retail a le meilleur **RAROC** (rendement par franc de capital), Market crée le plus d'**EVA** (valeur absolue). Capital **contraint** → maximiser RAROC. Objectif de **croissance** avec capital disponible → maximiser EVA.
:::

## Étude de cas BAF, entièrement corrigée | p. 96-107
:::exemple Énoncé (milliards FCFA)
Crédits : grandes entreprises BBB 200 (100 %), PME non notées 150 (100 %), immobilier 250 (50 %), conso 100 (75 %). PNB 120, $\alpha=15\%$. Trading : 80, volatilité 2 %. Fonds propres 60.
:::
### 1. Solvabilité
$RWA_{\text{crédit}}=200+150+125+75=550$. Opérationnel : $15\%\times120=18$, $RWA=\frac{18}{8\%}=225$. Total 775.
$$\text{Ratio}=\frac{60}{775}=7{,}74\%<8\%\quad\Rightarrow\text{ non conforme.}$$
Il manque $0{,}08\times775-60=2$ milliards.
:::piege Le risque de marché a été oublié
Le pilier 1 l'exige. Même en ne prenant que la VaR à 1 jour comme capital : $12{,}5\times3{,}73=46{,}6$, RWA $=821{,}6$, ratio $7{,}30\%$. La vraie exigence (10 jours, $m\ge3$) serait plus lourde encore.
:::
### 2. VaR
$\operatorname{VaR}_{99\%,1j}=2{,}33\times2\%\times80=3{,}73$. Annualisée (250 jours) : $3{,}73\sqrt{250}\approx58{,}9$.
### 3. Capital économique agrégé
$C=(50;\ 3{,}73;\ 18)$, corrélations 0,3 / 0,2 / 0,1 :
$$EC^2=2500+13{,}9+324+111{,}9+360+13{,}4=3323{,}2\ \Rightarrow\ EC\approx57{,}6$$
:::piege Correction
La diapositive 105 annonce « ≈ 56,5 ». Le calcul exact donne **57,6**. Diversification : $71{,}73-57{,}65=14{,}1$.
:::
### 4. Allocation
| Risque | Proportionnelle | Euler $\frac{C_i(\rho C)_i}{EC}$ |
|---|---|---|
| Crédit | 40,2 | $\frac{50\times54{,}72}{57{,}65}=47{,}5$ |
| Marché | 3,0 | $\frac{3{,}73\times20{,}53}{57{,}65}=1{,}3$ |
| Opérationnel | 14,5 | $\frac{18\times28{,}37}{57{,}65}=8{,}9$ |
| Total | 57,65 | 57,65 |

Euler charge davantage le crédit, risque dominant, et récompense l'opérationnel qui diversifie.
### 5. RAROC
Corporate $\frac{12}{30}=40\%$, Retail $\frac{10}{20}=50\%$, Trading $\frac66=100\%$. Toutes dépassent 12 %. Attention : les capitaux 30, 20 et 6 sont posés par le corrigé, sans lien avec l'allocation par risque ci-dessus ; un RAROC de 100 % en trading reflète surtout une VaR à 1 jour, donc un capital très sous-estimé.
:::labo bale
:::

## QUIZ
? Quel élément absorbe les pertes en premier ?
- Les dépôts
- Les dettes
+ Le capital
- L'État
> Séquence : pertes → résultat → capital.
? Le ratio Cooke date de…
- 1974
+ 1988
- 2004
- 2010
> Bâle I.
? Pourquoi le facteur 12,5 ?
+ c'est $1/8\%$
- c'est 100/8 par hasard
- multiplicateur de VaR
- maturité
> Convertit un capital en RWA.
? L'ICAAP appartient au pilier…
- 1
+ 2
- 3
- 4
> Auto-évaluation, examinée par le SREP.
? En IRB Fondation la banque estime…
+ PD seulement
- PD, LGD, EAD, M
- LGD seulement
- rien
> En avancée : tout.
? $EL$ ?
+ $PD\times LGD\times EAD$
- $PD\times EAD$
- VaR $-$ ES
- $12{,}5K$
> Perte attendue.
? Capital économique ?
- VaR
+ VaR $-$ EL
- EL
- UL + EL
> EL est couverte par le prix et les provisions.
? Somme des contributions d'Euler ?
+ égale au capital total
- supérieure
- inférieure
- dépend
> Théorème d'Euler, homogénéité de degré 1.
? VaR 10 jours si la VaR 1 jour est 4,66 ?
- 46,6
+ 14,74
- 4,66
- 23,3
> Multiplier par $\sqrt{10}$.
? Capital contraint : on maximise…
+ le RAROC
- l'EVA
- le PNB
- le levier
> Rendement par franc de capital.
? LCR minimal ?
- 3 %
- 8 %
- 72,5 %
+ 100 %
> Actifs liquides / sorties nettes à 30 jours.

## CARTES
Ratio de solvabilité :: $\frac{FP}{RWA_c+12{,}5K_m+12{,}5K_o}\ge8\%$
LCR :: actifs liquides / sorties nettes 30 j $\ge100\%$
Ratio de levier :: Tier 1 / exposition totale $\ge3\%$
Output floor :: 72,5 % du standard
Trois piliers :: exigences, surveillance (ICAAP/SREP), discipline de marché
RWA IRB :: $12{,}5\times K\times EAD$
BIA :: $15\%\times$ PNB moyen
TSA bêtas :: détail 12 %, commercial 15 %, trading 18 %
Euler (écart-type) :: $w_i(\Sigma w)_i/\sigma_p$
RAROC :: (revenu − EL)/capital économique
EVA :: résultat ajusté − c × capital
Aléa moral :: prendre trop de risque quand d'autres paient les pertes

## PODCAST Le matelas de la banque
A: Bienvenue ! Aujourd'hui, le capital bancaire et les accords de Bâle. Kofi, que se passe-t-il quand un client ne rembourse pas ?
B: La banque perd de l'argent.
A: Et sur qui tombe la perte ? D'abord le résultat, puis le capital. Les déposants ne sont touchés que si le matelas est épuisé.
B: Donc plus le matelas est épais, mieux c'est.
A: Pour la sécurité, oui. Mais le capital coûte cher. D'où la question de toute la journée : combien de capital, et où le mettre ?
B: Pourquoi le réglementer ?
A: À cause de l'aléa moral. Peu de capital et des dépôts garantis, cela pousse à prendre trop de risques : si ça gagne, c'est pour moi, si ça perd, c'est pour les autres.
B: Et Herstatt ?
A: Mille neuf cent soixante-quatorze, une banque allemande tombe et désorganise les paiements mondiaux. Naissance du Comité de Bâle. Bâle un, en quatre-vingt-huit, impose huit pour cent des actifs pondérés. Bâle deux, en deux mille quatre, ajoute trois piliers et le risque opérationnel. Bâle trois, après la crise, renforce la qualité du capital, ajoute levier et liquidité. Bâle quatre met des planchers aux modèles internes.
B: Les trois piliers ?
A: Un, le minimum chiffré. Deux, la banque s'auto-évalue, c'est l'ICAAP, et le superviseur vérifie, c'est le SREP. Trois, la transparence.
B: Le risque de crédit, comment ça se calcule ?
A: En standard, exposition fois pondération. En interne, douze virgule cinq, fois K, fois l'exposition. Douze virgule cinq, c'est un divisé par huit pour cent.
B: Et le capital économique ?
A: On prend le quantile à quatre-vingt-dix-neuf virgule neuf pour cent et on retire la perte attendue. La perte attendue, PD fois LGD fois EAD, c'est un coût normal, on le met dans le prix.
B: Comment répartir ce capital entre les métiers ?
A: Proportionnellement, c'est simple mais cela ignore la diversification. Euler, c'est la contribution marginale : poids fois dérivée. Et la somme redonne exactement le total.
B: Le corrigé du séminaire trouvait dix-huit et demi, vingt-huit et vingt-neuf et demi pour un total de trente-quatre virgule cinq sept.
A: Additionne : cela fait soixante-seize. Il manque un facteur. Les bonnes valeurs sont cinq virgule trente-cinq, douze virgule quinze, et dix-sept virgule zéro sept. Vérifie toujours que la somme retombe sur le total.
B: Et RAROC contre EVA ?
A: Le RAROC est un rendement par franc de capital. L'EVA est une création de valeur en francs. Si le capital est rare, on suit le RAROC. Si on peut grandir, on suit l'EVA.
B: Et la banque de l'étude de cas ?
A: Ratio de sept virgule soixante-quatorze pour cent : non conforme. Et encore, le corrigé a oublié le risque de marché. Avec lui, on descend à environ sept virgule trois.
B: Donc il faut lever du capital ou réduire les risques.
A: Exactement. À bientôt !
`);
