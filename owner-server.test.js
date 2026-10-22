'use strict';

const assert = require('node:assert/strict');
const { once } = require('node:events');
const test = require('node:test');

process.env.LOCAL_DEMO = '1';
process.env.OWNER_PASSWORD = 'test-owner-password-at-least-16';
process.env.SESSION_SECRET = 'a'.repeat(32);
process.env.KEY_PEPPER = 'b'.repeat(32);

const { createApp } = require('./owner-server');

test('owner login sends a restrictive CSP and disables browser caching', async (t) => {
  const server = createApp().listen(0, '127.0.0.1');
  await once(server, 'listening');
  t.after(() => new Promise((resolve, reject) => {
    server.close((error) => error ? reject(error) : resolve());
  }));

  const response = await fetch(`http://127.0.0.1:${server.address().port}/admin/login`);
  const policy = response.headers.get('content-security-policy') || '';

  assert.equal(response.status, 200);
  assert.match(policy, /script-src 'self'/);
  assert.match(policy, /script-src-attr 'none'/);
  assert.match(policy, /object-src 'none'/);
  assert.match(policy, /frame-ancestors 'none'/);
  assert.match(response.headers.get('cache-control') || '', /no-store/);
  assert.match(await response.text(), /src="\/language\.js"/);
});

test('owner privacy notice serves the shared bilingual language switcher', async (t) => {
  const server = createApp().listen(0, '127.0.0.1');
  await once(server, 'listening');
  t.after(() => new Promise((resolve, reject) => {
    server.close((error) => error ? reject(error) : resolve());
  }));

  const origin = `http://127.0.0.1:${server.address().port}`;
  const [privacy, language] = await Promise.all([
    fetch(`${origin}/privacy`),
    fetch(`${origin}/language.js`)
  ]);

  assert.equal(privacy.status, 200);
  assert.match(await privacy.text(), /src="\/language\.js"/);
  assert.equal(language.status, 200);
  assert.match(await language.text(), /لا يُرسل الفحص إلا/);
});
