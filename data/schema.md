# Record schema

One YAML file per solved game, at `games/<id>.yaml`.

| Field | Required | Notes |
|---|---|---|
| `id` | yes | kebab-case, matches the filename |
| `name` | yes | display name, with diacritics |
| `also_known_as` | no | list of alternate names |
| `family` | yes | abstract, chess-variant, shogi-variant, connection, go, mancala, combinatorial, imperfect-info, … |
| `genre` | yes | grouping for the rendered tables; one of the slugs in **Genres** below. Distinct from `family` (a looser provenance tag) — `genre` is the display axis. |
| `board` | no | size or shape (e.g. 3×4, 8×8) |
| `result` | yes | `first-player-win` \| `second-player-win` \| `draw` |
| `result_detail` | no | human-readable, e.g. "Gote (second player) wins" |
| `strength` | yes | `ultra-weak` \| `weak` \| `strong` |
| `approximate` | no | bool; `true` when the solution is approximate rather than exact — e.g. an imperfect-information game solved to within an exploitability bound (an ε-Nash / "essentially weakly solved" result), not a discrete value |
| `epsilon` | no | the approximation bound when `approximate: true` (e.g. "0.986 mbb/g exploitability") |
| `method` | yes | list: retrograde-analysis, proof-number-search, alpha-beta+db, knowledge-based, monte-carlo-cfr, … |
| `distance_to_result` | no | e.g. "78 plies from the start" |
| `complexity.state_space` | no | integer; say whether reachable or total in `notes` |
| `complexity.game_tree` | no | integer or null |
| `year` | yes | year of the solution |
| `solved_by` | yes | person or team |
| `cite` | no | short label for the generated tables (e.g. "Tanaka 2009"); overrides the label auto-derived from `solved_by`. Use when `solved_by` is prose. |
| `verified` | yes | bool; true once checked against the primary source |
| `sources` | yes | list of `{title, url}`; primary source first |
| `resources` | no | `{tablebase, code, explorer, writeup}`, each a list of `{title, url}` |
| `evidence` | no | `refereed` \| `preprint` \| `thesis` \| `self-archived`. `self-archived` (available only from its authors: a repository, a post, a deposit; not refereed, formally verified or replayed by someone else) puts a `*` on the README citation. Unset means not yet classified. |
| `history` | no | list of dated results, one per board size or opening: `{date, size_or_opening, result, strength?, credit, url}` (same shape as on open entries, below) |
| `notes` | no | anything that doesn't fit a field |

Keep `verified: false` until a maintainer confirms result + year + citation.

## Open entries

One YAML file per open problem, at `open/<id>.yaml`. An entry needs a published
partial result and a named next target; a game that is merely unsolved has no
entry. Validated by `scripts/check-open.ts` (`npm run check`), which also fails
when any entry's `last_checked` is more than 90 days old.

| Field | Required | Notes |
|---|---|---|
| `id` | yes | kebab-case, matches the filename |
| `name` | yes | display name, including the open size (e.g. "Go (6×6)") |
| `genre` | yes | one of the slugs in **Genres** below |
| `status` | yes | `open` \| `partially-solved` (some openings or cells of the target solved) \| `solved-smaller-board` (a smaller size solved, the target not) |
| `related_game` | no | id of the `games/` record for the solved smaller case |
| `solved_up_to` | yes | what is solved so far, in one line |
| `next_target` | yes | the named next step: a size, an opening, a rule set |
| `barrier` | yes | non-empty list of `compute` \| `storage` \| `memory` \| `branching` \| `algorithmic` |
| `barrier_detail` | yes | what the barrier is, with numbers where the sources give them |
| `cite` | no | short label for the README's latest-result link (e.g. "Siefke 2025") |
| `evidence` | yes | evidence class of the latest result, as on game records |
| `unverified` | no | what in the entry could not be checked; the README tags the row |
| `sources` | yes | list of `{title, url, date?, primary?}`; `primary: true` marks the latest result shown on the open-problems page |
| `absence_search` | no | list of `{date, looked_for, found}`; required in practice for any "none found", "first" or "unsolved" claim |
| `history` | yes | dated results, oldest first: `{date, size_or_opening, result, strength?, credit, url}`; `date` is YYYY, YYYY-MM or YYYY-MM-DD |
| `last_checked` | yes | YYYY-MM-DD, the day the entry was last read against its sources and searched for newer work |
| `notes` | no | anything that doesn't fit a field |

## Engines

`engines/<id>.yaml` is one program that plays or solves games. `npm run check`
(`scripts/check-engines.ts`) rejects a record that breaks these rules; the
planted failure it must catch is `test/fixtures/engines-bad/`.

| Field | Required | Meaning |
|---|---|---|
| `id` | yes | kebab-case, matches the filename |
| `name` | yes | display name |
| `kind` | yes | `engine` (searches) or `solver` (plays from a solution) |
| `games` | yes | ids of `games/` or `open/` records it plays; empty when every game is in `other_games` |
| `other_games` | no | names of games outside this list; `games` and `other_games` together are never empty |
| `author` | yes | who wrote it |
| `license` | yes | as stated by the project, with any caveat |
| `strength` | yes | `{kind, claim, url}`. `kind` is one of `perfect-play`, `competition`, `rating`, `match-result`, `third-party`, `self-reported`, `none` (strongest evidence first); `claim` is one sentence; `url` is the source for the claim and is required for every kind, `none` included |
| `url` | yes | the repository or home page |
| `last_checked` | yes | YYYY-MM-DD, the day the record was read against its sources |
| `notes` | no | anything that doesn't fit a field |

## Progress log

`progress.yaml` is a list, newest first, of `{date, id, what, credit, url,
labels?}`: one line per new result or merged correction, crediting whoever found
it. `id` names a `games/` or `open/` record. The README's "Recent progress"
shows the newest ten.

## Generated pages

`npm run build` renders `games/<id>.md` (one per game record, and one per open
entry without a `related_game`; an open entry with one renders on that game's
page), `families/<genre>.md`, `pages/open-problems.md`, `pages/engines.md`, and
the README's family index and recent-progress regions. `npm run check` fails
when any of them is out of date or a stray `.md` file sits in `games/`,
`families/` or `pages/`. Hand-written pages live in `guides/`.

## Genres

The `genre` field groups games into the family pages (`families/<genre>.md`) and the README's family index (and the
filter on the site). The slugs and their display order (familiar → frontier):

| Slug | Section title |
|---|---|
| `alignment` | Alignment & *m,n,k* games |
| `morris` | Morris / mill family |
| `connection` | Connection games |
| `mancala` | Mancala |
| `capture` | Capture & board control |
| `chess` | Chess & chess variants |
| `hunt` | Hunt & unequal forces |
| `cgt` | Combinatorial game theory |
| `shogi` | Shogi variants |
| `go` | Go |
| `imperfect-info` | Imperfect information |
| `chance` | Games of chance |

Some games sit in two genres (e.g. Maharajah is a chess variant *and* an
unequal-forces hunt; Amazons is territorial *and* a canonical CGT game). Pick the
one that best places it for a reader; the choice is editorial, not load-bearing.
A record with an unrecognized or missing `genre` renders under a trailing
"Other" section and the build warns — so add the slug here when introducing one.

For **imperfect-information** games the ultra-weak / weak / strong ladder does not
map cleanly — position values beyond the start are not unique and outcomes are
real-valued (expected payoff) rather than discrete win/loss/draw. Record the
closest `strength` (usually `weak`), set `approximate: true` with an `epsilon`
bound, and use `result` to encode the sign of the game value. See
`heads-up-limit-holdem.yaml` for the worked example.
