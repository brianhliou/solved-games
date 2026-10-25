<!-- GENERATED from data/games/gomoku-freestyle.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Gomoku (free-style)

[Alignment & m,n,k games](../families/alignment.md) · [all families](../README.md#families) · [data](../data/games/gomoku-freestyle.yaml)

*Also known as: Go-Moku, Five in a Row (free-style), Gobang (free-style).*

First player (Black) wins

| | |
|---|---|
| Result | First player wins |
| Strength | Weak |
| Method | Threat-space search, Proof-number search, Depth-first PNS |
| Year | 1993 |
| Solved by | L. Victor Allis, H. Jaap van den Herik, M. P. H. Huntjens |
| Source | [Allis et al. 1993](https://aaai.org/papers/0001-go-moku-solved-by-new-search-techniques/) |
| Board | 15×15 |
| Distance to result | 35 plies (18 moves) from the empty board against optimal defense |

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| 1993 | standard game | first player wins | Weak | L. Victor Allis, H. Jaap van den Herik, M. P. H. Huntjens | [source](https://aaai.org/papers/0001-go-moku-solved-by-new-search-techniques/) |

_One row, derived from the record's year, solver and primary source; no fuller history is recorded yet._

## Engines

- [Rapfi](../pages/engines.md#engine-rapfi) (engine): competition result, [source](https://gomocup.org/results/gomocup-result-2025/)

## References

- [Allis, van den Herik & Huntjens — "Go-Moku Solved by New Search Techniques", AAAI Fall Symposium FS-93-02 (1993)](https://aaai.org/papers/0001-go-moku-solved-by-new-search-techniques/)
- [Allis, van den Herik & Huntjens — "Go-Moku and Threat-Space Search", Univ. of Limburg Tech. Report CS 93-02 (1993)](https://research.tilburguniversity.edu/en/publications/go-moku-and-threat-space-search)
- [Allis — "Searching for Solutions in Games and Artificial Intelligence", PhD thesis, Univ. of Limburg (1994)](https://cris.maastrichtuniversity.nl/en/publications/searching-for-solutions-in-games-and-artificial-intelligence/)
- [Allis, van den Herik & Huntjens — "Go-Moku Solved by New Search Techniques", Computational Intelligence 12(1), Wiley (1996)](https://onlinelibrary.wiley.com/doi/10.1111/j.1467-8640.1996.tb00250.x)
- [Darse Billings / David Eppstein — "Go-Moku Solved (Summary and References)" (secondary)](https://ics.uci.edu/~eppstein/cgt/gomoku.html)
- [Gomoku (Wikipedia) (secondary)](https://en.wikipedia.org/wiki/Gomoku)

## Resources

**Write-ups**

- [Go-Moku and Threat-Space Search (full paper PDF)](https://www.mimuw.edu.pl/~awojna/SID/referaty/Go-Moku.pdf)

## Notes

This entry is free-style Gomoku on 15×15: five or more stones of one colour in
a line wins, so overlines count. Allis calls this plain "Go-Moku." The first
player (Black) has a forced win, reached in 18 moves (35 ply) against the best
defence. The solution tree built by the program "Victoria" has 138,790
positions. The "exactly-five" variant, where an overline does not win, needed
153,284 nodes and is also a first-player win. Both were proven, with no
opening restrictions, in the same 1993 work by L. Victor Allis with H. Jaap
van den Herik and M. P. H. Huntjens.

The solution is weak: Allis proved a forced win and built a winning strategy
from the standard start, in which Black plays from a database and switches to
threat-space search once White deviates. No value is known for every reachable
position.

Threat-space search cuts the attacker's branching factor sharply by letting
the defender answer every direct threat at once. Proof-number search covers
the cases it cannot settle on its own. Allis's 1994 PhD thesis, "Searching for
Solutions in Games and Artificial Intelligence," generalized the engine into
proof-number search and dependency-based search, and is where the result is
most fully written up. The papers were reprinted in Computational Intelligence
(Wiley, 1996).

The often-quoted ~10^105 game-tree figure is an estimate for Gomoku in general
and does not count the solved tree, and there is no citable state-space count
for 15×15. Renju, the professional variant with opening restrictions and
forbidden moves for Black, is a different game. On a 19×19 board the first
player's advantage is even larger.
