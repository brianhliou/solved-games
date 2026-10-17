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

Renju is the professional, asymmetric variant of Go-Moku: the goal is the same (an exact five-in-a-row, horizontal/vertical/diagonal on a 15x15 board) but Black, the first player, is forbidden from making a double-three, double-four, or an overline (six-plus in a row); White faces no such restriction. Despite handicapping Black, the game is a first-player win. Wágner & Virág weakly solved it in 2000 (published in the ICGA Journal in 2001), verifying the long-standing conjecture that Renju, like Go-Moku (solved by Allis, 1992/1995), favors the first player. Their proof used transposition tables, threat-sequence (threat-space) search in the tradition of Allis's Go-Moku proof, and expert/knowledge-based rules for no-threat moves, driven by an iterative-deepening search over threat sequences up to 17 plies. Strength is WEAK, not strong: only a winning strategy from the standard opening was established, not a value for every reachable position (no full tablebase). The published winning line is 47 plies long and is described as a (not necessarily the shortest) win. Variant caveat: this result applies to the rule set with the standard fixed center opening; modern tournament opening protocols (RIF/Yamaguchi/Soosõrv-N/ Taraguchi swap rules) are NOT covered and remain unsolved. Complexity figures from the van den Herik et al. survey (citing Allis): state-space complexity ~10^105 and game-tree complexity ~10^70 for the 15x15 board (these are the order-of-magnitude exponents; the state_space and game_tree fields above store the exponents 105 and 70, not the literal counts). Year: the paper appeared in 2001; the survey dates the actual solving to 2000.
