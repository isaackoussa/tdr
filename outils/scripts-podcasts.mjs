// Étape 1 : extrait les dialogues des cours vers un JSON. Usage : node outils/scripts-podcasts.mjs sortie.json
import fs from 'fs';import vm from 'vm';import {fileURLToPath} from 'url';import path from 'path';const sortie=path.resolve(process.argv[2]);process.chdir(fileURLToPath(new URL('../public',import.meta.url)));
const ctx={console};ctx.window=ctx;vm.createContext(ctx);
for(const f of ['vendor/katex/katex.min.js','js/moteur.js'])vm.runInContext(fs.readFileSync(f,'utf8'),ctx);
for(const f of fs.readdirSync('cours').sort())vm.runInContext(fs.readFileSync('cours/'+f,'utf8'),ctx);
const R=[];for(const c of ctx.TDR.liste)c.podcasts.forEach((p,k)=>R.push({cle:c.id+'-'+k,lignes:p.lignes.map(l=>({v:l.v,t:l.t}))}));
fs.writeFileSync(sortie,JSON.stringify(R));console.log(R.length,'épisodes');
