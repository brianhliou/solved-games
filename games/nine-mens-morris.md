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

Strong solution: Gasser computed full retrograde-analysis tablebases for every reachable mid- and endgame position, then ran an 18-ply alpha-beta search over the opening phase (which is exactly 18 plies, one for each of the 18 stones placed) using those databases to prove the empty board is a draw. This is a full value-for-every-reachable-position solution, not merely an ultra-weak/weak draw proof.
State-space figures (from the primary paper): a loose upper bound of 3^24 ≈ 2.8 × 10^11 total positions; after removing illegal/unreachable states and collapsing the ~16-fold board symmetry, the mid- and endgame phase contains exactly 7,673,759,269 states (the value recorded above). The databases stored by retrograde analysis comprise "about 10^10 states." game_tree complexity is not given a citable single figure in the source, hence null.
Ruleset/variant notes: Gasser's implementation resolves two debated edge cases — when a move closes two mills simultaneously only one opponent stone may be removed, and a stone in a mill may still be removed if all the opponent's stones are in mills. The paper states it is "unlikely that either of these rule variations affect the value of the game." Repetition of a midgame/endgame position is a draw; a player reduced below three stones, or with no legal move, loses. White moves first.
Attribution/dating: the solution was first announced in Gasser's 1993 ETH Zurich work ("Das Mühlespiel ist unentschieden" / "Nine Men's Morris is a Draw"), developed in the group of Jürg Nievergelt at ETH (Thomas Lincke's 1994 diploma thesis also worked on perfect Nine Men's Morris play). The canonical, widely-cited write-up is Gasser's 1996 "Solving Nine Men's Morris." year=1993 reflects the original solution; 1996 is the journal/book publication.
Reconfirmation: Gévay & Danner (2014 arXiv, IEEE TCIAIG 2016) independently recomputed the solution, calling the draw "well-known," and extended it to ultra-strong and extended solutions for Nine Men's Morris, Lasker Morris, and Morabaraba.
