// Gate for the open side of the registry. Fails (exit 1) when:
//   - an open entry in data/open/*.yaml breaks the schema (data/schema.md), or
//   - an open entry's `last_checked` is more than 90 days before today, or
//   - data/progress.yaml or a game's `evidence` / `history` breaks the schema.
//
//   npm run check                          # runs this, then the README sync check
//   node scripts/check-open.ts --today 2026-10-17
//   node scripts/check-open.ts --dir test/fixtures/open-stale --today 2026-10-17
//
// `--dir` points the check at another open-entries folder (the test fixtures);
// with `--dir` the progress log and game extras are not checked.

import { readFileSync, readdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join, resolve } from 'node:path'
import { parse } from 'yaml'
import {
  MAX_AGE_DAYS, findStale, loadOpenEntries, loadProgress, resolveToday,
  validateGameExtras, validateOpenEntry, validateProgress,
} from './open-entries.ts'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const GAMES_DIR = join(ROOT, 'data', 'games')

const argv = process.argv
const dirArg = argv.indexOf('--dir')
const openDir = dirArg >= 0 ? resolve(argv[dirArg + 1]) : join(ROOT, 'data', 'open')
const fullRun = dirArg < 0
const today = resolveToday(argv)

const gameFiles = readdirSync(GAMES_DIR).filter((f) => f.endsWith('.yaml'))
const games = gameFiles.map((f) => ({ file: f, data: parse(readFileSync(join(GAMES_DIR, f), 'utf8')) }))
const gameIds = new Set(games.map((g) => g.data.id as string))

const open = loadOpenEntries(openDir)
const errors: string[] = []
for (const { file, data } of open) errors.push(...validateOpenEntry(data, file, gameIds))

if (fullRun) {
  for (const { file, data } of games) errors.push(...validateGameExtras(data, file))
  const known = new Set([...gameIds, ...open.map((o) => o.data.id)])
  errors.push(...validateProgress(loadProgress(join(ROOT, 'data', 'progress.yaml')), known))
}

// Staleness only on entries whose date parses; schema errors are reported above.
const dated = open.map((o) => o.data).filter((e) => typeof e?.last_checked === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(e.last_checked))
for (const s of findStale(dated, today))
  errors.push(
    `${s.id}: stale, last_checked ${s.last_checked} is ${s.age} days before ${today} (limit ${MAX_AGE_DAYS}). ` +
      `Re-check the entry against its sources and update last_checked.`,
  )

if (errors.length) {
  console.error(`check-open: ${errors.length} problem(s)\n${errors.map((e) => `  - ${e}`).join('\n')}`)
  process.exit(1)
}
console.log(`check-open: ${open.length} open entries valid, all checked within ${MAX_AGE_DAYS} days of ${today}.`)
