COURS({
  id: 'ruine',
  titre: 'Théorie du risque et de la ruine',
  fichier: 'THEORIE_DU_RISQUE_ET_DE_LA_RUINE_M2_GRAF.pdf',
  auteur: 'Graf, cours de Master 2',
  pages: 40,
  famille: 'Risque et assurance',
  resume: 'Fonctions génératrices, modèles individuel et collectif, formules de Wald, réassurance, dominance stochastique, principes de prime, VaR et Expected Shortfall, processus de Poisson, inégalité de Lundberg.'
}, String.raw`
## Lois et fonctions génératrices | p. 3-7
:::intuition Le fil du cours
Un risque est une variable aléatoire $X$ (une perte). Cinq questions s'enchaînent : comment **agréger** les risques ? comment les **comparer** ? combien **facturer** ? combien de **capital** immobiliser ? et l'assureur va-t-il **survivre** dans le temps ?
:::
:::def Trois types de lois
- **Discrète** : $P_N=\sum_np_n\delta_{k_n}$ — le *nombre* de sinistres (Bernoulli, Poisson, binomiale négative).
- **Absolument continue** : $P_X(B)=\int_Bf\,d\lambda$ — le *coût* d'un sinistre (gamma, log-normale, Pareto).
- **Semi-discrète semi-continue** : une masse en un point et une densité ailleurs — le coût total d'un assuré : $Y=ZX$, $Z\sim\mathcal B(p)$ :
$$P_Y(B)=(1-p)\,\delta_0(B)+p\int_Bf_X(x)\,dx.$$
:::
:::formule Les lois du cours
$$\text{Poisson : }P(N=n)=e^{-\lambda}\frac{\lambda^n}{n!}\qquad\text{Binomiale négative : }P(N=n)=\frac{\Gamma(r+n)}{n!\,\Gamma(r)}p^r(1-p)^n$$
$$\text{Gamma : }f(x)=\frac{\beta^\alpha}{\Gamma(\alpha)}x^{\alpha-1}e^{-\beta x}\qquad\text{Log-normale : }f(x)=\frac1{x\sigma\sqrt{2\pi}}e^{-\frac{(\ln x-\mu)^2}{2\sigma^2}}$$
$$\text{Pareto : }f(x)=(1+\xi x)^{-1-1/\xi},\ x\ge0$$
:::
:::def Trois fonctions génératrices
$$g_X(t)=E[e^{tX}]\ (\text{moments}),\qquad\varphi_X(t)=E[e^{itX}]\ (\text{caractéristique}),\qquad P_N(z)=E[z^N]\ (\text{probabilités})$$
:::
:::formule À connaître par cœur
| Loi | $g(t)$ | $\varphi(t)$ | $P(z)$ |
|---|---|---|---|
| $\mathcal N(\mu,\sigma^2)$ | $e^{\mu t+\sigma^2t^2/2}$ | $e^{i\mu t-\sigma^2t^2/2}$ | — |
| $\mathcal P(\lambda)$ | $e^{\lambda(e^t-1)}$ | $e^{\lambda(e^{it}-1)}$ | $e^{\lambda(z-1)}$ |
| Gamma$(\alpha,\beta)$ | $\big(\frac\beta{\beta-t}\big)^\alpha,\ t<\beta$ | $\big(\frac\beta{\beta-it}\big)^\alpha$ | — |
:::
:::theo Moments et caractérisation
Si $g_X$ est finie sur un intervalle ouvert **contenant 0** : tous les moments existent, $g_X(t)=\sum_nE[X^n]\frac{t^n}{n!}$, $g_X^{(n)}(0)=E[X^n]$, et la loi est caractérisée par ses moments. La fonction caractéristique caractérise **toujours** la loi.
:::
:::piege Le contre-exemple log-normal
$f_a(x)=f_0(x)(1+a\sin(2\pi\ln x))$, $|a|\le1$ : toutes ces lois **différentes** ont les mêmes moments $e^{n^2/2}$. C'est possible car $g_X(t)=+\infty$ pour tout $t>0$.
:::
:::preuve
Poser $u=\ln x$ : le terme en $a$ devient $e^{n^2/2}\int\sin(2\pi(u+n))\frac{e^{-u^2/2}}{\sqrt{2\pi}}du$. Comme $n$ est entier, $\sin(2\pi(u+n))=\sin(2\pi u)$ : fonction impaire, intégrale nulle.
:::

## Le modèle individuel | p. 8-9
:::def Modèle individuel
Chaque police $i=1..n$ a un sinistre avec probabilité $p_i$, de coût $X_i$ : $S=\sum_{i=1}^nZ_iX_i$, $Z_i\sim\mathcal B(p_i)$, tout indépendant.
:::
:::formule Moments du modèle individuel
$$E(S)=\sum_ip_iE(X_i),\qquad\operatorname{Var}(S)=\sum_ip_i\operatorname{Var}(X_i)+\sum_ip_i(1-p_i)E(X_i)^2$$
:::
:::preuve
$\operatorname{Var}(Z_iX_i)=E(Z_i^2X_i^2)-p_i^2E(X_i)^2$. Comme $Z_i^2=Z_i$ : $p_iE(X_i^2)-p_i^2E(X_i)^2=p_i\operatorname{Var}(X_i)+p_iE(X_i)^2-p_i^2E(X_i)^2$.
:::
:::exemple Application chiffrée
1 000 contrats, $p=0{,}02$, coût de moyenne 500 et d'écart-type 300. $E(S)=1000\times0{,}02\times500=10\,000$. $\operatorname{Var}(S)=1000[0{,}02\times90\,000+0{,}02\times0{,}98\times250\,000]=6\,700\,000$, $\sigma\approx2\,588$.
:::

## Le modèle collectif et les formules de Wald | p. 9-14
:::def Somme aléatoire
$S=\sum_{n=1}^NX_n$ avec $N$ aléatoire à valeurs entières, $S=0$ si $N=0$. Écriture clé : $S=\sum_{n\ge1}X_n\mathbf 1_{\{N\ge n\}}$.
:::
:::formule Lemme de la queue
$$E(N)=\sum_{n\ge0}P(N>n)=\sum_{n\ge1}P(N\ge n)$$
:::
:::theo Formules de Wald
$N\in L^2$ indépendant des $X_n$ i.i.d. de $L^2$ :
$$E(S)=E(N)\,E(X),\qquad\operatorname{Var}(S)=E(N)\operatorname{Var}(X)+\operatorname{Var}(N)\,E(X)^2.$$
:::
:::preuve Première formule
**Cas positif** : $Y_n=\sum_{k\le n}X_k\mathbf 1_{\{N\ge k\}}$ croît vers $S$. Convergence monotone : $E(S)=\sum_kE(X_k)P(N\ge k)=E(X)E(N)$. **Cas général** : $|Y_n|\le S^*=\sum_{k\le N}|X_k|$, intégrable par le cas positif ; convergence dominée.
:::
:::preuve Deuxième formule
$S^2=\sum_iX_i^2+\sum_{i\ne j}X_iX_j$ : $N$ termes d'espérance $E(X^2)$, $N^2-N$ termes d'espérance $E(X)^2$. Wald : $E(S^2)=E(N)E(X^2)+(E(N^2)-E(N))E(X)^2$. On retranche $E(N)^2E(X)^2$ et on regroupe.
:::
:::intuition Lire la variance
Deux sources d'incertitude : *combien coûte chaque sinistre* ($E(N)\operatorname{Var}X$) et *combien il y en a* ($\operatorname{Var}(N)E(X)^2$). Si $N$ est constant, la seconde disparaît.
:::
:::formule Cas Poisson (composé)
$$E(S)=\lambda E(X),\qquad\operatorname{Var}(S)=\lambda E(X^2)$$
:::
:::theo Fonctions génératrices de $S$
$$g_S(t)=g_N\big(\ln g_X(t)\big),\qquad\varphi_S(t)=P_N\big(\varphi_X(t)\big)$$
Poisson composé : $g_S(t)=e^{\lambda(g_X(t)-1)}$.
:::
:::preuve
$E(e^{tS})=\sum_nP(N=n)\,g_X(t)^n=E[g_X(t)^N]$.
:::
:::exo $N\sim\mathcal P(50)$, $X$ exponentielle de moyenne 200 : moyenne et écart-type de $S$ ?
---
$E(X^2)=2\times200^2=80\,000$. $E(S)=10\,000$. $\operatorname{Var}(S)=50\times80\,000=4\,000\,000$, $\sigma=2\,000$.
:::

## Mélanges, agrégation de Poisson, loi de S | p. 15-20
:::theo Loi mélange
$X=\sum Z_iY_i$ où un seul $Z_i$ vaut 1, avec probabilité $p_i$ : $P_X=\sum p_iP_{Y_i}$, $F_X=\sum p_iF_{Y_i}$, $\varphi_X=\sum p_i\varphi_{Y_i}$.
$$\operatorname{Var}(X)=\underbrace{\sum_ip_i\operatorname{Var}(Y_i)}_{\text{intra-classe}}+\underbrace{\sum_ip_i(E(Y_i)-E(X))^2}_{\text{inter-classe}}$$
:::
:::theo Agrégation de Poisson composés
Des sommes indépendantes $S_i$ avec $N_i\sim\mathcal P(\lambda_i)$ : $\sum S_i$ est **encore** un Poisson composé, de paramètre $\lambda=\sum\lambda_i$, avec des coûts de loi mélange $\sum\frac{\lambda_i}\lambda P_{X_i}$.
:::
:::preuve
$\prod_ie^{\lambda_i(\varphi_{X_i}-1)}=\exp\Big[\lambda\Big(\sum\tfrac{\lambda_i}\lambda\varphi_{X_i}-1\Big)\Big]$, puis la fonction caractéristique caractérise la loi.
:::
:::formule Convolution et loi de $S$
$$f_{X+Y}(z)=\int f_X(t)f_Y(z-t)\,dt,\qquad P_S=\sum_{n\ge0}p_n\,P_X^{*n},\quad P_X^{*0}=\delta_0$$
:::
:::exemple Géométrique–exponentielle : le rare cas explicite
$P(N=n)=p(1-p)^n$, $X\sim\mathcal E(\beta)$ : $S$ vaut 0 avec probabilité $p$, sinon suit $\mathcal E(p\beta)$.
Calcul : $\sum_{n\ge1}p(1-p)^n\frac{\beta^nx^{n-1}}{(n-1)!}e^{-\beta x}=p(1-p)\beta e^{-\beta x}e^{(1-p)\beta x}=(1-p)\,p\beta e^{-p\beta x}$.
:::
:::methode En pratique : Monte-Carlo
1. Simuler $N_i$. 2. Simuler $X_1..X_{N_i}$. 3. $S_i$ = leur somme. 4. Répéter ; lire moyenne, quantile. Les formules de Wald servent à **vérifier** le programme. L'approximation normale est jugée « très grossière et à proscrire » ; l'algorithme de Panjer est devenu pédagogique.
:::
:::theo Individuel contre collectif
En remplaçant $Z_i\sim\mathcal B(p_i)$ par $N_i\sim\mathcal P(p_i)$ : même espérance, et
$$\operatorname{Var}(S^c)=\sum p_iE(X_i^2)\ \ge\ \operatorname{Var}(S)=\sum p_iE(X_i^2)-\sum p_i^2E(X_i)^2.$$
La version collective est **plus prudente**.
:::
:::labo poisson
:::

## Réassurance | p. 22-24
:::def Les traités
- **Quote-part** : l'assureur garde $\alpha S=\sum\alpha X_k$, le réassureur $(1-\alpha)S$. Même nombre de sinistres.
- **Excess-of-loss** : par sinistre, l'assureur garde $\min(X_k,P)$, le réassureur $\max(X_k-P,0)$. Avec **portée** $L$ : $\min((X_k-P)^+,L)$, tranche $[P,P+L]$, $P$ = **priorité**.
- **Stop-loss** : sur le total, $I(S)=(S-P)^+$.
:::
:::theo Ce que voit le réassureur (lemme 9)
Si $N\sim\mathcal P(\lambda)$, le nombre de sinistres dépassant $P$ est $\bar N\sim\mathcal P(\lambda(1-F_X(P)))$, et la charge du réassureur est un Poisson composé de coûts $(X-P)\mid X>P$. (Binomiale négative : reste binomiale négative.)
:::
:::preuve
$\varphi_{\mathbf 1_{X>P}}(t)=F(P)+(1-F(P))e^{it}$. Donc $\varphi_{\bar N}=e^{\lambda(F+(1-F)e^{it}-1)}=e^{\lambda(1-F)(e^{it}-1)}$.
:::
:::formule Espérance tronquée (lemme 10)
$$E[\min(X,P)]=\int_0^P(1-F_X(x))\,dx,\qquad E(X)=\int_0^\infty(1-F_X(x))\,dx$$
:::
:::preuve
$\min(X,P)=\int_0^P\mathbf 1_{\{X>t\}}dt$ puis Fubini.
:::
:::def Fonction de remboursement acceptable
$I(0)=0$, $0\le I(s+h)-I(s)\le h$ : croissante, et on ne rembourse jamais plus que la charge supplémentaire (sinon l'assureur gagnerait à aggraver le sinistre). $I$ est alors continue.
:::
:::exemple Exponentielle de moyenne $\mu$
$E[\min(X,P)]=\mu(1-e^{-P/\mu})$. Avec $\mu=100,P=200$ : $86{,}5$ restent à l'assureur, $13{,}5$ vont au réassureur.
:::

## Comparer les risques : dominance stochastique | p. 24-27
:::def Ordre 1
$X\ge_1Y$ si $E[v(X)]\ge E[v(Y)]$ pour toute $v$ **croissante**. Équivaut à $F_X\le F_Y$ partout, ou à l'existence de copies $X'\ge Y'$ p.s.
:::
:::def Ordre 2 (ordre convexe croissant)
$X\ge_2Y$ si $E[v(X)]\ge E[v(Y)]$ pour toute $v$ **croissante et convexe**. Équivaut à $E(X-t)^+\ge E(Y-t)^+$ pour tout $t$ : les primes stop-loss sont toutes plus chères.
:::
:::piege Sens de la préférence
Ici $X,Y$ sont des **pertes**. Donc $X\ge_1Y$ signifie que $X$ est *pire* : tout agent d'utilité croissante préfère **subir $Y$** (prendre $v(z)=-u(-z)$). À l'ordre 2, même conclusion pour un agent croissant et **averse au risque** (concave).
:::
:::theo Critères pratiques
- $X\ge_1Y\Rightarrow X\ge_2Y$.
- $X\ge_2Y\iff X\overset{loi}=Y+Z$ avec $E[Z\mid Y]\ge0$ ($X$ est $Y$ plus un bruit).
- **Critère de coupure** : si $E(X)\ge E(Y)$ et $F_Y\le F_X$ avant $c$, $F_Y\ge F_X$ après $c$, alors $X\ge_2Y$.
:::
:::preuve Ordre 1 : coupler par les quantiles
$F_X\le F_Y$ donne $F_X^{\leftarrow}\ge F_Y^{\leftarrow}$. Avec un même $U\sim\mathcal U[0,1]$ : $X'=F_X^{\leftarrow}(U)\ge F_Y^{\leftarrow}(U)=Y'$.
:::
:::exemple L'exemple du cours
$X=\frac12$ sûr contre $Y\sim\mathcal B(\frac12)$ : même moyenne, $Y=X+\varepsilon$ centré. $Y\ge_2X$ : l'averse au risque préfère la perte sûre. Aucun ordre 1.
:::

## Principes de prime | p. 28-29
:::def Principe de prime et propriétés souhaitées
$H:X\mapsto H(X)\in\overline{\mathbb R}_+$.
1. Profitabilité $H(X)\ge E(X)$. 2. $H(X)\le\operatorname{ess\,sup}X$. 3. $H(X+a)=H(X)+a$. 4. $H(aX)=aH(X)$. 5. $H(X+Y)\le H(X)+H(Y)$. 6. Monotonie. 7. Ne dépend que de la loi.
:::
| Principe | Formule | Défaut |
|---|---|---|
| Prime pure | $E(X)$ | aucun chargement |
| Espérance | $(1+\theta)E(X)$ | pas invariant par translation ; peut dépasser la perte maximale |
| Variance | $E(X)+\alpha\operatorname{Var}(X)$ | pas homogène, pas monotone, peut dépasser la perte max |
| Écart-type | $E(X)+\alpha\sigma(X)$ | peut dépasser la perte max ; voir encadré |
| Utilité | $E[u(R+H-X)]=u(R)$ | dépend des réserves $R$ |
| Coût du capital | $E(X)+\text{prime de risque}+c\times\Delta SCR(X)$ | approche moderne |
:::formule Borne sur la variance (lemme 11)
$$0\le X\le\theta\ \Rightarrow\ \operatorname{Var}(X)\le\theta\mu-\mu^2\le\frac{\theta^2}4$$
:::
:::exemple La prime variance absurde
$P(X=0)=P(X=\theta)=\frac12$ : $H=\frac\theta2+\alpha\frac{\theta^2}4>\theta$ dès que $\theta>\frac2\alpha$ : on paierait plus que la perte maximale.
:::
:::piege À vérifier dans le polycopié
Le cours dit que l'écart-type n'est pas sous-additif « en général même pour des variables indépendantes ». Or Minkowski donne $\sigma(X+Y)\le\sigma(X)+\sigma(Y)$ **toujours** : le principe de l'écart-type $E+\alpha\sigma$ est donc sous-additif (dans $L^2$). Ce qui manque est la *monotonie*. Signale-le à l'enseignant plutôt que de l'apprendre tel quel.
:::
:::exo Utilité exponentielle $u(x)=-e^{-ax}$ : calculer $H$
---
$E[e^{-a(R+H-X)}]=e^{-aR}$ donne $e^{-aH}E[e^{aX}]=1$, donc $H=\frac1a\ln g_X(a)$ : indépendant de $R$.
:::

## Mesures de risque : VaR et Expected Shortfall | p. 29-32
:::def Mesure de risque
$\rho$ vérifie : **monotonie** ($X\le Y\Rightarrow\rho(X)\le\rho(Y)$), **invariance** $\rho(X+m)=\rho(X)+m$, **normalisation** $\rho(0)=0$. **Cohérente** si de plus $\rho(\beta X)=\beta\rho(X)$ ($\beta\ge0$) et $\rho(X+Y)\le\rho(X)+\rho(Y)$.
:::
:::theo Deux propriétés donnent la troisième
Parmi convexité, homogénéité positive, sous-additivité. Et $|\rho(X)-\rho(Y)|\le\operatorname{ess\,sup}|X-Y|$.
:::
:::formule VaR et ES (pertes positives)
$$\operatorname{VaR}(X,\alpha)=\inf\{x:F_X(x)\ge\alpha\}$$
$$\operatorname{ES}(X,\alpha)=\frac1{1-\alpha}\int_\alpha^1\operatorname{VaR}(X,p)\,dp=E[X\mid X\ge\operatorname{VaR}(X,\alpha)]\ \ (X\text{ continue})$$
:::
Solvabilité II : $\alpha=99{,}5\%$ à un an. Pour $g$ strictement croissante (et continue) : $\operatorname{VaR}(g(X))=g(\operatorname{VaR}(X))$.
:::formule Cas normal
$$\operatorname{VaR}_\alpha=\mu+\sigma\Phi^{-1}(\alpha),\qquad\operatorname{ES}_\alpha=\mu+\sigma\frac{\varphi(\Phi^{-1}(\alpha))}{1-\alpha}$$
(complément au polycopié)
:::
:::exemple VaR non sous-additive — cas discret
$X,Y$ indépendants, valent $\gamma$ avec probabilité $p$, 0 sinon. $P(X+Y=0)=(1-p)^2<1-p$. Pour $\alpha\in](1-p)^2,1-p]$ : $\operatorname{VaR}(X)=\operatorname{VaR}(Y)=0$ mais $\operatorname{VaR}(X+Y)=\gamma>0$. Deux crédits « sans risque » en VaR deviennent risqués ensemble !
:::
:::exemple VaR non sous-additive — queue très lourde
$P(X>x)=\frac1{1+x}$ (moyenne infinie), $X,Y$ indépendants : $F_{X+Y}(x)=1-\frac2{2+x}-\frac{2\ln(1+x)}{(2+x)^2}<F_{2X}(x)=1-\frac2{2+x}$, donc $\operatorname{VaR}(X+Y)>\operatorname{VaR}(X)+\operatorname{VaR}(Y)$ à **tous** les niveaux.
:::
:::theo L'ES est cohérente
$\operatorname{ES}(X,\alpha)=\sup\{E(X\mid A):P(A)\ge1-\alpha\}$ (variables continues). Le sup d'une somme est inférieur à la somme des sup : sous-additivité.
:::
:::theo Mesures spectrales (prop. 15)
$\rho(X)=E_Q[\operatorname{VaR}(X,u)]$ est une mesure de risque homogène. $Q=\delta_\alpha$ : VaR ; $Q$ uniforme sur $[\alpha,1]$ : ES.
:::

## Le processus de Poisson | p. 33-36
:::def Processus de Poisson d'intensité $\lambda$
$N_0=0$, trajectoires càdlàg, accroissements indépendants du passé, $N_t-N_s\sim\mathcal P(\lambda(t-s))$.
:::
:::theo Caractérisation par les durées
Équivalent à : durées entre sauts i.i.d. $\mathcal E(\lambda)$, sauts de taille 1. **Construction** : $\tau_j=T_1+\dots+T_j$, $N_t=\sum_j\mathbf 1_{\{\tau_j\le t\}}$.
:::
:::theo Propriétés
- $\tilde N_t=N_t-\lambda t$ est une **martingale** ; $\tilde S_t=S_t-\lambda\mu t$ aussi.
- $P(\text{saut à un instant fixé})=0$, pas de sauts multiples.
- Les instants de saut sont totalement inaccessibles : aucune suite de signaux ne les annonce.
:::
:::preuve Martingale
$E[\tilde N_t|\mathcal F_s]=N_s-\lambda t+E[N_t-N_s]=N_s-\lambda t+\lambda(t-s)=\tilde N_s$.
:::

## Probabilité de ruine et inégalité de Lundberg | p. 36-41
:::def Modèle de Cramér-Lundberg
$$U_t=u+ct-S_t,\qquad S_t=\sum_{k=1}^{N_t}X_k$$
$u$ capital initial, $c$ prime par unité de temps. **Ruine** : $\tau=\inf\{t:U_t<0\}$, $\psi(u)=P(\tau<\infty)$.
:::
:::theo Loi des grands nombres et TCL
$$\frac{S_t}t\to\lambda\mu,\qquad\frac{U_t}t\to c-\lambda\mu,\qquad\frac{S_t-\lambda\mu t}{\sqrt{\lambda t\,E(X^2)}}\overset{loi}\to\mathcal N(0,1)$$
:::
:::formule Chargement de sécurité
$$\rho=\frac c{\lambda\mu}-1,\qquad c=(1+\rho)\lambda\mu,\qquad\psi(u)=1\iff\rho\le0$$
Avec $\rho=0$ (prime pure), la ruine est **certaine** quel que soit $u$.
:::
:::def Coefficient d'ajustement $R$
L'unique $R>0$ solution de $E\big[e^{R(X_1-cZ_1)}\big]=1$, avec $Z_1\sim\mathcal E(\lambda)$, soit
$$g_X(R)=1+(1+\rho)\mu R.$$
:::
:::preuve Existence et unicité de $R$
$q(r)=g_X(r)-1-(1+\rho)\mu r$ : $q(0)=0$, $q'(0)=\mu-(1+\rho)\mu=-\rho\mu<0$, $q$ convexe, et $q\to+\infty$. Elle descend, remonte, et recoupe 0 **une seule fois**.
:::
:::theo Inégalité de Lundberg
$$\psi(u)\le e^{-Ru}$$
:::
:::preuve Par récurrence
La ruine ne peut arriver qu'aux instants de sinistre. $\psi_n(u)$ : ruine avant le $n$-ième. $n=1$, Markov : $P(X_1-cZ_1>u)\le e^{-Ru}E[e^{R(X_1-cZ_1)}]=e^{-Ru}$. Hérédité, en conditionnant par le premier sinistre : $\psi_{n+1}(u)=E[\psi_n(u+cZ_1-X_1)]\le e^{-Ru}E[e^{R(X_1-cZ_1)}]=e^{-Ru}$. Puis $n\to\infty$.
:::
:::theo Formule exacte (martingale)
$e^{-RU_t}$ est une martingale et
$$\psi(u)=\frac{e^{-Ru}}{E\big[e^{-RU_\tau}\mid\tau<\infty\big]}.$$
Comme $U_\tau<0$, le dénominateur dépasse 1 : on retrouve Lundberg.
:::
:::preuve
$E[e^{-RU_t}|\mathcal F_s]=e^{-RU_s}e^{-cR(t-s)}e^{\lambda(t-s)(g_X(R)-1)}=e^{-RU_s}$ car $\lambda(g_X(R)-1)=cR$. Théorème d'arrêt en $\tau\wedge n$ : $e^{-Ru}=E[e^{-RU_\tau}\mathbf 1_{\tau\le n}]+E[e^{-RU_n}\mathbf 1_{\tau>n}]$ ; le second tend vers 0 (dominée, $U_n\to\infty$), le premier croît vers $E[e^{-RU_\tau}\mathbf 1_{\tau<\infty}]$.
:::
:::formule Sinistres exponentiels de moyenne $\mu$ : solution complète
$$R=\frac{\rho}{\mu(1+\rho)},\qquad\psi(u)=\frac1{1+\rho}\,e^{-Ru}$$
:::
:::exo Retrouver $R$ et $\psi$ dans le cas exponentiel
---
$g_X(R)=\frac1{1-\mu R}=1+(1+\rho)\mu R$. Donc $1=(1-\mu R)(1+(1+\rho)\mu R)$, soit $\rho\mu R-(1+\rho)\mu^2R^2=0$, $R=\frac\rho{\mu(1+\rho)}$. Absence de mémoire : $-U_\tau\sim\mathcal E(1/\mu)$, donc $E[e^{-RU_\tau}|\tau<\infty]=\frac1{1-\mu R}=1+\rho$.
:::
:::exemple Combien de capital ?
$\mu=100$, $\rho=20\%$ : $R=\frac{0{,}2}{120}=0{,}001667$. Pour $\psi(u)\le1\%$ par Lundberg : $u\ge\frac{\ln100}R\approx2\,763$. Exactement : $u=\frac{\ln(100/1{,}2)}R\approx2\,654$.
:::
:::piege Condition d'application
Il faut $g_X(t)<\infty$ pour un $t>0$. Pour Pareto ou log-normale (queues lourdes), $R$ **n'existe pas** et Lundberg ne s'applique pas : c'est là qu'intervient la théorie des valeurs extrêmes.
:::
:::labo ruine
:::

## QUIZ
? $\operatorname{Var}(S)$ dans le modèle collectif ?
- $E(N)\operatorname{Var}(X)$
+ $E(N)\operatorname{Var}(X)+\operatorname{Var}(N)E(X)^2$
- $\operatorname{Var}(N)\operatorname{Var}(X)$
- $E(N)^2\operatorname{Var}(X)$
> Deux sources : montant et nombre.
? Poisson composé : $\operatorname{Var}(S)$ ?
- $\lambda E(X)^2$
- $\lambda\operatorname{Var}(X)$
+ $\lambda E(X^2)$
- $\lambda^2E(X^2)$
> $\lambda(\operatorname{Var}X+E(X)^2)$.
? Quelle loi n'est pas caractérisée par ses moments ?
- Normale
- Gamma
- Poisson
+ Log-normale
> Sa fonction génératrice est infinie pour $t>0$.
? $X\ge_1Y$ (pertes) signifie
+ $F_X\le F_Y$ : $X$ est plus dangereux
- $F_X\ge F_Y$
- $E(X)=E(Y)$
- $X\ge Y$ p.s. sur le même espace
> $P(X>t)\ge P(Y>t)$ pour tout $t$.
? Quelle propriété manque à la VaR ?
- Monotonie
- Homogénéité
- Invariance par translation
+ Sous-additivité
> Voir les deux contre-exemples.
? Avec un chargement $\rho=0$, $\psi(u)$ vaut
- 0
+ 1
- $e^{-u}$
- 1/2
> $\psi(u)=1\iff\rho\le0$.
? Équation de $R$ ?
- $g_X(R)=1$
+ $g_X(R)=1+(1+\rho)\mu R$
- $g_X(R)=\lambda R$
- $R=\rho\mu$
> Vient de $E[e^{R(X-cZ)}]=1$.
? Pour quelle loi de sinistres Lundberg ne s'applique-t-il pas ?
- Exponentielle
- Gamma
+ Pareto
- Déterministe
> Pas de moments exponentiels.
? En XL, $N\sim\mathcal P(\lambda)$, sinistres vus par le réassureur ?
+ $\mathcal P(\lambda(1-F(P)))$
- $\mathcal P(\lambda F(P))$
- $\mathcal P(\lambda)$
- Binomiale
> Amincissement du processus de Poisson.
? $E[\min(X,P)]$ ?
+ $\int_0^P(1-F(x))dx$
- $\int_P^\infty(1-F)dx$
- $\int_0^PF$
- $P(1-F(P))$
> Lemme 10, Fubini.

## CARTES
Wald 1 :: $E(S)=E(N)E(X)$
Wald 2 :: $\operatorname{Var}(S)=E(N)\operatorname{Var}(X)+\operatorname{Var}(N)E(X)^2$
$g_S$ :: $g_N(\ln g_X(t))$
$\varphi_S$ :: $P_N(\varphi_X(t))$
Priorité / portée :: $P$ : seuil ; $L$ : maximum payé ; tranche $[P,P+L]$
Dominance d'ordre 1 :: $F_X\le F_Y$
Dominance d'ordre 2 :: $E(X-t)^+\ge E(Y-t)^+$ pour tout $t$
VaR :: $\inf\{x:F_X(x)\ge\alpha\}$
ES :: $\frac1{1-\alpha}\int_\alpha^1\operatorname{VaR}_pdp$
Mesure cohérente :: monotone, invariante, homogène positive, sous-additive
Poisson compensé :: $N_t-\lambda t$ martingale
Coefficient de chargement :: $\rho=\frac c{\lambda\mu}-1$
Lundberg :: $\psi(u)\le e^{-Ru}$
$\psi$ exponentiel :: $\frac1{1+\rho}e^{-\rho u/(\mu(1+\rho))}$

## PODCAST L'assureur va-t-il survivre ?
A: Bienvenue ! Aujourd'hui, théorie du risque et de la ruine. Kofi, tu ouvres une compagnie d'assurance. Première question ?
B: Combien vais-je payer cette année ?
A: Deux façons de modéliser. Le modèle individuel : contrat par contrat, chacun a une probabilité p i d'avoir un sinistre. Le modèle collectif : on oublie qui est qui, il y a un nombre aléatoire N de sinistres, chacun avec un coût X.
B: Et la charge totale S est la somme de N termes.
A: Voilà. Les formules de Wald donnent tout de suite la moyenne : espérance de N fois espérance de X. Et la variance : espérance de N fois variance de X, plus variance de N fois le carré de l'espérance de X.
B: Deux morceaux, donc deux incertitudes : le montant et le nombre.
A: Parfait. Pour Poisson, cela se simplifie : lambda fois l'espérance de X carré.
B: Et la réassurance ?
A: Quote-part : on partage tout dans la même proportion. Excess of loss : au-delà d'une priorité P, sinistre par sinistre, c'est le réassureur qui paie. Et si ton nombre de sinistres est de Poisson, celui du réassureur est aussi de Poisson, avec une intensité réduite.
B: Comment dire qu'un risque est pire qu'un autre ?
A: Dominance d'ordre un : la fonction de répartition est partout plus basse, donc les grandes pertes sont plus probables. Tout le monde préfère l'autre. Dominance d'ordre deux : toutes les primes stop-loss sont plus chères. Là, ce sont les personnes averses au risque qui préfèrent l'autre.
B: Passons à la VaR.
A: La VaR à quatre-vingt-dix-neuf virgule cinq pour cent, c'est le niveau de perte que l'on ne dépasse que dans un demi pour cent des cas. C'est le choix de Solvabilité deux.
B: On lui reproche de ne pas être sous-additive.
A: Exact. Prends deux prêts indépendants qui font défaut rarement. Séparément, la VaR est zéro. Ensemble, la probabilité qu'au moins un fasse défaut dépasse le seuil, et la VaR devient positive. Diversifier augmenterait le risque, c'est absurde.
B: D'où l'expected shortfall.
A: C'est la moyenne des VaR au-delà du seuil. Elle regarde toute la queue, et elle est cohérente.
B: Venons-en à la ruine.
A: Ton capital au temps t, c'est u, plus c t, moins S t. Les primes arrivent en continu, les sinistres tombent par sauts de Poisson. La ruine, c'est passer sous zéro, ne serait-ce qu'une fois.
B: Et si je fais payer exactement la prime pure ?
A: La ruine est certaine, quel que soit ton capital. Il faut un chargement rho strictement positif.
B: Et avec un chargement ?
A: La probabilité de ruine est inférieure à exponentielle de moins R u. R, le coefficient d'ajustement, est l'unique solution positive de : g X de R égale un, plus un plus rho, fois mu, fois R. On trace une fonction convexe qui part de zéro, descend, puis remonte : elle ne recoupe l'axe qu'une fois.
B: L'idée de la preuve ?
A: Exponentielle de moins R U t est une martingale. On l'arrête à la ruine. À ce moment, U est négatif, donc la quantité dépasse un, et l'inégalité tombe.
B: Cela marche pour toutes les lois de sinistres ?
A: Non ! Il faut des moments exponentiels. Avec Pareto, R n'existe pas. Il faut alors la théorie des valeurs extrêmes : notre prochain sujet. À bientôt !
`);
