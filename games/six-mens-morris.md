<!-- GENERATED from data/games/six-mens-morris.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Six men's morris

[Morris / mill family](../families/morris.md) · [all families](../README.md#families) · [data](../data/games/six-mens-morris.yaml)

*Also known as: Six men's Merrills, Sechsermühle, Sechs-Männer-Mühle.*

Draw with perfect play. Strongly solved over all 42,372,745 reachable positions (standard ruleset: no flying).

| | |
|---|---|
| Result | Draw |
| Strength | Strong |
| Method | Retrograde analysis, Brute-force enumeration |
| Year | 2026 |
| Solved by | Brian Liou (open-source game-solver engine, 2026) |
| Source | [Liou 2026](https://github.com/brianhliou/game-solver)\* |
| Board | Two concentric squares (16 points) joined by lines at the four side-midpoints; no diagonals. Equivalent to the nine men's morris board with its outer ring removed. 6 men per player. |
| State space | 42,372,745 |
| Evidence | self-archived\* |

\* Self-archived: the result is available only from its authors (a repository, a post, a deposit), not yet refereed, formally verified or reproduced by someone else. The mark comes off when one of those happens. It applies to this repo's own results too.

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| 2026-06-18 | standard rules, no flying | draw over 42,372,745 reachable positions | Strong | Brian Liou | [source](https://github.com/brianhliou/game-solver) |

_Superseded rows stay in the table._

## References

- [Brian Liou — strong solution of six men's morris via the game-solver engine (2026): a full retrograde tablebase over all 42,372,745 reachable positions; the initial position is a draw. Independently re-derived by two implementations with different representations (identical state counts and value); reproducible via `cargo run --bin morris6`.](https://github.com/brianhliou/game-solver)
- [Gasser, Solving Nine Men's Morris (Games of No Chance, 1996) — solves the larger sibling; six men's morris is absent from the morris-solving literature](https://library.msri.org/books/Book29/files/gasser.pdf)
- [Gévay & Danner, Calculating Ultra-Strong and Extended Solutions for Nine Men's Morris, Morabaraba, and Lasker Morris (arXiv:1408.0032) — covers nine/Lasker/Morabaraba; six men's is not treated](https://arxiv.org/abs/1408.0032)

## Resources

**Code**

- [game-solver — generic retrograde-analysis engine (the game-solver repository); six men's morris is a plugin, solved and tested in CI](https://github.com/brianhliou/game-solver)

## Notes

Six men's morris is played on the two-ring, 16-point board, which is the nine
men's morris board without its outer square, with 6 men a side and no
diagonals. Forming a mill (three in a line) removes one opposing man, one not
itself in a mill unless all are. A player loses when reduced below 3 men or
left with no legal move. This solve uses the standard rules with no flying: a
player reduced to 3 men gets no free movement. Small rule choices can change
perfect play (Gasser's work on rule variations in nine men's morris shows
this), so the result holds for this rule set.

The game-solver engine computed the value of all 42,372,745 reachable
positions by retrograde analysis, and the initial position is a draw. That
matches the rest of the family: the morrises without diagonals (Nine Men's,
Lasker) are draws, and Morabaraba, which adds diagonal mills, is a
first-player win.

Six men's morris does not appear in the morris-solving literature checked
(Gasser 1996; Gévay and Danner 2014, who solved its larger siblings) or in the
work of the main German Mühle community, muehlespieler.de, which teaches the
small variants but publishes no solved values. That is not an exhaustive
search, and a private earlier solve cannot be ruled out, so no priority is
claimed.

The checks so far are internal. Two independent implementations, one using
bitmasks and one using a cell array with a board derived programmatically,
agree exactly on the reachable-position count, the win/loss/draw split and the
draw. The capture rules pass unit tests covering mill detection, capture
targeting (including the all-in-mills exception), slide captures and loss by
attrition. Five men's morris, on the same board with 5 men, solves to
17,844,721 positions and is also a draw. There is no smaller solved morris to
check against.
