// Moteur de cours : transforme le texte balisé (fichiers cours/*.js) en données et en HTML.
(function(){
const COURS=[]; const parId={};
const esc=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const TYPES={intuition:'L’idée',def:'Définition',theo:'Théorème',preuve:'Démonstration',formule:'Formule',exemple:'Exemple',piege:'Attention',methode:'Méthode',exo:'Exercice',labo:'Simulateur'};
function tex(s,bloc){
  try{return katex.renderToString(s,{displayMode:bloc,throwOnError:true,strict:false})}
  catch(e){(window.ERREURS=window.ERREURS||[]).push(e.message+' :: '+s);return '<code class="err">'+esc(s)+'</code>'}
}
// Texte en ligne : on isole d'abord les formules, puis gras, italique, liens.
function inline(s){
  const m=[]; const garde=h=>{m.push(h);return '\u0001'+(m.length-1)+'\u0002'};
  s=s.replace(/\\\$/g,'\u0003');
  s=s.replace(/\$\$([\s\S]+?)\$\$/g,(_,x)=>garde('<span class="bloc-tex">'+tex(x.trim(),true)+'</span>'));
  s=s.replace(/\$([^$]+?)\$/g,(_,x)=>garde(tex(x,false)));
  s=esc(s).replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>').replace(/(^|[^*\w])\*([^*\n]+)\*(?![*\w])/g,'$1<em>$2</em>');
  s=s.replace(/\u0003/g,'$');
  let n=0; while(/\u0001/.test(s)&&n++<4) s=s.replace(/\u0001(\d+)\u0002/g,(_,i)=>m[i]);
  return s;
}
// Coupe une ligne de tableau sur | hors des formules
function cellules(l){
  const r=[];let c='',d=false;l=l.trim().replace(/^\|/,'').replace(/\|$/,'');
  for(let i=0;i<l.length;i++){const k=l[i];if(k==='$'&&l[i-1]!=='\\')d=!d;if(k==='|'&&!d){r.push(c.trim());c=''}else c+=k}
  r.push(c.trim());return r;
}
function html(src){
  const L=src.split('\n');let o='',i=0;
  while(i<L.length){
    const l=L[i];
    if(!l.trim()){i++;continue}
    let k;
    if(k=l.match(/^:::(\w+)\s*(.*)$/)){
      const b=[];i++;while(i<L.length&&L[i].trim()!==':::')b.push(L[i++]);i++;
      o+=bloc(k[1],k[2],b.join('\n'));continue;
    }
    if(k=l.match(/^### (.*)/)){o+='<h3>'+inline(k[1])+'</h3>';i++;continue}
    if(/^\s*\|/.test(l)){
      const t=[];while(i<L.length&&/^\s*\|/.test(L[i]))t.push(L[i++]);
      const sep=t[1]&&/^[\s|:-]+$/.test(t[1]);
      o+='<div class="tab"><table>'+(sep?'<thead><tr>'+cellules(t[0]).map(c=>'<th>'+inline(c)+'</th>').join('')+'</tr></thead>':'')+'<tbody>'+t.slice(sep?2:0).map(r=>'<tr>'+cellules(r).map(c=>'<td>'+inline(c)+'</td>').join('')+'</tr>').join('')+'</tbody></table></div>';continue;
    }
    if(/^(- |\d+\. )/.test(l)){
      const ord=/^\d/.test(l);const it=[];
      while(i<L.length&&(ord?/^\d+\. /:/^- /).test(L[i])){let x=L[i++].replace(/^(- |\d+\. )/,'');
        while(i<L.length&&L[i].trim()&&!/^(- |\d+\. |:::|###|\||\$\$)/.test(L[i].trim()))x+=' '+L[i++].trim();it.push(x)}
      o+=(ord?'<ol>':'<ul>')+it.map(x=>'<li>'+inline(x)+'</li>').join('')+(ord?'</ol>':'</ul>');continue;
    }
    if(/^\$\$/.test(l.trim())){
      let x=l.trim();i++;while(!/\$\$[.,;]?$/.test(x.slice(2))&&i<L.length)x+='\n'+L[i++];
      o+='<div class="eq">'+inline(x)+'</div>';continue;
    }
    const p=[l];i++;
    while(i<L.length&&L[i].trim()&&!/^(:::|### |- |\d+\. |\$\$)/.test(L[i])&&!/^\s*\|/.test(L[i]))p.push(L[i++]);
    o+='<p>'+inline(p.join('\n'))+'</p>';
  }
  return o;
}
function bloc(t,titre,c){
  const nom=TYPES[t]||t;
  if(t==='labo')return '<div class="labo" data-labo="'+titre.trim()+'"></div>';
  const tete='<span class="et">'+nom+'</span>'+(titre?' <span class="ti">'+inline(titre)+'</span>':'');
  if(t==='preuve')return '<details class="b preuve"><summary>'+tete+'</summary><div>'+html(c)+'</div></details>';
  if(t==='exo'){const [q,s]=c.split(/^---$/m);const aq=s!==undefined;
    return '<div class="b exo"><div class="tete">'+tete+'</div>'+html(aq?q:c)+(aq?'<details><summary>Voir la solution</summary><div>'+html(s)+'</div></details>':'')+'</div>'}
  return '<div class="b '+t+'"><div class="tete">'+tete+'</div>'+html(c)+'</div>';
}
function COURSf(meta,src){
  const c=Object.assign({lecons:[],quiz:[],cartes:[],podcasts:[]},meta);
  for(const p of src.split(/^## /m).slice(1)){
    const nl=p.indexOf('\n');const t=p.slice(0,nl).trim();const b=p.slice(nl+1);
    if(t==='QUIZ'){let q=null;for(const l of b.split('\n')){
        if(l.startsWith('? ')){q={q:l.slice(2),r:[],e:''};c.quiz.push(q)}
        else if(q&&/^[-+] /.test(l))q.r.push({t:l.slice(2),ok:l[0]==='+'});
        else if(q&&l.startsWith('> '))q.e=l.slice(2)}}
    else if(t==='CARTES'){for(const l of b.split('\n')){const k=l.split(' :: ');if(k.length===2)c.cartes.push({r:k[0],v:k[1]})}}
    else if(t.startsWith('PODCAST'))c.podcasts.push({titre:t.slice(8).trim(),lignes:b.split('\n').filter(l=>/^[AB]: /.test(l)).map(l=>({v:l[0],t:l.slice(3).trim()}))});
    else{const [ti,ref]=t.split(' | ');
      const f=[];for(const m of b.matchAll(/^:::formule ?(.*)\n([\s\S]*?)^:::$/gm))f.push({t:m[1],c:m[2]});
      c.lecons.push({titre:ti,ref:ref||'',src:b,formules:f})}
  }
  COURS.push(c);parId[c.id]=c;
}
window.COURS=COURSf;window.TDR={liste:COURS,parId,html,inline,tex,esc};
})();
