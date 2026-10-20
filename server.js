// Serveur PC Check — variables : ADMIN_TOKEN (obligatoire), PORT, DATA_FILE
const express = require('express'), crypto = require('crypto'), fs = require('fs'), path = require('path');
const ADMIN = process.env.ADMIN_TOKEN;
if (!ADMIN) { console.error('Définissez ADMIN_TOKEN'); process.exit(1); }
const FILE = process.env.DATA_FILE || path.join(__dirname, 'data.json');
const DAY = 86400000, CODE_TTL = 24 * 3600000; // clé propriétaire : durée en jours ; code joueur : 24 h
// Stockage : MongoDB si MONGODB_URI est défini (recommandé sur Render), sinon fichier local
let cache = { keys: {}, checks: {} }, col = null, timer = null;
const load = () => cache;
const save = (d) => {
  cache = d;
  if (!col) return fs.writeFileSync(FILE, JSON.stringify(d));
  clearTimeout(timer);
  timer = setTimeout(() => col.updateOne({ _id: 'data' }, { $set: { data: cache } }, { upsert: true }).catch((e) => console.error('Erreur DB', e.message)), 300);
};
async function init() {
  if (process.env.MONGODB_URI) {
    const { MongoClient } = require('mongodb');
    const client = new MongoClient(process.env.MONGODB_URI); await client.connect();
    col = client.db('pccheck').collection('store');
    const doc = await col.findOne({ _id: 'data' }); if (doc) cache = doc.data;
    console.log('Base MongoDB connectée');
  } else { try { cache = JSON.parse(fs.readFileSync(FILE, 'utf8')); } catch {} }
}
const app = express(); app.use(express.json({ limit: '2mb' }));

// ---------- Vendeur (vous) : gestion des clés propriétaires ----------
const adminAuth = (q, r, n) => q.headers['x-admin-token'] === ADMIN ? n() : r.status(401).json({ error: 'Non autorisé' });
app.post('/seller/create', adminAuth, (req, res) => {
  const days = Math.max(1, parseInt(req.body.days) || 30), count = Math.min(100, Math.max(1, parseInt(req.body.count) || 1));
  const db = load(), made = [];
  for (let i = 0; i < count; i++) {
    const k = 'PCK-' + [1, 2, 3].map(() => crypto.randomBytes(2).toString('hex').toUpperCase()).join('-');
    db.keys[k] = { days, createdAt: Date.now(), expiresAt: null, revoked: false, label: String(req.body.label || '').slice(0, 60) }; made.push(k);
  }
  save(db); res.json({ keys: made, days });
});
app.get('/seller/list', adminAuth, (_, res) => {
  const db = load(); res.json(Object.entries(db.keys).map(([key, v]) => ({ key, ...v,
    checks: Object.values(db.checks).filter((c) => c.key === key).length })));
});
app.post('/seller/revoke', adminAuth, (req, res) => {
  const db = load(); if (!db.keys[req.body.key]) return res.json({ error: 'Introuvable' });
  db.keys[req.body.key].revoked = true; save(db); res.json({ ok: true });
});

// ---------- Propriétaire de serveur (clé de 30 jours) ----------
function ownerAuth(req, res, next) {
  const key = String(req.headers['x-owner-key'] || '').trim().toUpperCase();
  const db = load(), k = db.keys[key];
  if (!k) return res.status(401).json({ error: 'Clé invalide' });
  if (k.revoked) return res.status(401).json({ error: 'Clé désactivée' });
  if (!k.expiresAt) { k.expiresAt = Date.now() + k.days * DAY; save(db); } // la durée démarre à la première connexion
  if (Date.now() > k.expiresAt) return res.status(401).json({ error: 'Clé expirée' });
  req.key = key; req.db = db; req.k = k; next();
}
app.post('/owner/login', ownerAuth, (req, res) => res.json({ ok: true, expiresAt: req.k.expiresAt }));
app.post('/owner/check/new', ownerAuth, (req, res) => {
  let code; do { code = String(crypto.randomInt(100000, 1000000)); } while (req.db.checks[code]);
  req.db.checks[code] = { key: req.key, player: String(req.body.player || '').slice(0, 60), createdAt: Date.now(), report: null };
  save(req.db); res.json({ code });
});
app.get('/owner/checks', ownerAuth, (req, res) => {
  res.json({ expiresAt: req.k.expiresAt, checks: Object.entries(req.db.checks).filter(([, c]) => c.key === req.key)
    .sort((a, b) => b[1].createdAt - a[1].createdAt).slice(0, 200).map(([code, c]) => ({
      code, player: c.player, createdAt: c.createdAt, done: !!c.report,
      expired: !c.report && Date.now() - c.createdAt > CODE_TTL,
      stats: c.report ? c.report.stats : null })) });
});
app.get('/owner/check/:code', ownerAuth, (req, res) => {
  const c = req.db.checks[req.params.code]; if (!c || c.key !== req.key) return res.json({ error: 'Introuvable' });
  res.json({ player: c.player, report: c.report });
});

// ---------- Joueur ----------
app.set('trust proxy', 1);
const attempts = {};
const limited = (ip) => { const now = Date.now(), a = (attempts[ip] || []).filter((t) => now - t < 600000); a.push(now); attempts[ip] = a; return a.length > 40; };
function codeError(db, code) {
  const c = db.checks[code];
  if (!c) return 'Code invalide';
  if (c.report) return 'Ce code a déjà été utilisé';
  if (Date.now() - c.createdAt > CODE_TTL) return 'Code expiré';
  const k = db.keys[c.key];
  if (!k || k.revoked || Date.now() > k.expiresAt) return 'Abonnement du serveur expiré';
  return null;
}
app.post('/validate-code', (req, res) => {
  if (limited(req.ip)) return res.json({ ok: false, error: 'Trop de tentatives, réessayez plus tard' });
  const err = codeError(load(), String((req.body || {}).code || ''));
  res.json(err ? { ok: false, error: err } : { ok: true });
});
app.post('/submit', (req, res) => {
  if (limited(req.ip)) return res.json({ ok: false, error: 'Trop de tentatives, réessayez plus tard' });
  const { code, report } = req.body || {}, db = load(), err = codeError(db, String(code || ''));
  if (err) return res.json({ ok: false, error: err });
  db.checks[code].report = report; save(db); res.json({ ok: true });
});

app.get('/download', (_, r) => r.sendFile(path.join(__dirname, 'download.html')));
app.get('/download/file', (_, r) => process.env.DOWNLOAD_URL ? r.redirect(process.env.DOWNLOAD_URL) : r.status(404).send('Téléchargement pas encore configuré (DOWNLOAD_URL)'));
app.get('/health', (_, r) => r.send('ok'));
app.get('/logo.png', (_, r) => r.sendFile(path.join(__dirname, 'logo.png')));
app.get('/', (_, r) => r.sendFile(path.join(__dirname, 'dashboard.html')));
app.get('/seller', (_, r) => r.sendFile(path.join(__dirname, 'seller.html')));
init().then(() => app.listen(process.env.PORT || 3000, () => console.log('Serveur PC Check prêt'))).catch((e) => { console.error('Échec démarrage :', e.message); process.exit(1); });
