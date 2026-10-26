// The generated pages: every record gets a page, open entries land where the
// links point, and the README index stays an index.

import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { loadData, render, num, licenseShort } from '../scripts/pages.ts'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const data = loadData(ROOT)
const out = render(data, '2026-10-17')

test('every game record has a page, and every open entry renders once', () => {
  for (const g of data.games) assert.ok(out.pages.has(`games/${g.id}.md`), g.id)
  for (const e of data.open) {
    const host = out.pages.get(`games/${e.related_game ?? e.id}.md`)
    assert.ok(host, e.id)
    assert.match(host, new RegExp(`<a id="open-${e.id}"></a>`), `${e.id} anchor on its host page`)
  }
})

test('every relative link in a generated page resolves to a generated page or a repo file', () => {
  const paths = new Set([...out.pages.keys(), 'README.md'])
  for (const [rel, body] of out.pages) {
    const base = dirname(rel)
    for (const [, target] of body.matchAll(/\]\((?!https?:|#|mailto:)([^)#\s]+)(#[^)]*)?\)/g)) {
      const resolved = join(base, target)
      if (paths.has(resolved)) continue
      assert.doesNotThrow(() => readFileSync(join(ROOT, resolved)), `${rel} links ${target}`)
    }
  }
})

test('the engines page lists every engine with its strength source', () => {
  const page = out.pages.get('pages/engines.md')!
  for (const e of data.engines) {
    assert.equal(page.split(`<a id="engine-${e.id}"></a>`).length, 2, `${e.id}: one anchor, so old links land`)
    assert.ok(page.includes(`(${e.strength.url})`), `${e.id} strength source`)
    assert.ok(page.includes(`](../engines/${e.id}.md)`), `${e.id} links its page`)
  }
})

test('every engine has a page with its claim, source and full license, linked from its games', () => {
  for (const e of data.engines) {
    const page = out.pages.get(`engines/${e.id}.md`)
    assert.ok(page, e.id)
    assert.ok(page.includes(`(${e.strength.url})`), `${e.id} source`)
    assert.ok(page.includes(e.license.replace(/\s+/g, ' ').replace(/\|/g, '\\|')), `${e.id} license`)
    for (const g of e.games) {
      const host = out.pages.get(`games/${g}.md`) ?? [...data.open].filter((o) => o.id === g).map((o) => out.pages.get(`games/${o.related_game ?? o.id}.md`))[0]
      assert.ok(host?.includes(`](../engines/${e.id}.md)`), `${g} links ${e.id}`)
    }
  }
})

test('the license column names the license or the kind of terms', () => {
  assert.equal(licenseShort('GPL-3.0-or-later (source notices and COPYING)'), 'GPL-3.0-or-later')
  assert.equal(licenseShort('MIT, except separately licensed third-party components identified in LICENSE.'), 'MIT')
  assert.equal(licenseShort('Not specified in the current repository README or release help'), 'Not stated')
  assert.equal(licenseShort('Commercial proprietary software; 14-day fully enabled trial'), 'Proprietary')
  assert.equal(licenseShort('Free to use indefinitely; redistribution and modification terms not stated'), 'Freeware')
})

test('the README index carries counts and links, not the per-family tables', () => {
  const index = out.regions.get('index')!
  assert.match(index, /^\n\d+ solved, \d+ open, \d+ engines/)
  assert.doesNotMatch(index, /\| Result under perfect play \|/)
  const readme = readFileSync(join(ROOT, 'README.md'), 'utf8')
  assert.doesNotMatch(readme, /Play the perfect-play explorer/)
  assert.doesNotMatch(readme, /Worked example/)
})

test('counts past 2^53 print as powers of ten, never as false exact digits', () => {
  // Planted: checkers' exact count, which printed as ...338,700,000 before.
  assert.equal(num(500995484682338672639), '≈ 5.01 × 10²⁰')
  assert.equal(num(1e105), '10¹⁰⁵')
  assert.equal(num(2173243128), '2,173,243,128')
  assert.equal(num(Number.MAX_SAFE_INTEGER), '9,007,199,254,740,991')
  assert.equal(num(null), '—')
  for (const [path, md] of out.pages) assert.doesNotMatch(md, /^\| (State space|Game tree) \| [\d,]{22,}/m, `${path}: an exact count past 2^53`)
})
