<!-- GENERATED from data/open/micro-shogi.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Micro Shogi (4×5)

[Shogi variants](../families/shogi.md) · [open problems](../pages/open-problems.md) · [data](../data/open/micro-shogi.yaml)

<a id="open-micro-shogi"></a>

## Open problem: Micro Shogi (4×5)

| | |
|---|---|
| Status | Open |
| Solved so far | Reduced-material sibling games only: king and pawn a side (457,993 positions) and king, pawn and gold a side (869,287,068 positions), both draws from the start; no value for the full game |
| Next target | Full Micro Shogi (about 5×10^14 reachable positions), after a smaller distributed rehearsal |
| Barrier | compute, storage, memory: Reachable positions from the start are estimated at 3.0×10^14 to 6.2×10^14 (point estimate about 5×10^14). A dense-rank solver must index every arrangement, about 3.9×10^15 slots after the left-right fold, so the working value table is about 1 PB, with about 660 to 1,200 core-years of compute and $40,000 to $70,000 on bare metal. Memory was already the wall on the K+P+G rung: the stored-predecessor solver needed about 60.5 GiB on a 64 GB machine, and a dense-rank rerun that generates predecessors on demand cut that to about 6.86 GiB. |
| Latest result | [Liou 2026](https://brianhliou.com/posts/micro-shogi/) (2026-06-12)\* |
| Last checked | 2026-10-25 |
| Record | [data/open/micro-shogi.yaml](../data/open/micro-shogi.yaml) |

Searches for newer work:

- 2026-10-25: looked for web search for a solution, tablebase or perfect-play result for Micro Shogi; found none; the nearest result was a 2024 estimate of the reachable positions of Minishogi (5×5), which is also unsolved.

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| 2026-06-05 | reduced game: king and pawn a side | draw from the start; 135,804 wins, 2,956 losses, 319,233 draws (457,993 positions), longest mate 29 plies | Strong | Brian Liou | [source](https://github.com/brianhliou/micro-shogi/blob/6225f4a1ff0cd69a50f27154a6b597cfdaeeef63/research/findings.md) |
| 2026-06-11 | reduced game: king, pawn and gold a side | draw from the start; 606,922,331 wins, 142,074,547 losses, 120,290,190 draws (869,287,068 positions), longest mate 155 plies; reproduced by a dense-rank rerun on 2026-06-12 | Strong | Brian Liou | [source](https://brianhliou.com/posts/micro-shogi/) |

_Superseded rows stay in the table._

## References

- [Brian Liou, "Micro Shogi: A Dense-Rank Rerun Cut Memory 8.8×" (2026-06-12): the K+P and K+P+G draws and the full-solve sizing](https://brianhliou.com/posts/micro-shogi/) (2026-06-12)
- [micro-shogi README](https://github.com/brianhliou/micro-shogi/blob/6225f4a1ff0cd69a50f27154a6b597cfdaeeef63/README.md)
- [micro-shogi rules spec: board, setup, capture-flip promotion, unrestricted drops, king-capture terminal and the repetition default](https://github.com/brianhliou/micro-shogi/blob/6225f4a1ff0cd69a50f27154a6b597cfdaeeef63/research/rules.md)
- [micro-shogi findings: the state-space estimate, the calibration runs and the arrangement-basis cost](https://github.com/brianhliou/micro-shogi/blob/6225f4a1ff0cd69a50f27154a6b597cfdaeeef63/research/findings.md)
- [Wikipedia, Micro shogi](https://en.wikipedia.org/wiki/Micro_shogi)

\* Self-archived: the result is available only from its authors (a repository, a post, a deposit), not yet refereed, formally verified or reproduced by someone else. The mark comes off when one of those happens. It applies to this repo's own results too.

## Notes

Rules as solved (the repo's rules spec, from English Wikipedia's Micro shogi and Japanese Wikipedia's 五分摩訶将棋, which agree on every substantive rule). A 4-file by 5-rank board. Each player has King, Gold, Silver, Bishop and Pawn: the home rank reads S G B K with the King in the right corner and the Pawn in front of the King. Pieces move as their shogi namesakes. There is no promotion zone: a non-king piece flips to its reverse whenever it captures, and flips back on its next capture (Gold and Rook, Silver and Lance, Bishop and Tokin, Pawn and Knight); the King never flips. A captured piece goes to the captor's hand and may be dropped on any empty square with either face up; there is no two-pawn rule, no ban on a pawn drop giving mate, and no last-rank restriction, so a dropped piece may have no legal move. The sources give checkmate as the win; the solver uses king capture, which gives the same win and loss values. Neither source states a repetition rule, so positions unresolved after the win/loss fixpoint are draws, with no perpetual-check rule; whether to model orthodox shogi's perpetual-check loss is left open. The solved rungs are reduced games with fewer pieces on the same board and rules, not endgames of the real game, since drops recycle material; they give no value for Micro Shogi from the start. This is the maintainer's own work, available only from the micro-shogi repository and the post, so it carries the self-archived mark.
