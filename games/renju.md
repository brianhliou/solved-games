<!-- GENERATED from data/games/renju.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Renju (連珠)

[Alignment & m,n,k games](../families/alignment.md) · [all families](../README.md#families) · [data](../data/games/renju.yaml)

*Also known as: Connected Pearls, Professional Gomoku.*

Black (the first player) wins with perfect play, despite the forbidden-move restrictions imposed on Black

| | |
|---|---|
| Result | First player wins |
| Strength | Weak |
| Method | Threat-space search, Alpha-beta + DB, Knowledge-based |
| Year | 2000 |
| Solved by | János Wágner & István Virág |
| Source | [Wágner et al. 2000](https://journals.sagepub.com/doi/abs/10.3233/ICG-2001-24104) |
| Board | 15x15 grid (stones on intersections); Black plays first and must open on the center point h8 |
| State space | 10¹⁰⁵ |
| Game tree | 10⁷⁰ |
| Distance to result | 47-ply winning line published (1. h8 ... 47. l10); iterative-deepening threat-sequence search reaching up to 17 plies of forced threats |

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| 2000 | standard game | first player wins | Weak | János Wágner & István Virág | [source](https://journals.sagepub.com/doi/abs/10.3233/ICG-2001-24104) |

_One row, derived from the record's year, solver and primary source; no fuller history is recorded yet._

## Engines

- [AlphaGomoku (Kozarzewski)](../engines/alphagomoku.md) (engine): competition result, [source](https://gomocup.org/results/gomocup-result-2026/)
- [KataGomo](../engines/katagomo.md) (engine): competition result, [source](https://gomocup.org/results/gomocup-result-2026/)
- [Rapfi](../engines/rapfi.md) (engine): competition result, [source](https://gomocup.org/results/gomocup-result-2025/)

## References

- [J. Wágner, I. Virág, "Solving Renju", ICGA Journal 24(1), 2001, pp. 30-35 (DOI 10.3233/ICG-2001-24104)](https://journals.sagepub.com/doi/abs/10.3233/ICG-2001-24104)
- [H.J. van den Herik, J.W.H.M. Uiterwijk, J. van Rijswijck, "Games solved: Now and in the future", Artificial Intelligence 134 (2002) 277-311 (Renju discussed in 3.1.3, full winning line in Fig. 8)](https://web.mit.edu/6.034/wwwbob/GamesSolved.pdf)
- [L. V. Allis, Searching for Solutions in Games and Artificial Intelligence (1994), sections 5.2.1, 6.3.3 and 6.3.11 (rules and complexity estimates)](https://cris.maastrichtuniversity.nl/ws/files/588458/guid-36b5cf0a-cf06-4602-afdb-1af04d65c23b-ASSET1.0.pdf)
- [Renju — Wikipedia](https://en.wikipedia.org/wiki/Renju)

## Resources

**Write-ups**

- <https://icga.org/icga/games/go-moku/>

## Notes

Renju is the professional, asymmetric form of Go-Moku, played on a 15x15
board. Black wins with exactly five in a row; White wins with five or more.
Black, who moves first, may not make a double-three, a double-four or an
overline (six or more in a row). White has no such restriction. Black still
wins.

Wágner and Virág solved it weakly in 2000 (published in the ICGA Journal in
2001), confirming the long-standing conjecture that Renju, like Go-Moku
(solved by Allis, 1992/1995), favors the first player. The proof followed
Allis's Go-Moku method: threat-sequence (threat-space) search with
transposition tables, expert rules for moves that make no threat, and
iterative deepening over threat sequences of up to 17 plies.

The solution is weak: it gives a winning strategy from the standard opening
and no value for every reachable position. The published winning line is 47
plies long and is not necessarily the shortest win. It covers the rules with
the standard fixed centre opening; the modern tournament opening protocols
(RIF, Yamaguchi, Soosõrv-N and Taraguchi swap rules) are not covered and
remain unsolved.

For the 15x15 board the van den Herik et al. survey, citing Allis, gives a
state space of about 10^105 and a game tree of about 10^70. The state-space
estimate is based on the total-labelings upper bound 3^225, which includes
unreachable boards; it is not an enumerated reachable-position count.
