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

Bouton (1901-1902) classified every Nim position in closed form. A position is
a loss for the player to move (a P-position) exactly when the nim-sum, the
bitwise XOR of the heap sizes, is zero; otherwise the player to move wins (an
N-position). From any N-position there is always a move that makes the nim-sum
zero, and that move is the winning one.

The proof is mathematical, with no tablebase, but it gives the value and a
winning move for every position, with any number of heaps of any size, so the
solution is strong. Since the heaps can be as large and as many as you like,
the number of positions is unbounded and there is no finite complexity figure.

The result above is for normal play, where the last player to move wins; that
is what Bouton's main theorem covers. His paper also treats misère Nim, where
the last player to move loses. The strategy is the same until every remaining
heap has size 1; then the player aims to leave an odd number of size-1 heaps,
where normal play leaves an even number. The misère 3-5-7 start is also a
first-player win.

The Sprague-Grundy theorem (R. P. Sprague 1935, P. M. Grundy 1939) generalized
the nim-sum: every impartial game under normal play is equivalent to a single
Nim heap, its Grundy value or nimber. That makes Nim the canonical impartial
game of combinatorial game theory.
