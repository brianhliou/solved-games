// Tests for the open-entry check (scripts/check-open.ts, scripts/open-entries.ts).
//
// The stale fixture is a planted failure: an otherwise valid entry whose
// last_checked is 120 days old. If the staleness check is disabled or loosened,
// the tests that name it fail. Blind spots the check knowingly has: it trusts
// `last_checked` as written (a re-check that only bumps the date passes), and
// it does not fetch sources, so a dead link is not caught.
//
//   npm test

import { test } from 'node:test'
import assert from 'node:assert/strict'
import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { parse } from 'yaml'
import { readFileSync } from 'node:fs'
import {
  MAX_AGE_DAYS, daysBetween, findStale, loadOpenEntries, staleness, validateOpenEntry,
} from '../scripts/open-entries.ts'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const FIX = join(ROOT, 'test', 'fixtures')
const TODAY = '2026-10-17'

function runCheck(args: string[]) {
  const r = spawnSync(process.execPath, [join(ROOT, 'scripts', 'check-open.ts'), ...args], {
    encoding: 'utf8',
    env: { ...process.env, SOLVED_GAMES_TODAY: '' },
  })
  return { code: r.status, out: `${r.stdout}${r.stderr}` }
}

test('the planted stale fixture is 120 days old and findStale rejects it', () => {
  const entries = loadOpenEntries(join(FIX, 'open-stale')).map((o) => o.data)
  assert.equal(entries.length, 1)
  assert.equal(daysBetween(entries[0].last_checked, TODAY), 120)
  const stale = findStale(entries, TODAY)
  assert.deepEqual(stale.map((s) => s.id), ['stale-fixture'])
  assert.equal(stale[0].age, 120)
})

test('the planted stale fixture is otherwise schema-valid, so only staleness can reject it', () => {
  const [{ file, data }] = loadOpenEntries(join(FIX, 'open-stale'))
  assert.deepEqual(validateOpenEntry(data, file, new Set()), [])
})

test('the CLI exits 1 on the stale fixture and names it', () => {
  const r = runCheck(['--dir', join(FIX, 'open-stale'), '--today', TODAY])
  assert.equal(r.code, 1, r.out)
  assert.match(r.out, /stale-fixture: stale, last_checked 2026-06-19 is 120 days before 2026-10-17/)
})

test('the CLI exits 0 on the fresh control fixture', () => {
  const r = runCheck(['--dir', join(FIX, 'open-fresh'), '--today', TODAY])
  assert.equal(r.code, 0, r.out)
})

test('the limit is 90 days: day 90 passes, day 91 fails', () => {
  assert.equal(MAX_AGE_DAYS, 90)
  assert.equal(staleness({ last_checked: '2026-07-19' }, TODAY).age, 90)
  assert.equal(staleness({ last_checked: '2026-07-19' }, TODAY).stale, false)
  assert.equal(staleness({ last_checked: '2026-07-18' }, TODAY).age, 91)
  assert.equal(staleness({ last_checked: '2026-07-18' }, TODAY).stale, true)
})

test('an entry without a next target is rejected', () => {
  const [{ file, data }] = loadOpenEntries(join(FIX, 'open-fresh'))
  const broken = { ...data, next_target: undefined }
  const errors = validateOpenEntry(broken, file, new Set())
  assert.ok(errors.some((e) => e.includes('next_target is required')), errors.join('\n'))
})

test('an unknown evidence class and a bad last_checked are rejected', () => {
  const [{ file, data }] = loadOpenEntries(join(FIX, 'open-fresh'))
  const errors = validateOpenEntry({ ...data, evidence: 'blog', last_checked: '10/17/2026' }, file, new Set())
  assert.ok(errors.some((e) => e.includes('evidence must be one of')))
  assert.ok(errors.some((e) => e.includes('last_checked must be YYYY-MM-DD')))
})

test('the real data passes on the day it was last checked', () => {
  const open = loadOpenEntries(join(ROOT, 'data', 'open')).map((o) => o.data)
  assert.ok(open.length >= 5)
  const latest = open.map((e) => e.last_checked).sort().at(-1)!
  const r = runCheck(['--today', latest])
  assert.equal(r.code, 0, r.out)
})

test('the real data fails once any entry is 91 days unchecked', () => {
  const open = loadOpenEntries(join(ROOT, 'data', 'open')).map((o) => o.data)
  const oldest = open.map((e) => e.last_checked).sort()[0]
  const later = new Date(Date.parse(`${oldest}T00:00:00Z`) + 91 * 86_400_000).toISOString().slice(0, 10)
  const r = runCheck(['--today', later])
  assert.equal(r.code, 1, r.out)
  assert.match(r.out, /stale/)
})

test('self-archived results carry the asterisk in the README', () => {
  const readme = readFileSync(join(ROOT, 'README.md'), 'utf8')
  for (const id of ['y', 'six-mens-morris']) {
    const g = parse(readFileSync(join(ROOT, 'data', 'games', `${id}.yaml`), 'utf8'))
    assert.equal(g.evidence, 'self-archived', id)
  }
  assert.match(readme, /\\\* Self-archived:/)
})
