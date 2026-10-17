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

Six men's morris is played on the two-ring (16-point) board — the nine men's morris board with its outer square removed — with 6 men per side and no diagonals. Standard capture rules: forming a mill (three in a line) removes one opponent man (one not itself in a mill, unless all are); a player loses when reduced below 3 men or left with no legal move. This solve uses the standard ruleset with NO flying (a man reduced to 3 is not granted free movement). Small rule choices can change perfect play (cf. Gasser's rule-variations work on nine men's morris), so the result is stated for this ruleset.
RESULT — DRAW, strongly solved. The game-solver engine computed the game-theoretic value of every one of the 42,372,745 reachable positions by retrograde analysis; the initial position is a draw. This fits the morris family: the diagonal-free morrises (Nine Men's, Lasker) are draws, and only Morabaraba — which adds diagonal mills — is a first-player win.
PRIOR ART — six men's morris does not appear in the morris-solving literature checked (Gasser 1996; Gévay & Danner 2014, which solved its larger siblings) or in the published work of the main German Mühle community (muehlespieler.de, which teaches the small variants but publishes no solved values). Those sources are not an exhaustive search and a private earlier solve cannot be excluded, so no priority is claimed.
VALIDATION is internal: (1) two independent implementations — bitmask and a cell-array version with a programmatically-derived board — agree exactly on the reachable-state count, the win/loss/draw split, and the draw; (2) the capture rules pass unit tests (mill detection, capture targeting incl. the all-in-mills exception, slide-captures, attrition loss); (3) five men's morris (same board, 5 men) solves to 17,844,721 positions and is also a draw, a consistent data point. There is no smaller solved morris to cross-check against; the external gold-standard would be reproducing nine men's morris's known draw (~10^10 states), which is deferred as a separate, larger build.
