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

This record is the FREE-STYLE variant of Gomoku on 15×15: a line of five OR MORE same-color stones wins (overlines count). In Allis's terminology this is plain "Go-Moku." The first player (Black) has a forced win; against optimal defense the win is reached in 18 moves (35 ply). The solution tree built by the Go-Moku program "Victoria" contained 138,790 positions for free-style; the "exactly-five" standard variant (no overline win) needed 153,284 nodes and is also a first-player win. Both were proven, with no opening restrictions, in the same 1993 work.
STRENGTH = WEAK, not strong. Allis proved a forced first-player win and produced a winning strategy/solution tree from the standard start (Black plays from a database, switching to threat-space search once White deviates). This is a weak solution — there is no value assigned to every reachable position (no full tablebase), so it does not qualify as strong. Do not upgrade to "strong."
METHOD: threat-space search (drastically reduces the attacker's branching factor by letting the defender answer all direct threats) backed by proof-number search for completeness in the cases threat-space search alone cannot resolve. The thesis generalized the underlying engine into proof-number search and dependency-based search.
COMPLEXITY: no clean citable reachable-vs-total state-space count exists for 15×15 Gomoku in the primary literature; the often-quoted ~10^105 game-tree figure is an estimate for Gomoku in general, not a solved-tree count, so the complexity fields are left null. The concrete, citable solution-tree size is 138,790 positions (free-style) noted above.
ATTRIBUTION/YEAR: the result was first published in 1993 (AAAI Fall Symposium and Univ. of Limburg tech report CS 93-02); the research anchor's "1993" is correct. The 1994 PhD thesis ("Searching for Solutions in Games and Artificial Intelligence") is where it is most fully written up and is the citation most people mean; both years are defensible. Lead author L. Victor Allis; co-authors van den Herik and Huntjens on the papers. Same game/result also later reprinted in Computational Intelligence (Wiley, 1996).
CAVEAT: this is distinct from Renju (the professional variant with opening restrictions and forbidden moves for Black) and from "standard" exactly-five-only Gomoku; those are separate records. On a 19×19 board the first-player advantage is even larger.
