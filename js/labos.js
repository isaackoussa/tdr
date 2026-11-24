// Simulateurs interactifs. Chaque labo : réglages (curseurs) + calcul + dessin SVG.
(function(){
const f=(x,d=2)=>Number.isFinite(x)?x.toLocaleString('fr-FR',{maximumFractionDigits:d,minimumFractionDigits:0}):'—';
const gauss=()=>{let u=0;while(!u)u=Math.random();return Math.sqrt(-2*Math.log(u))*Math.cos(2*Math.PI*Math.random())};
const expo=m=>-m*Math.log(1-Math.random());
function poisson(l){if(l>60)return Math.max(0,Math.round(l+Math.sqrt(l)*gauss()));const L=Math.exp(-l);let k=0,p=1;do{k++;p*=Math.random()}while(p>L);return k-1}
function Phi(x){const t=1/(1+.2316419*Math.abs(x));const d=.3989422804*Math.exp(-x*x/2);const p=d*t*(.31938153+t*(-.356563782+t*(1.781477937+t*(-1.821255978+t*1.330274429))));return x>0?1-p:p}
function quant(p){const a=[-39.6968302866538,220.946098424521,-275.928510446969,138.357751867269,-30.6647980661472,2.50662827745924],b=[-54.4760987982241,161.585836858041,-155.698979859887,66.8013118877197,-13.2806815528857],c=[-.00778489400243029,-.322396458041136,-2.40075827716184,-2.54973253934373,4.37466414146497,2.93816398269878],d=[.00778469570904146,.32246712907004,2.445134137143,3.75440866190742];let q,r;
 if(p<.02425){q=Math.sqrt(-2*Math.log(p));return(((((c[0]*q+c[1])*q+c[2])*q+c[3])*q+c[4])*q+c[5])/((((d[0]*q+d[1])*q+d[2])*q+d[3])*q+1)}
 if(p>1-.02425)return -quant(1-p);q=p-.5;r=q*q;return(((((a[0]*r+a[1])*r+a[2])*r+a[3])*r+a[4])*r+a[5])*q/(((((b[0]*r+b[1])*r+b[2])*r+b[3])*r+b[4])*r+1)}
const W=640,H=250,M=44;
function graphe(series,o={}){
  let xs=[],ys=[];series.forEach(s=>s.p.forEach(([x,y])=>{xs.push(x);ys.push(y)}));
  let x0=o.x0??Math.min(...xs),x1=o.x1??Math.max(...xs),y0=o.y0??Math.min(...ys),y1=o.y1??Math.max(...ys);if(y1===y0)y1=y0+1;
  const X=x=>M+(x-x0)/(x1-x0)*(W-M-10),Y=y=>H-28-(y-y0)/(y1-y0)*(H-42);
  let s='<svg viewBox="0 0 '+W+' '+H+'" role="img" aria-label="'+(o.alt||'graphique')+'">';
  for(let i=0;i<=4;i++){const y=y0+(y1-y0)*i/4;s+='<line class="gr" x1="'+M+'" x2="'+(W-10)+'" y1="'+Y(y)+'" y2="'+Y(y)+'"/><text x="'+(M-6)+'" y="'+(Y(y)+4)+'" text-anchor="end">'+f(y,o.dy??1)+'</text>'}
  for(let i=0;i<=5;i++){const x=x0+(x1-x0)*i/5;s+='<text x="'+X(x)+'" y="'+(H-8)+'" text-anchor="middle">'+f(x,o.dx??1)+'</text>'}
  if(y0<0&&y1>0)s+='<line class="zero" x1="'+M+'" x2="'+(W-10)+'" y1="'+Y(0)+'" y2="'+Y(0)+'"/>';
  series.forEach(g=>{if(g.barres){const w=(W-M-10)/g.p.length;g.p.forEach(([x,y],i)=>s+='<rect class="'+(g.c||'s1')+'" x="'+(M+i*w)+'" width="'+Math.max(1,w-1)+'" y="'+Y(y)+'" height="'+Math.max(0,Y(y0)-Y(y))+'"/>')}
   else s+='<polyline class="'+(g.c||'s1')+'" points="'+g.p.map(([x,y])=>X(x).toFixed(1)+','+Y(y).toFixed(1)).join(' ')+'"/>'});
  (o.v||[]).forEach(([x,t],i)=>s+='<line class="vl" x1="'+X(x)+'" x2="'+X(x)+'" y1="8" y2="'+(H-28)+'"/><text x="'+(X(x)+4)+'" y="'+(18+14*i)+'">'+t+'</text>');
  return s+'</svg>';
}
function histo(d,n=50,max){const s=[...d].sort((a,b)=>a-b),a=s[0],b=max??s[Math.floor(s.length*.998)],h=(b-a)/n||1,c=Array(n).fill(0);d.forEach(x=>{const k=Math.floor((x-a)/h);if(k>=0&&k<n)c[k]++});return c.map((v,i)=>[a+(i+.5)*h,v])}
const L={
 ruine:{titre:'Trajectoires de Cramér-Lundberg',aide:'Sinistres exponentiels, horizon 100. La probabilité exacte est celle de l’horizon infini.',
  p:{u:['Capital initial u',0,1500,10,300],rho:['Chargement ρ (%)',-10,60,1,20],lam:['Intensité λ',.5,5,.5,1],mu:['Coût moyen μ',20,200,10,100]},
  go(v){const r=v.rho/100,c=(1+r)*v.lam*v.mu,T=100,N=1500;let ruines=0;const tr=[];
   for(let k=0;k<N;k++){let t=0,U=v.u,p=[[0,U]],ko=false;while(true){const z=expo(1/v.lam);if(t+z>T){p.push([T,U+c*(T-t)]);break}t+=z;U+=c*z;if(k<12)p.push([t,U]);U-=expo(v.mu);if(k<12)p.push([t,U]);if(U<0){ko=true;if(k>=12)break;break}}if(ko)ruines++;if(k<12)tr.push({p,c:ko?'s2':'s1'})}
   const R=r>0?r/(v.mu*(1+r)):0;return{g:graphe(tr,{alt:'trajectoires du capital',dy:0,dx:0}),t:[['Prime c',f(c)],['Coefficient d’ajustement R',r>0?f(R,5):'n’existe pas'],['Borne de Lundberg',r>0?f(100*Math.exp(-R*v.u))+' %':'100 %'],['ψ(u) exacte, horizon infini',r>0?f(100*Math.exp(-R*v.u)/(1+r))+' %':'100 %'],['Ruines simulées avant t = 100',f(100*ruines/N)+' %']]}}},
 poisson:{titre:'Charge totale d’un modèle collectif',aide:'5 000 années simulées, N de Poisson, coûts exponentiels.',
  p:{lam:['Nombre moyen λ',1,60,1,20],mu:['Coût moyen μ',10,500,10,200]},
  go(v){const d=[];for(let i=0;i<5000;i++){let n=poisson(v.lam),s=0;while(n--)s+=expo(v.mu);d.push(s)}const m=d.reduce((a,b)=>a+b)/d.length,sd=Math.sqrt(d.reduce((a,b)=>a+(b-m)**2,0)/d.length);const q=[...d].sort((a,b)=>a-b)[Math.floor(.995*d.length)];
   return{g:graphe([{p:histo(d),barres:true}],{y0:0,dx:0,dy:0,alt:'histogramme de S',v:[[v.lam*v.mu,'E(S)']]}),t:[['E(S) par Wald',f(v.lam*v.mu,0)],['Moyenne simulée',f(m,0)],['σ(S) par Wald',f(Math.sqrt(v.lam*2*v.mu**2),0)],['σ simulé',f(sd,0)],['VaR 99,5 % simulée',f(q,0)]]}}},
 gev:{titre:'Loi GEV : le rôle de ξ',aide:'Déplace ξ : positif = Fréchet, nul = Gumbel, négatif = Weibull (support borné).',
  p:{xi:['Forme ξ',-.6,.8,.05,.2],mu:['Position μ',-2,4,.1,0],s:['Échelle σ',.3,3,.1,1]},
  go(v){const xi=Math.abs(v.xi)<1e-9?0:v.xi,p=[];for(let i=0;i<=300;i++){const x=v.mu-4*v.s+i/300*12*v.s,z=(x-v.mu)/v.s,t=xi?1+xi*z:1;let d=0;if(xi){if(t>0){const w=Math.pow(t,-1/xi);d=w*Math.exp(-w)/t/v.s}}else d=Math.exp(-z-Math.exp(-z))/v.s;p.push([x,d])}
   const q=a=>xi?v.mu+v.s/xi*(Math.pow(-Math.log(a),-xi)-1):v.mu-v.s*Math.log(-Math.log(a));
   return{g:graphe([{p}],{y0:0,dy:2,alt:'densité GEV',v:[[Math.min(q(.95),v.mu+8*v.s),'95 %']]}),t:[['Famille',xi>0?'Fréchet (queue épaisse)':xi<0?'Weibull (bornée)':'Gumbel'],['Point terminal',xi<0?f(v.mu-v.s/xi):'+∞'],['Niveau de retour 10 blocs',f(q(.9))],['Niveau 100 blocs',f(q(.99))],['Moments finis',xi>0?'ordre < '+f(1/xi):'tous']]}}},
 var:{titre:'VaR et ES sous loi normale',aide:'Rendement en %, montant en millions.',
  p:{mu:['Moyenne μ (%)',-1,1,.01,.01],s:['Volatilité σ (%)',.2,5,.1,1.5],a:['Taux de couverture α (%)',.5,10,.5,1],h:['Horizon (jours)',1,30,1,1],w:['Montant',.5,100,.5,1]},
  go(v){const a=v.a/100,m=v.mu*v.h,s=v.s*Math.sqrt(v.h),z=quant(a),VaR=-m-s*z,ES=-m+s*Math.exp(-z*z/2)/Math.sqrt(2*Math.PI)/a,p=[],q=[];for(let i=0;i<=200;i++){const x=m+s*(-4+8*i/200),d=Math.exp(-(((x-m)/s)**2)/2)/s/Math.sqrt(2*Math.PI);p.push([x,d])}
   return{g:graphe([{p}],{y0:0,dy:2,alt:'densité des rendements',v:[[-VaR,'−VaR'],[-ES,'−ES']]}),t:[['Quantile z',f(z,4)],['VaR',f(VaR,4)+' %'],['ES',f(ES,4)+' %'],['VaR en montant',f(VaR/100*v.w,4)+' M'],['ES en montant',f(ES/100*v.w,4)+' M']]}}},
 garch:{titre:'Simuler un GARCH(1,1)',aide:'500 rendements. Observe les grappes de volatilité quand α + β s’approche de 1.',
  p:{a:['α',0,.5,.01,.08],b:['β',0,.99,.01,.9],w:['ω',.005,.2,.005,.02]},
  go(v){const per=v.a+v.b,hb=per<1?v.w/(1-per):1;let h=hb,e=0;const p=[],s=[];for(let t=0;t<500;t++){h=v.w+v.a*e*e+v.b*h;e=gauss()*Math.sqrt(h);p.push([t,e]);s.push([t,2*Math.sqrt(h)])}
   const k=1-per*per-2*v.a*v.a;return{g:graphe([{p},{p:s,c:'s2'},{p:s.map(([x,y])=>[x,-y]),c:'s2'}],{dx:0,alt:'rendements simulés et bande de deux écarts-types'}),t:[['Persistance α + β',f(per,3)],['Variance de long terme',per<1?f(hb,3):'infinie (non stationnaire)'],['Demi-vie (jours)',per<1&&per>0?f(Math.log(.5)/Math.log(per),1):'∞'],['Kurtosis théorique',per<1&&k>0?f(3*(1-per*per)/k):'infinie']]}}},
 bale:{titre:'Allocation d’Euler (trois métiers)',aide:'Écarts-types et corrélations du cours par défaut. La somme des contributions redonne toujours le total.',
  p:{a:['σ Retail',1,40,1,10],b:['σ Corporate',1,40,1,15],c:['σ Market',1,40,1,20],ab:['ρ Retail-Corporate',-.3,1,.05,.3],ac:['ρ Retail-Market',-.3,1,.05,.2],bc:['ρ Corporate-Market',-.3,1,.05,.5]},
  go(v){const s=[v.a,v.b,v.c],R=[[1,v.ab,v.ac],[v.ab,1,v.bc],[v.ac,v.bc,1]],m=s.map((x,i)=>x*s.reduce((t,y,j)=>t+R[i][j]*y,0)),V=m.reduce((a,b)=>a+b),t=Math.sqrt(V),e=m.map(x=>x/t),n=['Retail','Corporate','Market'];
   const mx=Math.max(...s);let g='<svg viewBox="0 0 640 150" role="img" aria-label="contributions">';n.forEach((k,i)=>{const y=18+i*44;g+='<text x="0" y="'+(y+16)+'">'+k+'</text><rect class="fond" x="110" y="'+y+'" width="'+(s[i]/mx*420)+'" height="24"/><rect class="s1" x="110" y="'+y+'" width="'+Math.max(0,e[i]/mx*420)+'" height="24"/><text x="545" y="'+(y+16)+'">'+f(e[i])+' / '+f(s[i],0)+'</text>'});
   return{g:g+'</svg>',t:[['Capital total',f(t)],['Somme seule à seule',f(s.reduce((a,b)=>a+b))],['Gain de diversification',f(s.reduce((a,b)=>a+b)-t)],['Somme des contributions',f(e.reduce((a,b)=>a+b))]]}}}
};
function monter(el){
  const L0=L[el.dataset.labo];if(!L0||el.dataset.ok)return;el.dataset.ok=1;
  const v={};let h='<h4>'+L0.titre+'</h4><p class="aide">'+L0.aide+'</p><div class="regl">';
  for(const k in L0.p){const [n,a,b,s,d]=L0.p[k];v[k]=d;h+='<label><span>'+n+' <output>'+f(d)+'</output></span><input type="range" data-k="'+k+'" min="'+a+'" max="'+b+'" step="'+s+'" value="'+d+'"></label>'}
  el.innerHTML=h+'</div><button class="bt relance">Relancer</button><div class="dess"></div><dl></dl>';
  const go=()=>{const r=L0.go(v);el.querySelector('.dess').innerHTML=r.g;el.querySelector('dl').innerHTML=r.t.map(([a,b])=>'<div><dt>'+a+'</dt><dd>'+b+'</dd></div>').join('')};
  let to;el.addEventListener('input',e=>{const k=e.target.dataset.k;if(!k)return;v[k]=+e.target.value;e.target.closest('label').querySelector('output').textContent=f(v[k]);clearTimeout(to);to=setTimeout(go,90)});
  el.querySelector('.relance').onclick=go;go();
}
window.LABOS={tous:L,monter,quant,Phi};
})();
