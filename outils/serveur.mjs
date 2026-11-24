// Serveur local : sert public/ et les deux fonctions. Usage : node outils/serveur.mjs [--essai]
// --essai remplace Gemini par de fausses réponses (aucune clé, aucun appel réseau).
import http from 'node:http';import fs from 'node:fs';import path from 'node:path';import {fileURLToPath} from 'node:url';
const racine=fileURLToPath(new URL('../public',import.meta.url));
if(process.argv.includes('--essai')){
  process.env.GEMINI_API_KEY='essai';
  globalThis.fetch=async(u,o)=>{
    const c=JSON.parse(o.body);
    const rep=t=>new Response(JSON.stringify({steps:[{type:'model_output',content:[t]}]}),{status:200});
    if(c.response_format&&c.response_format.type==='audio'){
      const n=24000*2,b=Buffer.alloc(44+n);b.write('RIFF',0);b.writeUInt32LE(36+n,4);b.write('WAVEfmt ',8);b.writeUInt32LE(16,16);b.writeUInt16LE(1,20);b.writeUInt16LE(1,22);b.writeUInt32LE(24000,24);b.writeUInt32LE(48000,28);b.writeUInt16LE(2,32);b.writeUInt16LE(16,34);b.write('data',36);b.writeUInt32LE(n,40);
      for(let i=0;i<n/2;i++)b.writeInt16LE(Math.round(2000*Math.sin(i/9)),44+2*i);
      return rep({type:'audio',data:b.toString('base64')});
    }
    if(c.response_format){
      const p=c.response_format.schema.properties;
      return rep({type:'text',text:JSON.stringify(p.lignes?{titre:'Essai <b>de</b> podcast',lignes:Array.from({length:14},(_,i)=>({voix:i%2?'B':'A',texte:'Réplique d’essai numéro '+(i+1)+'. '+'Un texte un peu long pour vérifier le découpage des morceaux. '.repeat(3)}))}:{questions:[{question:'Combien vaut $1+1$ ?',choix:['$1$','$2$','$3$','$4$'],bonne:1,explication:'$1+1=2$.'},{question:'Et $\\frac{4}{2}$ ?',choix:['2','3','4','5'],bonne:0,explication:'Deux.'}]})});
    }
    return rep({type:'text',text:'## L’idée\nVoici **l’idée** : $\\psi(u)\\le e^{-Ru}$.\n\n$$R=\\frac{\\rho}{\\mu(1+\\rho)}$$\n\n* premier point\n* second point\n\n| a | b |\n|---|---|\n| 1 | 2 |\n\n:::labo "><img src=x onerror=alert(1)>\n<script>alert(2)</script> texte'});
  };
}
const F={};for(const f of ['ia','voix']){const m=await import('../netlify/functions/'+f+'.mjs');F[m.config.path]=m.default}
const T={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.svg':'image/svg+xml','.mp3':'audio/mpeg','.woff2':'font/woff2','.woff':'font/woff','.ttf':'font/ttf','.webmanifest':'application/manifest+json'};
http.createServer(async(q,s)=>{
  const u=new URL(q.url,'http://localhost');
  if(F[u.pathname]){
    const k=[];for await(const x of q)k.push(x);
    const r=await F[u.pathname](new Request(u,{method:q.method,headers:q.headers,body:['GET','HEAD'].includes(q.method)?undefined:Buffer.concat(k)}),{});
    s.writeHead(r.status,Object.fromEntries(r.headers));return s.end(Buffer.from(await r.arrayBuffer()));
  }
  const p=path.join(racine,decodeURIComponent(u.pathname==='/'?'/index.html':u.pathname));
  if(!p.startsWith(racine)||!fs.existsSync(p)||fs.statSync(p).isDirectory()){s.writeHead(404);return s.end('Introuvable')}
  const n=fs.statSync(p).size,g=/^bytes=(\d+)-(\d*)$/.exec(q.headers.range||''),e={'content-type':T[path.extname(p)]||'application/octet-stream','accept-ranges':'bytes','cache-control':'no-cache',
    'content-security-policy':"default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; media-src 'self' blob:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'"};
  if(g){const a=+g[1],b=g[2]?Math.min(+g[2],n-1):n-1;s.writeHead(206,{...e,'content-range':`bytes ${a}-${b}/${n}`,'content-length':b-a+1});return fs.createReadStream(p,{start:a,end:b}).pipe(s)}
  s.writeHead(200,{...e,'content-length':n});fs.createReadStream(p).pipe(s);
}).listen(process.env.PORT||4190,()=>console.log('http://localhost:'+(process.env.PORT||4190)));
