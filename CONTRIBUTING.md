# Contributing

**Before you spend time on this: the repo is not actively maintained.** Pull
requests may sit for a while. Corrections to a wrong result, year, or citation
are the ones most likely to get merged quickly, because they make the dataset
wrong-in-public and that is worth fixing. New entries are welcome but not
solicited, and nobody is tracking the literature for new results.

If you want the data rather than a merged PR, take it: `data/games/*.yaml` is
CC0 structured data — public domain, fork or vendor it freely.

## What belongs here

A game earns an entry when its result under perfect play is established in a
citable source: a peer-reviewed paper, a thesis, or a solver with published
verification. "Widely believed" results wait until someone has actually computed
or proven them.

Unsolved games belong only on the frontier list, with the barrier that keeps
them open.

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
5. The README's "Solved games" table is generated from the data — run
   `npm run build` to regenerate it. Don't hand-edit the table between the
   `<!-- GENERATED -->` markers; `npm run check` confirms it's in sync.

## Verification

Each entry carries a `verified` flag, meaning the result, year, and citation
have been checked against the primary source. New entries arrive
`verified: false`; that's expected, and it may stay false until someone checks
it.

## The engine

The solver that produced this dataset's two original results is in a separate
repo, [game-solver](https://github.com/brianhliou/game-solver). Issues about
the engine, the tablebases, or the explorer belong there, not here.

A disagreement about a result is settled by the source, not the argument.
