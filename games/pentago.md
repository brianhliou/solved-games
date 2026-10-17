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

- [pentago (Irving)](../pages/engines.md#engine-pentago) (solver): perfect play, [source](https://arxiv.org/abs/1404.0743)

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

Pentago: a 6×6 board split into four 3×3 quadrants; each turn a player places one marble and then rotates one quadrant 90°, aiming for five-in-a-row. Strongly solved by Geoffrey Irving in 2014 — perfect play is efficiently computable for any position, the defining property of a strong solution. The first player wins. Computed by exhaustive parallel in-core retrograde analysis in under 4 hours on 98,304 threads of NERSC's Cray Edison (≈80 TB RAM at peak). At 3.0×10^15 states (3,009,081,623,421,558 positions with symmetries removed), it is described as the largest divergent game solved to date by two orders of magnitude, and the only nontrivial divergent game solved via retrograde analysis. The solution is stored as a 3.7 TB database holding full results for all positions with ≤18 stones; positions with 18+ stones are evaluated on the fly. Ties are possible (e.g. both players complete five-in-a-row on the same move, or the board fills with no winner), but the game-theoretic value from the empty board is a first-player win. The three sources above are distinct artifacts (peer-style paper, project website, open-source code+dataset) of a single research effort by Irving — one independent primary result, multiply corroborated. No conflicting solution exists in the literature. The state_space figure is post-symmetry-reduction reachable positions per the project; distance to the result (ply count of the forced win) is not published as a single figure.
