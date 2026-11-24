// Vérifie la bascule entre clés, sans réseau. Usage : node outils/essai-cles.mjs
import assert from 'node:assert/strict';
import { cles, gemini } from '../netlify/commun.mjs';
console.error = () => {};
Object.assign(process.env, { GEMINI_API_KEY: 'a, b\nc', GEMINI_API_KEY_2: 'd', GEMINI_API_KEY_3: 'b' });
assert.deepEqual(cles(), ['a', 'b', 'c', 'd']);
let vus, etat;
globalThis.fetch = async (u, o) => { const k = o.headers['x-goog-api-key']; vus.push(k); const s = etat[k] || 200; return new Response(s === 200 ? '{"ok":1}' : s === 400 ? etat.texte : 'x', { status: s }); };
const va = async e => { vus = []; etat = e; return gemini({}).then(() => 'ok', x => x.code); };
for (const k of ['a', 'b', 'c', 'd', 'a']) { assert.equal(await va({}), 'ok'); assert.deepEqual(vus, [k]); }       // à tour de rôle
assert.equal(await va({ b: 429, c: 403 }), 'ok'); assert.deepEqual(vus, ['b', 'c', 'd']);                           // bascule
assert.equal(await va({}), 'ok'); assert.ok(!'bc'.includes(vus[0]));                                                // les clés au repos passent en dernier
assert.equal(await va({ a: 400, b: 400, c: 400, d: 400, texte: 'model not found' }), 'gemini400'); assert.equal(vus.length, 1);
assert.equal(await va({ a: 400, b: 400, c: 400, d: 400, texte: 'API key not valid' }), 'gemini400'); assert.equal(vus.length, 4);
assert.equal(await va({ a: 429, b: 403, c: 429, d: 500 }), 'gemini429'); assert.equal(vus.length, 4);
console.log('Bascule entre clés : tout est bon');
