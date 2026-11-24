// Voix : transforme une leçon (texte + LaTeX) en phrases françaises, et pilote la lecture.
(function(){
const G={sqcup:" union disjointe ",bigsqcup:"union disjointe des ",mapsto:" donne ",mathbf:"",overset:"",alpha:'alpha',beta:'bêta',gamma:'gamma',delta:'delta',epsilon:'epsilon',varepsilon:'epsilon',lambda:'lambda',mu:'mu',nu:'nu',xi:'xi',rho:'rho',varrho:'rho',sigma:'sigma',tau:'tau',phi:'phi',varphi:'phi',psi:'psi',omega:'oméga',theta:'thêta',kappa:'kappa',eta:'êta',pi:'pi',Pi:'pi',Phi:'grand phi',Sigma:'grand sigma',Omega:'grand oméga',Lambda:'grand lambda',Delta:'delta',Gamma:'gamma',Psi:'grand psi',zeta:'zêta',ell:'l',infty:'l’infini',partial:'d rond ',
 le:' inférieur ou égal à ',leq:' inférieur ou égal à ',ge:' supérieur ou égal à ',geq:' supérieur ou égal à ',ne:' différent de ',neq:' différent de ',approx:' environ ',simeq:' environ ',to:' tend vers ',in:' appartient à ',notin:' n’appartient pas à ',subset:' inclus dans ',supset:' contient ',cup:' union ',cap:' inter ',bigcup:'union des ',bigcap:'intersection des ',times:' fois ',cdot:' fois ',pm:' plus ou moins ',forall:' pour tout ',exists:' il existe ',Rightarrow:' implique ',Leftrightarrow:' équivaut à ',iff:' équivaut à ',perp:' orthogonal à ',mid:' sachant ',ll:' absolument continu par rapport à ',emptyset:'l’ensemble vide',sum:'somme ',int:'intégrale ',iint:'intégrale double ',prod:'produit ',lim:'limite ',max:'maximum ',min:'minimum ',sup:'supremum ',inf:'infimum ',ln:'logarithme de ',exp:'exponentielle de ',otimes:' tensoriel ',circ:' rond ',langle:'produit scalaire de ',rangle:'',nearrow:' croît vers ',liminf:'limite inférieure ',limsup:'limite supérieure ',neg:' non ',sim:' suit la loi ',ldots:'',dots:'',quad:', ',qquad:', ',prime:' prime',setminus:' privé de ',bullet:''};
function lire(s){
  let x=' '+s.replace(/\\(begin|end)\{[a-z]+\}(\{[^}]*\})?/g,' ').replace(/\\\\(\[[^\]]*\])?/g,', ').replace(/&/g,' ');
  x=x.replace(/\\(left|right|big|Big|bigg|Bigg|displaystyle|limits|,|;|!|:| )/g,' ').replace(/\{,\}/g,',').replace(/\\%/g,' pour cent').replace(/\\\{|\\\}/g,' ');
  for(let i=0;i<6;i++){
    x=x.replace(/\\[dt]?frac\s*\{([^{}]*)\}\s*\{([^{}]*)\}/g,' $1 sur $2 ').replace(/\\[dt]?frac\s*(\w)\s*(\w)/g,' $1 sur $2 ').replace(/\\[dt]?frac\s*(\w)\s*\{([^{}]*)\}/g,' $1 sur $2 ').replace(/\\[dt]?frac\s*\{([^{}]*)\}\s*(\w)/g,' $1 sur $2 ');
    x=x.replace(/\\sqrt\s*\{([^{}]*)\}/g,' racine de $1 ').replace(/\\binom\s*(\w)\s*(\w)/g,' $2 parmi $1 ');
    x=x.replace(/\\(hat|widehat)\s*(\{([^{}]*)\}|\\?\w+)/g,(_,a,b,c)=>' '+(c||b)+' chapeau ').replace(/\\(bar|overline)\s*(\{([^{}]*)\}|\\?\w+)/g,(_,a,b,c)=>' '+(c||b)+' barre ').replace(/\\(tilde|widetilde)\s*(\{([^{}]*)\}|\\?\w+)/g,(_,a,b,c)=>' '+(c||b)+' tilde ').replace(/\\(ddot|mathring)\s*(\{([^{}]*)\}|\w)/g,(_,a,b,c)=>' '+(c||b)+(a==='ddot'?' double point ':' intérieur '));
    x=x.replace(/\\(text|operatorname|mathbb|mathcal|mathrm|mathbf|textbf|underbrace|overset|underline|substack)\s*\{([^{}]*)\}/g,' $2 ').replace(/\\(mathbb|mathcal)\s*(\w)/g,' $2 ');
    x=x.replace(/\^\s*\{\s*-1\s*\}/g,' inverse ').replace(/\^\s*2(?!\d)|\^\{2\}/g,' au carré ').replace(/\^\s*\{([^{}]*)\}/g,' puissance $1 ').replace(/\^\s*([*+-]|\\?\w+)/g,(_,a)=>a==='*'?' étoile ':a==='+'?' plus ':a==='-'?' moins ':' puissance '+a+' ').replace(/_\s*\+/g,' plus ').replace(/_\s*\{([^{}]*)\}/g,' $1 ').replace(/_\s*(\\?\w)/g,' $1 ');
  }
  x=x.replace(/\\([A-Za-z]+)/g,(_,n)=>n in G?' '+G[n]+' ':' '+n+' ');
  x=x.replace(/[{}$\\]/g,' ').replace(/'/g,' prime ').replace(/<=/g,' inférieur ou égal à ').replace(/</g,' inférieur à ').replace(/>/g,' supérieur à ').replace(/=/g,' égale ').replace(/\+/g,' plus ').replace(/(^|[^\w])-|−/g,'$1 moins ').replace(/(\w)\s*-\s*(\w)/g,'$1 moins $2').replace(/\|/g,' ').replace(/~/g,' ');
  return x.replace(/\s+/g,' ').replace(/ ,/g,',').trim();
}
function phrases(src){
  let s=src.replace(/^:::labo[\s\S]*?^:::$/gm,'').replace(/^:::preuve[\s\S]*?^:::$/gm,'');
  const noms={clair:'En clair.',logique:'La logique.',intuition:'L’idée.',def:'Définition.',theo:'Théorème.',formule:'Formule.',exemple:'Exemple.',piege:'Attention.',methode:'Méthode.',exo:'Exercice.'};
  s=s.replace(/^:::(\w+) ?(.*)$/gm,(_,t,x)=>(noms[t]||'')+' '+x+'.').replace(/^:::$/gm,'').replace(/^---$/gm,'Solution.').replace(/^### (.*)$/gm,'$1.');
  s=s.replace(/^[\s|:-]+$/gm,m=>/\|/.test(m)?'':m).replace(/^\|(.*)\|$/gm,(_,x)=>{let d=0;return x.replace(/\$|\|/g,k=>k==='$'?(d^=1,k):(d?k:', '))+'.'}).replace(/^\d+\. |^- /gm,'').replace(/\*\*/g,'').replace(/(\$\$[\s\S]+?\$\$|\$[^$]+\$)|\*/g,(m,a)=>a||'');
  s=s.replace(/\\\$/g,' dollars').replace(/\$\$([\s\S]+?)\$\$/g,(_,x)=>' '+lire(x)+'. ').replace(/\$([^$]+)\$/g,(_,x)=>' '+lire(x)+' ');
  return s.split('\n').flatMap(l=>l.split(/(?<=[.!?;:])\s+/)).map(l=>l.replace(/\s+/g,' ').replace(/\s*\.(\s*\.)+/g,'.').trim()).filter(l=>/[\wÀ-ÿ]/.test(l))
    .flatMap(l=>l.length<230?[l]:l.match(/.{1,220}(?:[, ]|$)/g)||[l]);
}
// ---- lecteur unique : MP3 si disponible, sinon synthèse vocale du navigateur
const P={file:null,i:0,joue:false,vit:+(localStorage.getItem('tdr-vit')||1),enchaine:true};
const audio=new Audio();audio.preload='metadata';
let jeton=0;
const voix=()=>speechSynthesis.getVoices().filter(v=>/^fr/i.test(v.lang));
function choisir(v){const l=voix();if(!l.length)return null;const pref=localStorage.getItem('tdr-voix-'+v);
  return l.find(x=>x.voiceURI===pref)||(v==='B'?(l.find(x=>/paul|henri|thomas|claude|male|homme/i.test(x.name))||l[1]||l[0]):(l.find(x=>/denise|julie|am[eé]lie|hortense|google/i.test(x.name))||l[0]))}
function parler(){
  const me=++jeton;const it=P.file;if(!it)return;
  if(P.i>=it.lignes.length){fin();return}
  const l=it.lignes[P.i];maj();
  const u=new SpeechSynthesisUtterance(l.t);u.lang='fr-FR';u.rate=P.vit;const v=choisir(l.v||'A');if(v)u.voice=v;
  if(l.v==='B'&&voix().length<2)u.pitch=.75;
  u.onend=()=>{if(me===jeton&&P.joue){P.i++;parler()}};
  u.onerror=e=>{if(me===jeton&&!['interrupted','canceled'].includes(e.error)){P.joue=false;maj()}};
  speechSynthesis.speak(u);
}
function fin(){P.joue=false;const s=P.file&&P.file.suite;if(P.enchaine&&s){const n=s();if(n)return charger(n,true)}P.i=0;maj()}
function charger(it,jouer){
  stop();P.file=it;P.i=0;
  if(it.mp3){audio.src=it.mp3;audio.playbackRate=P.vit}
  if('mediaSession' in navigator&&window.MediaMetadata){navigator.mediaSession.metadata=new MediaMetadata({title:it.titre,artist:'TDR · Master 2',album:it.cours||''});
    for(const [a,f] of [['play',jouerP],['pause',pause],['previoustrack',()=>saut(-1)],['nexttrack',()=>saut(1)]])try{navigator.mediaSession.setActionHandler(a,f)}catch(e){}}
  if(jouer)jouerP();else maj();
}
function jouerP(){if(!P.file)return;P.joue=true;
  if(P.file.mp3)audio.play().catch(()=>{P.file.mp3=null;P.joue=true;parler()});
  else{speechSynthesis.cancel();parler()}maj()}
function pause(){P.joue=false;jeton++;audio.pause();if('speechSynthesis' in window)speechSynthesis.cancel();maj()}
function stop(){P.joue=false;jeton++;audio.pause();if('speechSynthesis' in window)speechSynthesis.cancel()}
function saut(d){aller(Math.max(0,Math.min((P.file?P.file.lignes.length:1)-1,P.i+d)))}
function aller(i){P.i=i;if(!P.file)return;if(P.file.mp3&&P.file.temps)audio.currentTime=P.file.temps[i]+.02;if(P.joue&&!P.file.mp3){jeton++;speechSynthesis.cancel();parler()}else maj()}
function vitesse(v){P.vit=v;localStorage.setItem('tdr-vit',v);audio.playbackRate=v;if(P.joue&&!P.file.mp3){jeton++;speechSynthesis.cancel();parler()}maj()}
audio.addEventListener('timeupdate',()=>{const t=P.file&&P.file.temps;if(!t)return;let k=0;while(k+1<t.length&&t[k+1]<=audio.currentTime)k++;if(k!==P.i){P.i=k;maj()}else avance()});
audio.addEventListener('ended',fin);
audio.addEventListener('pause',()=>{if(P.joue&&!audio.ended&&P.file&&P.file.mp3){P.joue=false;maj()}});
audio.addEventListener('play',()=>{if(P.file&&P.file.mp3&&!P.joue){P.joue=true;maj()}});
const ecoute=[];function maj(){ecoute.forEach(f=>f(P))}function avance(){ecoute.forEach(f=>f(P,true))}
const part=()=>!P.file?0:(P.file.mp3&&audio.duration?audio.currentTime/audio.duration:P.i/P.file.lignes.length);
window.ORAL={lire,phrases,P,audio,charger,jouer:jouerP,pause,saut,aller,vitesse,part,voix,fermer(){stop();P.file=null;maj()},surMaj:f=>ecoute.push(f)};
})();
