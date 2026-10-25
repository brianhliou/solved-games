// The site's generated pages (site/scripts/gen-content.ts). Bare-URL resources
// rendered as a list of `undefined` links on six pages until 2026-10-25, when
// the site switched from its own thin generator to the repo's (scripts/pages.ts)
// with links rewritten to site routes.

import { test } from 'node:test'
import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join, dirname, relative } from 'node:path'
import { fileURLToPath } from 'node:url'
import { loadData } from '../scripts/pages.ts'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const DOCS = join(ROOT, 'site', 'src', 'content', 'docs')
execFileSync(process.execPath, [join(ROOT, 'site', 'scripts', 'gen-content.ts')], { stdio: 'ignore' })

/** Every content page, keyed by its route ("/games/cgt/domineering/"). */
const pages = new Map<string, string>()
const walk = (dir: string) => {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f)
    if (statSync(p).isDirectory()) walk(p)
    else if (/\.mdx?$/.test(f)) {
      const route = '/' + relative(DOCS, p).replace(/\.mdx?$/, '').replace(/(^|\/)index$/, '') + '/'
      pages.set(route.replace(/^\/\/$/, '/'), readFileSync(p, 'utf8'))
    }
  }
}
walk(DOCS)
const gamePage = (id: string) => [...pages].find(([r]) => r.startsWith('/games/') && r.endsWith(`/${id}/`))?.[1]

/** Site-absolute link targets that no content page serves. */
function deadLinks(md: string, routes: Set<string>): string[] {
  return [...md.matchAll(/\]\((\/[^)\s#]*)/g)].map((m) => m[1]).filter((t) => !routes.has(t))
}

test('no page renders undefined as a link', () => {
  for (const [route, md] of pages) assert.doesNotMatch(md, /\[undefined\]|\(undefined\)|\]\(null\)/, route)
})

test('every game and open problem has a page', () => {
  const data = loadData(ROOT)
  for (const g of data.games) assert.ok(gamePage(g.id), g.id)
  for (const e of data.open) assert.ok(gamePage(e.related_game ?? e.id), e.id)
})

test('every resource URL in the data appears on its game page, whatever its shape', () => {
  const data = loadData(ROOT)
  let checked = 0
  for (const g of data.games) {
    for (const v of Object.values(g.resources ?? {})) {
      for (const item of Array.isArray(v) ? v : [v]) {
        const url = typeof item === 'string' ? item : item.url
        assert.ok(gamePage(g.id)?.includes(url), `${g.id}: ${url}`)
        checked++
      }
    }
  }
  // Bare-URL resources are most of the data; the check means nothing without them.
  assert.ok(checked > 30, `only ${checked} resource links checked`)
})

test('every site link points at a page, and no repo-relative .md link survives', () => {
  const routes = new Set(pages.keys())
  // Planted: the check must catch a link to a page that does not exist.
  assert.deepEqual(deadLinks('[x](/games/cgt/no-such-game/)', routes), ['/games/cgt/no-such-game/'])
  for (const [route, md] of pages) {
    assert.deepEqual(deadLinks(md, routes), [], route)
    assert.doesNotMatch(md, /\]\((?!https?:)[^)]*\.md\b/, route)
  }
})
