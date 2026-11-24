// Vérifie tous les cours : LaTeX valide, blocs fermés, quiz cohérents. Usage : node outils/verif.mjs
import fs from 'fs';import vm from 'vm';
const ctx={window:{},localStorage:{getItem(){return null},setItem(){}},Audio:class{addEventListener(){}},console};ctx.window=ctx;vm.createContext(ctx);
for(const f of ['vendor/katex/katex.min.js','js/moteur.js'])vm.runInContext(fs.readFileSync(f,'utf8'),ctx,{filename:f});
for(const f of fs.readdirSync('cours').sort())vm.runInContext(fs.readFileSync('cours/'+f,'utf8'),ctx,{filename:f});
vm.runInContext(fs.readFileSync('js/oral.js','utf8'),ctx);
let pb=0,F=0;const dire=(...a)=>{pb++;console.log(...a)};
for(const c of ctx.TDR.liste){
  ctx.ERREURS=[];let n=0;
  for(const l of c.lecons){
    const o=(l.src.match(/^:::\w+/gm)||[]).length,f=(l.src.match(/^:::\s*$/gm)||[]).length;
    if(o!==f)dire(c.id,l.titre,'blocs',o,f);
    const h=ctx.TDR.html(l.src);n+=(h.match(/class="katex"/g)||[]).length;
    const t=h.replace(/<annotation[\s\S]*?<\/annotation>/g,'').replace(/<[^>]+>/g,'');
    const m=t.match(/.{0,40}(\*\*|\\[a-zA-Z]{2,}|:::|[\u0001-\u0003]).{0,40}/);if(m)dire(c.id,l.titre,'résidu:',m[0]);
    if(((l.src.replace(/\\\$/g,'').match(/\$/g)||[]).length)%2)dire(c.id,l.titre,'dollar impair');
    for(const p of ctx.ORAL.phrases(l.src)){if(/[\{}$^_]/.test(p))dire(c.id,l.titre,'oral:',p)}
  }
  for(const q of c.quiz){ctx.TDR.inline(q.q+q.e+q.r.map(r=>r.t).join(' '));if(q.r.filter(r=>r.ok).length!==1||q.r.length<3||!q.e)dire(c.id,'quiz',q.q)}
  for(const k of c.cartes){ctx.TDR.inline(k.r);ctx.TDR.inline(k.v)}
  ctx.ERREURS.forEach(e=>dire(c.id,'TEX',e));F+=n;
  console.log(c.id.padEnd(11),c.lecons.length,'leçons',n,'formules',c.quiz.length,'quiz',c.cartes.length,'cartes',c.podcasts.map(p=>p.lignes.length+' répliques').join());
}
console.log(F,'formules affichées ;',pb,'problème(s)');process.exit(pb?1:0);
