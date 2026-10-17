<!-- GENERATED from data/games/wythoff-nim.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Wythoff's game

[Combinatorial game theory](../families/cgt.md) · [all families](../README.md#families) · [data](../data/games/wythoff-nim.yaml)

*Also known as: Wythoff Nim, Wythoff's Nim, tsyan-shidzi (choosing/picking stones), jiǎn shízǐ (捡石子).*

First player wins from any starting position not on the golden-ratio P-position diagonal; the standard non-trivial start is a first-player (N-position) win

| | |
|---|---|
| Result | First player wins |
| Strength | Strong |
| Method | Mathematical proof |
| Year | 1907 |
| Solved by | Willem Abraham Wythoff |
| Source | [Wythoff 1907](https://www.scirp.org/reference/referencespapers?referenceid=59121) |
| Board | Two heaps of counters (unbounded, non-negative integer sizes) |
| Distance to result | Game ends in finitely many moves; no fixed ply count (depends on heap sizes), but the full P-position structure is known in closed form for all positions |

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| 1907 | standard game | first player wins | Strong | Willem Abraham Wythoff | [source](https://www.scirp.org/reference/referencespapers?referenceid=59121) |

_One row, derived from the record's year, solver and primary source; no fuller history is recorded yet._

## References

- [W. A. Wythoff, "A modification of the game of Nim," Nieuw Archief voor Wiskunde, 2nd ser., vol. 7(2)/8, pp. 199-202, 1907/1909](https://www.scirp.org/reference/referencespapers?referenceid=59121)
- [Wythoff's Game — Wolfram MathWorld](https://mathworld.wolfram.com/WythoffsGame.html)
- [Wythoff's game — Wikipedia](https://en.wikipedia.org/wiki/Wythoff's_game)
- [Winning Wythoff's game — Chalkdust Magazine](https://chalkdustmagazine.com/features/winning-wythoffs-game/)

## Resources

**Write-ups**

- <https://en.wikipedia.org/wiki/Wythoff's_game>

## Notes

Wythoff's game is a two-player impartial combinatorial game (normal play: last player to take a counter wins). From two heaps, a player removes any positive number of counters from one heap, or an equal positive number from both heaps. Wythoff (1907) gave a complete closed-form solution: the cold/losing P-positions (a loss for the player to move) are exactly the pairs (n_k, m_k) = (floor(k*phi), floor(k*phi^2)) = (floor(k*phi), floor(k*phi)+k) for k >= 0, where phi = (1+sqrt5)/2 is the golden ratio. These two coordinate sequences are complementary Beatty sequences (since 1/phi + 1/phi^2 = 1): (0,0),(1,2),(3,5),(4,7),(6,10),(8,13),... Every other position is an N-position (a win for the player to move), so the FIRST player wins from any non-P start; the optimal strategy is to move to a reachable P-position. Because the result is a value/strategy for EVERY reachable position (a full closed-form "tablebase"), not merely the initial position, this is a STRONG solution. The proof is mathematical (induction establishing the P/N partition), not a computer search. State-space and game-tree complexity are unbounded (heaps are arbitrarily large integers), so no finite figure applies. Historical note: the game predates Wythoff under the Chinese name tsyan-shidzi / jiǎn shízǐ ("choosing/picking stones"), per Martin Gardner; Wythoff is credited with the first published mathematical analysis. Many later papers analyze variants (Blocking Wythoff Nim, generalized/diagonal Wythoff Nim, queen-reflection modifications), but the classical game's headline solution is Wythoff 1907.
