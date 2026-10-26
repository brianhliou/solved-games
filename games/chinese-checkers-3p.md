<!-- GENERATED from data/games/chinese-checkers-3p.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Chinese checkers (3 players, 37-cell star, 3 marbles each)

[Race games](../families/race.md) · [all families](../README.md#families) · [data](../data/games/chinese-checkers-3p.yaml)

*Also known as: Sternhalma (3 players), Three-player Chinese Checkers.*

No forced win. From the start no player can force their own win against the other two; any two players together can force the third to lose; every player can hand the win to either opponent (all six kingmaker relations hold); and no lone player can force a draw. The start is the same on both solved boards, 37 cells with 3 marbles each and 13 cells with 1 marble each. Strongly solved: every position's answer to each of these forcing questions is known.

| | |
|---|---|
| Result | No forced win |
| Players | 3 |
| Strength | Strong |
| Method | Retrograde analysis |
| Year | 2026 |
| Solved by | Brian Liou (chinese-checkers-3p, 2026), boards with 1 and 3 marbles each |
| Source | [Liou 2026](https://github.com/brianhliou/chinese-checkers-3p/blob/61e2e28550546ec15c7a9ee14325dd686704a4dd/README.md)\* |
| Board | Six-pointed star of hexagonal cells with corner side 2: a 19-cell central hexagon plus six 3-cell corners, 37 cells. Three players start on alternating corners, each with 3 marbles filling their own corner, and race to the opposite corner. Also solved: the 13-cell star with corner side 1 (a 7-cell hexagon plus six 1-cell corners), 1 marble each. |
| State space | 14,841,300,390 |
| Evidence | self-archived\* |

\* Self-archived: the result is available only from its authors (a repository, a post, a deposit), not yet refereed, formally verified or reproduced by someone else. The mark comes off when one of those happens. It applies to this repo's own results too.

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| 2026-06-11 | 13 cells, 1 marble each | no forced win (3 players): no solo win from the start, any two force the third out, all six kingmaker relations hold; 1,245 reachable positions, no draws | Strong | Brian Liou | [source](https://github.com/brianhliou/chinese-checkers-3p/releases/tag/tablebase-v1) |
| 2026-06-11 | 37 cells, 3 marbles each | no forced win (3 players): same opening control as the 1-marble board, and no lone player can force a draw; 14,841,300,390 placement-by-turn states | Strong | Brian Liou | [source](https://github.com/brianhliou/chinese-checkers-3p/releases/tag/tablebase-v1) |

_Superseded rows stay in the table._

## References

- [Brian Liou, chinese-checkers-3p README (2026): the start is pure kingmaker; control-type counts over 14,841,300,390 placement-by-turn states](https://github.com/brianhliou/chinese-checkers-3p/blob/61e2e28550546ec15c7a9ee14325dd686704a4dd/README.md)
- [chinese-checkers-3p rules ledger: board geometry, lanes, moves, win, draw by repetition, and the locked edge-case decisions](https://github.com/brianhliou/chinese-checkers-3p/blob/61e2e28550546ec15c7a9ee14325dd686704a4dd/research/rules.md)
- [chinese-checkers-3p solution concept: the battery of two-player forcing questions (solo, enable, pair-out, draw)](https://github.com/brianhliou/chinese-checkers-3p/blob/61e2e28550546ec15c7a9ee14325dd686704a4dd/research/solution-concept.md)
- [Brian Liou, "3-Player Chinese Checkers, Solved" (2026-06-15): both rungs, the opening analysis and the validation](https://brianhliou.com/posts/solving-three-player-chinese-checkers/)
- [Tablebase artifacts v1 (published 2026-06-11): packed tablebases for the 1-marble and 3-marble boards, with manifests](https://github.com/brianhliou/chinese-checkers-3p/releases/tag/tablebase-v1)
- [Nathan R. Sturtevant, "On Strongly Solving Chinese Checkers", Advances in Computer Games (ACG 2019): the two-player solve, boards up to 6×6 with 6 pieces](https://doi.org/10.1007/978-3-030-65883-0_13)

## Resources

**Tablebases**

- [tablebase-v1 release: tablebase_n1_packed.bin.zst and tablebase_n2_packed.bin.zst (14.84 GB raw for 3 marbles, about 516 MB compressed)](https://github.com/brianhliou/chinese-checkers-3p/releases/tag/tablebase-v1)

**Code**

- [chinese-checkers-3p: Rust solver, ranker, move generator, analyzer and Python reference engine](https://github.com/brianhliou/chinese-checkers-3p)

**Explorers**

- [Three-player Chinese Checkers tablebase explorer: exact queries against the full 3-marble tablebase](https://chinese-checkers.brianhliou.com/)

**Write-ups**

- [3-Player Chinese Checkers, Solved](https://brianhliou.com/posts/solving-three-player-chinese-checkers/)

## Notes

Rules as solved (from the repo's rules ledger, research/rules.md, and the
post). Three players sit on alternating corners of the star and each races
to the opposite corner. A player's marbles may use only their own start
corner, the shared central hexagon and their own goal corner: a marble may
not stop in or hop through either of the other two players' corners, so
each lane is 25 cells on the 37-cell board. On a turn a player either steps
one marble to an adjacent empty cell, or hops it over an adjacent marble
(their own or an opponent's) into the empty cell beyond. Hops chain in one
turn and the player may stop after any hop. Nothing is captured; hopped
marbles stay. Turn order is fixed: A, then B, then C. Passing is not
allowed, and a hop chain that ends back on its starting cell counts as a
pass and is forbidden (a modeling decision; the standard rules say only
that a player must move). A player with no legal move is skipped. The first
player to fill their goal corner wins and the other two lose; play stops
there, so there is no ranking for second place. Because the corners are
private, a goal can never hold another player's marble, so Sturtevant's
rule for a goal filled around a stranded opponent never arises. Blocking a
goal is legal: Sturtevant's two-player rule against a permanent block is
not imposed. Any repetition of a (board, player to move) state is a draw,
Sturtevant's two-player rule; in the solver, a state left unresolved after
the loopy retrograde converges is a draw for that question.

With three players a position has no single value, so the solve answers a
battery of two-player forcing questions over the same state graph: can a
player force their own win against the other two (solo); can a pair force
a chosen one of them to win (enable); can a pair force the third out
(pair-out); and can one player force a draw by repetition. Twelve questions
fold to four under the board's threefold rotation. The tables say what can
be forced, not what self-interested players would choose; a policy for how
a player who cannot win picks the winner is not part of this result.

On the 3-marble board the 14,841,300,390 counted states are every
placement the lanes allow times the player to move (4,947,100,130 under
rotation), a superset of the positions reachable from the start, all of
them labelled. Per player the solo layer has 950,015,894 wins,
13,890,307,418 losses, 956,384 draws and 20,694 states marked illegal (two
goals filled at once). By control type: 11,988,362,862 kingmaker (80.8%),
2,814,699,759 solo-win, 35,368,617 terminal and 2,869,152 spoiler-draw. A
search forward from the start finds every position through depth 8 still
kingmaker; at depth 9, 41 positions are solo-win and 1 is spoiler-draw. On
the 1-marble board there are 1,245 reachable positions (171 terminal, 834
solo-win, 240 kingmaker) and no draws; per player 335 wins and 910 losses.
The solve ran in about 7.4 hours on a rented 32-vCPU, 128 GB machine.

The checks published with it: the counting model reproduces the positions
column of Sturtevant's Table 1; on the 1-marble board two Python
retrogrades and the Rust solver agree on every state (the comparison caught
the return-to-origin hop bug); rotation is tested to preserve values while
reflection does not, because it reverses the turn order; the ranker
round-trips and gives the expected canonical count; and the control-type
counts sum to the state total. These are the author's own checks; no one
else has replayed the tablebase.

What this does not cover. The standard 121-hole board, with 10 marbles
each, is not solved for three players, nor is the next rung up, 73 cells
with 6 marbles each (about 1.30×10^21 placement-by-turn states, out of reach
of this method as run). Two players is a different result: Sturtevant
(2019) strongly solved two-player boards up to 6×6 with 6 pieces, every
size a first-player win, with 7×7 as his stated open target; this list has
no record of that yet. Four and six players are not computed. Neither are
other rule sets: the variant that lets a marble hop through another
player's corner, rules that forbid or penalise blocking a goal (spoiling
rules, or Sturtevant's no-permanent-block rule), a goal that counts as won
around a stranded opponent's marble, long-hop variants, play-on for second
place, or a rule that allows passing.

The post's prior-art search named three-player Nim (analytic), multiplayer
Can't Stop (approximate and stochastic) and a feasibility study of
three-player Otrio as the nearest work it found. The search was not
exhaustive and no priority is claimed.
