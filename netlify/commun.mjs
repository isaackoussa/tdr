// Partagé par les deux fonctions. La clé Gemini reste sur le serveur (variable GEMINI_API_KEY).
import { timingSafeEqual, createHash } from 'node:crypto';

const URL_GEMINI = 'https://generativelanguage.googleapis.com/v1beta/interactions';

export const json = (o, status = 200) =>
  new Response(JSON.stringify(o), { status, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' } });
export const refus = (message, status, code) => json({ erreur: message, code }, status);

const h = s => createHash('sha256').update(String(s)).digest();

// Renvoie une Response de refus, ou le corps JSON.
export async function entree(req, maxOctets) {
  const site = req.headers.get('sec-fetch-site');
  if (site && site !== 'same-origin') return refus('Requête refusée : elle ne vient pas de l’application.', 403, 'origine');
  if (!process.env.GEMINI_API_KEY) return refus('La clé Gemini n’est pas encore installée sur le site : ajoute la variable GEMINI_API_KEY dans Netlify, puis redéploie.', 503, 'cle');
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

export async function gemini(corps) {
  let r;
  try {
    r = await fetch(URL_GEMINI, {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-goog-api-key': process.env.GEMINI_API_KEY, 'api-revision': '2026-05-20' },
      body: JSON.stringify(corps),
      signal: AbortSignal.timeout(52000)
    });
  } catch (e) {
    throw Object.assign(new Error(e.name === 'TimeoutError' ? 'Gemini a mis trop de temps à répondre. Réessaie, ou demande plus court.' : 'Gemini est injoignable pour le moment.'), { status: 504, code: 'delai' });
  }
  const t = await r.text();
  if (!r.ok) {
    console.error('Gemini', r.status, t.slice(0, 500));
    const m = {
      400: 'Gemini a refusé la demande (400) : vérifie la clé et le nom du modèle dans Netlify.',
      401: 'La clé Gemini est refusée : vérifie GEMINI_API_KEY dans Netlify.',
      403: 'La clé Gemini est refusée : vérifie GEMINI_API_KEY et ses droits.',
      404: 'Le modèle demandé n’existe pas : vérifie GEMINI_MODEL et GEMINI_TTS_MODEL.',
      429: 'Le quota Gemini est atteint pour l’instant. Réessaie dans quelques minutes.'
    }[r.status] || 'Gemini a renvoyé une erreur (' + r.status + '). Réessaie.';
    throw Object.assign(new Error(m), { status: r.status === 429 ? 429 : 502, code: 'gemini' + r.status });
  }
  try { return JSON.parse(t); } catch { throw Object.assign(new Error('Réponse de Gemini illisible.'), { status: 502, code: 'format' }); }
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
