COURS({
  id: 'cima3',
  titre: 'CIMA 3 : le contrat vie et ses options',
  fichier: 'Module3_Contrat_vie_et_options.pdf',
  auteur: 'Florent Gbongué, droit arrêté au 24 novembre 2026',
  pages: 46,
  famille: 'Actuariat vie CIMA',
  resume: 'Consentement, renonciation, encadré, primes impayées, bénéficiaire, rachat, réduction, avance, rendement du rachat, seuil rationnel, groupe, UC, microassurance, takaful, LBC/FT.'
}, String.raw`
## Les quatre choix d'Awa | p. 2-4
Six primes payées (2 590 672 FCFA). Quatre options :

| Option | Montant | Effet |
|---|---|---|
| Continuer | 10 000 000 à 55 ans ou au décès | 14 primes restent |
| Racheter | 1 968 338 sous 15 jours | fin ; 76 % des primes |
| Réduire | 3 292 093 à 55 ans ou au décès | plus de prime |
| Emprunter | ≤ 1 968 338 | taux < 6,24 %, < 12 mois |

Douze articles du contrat vie ont été réécrits depuis 2019.

## Former et informer | p. 5-12
:::def Consentement (58-61)
Décès sur la tête d'autrui : **consentement écrit** avec le capital, à peine de nullité. Interdit : mineur de moins de 12 ans, majeur en tutelle, personne hospitalisée en psychiatrie. Mineur de 12 ans ou plus : autorisation parentale **et** consentement personnel.
:::
:::methode Renonciation (65)
Premier versement J → **30 jours** pour renoncer → restitution sous **15 jours** → au-delà **2,5 % par mois**. Seul le coût de police est retenu. Encadré ou tableau non remis : le délai court jusqu'au 30e jour après remise.
:::
:::exo Awa renonce au 20e jour
---
Délai respecté : restitution de la prime moins le **coût de police**, sous 15 jours à compter de la réception.
:::
:::def L'encadré (65-1) : une page, limitatif, ordonné
1° nature ; 2° garanties ; 3° délais ; 4° participation ; 5° rachat ; 6° frais ; 7° avertissement ; 8° numérique (2024).
:::
Conflit 03/2024 contre 006/2024 sur les taux servis : trois lectures (lettre, intention, prudence) ; demander une position écrite.
:::formule Frais minimaux à afficher
$$V_{0^+}=P^{inv}-\alpha S,\qquad f_1\ge1-\frac{V_{0^+}}{P''},\qquad f_k\ge1-\frac{P^{inv}}{P''}\ (k\ge2)$$
:::
:::exemple La première prime d'Awa
$V_{0^+}=385\,190-300\,000=85\,190$ (19,7 %) ; $f_1\ge1-\frac{85\,190}{431\,779}=80{,}3\%$ ; $f_k\ge1-\frac{385\,190}{431\,779}=10{,}8\%$. Les « 3 % du capital » font **80 %** de la première prime.
:::
| Fin d'année | Primes | Valeur de rachat | % | Capital réduit | Rendement |
|---|---|---|---|---|---|
| 1 | 431 779 | 60 381 | 14,0 | 118 696 | −86,0 % |
| 2 | 863 557 | 417 269 | 48,3 | 794 212 | −39,7 % |
| 3 | 1 295 336 | 786 140 | 60,7 | 1 448 755 | −23,0 % |
| 5 | 2 158 893 | 1 561 293 | 72,3 | 2 697 142 | −10,6 % |
| 6 | 2 590 672 | 1 968 338 | 76,0 | 3 292 093 | −7,8 % |
| 8 | 3 454 229 | 2 823 515 | 81,7 | 4 426 420 | −4,5 % |
| 10 | 4 317 786 | 3 934 997 | 91,1 | 5 492 245 | −1,7 % |

Exigé : 8 premières années au moins et somme des primes (65). **Avis annuel** avant le 30 juin (75).
:::piege Le 3,50 % de l'avis
C'est le taux crédité à la **provision**, pas le rendement des primes (−7,8 % si rachat, 1,38 % au terme).
:::

## Faire vivre le contrat | p. 13-17
:::methode Prime impayée (73)
L'assureur ne peut **pas** exiger la prime. Échéance + 10 jours : lettre (ou numérique) ; + 40 jours : **résiliation** si valeur de rachat nulle, sinon **réduction**.
:::
| Situation | L'assureur verse |
|---|---|
| Suicide volontaire et conscient, 2 premières années (66) | provision |
| Fausse déclaration intentionnelle (18, 67) | provision (nullité) |
| Cause exclue (67) | provision |
| Meurtre par le bénéficiaire condamné (78) | provision au contractant ou ayants cause |

Awa, décès exclu en année 2 : 448 749 (juste après la 2e prime), pas les 863 557 de primes.
:::formule Erreur sur l'âge (80)
$$S'=S\times\frac{P_{\text{perçue}}}{P_{due}}$$
Mixte 33 → 35 : $10^7\times\frac{428\,590}{431\,779}=9\,926\,141$ (−0,7 %). Temporaire 38 → 40 : $\frac{61\,375}{68\,365}$ : 8 977 526 (−10,2 %). Âge surestimé : restitution sans intérêt.
:::
:::intuition
La temporaire est presque tout en risque décès (sensible à l'âge) ; le mixte surtout de l'épargne.
:::
:::def Bénéficiaire (68-72, 79)
Désigner (68) → accepter : **irrévocable** (69) → percevoir **hors succession**, droit propre (71). Sans bénéficiaire : patrimoine ou succession (70). Paiement de bonne foi : libératoire (79).
:::

## Sortir ou transformer | p. 18-25
:::formule Provision, rachat, réduction
$$V_t=S\,A_{x+t:\overline{n-t}|}-P^{inv}\,\ddot a_{x+t:\overline{n-t}|},\qquad P^{inv}=\frac{SA_{x:\overline n|}+\alpha S}{\ddot a_{x:\overline n|}}$$
$$VR_t=(1-\kappa_t)V_t,\quad0\le\kappa_t\le5\%\ (t<10),\ \kappa_t=0\ (t\ge10)\qquad S_t^{\text{réd}}=\frac{V_t}{A_{x+t:\overline{n-t}|}}$$
:::
:::exemple Année 6
$V_6=2\,071\,935$ ; $VR=0{,}95\times2\,071\,935=1\,968\,338$ ✓. La 10e année, l'indemnité disparaît : saut. $VR\ge$ primes à l'année **14**.
:::
:::formule Rendement de l'assuré qui rachète
$$\sum_{s=0}^{k-1}P''(1+r_k)^{k-s}=VR_k$$
Année 1 : $431\,779(1+r)=60\,381$, $r=-86{,}0\%$ ✓.
:::
| Article 74 | 2014 | 2022 | 2025 |
|---|---|---|---|
| Rachat acquis | 15 % ou 2 primes | idem | 10 % ou 1 |
| Réduction | 15 % ou 2 | 10 % ou 1 | 10 % ou 1 |
| Rachat payé | 2 mois | 1 mois | 15 jours |
| Retard | escompte × 1,5 puis doublé | 2,5 %/mois | 2,5 %/mois |

:::exo 10 primes prévues : droit au rachat en 2014 ? en 2025 ?
---
2014 : 15 % de 10 = 1,5, donc atteint à la 2e prime (comme « 2 primes »). 2025 : **1** prime.
:::
:::def Pas de rachat (77)
Temporaire décès et rente en service : ni rachat ni réduction. Survie, vie ou rente différée **sans contre-assurance** : réduction oui, rachat non (antisélection). Mixte, différé avec contre-assurance, capitalisation : les deux. L'assureur peut racheter les rentes ≤ 25 000 FCFA d'arrérages (93).
:::
**Rachat d'office** : si $VR<$ SMIG mensuel brut (75 000 en Côte d'Ivoire, à vérifier à la date).
:::formule Avance (74, 74-1)
$$\tau<\min\big(7\%\,;\ 3{,}5\%+b_{N-1}+2\text{ points}\big),\qquad\text{durée}<12\text{ mois}$$
$b=0{,}74\%$ : $6{,}24\%$. 1 000 000 sur 11 mois : $1\,000\,000\times0{,}0624\times\frac{11}{12}\approx57\,200$ (cours : 57 237, taux non arrondi). Non remboursée : rachat partiel **sans** indemnité (76).
:::
:::exo Participation 1,8 % : taux maximal ?
---
$3{,}5+1{,}8+2=7{,}3>7$ : moins de **7 %**.
:::
:::formule Intérêt de retard
$$I=VR\times2{,}5\%\times\text{mois}$$
$1\,968\,338\times5\%=98\,417$ pour 2 mois.
:::
:::exo 1 000 000 payé 45 jours après l'expiration du délai
---
1,5 mois : **37 500** FCFA (intérêt simple).
:::

## Le rachat comme option | p. 26-28
:::formule Seuil de rachat rationnel
$$r>r_s(D,\kappa,c)=(1+c)(1-\kappa)^{-1/D}-1$$
$D$ durée résiduelle, $\kappa$ indemnité, $c$ taux servi.
:::
:::preuve
Garder : $V(1+c)^D$. Racheter et replacer : $(1-\kappa)V(1+r)^D$. On rachète si le second est plus grand.
:::
:::exemple
$c=3{,}5\%,\kappa=5\%,D=5$ : $1{,}035\times0{,}95^{-0{,}2}-1=4{,}57\%$. Titres publics 5 ans > 5 % : racheter peut être rationnel. Sans indemnité, le seuil est $c$.
:::
**Frein unique** : art. 322, la CRCA peut suspendre rachats et avances d'**une entreprise** (en France, le HCSF peut agir sur le marché).
:::exemple Ordres de grandeur 2022
PM vie 1 995 Mds ; si 40 % sortent : 798 Mds ; trésorerie admise 732 Mds (92 %) ; taux +200 pb : perte comptable 156 Mds (79 % de l'excédent de couverture).
:::
:::intuition L'asymétrie
Au passif, le rachat reste au taux du tarif ; à l'actif, les obligations baissent (335-11). Quand les taux montent, on rachète plus **et** les actifs valent moins.
:::

## Contrats et circuits particuliers | p. 29-35
- **Groupe** (95-98) : cotisation décomptée à part ; exclusion 10 + 40 jours ; sortie d'un contrat d'épargne : contrat individuel ou PM ; emprunteur : pas de modification sans accord.
- **UC** (56) : plancher à la valeur de prise d'effet ; hors participation (81). **Tontines** (331). **Capitalisation** (63, 64, 87-90).
:::formule Microassurance (703)
$$VR_t\ge\sum\text{cotisations versées}$$
Art. 74 écarté ; 10 jours ; avance ≤ taux technique ; retard : ancien régime. Donc pas de frais précomptés sur l'épargne.
:::
- **Takaful familial** : fonds des participants (propriété collective, excédent et pertes) / fonds des actionnaires (wakala ou moudaraba) ; **qard** sans intérêt limité aux capitaux propres (920).
- **Bancassurance** (503) : carte professionnelle (510). **Numérique** (01/2024) : pas de crédit, option de paiement non numérique, réclamations tracées.
- **LBC/FT** (003/2025) : bénéficiaires effectifs ; espèces > 9 M/jour (UEMOA) ; CEMAC primes > 5 M/an ou unique > 10 M ; amende 0,1 à 2 % des primes. Schéma à risque : prime en espèces puis rachat par virement. Conflit possible entre 15 jours et diligences.

## Synthèse | p. 36-44
:::methode Cinq idées
1. Consentement et information d'abord. 2. VR = valeur **comptable**, indépendante des taux de marché. 3. Depuis 2025 : droit dès une prime, 15 jours, 2,5 %/mois. 4. Les frais se lisent dans le tableau des VR. 5. Le rachat est une option de **liquidité** gratuite pour l'assuré.
:::

## QUIZ
? Délai de renonciation ?
- 15 jours
+ 30 jours
- 60 jours
- 8 jours
> Restitution sous 15 jours.
? Indemnité de rachat maximale avant 10 ans ?
+ 5 % de la provision
- 10 %
- 5 % des primes
- 2 %
> Art. 76.
? L'assureur vie peut-il exiger la prime ?
- oui
+ non
- après 40 jours
- au tribunal
> Art. 73.
? Suicide en année 1 ?
- capital
+ provision versée
- rien
- primes
> Art. 66-67.
? Capital réduit ?
+ $V_t/A_{x+t:n-t}$
- $V_t/\ddot a$
- $SV_t$
- $VR_t$
> Convention du cours.
? TEG maximal d'une avance ?
- 3,5 %
- 5 %
+ 7 %
- 10 %
> Moins de 12 mois.
? Rente en service : rachat ?
+ non
- oui
- après 10 ans
- avec indemnité
> Antisélection.
? Seuil de rachat sans indemnité ?
+ le taux servi
- 3,5 % toujours
- 0
- 7 %
> $\kappa=0$.
? Plancher en microassurance ?
+ cotisations versées
- PM
- 95 % PM
- SMIG
> Art. 703.

## CARTES
Renonciation :: 30 j, restitution 15 j, 2,5 %/mois
Valeur de rachat :: $(1-\kappa)V$, $\kappa\le5\%$, nul à 10 ans
Capital réduit :: $V_t/A$
Prime impayée :: 10 j + 40 j
Avance :: $<\min(7\%,3{,}5\%+b+2)$
Erreur d'âge :: $S'=S\,P_{\text{perçue}}/P_{due}$
Seuil de rachat :: $(1+c)(1-\kappa)^{-1/D}-1$
Art. 322 :: suspension des rachats
Avis annuel :: 30 juin
Frais 1re prime :: $1-V_{0^+}/P''$

## PODCAST Six ans après, Awa a besoin d'argent
A: Épisode trois. Awa a payé six primes, deux millions cinq cent quatre-vingt-dix mille francs. Elle a besoin d'argent.
B: Elle peut racheter ?
A: Un million neuf cent soixante-huit mille. Soixante-seize pour cent de ce qu'elle a versé.
B: Mais son contrat rapporte trois et demi pour cent !
A: La provision rapporte trois et demi. Mais les frais d'acquisition, trois cent mille francs, ont été pris dès le départ. Quatre-vingts pour cent de sa première prime sont partis en frais.
B: Quand récupère-t-elle ses primes ?
A: À la quatorzième année.
B: Et les autres choix ?
A: Réduire : trois millions deux cent quatre-vingt-douze mille à cinquante-cinq ans, sans plus rien payer. Ou demander une avance, moins de douze mois, à moins de six virgule vingt-quatre pour cent.
B: L'assureur peut-il l'obliger à payer les primes ?
A: Non, jamais en vie. Dix jours, puis quarante jours, et le contrat est réduit ou résilié.
B: Et si elle s'était trompée sur son âge ?
A: On corrige le capital dans le rapport de la prime perçue à la prime due. Zéro virgule sept pour cent pour le mixte, dix pour cent pour une temporaire.
B: Quand est-il rationnel de racheter ?
A: Quand le marché paie plus que un plus c, fois un moins kappa puissance moins un sur D, moins un. Avec cinq ans restants et cinq pour cent d'indemnité, le seuil est quatre virgule cinquante-sept.
B: Pour l'assureur, c'est un danger ?
A: Oui. Quand les taux montent, les assurés rachètent et les obligations perdent de la valeur. Le Code n'a qu'un frein : la CRCA peut suspendre les rachats d'une entreprise.
B: Et depuis deux mille vingt-cinq ?
A: Le droit commence dès une prime, et on paie en quinze jours. L'engagement est plus liquide, les actifs non. À bientôt pour les provisions.
`);
