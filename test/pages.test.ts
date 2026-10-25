// The generated pages: every record gets a page, open entries land where the
// links point, and the README index stays an index.

import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { loadData, render, num } from '../scripts/pages.ts'

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
    assert.match(page, new RegExp(`<a id="engine-${e.id}"></a>`), e.id)
    assert.ok(page.includes(`(${e.strength.url})`), `${e.id} strength source`)
  }
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
