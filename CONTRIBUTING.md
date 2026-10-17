# Contributing

This is a maintained list. Open entries are re-checked against their sources
at least every 90 days (`npm run check` fails past that), and every merged
change gets a dated line in `data/progress.yaml` crediting whoever found it.
Corrections to a wrong result, year, or citation are the most useful pull
request: they are credited like a new result.

If you want the data rather than a merged PR, take it: `data/games/*.yaml` is
CC0 structured data — public domain, fork or vendor it freely.

## What belongs here

A game earns an entry when its result under perfect play is established in a
citable source: a peer-reviewed paper, a thesis, or a solver with published
verification. "Widely believed" results wait until someone has actually computed
or proven them.

An unsolved game belongs on the open list (`data/open/<id>.yaml`) only when a
published partial result exists and the next target is named: a board size, an
opening, a rule set. A game that is merely unsolved stays out.

## How to add or correct an entry

1. Add or edit the game's record in `data/games/<id>.yaml` (see
   `data/schema.md` for the fields).
2. Link the primary source, not a summary of it. Wikipedia works as a pointer,
   but `sources` should reach the actual paper, thesis, or solver where one
   exists.
3. Keep `strength` honest: ultra-weak, weak, and strong are different claims
   (see the README).
4. One game per file. Variants with different results (board sizes, rule sets)
   get their own records.
5. The game pages (`games/`), family pages (`families/`), `pages/` and the
   README's family index and "Recent progress" are generated from the data —
   run `npm run build` to regenerate them. Don't hand-edit them or the text
   between the `<!-- GENERATED -->` markers; `npm run check` confirms they're
   in sync, and `npm test` runs the checks' own tests.
6. An engine goes in `data/engines/<id>.yaml`. Its strength claim needs a
   source URL whatever its kind; a self-reported number is labelled
   `self-reported`, and an engine with no published strength says so with kind
   `none` and a link to the project.

## How to add or update an open entry

1. Add or edit `data/open/<id>.yaml` (fields in `data/schema.md`): what is
   solved so far, the named next target, the barrier, the sources, and a
   `history` row per result with its credit.
2. A claim that nothing exists ("no solver", "unsolved", "first") needs an
   `absence_search` row: the date, what was searched, what was found. Without
   one, leave the claim out.
3. Set `evidence`: `refereed`, `preprint`, `thesis`, or `self-archived`. A
   self-archived result (a repository, a post, a deposit nobody else has
   checked) gets a `*` in the README, including this repo's own results, until
   it is refereed, formally verified, or replayed by someone else.
4. If part of an entry could not be checked, say what in `unverified`; the
   README shows the tag.
5. Re-checking an entry means reading its sources again and searching for newer
   work, then setting `last_checked` to that day. Bumping the date without the
   reading defeats the check.
6. Add a line to `data/progress.yaml` (date, id, what, credit, source URL) for
   any new result or correction, then `npm run build` and `npm run check`.

Large artifacts (tablebases, databases) are linked by DOI or commit hash, not
committed here. If a result or a contribution was produced with AI help, say so
in the pull request.

## Verification

Each entry carries a `verified` flag, meaning the result, year, and citation
have been checked against the primary source. New entries arrive
`verified: false`; that's expected, and it may stay false until someone checks
it.

## If the checks lapse

If the 90-day check fails twice in a row without a re-check, the "not actively
maintained" banner goes back on the README, CONTRIBUTING and VISION in the same
commit that admits it.

## The engine

The solver that produced this dataset's two original results is in a separate
repo, [game-solver](https://github.com/brianhliou/game-solver). Issues about
the engine, the tablebases, or the explorer belong there, not here.

A disagreement about a result is settled by the source, not the argument.
