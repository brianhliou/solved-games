<!-- GENERATED from data/games/nim.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Nim

[Combinatorial game theory](../families/cgt.md) · [all families](../README.md#families) · [data](../data/games/nim.yaml)

*Also known as: Bouton's Nim, Normal-play Nim.*

First player wins whenever the nim-sum (XOR of heap sizes) of the starting position is non-zero, and loses iff it is zero. The classic 3-5-7 start (XOR = 1) is a first-player win; the standard demonstration position is therefore a first-player win.

| | |
|---|---|
| Result | First player wins |
| Strength | Strong |
| Method | Mathematical proof |
| Year | 1901 |
| Solved by | Charles L. Bouton (Harvard University) |
| Source | [Bouton 1901](https://www.jstor.org/stable/1967631) |
| Board | Several heaps (piles) of counters; players alternately remove one or more counters from a single heap. Classic three-heap demonstration uses heaps of 3, 5, 7. |

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| 1901 | standard game | first player wins | Strong | Charles L. Bouton | [source](https://www.jstor.org/stable/1967631) |

_One row, derived from the record's year, solver and primary source; no fuller history is recorded yet._

## References

- [Charles L. Bouton, "Nim, A Game with a Complete Mathematical Theory," Annals of Mathematics (2nd series) 3:35-39, 1901-1902 (JSTOR 1967631)](https://www.jstor.org/stable/1967631)
- [Bouton 1901 original paper (PDF mirror, University of Alberta CGT collection)](https://webdocs.cs.ualberta.ca/~hayward/cgt/asn/bouton1901.pdf)
- [Nim (Wikipedia)](https://en.wikipedia.org/wiki/Nim)

## Notes

Strongly solved in the strongest possible sense: Bouton (1901-1902) gave an exact, closed-form classification of every position, not just the start. A position is a P-position (previous player / second player wins, i.e. a loss for the player to move) if and only if the nim-sum — the bitwise XOR of the heap sizes — equals zero; otherwise it is an N-position (next player / first player wins). The optimal move from any N-position is to take counters so that the resulting nim-sum is zero, which always exists. This is a mathematical proof rather than a tablebase enumeration, but it yields the value and a winning move for ALL (arbitrarily large, arbitrarily many) reachable positions, so it qualifies as a strong solution.
state_space and game_tree are left unset because Nim has no single fixed board: the number of positions is unbounded (it depends on the chosen number and sizes of heaps), so no finite canonical complexity figure applies. The headline result uses normal play (last player to move WINS), which is what Bouton's main theorem covers.
Bouton's paper also treats the misère variant (last player to move LOSES): the optimal strategy is identical to normal play until all remaining heaps have size 1, at which point the player aims to leave an ODD number of size-1 heaps (vs. an even number in normal play). Outcome of misère Nim therefore differs only in endgame parity; the misère 3-5-7 start is also a first-player win.
Nim is foundational to combinatorial game theory: the Sprague-Grundy theorem (R. P. Sprague 1935, P. M. Grundy 1939) generalized Bouton's nim-sum to show that every impartial game under normal play is equivalent to a single Nim heap (its Grundy value / nimber), making Nim the canonical impartial game.
