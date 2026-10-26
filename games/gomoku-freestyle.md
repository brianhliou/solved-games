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
| Year | 1992 |
| Solved by | L. Victor Allis, H. Jaap van den Herik, M. P. H. Huntjens |
| Source | [Allis et al. 1992](https://aaai.org/papers/0001-go-moku-solved-by-new-search-techniques/) |
| Board | 15×15 |

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| 1992 | standard game | first player wins | Weak | L. Victor Allis, H. Jaap van den Herik, M. P. H. Huntjens | [source](https://aaai.org/papers/0001-go-moku-solved-by-new-search-techniques/) |

_One row, derived from the record's year, solver and primary source; no fuller history is recorded yet._

## Engines

- [AlphaGomoku (Kozarzewski)](../engines/alphagomoku.md) (engine): competition result, [source](https://gomocup.org/results/gomocup-result-2026/)
- [KataGomo](../engines/katagomo.md) (engine): competition result, [source](https://gomocup.org/results/gomocup-result-2026/)
- [Rapfi](../engines/rapfi.md) (engine): competition result, [source](https://gomocup.org/results/gomocup-result-2025/)

## References

- [Allis, van den Herik & Huntjens — "Go-Moku Solved by New Search Techniques", AAAI Fall Symposium FS-93-02 (1993)](https://aaai.org/papers/0001-go-moku-solved-by-new-search-techniques/)
- [Victor Allis, Go-Moku solved (September 1, 1992 announcement; presented August 1992)](https://groups.google.com/g/rec.games.board/c/3q3tn0GX4UI)
- [Allis, van den Herik and Huntjens, Go-Moku Solved by New Search Techniques (full 1993 paper)](https://cdn.aaai.org/Symposia/Fall/1993/FS-93-02/FS93-02-001.pdf)
- [Allis, van den Herik & Huntjens — "Go-Moku and Threat-Space Search", Univ. of Limburg Tech. Report CS 93-02 (1993)](https://research.tilburguniversity.edu/en/publications/go-moku-and-threat-space-search)
- [Allis — "Searching for Solutions in Games and Artificial Intelligence", PhD thesis, Univ. of Limburg (1994)](https://cris.maastrichtuniversity.nl/en/publications/searching-for-solutions-in-games-and-artificial-intelligence/)
- [Allis, Searching for Solutions in Games and Artificial Intelligence (full thesis)](https://cris.maastrichtuniversity.nl/ws/files/588458/guid-36b5cf0a-cf06-4602-afdb-1af04d65c23b-ASSET1.0.pdf)
- [Allis, van den Herik & Huntjens — "Go-Moku Solved by New Search Techniques", Computational Intelligence 12(1), Wiley (1996)](https://onlinelibrary.wiley.com/doi/10.1111/j.1467-8640.1996.tb00250.x)
- [Darse Billings / David Eppstein — "Go-Moku Solved (Summary and References)" (secondary)](https://ics.uci.edu/~eppstein/cgt/gomoku.html)
- [Gomoku (Wikipedia) (secondary)](https://en.wikipedia.org/wiki/Gomoku)

## Resources

**Write-ups**

- [Go-Moku and Threat-Space Search (full paper PDF)](https://www.mimuw.edu.pl/~awojna/SID/referaty/Go-Moku.pdf)

## Notes

This entry is free-style Gomoku on 15×15: five or more stones of one colour in
a line wins, so overlines count. Allis calls this plain "Go-Moku." The first
player (Black) has a forced win. The solution tree built by the program
"Victoria" has 138,790 positions and a stored depth of 35 plies. Threat-search
continuations extend beyond its leaves; this does not establish an optimal
game length. The "exactly-five" variant, where an overline does not win, needed
153,284 nodes and is also a first-player win. Both were proven, with no
opening restrictions, by L. Victor Allis with H. Jaap van den Herik and
M. P. H. Huntjens. The result was presented in August 1992 and announced by
Allis that September; the symposium paper and technical report appeared in 1993.

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

Allis's historical state-space estimate is ~10^105 for 15×15, and the
game-tree estimate is ~10^70 assuming 30-ply games. Neither is an exact
reachable-state or full-tree enumeration. The printed state-space arithmetic
is inaccurate: 3^225 is approximately 2.11×10^107. Renju, the professional
variant with opening restrictions and
forbidden moves for Black, is a different game. On a 19×19 board the first
player's advantage is even larger.
