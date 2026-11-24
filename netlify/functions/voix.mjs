// POST /api/voix : quelques répliques -> WAV à deux voix (Gemini TTS). Le navigateur assemble les morceaux.
import { entree, texte, gemini, audioDe, refus, erreur } from '../commun.mjs';

const VOIX = { A: ['Awa', () => process.env.VOIX_AWA || 'Kore', 'claire, chaleureuse, pédagogue, en français'], B: ['Kofi', () => process.env.VOIX_KOFI || 'Puck', 'curieux, naturel, en français'] };

// Au cas où le service renverrait du PCM brut, on ajoute l'en-tête WAV.
function wav(b) {
  if (b.length > 12 && b.toString('latin1', 0, 4) === 'RIFF') return b;
  const t = Buffer.alloc(44), n = b.length;
  t.write('RIFF', 0); t.writeUInt32LE(36 + n, 4); t.write('WAVEfmt ', 8); t.writeUInt32LE(16, 16); t.writeUInt16LE(1, 20); t.writeUInt16LE(1, 22);
  t.writeUInt32LE(24000, 24); t.writeUInt32LE(48000, 28); t.writeUInt16LE(2, 32); t.writeUInt16LE(16, 34); t.write('data', 36); t.writeUInt32LE(n, 40);
  return Buffer.concat([t, b]);
}

export default async req => {
  if (req.method !== 'POST') return refus('Méthode non permise.', 405, 'methode');
  const b = await entree(req, 12000);
  if (b instanceof Response) return b;
  const lignes = (Array.isArray(b.lignes) ? b.lignes : []).slice(0, 12).map(l => ({ v: l && l.v === 'B' ? 'B' : 'A', t: texte(l && l.t, 900) })).filter(l => l.t);
  const total = lignes.reduce((s, l) => s + l.t.length, 0);
  if (!lignes.length) return refus('Aucune réplique.', 400, 'vide');
  if (total > 1300) return refus('Morceau trop long.', 413, 'taille');
  const presentes = [...new Set(lignes.map(l => l.v))];
  try {
    const a = audioDe(await gemini({
      model: process.env.GEMINI_TTS_MODEL || 'gemini-3.8-flash-tts',
      input: [{ type: 'user_input', content: lignes.map(l => ({ type: 'text', text: l.t, annotations: [{ type: 'speech_metadata', speaker: VOIX[l.v][0], style: VOIX[l.v][2] }] })) }],
      response_format: { type: 'audio' },
      generation_config: { speech_config: { speakers: presentes.map(v => ({ speaker: VOIX[v][0], voice: VOIX[v][1]() })) } }
    }));
    if (!a) return refus('Gemini n’a pas renvoyé de son.', 502, 'vide');
    return new Response(wav(a), { headers: { 'content-type': 'audio/wav', 'cache-control': 'no-store' } });
  } catch (e) { return erreur(e); }
};

export const config = { path: '/api/voix', rateLimit: { windowLimit: 30, windowSize: 60, aggregateBy: ['ip', 'domain'] } };
