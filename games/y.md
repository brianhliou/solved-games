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
| Source | [Liou 2026](https://github.com/brianhliou/game-solver)\* |
| Board | Triangular board of hexagonal cells; side n has n rows and n(n+1)/2 cells (side 6 = 21 cells). Players alternately place a stone of their colour on an empty cell; a player wins by connecting all three sides of the triangle with one group. Hex reduces to Y. Strongly solved here for sides 1-6. |
| State space | 2,173,243,128 |
| Distance to result | Side-6 (2,173,243,128 positions) solved in ~13 minutes in ~1 GB of RAM on a single core, by slice-by-slice retrograde over the ply-layers. |
| Evidence | self-archived\* |

\* Self-archived: the result is available only from its authors (a repository, a post, a deposit), not yet refereed, formally verified or reproduced by someone else. The mark comes off when one of those happens. It applies to this repo's own results too.

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| 1975 | all sizes | first player wins (strategy stealing, names no moves) | Ultra-weak | Craige Schensted & Charles Titus | [source](https://en.wikipedia.org/wiki/Y_(game)) |
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

- [Brian Liou — strong solution of Y for sides 1-6 via the game-solver engine (2026): a full retrograde solve of every position. The first player wins at every size and no position is a draw. Side-6 has 2,173,243,128 count-legal positions (wins 1,352,692,412 / losses 820,550,716). Validated by three independent solve paths (reachable, dense-index, and slice-by-slice) that agree on every value, plus the no-draw invariant. Reproducible via `cargo run --release --bin y_solve6 6`.](https://github.com/brianhliou/game-solver)
- [GamesCrafters (UC Berkeley), GamesmanClassic `mgameofy.c` (A. Esteban, 2023) — prior art: open-source Y solver code for board dims 4-7, but with no published game values, no paper, and `kTieIsPossible = TRUE` (a draw-handling flaw for a game that cannot draw). Only dim-5 is credibly confirmed computed.](https://github.com/GamesCrafters/GamesmanClassic/blob/master/src/mgameofy.c)
- [Craige Schensted & Charles Titus, Mudcrack Y and Poly-Y (Neo Press, 1975) — the game of Y; first player wins on any board by a Hex-style strategy-stealing argument (ultra-weak, non-constructive).](https://en.wikipedia.org/wiki/Y_(game))

## Resources

**Code**

- [game-solver — generic retrograde engine (the game-solver repository); Y is a plugin (engine/src/games/y.rs), solved and tested in CI.](https://github.com/brianhliou/game-solver)

## Notes

Y is a connection game on a triangular grid. Players place stones in turn, and
a player wins by joining all three sides with one connected group. Y
generalizes Hex (Hex reduces to Y), and like Hex it cannot be drawn: by the Y
theorem a full board always has exactly one player connecting all three sides,
and both players can never connect at once.

On every board size the first player wins, by the Hex-style strategy-stealing
argument (Schensted and Titus 1975, after Nash). That ultra-weak result is
non-constructive and names no moves.

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
every size wins plus losses equal the total exactly, which is the no-draw
invariant.

The earlier solver found is GamesCrafters' GamesmanClassic `mgameofy.c` (A.
Esteban, 2023), which has Y code for dims 4-7. It publishes no game values,
has no accompanying paper, and declares draws possible (`kTieIsPossible =
TRUE`) for a game that cannot draw; an adversarial check could confirm only
its dim-5 as credibly computed. The search was not exhaustive and no priority
is claimed; this entry records the sides solved (1-6), with full credit to the
earlier GamesCrafters work.

Side 7 (28 cells) has a count-legal index beyond 2^32, and is the natural next
target using external-memory (disk-paged) slices.
