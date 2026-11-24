// Partagé par les deux fonctions. Les clés Gemini restent sur le serveur.
import { timingSafeEqual, createHash } from 'node:crypto';

const URL_GEMINI = 'https://generativelanguage.googleapis.com/v1beta/interactions';

// Clés : GEMINI_API_KEY (une, ou plusieurs séparées par des virgules, espaces ou lignes), puis GEMINI_API_KEY_1 à _20.
export const cles = () => [...new Set([process.env.GEMINI_API_KEY, ...Array.from({ length: 20 }, (_, i) => process.env['GEMINI_API_KEY_' + (i + 1)])]
  .flatMap(v => (v || '').split(/[\s,;]+/)).filter(Boolean))];
let depart = 0;              // partage la charge entre les clés
const repos = new Map();     // clé -> heure avant laquelle on l'essaie en dernier

export const json = (o, status = 200) =>
  new Response(JSON.stringify(o), { status, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' } });
export const refus = (message, status, code) => json({ erreur: message, code }, status);

const h = s => createHash('sha256').update(String(s)).digest();

// Renvoie une Response de refus, ou le corps JSON.
export async function entree(req, maxOctets) {
  const site = req.headers.get('sec-fetch-site');
  if (site && site !== 'same-origin') return refus('Requête refusée : elle ne vient pas de l’application.', 403, 'origine');
  if (!cles().length) return refus('La clé Gemini n’est pas encore installée sur le site : ajoute la variable GEMINI_API_KEY dans Netlify, puis redéploie.', 503, 'cle');
  if (process.env.ACCES_CODE && !timingSafeEqual(h(req.headers.get('x-acces') || ''), h(process.env.ACCES_CODE)))
    return refus('Code d’accès manquant ou inexact.', 401, 'acces');
  const t = await req.text();
  if (Buffer.byteLength(t) > maxOctets) return refus('Demande trop longue.', 413, 'taille');
  try {
    const o = JSON.parse(t);
    if (o && typeof o === 'object' && !Array.isArray(o)) return o;
  } catch { /* réponse commune ci-dessous */ }
  return refus('Demande illisible.', 400, 'json');
}

export const texte = (v, max) => (typeof v === 'string' ? v.replace(/[\u0000-\u0008\u000b-\u001f]/g, ' ').trim().slice(0, max) : '');

const pause = ms => new Promise(r => setTimeout(r, ms));
// corps.model peut être une liste : le premier modèle, puis ceux de secours si Google est surchargé ou le quota atteint.
export async function gemini({ model, ...corps }) {
  const K = cles(), n = depart++, fin = Date.now() + 52000, t0 = Date.now(), etats = [], refusees = new Set();
  const modeles = [...new Set([model].flat().filter(Boolean))];
  boucle: for (const mod of modeles) {
    const ordre = K.map((c, i) => ({ c, num: i + 1, rang: (i - n % K.length + K.length) % K.length, dort: Math.max(repos.get(c) || 0, repos.get(c + mod) || 0) > t0 }))
      .sort((x, y) => x.dort - y.dort || x.rang - y.rang);
    let pannes = 0;
    for (const { c, num } of ordre) {
      if (refusees.has(c)) continue;
      const reste = fin - Date.now();
      if (reste < 4000) break boucle;
      let r, t;
      try {
        r = await fetch(URL_GEMINI, {
          method: 'POST',
          headers: { 'content-type': 'application/json', 'x-goog-api-key': c, 'api-revision': '2026-05-20' },
          body: JSON.stringify({ model: mod, ...corps }),
          signal: AbortSignal.timeout(reste)
        });
        t = await r.text();
      } catch (e) {
        if (e.name !== 'TimeoutError') { etats.push(503); if (++pannes >= 2) break; await pause(800); continue; }
        throw Object.assign(new Error('Gemini a mis trop de temps à répondre. Réessaie, ou demande plus court.'), { status: 504, code: 'delai' });
      }
      if (r.ok) {
        try { return JSON.parse(t); } catch { throw Object.assign(new Error('Réponse de Gemini illisible.'), { status: 502, code: 'format' }); }
      }
      console.error('Gemini', mod, 'clé n°', num, r.status, t.slice(0, 400));   // jamais la clé elle-même
      etats.push(r.status);
      if (r.status === 401 || r.status === 403 || (r.status === 400 && /api[ _]?key/i.test(t))) { refusees.add(c); repos.set(c, Date.now() + 600000); }
      else if (r.status === 429) repos.set(c + mod, Date.now() + 60000);
      else if (r.status >= 500) { if (++pannes >= 2) break; await pause(800); }   // surcharge : ça ne vient pas de la clé
      else break;                                                                  // modèle ou demande en cause : modèle suivant
    }
  }
  const st = [503, 500, 502, 504, 529].find(x => etats.includes(x)) || (etats.includes(429) ? 429 : etats[0] || 504);
  const m = {
      400: 'Gemini a refusé la demande (400) : vérifie la clé et le nom du modèle dans Netlify.',
      401: 'Aucune clé Gemini n’est acceptée : vérifie les clés dans Netlify.',
      403: 'Aucune clé Gemini n’est acceptée : vérifie les clés et leurs droits.',
      404: 'Le modèle demandé n’existe pas : vérifie GEMINI_MODEL et GEMINI_TTS_MODEL.',
      429: K.length > 1 ? 'Le quota de toutes tes clés Gemini utilisables est atteint. Réessaie dans quelques minutes.' : 'Le quota Gemini est atteint pour l’instant. Réessaie dans quelques minutes.'
    }[st] || (st >= 500 && 'Les serveurs de Google sont surchargés en ce moment (' + st + '). Ce n’est pas ta clé : réessaie dans une ou deux minutes.') || 'Gemini a renvoyé une erreur (' + st + '). Réessaie.';
    throw Object.assign(new Error(m), { status: st === 429 ? 429 : st >= 500 ? 503 : 502, code: 'gemini' + st });
}

// Contenus produits par le modèle, quel que soit le rangement exact : steps[] puis content[].
export function contenus(o) {
  const L = [];
  for (const s of o.steps || []) if (s.type === 'model_output' || !s.type) L.push(...(s.content || []));
  for (const s of o.outputs || []) L.push(...(s.content || [s]));
  return L;
}
export const texteDe = o => contenus(o).filter(c => typeof c.text === 'string' && (!c.type || c.type === 'text')).map(c => c.text).join('') || (typeof o.output_text === 'string' ? o.output_text : '');
export function audioDe(o) {
  const c = contenus(o).find(x => x.type === 'audio' && x.data);
  return c ? Buffer.from(c.data, 'base64') : null;
}
export const erreur = e => refus(e.status ? e.message : 'Erreur interne.', e.status || 500, e.code || 'interne');
