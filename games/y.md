<!-- GENERATED from data/games/y.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Y (side 6)

[Connection games](../families/connection.md) · [all families](../README.md#families) · [data](../data/games/y.yaml)

*Also known as: Game of Y, Y-game.*

First player wins. Strongly solved for board sides 1-6 — the game-theoretic value of every position is known — and the first player wins from the start at every size. Y can never draw (the Y theorem), confirmed: every position is a win or a loss.

| | |
|---|---|
| Result | First player wins |
| Strength | Strong |
| Method | Retrograde analysis, Brute-force enumeration |
| Year | 2026 |
| Solved by | Brian Liou (open-source game-solver engine, 2026), sides 1-6; see the prior-art note. |
| Source | [Liou 2026](https://github.com/brianhliou/game-solver/blob/447f644826998390e3fd9b494e5944a6bdc5e64f/README.md)\* |
| Board | Triangular board of hexagonal cells; side n has n rows and n(n+1)/2 cells (side 6 = 21 cells). Players alternately place a stone of their colour on an empty cell; a player wins by connecting all three sides of the triangle with one group. Hex reduces to Y. Strongly solved here for sides 1-6. |
| Evidence | self-archived\* |

\* Self-archived: the result is available only from its authors (a repository, a post, a deposit), not yet refereed, formally verified or reproduced by someone else. The mark comes off when one of those happens. It applies to this repo's own results too.

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| 1975 | all sizes | first player wins (strategy stealing, names no moves); date records the book's publication, not a verified proof date | Ultra-weak | Craige Schensted & Charles Titus | [source](https://en.wikipedia.org/wiki/Y_(game)) |
| 2026-06-19 | sides 1-6 | first player wins at every size; no position is a draw | Strong | Brian Liou | [source](https://github.com/brianhliou/game-solver) |

_Superseded rows stay in the table._

<a id="open-y-side-7"></a>

## Open problem: Y (side 7)

| | |
|---|---|
| Status | Smaller board solved |
| Solved so far | Sides 1-6 strongly solved; first player wins at every size |
| Next target | Side 7 (28 cells), slice by slice |
| Barrier | memory, storage: Side 6 is 2,173,243,128 count-legal positions, solved in about 13 minutes on one core in about 1 GB of RAM. Side 7's count-legal index exceeds 2^32, so it needs 64-bit indexing and a value table larger than RAM (disk-paged slices). An estimate of about 10^13 positions dates from 2026-06-19 and was not rechecked. |
| Latest result | [Liou 2026](https://github.com/brianhliou/game-solver) (2026-06-19)\* |
| Last checked | 2026-10-17 |
| Record | [data/open/y-side-7.yaml](../data/open/y-side-7.yaml) |

## References

- [Brian Liou, game-solver results (2026): side-6 first-player win, solved by slice-by-slice retrograde analysis](https://github.com/brianhliou/game-solver/blob/447f644826998390e3fd9b494e5944a6bdc5e64f/README.md)
- [Committed Y tests: reachable counts for sides 1–5, reachable/dense value agreement on side 4, and sliced/dense aggregate agreement on sides 1–5](https://github.com/brianhliou/game-solver/blob/891f85ef94d3e58f2784d5d16c4cc680f3d3a748/engine/tests/y.rs)
- [Committed Y implementation: count-legal indexing and sequential slice-by-slice solver](https://github.com/brianhliou/game-solver/blob/891f85ef94d3e58f2784d5d16c4cc680f3d3a748/engine/src/games/y.rs)
- [Side-6 solver commit (2026-06-19): estimated memory requirement of about 800 MB](https://github.com/brianhliou/game-solver/commit/891f85ef94d3e58f2784d5d16c4cc680f3d3a748)
- [GamesCrafters (UC Berkeley), GamesmanClassic mgameofy.c (Andrew Esteban, 2023): Y solver code supporting board dimensions 4–7](https://github.com/GamesCrafters/GamesmanClassic/blob/master/src/mgameofy.c)
- [Craige Schensted & Charles Titus, Mudcrack Y and Poly-Y (Neo Press, published 1975); the publication year does not establish the date of the strategy-stealing proof](https://en.wikipedia.org/wiki/Y_(game))
- [Mudcrack Y and Poly-Y (distributor; confirms the 1975 publication year)](https://www.gamepuzzles.com/abstract.htm)

## Resources

**Code**

- [game-solver — generic retrograde engine (the game-solver repository); Y is a plugin (engine/src/games/y.rs), solved and tested in CI.](https://github.com/brianhliou/game-solver)

## Notes

Y is a connection game on a triangular grid. Players place stones in turn, and
a player wins by joining all three sides with one connected group. Y
generalizes Hex (Hex reduces to Y), and like Hex it cannot be drawn: by the Y
theorem a full board always has exactly one player connecting all three sides,
and both players can never connect at once.

On every board size the first player wins, by a Hex-style strategy-stealing
argument commonly attributed to Schensted and Titus, after Nash. That
ultra-weak result is non-constructive and names no moves. Their book
"Mudcrack Y and Poly-Y" was published in 1975; that dates the book, while
the proof's date has not been verified.

For sides 1-6 the game-solver engine computed the value of every position by
retrograde analysis. The first player wins from the start at every size and no
position is a draw; both are checked as correctness invariants, since a wrong
board model would turn up a draw. The position counts are side 1 (2
positions), side 2 (13), side 3 (257), side 4 (16,505), side 5 (3,337,584
reachable) and side 6 (2,173,243,128 count-legal index).

The two measures differ. Sides 1-5 count reachable positions, found by forward
discovery. Side 6 counts the tight count-legal index, a superset that also
includes positions that are count-legal but unreachable, because side 6 was
solved by the dense slice solver; the figures are not directly comparable. At
every size the solver classifies positions as wins or losses. The sliced
solver has no draw branch and asserts that a nonterminal position has a move.

The committed tests compare reachable and dense values for every reachable
side-4 position. They compare sliced and dense win/loss totals and the start
value for sides 1–5. These solve paths share the Y rules implementation;
the tests do not establish every-position agreement on side 6. The side-6
solver is sequential, with an estimated memory requirement of about 800 MB
in its introducing commit.

The earlier solver found is GamesCrafters' GamesmanClassic `mgameofy.c` (A.
Esteban, 2023), which has Y code for dims 4-7. It publishes no game values,
has no accompanying paper, and declares draws possible (`kTieIsPossible =
TRUE`) for a game that cannot draw. Configurable dimensions alone do not
establish completed solves. The search was not exhaustive and no priority
is claimed; this entry records the sides solved (1-6), with credit to the
earlier GamesCrafters work.

Side 7 (28 cells) has a count-legal index beyond 2^32, and is the natural next
target using external-memory (disk-paged) slices.
