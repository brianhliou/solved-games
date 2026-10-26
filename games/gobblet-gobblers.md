<!-- GENERATED from data/games/gobblet-gobblers.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Gobblet Gobblers

[Alignment & m,n,k games](../families/alignment.md) · [all families](../README.md#families) · [data](../data/games/gobblet-gobblers.yaml)

The first player can force a win in 13 plies.

| | |
|---|---|
| Result | First player wins |
| Strength | Strong |
| Method | Retrograde analysis |
| Year | 2024 |
| Solved by | possiblywrong |
| Source | [possiblywrong 2024](https://possiblywrong.wordpress.com/2024/06/11/strongly-solving-gobblet-gobblers-using-retrograde-analysis/)\* |
| Board | 3×3; each player has two pieces in each of three sizes |
| State space | 341,024,631 |
| Distance to result | 13 plies from the empty board with optimal play. |
| Evidence | self-archived\* |

\* Self-archived: the result is available only from its authors (a repository, a post, a deposit), not yet refereed, formally verified or reproduced by someone else. The mark comes off when one of those happens. It applies to this repo's own results too.

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| 2024 | standard game | first player wins | Strong | possiblywrong | [source](https://possiblywrong.wordpress.com/2024/06/11/strongly-solving-gobblet-gobblers-using-retrograde-analysis/) |

_One row, derived from the record's year, solver and primary source; no fuller history is recorded yet._

## Engines

- [gobblet (Possibly Wrong)](../engines/gobblet-solver.md) (solver): perfect play, [source](https://possiblywrong.wordpress.com/2024/06/11/strongly-solving-gobblet-gobblers-using-retrograde-analysis/)

## References

- [Strongly solving Gobblet Gobblers using retrograde analysis (11 June 2024)](https://possiblywrong.wordpress.com/2024/06/11/strongly-solving-gobblet-gobblers-using-retrograde-analysis/)
- [Author's solver implementation: reachable-state enumeration and retrograde analysis](https://github.com/possibly-wrong/gobblet/blob/main/gobblet.cpp)

## Resources

**Code**

- [Gobblet Gobblers solver](https://github.com/possibly-wrong/gobblet)

## Notes

Gobblet Gobblers is a three-in-a-row game on a 3×3 board. Each player
has two pieces in each of three sizes. A turn places a reserve piece
or moves an exposed piece already on the board; larger pieces can
cover smaller pieces belonging to either player.

The author's solver enumerates reachable states from the empty board
and works wins and losses backward from terminal states, leaving
draws where neither side can force a win. The reported 341,024,631
states merge board and player symmetries.

The first player wins in 13 plies with optimal play. Some other
winning openings allow the defender to delay defeat until ply 15.
