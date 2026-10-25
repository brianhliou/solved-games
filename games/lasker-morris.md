<!-- GENERATED from data/games/lasker-morris.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Lasker Morris

[Morris / mill family](../families/morris.md) · [all families](../README.md#families) · [data](../data/games/lasker-morris.yaml)

*Also known as: Lasker Mühle, Laskers Mühle, Ten Men's Morris.*

Draw with perfect play — the initial position is a draw if both sides play correctly (White moves first)

| | |
|---|---|
| Result | Draw |
| Strength | Strong |
| Method | Retrograde analysis |
| Year | 2003 |
| Solved by | Peter Stahlhacke (Friedrich-Schiller-Universität Jena); re-confirmed and extended by Gábor E. Gévay & Gábor Danner (2014/2016) |
| Source | [Stahlhacke 2003](https://althofer.de/stahlhacke-lasker-morris-2003.pdf) |
| Board | Nine Men's Morris board (24 points / intersections, no diagonals); 10 men per player (both Stahlhacke's headline 136-billion-position database and Gévay & Danner solve the ten-men variant, per Lasker's "nine or better ten") |
| State space | 136,476,472,674 |
| Distance to result | Maximal win is 171 full moves (the deepest forced win for White-to-move in the database, per Stahlhacke 2003) |

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| 2003 | standard game | draw | Strong | Peter Stahlhacke | [source](https://althofer.de/stahlhacke-lasker-morris-2003.pdf) |

_One row, derived from the record's year, solver and primary source; no fuller history is recorded yet._

## Engines

- [Malom](../pages/engines.md#engine-malom) (solver): perfect play, [source](https://arxiv.org/abs/1408.0032)

## References

- [Peter Stahlhacke, "The Game of Lasker Morris," Tech. Report, FSU Jena, May 2003](https://althofer.de/stahlhacke-lasker-morris-2003.pdf)
- [Gévay & Danner, "Calculating Ultra-Strong and Extended Solutions for Nine Men's Morris, Morabaraba, and Lasker Morris," IEEE Trans. CIAIG (DOI 10.1109/TCIAIG.2015.2420191); arXiv:1408.0032 (2014)](https://arxiv.org/abs/1408.0032)
- [Lasker Morris (Wikipedia)](https://en.wikipedia.org/wiki/Lasker_Morris)

## Resources

**Tablebases**

- [Ultra-strong solution databases for Nine Men's Morris, Morabaraba, and Lasker Morris (Gévay & Danner)](https://www.inf.u-szeged.hu/~danner/mills)

**Write-ups**

- [The Game of Lasker Morris (Stahlhacke 2003, full PDF)](https://althofer.de/stahlhacke-lasker-morris-2003.pdf)

## Notes

Emanuel Lasker, the chess world champion, described this Nine Men's Morris
variant in his 1931 book "Brettspiele der Völker." It has no separate
placement and movement phases: on any move a player may either place a new
stone from hand or slide one already on the board, in any order. Lasker
proposed 9 or, better, 10 stones in hand, and both solutions below use 10.

Peter Stahlhacke (FSU Jena, May 2003) used retrograde analysis to build a
complete depth-to-win database of all 136,476,472,674 positions. Each position
takes one byte, holding the number of full moves until White-to-move can force
a win (0 for a draw or a loss), about 136 GB across 3600 subspace files. A
value for every reachable position makes the solution strong, and the initial
position is a draw.

The deepest forced win in the database is "Win in 171" full moves. Stahlhacke
also reports that 51.47% of all positions are won for White-to-move, against
46.55% in Nine Men's Morris, which he reads as Lasker Morris being a sharper,
less drawish game than its parent.

Gévay and Danner (arXiv:1408.0032, 2014; IEEE Transactions on Computational
Intelligence and AI in Games, 2016) re-solved the game independently with a
multi-valued retrograde analysis and again found the start a draw. They went
further, computing ultra-strong solutions, which subclassify drawn positions
so as to do better than the bare game value against a fallible opponent, and
extended strong solutions for other starting stone counts. Their statistics
differ from Stahlhacke's because of other rule and implementation differences.
