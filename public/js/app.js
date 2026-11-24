(function(){
const {liste,parId,html,inline,esc}=TDR;const $=(s,r=document)=>r.querySelector(s);const vue=$('#vue');
// ---- progression (reste sur cet appareil)
let E={lu:{},quiz:{},boite:{},dernier:null};try{E=Object.assign(E,JSON.parse(localStorage.getItem('tdr')||'{}'))}catch(e){}
const sauver=()=>{try{localStorage.setItem('tdr',JSON.stringify(E))}catch(e){}cote()};
const lus=c=>c.lecons.filter((_,i)=>E.lu[c.id+'/'+i]).length;
const nb=(n,m)=>n+' '+m+(n>1?'s':'');
const episode=(c,k)=>{const p=c.podcasts[k];if(!p)return null;const cle=c.id+'-'+k,m=MINUTAGES[cle];return{id:cle,titre:p.titre,cours:c.titre,lignes:p.lignes,mp3:m?'audio/'+cle+'.mp3':null,temps:m&&m.t,duree:m&&m.d,lien:'#/c/'+c.id+'/podcast/'+k,
  suite(){const j=liste.indexOf(c);return c.podcasts[k+1]?episode(c,k+1):(liste[j+1]?episode(liste[j+1],0):null)}}};
const lecture=(c,i)=>{const l=c.lecons[i];return{id:c.id+'/'+i,titre:l.titre,cours:c.titre,lignes:[{t:l.titre+'.'},...ORAL.phrases(l.src).map(t=>({t}))],lien:'#/c/'+c.id+'/'+i,suite:()=>c.lecons[i+1]?lecture(c,i+1):null}};
const mn=s=>s?Math.floor(s/60)+' min '+String(Math.round(s%60)).padStart(2,'0'):'';
// ---- menu latéral
let ici='';
function cote(){
  const fam={};liste.forEach(c=>(fam[c.famille]=fam[c.famille]||[]).push(c));
  $('#cote').innerHTML=Object.entries(fam).map(([f,cs])=>'<h2>'+f+'</h2>'+cs.map(c=>{const on=ici===c.id;return '<a class="doc'+(on?' on':'')+'" href="#/c/'+c.id+'">'+c.titre+'<small>'+lus(c)+'/'+c.lecons.length+'</small></a>'+(on?'<ol>'+c.lecons.map((l,i)=>'<li><a href="#/c/'+c.id+'/'+i+'"'+(location.hash==='#/c/'+c.id+'/'+i?' aria-current="page"':'')+'>'+(E.lu[c.id+'/'+i]?'<b aria-label="lu">✓</b> ':'')+l.titre+'</a></li>').join('')+'</ol>':'')}).join('')).join('');
}
function finir(nav){document.querySelectorAll('[data-nav]').forEach(a=>a.toggleAttribute('aria-current',a.dataset.nav===nav));vue.querySelectorAll('.labo').forEach(LABOS.monter);cote()}
// ---- vues
function accueil(){
  const T=liste.reduce((s,c)=>s+c.lecons.length,0),D=liste.reduce((s,c)=>s+lus(c),0);const d=E.dernier&&parId[E.dernier.c];
  const fam={};liste.forEach(c=>(fam[c.famille]=fam[c.famille]||[]).push(c));
  vue.innerHTML='<div class="page"><h1>Tes 14 documents, expliqués un par un</h1><p class="chapo">'+T+' leçons expliquées en clair, avec définitions, démonstrations, formules, pièges et exercices corrigés. '+(D?'Tu en as lu '+D+'.':'Commence par celle que tu veux.')+'</p>'+
   (d?'<a class="reprendre" href="#/c/'+d.id+'/'+E.dernier.i+'"><span>Reprendre</span><strong>'+d.lecons[E.dernier.i].titre+'</strong><em>'+d.titre+'</em></a>':'')+
   Object.entries(fam).map(([f,cs])=>'<section><h2>'+f+'</h2><ul class="docs">'+cs.map(c=>'<li><a href="#/c/'+c.id+'"><strong>'+c.titre+'</strong><span>'+c.resume+'</span><i class="jauge" style="--p:'+Math.round(100*lus(c)/c.lecons.length)+'%"></i><small>'+lus(c)+' / '+nb(c.lecons.length,'leçon')+' · '+c.quiz.length+' questions · '+c.pages+(/pptx/.test(c.fichier)?' diapositives':' pages')+'</small></a></li>').join('')+'</ul></section>').join('')+'</div>';
  finir('accueil');
}
function doc(c){
  const q=E.quiz[c.id];
  vue.innerHTML='<div class="page"><p class="fil">'+c.famille+'</p><h1>'+c.titre+'</h1><p class="chapo">'+c.resume+'</p><p class="src">Source : '+c.fichier+' — '+c.auteur+'</p>'+
   '<div class="actions">'+c.podcasts.map((p,k)=>'<a class="bt plein" href="#/c/'+c.id+'/podcast/'+k+'">▶ Podcast</a>').join('')+'<a class="bt" href="#/c/'+c.id+'/quiz">Quiz'+(q!=null?' · '+q+'/'+c.quiz.length:'')+'</a><a class="bt" href="#/c/'+c.id+'/cartes">Cartes mémoire</a><a class="bt" href="#/logique/'+c.id+'">La logique</a><a class="bt" href="#/formules/'+c.id+'">Formulaire</a><a class="bt" href="#/demander/podcast/'+c.id+'">Podcast IA sur mesure</a></div>'+
   '<ol class="som">'+c.lecons.map((l,i)=>'<li><a href="#/c/'+c.id+'/'+i+'"><strong>'+l.titre+'</strong><span>'+l.ref+(E.lu[c.id+'/'+i]?' · lu':'')+'</span></a></li>').join('')+'</ol></div>';
  finir('accueil');
}
function lecon(c,i){
  const l=c.lecons[i];E.dernier={c:c.id,i};sauver();const k=c.id+'/'+i;
  vue.innerHTML='<article class="page lecon"><p class="fil"><a href="#/c/'+c.id+'">'+c.titre+'</a> · leçon '+(i+1)+' sur '+c.lecons.length+(l.ref?' · '+c.fichier.split('.').pop().toUpperCase()+' '+l.ref:'')+'</p><h1>'+l.titre+'</h1><div class="actions"><button class="bt" id="ecouter">▶ Écouter la leçon</button><a class="bt" href="#/demander/podcast/'+k+'">Podcast IA sur cette leçon</a><button class="bt" id="vers-ia">Je n’ai pas compris</button></div>'+html(l.src)+
   '<footer class="bas"><button class="bt plein" id="lu">'+(E.lu[k]?'✓ Leçon lue':'Marquer comme lue')+'</button><div>'+(i?'<a class="bt" href="#/c/'+c.id+'/'+(i-1)+'">← '+c.lecons[i-1].titre+'</a>':'')+(c.lecons[i+1]?'<a class="bt" href="#/c/'+c.id+'/'+(i+1)+'">'+c.lecons[i+1].titre+' →</a>':'<a class="bt" href="#/c/'+c.id+'/quiz">Passer au quiz →</a>')+'</div></footer><section class="aide-ia"><h2>Demander à l’IA sur cette leçon</h2><div id="pan"></div></section></article>';
  IA.panneau($('#pan'),{c,i});
  $('#lu').onclick=()=>{E.lu[k]?delete E.lu[k]:E.lu[k]=1;$('#lu').textContent=E.lu[k]?'✓ Leçon lue':'Marquer comme lue';sauver()};
  pasAPas();
  $('#vers-ia').onclick=()=>{$('.aide-ia').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'auto':'smooth'});$('.aide-ia input').focus({preventScroll:true})};
  $('#ecouter').onclick=()=>ORAL.charger(lecture(c,i),true);
  finir('accueil');
}
const melange=a=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
function quiz(titre,questions,retour,fin){
  let n=0,pts=0;const Q=melange(questions),rate=[];
  const montrer=()=>{
    if(n>=Q.length){fin&&fin(pts);vue.innerHTML='<div class="page quiz"><p class="fil"><a href="'+retour+'">Retour</a></p><h1>'+pts+' / '+Q.length+'</h1><p class="chapo">'+(pts===Q.length?'Sans faute.':pts/Q.length>=.7?'Solide. Revois les points ci-dessous.':'Relis les leçons, puis recommence.')+'</p>'+(rate.length?'<h2>À revoir</h2><ul class="rates">'+rate.map(q=>'<li><strong>'+inline(q.q)+'</strong><br>'+inline(q.r.find(r=>r.ok).t)+'<br><span>'+inline(q.e)+'</span></li>').join('')+'</ul>':'')+'<div class="actions"><button class="bt plein" id="re">Recommencer</button><a class="bt" href="'+retour+'">Retour</a></div></div>';$('#re').onclick=()=>{n=0;pts=0;rate.length=0;montrer()};return finir('')}
    const q=Q[n],R=melange(q.r);
    vue.innerHTML='<div class="page quiz"><p class="fil"><a href="'+retour+'">'+titre+'</a> · question '+(n+1)+' sur '+Q.length+'</p><i class="jauge" style="--p:'+Math.round(100*n/Q.length)+'%"></i><h1>'+inline(q.q)+'</h1><div class="rep">'+R.map((r,j)=>'<button data-j="'+j+'">'+inline(r.t)+'</button>').join('')+'</div><div class="exp" aria-live="polite"></div></div>';
    vue.querySelectorAll('.rep button').forEach(b=>b.onclick=()=>{const r=R[+b.dataset.j];if(r.ok)pts++;else rate.push(q);vue.querySelectorAll('.rep button').forEach(x=>{x.disabled=true;if(R[+x.dataset.j].ok)x.className='ok'});if(!r.ok)b.className='ko';
      $('.exp').innerHTML='<p><strong>'+(r.ok?'Exact.':'Non.')+'</strong> '+inline(q.e)+'</p><button class="bt plein" id="suiv">'+(n+1<Q.length?'Question suivante':'Voir le résultat')+'</button>';n++;$('#suiv').onclick=montrer;$('#suiv').focus()});
    finir('');
  };montrer();
}
// Cartes : boîtes de Leitner 0 à 4, délais 0, 1, 3, 7, 14 jours
const J=86400000,DEL=[0,1,3,7,14];
const clec=(c,k)=>c.id+'#'+k.r;const due=(c,k)=>{const b=E.boite[clec(c,k)];return !b||b.d<=Date.now()};
function cartes(paquet,titre,retour){
  let P=melange(paquet),n=0;
  const montrer=()=>{
    if(n>=P.length){vue.innerHTML='<div class="page cartes"><p class="fil"><a href="'+retour+'">'+titre+'</a></p><h1>Paquet terminé</h1><p class="chapo">Les cartes sues reviendront dans 1, 3, 7 puis 14 jours. Les autres restent à revoir.</p><a class="bt plein" href="'+retour+'">Retour</a></div>';return finir('')}
    const [c,k]=P[n];vue.innerHTML='<div class="page cartes"><p class="fil"><a href="'+retour+'">'+titre+'</a> · '+(n+1)+' sur '+P.length+'</p><button class="carte" id="carte"><small>'+c.titre+'</small><span>'+inline(k.r)+'</span><em>Appuyer pour voir la réponse</em></button><div class="actions" id="ac" hidden><button class="bt" data-s="0">À revoir</button><button class="bt plein" data-s="1">Je savais</button></div></div>';
    $('#carte').onclick=()=>{$('#carte').innerHTML='<small>'+inline(k.r)+'</small><span>'+inline(k.v)+'</span>';$('#ac').hidden=false};
    vue.querySelectorAll('[data-s]').forEach(b=>b.onclick=()=>{const o=E.boite[clec(c,k)]||{n:0};const m=+b.dataset.s?Math.min(4,o.n+1):0;E.boite[clec(c,k)]={n:m,d:Date.now()+DEL[m]*J};sauver();n++;montrer()});
    finir('');
  };montrer();
}
function reviser(){
  const dues=liste.flatMap(c=>c.cartes.filter(k=>due(c,k)).map(k=>[c,k]));
  vue.innerHTML='<div class="page"><h1>Réviser</h1><p class="chapo">Les cartes espacent les rappels ; le quiz mélange toutes les matières.</p><div class="actions"><button class="bt plein" id="rc"'+(dues.length?'':' disabled')+'>'+(dues.length?Math.min(20,dues.length)+' cartes maintenant':'Aucune carte à revoir')+'</button><button class="bt" id="rq">Quiz mélangé de 20 questions</button></div><h2>Résultats</h2><div class="tab"><table><thead><tr><th>Document</th><th>Leçons lues</th><th>Meilleur quiz</th><th>Cartes sues</th></tr></thead><tbody>'+liste.map(c=>'<tr><td><a href="#/c/'+c.id+'">'+c.titre+'</a></td><td>'+lus(c)+' / '+c.lecons.length+'</td><td>'+(E.quiz[c.id]!=null?E.quiz[c.id]+' / '+c.quiz.length:'—')+'</td><td>'+c.cartes.filter(k=>(E.boite[clec(c,k)]||{n:0}).n>0).length+' / '+c.cartes.length+'</td></tr>').join('')+'</tbody></table></div></div>';
  $('#rc').onclick=()=>cartes(melange(dues).slice(0,20),'Réviser','#/reviser');
  $('#rq').onclick=()=>quiz('Réviser',melange(liste.flatMap(c=>c.quiz)).slice(0,20),'#/reviser');
  finir('reviser');
}
function formules(id){
  const cs=id?[parId[id]].filter(Boolean):liste;
  vue.innerHTML='<div class="page"><h1>Formulaire</h1><p class="chapo">Toutes les formules encadrées des cours, avec un lien vers leur explication.</p><label class="filtre">Document <select id="sel"><option value="">Tous</option>'+liste.map(c=>'<option value="'+c.id+'"'+(c.id===id?' selected':'')+'>'+c.titre+'</option>').join('')+'</select></label>'+
   cs.map(c=>'<section><h2>'+c.titre+'</h2>'+c.lecons.map((l,i)=>l.formules.map(f=>'<div class="b formule"><div class="tete"><span class="ti">'+inline(f.t||l.titre)+'</span> <a href="#/c/'+c.id+'/'+i+'">'+l.titre+'</a></div>'+html(f.c)+'</div>').join('')).join('')+'</section>').join('')+'</div>';
  $('#sel').onchange=e=>location.hash='#/formules'+(e.target.value?'/'+e.target.value:'');
  finir('formules');
}
function podcasts(){
  vue.innerHTML='<div class="page"><h1>Podcasts</h1><p class="chapo">Awa explique, Kofi pose les questions. Un épisode par document. Chaque leçon peut aussi s’écouter : bouton « Écouter la leçon ».</p><div class="actions"><a class="bt plein" href="#/demander/podcast">Demander un podcast IA</a></div><div id="pia"></div><ol class="eps">'+liste.flatMap(c=>c.podcasts.map((p,k)=>{const e=episode(c,k);return '<li><button class="rond" data-ep="'+c.id+'/'+k+'" aria-label="Lire '+esc(p.titre)+'">▶</button><a href="'+e.lien+'"><strong>'+p.titre+'</strong><span>'+c.titre+(e.duree?' · '+mn(e.duree):'')+'</span></a>'+(e.mp3?'<a class="dl" href="'+e.mp3+'" download aria-label="Télécharger le MP3">MP3</a>':'')+'</li>'})).join('')+'</ol><h2>Voix de lecture des leçons</h2><p class="src">Les épisodes sont des MP3. Les leçons utilisent les voix françaises de ton appareil.</p><div class="filtre" id="voix"></div></div>';
  vue.querySelectorAll('[data-ep]').forEach(b=>b.onclick=()=>{const [i,k]=b.dataset.ep.split('/');ORAL.charger(episode(parId[i],+k),true)});
  const pv=()=>{const z=$('#voix');if(!z||!('speechSynthesis' in window))return;const l=ORAL.voix();z.innerHTML=l.length?'<label>Voix <select id="vx">'+l.map(v=>'<option value="'+esc(v.voiceURI)+'"'+(localStorage.getItem('tdr-voix-A')===v.voiceURI?' selected':'')+'>'+esc(v.name)+'</option>').join('')+'</select></label>':'Aucune voix française trouvée sur cet appareil.';const s=$('#vx');if(s)s.onchange=()=>localStorage.setItem('tdr-voix-A',s.value)};
  IA.historique($('#pia'),d=>d.mode==='podcast').then(()=>{const z=$('#pia');if(z&&!z.querySelector('li'))z.innerHTML='';else if(z)z.insertAdjacentHTML('afterbegin','<h2>Mes podcasts IA</h2>')});
  pv();if('speechSynthesis' in window)speechSynthesis.onvoiceschanged=pv;
  finir('podcasts');
}
function podcast(c,k){const e=episode(c,k);if(!e)return podcasts();pagePod(e,'<a href="#/podcasts">Podcasts</a> · <a href="#/c/'+c.id+'">'+c.titre+'</a>','mp3','')}
function pagePod(e,fil,ext,plus){
  vue.innerHTML='<div class="page"><p class="fil">'+fil+'</p><h1>'+e.titre+'</h1><div class="actions"><button class="bt plein" id="pl">▶ Écouter'+(e.duree?' · '+mn(e.duree):'')+'</button>'+(e.mp3?'<a class="bt" href="'+e.mp3+'" download'+(ext==='wav'?'="podcast.wav"':'')+'>Télécharger le '+ext.toUpperCase()+'</a>':'')+plus+'</div><p class="etat" role="status"></p><ol class="trans" data-id="'+e.id+'">'+e.lignes.map((l,i)=>'<li><button data-i="'+i+'"><b>'+(l.v==='A'?'Awa':'Kofi')+'</b><span>'+esc(l.t)+'</span></button></li>').join('')+'</ol></div>';
  $('#pl').onclick=()=>ORAL.charger(e,true);
  vue.querySelectorAll('.trans button').forEach(b=>b.onclick=()=>{if(!ORAL.P.file||ORAL.P.file.id!==e.id)ORAL.charger(e,true);const go=()=>ORAL.aller(+b.dataset.i);e.mp3&&ORAL.audio.readyState<1?ORAL.audio.addEventListener('loadedmetadata',go,{once:true}):go()});
  finir('podcasts');majL(ORAL.P);
}
// ---- logique : une étape à la fois, pour avoir le temps de deviner
function pasAPas(){const b=$('.logique');if(!b)return;const L=[...b.querySelectorAll('li')];if(L.length<2)return;let n=1;
  const z=document.createElement('div');z.className='actions';z.innerHTML='<button class="bt plein"></button><button class="bt">Tout montrer</button>';b.append(z);const [s,t]=z.children;
  const Q=['','Comment ferais-tu ? Voir l’idée','Qu’est-ce que cela donne ?','Et si on enlève une condition ?','Où cela mène-t-il ?'];
  const maj=f=>{L.forEach((x,i)=>x.hidden=i>=n);if(n>=L.length)z.remove();else s.textContent=Q[n]||'Suite';if(f){L[n-1].tabIndex=-1;L[n-1].focus({preventScroll:true})}};
  s.onclick=()=>{n++;maj(true)};t.onclick=()=>{n=L.length;maj(false)};maj()}
const chaine=c=>'<ol class="chaine">'+c.lecons.map((l,i)=>'<li><a href="#/c/'+c.id+'/'+i+'"><strong>'+l.titre+'</strong></a><p>'+inline(l.logique.p)+'</p><p class="fl">'+inline(l.logique.e)+'</p></li>').join('')+'</ol>';
// Fil conducteur entre documents : [id, question posée, ce qu'il transmet]
const FIL=[['topologie','Que veut dire « s’approcher », et quand un optimum existe-t-il ?','Limites, compacité et dérivées : les règles du jeu de tout le reste.'],
['bilineaire','Comment mesurer longueurs, angles et dépendances ?','La covariance et la projection : portefeuille, régression, diversification.'],
['mesure','Comment définir une probabilité et une espérance sans contradiction ?','Densités, espérance conditionnelle, changement de probabilité.'],
['ruine','Combien un portefeuille d’assurance va-t-il coûter, et va-t-il survivre ?','Prix, capital, ruine. Mais la borne de Lundberg exige des queues légères.'],
['extremes','Que faire quand les queues sont lourdes ?','Une loi pour les catastrophes, avec un seul paramètre de forme.'],
['var','Comment résumer le risque d’un portefeuille en un chiffre ?','VaR et ES. Il faut une volatilité qui bouge avec le temps.'],
['garch','Comment prévoir la volatilité de demain ?','Des résidus propres, sur lesquels on peut appliquer les extrêmes.'],
['gbongue','Que donne tout cela sur de vrais marchés africains en crise ?','GARCH, extrêmes, copules et VaR assemblés dans une seule étude.'],
['bale','Combien de capital une banque doit-elle détenir ?','Le passage de la mesure du risque à la règle et à la décision.'],
['cima0','Quels mots faut-il pour parler d’assurance vie ?','Un vocabulaire daté et précis.'],
['cima1','Qui garantit qu’une promesse de vingt ans sera tenue ?','Les institutions, l’agrément, la gouvernance.'],
['cima2','Comment fixer le prix de cette promesse ?','Tables, taux, équivalence : le tarif.'],
['cima3','Que peut faire l’assuré pendant ces vingt ans ?','Rachat, réduction, avance : des options qui pèsent sur l’assureur.'],
['cima4','Où est l’argent qui couvre la promesse ?','Provisions, actifs admis, couverture : la preuve que l’on tiendra parole.']];
const PONTS=[['Compacité','topologie',5,'Portefeuille de variance minimale','bilineaire',4,'L’ensemble des poids est compact et la variance continue : le minimum existe.'],
['Schwarz','bilineaire',4,'Diversification','var',6,'La covariance est une forme positive : l’écart-type d’une somme ne dépasse pas la somme des écarts-types.'],
['Projection','bilineaire',5,'Espérance conditionnelle','mesure',9,'Prévoir au mieux, c’est projeter sur ce que l’on sait.'],
['Convergence monotone','mesure',4,'Formule de Wald','ruine',2,'Le total aléatoire est une limite croissante : on peut échanger somme et espérance.'],
['Fubini','mesure',6,'Espérance tronquée','ruine',4,'Écrire min(X,P) comme une intégrale, puis échanger : l’aire sous la queue.'],
['Condition de Lundberg','ruine',9,'Queues lourdes','extremes',3,'Quand la fonction génératrice est infinie, R n’existe pas : il faut les extrêmes.'],
['Filtrage GARCH','garch',4,'Extrêmes conditionnels','gbongue',2,'La théorie des extrêmes demande des données indépendantes : GARCH les fabrique.'],
['Théorème d’Euler','topologie',6,'Allocation du capital','bale',6,'Dériver une fonction homogène redonne exactement le total.'],
['VaR composée','var',7,'Euler en banque','bale',6,'La même formule sous deux noms.'],
['Radon-Nikodym','mesure',10,'Mesures cohérentes','var',8,'Une mesure cohérente est une espérance sous la pire probabilité.'],
['Équivalence actuarielle','cima2',4,'Provision','cima4',1,'La provision est la même balance, refaite plus tard.'],
['Provision','cima4',1,'Rachat','cima3',3,'La valeur de rachat est la provision moins une indemnité.'],
['Expected Shortfall','ruine',7,'Bâle IV','bale',1,'Le régulateur remplace la VaR par l’ES car elle voit derrière la porte.'],
['Shapley','bale',6,'Marge implicite','cima4',6,'Partager un effet sans dépendre de l’ordre : en banque comme en assurance.']];
function logique(id){
  const c=parId[id];
  if(c){vue.innerHTML='<div class="page"><p class="fil"><a href="#/logique">La logique</a></p><h1>'+c.titre+'</h1><p class="chapo">Chaque leçon répond à un problème laissé par la précédente.</p><div class="actions"><button class="bt plein" id="ecl">▶ Écouter le fil</button><a class="bt" href="#/c/'+c.id+'">Voir le cours</a></div>'+chaine(c)+'</div>';
    $('#ecl').onclick=()=>ORAL.charger({id:'log-'+c.id,titre:'La logique : '+c.titre,cours:c.titre,lignes:c.lecons.flatMap(l=>ORAL.phrases(l.titre+'. '+l.logique.p+' '+l.logique.i+' '+l.logique.e)).map(t=>({t})),lien:'#/logique/'+c.id,suite:()=>null},true)}
  else vue.innerHTML='<div class="page"><h1>La logique</h1><p class="chapo">Pourquoi chaque chose existe, et comment elle mène à la suivante.</p><h2>Le fil des 14 documents</h2><ol class="chaine">'+FIL.map(([d,q,t])=>'<li><a href="#/logique/'+d+'"><strong>'+parId[d].titre+'</strong></a><p>'+q+'</p><p class="fl">'+t+'</p></li>').join('')+'</ol><h2>La même idée, ailleurs</h2><p class="src">Une idée comprise une fois sert dans plusieurs documents.</p><ul class="ponts">'+PONTS.map(([a,x,i,b,y,j,t])=>'<li><p><a href="#/c/'+x+'/'+i+'">'+a+'</a> → <a href="#/c/'+y+'/'+j+'">'+b+'</a></p><p>'+t+'</p></li>').join('')+'</ul></div>';
  finir('logique');
}
// ---- demandes à l'IA
function demander(m,id,i){
  const c=parId[id]||null;
  vue.innerHTML='<div class="page"><h1>Demander à l’IA</h1><p class="chapo">Un podcast sur mesure, une autre explication, un exemple, un quiz : choisis la leçon, Gemini s’appuie sur son texte.</p><div id="pan"></div><h2>Mes demandes</h2><div id="his"></div></div>';
  const h=()=>{const z=$('#his');if(z)IA.historique(z)};
  IA.panneau($('#pan'),{mode:IA.MODES[m]?m:null,c,i:null,apres:h});if(c&&c.lecons[+i]&&i!==''&&i!=null){const s=$('#pan [name=lec]');s.value=i}
  h();finir('demander');
}
async function demande(id){
  vue.innerHTML='<div class="page"><p class="chapo">Chargement</p></div>';finir('demander');
  const d=await IA.lire(id);if(!location.hash.endsWith('/'+id))return;
  const fil='<a href="#/demander">Demandes</a>'+(d&&parId[d.coursId]?' · <a href="#/c/'+d.coursId+(d.i!=null?'/'+d.i:'')+'">'+d.cours+'</a>':'');
  if(!d){vue.innerHTML='<div class="page"><p class="fil">'+fil+'</p><h1>Demande introuvable</h1><p class="chapo">Elle a été supprimée, ou faite sur un autre appareil.</p></div>';return}
  if(d.mode==='podcast'){
    const voir=()=>{pagePod(IA.item(d),fil,'wav',d.audio?'':'<button class="bt" id="vx2">Fabriquer les voix Gemini</button>');const b=$('#vx2');
      if(b)b.onclick=async()=>{b.disabled=true;const z=$('.etat');try{await IA.voix(d,(p,t)=>{z.className='etat';z.textContent=t});if(location.hash.endsWith('/'+id))voir()}catch(x){z.className='etat ko';z.textContent=x.message;b.disabled=false}}};
    voir();
  }else if(d.mode==='quiz')quiz('Demandes',d.questions,'#/demander');
  else{vue.innerHTML='<article class="page lecon"><p class="fil">'+fil+'</p><h1>'+esc(d.titre)+'</h1>'+(d.demande?'<p class="src">Ta précision : '+esc(d.demande)+'</p>':'')+IA.reponse(d)+'</article>';IA.brancher(vue,d)}
  finir('demander');
}
function labo(){vue.innerHTML='<div class="page"><h1>Labo</h1><p class="chapo">Change les paramètres et regarde ce que font les formules.</p>'+Object.keys(LABOS.tous).map(k=>'<div class="labo" data-labo="'+k+'"></div>').join('')+'</div>';finir('labo')}
const plat=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
function recherche(q){
  const n=plat(q).split(/\s+/).filter(Boolean);const R=[];
  liste.forEach(c=>c.lecons.forEach((l,i)=>{const T=plat(l.titre),S=plat(l.src);if(n.every(x=>T.includes(x)||S.includes(x))){const s=n.reduce((a,x)=>a+(T.includes(x)?10:0)+Math.min(5,S.split(x).length-1),0);
    const lg=l.src.split('\n').find(y=>n.some(x=>plat(y).includes(x))&&!/^(\$\$|\|)/.test(y))||'';R.push({c,i,l,s,e:lg.replace(/^:::\w+ ?|^[-\d.]+ /,'').replace(/\$[^$]*\$/g,'…').replace(/[*$]/g,'').slice(0,170)})}}));
  R.sort((a,b)=>b.s-a.s);
  vue.innerHTML='<div class="page"><h1>'+(R.length?nb(R.length,'leçon')+' pour « '+esc(q)+' »':'Rien pour « '+esc(q)+' »')+'</h1>'+(R.length?'<ol class="som">'+R.slice(0,40).map(r=>'<li><a href="#/c/'+r.c.id+'/'+r.i+'"><strong>'+r.l.titre+'</strong><span>'+r.c.titre+'</span><em>'+esc(r.e)+'</em></a></li>').join('')+'</ol>':'<p class="chapo">Essaie un seul mot, par exemple « Lundberg », « VaR » ou « rachat ».</p>')+'</div>';finir('');
}
// ---- mini-lecteur
const lz=$('#lecteur');let dernierId=null;
function majL(P,leger){
  const it=P.file;lz.hidden=!it;document.body.classList.toggle('avec-lecteur',!!it);if(!it){dernierId=null;return}
  if(dernierId!==it.id){dernierId=it.id;lz.innerHTML='<i class="prog"></i><a class="inf" href="'+it.lien+'"><strong>'+it.titre+'</strong><span></span></a><div class="cmd"><button class="ic" data-a="p" aria-label="Phrase précédente">⏮</button><button class="ic gros" data-a="j"></button><button class="ic" data-a="n" aria-label="Phrase suivante">⏭</button><button class="ic vit" data-a="v" aria-label="Vitesse"></button><button class="ic" data-a="x" aria-label="Fermer le lecteur">✕</button></div>';
   lz.querySelectorAll('[data-a]').forEach(b=>b.onclick=()=>({p:()=>ORAL.saut(-1),n:()=>ORAL.saut(1),j:()=>ORAL.P.joue?ORAL.pause():ORAL.jouer(),x:()=>ORAL.fermer(),v:()=>{const V=[1,1.25,1.5,1.75,.8];ORAL.vitesse(V[(V.indexOf(ORAL.P.vit)+1)%V.length])}})[b.dataset.a]())}
  $('.prog',lz).style.width=(ORAL.part()*100)+'%';if(leger)return;
  const j=$('[data-a=j]',lz);j.textContent=P.joue?'❚❚':'▶';j.setAttribute('aria-label',P.joue?'Pause':'Lire');$('.vit',lz).textContent='×'+String(P.vit).replace('.',',');
  const l=it.lignes[P.i];$('.inf span',lz).textContent=l?l.t:'';
  const t=$('.trans');if(t){t.querySelectorAll('.on').forEach(x=>x.classList.remove('on'));if(t.dataset.id===it.id&&t.children[P.i]){t.children[P.i].classList.add('on');if(P.joue)t.children[P.i].scrollIntoView({block:'center',behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'auto':'smooth'})}}
}
ORAL.surMaj(majL);
// ---- routes
function route(){
  const h=decodeURIComponent(location.hash.replace(/^#\/?/,'')).split('/');document.body.classList.remove('menu');$('#btn-menu').setAttribute('aria-expanded','false');ici='';
  const [a,b,d,e]=h;
  if(a==='c'&&parId[b]){const c=parId[b];ici=b;
    if(d==='quiz')quiz(c.titre,c.quiz,'#/c/'+b,p=>{E.quiz[b]=Math.max(p,E.quiz[b]||0);sauver()});
    else if(d==='cartes')cartes(c.cartes.map(k=>[c,k]),c.titre,'#/c/'+b);
    else if(d==='podcast')podcast(c,+e||0);
    else if(d&&c.lecons[+d])lecon(c,+d);else doc(c)}
  else if(a==='podcasts')podcasts();else if(a==='formules')formules(b);else if(a==='reviser')reviser();else if(a==='labo')labo();else if(a==='logique')logique(b);
  else if(a==='demander')demander(b,d,e);else if(a==='ia'&&b)demande(b);
  else if(a==='chercher'&&b)recherche(b);else accueil();
  document.title=($('h1',vue)?$('h1',vue).textContent.slice(0,60)+' · ':'')+'TDR M2';window.scrollTo(0,0);
}
addEventListener('hashchange',route);
$('#rech').onsubmit=e=>{e.preventDefault();const q=$('#q').value.trim().replace(/\//g,' ');if(q)location.hash='#/chercher/'+encodeURIComponent(q)};
$('#btn-menu').onclick=()=>{const o=document.body.classList.toggle('menu');$('#btn-menu').setAttribute('aria-expanded',o)};
$('#btn-theme').onclick=()=>{const r=document.documentElement,s=r.dataset.theme||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light');r.dataset.theme=s==='dark'?'light':'dark';try{localStorage.setItem('tdr-theme',r.dataset.theme)}catch(e){}};
$('.saut').onclick=e=>{e.preventDefault();vue.focus()};
if('serviceWorker' in navigator&&location.protocol==='https:')navigator.serviceWorker.register('sw.js');
route();
})();
