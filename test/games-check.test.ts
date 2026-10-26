// Tests for the game-record check (scripts/check-games.ts, scripts/games.ts).
//
// test/fixtures/games-bad holds a planted failure: a `no-forced-win` record
// with no `players`, which makes it a two-player game, and a two-player game
// always has a forced result. If the check stops tying `no-forced-win` to
// three or more players, the tests that name it fail. Blind spots the check
// knowingly has: it cannot tell whether `result_detail` describes the
// coalitions correctly, whether `players` matches the rules in `board`, or
// whether a source says what the record says; it does not fetch URLs.
//
//   npm test

import { test } from 'node:test'
import assert from 'node:assert/strict'
import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { loadGames, validateGame, validateGames } from '../scripts/games.ts'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const FIX = join(ROOT, 'test', 'fixtures')
const NEEDS_PLAYERS = 'result no-forced-win needs players of at least 3'

function runCheck(args: string[]) {
  const r = spawnSync(process.execPath, [join(ROOT, 'scripts', 'check-games.ts'), ...args], { encoding: 'utf8' })
  return { code: r.status, out: `${r.stdout}${r.stderr}` }
}

test('the planted fixture is rejected: no-forced-win without players', () => {
  const [{ file, data }] = loadGames(join(FIX, 'games-bad'))
  const errors = validateGame(data, file)
  assert.ok(errors.some((e) => e.includes(NEEDS_PLAYERS)), errors.join('\n'))
})

test('the planted fixture has exactly one defect: with players: 3 it validates clean', () => {
  const [{ file, data }] = loadGames(join(FIX, 'games-bad'))
  assert.deepEqual(validateGame({ ...data, players: 3 }, file), [])
})

test('no-forced-win with players: 2 is rejected too', () => {
  const [{ file, data }] = loadGames(join(FIX, 'games-good'))
  const errors = validateGame({ ...data, players: 2 }, file)
  assert.ok(errors.some((e) => e.includes(NEEDS_PLAYERS)), errors.join('\n'))
})

test('the CLI exits 1 on the planted fixture and names it', () => {
  const r = runCheck(['--dir', join(FIX, 'games-bad')])
  assert.equal(r.code, 1, r.out)
  assert.match(r.out, /three-player-no-players\.yaml: result no-forced-win needs players of at least 3/)
})

test('the CLI exits 0 on the control fixture', () => {
  const r = runCheck(['--dir', join(FIX, 'games-good')])
  assert.equal(r.code, 0, r.out)
})

test('an unknown result is rejected', () => {
  const [{ file, data }] = loadGames(join(FIX, 'games-good'))
  const errors = validateGame({ ...data, result: 'kingmaker' }, file)
  assert.ok(errors.some((e) => e.includes('result must be one of')), errors.join('\n'))
})

test('players must be an integer of at least 2', () => {
  const [{ file, data }] = loadGames(join(FIX, 'games-good'))
  for (const players of [1, 2.5, '3']) {
    const errors = validateGame({ ...data, result: 'draw', players }, file)
    assert.ok(errors.some((e) => e.includes('players, when present, must be an integer')), `${players}: ${errors.join('\n')}`)
  }
})

test('duplicate ids across files are rejected', () => {
  const [{ file, data }] = loadGames(join(FIX, 'games-good'))
  const errors = validateGames([{ file, data }, { file, data }])
  assert.ok(errors.some((e) => e.includes('duplicate id')), errors.join('\n'))
})

test('the real game data passes', () => {
  const r = runCheck([])
  assert.equal(r.code, 0, r.out)
  assert.ok(loadGames(join(ROOT, 'data', 'games')).length >= 45)
})
