# What this is

> A structured record of solved games: the result, the method that produced it, and where to verify it.

## Why it exists

Game-solving results are scattered. Wikipedia's "Solved game" page is a short table with no methods, no complexity figures, and few links to code or tablebases. The deeper knowledge lives in places that don't talk to each other: the Chessprogramming wiki, HexWiki, individual arXiv papers, a researcher's personal page, a GitHub repo with no README.

This repo collects that into one machine-readable dataset. It is a dataset with a generated site on top, not a wiki: a short list kept current, not an encyclopaedia.

## Scope

In scope: any game with a known game-theoretic result under perfect play, and the techniques used to get there. A game earns an entry when its result is established in a citable source — a paper, a thesis, or a solver with published verification.

Each record tracks the result (who wins, or draw), the solution strength (ultra-weak / weak / strong), the method, the state-space and game-tree complexity, the year, the solver, the primary source, and links to any tablebase, code, or explorer.

## Not in scope

Not a general games catalog. BoardGameGeek and Wikipedia own that. An unsolved game appears only on the open list, and only with a published partial result, a named next target, and the barrier that keeps it open.

Not a wiki. Contributions come as pull requests against structured data, gated on a citation. The data files are the source of truth; the tables and the site generate from them.

## What it contains

- **The registry** — one structured record per solved game, machine-readable first, so the tables, the site, and any downstream tool read the same data.
- **The open list** — what is partly solved, the next target, and the barrier holding it there.
- **Family and method pages** — generated from the registry.

The engine behind the two original solves in this dataset (six men's morris and Y at side 6; three men's morris is folklore it merely reproduces) lives separately in [game-solver](https://github.com/brianhliou/game-solver), with its tablebases as release assets and a browser explorer at [tablebase.brianhliou.com](https://tablebase.brianhliou.com/). It began here as a way to verify records rather than take them on faith, and outgrew that role.

## Status

**Maintained list.** Every open entry carries a `last_checked` date, and `npm run check` (run in CI, and weekly on a schedule) fails once any entry goes 90 days without a re-check; a stale entry is marked as stale on the open-problems page. Entries are checked against their primary sources for plausibility, not certified. A `*` marks a result that exists only as a self-archived artifact, this repo's own two included, until someone referees, formalises or replays it. New results and corrections go into a dated, credited progress log (`data/progress.yaml`).

If the checks lapse twice in a row, the "not actively maintained" banner comes back in the same commit; a maintained list that is not maintained is worse than an honest snapshot. The data is CC0 either way.

Corrections are still welcome and still get merged — see [CONTRIBUTING](CONTRIBUTING.md). There is no roadmap.

## Principles

- **Citation-gated.** Every result links to a primary source. No entry on hearsay.
- **Structured data first.** The dataset is the product; the prose renders from it.
- **Honest strengths.** Ultra-weak, weak, and strong are different claims. Keep them distinct.
