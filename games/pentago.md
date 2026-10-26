<!-- GENERATED from data/games/pentago.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Pentago

[Alignment & m,n,k games](../families/alignment.md) · [all families](../README.md#families) · [data](../data/games/pentago.yaml)

First player (white) wins with perfect play

| | |
|---|---|
| Result | First player wins |
| Strength | Strong |
| Method | Retrograde analysis, Brute-force enumeration |
| Year | 2014 |
| Solved by | Geoffrey Irving |
| Source | [Irving 2014](https://arxiv.org/abs/1404.0743) |
| Board | 6×6 with four rotatable 3×3 quadrants |
| State space | 3,009,081,623,421,558 |

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| 2014 | standard game | first player wins | Strong | Geoffrey Irving | [source](https://arxiv.org/abs/1404.0743) |

_One row, derived from the record's year, solver and primary source; no fuller history is recorded yet._

## Engines

- [pentago (Irving)](../engines/pentago.md) (solver): perfect play, [source](https://arxiv.org/abs/1404.0743)

## References

- [Irving 2014 — Pentago is a First Player Win: Strongly Solving a Game Using Parallel In-Core Retrograde Analysis (arXiv:1404.0743)](https://arxiv.org/abs/1404.0743)
- [perfect-pentago.net — interactive strong-solution explorer + details](https://perfect-pentago.net/details.html)
- [girving/pentago — massively parallel solver, code + public-domain dataset](https://github.com/girving/pentago)

## Resources

**Tablebases**

- [3.7 TB strong-solution dataset (full data ≤18 stones; public domain, available on request)](https://github.com/girving/pentago)

**Code**

- [girving/pentago — solver source (BSD)](https://github.com/girving/pentago)

**Explorers**

- [perfect-pentago.net — DB lookup + on-the-fly perfect-play explorer](https://perfect-pentago.net)

**Write-ups**

- [naml.us project page](https://naml.us/paper/pentago/)

## Notes

Pentago is played on a 6×6 board split into four 3×3 quadrants. Each turn a
player places one marble and then rotates one quadrant 90°, and the goal is
five in a row. Ties are possible (both players complete five on the same move,
or the board fills with no winner), but from the empty board the first player
wins.

The solution is strong: perfect play can be computed efficiently from any
position. Irving found it in 2014 by exhaustive parallel in-core retrograde
analysis on 98,304 threads of NERSC's Cray Edison, using about 80 TB of RAM
at peak. The bulk computation took 2.7 hours; the main job reached its
four-hour limit while writing results, and two smaller jobs finished the
solution down to the empty board.

The total after symmetry reduction is 3,009,081,623,421,558 states (about
3.0×10^15), including approximately 0.3% unreachable states. In his 2014
paper, Irving described it as the largest divergent game solved by two orders
of magnitude and the only nontrivial divergent game solved by retrograde
analysis.

The results are stored as a 3.7 TB database with full values for every
position of up to 18 stones. Positions with more stones are evaluated on the
fly.
