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
| Year | 1995 |
| Solved by | John Tromp (strong solution, 8-ply WDL database, 1995); independently weakly solved earlier by James D. Allen (Oct 1, 1988) and Victor Allis (Oct 16, 1988) |
| Source | [Tromp 1995](https://tromp.github.io/c4/connect4_thesis.pdf) |
| Board | 7x6 (7 columns wide, 6 rows high), gravity drop |
| State space | 4,531,985,219,092 |
| Distance to result | First player can force the win on or before the 41st move (out of 42) when opening in the center column. |

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| 1995 | standard game | first player wins | Strong | John Tromp | [source](https://tromp.github.io/c4/connect4_thesis.pdf) |

_One row, derived from the record's year, solver and primary source; no fuller history is recorded yet._

## Engines

- [Connect 4 Game Solver](../pages/engines.md#engine-pons-connect4) (solver): perfect play, [source](http://blog.gamesolver.org/)

## References

- [Victor Allis, A Knowledge-based Approach of Connect-Four — The Game is Solved: White Wins (M.Sc. thesis, Vrije Universiteit Amsterdam, Report IR-163, Oct 1988)](https://tromp.github.io/c4/connect4_thesis.pdf)
- [James D. Allen, Expert Play in Connect-Four (1990; original solution announced rec.games.programmer, Oct 1, 1988)](https://tromp.github.io/c4.html)
- [John Tromp, John's Connect Four Playground (brute-force solution + 8-ply database, 1995; full solver)](https://tromp.github.io/c4/c4.html)
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

Standard ruleset is the 7-column x 6-row board with the gravity-drop mechanic (a man falls to the lowest empty square in the chosen column); first player to connect four of their men horizontally, vertically, or diagonally wins; a full board with no line is a draw. The game was solved twice independently in October 1988: James D. Allen announced his solution on rec.games.programmer on Oct 1, 1988, and Victor Allis completed his M.Sc. thesis solution on Oct 16, 1988. Both used knowledge-based / rule-based methods rather than brute force, which was infeasible on 1988 hardware. Allis's program VICTOR is a Shannon C-type strategy engine built on nine provably-correct strategic rules (Claimeven, Baseinverse, Aftereven, Highinverse, etc.) combined with conspiracy-number search, search tables, and depth-first search; this yields a WEAK solution (it proves the value from the standard start and the principal lines, not a value for every reachable position). The game-theoretic value is a first-player win ONLY when White opens in the center (4th) column; opening in the two columns adjacent to center is a draw and opening in either outer column is a second-player win. Allis also proved more general results: Black can at least draw on every 7x(2n) board when White does not start in the middle column, and on any 6x(2n) board. The game was later STRONGLY solved by brute force: John Tromp built an 8-ply win/draw/loss database (Feb 1995, ~40,000 CPU-hours at CWI) and a full solver; modern alpha-beta solvers (e.g. Pascal Pons) and the complete enumeration by Edelkamp & Kissmann (2008) confirm the same result. The headline state-space figure 4,531,985,219,092 is the count of legal reachable positions for 0-42 pieces on the 7x6 board (Tromp / Edelkamp & Kissmann); Allis's thesis gives only a crude upper bound (3^42) and notes that building the database would require storing on the order of 1.6e13 positions at the peak (36-37 men), which is why brute force was deferred. game_tree complexity is commonly cited around 10^21 but no single authoritative exact figure is established, so it is left null.
