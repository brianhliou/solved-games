// Render the repo's generated Markdown from the structured data:
//
//   README.md regions   family index (counts + links) and recent progress
//   games/<id>.md       one page per game record, plus one per open entry with
//                       no solved smaller case (an open entry with a
//                       `related_game` renders on that game's page)
//   families/<genre>.md one page per genre: solved table, open problems, engines
//   pages/open-problems.md, pages/engines.md
//
// Pure functions over the loaded data; scripts/build-readme.ts writes the
// files and checks they are in sync. Hand-written pages live in guides/.

import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import { parse } from 'yaml'
import {
  type HistoryRow, type OpenEntry, type ProgressLine, MAX_AGE_DAYS, loadOpenEntries, loadProgress, staleness,
} from './open-entries.ts'
import { type Engine, loadEngines } from './engines.ts'

export interface Source { title: string; url: string; primary?: boolean; date?: string }
type Links = string | Source | (string | Source)[]
export interface Game {
  id: string
  name: string
  also_known_as?: string[]
  family: string
  genre: string
  board?: string
  result: 'first-player-win' | 'second-player-win' | 'draw'
  result_detail?: string
  strength: 'ultra-weak' | 'weak' | 'strong'
  approximate?: boolean
  epsilon?: string
  method: string[]
  distance_to_result?: string
  complexity?: { state_space?: number | null; game_tree?: number | null }
  year: number | null
  solved_by: string
  cite?: string
  verified: boolean
  evidence?: 'refereed' | 'preprint' | 'thesis' | 'self-archived'
  history?: HistoryRow[]
  sources: Source[]
  resources?: Partial<Record<'tablebase' | 'code' | 'explorer' | 'writeup', Links>>
  notes?: string
}

export interface Data {
  games: Game[]
  open: OpenEntry[]
  engines: Engine[]
  progress: ProgressLine[]
}

export function loadData(root: string): Data {
  const gamesDir = join(root, 'data', 'games')
  const games = readdirSync(gamesDir)
    .filter((f) => f.endsWith('.yaml'))
    .sort()
    .map((f) => parse(readFileSync(join(gamesDir, f), 'utf8')) as Game)
  return {
    games,
    open: loadOpenEntries(join(root, 'data', 'open')).map((o) => o.data),
    engines: loadEngines(join(root, 'data', 'engines')).map((e) => e.data),
    progress: loadProgress(join(root, 'data', 'progress.yaml')),
  }
}

// ---- labels ---------------------------------------------------------------

// Display order for the genres (familiar → frontier). Keep in sync with
// data/schema.md.
export const GENRE_ORDER: { slug: string; title: string }[] = [
  { slug: 'alignment', title: 'Alignment & *m,n,k* games' },
  { slug: 'morris', title: 'Morris / mill family' },
  { slug: 'connection', title: 'Connection games' },
  { slug: 'mancala', title: 'Mancala' },
  { slug: 'capture', title: 'Capture & board control' },
  { slug: 'chess', title: 'Chess & chess variants' },
  { slug: 'hunt', title: 'Hunt & unequal forces' },
  { slug: 'cgt', title: 'Combinatorial game theory' },
  { slug: 'shogi', title: 'Shogi variants' },
  { slug: 'go', title: 'Go' },
  { slug: 'imperfect-info', title: 'Imperfect information' },
]
const genreTitle = (slug: string) => GENRE_ORDER.find((g) => g.slug === slug)?.title ?? 'Other'

// Prose that belongs to a family rather than one record.
const FAMILY_NOTES: Record<string, string> = {
  connection:
    'Hex is also *ultra-weakly* solved for every board size: the first player wins by strategy stealing ' +
    '([Nash, 1952](https://en.wikipedia.org/wiki/Hex_(board_game))), with no explicit strategy. On 10×10 one ' +
    'opening (f5) was solved in 2013; the rest are tracked as an open problem below.',
}

const RESULT_PHRASE: Record<Game['result'], string> = {
  'first-player-win': 'First player wins',
  'second-player-win': 'Second player wins',
  draw: 'Draw',
}

const METHOD_LABEL: Record<string, string> = {
  'retrograde-analysis': 'Retrograde analysis',
  'alpha-beta+db': 'Alpha-beta + DB',
  'brute-force-enumeration': 'Brute-force enumeration',
  'mathematical-proof': 'Mathematical proof',
  'proof-number-search': 'Proof-number search',
  'depth-first-pns': 'Depth-first PNS',
  'conspiracy-number-search': 'Conspiracy-number search',
  'threat-space-search': 'Threat-space search',
  'knowledge-based': 'Knowledge-based',
  'strategy-stealing/pairing-strategy': 'Strategy-stealing',
  'monte-carlo-cfr': 'Monte-Carlo CFR',
}
const labelMethod = (m: string) =>
  METHOD_LABEL[m] ?? m.replace(/[-+/]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
const primaryMethod = (g: Game) => (g.method?.[0] ? labelMethod(g.method[0]) : '—')

const STATUS_LABEL: Record<OpenEntry['status'], string> = {
  open: 'Open',
  'partially-solved': 'Partially solved',
  'solved-smaller-board': 'Smaller board solved',
}

const STRENGTH_KIND_LABEL: Record<Engine['strength']['kind'], string> = {
  'perfect-play': 'perfect play',
  competition: 'competition result',
  rating: 'rating',
  'match-result': 'match result',
  'third-party': 'third-party assessment',
  'self-reported': 'self-reported',
  none: 'no claim',
}

export const ASTERISK_NOTE =
  '\\* Self-archived: the result is available only from its authors (a repository, a post, a deposit), ' +
  'not yet refereed, formally verified or reproduced by someone else. The mark comes off when one of those happens. ' +
  "It applies to this repo's own results too."

const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)
export const cell = (s: string) => String(s).replace(/\s+/g, ' ').trim().replace(/\|/g, '\\|')
const num = (n: number | null | undefined) => (typeof n === 'number' ? n.toLocaleString('en-US') : '—')
const mark = (evidence?: string) => (evidence === 'self-archived' ? '\\*' : '')

const GENERATED = (from: string) =>
  `<!-- GENERATED from ${from} by \`npm run build\` (scripts/build-readme.ts). Edit the data, not this page. -->`

// ---- citations ------------------------------------------------------------

// Derive a short citation label from the free-text `solved_by`:
// "Tetsurō Tanaka (田中 哲朗), University of Tokyo" -> "Tanaka 2009";
// "Mehdi Mhalla and Frédéric Prost" -> "Mhalla et al. 2013" (lead author).
const PARTICLES = new Set(['van', 'von', 'der', 'den', 'de', 'da', 'di', 'du', 'la', 'le', 'ten'])
function surnameOf(name: string): string {
  const tokens = name.trim().split(/\s+/)
  let i = tokens.length - 1
  while (i > 0 && PARTICLES.has(tokens[i - 1].toLowerCase())) i--
  return tokens.slice(i).join(' ').replace(/\.$/, '')
}
const authorsOf = (g: Game) => g.solved_by.split(/[(;]/)[0].trim().replace(/[.,]$/, '')
export function citeLabel(g: Game): string {
  if (g.cite) return g.cite
  const authors = g.solved_by.split(/[(;]/)[0]
  const head = authors.split(/,|&| and /)[0].trim()
  if (/folklore|classical hand analysis/i.test(head)) return 'folklore'
  const multi = /&| and |,|et al/i.test(authors)
  return `${surnameOf(head)}${multi ? ' et al.' : ''}${g.year ? ` ${g.year}` : ''}`
}
const primarySource = (g: { sources: Source[] }) => g.sources.find((s) => s.primary) ?? g.sources[0]
/** "[Tanaka 2009](url)", with the asterisk on a self-archived result. */
export function cite(g: Game): string {
  const url = primarySource(g)?.url
  const label = citeLabel(g)
  return (url ? `[${label}](${url})` : label) + mark(g.evidence)
}

function latestSource(e: OpenEntry): string {
  const s = e.sources.find((x) => x.primary) ?? e.sources[0]
  const date = s.date ? ` (${s.date})` : ''
  const label = cell(e.cite ?? s.title.split(/[,"“]/)[0]).slice(0, 60).trim()
  return `[${label}](${s.url})${date}${mark(e.evidence)}`
}

// ---- paths ----------------------------------------------------------------
// Every link is written relative to the page it appears on. `from` is the
// page's directory depth: 0 for README.md, 1 for games/, families/, pages/.

const up = (depth: number) => (depth ? '../'.repeat(depth) : '')
export const gamePath = (id: string, depth: number) => `${up(depth)}games/${id}.md`
export const familyPath = (genre: string, depth: number) => `${up(depth)}families/${genre}.md`
const openAnchor = (e: OpenEntry) => `open-${e.id}`
/** Where an open entry renders: its related game's page, or its own page. */
export function openPath(e: OpenEntry, depth: number) {
  return e.related_game ? `${gamePath(e.related_game, depth)}#${openAnchor(e)}` : gamePath(e.id, depth)
}
const engineAnchor = (e: Engine) => `engine-${e.id}`
const enginePath = (e: Engine, depth: number) => `${up(depth)}pages/engines.md#${engineAnchor(e)}`

// ---- shared indexes -------------------------------------------------------

const byYearThenName = (a: Game, b: Game) => (a.year ?? 0) - (b.year ?? 0) || a.name.localeCompare(b.name)

class Index {
  verified: Game[]
  byId = new Map<string, { name: string; genre: string; path: (d: number) => string }>()
  d: Data
  today: string
  constructor(d: Data, today: string) {
    this.d = d
    this.today = today
    this.verified = d.games.filter((g) => g.verified)
    for (const g of d.games) this.byId.set(g.id, { name: g.name, genre: g.genre, path: (n) => gamePath(g.id, n) })
    for (const e of d.open) this.byId.set(e.id, { name: e.name, genre: e.genre, path: (n) => openPath(e, n) })
  }
  solvedIn = (genre: string) => this.verified.filter((g) => g.genre === genre).sort(byYearThenName)
  openIn = (genre: string) => this.d.open.filter((e) => e.genre === genre).sort((a, b) => a.name.localeCompare(b.name))
  openFor = (gameId: string) => this.d.open.filter((e) => e.related_game === gameId)
  enginesFor = (ids: string[]) =>
    this.d.engines.filter((e) => e.games.some((g) => ids.includes(g))).sort((a, b) => a.name.localeCompare(b.name))
  enginesIn = (genre: string) =>
    this.enginesFor([...this.d.games.filter((g) => g.genre === genre).map((g) => g.id), ...this.openIn(genre).map((e) => e.id)])
  /** Genres in display order, plus "other" when a record has an unknown genre. */
  genres(): string[] {
    const known = GENRE_ORDER.map((g) => g.slug)
    const all = [...this.d.games.map((g) => g.genre), ...this.d.open.map((e) => e.genre)]
    const other = all.some((g) => !known.includes(g))
    return [...known.filter((s) => all.includes(s)), ...(other ? ['other'] : [])]
  }
  link(id: string, depth: number) {
    const r = this.byId.get(id)
    return r ? `[${cell(r.name)}](${r.path(depth)})` : id
  }
}

// ---- tables ---------------------------------------------------------------

const SOLVED_HEADER =
  '| Game | Result under perfect play | Strength | Method | Year | Source |\n|---|---|---|---|---|---|'
function solvedRow(g: Game, depth: number): string {
  let result = RESULT_PHRASE[g.result]
  if (g.approximate) result += ' (ε-Nash)'
  const strength = cap(g.strength) + (g.approximate ? ', approx.' : '')
  return `| [${cell(g.name)}](${gamePath(g.id, depth)}) | ${result} | ${strength} | ${primaryMethod(g)} | ${g.year ?? '—'} | ${cite(g)} |`
}

const HISTORY_HEADER = '| Date | Size or opening | Result | Strength | Credit | Source |\n|---|---|---|---|---|---|'
function historyRows(rows: HistoryRow[]): string {
  return rows
    .map((h) => `| ${h.date} | ${cell(h.size_or_opening)} | ${cell(h.result)} | ${h.strength ? cap(h.strength) : '—'} | ${cell(h.credit)} | [source](${h.url}) |`)
    .join('\n')
}
/** A game's history, or one row derived from its headline fields. */
function historyOf(g: Game): { rows: HistoryRow[]; derived: boolean } {
  if (g.history?.length) return { rows: g.history, derived: false }
  const size = g.name.match(/\(([^)]*\d[^)]*)\)/)?.[1] ?? 'standard game'
  return {
    derived: true,
    rows: [{
      date: g.year ? String(g.year) : '—',
      size_or_opening: size,
      result: RESULT_PHRASE[g.result].toLowerCase() + (g.approximate ? ' (ε-Nash)' : ''),
      strength: g.strength,
      credit: authorsOf(g),
      url: primarySource(g).url,
    }],
  }
}

function linkList(v: Links | undefined): string[] {
  if (!v) return []
  const items = Array.isArray(v) ? v : [v]
  return items.map((x) => (typeof x === 'string' ? `- <${x}>` : `- [${cell(x.title)}](${x.url})`))
}

// ---- open-entry block (on a game page, or as its own page) ----------------

function openBlock(e: OpenEntry, ix: Index, heading: string): string[] {
  const { stale } = staleness(e, ix.today)
  const out = [
    `<a id="${openAnchor(e)}"></a>`,
    '',
    `${heading} ${e.name}`,
    '',
    '| | |',
    '|---|---|',
    `| Status | ${STATUS_LABEL[e.status]}${e.unverified ? ' (unverified)' : ''} |`,
    `| Solved so far | ${cell(e.solved_up_to)} |`,
    `| Next target | ${cell(e.next_target)} |`,
    `| Barrier | ${e.barrier.join(', ')}: ${cell(e.barrier_detail)} |`,
    `| Latest result | ${latestSource(e)} |`,
    `| Last checked | ${stale ? `**stale, unchecked since ${e.last_checked}**` : e.last_checked} |`,
    `| Record | [data/open/${e.id}.yaml](../data/open/${e.id}.yaml) |`,
    '',
  ]
  if (e.unverified) out.push(`**Unverified:** ${cell(e.unverified)}`, '')
  if (e.absence_search?.length) {
    out.push('Searches for newer work:', '')
    for (const a of e.absence_search) out.push(`- ${a.date}: looked for ${cell(a.looked_for)}; found ${cell(a.found)}.`)
    out.push('')
  }
  return out
}

// ---- pages ----------------------------------------------------------------

function engineLines(engines: Engine[], depth: number): string[] {
  return engines.map(
    (e) => `- [${cell(e.name)}](${enginePath(e, depth)}) (${e.kind}): ${STRENGTH_KIND_LABEL[e.strength.kind]}, [source](${e.strength.url})`,
  )
}

function gamePage(g: Game, ix: Index): string {
  const out: string[] = [GENERATED(`data/games/${g.id}.yaml`), '', `# ${g.name}`, '']
  out.push(`[${genreTitle(g.genre).replace(/\*/g, '')}](${familyPath(g.genre, 1)}) · [all families](../README.md#families) · [data](../data/games/${g.id}.yaml)`, '')
  if (!g.verified)
    out.push('> **Not yet verified.** This record has not been checked against its primary source, so it is left out of the family tables and counts.', '')
  if (g.also_known_as?.length) out.push(`*Also known as: ${g.also_known_as.join(', ')}.*`, '')
  if (g.result_detail) out.push(g.result_detail.trim(), '')

  const facts: [string, string][] = [
    ['Result', RESULT_PHRASE[g.result] + (g.approximate ? ' (ε-Nash)' : '')],
    ['Strength', cap(g.strength) + (g.approximate ? `, approximate${g.epsilon ? ` (${g.epsilon})` : ''}` : '')],
    ['Method', (g.method ?? []).map(labelMethod).join(', ') || '—'],
    ['Year', g.year ? String(g.year) : '—'],
    ['Solved by', g.solved_by],
    ['Source', cite(g)],
  ]
  if (g.board) facts.push(['Board', g.board])
  if (g.complexity?.state_space) facts.push(['State space', num(g.complexity.state_space)])
  if (g.complexity?.game_tree) facts.push(['Game tree', num(g.complexity.game_tree)])
  if (g.distance_to_result) facts.push(['Distance to result', g.distance_to_result])
  if (g.evidence) facts.push(['Evidence', g.evidence + mark(g.evidence)])
  out.push('| | |', '|---|---|', ...facts.map(([k, v]) => `| ${k} | ${k === 'Source' ? v : cell(v)} |`), '')
  if (g.evidence === 'self-archived') out.push(ASTERISK_NOTE, '')

  const { rows, derived } = historyOf(g)
  out.push('## Solution history', '', HISTORY_HEADER, historyRows(rows), '')
  if (derived) out.push("_One row, derived from the record's year, solver and primary source; no fuller history is recorded yet._", '')
  else out.push('_Superseded rows stay in the table._', '')

  for (const e of ix.openFor(g.id)) out.push(...openBlock(e, ix, '## Open problem:'))

  const engines = ix.enginesFor([g.id])
  if (engines.length) out.push('## Engines', '', ...engineLines(engines, 1), '')

  out.push('## References', '', ...g.sources.map((s) => `- [${cell(s.title)}](${s.url})`), '')

  const res = g.resources ?? {}
  const resParts: string[] = []
  for (const [k, title] of [['tablebase', 'Tablebases'], ['code', 'Code'], ['explorer', 'Explorers'], ['writeup', 'Write-ups']] as const) {
    const lines = linkList(res[k])
    if (lines.length) resParts.push(`**${title}**`, '', ...lines, '')
  }
  if (resParts.length) out.push('## Resources', '', ...resParts)

  if (g.notes) out.push('## Notes', '', g.notes.trim(), '')
  return out.join('\n').replace(/\n+$/, '\n')
}

/** A page for an open entry that has no solved smaller case in data/games. */
function openPage(e: OpenEntry, ix: Index): string {
  const out: string[] = [GENERATED(`data/open/${e.id}.yaml`), '', `# ${e.name}`, '']
  out.push(`[${genreTitle(e.genre).replace(/\*/g, '')}](${familyPath(e.genre, 1)}) · [open problems](../pages/open-problems.md) · [data](../data/open/${e.id}.yaml)`, '')
  out.push(...openBlock(e, ix, '## Open problem:'))
  out.push('## Solution history', '', HISTORY_HEADER, historyRows(e.history), '', '_Superseded rows stay in the table._', '')
  const engines = ix.enginesFor([e.id])
  if (engines.length) out.push('## Engines', '', ...engineLines(engines, 1), '')
  out.push('## References', '', ...e.sources.map((s) => `- [${cell(s.title)}](${s.url})${s.date ? ` (${s.date})` : ''}`), '')
  if (e.evidence === 'self-archived') out.push(ASTERISK_NOTE, '')
  if (e.notes) out.push('## Notes', '', e.notes.trim(), '')
  return out.join('\n').replace(/\n+$/, '\n')
}

function familyPage(genre: string, ix: Index): string {
  const solved = genre === 'other' ? ix.verified.filter((g) => !GENRE_ORDER.some((x) => x.slug === g.genre)) : ix.solvedIn(genre)
  const open = ix.openIn(genre)
  const engines = ix.enginesIn(genre)
  const out: string[] = [GENERATED(`data/games, data/open and data/engines (genre: ${genre})`), '', `# ${genreTitle(genre)}`, '']
  out.push(`[All families](../README.md#families) · ${solved.length} solved · ${open.length} open · ${engines.length} engines`, '')
  if (solved.length) {
    out.push('## Solved', '', SOLVED_HEADER, ...solved.map((g) => solvedRow(g, 1)), '')
    if (solved.some((g) => g.evidence === 'self-archived')) out.push(ASTERISK_NOTE, '')
  }
  if (FAMILY_NOTES[genre]) out.push(FAMILY_NOTES[genre], '')
  if (open.length) {
    out.push('## Open problems', '', '| Problem | Status | Next target | Latest result | Last checked |', '|---|---|---|---|---|')
    for (const e of open) {
      const { stale } = staleness(e, ix.today)
      out.push(`| [${cell(e.name)}](${openPath(e, 1)}) | ${STATUS_LABEL[e.status]} | ${cell(e.next_target)} | ${latestSource(e)} | ${stale ? `**stale since ${e.last_checked}**` : e.last_checked} |`)
    }
    out.push('')
  }
  if (engines.length) out.push('## Engines', '', ...engineLines(engines, 1), '')
  const unverified = ix.d.games.filter((g) => g.genre === genre && !g.verified)
  if (unverified.length)
    out.push('## Not yet verified', '', ...unverified.map((g) => `- [${cell(g.name)}](${gamePath(g.id, 1)}): not yet checked against its primary source`), '')
  return out.join('\n').replace(/\n+$/, '\n')
}

function openProblemsPage(ix: Index): string {
  const entries = [...ix.d.open].sort((a, b) => a.name.localeCompare(b.name))
  const out: string[] = [GENERATED('data/open/*.yaml'), '', '# Open problems', '']
  out.push(
    'A game or board size earns an entry here when a published partial result exists and the next step is named. ' +
      'A game that is merely unsolved stays out. Each problem links its page, which carries the full history and sources.',
    '',
    `${entries.length} open, ${ix.verified.length} solved.`,
    '',
    '| Problem | Status | Solved so far | Next target | Barrier | Latest result | Last checked |',
    '|---|---|---|---|---|---|---|',
  )
  for (const e of entries) {
    const { stale } = staleness(e, ix.today)
    const status = STATUS_LABEL[e.status] + (e.unverified ? ' (unverified)' : '')
    const checked = stale ? `**stale, unchecked since ${e.last_checked}**` : e.last_checked
    out.push(`| [${cell(e.name)}](${openPath(e, 1)}) | ${status} | ${cell(e.solved_up_to)} | ${cell(e.next_target)} | ${e.barrier.join(', ')} | ${latestSource(e)} | ${checked} |`)
  }
  out.push('')
  const notes = entries.filter((e) => e.unverified)
  if (notes.length) out.push(...notes.map((e) => `- **${cell(e.name)}, unverified:** ${cell(e.unverified!)}`), '')
  if (entries.some((e) => e.evidence === 'self-archived')) out.push(ASTERISK_NOTE, '')
  out.push(
    `Every entry is re-checked against its sources at least every ${MAX_AGE_DAYS} days; \`npm run check\` fails past that, and the row is marked stale.`,
    '',
  )
  return out.join('\n').replace(/\n+$/, '\n')
}

function enginesPage(ix: Index): string {
  const all = [...ix.d.engines].sort((a, b) => a.name.localeCompare(b.name))
  const listed = all.filter((e) => e.games.length)
  const outside = all.filter((e) => !e.games.length)
  const out: string[] = [GENERATED('data/engines/*.yaml'), '', '# Engines', '']
  out.push(
    'Programs that play or solve games, each with the evidence for its strength and a link to it. ' +
      'A solver plays from a solution; an engine searches. Records are in `data/engines/`; ' +
      '`npm run check` rejects a strength claim without a source.',
    '',
    'Strength evidence, strongest first: ' +
      (Object.keys(STRENGTH_KIND_LABEL) as Engine['strength']['kind'][]).map((k) => `\`${k}\``).join(', ') +
      '. A self-reported number is the author\'s own and has not been reproduced here.',
    '',
  )
  const block = (e: Engine) => {
    const games = [...e.games.map((g) => ix.link(g, 1)), ...(e.other_games ?? []).map(cell)]
    const lines = [
      `<a id="${engineAnchor(e)}"></a>`,
      '',
      `### ${e.name}`,
      '',
      `- **Games:** ${games.join(', ')}`,
      `- **Kind:** ${e.kind} · **License:** ${cell(e.license)} · **Author:** ${cell(e.author)}`,
      `- **Strength (${e.strength.kind}):** ${cell(e.strength.claim)} ([source](${e.strength.url}))`,
      `- **Repository:** <${e.url}> · last checked ${e.last_checked}`,
    ]
    if (e.notes) lines.push(`- **Notes:** ${cell(e.notes)}`)
    return [...lines, '']
  }
  if (listed.length) out.push(`## For games in this list (${listed.length})`, '', ...listed.flatMap(block))
  if (outside.length) out.push(`## For other games (${outside.length})`, '', ...outside.flatMap(block))
  return out.join('\n').replace(/\n+$/, '\n')
}

// ---- README regions -------------------------------------------------------

function indexRegion(ix: Index): string {
  const header = '| Family | Solved | Open | Engines | Games |\n|---|---|---|---|---|'
  const rows = ix.genres().map((genre) => {
    const solved = genre === 'other' ? [] : ix.solvedIn(genre)
    const open = ix.openIn(genre)
    const engines = ix.enginesIn(genre)
    const fam = familyPath(genre, 0)
    const games = solved.map((g) => `[${cell(g.name)}](${gamePath(g.id, 0)})${mark(g.evidence)}`).join(', ') || '—'
    const openCell = open.length ? `[${open.length}](${fam}#open-problems)` : '0'
    const engCell = engines.length ? `[${engines.length}](${fam}#engines)` : '0'
    return `| [${genreTitle(genre)}](${fam}) | ${solved.length} | ${openCell} | ${engCell} | ${games} |`
  })
  const outside = ix.d.engines.filter((e) => !e.games.length).length
  const parts = [
    `${ix.verified.length} solved, ${ix.d.open.length} open, ${ix.d.engines.length} engines (${ix.d.engines.length - outside} for games in this list).`,
    [header, ...rows].join('\n'),
    'All [open problems](pages/open-problems.md) in one table · all [engines](pages/engines.md).',
  ]
  if (ix.verified.some((g) => g.evidence === 'self-archived')) parts.push(ASTERISK_NOTE)
  return `\n${parts.join('\n\n')}`
}

function progressRegion(ix: Index): string {
  const top = [...ix.d.progress].sort((a, b) => String(b.date).localeCompare(String(a.date))).slice(0, 10)
  const items = top.map((p) => {
    const what = ix.byId.has(p.id) ? `${ix.link(p.id, 0)}: ${cell(p.what)}` : cell(p.what)
    const labels = p.labels?.length ? ` · _${p.labels.join(', ')}_` : ''
    return `- **${p.date}** · ${what} · ${cell(p.credit)} · [source](${p.url})${labels}`
  })
  return `\n${items.join('\n')}`
}

// ---- entry point ----------------------------------------------------------

export interface Rendered {
  /** Generated pages, keyed by repo-relative path. */
  pages: Map<string, string>
  /** README region bodies, keyed by region name. */
  regions: Map<string, string>
  /** Directories whose every .md file is generated (stray files fail the check). */
  generatedDirs: string[]
  warnings: string[]
}

export function render(d: Data, today: string): Rendered {
  const ix = new Index(d, today)
  const pages = new Map<string, string>()
  const warnings: string[] = []
  for (const g of d.games) pages.set(`games/${g.id}.md`, gamePage(g, ix))
  for (const e of d.open) {
    if (e.related_game) continue
    if (pages.has(`games/${e.id}.md`)) throw new Error(`open entry "${e.id}" collides with a game page of the same id`)
    pages.set(`games/${e.id}.md`, openPage(e, ix))
  }
  for (const genre of ix.genres()) pages.set(`families/${genre}.md`, familyPage(genre, ix))
  if (ix.genres().includes('other')) warnings.push('records with an unrecognized genre render under families/other.md; add the slug to GENRE_ORDER')
  pages.set('pages/open-problems.md', openProblemsPage(ix))
  pages.set('pages/engines.md', enginesPage(ix))
  const regions = new Map([
    ['index', indexRegion(ix)],
    ['recent-progress', progressRegion(ix)],
  ])
  return { pages, regions, generatedDirs: ['games', 'families', 'pages'], warnings }
}
