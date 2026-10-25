<!-- GENERATED from data/games/hex-7x7.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Hex (7×7)

[Connection games](../families/connection.md) · [all families](../README.md#families) · [data](../data/games/hex-7x7.yaml)

*Also known as: Nash, John, Con-Tac-Tix, Polygon.*

First player wins with perfect play. All 49 opening moves are resolved: central openings (and the obtuse-corner short diagonal) win for the first player, and a band of 14 losing openings clusters near the two acute corners (Yang et al. derived them by symmetry), so the first player wins by opening on a central cell (e.g. the centre cell d4).

| | |
|---|---|
| Result | First player wins |
| Strength | Weak |
| Method | Strategy-stealing, Knowledge-based, Depth-first PNS, Threat-space search |
| Year | 2003 |
| Solved by | Jing Yang, Simon Liao & Mirek Pawlak (first explicit hand strategy, 2001–2002); first full computer solution of all 49 openings by Ryan B. Hayward, Yngvi Björnsson, Michael Johanson, Morgan Kan, Nathan Po & Jack van Rijswijck (University of Alberta, 2003) |
| Source | [Yang et al. 2003](https://webdocs.cs.ualberta.ca/~hayward/papers/solving7x7hex.pdf) |
| Board | 7×7 rhombus of hexagonal cells (49 cells); each player owns two opposite sides, first player connects their pair; no-swap (no pie rule) ruleset |
| Distance to result | Longest line of play is given for each of the 49 openings; the hardest single opening took ~110 hours of search, ~615 hours total for all 49 (single-processor AMD Athlon, 2003). No single uniform ply count — proof depth varies by opening. |

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| 2003 | 7×7 | first player wins | Weak | Jing Yang, Simon Liao & Mirek Pawlak | [source](https://webdocs.cs.ualberta.ca/~hayward/papers/solving7x7hex.pdf) |

_One row, derived from the record's year, solver and primary source; no fuller history is recorded yet._

## Engines

- [MoHex 2.0 and Wolve (Benzene)](../pages/engines.md#engine-mohex) (engine): competition result, [source](https://webdocs.cs.ualberta.ca/~hayward/hex/)

## References

- [R. Hayward, Y. Björnsson, M. Johanson, M. Kan, N. Po, J. van Rijswijck, "Solving 7×7 Hex: Virtual Connections and Game-State Reduction", Advances in Computer Games 10 (ACG10), IFIP vol. 263, pp. 261–278, Kluwer 2004 (presented 2003) — first computer solution of all 49 openings](https://webdocs.cs.ualberta.ca/~hayward/papers/solving7x7hex.pdf)
- [R. Hayward, Y. Björnsson, M. Johanson, M. Kan, N. Po, J. van Rijswijck, "Solving 7×7 Hex with domination, fill-in, and virtual connections", Theoretical Computer Science 349(2):123–139, 2005 (journal version, DOI 10.1016/j.tcs.2005.09.042)](https://www.sciencedirect.com/science/article/pii/S0304397505005918)
- [Jing Yang, Simon Liao & Mirek Pawlak, "New Winning and Losing Positions for 7×7 Hex" (CG 2002), LNCS 2883, Springer — extends the hand decomposition solution](https://webdocs.cs.ualberta.ca/~hayward/papers/yang7b.pdf)
- [Jing Yang, Simon Liao & Mirek Pawlak, "A Decomposition Method for Finding Solution in Game Hex 7×7" (ADCOG21, 2001) / "A New Solution for 7×7 Hex Game" — original explicit first-player hand strategy](https://www.researchgate.net/publication/228970285_A_New_Solution_for_7x7_Hex_Game)
- [Hex (board game) — Wikipedia (secondary; summarizes solved sizes 7×7–10×10, the Hex theorem and Nash strategy-stealing)](https://en.wikipedia.org/wiki/Hex_(board_game))

## Resources

**Explorers**

- <https://webdocs.cs.ualberta.ca/~hayward/hex7trees/>

**Write-ups**

- <https://webdocs.cs.ualberta.ca/~hayward/publications.html>

## Notes

On 7×7 Hex the first player wins, and every one of the 49 opening moves has a
known value. Central openings, including the centre cell d4, and the
obtuse-corner short diagonal win for the first player, while the 14 losing
first moves cluster near the two acute corners (Yang et al. derived them by
board symmetry). Each winning strategy is constructive, but no value is stored
for every reachable position, so the solution is weak.

Two separate efforts produced it. Jing Yang, Simon Liao and Mirek Pawlak gave
explicit hand solutions: a decomposition-method first-player winning strategy
(ADCOG21 2001; "A New Solution for 7×7 Hex Game," 2002) and "New Winning and
Losing Positions for 7×7 Hex" (CG 2002). Yang's hand proof used ~41 local game
patterns in a ~12-page case analysis. Hayward, Björnsson, Johanson, Kan, Po
and van Rijswijck (University of Alberta) then made the first full computer
solve of all 49 openings, presented at Advances in Computer Games 10 in 2003
(IFIP proceedings with a 2004 imprint) and expanded in Theoretical Computer
Science 349 (2005). Their program independently verified and completed the
result for every opening.

The computer solve is a recursive-descent game-tree search (after Van
Rijswijck) that proves a winning virtual connection for the winner through
connection-composition rules, in the H-search lineage of Anshelevich and
Berge. New move-domination and cell fill-in reductions prune it, along with
mustplay-region narrowing. For each opening the search emits an explicit proof
tree for the winning player, and all 49 trees were published with a tree
viewer at the hex7trees site. Runtime ranged from ~1 minute for the easiest
openings to ~110 hours for the hardest, ~615 hours in total, on a single AMD
Athlon 1800+ (gcc 3.1.1, Slackware Linux) in 2003.

This is the no-swap (no pie rule) game. Under the swap rule the second player
can take over a winning first move, which changes the practical game but
leaves the cell-by-cell opening values unchanged.

Independently of any search, Hex on every n×n board is a first-player win, an
ultra-weak result. John Nash's strategy-stealing argument (c. 1949) combines
with the Hex theorem (Hein 1942, Nash, Gale) that Hex can never be a draw:
exactly one player connects. The argument gives no winning move, and the 7×7
results are the constructive weak solution for this size. Deciding an
arbitrary generalized-Hex position is PSPACE-complete (Even and Tarjan 1976;
Reisch 1981), which is why explicit solving stalls around 9×9–10×10. Larger
sizes followed: 8×8 (Henderson, Arneson and Hayward, IJCAI 2009, all
openings), 9×9 (Pawlewicz and Hayward, 2013, all openings) and, of 10×10, only
the central opening (2013).

The primary paper cites no state-space or game-tree figure for 7×7. Surveys
give 11×11 Hex a state-space complexity of roughly 10^57 and a game-tree
complexity of roughly 10^98, and 7×7 is far smaller.
