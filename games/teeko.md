<!-- GENERATED from data/games/teeko.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Teeko

[Alignment & m,n,k games](../families/alignment.md) · [all families](../README.md#families) · [data](../data/games/teeko.yaml)

*Also known as: Standard Teeko.*

Standard Teeko is a draw with perfect play (neither Black nor Red can force a win)

| | |
|---|---|
| Result | Draw |
| Strength | Strong |
| Method | Retrograde analysis, Brute-force enumeration |
| Year | 1998 |
| Solved by | Guy L. Steele Jr. (Sun Microsystems Laboratories) |
| Source | [Steele 1998](https://boardgamegeek.com/thread/816476/steele-guy-november-23-1998-re-teeko-hakmem)\* |
| Board | 5×5 board (25 cells); each player has 4 markers |
| State space | 172,000,000 |
| Distance to result | n/a for the standard game (drawn); for the first-player-win variants Steele reported forced wins (e.g. Advanced/58-position Teeko a Black win in roughly 13 moves) |
| Evidence | self-archived\* |

\* Self-archived: the result is available only from its authors (a repository, a post, a deposit), not yet refereed, formally verified or reproduced by someone else. The mark comes off when one of those happens. It applies to this repo's own results too.

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| 1998 | standard game | draw | Strong | Guy L. Steele Jr | [source](https://boardgamegeek.com/thread/816476/steele-guy-november-23-1998-re-teeko-hakmem) |

_One row, derived from the record's year, solver and primary source; no fuller history is recorded yet._

## References

- [Guy L. Steele Jr. — "Re: Teeko, HAKMEM", Usenet posting, 23 Nov 1998 (primary writeup of the full solution; archived/indexed via BoardGameGeek)](https://boardgamegeek.com/thread/816476/steele-guy-november-23-1998-re-teeko-hakmem)
- [Epstein, Richard A. — "The Theory of Gambling and Statistical Logic", 2nd ed., Academic Press, p. 341 (2012) (secondary; states Steele's result and variant outcomes)](https://www.google.com/books/edition/The_Theory_of_Gambling_and_Statistical_L/PuU_AwAAQBAJ)
- [Teeko (Wikipedia) (secondary)](https://en.wikipedia.org/wiki/Teeko)
- [Teeko — Wolfram MathWorld (secondary; lists per-variant outcomes and move distances)](https://mathworld.wolfram.com/Teeko.html)
- [Solved game (Wikipedia) (secondary; lists Teeko, Steele 1998)](https://en.wikipedia.org/wiki/Solved_game)
- [Beeler, Gosper & Schroeppel — HAKMEM, MIT AI Memo AIM-239, Item 90 (1972) (origin of the open problem)](https://en.wikipedia.org/wiki/HAKMEM)

## Notes

Teeko is an abstract strategy game invented by John Scarne in 1937 (refined 1952 and 1960s). It is played on a 5×5 grid; each player has four markers (Black vs. Red, Black moves first). Players first alternately DROP their four markers onto empty cells (drop phase), then alternately MOVE a marker one step to any adjacent empty cell, including diagonally (movement phase). A player wins by getting their four markers into a line of four (horizontal, vertical, or diagonal) or into a 2×2 square — 44 winning configurations in Standard Teeko.
RESULT: Standard Teeko is a DRAW under perfect play. Solving Teeko was posed as Item 90 in the 1972 MIT memo HAKMEM (Beeler, Gosper, Schroeppel). Guy L. Steele Jr. (then at Sun Microsystems Laboratories) solved it by computer in October–November 1998 and reported the result in a Usenet posting dated 23 Nov 1998 ("Re: Teeko, HAKMEM"). He solved ALL SIXTEEN of Scarne's variants: Standard Teeko and thirteen others are draws; two variants — including Advanced Teeko (which adds "extended" 9-/16-/25-cell squares for 58 winning positions) — are FIRST-PLAYER (Black) WINS. Note the secondary sources phrase the same fact two ways: Wikipedia/Epstein say "a win for Black," MathWorld says "first-player win"; these agree because Black moves first.
STRENGTH = STRONG. Steele performed an exhaustive computational enumeration of ALL positions — i.e. retrograde analysis over the complete game graph, yielding a game-theoretic value for every reachable position (a full tablebase), not merely a strategy from the opening. This is what let him report a value and forced-win distances for all sixteen rule variants from a single solve.
STATE SPACE: Teeko is small enough to solve exhaustively, which is why a full (strong) solution is feasible. With all 8 markers placed in the movement phase the board holds C(25,4)·C(21,4) = 75,710,250 placements; including the drop phase the reachable-position count is on the order of 1.7×10^8 (~172 million). The state_space figure above (~1.7×10^8) is this computed estimate, not a figure quoted by Steele; treat it as order-of-magnitude. Scarne himself spoke loosely of "over a million possible positions."
PRIMARY SOURCE CAVEAT: Steele's result is an informal 1998 Usenet writeup, not a peer-reviewed paper; there is no formal journal publication of the solver. The BoardGameGeek thread is the most-cited archival pointer to that posting. The result is independently reported by multiple secondary references (Epstein 2012; Wikipedia; MathWorld; Wikipedia "Solved game"), all tracing back to the single Steele solve — so there is effectively ONE independent primary source, with broad secondary corroboration but no second independent re-solve published.
ATTRIBUTION/YEAR: headline year 1998, solver Guy L. Steele Jr. — consistent across every source. The game's open-problem framing dates to HAKMEM (1972).
