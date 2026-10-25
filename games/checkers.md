<!-- GENERATED from data/games/checkers.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Checkers (English draughts)

[Capture & board control](../families/capture.md) · [all families](../README.md#families) · [data](../data/games/checkers.yaml)

*Also known as: English draughts, American checkers, Straight checkers.*

Draw with perfect play by both sides (Black to play and draw from the standard opening)

| | |
|---|---|
| Result | Draw |
| Strength | Weak |
| Method | Retrograde analysis, Proof-number search, Alpha-beta + DB |
| Year | 2007 |
| Solved by | Jonathan Schaeffer, Neil Burch, Yngvi Björnsson, Akihiro Kishimoto, Martin Müller, Robert Lake, Paul Lu, Steve Sutphen (University of Alberta; Chinook project) |
| Source | [Schaeffer et al. 2007](https://www.science.org/doi/10.1126/science.1144079) |
| Board | 8x8 board, pieces on dark squares only (32 playable squares) |
| State space | ≈ 5.01 × 10²⁰ |

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| 2007 | standard game | draw | Weak | Jonathan Schaeffer, Neil Burch, Yngvi Björnsson, Akihiro Kishimoto, Martin Müller, Robert Lake, Paul Lu, Steve Sutphen | [source](https://www.science.org/doi/10.1126/science.1144079) |

_One row, derived from the record's year, solver and primary source; no fuller history is recorded yet._

## References

- [Checkers Is Solved — J. Schaeffer et al., Science 317, 1518–1522 (2007)](https://www.science.org/doi/10.1126/science.1144079)
- [Checkers Is Solved (full text PDF, Science 2007)](https://www.cs.mcgill.ca/~dprecup/courses/AI/Materials/checkers_is_solved.pdf)
- [Solving Checkers — J. Schaeffer et al., IJCAI 2005 (earlier milestone: White Doctor opening proven a draw)](https://www.ijcai.org/Proceedings/05/Papers/0515.pdf)
- [Van den Herik, Uiterwijk & van Rijswijck, Games Solved: Now and in the Future (2002), Table 6](https://web.mit.edu/6.034/wwwbob/GamesSolved.pdf)
- [Checkers, Solved! — IEEE Spectrum (secondary, July 2007)](https://spectrum.ieee.org/checkers-solved)

## Resources

**Write-ups**

- <https://www.cs.mcgill.ca/~dprecup/courses/AI/Materials/checkers_is_solved.pdf>

## Notes

English draughts is played on the dark squares of an 8x8 board (32 playable
squares) with 12 pieces a side, and captures are forced. The Chinook team at
the University of Alberta worked on it from 1989 and finished in 2007, after
about 18 years: with perfect play by both sides the game is a draw.

The solution is weak. It proves a drawing strategy from the standard opening
without storing a value for every reachable position. It has two parts.
Retrograde analysis built endgame databases of 3.9 x 10^13 positions covering
every position with 10 or fewer pieces, and that subset is strongly solved. A
forward best-first search, with proof-number search at the top and Chinook's
alpha-beta search (nominal depth 17-23 ply) below, called into those
databases.

Checkers has 500,995,484,682,338,672,639 possible piece configurations
(about 5 x 10^20), including unreachable placements. The proof used about
10^14 forward-search computations, with about 10^7 positions in the stored
proof tree; these are measures of search work and storage. The 2002 "Games
Solved" survey estimates game-tree complexity at about 10^31.

Nineteen opening positions suffice to prove the standard-start draw. Table 2
gives seven proven draws, one loss for Black and eleven bounds of draw or
loss for Black. The longest manager-level line analyzed was 154 plies;
further solver search and database continuations follow it.

The Science paper reports internal consistency checks on the computations.
It separately cites independent research finding a 10-piece database
position requiring 279 plies to demonstrate a forced win, a lower bound on
the longest database win length.
