// Tests for the engine check (scripts/check-engines.ts, scripts/engines.ts).
//
// test/fixtures/engines-bad holds a planted failure: an engine record whose
// rating claim has no source URL. If the check stops requiring a source for
// strength claims, the tests that name it fail. Blind spots the check
// knowingly has: it does not fetch the URL, so a dead or irrelevant link
// passes, and it cannot tell whether the claim says what the source says.
//
//   npm test

import { test } from 'node:test'
import assert from 'node:assert/strict'
import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { loadEngines, validateEngine, validateEngines } from '../scripts/engines.ts'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const FIX = join(ROOT, 'test', 'fixtures')
const KNOWN = new Set(['connect-four'])

function runCheck(args: string[]) {
  const r = spawnSync(process.execPath, [join(ROOT, 'scripts', 'check-engines.ts'), ...args], { encoding: 'utf8' })
  return { code: r.status, out: `${r.stdout}${r.stderr}` }
}

test('the planted fixture is rejected for its unsourced strength claim', () => {
  const [{ file, data }] = loadEngines(join(FIX, 'engines-bad'))
  const errors = validateEngine(data, file, KNOWN)
  assert.ok(errors.some((e) => e.includes('strength.url must be an http(s) URL')), errors.join('\n'))
})

test('the planted fixture has exactly one defect: with a source added it validates clean', () => {
  const [{ file, data }] = loadEngines(join(FIX, 'engines-bad'))
  const patched = { ...data, strength: { ...data.strength, url: 'https://example.org/ladder' } }
  assert.deepEqual(validateEngine(patched, file, KNOWN), [])
})

test('the CLI exits 1 on the planted fixture and names it', () => {
  const r = runCheck(['--dir', join(FIX, 'engines-bad')])
  assert.equal(r.code, 1, r.out)
  assert.match(r.out, /unsourced-rating\.yaml: strength\.url must be an http\(s\) URL/)
})

test('the CLI exits 0 on the sourced control fixture', () => {
  const r = runCheck(['--dir', join(FIX, 'engines-good')])
  assert.equal(r.code, 0, r.out)
})

test('a game id with no data record is rejected', () => {
  const [{ file, data }] = loadEngines(join(FIX, 'engines-good'))
  const errors = validateEngine({ ...data, games: ['connect-five'] }, file, KNOWN)
  assert.ok(errors.some((e) => e.includes('"connect-five" names no data/games or data/open record')), errors.join('\n'))
})

test('an engine with no games at all is rejected', () => {
  const [{ file, data }] = loadEngines(join(FIX, 'engines-good'))
  const errors = validateEngine({ ...data, games: [] }, file, KNOWN)
  assert.ok(errors.some((e) => e.includes('games and other_games are both empty')), errors.join('\n'))
})

test('an unknown strength kind is rejected', () => {
  const [{ file, data }] = loadEngines(join(FIX, 'engines-good'))
  const errors = validateEngine({ ...data, strength: { ...data.strength, kind: 'very-strong' } }, file, KNOWN)
  assert.ok(errors.some((e) => e.includes('strength.kind must be one of')), errors.join('\n'))
})

test('duplicate ids across files are rejected', () => {
  const [{ file, data }] = loadEngines(join(FIX, 'engines-good'))
  const errors = validateEngines([{ file, data }, { file, data }], KNOWN)
  assert.ok(errors.some((e) => e.includes('duplicate id')), errors.join('\n'))
})

test('the real engine data passes', () => {
  const r = runCheck([])
  assert.equal(r.code, 0, r.out)
  assert.ok(loadEngines(join(ROOT, 'data', 'engines')).length >= 10)
})
