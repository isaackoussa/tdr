// Demandes à l'IA (Gemini, via les fonctions Netlify /api/ia et /api/voix) et leur historique local.
(function(){
const {liste,parId,html,inline,esc}=TDR;const $=(s,r=document)=>r.querySelector(s);
const MODES={podcast:'Podcast',expliquer:'Expliquer autrement',exemple:'Exemple chiffré',exercice:'Exercices',quiz:'Quiz',fiche:'Fiche de révision',question:'Ma question'};
// ---- stockage : IndexedDB, sinon mémoire
let mem=new Map(),base=null;
const ouvrir=()=>base||(base=new Promise(ok=>{try{const r=indexedDB.open('tdr-ia',1);r.onupgradeneeded=()=>r.result.createObjectStore('d',{keyPath:'id'});r.onsuccess=()=>ok(r.result);r.onerror=()=>ok(null)}catch(e){ok(null)}}));
const op=async(mode,f)=>{const b=await ouvrir();if(!b)return null;return new Promise((ok,non)=>{const t=b.transaction('d',mode),q=f(t.objectStore('d'));t.oncomplete=()=>ok(q&&q.result);t.onerror=t.onabort=()=>non(t.error)})};
async function garder(d){mem.set(d.id,d);try{await op('readwrite',s=>s.put(d))}catch(e){}return d}
async function lire(id){if(mem.has(id))return mem.get(id);const d=await op('readonly',s=>s.get(id));if(d)mem.set(id,d);return d||null}
async function tout(){const L=await op('readonly',s=>s.getAll())||[];const m=new Map(L.map(d=>[d.id,d]));mem.forEach((d,k)=>m.set(k,d));return [...m.values()].sort((a,b)=>b.date-a.date)}
async function oter(id){mem.delete(id);if(urls[id]){URL.revokeObjectURL(urls[id]);delete urls[id]}await op('readwrite',s=>s.delete(id))}
// ---- appels
const code=()=>{try{return localStorage.getItem('tdr-acces')||''}catch(e){return ''}};
async function appel(chemin,corps){
  let r;try{r=await fetch('/api/'+chemin,{method:'POST',headers:{'content-type':'application/json','x-acces':code()},body:JSON.stringify(corps)})}
  catch(e){throw Object.assign(new Error('Pas de connexion au serveur. Vérifie ton réseau.'),{code:'reseau'})}
  if(r.ok)return r;
  const o=await r.json().catch(()=>null);
  if(o&&o.erreur)throw Object.assign(new Error(o.erreur),{code:o.code,status:r.status});
  if(r.status===404||r.status===405||r.status===501)throw Object.assign(new Error('Le service IA n’existe pas à cette adresse : ouvre l’application depuis son site Netlify.'),{code:'absent'});
  if(r.status===429)throw Object.assign(new Error('Trop de demandes à la suite. Attends une minute.'),{code:'debit',status:429});
  throw Object.assign(new Error('Le service IA a répondu par une erreur ('+r.status+'). Réessaie.'),{code:'http',status:r.status});
}
// Extrait envoyé : la leçon entière, ou l'essentiel de chaque leçon du document.
function contexte(c,i){
  if(!c)return '';
  if(i!=null&&c.lecons[i])return (c.lecons[i].titre+'\n'+c.lecons[i].src.replace(/^:::labo[\s\S]*?^:::$/gm,'')).slice(0,40000);
  const max=Math.floor(40000/c.lecons.length);
  return c.lecons.map(l=>('## '+l.titre+'\n'+l.src.replace(/^:::(labo|preuve|exo)[\s\S]*?^:::$/gm,'')).slice(0,max)).join('\n').slice(0,40000);
}
// ---- voix : morceaux d'environ 1 000 caractères, assemblés en un seul WAV
function morceaux(lignes){const M=[];let m=[],n=0;lignes.forEach((l,k)=>{if(m.length&&(n+l.t.length>1000||m.length>=10)){M.push(m);m=[];n=0}m.push(k);n+=l.t.length});if(m.length)M.push(m);return M}
function pcm(buf){const v=new DataView(buf);if(buf.byteLength<46||v.getUint32(0,false)!==0x52494646)throw new Error('Son illisible.');let p=12;while(p+8<=buf.byteLength&&v.getUint32(p,false)!==0x64617461)p+=8+v.getUint32(p+4,true);
  const n=Math.min(v.getUint32(p+4,true),buf.byteLength-p-8);return{d:new Uint8Array(buf,p+8,n-n%2),taux:v.getUint32(24,true),voies:v.getUint16(22,true),bits:v.getUint16(34,true)}}
const attendre=ms=>new Promise(r=>setTimeout(r,ms));
async function voix(d,avance){
  const M=morceaux(d.lignes),P=[],temps=[];let f=null,octets=0;
  for(let k=0;k<M.length;k++){
    avance(k/M.length,'Voix '+(k+1)+' sur '+M.length);
    let r;try{r=await appel('voix',{lignes:M[k].map(i=>d.lignes[i])})}
    catch(e){if(e.status!==429&&e.status!==504&&e.status!==502)throw e;avance(k/M.length,'Service occupé, nouvel essai dans 25 secondes');await attendre(25000);r=await appel('voix',{lignes:M[k].map(i=>d.lignes[i])})}
    const x=pcm(await r.arrayBuffer());f=f||x;if(x.taux!==f.taux||x.voies!==f.voies||x.bits!==f.bits)throw new Error('Morceaux de son incompatibles.');
    const bps=f.taux*f.voies*f.bits/8,dur=x.d.length/bps,L=M[k].map(i=>d.lignes[i].t.length),T=L.reduce((a,b)=>a+b,0);let t=octets/bps;
    M[k].forEach((i,j)=>{temps[i]=Math.round(t*100)/100;t+=dur*L[j]/T});
    const sil=new Uint8Array(Math.floor(bps*.3/2)*2);P.push(x.d,sil);octets+=x.d.length+sil.length;
  }
  const h=new DataView(new ArrayBuffer(44)),bps=f.taux*f.voies*f.bits/8,s=(o,t)=>[...t].forEach((c,i)=>h.setUint8(o+i,c.charCodeAt(0)));
  s(0,'RIFF');h.setUint32(4,36+octets,true);s(8,'WAVEfmt ');h.setUint32(16,16,true);h.setUint16(20,1,true);h.setUint16(22,f.voies,true);h.setUint32(24,f.taux,true);h.setUint32(28,bps,true);h.setUint16(32,f.voies*f.bits/8,true);h.setUint16(34,f.bits,true);s(36,'data');h.setUint32(40,octets,true);
  d.audio=new Blob([h.buffer,...P],{type:'audio/wav'});d.temps=temps;d.duree=octets/bps;if(urls[d.id]){URL.revokeObjectURL(urls[d.id]);delete urls[d.id]}
  return garder(d);
}
const urls={};
const item=d=>({id:'ia-'+d.id,titre:esc(d.titre),cours:d.cours||'Demande à l’IA',lignes:d.lignes,mp3:d.audio?(urls[d.id]=urls[d.id]||URL.createObjectURL(d.audio)):null,temps:d.temps,duree:d.duree,lien:'#/ia/'+d.id,suite:()=>null});
const propre=t=>t.replace(/^:::.*$/gm,'').replace(/^#{1,2} /gm,'### ').replace(/^#{4,} /gm,'### ').replace(/^\s*[*•] (?=\S)/gm,'- ').replace(/^\s+(- |\d+\. )/gm,'$1').replace(/\\\[([\s\S]+?)\\\]/g,(_,x)=>'$$'+'$$'+x+'$$'+'$$').replace(/\\\(([\s\S]+?)\\\)/g,(_,x)=>'$'+x+'$').replace(/```\w*\n?/g,'');
const rendre=t=>html(propre(t));
// ---- formulaire, sur la page « Demander » ou au bas d'une leçon
function panneau(zone,o){
  const fixe=o.c!=null&&o.i!=null;let c=o.c||null,i=o.i!=null?o.i:null,occupe=false;
  const choix=fixe?['expliquer','exemple','exercice','quiz','podcast','question','fiche']:Object.keys(MODES);
  zone.innerHTML='<form class="dem"><fieldset class="modes"><legend>Que veux-tu ?</legend>'+choix.map((m,k)=>'<label><input type="radio" name="mode" value="'+m+'"'+((o.mode||choix[0])===m?' checked':'')+'><span>'+MODES[m]+'</span></label>').join('')+'</fieldset>'+
   '<div class="champs">'+(fixe?'':'<label>Document<select name="doc"><option value="">Sujet libre</option>'+liste.map(x=>'<option value="'+x.id+'"'+(x===c?' selected':'')+'>'+x.titre+'</option>').join('')+'</select></label><label>Leçon<select name="lec"></select></label>')+
   '<label>Niveau<select name="niveau"><option value="debutant">Débutant</option><option value="master" selected>Master</option><option value="examen">Révision d’examen</option></select></label><label data-pod>Durée<select name="minutes"><option value="3">3 minutes</option><option value="5" selected>5 minutes</option><option value="8">8 minutes</option><option value="12">12 minutes</option></select></label><label data-pod>Ton<select name="ton"><option value="vivant">Vivant</option><option value="calme">Posé</option><option value="debat">Débat</option></select></label></div>'+
   '<label><span data-lib></span><textarea name="demande" maxlength="1500"></textarea></label><label data-acces hidden>Code d’accès<input type="password" name="acces" autocomplete="off"></label>'+
   '<button class="bt plein" type="submit">Envoyer la demande</button><p class="etat" role="status"></p></form><div class="sortie"></div>';
  const f=$('form',zone),et=$('.etat',zone),so=$('.sortie',zone),mode=()=>f.mode.value;
  const lecons=()=>{if(fixe)return;c=parId[f.doc.value]||null;f.lec.innerHTML=c?'<option value="">Tout le document</option>'+c.lecons.map((l,k)=>'<option value="'+k+'"'+(k===i?' selected':'')+'>'+l.titre+'</option>').join(''):'<option value="">—</option>';f.lec.disabled=!c};
  const maj=()=>{const m=mode();zone.querySelectorAll('[data-pod]').forEach(x=>x.hidden=m!=='podcast');$('[data-lib]',zone).textContent=m==='question'?'Ta question':'Précisions (facultatif)';f.demande.placeholder=m==='question'?'Exemple : pourquoi faut-il que l’intégrale de |f| soit finie ?':m==='podcast'?'Exemple : insiste sur la preuve, prends un exemple d’assurance auto à Abidjan':'Exemple : je ne comprends pas la deuxième étape'};
  if(!fixe){lecons();f.doc.onchange=()=>{i=null;lecons()}}f.querySelectorAll('[name=mode]').forEach(x=>x.onchange=maj);maj();
  const dire=(t,ko,p)=>{et.className='etat'+(ko?' ko':'');et.textContent=t||'';if(p!=null){const b=document.createElement('i');b.style.setProperty('--p',Math.round(p*100)+'%');et.append(b)}};
  etat().then(s=>{if(!s)return dire('L’IA répond seulement depuis le site Netlify. Ici tu peux lire, écouter et réviser.',true);if(!s.pret)dire('La clé Gemini n’est pas encore installée sur le site (variable GEMINI_API_KEY).',true);if(s.code&&!code())$('[data-acces]',zone).hidden=false});
  f.onsubmit=async e=>{e.preventDefault();if(occupe)return;
    const m=mode();if(!fixe)i=f.lec.value===''?null:+f.lec.value;
    const dem=f.demande.value.trim();if(!c&&!dem){dire('Choisis un document ou écris ton sujet.',true);f.demande.focus();return}if(m==='question'&&!dem){dire('Écris ta question.',true);f.demande.focus();return}
    if(f.acces.value)try{localStorage.setItem('tdr-acces',f.acces.value)}catch(x){}
    occupe=true;f.querySelector('[type=submit]').disabled=true;so.innerHTML='';
    const t0=Date.now(),nom=m==='podcast'?'Écriture du script':'Gemini rédige',h=setInterval(()=>dire(nom+' ('+Math.round((Date.now()-t0)/1000)+' s)'),1000);dire(nom);
    try{
      const l=c&&i!=null?c.lecons[i]:null;
      const r=await(await appel('ia',{mode:m,cours:c?c.titre:'',lecon:l?l.titre:'',niveau:f.niveau.value,minutes:+f.minutes.value,ton:f.ton.value,demande:dem,contexte:contexte(c,i)})).json();clearInterval(h);
      const d=await garder({id:Date.now().toString(36)+Math.random().toString(36).slice(2,6),date:Date.now(),mode:m,coursId:c?c.id:null,i,cours:c?c.titre:'',titre:m==='podcast'?r.titre:MODES[m]+' : '+(m==='question'?dem.slice(0,80):l?l.titre:c?c.titre:dem.slice(0,80)),demande:dem,texte:r.texte,questions:r.questions,lignes:r.lignes});
      if(m==='podcast'){
        try{await voix(d,(p,t)=>dire(t,false,p));dire('Podcast prêt.')}catch(x){dire('Le script est prêt, mais pas les voix : '+x.message+' Tu peux l’écouter avec la voix de ton appareil, et réessayer plus tard.',true)}
        so.innerHTML='<p><a class="bt plein" href="#/ia/'+d.id+'">Ouvrir le podcast</a></p>';
      }else if(m==='quiz'){dire('Quiz prêt.');so.innerHTML='<p><a class="bt plein" href="#/ia/'+d.id+'">Commencer le quiz ('+d.questions.length+' questions)</a></p>'}
      else{dire('');so.innerHTML=reponse(d);brancher(so,d)}
      if(o.apres)o.apres();
    }catch(x){clearInterval(h);dire(x.message,true);if(x.code==='acces'){try{localStorage.removeItem('tdr-acces')}catch(y){}$('[data-acces]',zone).hidden=false;f.acces.focus()}}
    finally{occupe=false;const b=f.querySelector('[type=submit]');if(b)b.disabled=false}
  };
}
const reponse=d=>'<div class="rep-ia">'+rendre(d.texte)+'<p class="note">Réponse produite par Gemini : vérifie les points importants dans la leçon.</p><div class="actions"><button class="bt" data-ec>▶ Écouter</button></div></div>';
function brancher(z,d){const b=$('[data-ec]',z);if(b)b.onclick=()=>ORAL.charger({id:'ia-'+d.id,titre:esc(d.titre),cours:d.cours,lignes:ORAL.phrases(propre(d.texte)).map(t=>({t})),lien:'#/ia/'+d.id,suite:()=>null},true)}
let et=null;const etat=()=>et||(et=fetch('/api/ia').then(r=>r.ok&&/json/.test(r.headers.get('content-type')||'')?r.json():null).catch(()=>null));
const jour=t=>new Date(t).toLocaleDateString('fr-FR',{day:'numeric',month:'long'});
async function historique(zone,filtre){
  const L=(await tout()).filter(filtre||(()=>true));
  if(!L.length){zone.innerHTML='<p class="src">Rien pour l’instant. Tes demandes seront gardées ici, sur cet appareil.</p>';return}
  zone.innerHTML='<ul class="hist">'+L.map(d=>'<li><button class="lien" data-o="'+d.id+'"><strong>'+esc(d.titre)+'</strong><small>'+MODES[d.mode]+' · '+jour(d.date)+(d.audio?' · '+Math.max(1,Math.round(d.duree/60))+' min':'')+'</small></button><button class="ic" data-x="'+d.id+'" aria-label="Supprimer '+esc(d.titre).replace(/"/g,'')+'">✕</button></li>').join('')+'</ul>';
  zone.querySelectorAll('[data-o]').forEach(b=>b.onclick=()=>location.hash='#/ia/'+b.dataset.o);
  zone.querySelectorAll('[data-x]').forEach(b=>b.onclick=async()=>{if(!confirm('Supprimer cette demande de cet appareil ?'))return;await oter(b.dataset.x);historique(zone,filtre)});
}
window.IA={MODES,panneau,historique,lire,voix,item,reponse,brancher,rendre,etat,morceaux,pcm};
})();
