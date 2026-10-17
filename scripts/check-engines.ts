// Gate for data/engines/*.yaml. Fails (exit 1) when an engine record breaks
// the schema (data/schema.md): a missing field, a game id that names no
// data/games or data/open record, or a strength claim without a source URL.
//
//   npm run check                                   # runs this with the other checks
//   node scripts/check-engines.ts --dir test/fixtures/engines-bad
//
// `--dir` points the check at another engines folder (the test fixtures). Game
// ids still resolve against the real data/games and data/open.

import { fileURLToPath } from 'node:url'
import { dirname, join, resolve } from 'node:path'
import { readdirSync, readFileSync } from 'node:fs'
import { parse } from 'yaml'
import { loadEngines, validateEngines } from './engines.ts'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const argv = process.argv
const dirArg = argv.indexOf('--dir')
const enginesDir = dirArg >= 0 ? resolve(argv[dirArg + 1]) : join(ROOT, 'data', 'engines')

const ids = (sub: string) =>
  readdirSync(join(ROOT, 'data', sub))
    .filter((f) => f.endsWith('.yaml'))
    .map((f) => parse(readFileSync(join(ROOT, 'data', sub, f), 'utf8'))?.id as string)
const knownIds = new Set([...ids('games'), ...ids('open')])

const engines = loadEngines(enginesDir)
const errors = validateEngines(engines, knownIds)
if (engines.length === 0) errors.push(`no engine records found in ${enginesDir}`)

if (errors.length) {
  console.error(`check-engines: ${errors.length} problem(s)\n${errors.map((e) => `  - ${e}`).join('\n')}`)
  process.exit(1)
}
console.log(`check-engines: ${engines.length} engine records valid.`)
