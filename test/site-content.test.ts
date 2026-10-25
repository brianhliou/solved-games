// The site's game pages (site/scripts/gen-content.ts): data written as a bare
// URL rendered as a list of `undefined` links on six pages until 2026-10-25,
// because the generator assumed every resource was a list of {title, url}.

import { test } from 'node:test'
import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { readFileSync, readdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { loadData } from '../scripts/pages.ts'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const OUT = join(ROOT, 'site', 'src', 'content', 'docs', 'games')
execFileSync(process.execPath, [join(ROOT, 'site', 'scripts', 'gen-content.ts')], { stdio: 'ignore' })

const pages = new Map<string, string>()
for (const genre of readdirSync(OUT)) {
  for (const f of readdirSync(join(OUT, genre))) pages.set(f.replace(/\.md$/, ''), readFileSync(join(OUT, genre, f), 'utf8'))
}

test('no game page renders undefined or null as text', () => {
  for (const [id, md] of pages) {
    const body = md.split('\n---\n').slice(1).join('\n---\n')
    assert.doesNotMatch(body, /\[undefined\]|\(undefined\)|\]\(null\)/, id)
  }
})

test('every resource URL in the data appears on its game page, whatever its shape', () => {
  const data = loadData(ROOT)
  let checked = 0
  for (const g of data.games) {
    for (const v of Object.values(g.resources ?? {})) {
      for (const item of Array.isArray(v) ? v : [v]) {
        const url = typeof item === 'string' ? item : item.url
        assert.ok(pages.get(g.id)?.includes(url), `${g.id}: ${url}`)
        checked++
      }
    }
  }
  // Bare-URL resources are most of the data; the check means nothing without them.
  assert.ok(checked > 30, `only ${checked} resource links checked`)
})
