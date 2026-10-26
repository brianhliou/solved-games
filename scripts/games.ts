// Load and validate the solved side of the registry: data/games/*.yaml (one
// file per solved game). The optional `evidence` / `history` fields are
// checked by scripts/open-entries.ts (validateGameExtras); this file checks
// the core record. Schema: data/schema.md.

import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { parse } from 'yaml'
import { GENRES } from './open-entries.ts'

export const RESULTS = ['first-player-win', 'second-player-win', 'draw', 'no-forced-win'] as const
export const GAME_STRENGTHS = ['ultra-weak', 'weak', 'strong'] as const

const isStr = (v: unknown): v is string => typeof v === 'string' && v.trim().length > 0
const isUrl = (v: unknown) => isStr(v) && /^https?:\/\//.test(v)

export function loadGames(dir: string): { file: string; data: any }[] {
  if (!existsSync(dir)) return []
  return readdirSync(dir)
    .filter((f) => f.endsWith('.yaml'))
    .sort()
    .map((f) => ({ file: f, data: parse(readFileSync(join(dir, f), 'utf8')) }))
}

/** Schema errors for one game record. */
export function validateGame(g: any, file: string): string[] {
  const errors: string[] = []
  const where = `data/games/${file}`
  if (!g || typeof g !== 'object') return [`${where}: not a YAML mapping`]
  if (!isStr(g.id) || !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(g.id)) errors.push(`${where}: id must be kebab-case`)
  else if (`${g.id}.yaml` !== file) errors.push(`${where}: id "${g.id}" must match the filename`)
  for (const k of ['name', 'family', 'solved_by'] as const) if (!isStr(g[k])) errors.push(`${where}: ${k} is required`)
  if (!(GENRES as readonly string[]).includes(g.genre)) errors.push(`${where}: genre must be one of ${GENRES.join(', ')}`)
  if (!(RESULTS as readonly string[]).includes(g.result)) errors.push(`${where}: result must be one of ${RESULTS.join(', ')}`)
  if (!(GAME_STRENGTHS as readonly string[]).includes(g.strength))
    errors.push(`${where}: strength must be one of ${GAME_STRENGTHS.join(', ')}`)
  if (!Array.isArray(g.method) || g.method.length === 0 || g.method.some((m: unknown) => !isStr(m)))
    errors.push(`${where}: method must be a non-empty list`)
  if (!('year' in g) || (g.year !== null && !Number.isInteger(g.year))) errors.push(`${where}: year must be an integer (or null)`)
  if (typeof g.verified !== 'boolean') errors.push(`${where}: verified must be true or false`)
  if (g.players !== undefined && (!Number.isInteger(g.players) || g.players < 2))
    errors.push(`${where}: players, when present, must be an integer of at least 2`)
  if (g.result === 'no-forced-win' && !(Number.isInteger(g.players) && g.players >= 3))
    errors.push(`${where}: result no-forced-win needs players of at least 3 (a two-player game always has a forced result)`)
  if (!Array.isArray(g.sources) || g.sources.length === 0) errors.push(`${where}: sources must be a non-empty list`)
  else
    g.sources.forEach((s: any, i: number) => {
      if (!s || !isStr(s.title)) errors.push(`${where}: sources[${i}].title is required`)
      if (!s || !isUrl(s.url)) errors.push(`${where}: sources[${i}].url must be an http(s) URL`)
    })
  return errors
}

/** Errors across a set of records: each record's own, plus duplicate ids. */
export function validateGames(games: { file: string; data: any }[]): string[] {
  const errors = games.flatMap(({ file, data }) => validateGame(data, file))
  const seen = new Map<string, string>()
  for (const { file, data } of games) {
    const id = data?.id
    if (!isStr(id)) continue
    if (seen.has(id)) errors.push(`data/games/${file}: duplicate id "${id}" (also in ${seen.get(id)})`)
    else seen.set(id, file)
  }
  return errors
}
