<!-- GENERATED from data/games/connect-four.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Connect Four

[Alignment & m,n,k games](../families/alignment.md) · [all families](../README.md#families) · [data](../data/games/connect-four.yaml)

*Also known as: Four in a Row, Four-in-a-Line, Plot Four, Find Four, Captain's Mistress, Gravitrips.*

First player (White / X) wins with perfect play, but only by opening in the center column; opening adjacent to center draws, and opening in an outer column loses.

| | |
|---|---|
| Result | First player wins |
| Strength | Strong |
| Method | Brute-force enumeration, Retrograde analysis, Knowledge-based, Conspiracy-number search |
| Year | 1993 |
| Solved by | John Tromp (strong solution, 8-ply WDL database, documented by 1993); independently weakly solved earlier by James D. Allen (Oct 1, 1988) and Victor Allis (Oct 16, 1988) |
| Source | [Tromp 1993](https://tromp.github.io/c4/connect4_thesis.pdf) |
| Board | 7x6 (7 columns wide, 6 rows high), gravity drop |
| State space | 4,531,985,219,092 |
| Distance to result | First player can force the win on or before the 41st move (out of 42) when opening in the center column. |

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| 1993 | standard game | first player wins | Strong | John Tromp | [source](https://tromp.github.io/c4/connect4_thesis.pdf) |

_One row, derived from the record's year, solver and primary source; no fuller history is recorded yet._

## Engines

- [Connect 4 Game Solver](../pages/engines.md#engine-pons-connect4) (solver): perfect play, [source](http://blog.gamesolver.org/)

## References

- [Victor Allis, A Knowledge-based Approach of Connect-Four — The Game is Solved: White Wins (M.Sc. thesis, Vrije Universiteit Amsterdam, Report IR-163, Oct 1988)](https://tromp.github.io/c4/connect4_thesis.pdf)
- [James D. Allen, Expert Play in Connect-Four (1990; original solution announced rec.games.programmer, Oct 1, 1988)](https://tromp.github.io/c4.html)
- [John Tromp, John's Connect Four Playground (brute-force solution + 8-ply database; full solver)](https://tromp.github.io/c4/c4.html)
- [Victor Allis, Searching for Solutions in Games and Artificial Intelligence (Ph.D. thesis, 1994), §6.3.2, citing Tromp 1993](https://cris.maastrichtuniversity.nl/ws/files/588458/guid-36b5cf0a-cf06-4602-afdb-1af04d65c23b-ASSET1.0.pdf)
- [John Tromp, Connect-4 dataset (UCI Machine Learning Repository, 1995 release)](https://archive.ics.uci.edu/dataset/26/connect+4)
- [Edelkamp & Kissmann, Symbolic Classification of General Two-Player Games (2008), §2 and §6](https://fai.cs.uni-saarland.de/kissmann/publications/ki08-ggpsolver.pdf)
- [Van den Herik, Uiterwijk & van Rijswijck, Games Solved: Now and in the Future (2002), Table 6](https://web.mit.edu/6.034/wwwbob/GamesSolved.pdf)
- [Connect Four — Wikipedia](https://en.wikipedia.org/wiki/Connect_Four)
- [Connect Four — Chessprogramming wiki](https://www.chessprogramming.org/Connect_Four)

## Resources

**Code**

- <https://github.com/PascalPons/connect4>

**Explorers**

- <https://connect4.gamesolver.org/>

**Write-ups**

- <https://tromp.github.io/c4/connect4_thesis.pdf>

## Notes

Connect Four is played on a board 7 columns wide and 6 rows high. A man
dropped into a column falls to the lowest empty square, the first player to
connect four men horizontally, vertically or diagonally wins, and a full board
with no line is a draw. The first player wins only by opening in the centre
(4th) column. Opening in either of the two columns next to the centre draws,
and opening in any of the four outer columns loses.

The game was solved twice, independently, in October 1988. James D. Allen
announced his solution on rec.games.programmer on Oct 1, 1988, and Victor
Allis announced his independent solution on Oct 16, 1988. Allen used
brute-force search; Allis combined proved strategic rules with search in
his M.Sc. thesis.

Allis's program VICTOR is a Shannon C-type strategy engine built on nine
strategic rules proved correct (Claimeven, Baseinverse, Aftereven, Highinverse
and others), combined with conspiracy-number search, search tables and
depth-first search. It proves the value of the standard start and its main
lines, which makes it a weak solution. Allis also proved that Black can at
least draw on every 7x(2n) board when White does not start in the middle
column, and on any 6x(2n) board.

John Tromp later solved the game strongly using an 8-ply win/draw/loss
database and a full solver. Allis's 1994 Ph.D. thesis documents the completed
database work, citing Tromp (1993), and reports about 40,000 CPU-hours.
Tromp's account places the computation on CWI workstations. The UCI dataset
release dates to 1995. Edelkamp and Kissmann (2008) enumerated the reachable
positions, but did not finish classifying all their values.

The board has 4,531,985,219,092 legal reachable positions with 0-42 pieces.
Allis's M.Sc. thesis gives a crude upper bound of 3^42 and a tighter bound
of 70,728,639,995,483. Its estimate of about 1.6 x 10^13 positions at 36–37
men includes unreachable positions. The 2002 "Games Solved" survey estimates
game-tree complexity at about 10^21; no exact count is given.
