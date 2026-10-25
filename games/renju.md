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
| Year | 2001 |
| Solved by | János Wágner & István Virág |
| Source | [Wágner et al. 2001](https://journals.sagepub.com/doi/abs/10.3233/ICG-2001-24104) |
| Board | 15x15 grid (stones on intersections); Black plays first and must open on the center point h8 |
| State space | 105 |
| Game tree | 70 |
| Distance to result | 47-ply winning line published (1. h8 ... 47. l10); iterative-deepening threat-sequence search reaching up to 17 plies of forced threats |

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| 2001 | standard game | first player wins | Weak | János Wágner & István Virág | [source](https://journals.sagepub.com/doi/abs/10.3233/ICG-2001-24104) |

_One row, derived from the record's year, solver and primary source; no fuller history is recorded yet._

## Engines

- [Rapfi](../pages/engines.md#engine-rapfi) (engine): competition result, [source](https://gomocup.org/results/gomocup-result-2025/)

## References

- [J. Wágner, I. Virág, "Solving Renju", ICGA Journal 24(1), 2001, pp. 30-35 (DOI 10.3233/ICG-2001-24104)](https://journals.sagepub.com/doi/abs/10.3233/ICG-2001-24104)
- [H.J. van den Herik, J.W.H.M. Uiterwijk, J. van Rijswijck, "Games solved: Now and in the future", Artificial Intelligence 134 (2002) 277-311 (Renju discussed in 3.1.3, full winning line in Fig. 8)](https://web.mit.edu/6.034/wwwbob/GamesSolved.pdf)
- [Renju — Wikipedia](https://en.wikipedia.org/wiki/Renju)

## Resources

**Write-ups**

- <https://icga.org/icga/games/go-moku/>

## Notes

Renju is the professional, asymmetric form of Go-Moku. The goal is the same,
exactly five in a row on a 15x15 board, but Black, who moves first, may not
make a double-three, a double-four or an overline (six or more in a row).
White has no such restriction. Black still wins.

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
state space of about 10^105 and a game tree of about 10^70.
