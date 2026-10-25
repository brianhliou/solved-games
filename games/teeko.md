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

Teeko is an abstract strategy game invented by John Scarne in 1937 and refined
in 1952 and the 1960s. It is played on a 5×5 grid, and each player has four
markers (Black against Red, Black moving first). Players first drop their four
markers in turn onto empty cells, then move a marker one step to any adjacent
empty cell, diagonals included. A player wins with four markers in a line
(horizontal, vertical or diagonal) or in a 2×2 square, which gives 44 winning
configurations in Standard Teeko.

Solving Teeko was posed as Item 90 in the 1972 MIT memo HAKMEM (Beeler,
Gosper, Schroeppel). Guy L. Steele Jr., then at Sun Microsystems Laboratories,
solved it by computer in October and November 1998 and reported the result in
a Usenet posting dated 23 Nov 1998 ("Re: Teeko, HAKMEM"). He solved all
sixteen of Scarne's variants. Standard Teeko and thirteen others are draws.
Two are first-player (Black) wins, among them Advanced Teeko, which adds
"extended" 9-, 16- and 25-cell squares for 58 winning positions.

Steele enumerated every position, a retrograde analysis over the complete game
graph that gives a value for every reachable position, so the solution is
strong. That is how one solve yielded values and forced-win distances for all
sixteen variants.

With all 8 markers on the board in the movement phase there are
C(25,4)·C(21,4) = 75,710,250 placements, and with the drop phase included the
reachable-position count is on the order of 1.7×10^8 (~172 million). That
figure is a computed estimate, not one Steele quoted. Scarne himself spoke
loosely of "over a million possible positions."

Steele's result is an informal 1998 Usenet writeup, and the solver was never
formally published in a journal. Several secondary references report it
(Epstein 2012, Wikipedia, MathWorld), all tracing back to this one solve, and
no independent re-solve has been published.
