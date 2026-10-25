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

Wythoff's game is an impartial game for two players on two heaps of counters.
A move takes any positive number of counters from one heap, or the same
positive number from both. Under normal play the player who takes the last
counter wins.

Wythoff (1907) solved it in closed form. The losing positions for the player
to move (P-positions) are exactly the pairs `(n_k, m_k) = (floor(k·phi),
floor(k·phi^2)) = (floor(k·phi), floor(k·phi)+k)` for k >= 0, where phi =
(1+sqrt5)/2 is the golden ratio: (0,0), (1,2), (3,5), (4,7), (6,10), (8,13),
and so on. The two coordinate sequences are complementary Beatty sequences,
since 1/phi + 1/phi^2 = 1. From any other position the player to move wins by
moving to a P-position.

The formula gives the value of every position, so the solution is strong, and
the proof is mathematical (an induction that establishes the split into
winning and losing positions) with no computer search. Because the heaps can
be any size, the game has no finite state-space or game-tree figure.

Martin Gardner reports that the game is older than Wythoff, played in China as
tsyan-shidzi or jiǎn shízǐ ("choosing/picking stones"); Wythoff is credited
with the first published mathematical analysis. Many later papers study
variants: Blocking Wythoff Nim, generalized or diagonal Wythoff Nim, and
queen-reflection modifications.
