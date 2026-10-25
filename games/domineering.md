<!-- GENERATED from data/games/domineering.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Domineering

[Combinatorial game theory](../families/cgt.md) · [all families](../README.md#families) · [data](../data/games/domineering.yaml)

*Also known as: Crosscram, Stop-Gate, Dominoes (Berlekamp-Conway-Guy).*

First player (the player to move) wins on 11x11 (and on 2x2, 3x3, 4x4, 6x6, 7x7, 8x8, 9x9, 10x10); 1x1 and 5x5 are second-player wins.

| | |
|---|---|
| Result | First player wins |
| Strength | Weak |
| Method | Alpha-beta + DB, Mathematical proof |
| Year | 2016 |
| Solved by | Jos W. H. M. Uiterwijk (11x11, program MUDoS); earlier instances by Breuker, Uiterwijk & van den Herik (8x8, 2000), Nathan Bullock (10x10, 2002); rectangular families by Lachmann, Moore & Rapaport |
| Source | [Uiterwijk 2016](https://arxiv.org/abs/1602.05404) |
| Board | Square and rectangular grids; headline result is 11x11. Solved instances range from 1x1 up to 11x11 squares plus many m x n rectangles. |
| Game tree | 259,689,994,008 |
| Distance to result | Up to 60 plies on 11x11 (a full 11x11 board holds at most 60 dominoes); exact principal-variation length not published as a single figure. |

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| 2016 | standard game | first player wins | Weak | Jos W. H. M. Uiterwijk | [source](https://arxiv.org/abs/1602.05404) |

_One row, derived from the record's year, solver and primary source; no fuller history is recorded yet._

## References

- [11 x 11 Domineering Is Solved: The First Player Wins (J. W. H. M. Uiterwijk, Computers and Games 2016 / arXiv:1602.05404)](https://arxiv.org/abs/1602.05404)
- [Solving 8x8 Domineering (D. M. Breuker, J. W. H. M. Uiterwijk, H. J. van den Herik, Theoretical Computer Science 230 (2000) 195-206)](https://research.tilburguniversity.edu/en/publications/solving-8x8-domineering-the-first-computer-olympiad)
- [Domineering: Solving Large Combinatorial Search Spaces (N. Bullock, MSc thesis, University of Alberta, 2002 — 10x10 solved)](https://webdocs.cs.ualberta.ca/~games/domineering/)
- [Who Wins Domineering on Rectangular Boards? (M. Lachmann, C. Moore, I. Rapaport, MSRI / More Games of No Chance, 2002)](https://www.researchgate.net/publication/2358389_Who_Wins_Domineering_on_Rectangular_Boards)
- [Domineering — Wikipedia (secondary; consolidated table of solved sizes)](https://en.wikipedia.org/wiki/Domineering)

## Resources

**Code**

- <https://webdocs.cs.ualberta.ca/~games/domineering/>

**Write-ups**

- <https://en.wikipedia.org/wiki/Domineering>

## Notes

Domineering was invented by Göran Andersson and popularized by Martin Gardner
(1974) and Berlekamp, Conway and Guy's "Winning Ways." It is a partizan
combinatorial game: Vertical (Left) places 2x1 dominoes upright and Horizontal
(Right) places 1x2 dominoes flat on a grid, and the player unable to move
loses.

Jos Uiterwijk solved 11x11 in 2016 with his program MUDoS: the player who
moves first wins, whether that is Vertical or Horizontal. The proof searched
259,689,994,008 nodes over roughly half a year on a single desktop. MUDoS
combines alpha-beta search with large transposition tables, endgame databases,
and move ordering and bounds from combinatorial game theory. It also re-solved
boards up to 10x10 far faster and settled several rectangular boards that had
been open.

The solution is weak: a winner and a concrete winning strategy from the empty
board, with no table of combinatorial values for every reachable 11x11
position. Small boards and many m x n cases do have full value analyses, but
the large square solutions are search proofs.

The smaller square boards are solved too: 1x1 and 5x5 are second-player wins,
and 2x2, 3x3, 4x4, 6x6, 7x7, 8x8, 9x9 and 10x10 are first-player wins. 8x8 was
solved by Breuker, Uiterwijk and van den Herik (2000, alpha-beta with
transposition tables, Theoretical Computer Science 230:195-206), 9x9 by the
same group shortly after with an improved program, and 10x10 by Nathan Bullock
(2002 MSc thesis, University of Alberta).

For rectangles, Lachmann, Moore and Rapaport ("Who Wins Domineering on
Rectangular Boards?", More Games of No Chance, 2002) gave a mathematical
proof, computable in polynomial time, of the winner and a winning strategy for
all n when m is in {1,2,3,4,5,7,9,11}. For example, every 2k x n board with n
= 3, 5, 7, 9 or 11 is a win for Vertical, and various m x 2k boards are wins
for Horizontal.
