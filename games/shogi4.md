<!-- GENERATED from data/open/shogi4.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Shogi4 (4×4, Oca Studios)

[Shogi variants](../families/shogi.md) · [open problems](../pages/open-problems.md) · [data](../data/open/shogi4.yaml)

<a id="open-shogi4"></a>

## Open problem: Shogi4 (4×4, Oca Studios)

| | |
|---|---|
| Status | Open |
| Solved so far | Reduced-material sibling games only: the largest, two kings plus one of each other piece (2,100,849,024 positions), strongly solved; no value for the full game from the start |
| Next target | Full Shogi4 from the start: about 3×10^13 reachable positions over a dense-rank index of 410,297,064,507,360 slots |
| Barrier | compute, storage: Drops conserve material, so the game graph does not split into smaller endgames and has to be solved as one object. The dense-rank index spans N = 410,297,064,507,360 slots (about 4.1×10^14, against about 3×10^13 reachable positions); at two bits a slot the value table is about 100 TB, or 50 TB after the left-right fold. From the measured 697 ns per edge out of cache on the 2.1-billion-position run, the full solve projects to 130 to 190 core-years, about $10,000 to $15,000 in cloud terms. A sharded external-memory design has been tested against the in-memory solver on closed games (1 to 64 shards) but not run at full scale. |
| Latest result | [Liou 2026](https://brianhliou.com/posts/shogi4/) (2026-06-08)\* |
| Last checked | 2026-10-25 |
| Record | [data/open/shogi4.yaml](../data/open/shogi4.yaml) |

Searches for newer work:

- 2026-06-05: looked for a published solution or academic treatment of Shogi4: Oca Studios' archived pages, BoardGameGeek, Wikipedia's shogi-variant list and the app stores (the shogi4 repo's research/prior-art.md); found none; the only other 4×4 shogi found, TatApp's Shogi 4×4, is a different game with a random setup each game.
- 2026-10-25: looked for web search for a solved 4×4 shogi or a Shogi4 tablebase; found none for Shogi4; the nearest results were IPSJ work on 3×4 shogi and the different Shogi 4×4 app.

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| 2026-06-05 | closed sub-games: 2 kings; 2 kings plus Carp, Fox or Raccoon-dog; 2 kings plus Carp and Fox | all solved (480, 24,480 each and 1,164,704 positions); three independent solvers agree on every value | Strong | Brian Liou | [source](https://github.com/brianhliou/shogi4/blob/b50337016457ee01dba6ce8812ccb9449f69a1a4/research/findings.md) |
| 2026-06-06 | closed sub-game: 2 kings plus one each of Carp, Fox, Raccoon-dog and Tapir | solved: 1,662,776,212 wins, 339,566,116 losses, 98,506,696 draws for the side to move (2,100,849,024 positions) | Strong | Brian Liou | [source](https://github.com/brianhliou/shogi4/blob/b50337016457ee01dba6ce8812ccb9449f69a1a4/README.md) |

_Superseded rows stay in the table._

## References

- [Brian Liou, "Shogi4: Rules Recovered From the APK, 2.1 Billion Positions" (2026-06-08): the recovered rules, the closed sub-game results and the full-solve sizing](https://brianhliou.com/posts/shogi4/) (2026-06-08)
- [shogi4 README: the 2K+Carp+Fox+Raccoon-dog+Tapir run (2,100,849,024 positions, 79.15% / 16.16% / 4.69%) and the dense-rank index](https://github.com/brianhliou/shogi4/blob/b50337016457ee01dba6ce8812ccb9449f69a1a4/README.md) (2026-06-06)
- [shogi4 findings: rules with provenance, the closed sub-game table and the corrected full-solve cost](https://github.com/brianhliou/shogi4/blob/b50337016457ee01dba6ce8812ccb9449f69a1a4/research/findings.md)
- [shogi4 open questions: the starting setup, drop rules and the declared repetition convention (Q1a-Q1e)](https://github.com/brianhliou/shogi4/blob/b50337016457ee01dba6ce8812ccb9449f69a1a4/research/open-questions.md)
- [shogi4 prior art: the 4×4 shogi landscape (Oca's Shogi4, TatApp's different Shogi 4×4)](https://github.com/brianhliou/shogi4/blob/b50337016457ee01dba6ce8812ccb9449f69a1a4/research/prior-art.md)
- [Mistboard, Shogi4 rules: the ruleset recovered from the Android package](https://mistboard.com/rules/shogi4)

\* Self-archived: the result is available only from its authors (a repository, a post, a deposit), not yet refereed, formally verified or reproduced by someone else. The mark comes off when one of those happens. It applies to this repo's own results too.

## Notes

Rules as solved (recovered from the official Android package com.ocastudios.shogi4 and published on Mistboard). A 4×4 board with five pieces a side, each moving one square: a royal (Crane for one player, Pheasant for the other) moving as a king, a Carp (one square forward), a Fox (one square orthogonally), a Raccoon-dog (one square diagonally) and a Tapir (forward or forward-diagonal). Each back row, from the royal's corner, is royal, Fox, Raccoon-dog, Tapir, with the Carp one square ahead of the royal. A captured piece changes sides and may be dropped on any empty square except the opponent's back row; there is no two-pawn, drop-mate or dead-piece rule. A piece reaching the far row must promote (Carp, Tapir and Raccoon-dog to a silver general's moves, Fox to a gold's), and a captured promoted piece reverts. A piece may leap one adjacent ally in a legal move direction to the square beyond; no chains, and enemies cannot be jumped. Capturing the royal wins; there is no check, moving into capture is legal, and there is no king-march win. The app has no repetition rule, so the solver declares one: endless play is a draw (threefold repetition in played games), with no perpetual-check exception. This is the one rule that is the solver's and not Oca's. The solved sub-games are reduced games with fewer pieces on the same board and rules, not positions of the real game: drops conserve material, so the full game never reaches them, and they give no value for Shogi4 from the start. This is the maintainer's own work, available only from the shogi4 repository and the post, so it carries the self-archived mark.
