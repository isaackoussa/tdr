COURS({
  id: 'cima0',
  titre: 'CIMA 0 : le langage de l’assurance vie',
  fichier: 'Module0_Dictionnaire_Actuariat_Vie_CIMA.pptx',
  auteur: 'Préparé pour Dr Florent Kanga Gbongue, version du 2 novembre 2026',
  pages: 86,
  famille: 'Actuariat vie CIMA',
  resume: 'Dictionnaire raisonné : contrat, acteurs, produits, tarif, provisions, solvabilité, réassurance, microassurance, takaful, gouvernance, cas Awa et Ébène Vie.'
}, String.raw`
## Comment lire une définition et une règle | dia. 1-5
:::intuition Un même mot relie trois mondes
« Rachat » : pour le **contrat**, c'est un droit du client ; pour le **calcul**, une provision à évaluer ; pour le **conseil d'administration**, une sortie de trésorerie. Maîtriser le vocabulaire, c'est tenir les trois ensemble.
:::
:::methode Trois statuts de définition
- **[D] textuelle** : le Code définit le terme.
- **[R] tirée du régime** : le sens résulte de plusieurs articles.
- **[T] technique** : terme actuariel, sans obligation nouvelle.
:::
:::piege Une règle se lit dans sa version datée
Trois dates différentes : **signature**, **publication** au Bulletin officiel, **effet**. Le Code 2019 est un socle, modifié par les textes de 2019 (takaful), 2024 (numérique, provision de gestion, participation, réassurance), 2025-2026 (rachat, LBC/FT, dividendes, microassurance).
:::

## Fondements | dia. 6-9, 71
:::def Les mots de base
- **Assurance [R]** : contre une prime, l'assureur s'engage à fournir une prestation si l'événement convenu se réalise.
- **Risque [T]** : événement incertain. En vie, l'incertitude porte souvent sur la *date* du décès.
- **Aléa [T]** : incertitude sur la réalisation, la date ou les conséquences.
- **Mutualisation [T]** : mise en commun d'expositions.
- **Assurance sur la vie [R]** : engagement qui dépend de la durée de la vie humaine.
- **Assurances de personnes [R]** : famille plus large (vie, intégrité physique, maladie, accident).
- **Prévoyance [T]** : protection décès, incapacité, invalidité.
- **Prestation forfaitaire [T]** : montant fixé au contrat, sans lien avec le dommage subi.
:::
| Opération | Idée |
|---|---|
| Assurance directe | engagement envers le souscripteur, l'assuré, le bénéficiaire |
| Coassurance | plusieurs assureurs **directs** partagent un même risque |
| Réassurance [D] | un assureur **cède** des risques ; il reste responsable envers l'assuré |
| Capitalisation [D] | épargne à engagements déterminés en durée et en montant |

:::piege Les cinq confusions à éliminer
| A | B | Différence |
|---|---|---|
| Prime | Épargne constituée | la prime finance aussi garanties et frais |
| Capital garanti | Provision mathématique | prestation promise / dette actuarielle |
| Participation aux bénéfices | Dividende | assurés / actionnaires |
| Couverture | Marge de solvabilité | actifs représentatifs / coussin admissible |
| Solvabilité | Liquidité | capacité globale / paiement à temps |
:::
**Quatre dates à distinguer** : survenance, déclaration, liquidation (détermination du montant), paiement.

## Les acteurs | dia. 10-14
:::def Autour du contrat
- **Assureur** : porte la garantie. **Souscripteur** : conclut le contrat. **Assuré (tête)** : personne dont la vie est l'événement. **Bénéficiaire** : reçoit le capital. Une même personne peut cumuler.
- **Groupe** : souscripteur personne morale, **adhérents** liés par un lien de même nature, **bulletin d'adhésion**, **notice** (établie par l'assureur, remise par le souscripteur).
- **Clause bénéficiaire**, **acceptation** (rend la désignation irrévocable), **révocation**, **droit propre** (capital hors succession, art. 71).
- **Distributeurs** : agent général (mandat de l'assureur), courtier, bancassurance. Une banque qui vend ne devient pas assureur.
- **Numérique** : contrat électronique, traçabilité, prestataire technique.
:::
:::piege Deux « bénéficiaires »
Le **bénéficiaire du contrat** (reçoit le capital) n'est pas le **bénéficiaire effectif** de la LBC/FT (personne physique qui contrôle ou profite en dernier ressort).
:::

## Contrat et droits | dia. 15-21
:::def Documents
Proposition → police → conditions générales / particulières → avenant (modification). **Encadré** : résumé réglementé en tête. **Renonciation** : revenir sur l'engagement.
:::
:::def Délimiter la garantie
**Exclusion** : cause non couverte. **Délai de carence** : la garantie commence plus tard. **Franchise** : part laissée à l'assuré. L'exclusion décrit le *champ*, la carence déplace le *temps*.
:::
:::def Rachat, réduction, avance
- **Rachat** : on *consomme* des droits (total : le contrat finit ; partiel : il continue diminué).
- **Réduction** : on arrête de payer, le contrat continue avec des garanties *réduites*.
- **Avance** : l'assureur *prête* dans la limite de la valeur de rachat : on crée une **dette**.
- **Indemnité de rachat** : prélèvement plafonné sur la provision (5 %, nul après 10 ans).
:::
| Article 74, rédaction 2025 | Délai |
|---|---|
| Rachat | 15 jours |
| Avance | 15 jours ouvrés |
| Capital échu ou décès | 15 jours ouvrés après pièces |
| Retard | 2,5 % **par mois**, de plein droit |
| Accès rachat / réduction | 10 % des primes ou une prime annuelle |

:::def Incidents
**Nullité** (validité), **résiliation** (fin anticipée), **déchéance** (perte du droit à prestation), **prescription** (fin du droit d'agir).
:::

## Les produits | dia. 22-26
| Produit | Paie si… |
|---|---|
| Temporaire décès | décès pendant la durée |
| Vie entière | décès, sans terme |
| Capital différé | vivant à la date |
| Mixte | décès pendant **ou** vie au terme |
| Rente viagère | vivant, à chaque échéance (arrérages) |
| Réversion | après le premier rentier, à l'autre tête |
| Contre-assurance | remboursement si décès avant terme d'une assurance vie |
| Emprunteur | rembourse le prêt |
| Rente éducation | versée aux enfants |

:::def UC et tontine
**Unité de compte** : garantie exprimée en parts d'actifs ; **valeur liquidative** ; **arbitrage**. **Opération tontinière [D]** : cotisations capitalisées en commun puis réparties entre survivants ou ayants droit des décédés ; la « tontine » informelle n'en est pas une.
:::
:::formule Plancher UC (art. 56)
$$\text{Contre-valeur au règlement}\ \ge\ \text{garantie évaluée à la valeur initiale de l'UC}$$
Exemple : 100 UC à 10 000, valeur finale 8 000 : support 800 000, référence 1 000 000, écart **200 000** FCFA. Il est donc faux de dire sans réserve que le client porte tout le risque de marché.
:::

## Tarification | dia. 27-32
:::def Prix
**Prime pure** : finance les prestations. **Chargement** : frais. **Prime commerciale** : payée par le client. Prime unique, périodique, versement libre.
:::
:::formule Temporaire un an
$$\text{Prime pure}=\frac{C\,q_x}{1+i}$$
$C=10\,000\,000$, $q_x=0{,}002$, $i=3\%$ : $\frac{20\,000}{1{,}03}=19\,417$ FCFA. Frais = 10 % de la prime commerciale : $\frac{19\,417}{0{,}90}=21\,575$ FCFA.
:::
:::piege L'assiette des frais
$19\,417\times1{,}10=21\,359$ serait faux : 10 % de la prime **commerciale** impose de **diviser par 0,90**.
:::
:::def Mortalité
$q_x$ décès dans l'année, $p_x=1-q_x$. Tables **CIMA H** (garanties décès) et **CIMA F** (garanties vie) : on choisit selon la **garantie**, pas le sexe. **Antisélection** : ceux qui se savent à risque s'assurent plus.
:::
| Taux | Rôle |
|---|---|
| Technique | hypothèse de tarif et provision, plafond 3,5 % (art. 338) |
| Rendement des placements | ce que rapportent les actifs |
| Servi | ce qui est attribué au contrat |

**Note technique**, **visa du tarif**, **tarif d'inventaire**, **base technique** : le tarif doit pouvoir être expliqué et contrôlé.

## Provisions et résultats | dia. 33-38
:::formule Provision mathématique (PM)
$$PM=VAP(\text{engagements assureur})-VAP(\text{engagements assuré})$$
Exemple : $4\,800\,000-1\,600\,000=3\,200\,000$ ; planchers : rachat 3 050 000 et capital réduit 3 100 000 respectés.
:::
:::intuition La PM est une dette
Elle figure au **passif**. Les placements qui la représentent sont à l'**actif**. « Provision » ne veut pas dire trésorerie.
:::
- **PPE** : participation attribuée mais non payable immédiatement ; à utiliser dans les **3 exercices** suivants.
- **PG** : provision de gestion (frais futurs). **Provision pour risque d'exigibilité** (moins-values). **Prestations à payer**.
- **Participation aux bénéfices** (règl. 03/2024) : proportion du résultat avant impôt, au moins **2 %** (proportion à fixer par règlement d'application).
- **Résultat technique**, **financier**, **variation de provision** (une hausse est une charge).
:::piege PPE a deux sens
Provision pour participation aux excédents, ou Personne politiquement exposée. Préciser le contexte.
:::

## Actifs et solvabilité | dia. 39-43
:::formule Deux ratios, deux dénominateurs
$$\text{Couverture}=\frac{\text{Actifs admis}}{\text{Engagements réglementés}}\qquad\text{Solvabilité}=\frac{\text{Marge disponible}}{\text{Marge requise}}$$
:::
:::formule Marge vie requise (art. 337-3)
$$M=5\%\times(PM+PG)_{brutes}\times\max\Big(\frac{PM_{nettes}}{PM_{brutes}},\,85\%\Big)+\text{garanties complémentaires}$$
$PM=10$ Md, $PG=0{,}2$, rétention 80 % → 85 % : $0{,}05\times10{,}2\times0{,}85=0{,}4335$ Md = **433,5 M**.
:::
Troisième test, indépendant : la **liquidité**. **ALM** : pilotage conjoint actif-passif ; **duration** ; **stress test** ; **congruence** (même devise) ; **dispersion**.

## Réassurance | dia. 44-47, 74
- **Cédante** (transfère), **cessionnaire** (accepte), **rétrocession** (réassurance du réassureur), **plein de conservation**.
- **Traité** (portefeuille) / **facultative** (cas par cas). **Quote-part**, **excédent de plein** (proportionnels), **excédent de sinistre** (priorité, portée).
:::formule Capital sous risque
$$CSR=\text{Prestation décès}-PM$$
$10-3=7$ millions : c'est l'objet de la **réassurance de risque [D]**.
:::
**Brut / net** de réassurance ; **créance sur réassureur** ; **captive** ; **bureau de souscription** ; **succursale**. Un réassureur du même groupe n'efface pas le risque de contrepartie.

## Microassurance et takaful | dia. 48-53
:::def Microassurance (livre VII)
Faibles revenus, faibles primes et/ou capitaux, simplicité. Art. 74 **écarté** : régime propre (702-703). Rachat dès 15 % des primes ou une prime ; valeur de rachat **au moins égale aux cotisations** ; paiements sous **10 jours** ; comptes distincts ; langue locale admise.
:::
:::def Takaful (livre IX, règl. 003/2019)
Entraide : cotisations en donation dans le **fonds des participants**, séparé de celui des actionnaires. **Wakala** (mandat à commission) ou **moudharaba** (part des bénéfices). **Surplus** : propriété des participants. **Avance** (qard) sans intérêt en cas de déficit. **Retakaful**. **Comité charaïque**. **Fenêtre takaful** d'un assureur conventionnel.
:::

## Gouvernance et conformité | dia. 54-58
- **CIMA / CMA** (normes), **CRCA** (contrôle et sanctions), **Secrétariat général** (prépare, exécute), **DNA** (relais national). **Agrément** (autoriser l'activité) ≠ **visa** (valider le tarif).
- **Conseil d'administration** (oriente, surveille), **contrôle interne**, **audit interne**, **commissaire aux comptes**.
- **LBC/FT**, **bénéficiaire effectif**, **conflit d'intérêts**. **PCA** (continuité) et plan de reprise informatique : à **tester**.
- Difficultés : injonction, plan de redressement, sanction, transfert de portefeuille, retrait d'agrément, liquidation.

## Ateliers corrigés | dia. 59-64
:::exo Awa, mixte 20 ans, prime 300 000 : fiche en six lignes
---
1. Rôles : Awa souscriptrice et assurée ; l'enfant bénéficiaire décès ; Awa bénéficiaire au terme. 2. Événements : décès avant terme ; vie au terme. 3. Prime annuelle 300 000. 4. Frais : lire l'encadré. 5. Valeur garantie : tableau de rachat. 6. Version : art. 74 (2025) si sa date d'effet est établie.
:::
:::exo PM = 2 000 000, indemnité 3 % : rachat total ? avance de 500 000 ? arrêt des primes ?
---
Rachat : $2\,000\,000\times0{,}97=1\,940\,000$, fin du contrat. Avance : le contrat continue, dette de 500 000 + intérêts ; en cas de décès la dette s'impute. Arrêt : capital réduit $=PM/A$, plus aucune prime.
:::
:::exo Ébène Vie : couverture 10,8/11 ; marge 0,52/0,45 ; liquidité 0,40/0,70 ; dividende 100 M ?
---
Couverture $98{,}18\%$ : insuffisance 200 M. Marge $115{,}56\%$ : +70 M. Liquidité : −300 M. **Pas de dividende** : les conditions sont **cumulatives** (art. 329-8) ; la marge ne compense ni la couverture ni la liquidité.
:::
:::exo Quiz V / F / ?
1. Le souscripteur est toujours l'assuré. 2. 3,5 % technique = rendement net client. 3. Marge 120 % prouve la liquidité. 4. Art. 74 révisé s'applique à la microassurance. 5. Réassureur du groupe = pas de risque. 6. La valeur de rachat se déduit des primes.
---
Toutes **fausses** : 1 (art. 58-59), 2 (hypothèse, avant frais), 3 (deux tests), 4 (art. 701-702), 5 (contrepartie), 6 (elle vient de la PM, art. 76 ; seul plancher en microassurance, art. 703).
:::

## QUIZ
? Qui établit la notice d'un contrat de groupe ?
+ l'assureur
- le souscripteur
- l'adhérent
- la CRCA
> Le souscripteur la remet.
? La table CIMA F s'utilise pour…
- les femmes
+ les garanties en cas de vie
- les garanties décès
- les frais
> La table suit la garantie.
? Prime pure 900, frais 10 % de la prime commerciale ?
- 990
+ 1000
- 910
- 810
> $900/0{,}9$.
? Une avance sur police…
- met fin au contrat
+ crée une dette
- réduit les garanties futures définitivement
- est un dividende
> Prêt avec intérêts.
? La PM figure…
+ au passif
- à l'actif
- hors bilan
- au compte de résultat
> C'est une dette.
? Plancher de rétention dans la marge vie ?
- 50 %
+ 85 %
- 100 %
- 5 %
> Il limite l'effet de la réassurance.
? Agrément et visa ?
+ deux procédures distinctes
- synonymes
- le visa autorise l'entreprise
- l'agrément valide un tarif
> Agrément : activité. Visa : tarif.
? Délai d'utilisation de la PPE ?
- 1 exercice
+ 3 exercices suivants
- 8 ans
- illimité
> Règl. 03/2024, art. 86.

## CARTES
Prime pure :: finance les prestations seules
Antisélection :: les plus exposés s'assurent davantage
Capital sous risque :: prestation décès − PM
PPE :: provision pour participation aux excédents (ou personne politiquement exposée)
Congruence :: engagements et actifs dans la même devise
Cédante :: celle qui transfère le risque
Rétrocession :: réassurance d'un réassureur
Wakala :: mandat de gestion à commission
Moudharaba :: part des bénéfices
Carence / exclusion :: temps / champ
Réduction :: contrat maintenu sans primes, garanties diminuées
Couverture :: actifs admis / engagements réglementés

## PODCAST Parler la langue de l'assurance vie
A: Bienvenue dans la série actuariat vie CIMA. Épisode zéro : le vocabulaire.
B: Un dictionnaire, ce n'est pas ennuyeux ?
A: Pas si on voit qu'un mot mal compris coûte des millions. Exemple : une société a une marge de cent quinze pour cent. Peut-elle distribuer un dividende ?
B: Je dirais oui.
A: Non, si sa couverture est à quatre-vingt-dix-huit pour cent ou si elle ne peut pas payer dans trente jours. Marge, couverture, liquidité : trois tests distincts.
B: D'accord. Les personnes du contrat ?
A: L'assureur, le souscripteur, l'assuré, le bénéficiaire. Le souscripteur signe, l'assuré est la tête, le bénéficiaire reçoit.
B: Rachat, réduction, avance ?
A: Le rachat consomme, l'avance crée une dette, la réduction garde le contrat avec moins de garanties et plus aucune prime.
B: La prime commerciale ?
A: Prime pure plus chargements. Et si les frais sont dix pour cent de la prime commerciale, on divise par zéro virgule neuf. On ne multiplie pas par un virgule un.
B: Et la provision mathématique ?
A: La valeur actuelle probable de ce que doit l'assureur, moins celle de ce que doit l'assuré. C'est une dette, au passif.
B: La marge de solvabilité ?
A: Cinq pour cent des provisions, corrigés par la rétention, avec un plancher de quatre-vingt-cinq pour cent. Même si tu réassures tout, tu gardes une exigence.
B: Et les tables H et F ?
A: H pour les garanties décès, F pour les garanties en cas de vie. Ce n'est pas homme et femme !
B: Enfin, agrément et visa ?
A: L'agrément autorise l'entreprise à exercer. Le visa valide un tarif. La suite dans l'épisode un : qui décide, qui contrôle.
`);
