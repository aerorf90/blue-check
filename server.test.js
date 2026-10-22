'use strict';

const assert = require('node:assert/strict');
const { once } = require('node:events');
const test = require('node:test');

process.env.NODE_ENV = 'test';
process.env.LOCAL_DEMO = '1';
process.env.ADMIN_TOKEN = 'c'.repeat(32);
process.env.SESSION_SECRET = 'd'.repeat(32);

const { app } = require('./server');

test('website owner endpoints disable browser and proxy caching', async (t) => {
  const server = app.listen(0, '127.0.0.1');
  await once(server, 'listening');
  t.after(() => new Promise((resolve, reject) => {
    server.close((error) => error ? reject(error) : resolve());
  }));

  const response = await fetch(`http://127.0.0.1:${server.address().port}/owner/me`);

  assert.equal(response.status, 401);
  assert.match(response.headers.get('cache-control') || '', /no-store/);
});

test('website pages expose the English and Arabic language switcher', async (t) => {
  const server = app.listen(0, '127.0.0.1');
  await once(server, 'listening');
  t.after(() => new Promise((resolve, reject) => {
    server.close((error) => error ? reject(error) : resolve());
  }));

  const origin = `http://127.0.0.1:${server.address().port}`;
  const paths = ['/', '/dashboard', '/download', '/privacy', '/terms', '/seller'];
  const [pages, language] = await Promise.all([
    Promise.all(paths.map((path) => fetch(`${origin}${path}`))),
    fetch(`${origin}/language.js`)
  ]);

  for (const response of pages) {
    assert.equal(response.status, 200);
    assert.match(await response.text(), /src="\/language\.js"/);
  }
  assert.equal(language.status, 200);
  const source = await language.text();
  assert.match(source, /'English'/);
  assert.match(source, /'العربية'/);
  assert.match(source, /document\.documentElement\.dir = language === 'ar' \? 'rtl' : 'ltr'/);
});
