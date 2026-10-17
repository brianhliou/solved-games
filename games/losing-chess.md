<!-- GENERATED from data/games/losing-chess.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Losing chess

[Chess & chess variants](../families/chess.md) · [all families](../README.md#families) · [data](../data/games/losing-chess.yaml)

*Also known as: Antichess, Suicide chess, Giveaway chess, Killer chess, Take-all chess, Capture chess.*

White (first player) wins; 1.e3 forces a win against every Black defense

| | |
|---|---|
| Result | First player wins |
| Strength | Weak |
| Method | Proof-number search, Retrograde analysis, Alpha-beta + DB |
| Year | 2016 |
| Solved by | Mark Watkins (University of Sydney, School of Mathematics and Statistics) |
| Source | [Watkins 2016](https://content.iospress.com/articles/icga-journal/icg170017) |
| Board | Standard 8x8 chessboard, orthodox starting position; captures compulsory, non-royal king, no castling, promotion to king allowed |
| Distance to result | Watkins' proof has a maximal upper-level (best-first) tree depth of 94 ply, with endgame tablebases adding further plies; the hardest defenses originally ran very deep (e.g. 1.e3 e6 ~197 moves). A later refinement (tolius, 2021) shows White wins in under 80 moves with the 50-move rule applied (e.g. 1.e3 c5 mates in #79). |

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| 2016 | standard game | first player wins | Weak | Mark Watkins | [source](https://content.iospress.com/articles/icga-journal/icg170017) |

_One row, derived from the record's year, solver and primary source; no fuller history is recorded yet._

## References

- [Losing Chess: 1. e3 Wins for White — Mark Watkins, ICGA Journal 39(2): 123–125 (2017), DOI 10.3233/ICG-170017](https://content.iospress.com/articles/icga-journal/icg170017)
- [Losing Chess: 1. e3 wins for White (full expanded writeup PDF, Watkins, Univ. of Sydney)](https://magma.maths.usyd.edu.au/~watkins/LOSING_CHESS/LCsolved.pdf)
- [Losing Chess project page (proof trees, tablebases, source code) — Mark Watkins](https://magma.maths.usyd.edu.au/~watkins/LOSING_CHESS/)
- [Losing Chess — Chessprogramming wiki (secondary)](https://www.chessprogramming.org/Losing_Chess)
- [Losing chess — Wikipedia (secondary)](https://en.wikipedia.org/wiki/Losing_chess)
- [Antichess: 1. e3 Wins for White in #79 — tolius, lichess blog (secondary refinement)](https://lichess.org/@/tolius/blog/antichess-1-e3-wins-for-white-in-79/kmAYeHSC)

## Resources

**Tablebases**

- <https://magma.maths.usyd.edu.au/~watkins/LOSING_CHESS/>

**Code**

- <https://github.com/NotAnOctopus/suicide-chess>

**Write-ups**

- <https://magma.maths.usyd.edu.au/~watkins/LOSING_CHESS/LCsolved.pdf>

## Notes

Losing chess (antichess) on the standard 8x8 board with the orthodox starting position: captures are compulsory (the side to move chooses among multiple captures), the king is a non-royal piece (no check/checkmate, promotion to king is allowed), and castling is illegal. A player wins by losing all their pieces or being stalemated (under the stalemate ruleset). Weakly solved by Mark Watkins in October 2016 (announced Oct 10, 2016; peer-reviewed in ICGA Journal 39/2, 2017): the first move 1.e3 is a forced win for White against any Black reply. This is a WEAK solution — a winning strategy is proven from the start position (a proof tree for 1.e3), NOT a full tablebase giving the value of every reachable position, so it is not "strong." Twelve of Black's 20 replies had been known lost for ~two decades; Ben Nye solved a 13th in 2003; Watkins (with contributions from Klaas Steenhuis, Catalin Francu/Nilatac, Stan Goldovski, Fabrice Liardet and others) closed the remaining lines, the last being 1.e3 b6 (Liardet Defense). Method: proof-number search (best-first pn-search as an evaluation function feeding an upper-level proof tree) combined with custom Losing Chess endgame tablebases (4-, 5-, and 6-unit, distance-to-conversion metric, built via retrograde analysis). The final proof tree (graph) has ~863,301,867 nodes (~900 million positions) with ~66 million transposition pointers; Watkins estimates roughly 10^16 total positions searched over the project (~100x the checkers effort). Result holds under "joint FICS/International Rules" for stalemate (a win under joint rules is a win under both FICS and International stalemate conventions); does NOT cover the vinciperdi ruleset (stalemate-with-pieces is a draw there). Watkins gives no single citable state-space or game-tree complexity figure for the full game (he notes orthodox-chess estimates of ~10^40 legal positions and ~10^83 game-tree complexity as a loose comparison, adjusted up/down by the forced-capture rule and non-royal kings), so both complexity fields are left null. Distance: original proof had a maximal upper-level tree depth of 94 ply (tablebases add more), with some defenses running very deep; a 2021 refinement by "tolius" (lichess) reduced the longest forced win to under 80 moves with the 50-move rule applied (1.e3 c5 mates in #79). Independent confirmation: Klaas Steenhuis and Lajeunesse transferred/verified proofs to FICS rules with an independent searcher, and the later tolius refinement re-derived and improved the result with different tooling.
