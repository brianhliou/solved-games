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

Strongly solved. Lasker Morris, invented by chess world champion Emanuel Lasker (described in his 1931 book "Brettspiele der Völker"), is a Nine Men's Morris variant: there are no separate placement and movement phases, so on any move a player may either place a new stone from hand or slide one already on the board, in arbitrary order. Lasker proposed 9 or 10 stones in hand; the two solvers chose differently. Peter Stahlhacke (FSU Jena, May 2003) built a complete DTW (depth-to-win) database of all 136,476,472,674 positions using retrograde analysis — one byte per position holding the number of full moves until White-to-move can force a win (0 = draw or loss), ~136 GB across 3600 subspace files. The initial position is a draw under optimal play. The deepest forced win in the database is "Win in 171" (full moves). Stahlhacke also reports 51.47% of all positions are won for White-to-move (vs 46.55% for Nine Men's Morris), which he reads as Lasker Morris being a sharper, less drawish game than its parent. state_space here is Stahlhacke's exact database cardinality (reachable positions under his ruleset, 10 men per player); it is a full tablebase (a value for every reachable position), which is what makes this a STRONG solution rather than merely weak. (Per the primary PDF, Stahlhacke's 136,476,472,674-position database is the TEN-men variant; an earlier draft of this record mis-stated it as nine men.) Gévay & Danner (arXiv:1408.0032, 2014; published IEEE Trans. on Computational Intelligence and AI in Games, 2016) independently re-solved the game with a multi-valued retrograde analysis, again finding the start a draw, and went further: they computed ULTRA-strong solutions (which beat the game-theoretic value against a fallible opponent by subclassifying draw positions) and EXTENDED strong solutions over alternative starting stone counts. They note their Lasker Morris statistics differ from Stahlhacke's because of other rule/implementation differences (both solve the ten-men variant). Two independent primary confirmations of the draw result.
