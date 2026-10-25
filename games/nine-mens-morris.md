<!-- GENERATED from data/games/nine-mens-morris.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Nine Men's Morris

[Morris / mill family](../families/morris.md) · [all families](../README.md#families) · [data](../data/games/nine-mens-morris.yaml)

*Also known as: Mill, Mills, Merels, Merrills, Mühle, Mühlespiel.*

The initial (empty-board) position is a draw with perfect play; White (first player) cannot force a win.

| | |
|---|---|
| Result | Draw |
| Strength | Strong |
| Method | Retrograde analysis, Alpha-beta + DB |
| Year | 1993 |
| Solved by | Ralph Gasser (ETH Zurich) |
| Source | [Gasser 1993](https://library.slmath.org/books/Book29/files/gasser.pdf) |
| Board | 24-point morris board (three concentric squares joined by midpoint connectors), 9 stones per player |
| State space | 7,673,759,269 |
| Distance to result | Opening is exactly 18 plies deep; an 18-ply alpha-beta search over the opening on top of full mid-/endgame retrograde databases proves the draw. |

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| 1993 | standard game | draw | Strong | Ralph Gasser | [source](https://library.slmath.org/books/Book29/files/gasser.pdf) |

_One row, derived from the record's year, solver and primary source; no fuller history is recorded yet._

## Engines

- [Malom](../pages/engines.md#engine-malom) (solver): perfect play, [source](https://arxiv.org/abs/1408.0032)

## References

- [Ralph Gasser, "Solving Nine Men's Morris", Games of No Chance, MSRI Publications Vol. 29, 1996 (also Computational Intelligence 12(1):24-41)](https://library.slmath.org/books/Book29/files/gasser.pdf)
- [Ralph Gasser, "Harnessing Computational Resources for Efficient Exhaustive Search" (PhD thesis, ETH Zurich, 1995) / "Nine Men's Morris is a Draw" (ETH technical report, 1993)](https://www.research-collection.ethz.ch/handle/20.500.11850/142254)
- [Gévay & Danner, "Calculating Ultra-Strong and Extended Solutions for Nine Men's Morris, Morabaraba, and Lasker Morris", IEEE TCIAIG, 2016 (arXiv:1408.0032) — independent reconfirmation of the draw](https://arxiv.org/abs/1408.0032)
- [Nine Men's Morris — Chessprogramming Wiki (secondary)](https://www.chessprogramming.org/Nine_Men%E2%80%99s_Morris)

## Notes

Gasser built retrograde-analysis databases giving the value of every reachable
midgame and endgame position. The opening, in which the 18 stones are placed,
is exactly 18 plies long, and an 18-ply alpha-beta search over it, probing
those databases, proved that the empty board is a draw. Every reachable
position has a known value, so the solution is strong.

The paper gives a loose upper bound of 3^24 ≈ 2.8 × 10^11 positions. Removing
illegal and unreachable states and folding the board's 16-fold symmetry leaves
exactly 7,673,759,269 states in the midgame and endgame, and the stored
databases hold "about 10^10 states."

Two rules are debated, and Gasser fixed them this way: a move that closes two
mills at once removes only one opposing stone, and a stone in a mill may be
removed when all the opponent's stones are in mills. The paper calls it
"unlikely that either of these rule variations affect the value of the game."
A repeated midgame or endgame position is a draw, a player reduced below three
stones or left with no legal move loses, and White moves first.

Gasser first announced the result in 1993 at ETH Zurich ("Das Mühlespiel ist
unentschieden", or "Nine Men's Morris is a Draw"), working in Jürg
Nievergelt's group; Thomas Lincke's 1994 diploma thesis there also worked on
perfect play. The write-up most often cited is Gasser's 1996 "Solving Nine
Men's Morris."

Gévay and Danner (arXiv 2014, IEEE TCIAIG 2016) recomputed the solution
independently, calling the draw "well-known," and extended it to ultra-strong
and extended solutions for Nine Men's Morris, Lasker Morris and Morabaraba.
