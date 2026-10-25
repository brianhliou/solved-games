<!-- GENERATED from data/games/ostle.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Ostle

[Capture & board control](../families/capture.md) · [all families](../README.md#families) · [data](../data/games/ostle.yaml)

The initial position is drawn with perfect play.

| | |
|---|---|
| Result | Draw |
| Strength | Strong |
| Method | Retrograde analysis |
| Year | 2022 |
| Solved by | Hiroki Takizawa |
| Source | [Takizawa 2023](https://pmc.ncbi.nlm.nih.gov/articles/PMC10557503/) |
| Board | 5×5; five pieces per player and one movable hole |
| State space | 11,148,725,918 |
| Evidence | refereed |

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| 2022 | standard game | draw | Strong | Hiroki Takizawa | [source](https://pmc.ncbi.nlm.nih.gov/articles/PMC10557503/) |

_One row, derived from the record's year, solver and primary source; no fuller history is recorded yet._

## References

- [Strongly solved Ostle: calculating a strong solution helps compose high-quality puzzles for recent games (PeerJ Computer Science, 12 September 2023)](https://pmc.ncbi.nlm.nih.gov/articles/PMC10557503/)

## Resources

**Tablebases**

- [Retrograde-analysis and reachability outputs](https://doi.org/10.6084/m9.figshare.19668789.v1)

**Code**

- [Ostle solver source code](https://github.com/eukaryo/ostle_solver)

## Notes

Ostle is played on a 5×5 board with five pieces per player and a movable
hole. Players move a piece or the hole orthogonally; pieces can push
chains of other pieces. Pieces falling into the hole or off the board
are removed, and losing two pieces loses the game. Immediate two-ply
repetitions are forbidden; the analysis treats other repetitions as draws.

Takizawa enumerated 2,735,147,685 positions and used retrograde analysis
on 11,148,725,918 non-trivial states. These retain the restricted move
and merge board and player symmetries. A breadth-first search confirmed
their reachability. Bitboards and succinct dictionaries reduced memory
use. The initial position is a draw.
