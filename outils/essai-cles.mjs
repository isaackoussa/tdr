// Vérifie la bascule entre clés, sans réseau. Usage : node outils/essai-cles.mjs
import assert from 'node:assert/strict';
import { cles, gemini } from '../netlify/commun.mjs';
console.error = () => {};
Object.assign(process.env, { GEMINI_API_KEY: 'a, b\nc', GEMINI_API_KEY_2: 'd', GEMINI_API_KEY_3: 'b' });
assert.deepEqual(cles(), ['a', 'b', 'c', 'd']);
let vus, etat;
globalThis.fetch = async (u, o) => { const k = o.headers['x-goog-api-key'], m = JSON.parse(o.body).model; vus.push(k + m); const s = etat[k + m] || etat[k] || etat[m] || 200; return new Response(s === 200 ? '{"ok":1}' : s === 400 ? etat.texte : 'x', { status: s }); };
const va = async (e, model = 'X') => { vus = []; etat = e; return gemini({ model }).then(() => 'ok', x => x.code); };
for (const k of ['a', 'b', 'c', 'd', 'a']) { assert.equal(await va({}), 'ok'); assert.deepEqual(vus, [k + 'X']); }    // à tour de rôle
assert.equal(await va({ b: 429, c: 403 }), 'ok'); assert.deepEqual(vus, ['bX', 'cX', 'dX']);                          // bascule de clé
assert.equal(await va({}), 'ok'); assert.ok(!'bc'.includes(vus[0][0]));                                               // au repos : en dernier
assert.equal(await va({ X: 400, texte: 'model not found' }), 'gemini400'); assert.equal(vus.length, 1);
assert.equal(await va({ X: 400, texte: 'API key not valid' }), 'gemini400'); assert.equal(vus.length, 4);
assert.equal(await va({ X: 503 }, ['X', 'Y']), 'ok'); assert.equal(vus.length, 3); assert.equal(vus[2][1], 'Y');       // surcharge : modèle de secours
assert.equal(await va({ X: 503, Y: 404 }, ['X', 'Y', 'Z']), 'ok'); assert.equal(vus.at(-1)[1], 'Z');
assert.equal(await va({ X: 429 }, ['X', 'Y']), 'ok'); assert.equal(vus.at(-1)[1], 'Y');                               // quota : modèle de secours
assert.equal(await va({ X: 503, Y: 503 }, ['X', 'Y']), 'gemini503');
console.log('Bascule entre clés et modèles : tout est bon');
