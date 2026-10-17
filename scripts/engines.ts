// Load and validate data/engines/*.yaml: programs that play or solve games,
// each with the evidence for its strength. Shared by scripts/check-engines.ts
// (part of `npm run check`) and scripts/build-readme.ts (which renders the
// engines page and the per-game engine lists). Schema: data/schema.md.

import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { parse } from 'yaml'

export const ENGINE_KINDS = ['engine', 'solver'] as const
// How the strength claim is evidenced, strongest first.
//   perfect-play   plays from a solution or tablebase (the source is the solution)
//   competition    a tournament result (the source is the results page)
//   rating         a published rating list
//   match-result   a head-to-head match reported by someone other than the author
//   third-party    an independent source's description
//   self-reported  the author's own numbers
//   none           no strength claim; the claim says so
export const STRENGTH_KINDS = [
  'perfect-play', 'competition', 'rating', 'match-result', 'third-party', 'self-reported', 'none',
] as const

export interface EngineStrength { kind: (typeof STRENGTH_KINDS)[number]; claim: string; url: string }
export interface Engine {
  id: string
  name: string
  kind: (typeof ENGINE_KINDS)[number]
  games: string[]
  other_games?: string[]
  author: string
  license: string
  strength: EngineStrength
  url: string
  last_checked: string
  notes?: string
}

const DAY = /^\d{4}-\d{2}-\d{2}$/
const isStr = (v: unknown): v is string => typeof v === 'string' && v.trim().length > 0
const isUrl = (v: unknown) => isStr(v) && /^https?:\/\//.test(v)

export function loadEngines(dir: string): { file: string; data: Engine }[] {
  if (!existsSync(dir)) return []
  return readdirSync(dir)
    .filter((f) => f.endsWith('.yaml'))
    .sort()
    .map((f) => {
      const data = parse(readFileSync(join(dir, f), 'utf8')) as Engine
      if (data && typeof data === 'object' && (data.last_checked as unknown) instanceof Date)
        data.last_checked = (data.last_checked as unknown as Date).toISOString().slice(0, 10)
      return { file: f, data }
    })
}

/**
 * Schema errors for one engine record. `knownIds` holds every data/games and
 * data/open id; each entry in `games` must name one of them. A strength claim
 * of any kind needs a source URL, so an unsourced rating cannot slip in.
 */
export function validateEngine(e: any, file: string, knownIds: Set<string>): string[] {
  const errors: string[] = []
  const where = `data/engines/${file}`
  if (!e || typeof e !== 'object') return [`${where}: not a YAML mapping`]
  if (!isStr(e.id) || !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(e.id)) errors.push(`${where}: id must be kebab-case`)
  else if (`${e.id}.yaml` !== file) errors.push(`${where}: id "${e.id}" must match the filename`)
  for (const k of ['name', 'author', 'license'] as const) if (!isStr(e[k])) errors.push(`${where}: ${k} is required`)
  if (!(ENGINE_KINDS as readonly string[]).includes(e.kind))
    errors.push(`${where}: kind must be one of ${ENGINE_KINDS.join(', ')}`)
  if (!isUrl(e.url)) errors.push(`${where}: url must be an http(s) URL`)
  if (!isStr(e.last_checked) || !DAY.test(e.last_checked)) errors.push(`${where}: last_checked must be YYYY-MM-DD`)

  if (!Array.isArray(e.games)) errors.push(`${where}: games must be a list (empty when every game is in other_games)`)
  else
    e.games.forEach((g: unknown, i: number) => {
      if (!isStr(g) || !knownIds.has(g)) errors.push(`${where}: games[${i}] "${String(g)}" names no data/games or data/open record`)
    })
  if (e.other_games !== undefined && (!Array.isArray(e.other_games) || e.other_games.some((g: unknown) => !isStr(g))))
    errors.push(`${where}: other_games must be a list of game names`)
  const count = (Array.isArray(e.games) ? e.games.length : 0) + (Array.isArray(e.other_games) ? e.other_games.length : 0)
  if (count === 0) errors.push(`${where}: games and other_games are both empty; an engine plays at least one game`)

  const s = e.strength
  if (!s || typeof s !== 'object') errors.push(`${where}: strength is required ({kind, claim, url})`)
  else {
    if (!(STRENGTH_KINDS as readonly string[]).includes(s.kind))
      errors.push(`${where}: strength.kind must be one of ${STRENGTH_KINDS.join(', ')}`)
    if (!isStr(s.claim)) errors.push(`${where}: strength.claim is required`)
    if (!isUrl(s.url)) errors.push(`${where}: strength.url must be an http(s) URL; a strength claim needs a source`)
  }
  if (e.notes !== undefined && !isStr(e.notes)) errors.push(`${where}: notes, when present, is text`)
  return errors
}

export function validateEngines(entries: { file: string; data: any }[], knownIds: Set<string>): string[] {
  const errors = entries.flatMap(({ file, data }) => validateEngine(data, file, knownIds))
  const seen = new Set<string>()
  for (const { data } of entries) {
    if (data?.id && seen.has(data.id)) errors.push(`data/engines: duplicate id "${data.id}"`)
    if (data?.id) seen.add(data.id)
  }
  return errors
}
