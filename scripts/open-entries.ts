// Load and validate the open side of the registry: data/open/*.yaml (one file
// per open problem), data/progress.yaml (the dated progress log), and the
// optional `evidence` / `history` fields on data/games/*.yaml.
//
// Shared by scripts/check-open.ts (the `npm run check` gate) and
// scripts/build-readme.ts (which renders the Open problems and Recent progress
// tables). Schema: data/schema.md.

import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { parse } from 'yaml'

export const MAX_AGE_DAYS = 90

export const OPEN_STATUSES = ['open', 'partially-solved', 'solved-smaller-board'] as const
export const BARRIERS = ['compute', 'storage', 'memory', 'branching', 'algorithmic'] as const
export const EVIDENCE = ['refereed', 'preprint', 'thesis', 'self-archived'] as const
export const STRENGTHS = ['ultra-weak', 'weak', 'strong'] as const
export const GENRES = [
  'alignment', 'morris', 'connection', 'mancala', 'race', 'capture', 'chess',
  'hunt', 'cgt', 'shogi', 'go', 'imperfect-info', 'chance',
] as const

export type Evidence = (typeof EVIDENCE)[number]

export interface Source { title: string; url: string; date?: string; primary?: boolean }
export interface HistoryRow {
  date: string
  size_or_opening: string
  result: string
  strength?: (typeof STRENGTHS)[number]
  credit: string
  url: string
}
export interface AbsenceSearch { date: string; looked_for: string; found: string }
export interface OpenEntry {
  id: string
  name: string
  genre: string
  status: (typeof OPEN_STATUSES)[number]
  related_game?: string
  solved_up_to: string
  next_target: string
  barrier: string[]
  barrier_detail: string
  cite?: string // short label for the README table's latest-result link
  evidence: Evidence
  unverified?: string
  sources: Source[]
  absence_search?: AbsenceSearch[]
  history: HistoryRow[]
  last_checked: string
  notes?: string
}
export interface ProgressLine {
  date: string
  id: string
  what: string
  credit: string
  url: string
  labels?: string[]
}

// Dates: YYYY, YYYY-MM or YYYY-MM-DD for publication and history dates;
// `last_checked` must be a full day.
const DAY = /^\d{4}-\d{2}-\d{2}$/
const PARTIAL_DATE = /^\d{4}(-\d{2}(-\d{2})?)?$/

// The yaml package parses an unquoted 2026-10-17 as a string under the core
// schema, but normalise defensively in case a Date slips through.
function asDateString(v: unknown): unknown {
  return v instanceof Date ? v.toISOString().slice(0, 10) : v
}

export function parseDay(s: string): number {
  if (!DAY.test(s)) throw new Error(`not a YYYY-MM-DD date: ${s}`)
  const t = Date.parse(`${s}T00:00:00Z`)
  if (Number.isNaN(t)) throw new Error(`invalid date: ${s}`)
  return t
}

export function daysBetween(from: string, to: string): number {
  return Math.round((parseDay(to) - parseDay(from)) / 86_400_000)
}

/** Today as YYYY-MM-DD (UTC), overridable for tests and reproducible builds. */
export function resolveToday(argv: string[] = process.argv): string {
  const i = argv.indexOf('--today')
  const v = i >= 0 ? argv[i + 1] : process.env.SOLVED_GAMES_TODAY
  if (v) {
    parseDay(v)
    return v
  }
  return new Date().toISOString().slice(0, 10)
}

/** Age in days of an entry's last check, and whether it is past the limit. */
export function staleness(e: Pick<OpenEntry, 'last_checked'>, today: string, maxAgeDays = MAX_AGE_DAYS) {
  const age = daysBetween(e.last_checked, today)
  return { age, stale: age > maxAgeDays }
}

/** Entries whose `last_checked` is more than `maxAgeDays` before `today`. */
export function findStale(entries: OpenEntry[], today: string, maxAgeDays = MAX_AGE_DAYS) {
  return entries
    .map((e) => ({ id: e.id, last_checked: e.last_checked, ...staleness(e, today, maxAgeDays) }))
    .filter((s) => s.stale)
}

function loadYamlDir<T>(dir: string): { file: string; data: T }[] {
  if (!existsSync(dir)) return []
  return readdirSync(dir)
    .filter((f) => f.endsWith('.yaml'))
    .sort()
    .map((f) => ({ file: f, data: parse(readFileSync(join(dir, f), 'utf8')) as T }))
}

export function loadOpenEntries(dir: string): { file: string; data: OpenEntry }[] {
  return loadYamlDir<OpenEntry>(dir).map(({ file, data }) => {
    if (data && typeof data === 'object') data.last_checked = asDateString(data.last_checked) as string
    return { file, data }
  })
}

export function loadProgress(file: string): ProgressLine[] {
  if (!existsSync(file)) return []
  const raw = parse(readFileSync(file, 'utf8'))
  return (Array.isArray(raw) ? raw : []).map((p) => ({ ...p, date: asDateString(p?.date) }))
}

// ---- validation -----------------------------------------------------------

const isStr = (v: unknown): v is string => typeof v === 'string' && v.trim().length > 0
const isUrl = (v: unknown) => isStr(v) && /^https?:\/\//.test(v)

function checkSources(where: string, v: unknown, errors: string[]) {
  if (!Array.isArray(v) || v.length === 0) {
    errors.push(`${where}: sources must be a non-empty list`)
    return
  }
  v.forEach((s, i) => {
    if (!s || !isStr(s.title)) errors.push(`${where}: sources[${i}].title is required`)
    if (!s || !isUrl(s.url)) errors.push(`${where}: sources[${i}].url must be an http(s) URL`)
    if (s?.date !== undefined && !PARTIAL_DATE.test(String(asDateString(s.date))))
      errors.push(`${where}: sources[${i}].date must be YYYY, YYYY-MM or YYYY-MM-DD`)
  })
}

export function checkHistory(where: string, v: unknown, errors: string[], required: boolean) {
  if (v === undefined && !required) return
  if (!Array.isArray(v) || v.length === 0) {
    errors.push(`${where}: history must be a non-empty list`)
    return
  }
  v.forEach((h, i) => {
    const at = `${where}: history[${i}]`
    if (!h || !PARTIAL_DATE.test(String(asDateString(h.date)))) errors.push(`${at}.date must be YYYY, YYYY-MM or YYYY-MM-DD`)
    for (const k of ['size_or_opening', 'result', 'credit'] as const)
      if (!h || !isStr(h[k])) errors.push(`${at}.${k} is required`)
    if (!h || !isUrl(h.url)) errors.push(`${at}.url must be an http(s) URL`)
    if (h?.strength !== undefined && !(STRENGTHS as readonly string[]).includes(h.strength))
      errors.push(`${at}.strength must be one of ${STRENGTHS.join(', ')}`)
  })
}

/** Schema errors for one open entry (staleness is checked separately). */
export function validateOpenEntry(e: any, file: string, gameIds: Set<string>): string[] {
  const errors: string[] = []
  const where = `data/open/${file}`
  if (!e || typeof e !== 'object') return [`${where}: not a YAML mapping`]
  if (!isStr(e.id) || !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(e.id)) errors.push(`${where}: id must be kebab-case`)
  else if (`${e.id}.yaml` !== file) errors.push(`${where}: id "${e.id}" must match the filename`)
  for (const k of ['name', 'solved_up_to', 'next_target', 'barrier_detail'] as const)
    if (!isStr(e[k])) errors.push(`${where}: ${k} is required`)
  if (!(GENRES as readonly string[]).includes(e.genre)) errors.push(`${where}: genre must be one of ${GENRES.join(', ')}`)
  if (!(OPEN_STATUSES as readonly string[]).includes(e.status))
    errors.push(`${where}: status must be one of ${OPEN_STATUSES.join(', ')}`)
  if (!Array.isArray(e.barrier) || e.barrier.length === 0 || e.barrier.some((b: string) => !(BARRIERS as readonly string[]).includes(b)))
    errors.push(`${where}: barrier must be a non-empty list of ${BARRIERS.join(', ')}`)
  if (!(EVIDENCE as readonly string[]).includes(e.evidence)) errors.push(`${where}: evidence must be one of ${EVIDENCE.join(', ')}`)
  if (e.related_game !== undefined && !gameIds.has(e.related_game))
    errors.push(`${where}: related_game "${e.related_game}" has no data/games record`)
  if (e.cite !== undefined && !isStr(e.cite)) errors.push(`${where}: cite, when present, is a short label`)
  if (e.unverified !== undefined && !isStr(e.unverified)) errors.push(`${where}: unverified, when present, says what is unverified`)
  if (!isStr(e.last_checked) || !DAY.test(e.last_checked)) errors.push(`${where}: last_checked must be YYYY-MM-DD`)
  checkSources(where, e.sources, errors)
  checkHistory(where, e.history, errors, true)
  if (e.absence_search !== undefined) {
    if (!Array.isArray(e.absence_search)) errors.push(`${where}: absence_search must be a list`)
    else
      e.absence_search.forEach((a: any, i: number) => {
        if (!a || !DAY.test(String(asDateString(a.date)))) errors.push(`${where}: absence_search[${i}].date must be YYYY-MM-DD`)
        if (!a || !isStr(a.looked_for) || !isStr(a.found)) errors.push(`${where}: absence_search[${i}] needs looked_for and found`)
      })
  }
  return errors
}

/** Schema errors for the progress log; every id must name a game or open record. */
export function validateProgress(lines: any[], knownIds: Set<string>): string[] {
  const errors: string[] = []
  lines.forEach((p, i) => {
    const at = `data/progress.yaml[${i}]`
    if (!p || !PARTIAL_DATE.test(String(p.date))) errors.push(`${at}.date must be YYYY, YYYY-MM or YYYY-MM-DD`)
    if (!p || !knownIds.has(p.id)) errors.push(`${at}.id "${p?.id}" names no data/games or data/open record`)
    for (const k of ['what', 'credit'] as const) if (!p || !isStr(p[k])) errors.push(`${at}.${k} is required`)
    if (!p || !isUrl(p.url)) errors.push(`${at}.url must be an http(s) URL`)
    if (p?.labels !== undefined && (!Array.isArray(p.labels) || p.labels.some((l: unknown) => !isStr(l))))
      errors.push(`${at}.labels must be a list of strings`)
  })
  return errors
}

/** Errors for the optional open-side fields on a solved-game record. */
export function validateGameExtras(g: any, file: string): string[] {
  const errors: string[] = []
  const where = `data/games/${file}`
  if (g?.evidence !== undefined && !(EVIDENCE as readonly string[]).includes(g.evidence))
    errors.push(`${where}: evidence must be one of ${EVIDENCE.join(', ')}`)
  checkHistory(where, g?.history, errors, false)
  return errors
}
