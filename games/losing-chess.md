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

Losing chess (antichess) uses the standard 8x8 board and starting position.
Captures are compulsory, with the side to move choosing among several, the
king is an ordinary piece (no check or checkmate, and pawns may promote to
king), and there is no castling. A player wins by losing all their pieces or
by being stalemated, under the stalemate rules.

Mark Watkins solved it weakly in October 2016 (announced Oct 10, 2016;
peer-reviewed in ICGA Journal 39/2, 2017): 1.e3 wins for White against any
reply. The proof is a proof tree for 1.e3, with no tablebase giving the value
of every reachable position. Twelve of Black's 20 replies had been known to
lose for about two decades, and Ben Nye solved a 13th in 2003. Watkins, with
contributions from Klaas Steenhuis, Catalin Francu (Nilatac), Stan Goldovski,
Fabrice Liardet and others, closed the remaining lines; the last was 1.e3 b6,
the Liardet Defense.

The method combines proof-number search (best-first pn-search as an evaluation
function feeding an upper-level proof tree) with custom losing-chess endgame
tablebases (4-, 5- and 6-unit, distance-to-conversion, built by retrograde
analysis). The final proof graph has about 863,301,867 nodes (about 900
million positions) and about 66 million transposition pointers. Watkins
estimates roughly 10^16 positions searched over the project, about 100x the
checkers effort. He gives no complexity figure for the game itself, citing
orthodox chess's ~10^40 legal positions and ~10^83 game-tree complexity as a
loose comparison, adjusted up or down for forced captures and non-royal kings.

The result holds under the "joint FICS/International Rules" for stalemate,
where a win under the joint rules is a win under both the FICS and
International conventions. It does not cover the vinciperdi rules, where a
stalemate with pieces left is a draw. The proof's upper-level tree reaches 94
ply, with the tablebases adding more. In 2021 "tolius" (lichess) cut the
longest forced win to under 80 moves with the 50-move rule applied (1.e3 c5
mates in #79).

Klaas Steenhuis and Lajeunesse carried the proofs over to FICS rules and
verified them with an independent searcher, and the tolius refinement
re-derived and improved the result with different tooling.
