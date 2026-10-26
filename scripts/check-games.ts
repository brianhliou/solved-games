// Gate for data/games/*.yaml. Fails (exit 1) when a game record breaks the
// schema (data/schema.md): a missing required field, a result, strength or
// genre outside its list, a bad `players`, or a `no-forced-win` result on a
// game without `players` of at least 3.
//
//   npm run check                                 # runs this with the other checks
//   node scripts/check-games.ts --dir test/fixtures/games-bad
//
// `--dir` points the check at another games folder (the test fixtures).

import { fileURLToPath } from 'node:url'
import { dirname, join, resolve } from 'node:path'
import { loadGames, validateGames } from './games.ts'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const argv = process.argv
const dirArg = argv.indexOf('--dir')
const gamesDir = dirArg >= 0 ? resolve(argv[dirArg + 1]) : join(ROOT, 'data', 'games')

const games = loadGames(gamesDir)
const errors = validateGames(games)
if (games.length === 0) errors.push(`no game records found in ${gamesDir}`)

if (errors.length) {
  console.error(`check-games: ${errors.length} problem(s)\n${errors.map((e) => `  - ${e}`).join('\n')}`)
  process.exit(1)
}
console.log(`check-games: ${games.length} game records valid.`)
