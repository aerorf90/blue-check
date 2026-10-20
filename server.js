// Serveur RynWeb PC Check
// Variables : ADMIN_TOKEN (obligatoire), DISCORD_CLIENT_ID, DISCORD_CLIENT_SECRET, SESSION_SECRET,
//             MONGODB_URI, DOWNLOAD_URL, CONTACT_EMAIL, RETENTION_DAYS, BASE_URL, PORT
const express = require('express'), crypto = require('crypto'), fs = require('fs'), path = require('path');
const ADMIN = process.env.ADMIN_TOKEN;
if (!ADMIN) { console.error('Définissez ADMIN_TOKEN'); process.exit(1); }
const FILE = process.env.DATA_FILE || path.join(__dirname, 'data.json');
const DAY = 86400000, CODE_TTL = 24 * 3600000;
const RETENTION = Math.max(1, parseInt(process.env.RETENTION_DAYS) || 30) * DAY; // suppression automatique des rapports
const SECRET = process.env.SESSION_SECRET || crypto.createHash('sha256').update('sess:' + ADMIN).digest('hex');
const DC_ID = process.env.DISCORD_CLIENT_ID, DC_SECRET = process.env.DISCORD_CLIENT_SECRET;
const CONTACT = process.env.CONTACT_EMAIL || 'contact@votre-domaine.com';
const INVITE = /^https:\/\/(discord\.gg|discord\.com\/invite)\/[\w-]+$/.test(process.env.DISCORD_INVITE || '') ? process.env.DISCORD_INVITE : '';

// ---------- Stockage : MongoDB si MONGODB_URI, sinon fichier ----------
let cache = { keys: {}, checks: {}, users: {} }, col = null, timer = null;
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
  cache.keys = cache.keys || {}; cache.checks = cache.checks || {}; cache.users = cache.users || {};
}
function purge() { // suppression automatique des anciens rapports
  const db = load(); let n = 0;
  for (const c in db.checks) if (Date.now() - db.checks[c].createdAt > RETENTION) { delete db.checks[c]; n++; }
  if (n) { save(db); console.log(n + ' rapport(s) supprimé(s) (durée de conservation dépassée)'); }
}

// ---------- Utilitaires ----------
const app = express();
app.set('trust proxy', 1);
app.use(express.json({ limit: '2mb' }));
app.use((_, res, next) => { res.setHeader('X-Content-Type-Options', 'nosniff'); res.setHeader('X-Frame-Options', 'DENY'); res.setHeader('Referrer-Policy', 'same-origin'); next(); });
const attempts = {};
const limited = (ip) => { const now = Date.now(), a = (attempts[ip] || []).filter((t) => now - t < 600000); a.push(now); attempts[ip] = a; return a.length > 40; };
const parseCookies = (req) => Object.fromEntries((req.headers.cookie || '').split(';').map((x) => x.trim()).filter(Boolean).map((x) => { const i = x.indexOf('='); return [x.slice(0, i), x.slice(i + 1)]; }));
const sign = (s) => crypto.createHmac('sha256', SECRET).update(s).digest('base64url');
const makeSession = (id) => { const p = Buffer.from(JSON.stringify({ id, exp: Date.now() + 7 * DAY })).toString('base64url'); return p + '.' + sign(p); };
function readSession(req) {
  try {
    const [p, sig] = (parseCookies(req).sess || '').split('.'); if (!p || !sig) return null;
    const good = sign(p); if (sig.length !== good.length || !crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(good))) return null;
    const d = JSON.parse(Buffer.from(p, 'base64url').toString()); return d.exp > Date.now() ? d.id : null;
  } catch { return null; }
}
const baseUrl = (req) => process.env.BASE_URL || `${req.protocol}://${req.get('host')}`;
const cookie = (name, val, age) => `${name}=${val}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=${age}`;

// ---------- Vendeur (vous) : clés ----------
const adminAuth = (q, r, n) => q.headers['x-admin-token'] === ADMIN ? n() : r.status(401).json({ error: 'Non autorisé' });
app.post('/seller/create', adminAuth, (req, res) => {
  const days = Math.max(1, parseInt(req.body.days) || 30), count = Math.min(100, Math.max(1, parseInt(req.body.count) || 1));
  const db = load(), made = [];
  for (let i = 0; i < count; i++) {
    const k = 'PCK-' + [1, 2, 3].map(() => crypto.randomBytes(2).toString('hex').toUpperCase()).join('-');
    db.keys[k] = { days, createdAt: Date.now(), expiresAt: null, revoked: false, owner: null, label: String(req.body.label || '').slice(0, 60) }; made.push(k);
  }
  save(db); res.json({ keys: made, days });
});
app.get('/seller/list', adminAuth, (_, res) => {
  const db = load(); res.json(Object.entries(db.keys).map(([key, v]) => ({ key, ...v,
    ownerName: v.owner && db.users[v.owner] ? db.users[v.owner].name : '',
    checks: Object.values(db.checks).filter((c) => c.key === key).length })));
});
app.post('/seller/revoke', adminAuth, (req, res) => {
  const db = load(); if (!db.keys[req.body.key]) return res.json({ error: 'Introuvable' });
  db.keys[req.body.key].revoked = true; save(db); res.json({ ok: true });
});
app.post('/seller/unbind', adminAuth, (req, res) => { // libère la clé du compte Discord (changement de compte)
  const db = load(), k = db.keys[req.body.key]; if (!k) return res.json({ error: 'Introuvable' });
  Object.values(db.users).forEach((u) => { if (u.key === req.body.key) u.key = null; });
  k.owner = null; save(db); res.json({ ok: true });
});

// ---------- Connexion Discord ----------
app.get('/auth/discord', (req, res) => {
  if (!DC_ID || !DC_SECRET) return res.status(500).send('Connexion Discord non configurée (DISCORD_CLIENT_ID / DISCORD_CLIENT_SECRET).');
  const state = crypto.randomBytes(16).toString('hex');
  res.setHeader('Set-Cookie', cookie('ost', state, 600));
  res.redirect('https://discord.com/oauth2/authorize?' + new URLSearchParams({ client_id: DC_ID, response_type: 'code',
    redirect_uri: baseUrl(req) + '/auth/discord/callback', scope: 'identify', state, prompt: 'none' }));
});
app.get('/auth/discord/callback', async (req, res) => {
  try {
    if (!req.query.code || !req.query.state || req.query.state !== parseCookies(req).ost) return res.status(400).send('Connexion refusée. <a href="/">Retour</a>');
    const tr = await fetch('https://discord.com/api/oauth2/token', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ client_id: DC_ID, client_secret: DC_SECRET, grant_type: 'authorization_code', code: String(req.query.code), redirect_uri: baseUrl(req) + '/auth/discord/callback' }) });
    const t = await tr.json(); if (!t.access_token) throw new Error('token');
    const u = await (await fetch('https://discord.com/api/users/@me', { headers: { Authorization: 'Bearer ' + t.access_token } })).json();
    if (!u.id) throw new Error('user');
    const db = load(), prev = db.users[u.id] || { id: u.id, createdAt: Date.now(), key: null };
    db.users[u.id] = Object.assign(prev, { name: String(u.global_name || u.username || '').slice(0, 60), avatar: u.avatar || null }); save(db);
    res.setHeader('Set-Cookie', [cookie('sess', makeSession(u.id), 7 * 86400), 'ost=; Path=/; Max-Age=0']);
    res.redirect('/dashboard');
  } catch (e) { res.status(500).send('Erreur de connexion Discord. <a href="/">Réessayer</a>'); }
});
app.post('/auth/logout', (_, res) => { res.setHeader('Set-Cookie', 'sess=; Path=/; Max-Age=0'); res.json({ ok: true }); });

// ---------- Propriétaire de serveur (compte Discord + clé) ----------
function userAuth(req, res, next) {
  const id = readSession(req), db = load(), u = id && db.users[id];
  if (!u) return res.status(401).json({ error: 'Non connecté' });
  req.user = u; req.db = db; next();
}
function keyState(db, u) {
  const k = u.key && db.keys[u.key];
  if (!k) return { status: 'none' };
  if (k.revoked) return { status: 'revoked', k };
  if (!k.expiresAt || Date.now() > k.expiresAt) return { status: 'expired', k };
  return { status: 'ok', k };
}
function ownerAuth(req, res, next) {
  userAuth(req, res, () => {
    const s = keyState(req.db, req.user);
    if (s.status !== 'ok') return res.status(403).json({ error: { none: 'Aucune clé active', expired: 'Clé expirée', revoked: 'Clé désactivée' }[s.status], status: s.status });
    req.k = s.k; next();
  });
}
app.get('/owner/me', userAuth, (req, res) => {
  const s = keyState(req.db, req.user), u = req.user;
  res.json({ user: { id: u.id, name: u.name, avatar: u.avatar }, status: s.status, expiresAt: s.k && s.k.expiresAt || null });
});
app.post('/owner/activate', userAuth, (req, res) => {
  if (limited(req.ip)) return res.json({ ok: false, error: 'Trop de tentatives, réessayez plus tard' });
  const key = String((req.body || {}).key || '').trim().toUpperCase(), db = req.db, k = db.keys[key];
  if (!k) return res.json({ ok: false, error: 'Clé invalide' });
  if (k.revoked) return res.json({ ok: false, error: 'Clé désactivée' });
  if (k.owner && k.owner !== req.user.id) return res.json({ ok: false, error: 'Cette clé est déjà liée à un autre compte Discord' });
  if (keyState(db, req.user).status === 'ok' && req.user.key !== key) return res.json({ ok: false, error: 'Vous avez déjà une clé active' });
  if (!k.owner) k.owner = req.user.id;
  if (!k.expiresAt) k.expiresAt = Date.now() + k.days * DAY; // les jours commencent à l'activation
  req.user.key = key; save(db); res.json({ ok: true, expiresAt: k.expiresAt });
});
const mine = (db, u) => Object.entries(db.checks).filter(([, c]) => { const k = db.keys[c.key]; return k && k.owner === u.id; });
app.post('/owner/check/new', ownerAuth, (req, res) => {
  let code; do { code = String(crypto.randomInt(100000, 1000000)); } while (req.db.checks[code]);
  req.db.checks[code] = { key: req.user.key, player: String((req.body || {}).player || '').slice(0, 60), createdAt: Date.now(), report: null };
  save(req.db); res.json({ code });
});
app.get('/owner/checks', ownerAuth, (req, res) => {
  res.json({ expiresAt: req.k.expiresAt, retentionDays: RETENTION / DAY, checks: mine(req.db, req.user)
    .sort((a, b) => b[1].createdAt - a[1].createdAt).slice(0, 200).map(([code, c]) => ({
      code, player: c.player, createdAt: c.createdAt, done: !!c.report,
      expired: !c.report && Date.now() - c.createdAt > CODE_TTL, stats: c.report ? c.report.stats : null })) });
});
app.get('/owner/check/:code', ownerAuth, (req, res) => {
  const e = mine(req.db, req.user).find(([code]) => code === req.params.code); if (!e) return res.json({ error: 'Introuvable' });
  res.json({ player: e[1].player, report: e[1].report });
});
app.post('/owner/check/delete', ownerAuth, (req, res) => {
  const code = String((req.body || {}).code || ''), e = mine(req.db, req.user).find(([c]) => c === code);
  if (!e) return res.json({ ok: false, error: 'Introuvable' });
  delete req.db.checks[code]; save(req.db); res.json({ ok: true });
});

// ---------- Joueur ----------
function codeError(db, code) {
  const c = db.checks[code];
  if (!c) return 'Code invalide';
  if (c.report) return 'Ce code a déjà été utilisé';
  if (Date.now() - c.createdAt > CODE_TTL) return 'Code expiré';
  const k = db.keys[c.key];
  if (!k || k.revoked || !k.expiresAt || Date.now() > k.expiresAt) return 'Abonnement du serveur expiré';
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

// ---------- Pages ----------
const page = (f) => (_, r) => r.sendFile(path.join(__dirname, f));
const legal = (f) => (_, r) => r.type('html').send(fs.readFileSync(path.join(__dirname, f), 'utf8').split('{{CONTACT}}').join(CONTACT).split('{{DAYS}}').join(String(RETENTION / DAY)));
app.get('/download', page('download.html'));
app.get('/download/file', (_, r) => process.env.DOWNLOAD_URL ? r.redirect(process.env.DOWNLOAD_URL) : r.status(404).send('Téléchargement pas encore configuré (DOWNLOAD_URL)'));
app.get('/privacy', legal('privacy.html'));
app.get('/terms', legal('terms.html'));
app.get('/health', (_, r) => r.send('ok'));
app.get('/logo.png', page('logo.png'));
app.get('/', (_, r) => r.type('html').send(fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8').split('{{INVITE}}').join(INVITE)));
app.get('/dashboard', page('dashboard.html'));
app.get('/style.css', page('style.css'));
app.get('/discord.svg', page('discord.svg'));
app.get('/seller', page('seller.html'));

init().then(() => { purge(); setInterval(purge, 6 * 3600000); app.listen(process.env.PORT || 3000, () => console.log('Serveur PC Check prêt')); })
  .catch((e) => { console.error('Échec démarrage :', e.message); process.exit(1); });
