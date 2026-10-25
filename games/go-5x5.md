<!-- GENERATED from data/games/go-5x5.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Go (5×5)

[Go](../families/go.md) · [all families](../README.md#families) · [data](../data/games/go-5x5.yaml)

*Also known as: 5x5 Go, Five-by-five Go, Small-board Go (5x5).*

Black (first player) wins by 25 points — the entire board — with the optimal opening on the center point (C3); no komi, Japanese rules

| | |
|---|---|
| Result | First player wins |
| Strength | Weak |
| Method | Alpha-beta + DB, Knowledge-based |
| Year | 2002 |
| Solved by | Erik C. D. van der Werf (program MIGOS), with H. Jaap van den Herik and Jos W. H. M. Uiterwijk |
| Source | [van der Werf 2002](https://journals.sagepub.com/doi/10.3233/ICG-2003-26205) |
| Board | 5x5 square Go board (25 intersections) |
| State space | 414,295,148,741 |
| Distance to result | Win proven at 22 plies for the center opening (23 plies for the empty board, i.e. all openings); not a fixed-ply line — a full-game alpha-beta proof from the start |
| Evidence | refereed |

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| 2002 | 5×5, Japanese rules, no komi | first player wins by 25 points (the whole board) | Weak | Erik C. D. van der Werf, H. Jaap van den Herik & Jos W. H. M. Uiterwijk | [source](https://journals.sagepub.com/doi/10.3233/ICG-2003-26205) |
| 2024 | 5×5, positional superko | first player wins the whole board | Weak | Owen Randall, Martin Müller, Ting-Han Wei & Ryan Hayward | [source](https://www.ijcai.org/proceedings/2024/774) |

_Superseded rows stay in the table._

<a id="open-go-6x6"></a>

## Open problem: Go (6×6)

| | |
|---|---|
| Status | Smaller board solved |
| Solved so far | 5×5 (weak): first player wins the whole board under Japanese rules (2002) and under positional superko (2024); rectangular boards up to 5×6 |
| Next target | 6×6 under positional superko |
| Barrier | compute, algorithmic: Square boards above 5×5 are unsolved. Superko cycles make the search history dependent (the graph-history interaction problem), and the state space grows far past the 5×5 solve. |
| Latest result | [Randall et al. 2024](https://www.ijcai.org/proceedings/2024/774) (2024) |
| Last checked | 2026-10-17 |
| Record | [data/open/go-6x6.yaml](../data/open/go-6x6.yaml) |

Searches for newer work:

- 2026-10-17: looked for a 2025 or 2026 solution of 6×6 Go; found none.

## References

- [E. van der Werf, J. van den Herik, J. Uiterwijk — Solving Go on Small Boards, ICGA Journal 26(2):92-107, 2003 (the MIGOS primary paper)](https://journals.sagepub.com/doi/10.3233/ICG-2003-26205)
- [Erik van der Werf — 5x5 Go is solved (author's announcement / writeup page, Oct 2002)](https://erikvanderwerf.tengen.nl/5x5/5x5solved.html)
- [O. Randall, M. Müller, T.-H. Wei, R. Hayward — Expected Work Search (arXiv:2405.05594, 2024): first solution of empty 5x5 Go under positional superko, independently confirming a first-player full-board win](https://arxiv.org/abs/2405.05594)
- [Erik van der Werf — Chessprogramming wiki (MIGOS, method and result, secondary)](https://www.chessprogramming.org/Erik_van_der_Werf)
- [R. Hayward — Solving Go on Small Boards (course notes / history, secondary)](https://webdocs.cs.ualberta.ca/~hayward/355/ssgo.pdf)

## Resources

**Write-ups**

- <https://erikvanderwerf.tengen.nl/5x5/5x5solved.html>

## Notes

5x5 Go is the largest square Go board solved from the empty board for a
clearly specified ruleset. Erik van der Werf's program MIGOS ("Mini Go
Solver") solved it in October 2002, published in the ICGA Journal in 2003.
Under Japanese rules with no komi, and with the optimal opening on the centre
point (C3), Black wins the whole board: a 25-point win. Passes and seki are
handled, so this is full Go and no simplified variant.

MIGOS solved all 6 distinct opening moves on the empty board (distinct after
symmetry), for several rule sets. The empty-board proof reaches depth 23 plies
and the centre-opening win is proven at 22 plies. The search examined about
4.472 x 10^9 nodes in ~4 hours on a 2.0 GHz Pentium 4.

The search is iterative-deepening alpha-beta (principal-variation search) with
transposition tables, enhanced transposition cutoffs, symmetry lookups, two
killer moves, the history heuristic and a Go-specific evaluation. The key
addition is Benson's algorithm for unconditionally alive stones, with static
recognition of unconditional territory, which let proven full-board wins be
detected several plies early. The super-ko rule creates a
Graph-History-Interaction (GHI) problem, which the paper addresses explicitly.

This is a weak solution: the value of the start plus a strategy to achieve it,
proven by full-game search. No published tablebase gives the optimal value for
each of the ~4.1 x 10^11 legal 5x5 positions counted in John Tromp's
enumeration.

The headline result is under van der Werf's Japanese-style rules, and
situational and positional super-ko variants were also analyzed. In 2024
Randall, Müller, Wei and Hayward (Expected Work Search, arXiv:2405.05594)
reported the first solution of the empty 5x5 board under the commonly used
positional super-ko ruleset, and likewise found a first-player full-board win:
an independent confirmation under a different ruleset with a different solver.

Van der Werf and colleagues also solved smaller boards. 1x1 is a draw (value
0), 2x2 is a Black win by 1 under some rule conventions (John Tromp's exact
2x2 transition graph is known), 3x3 is a Black win by 9 (the whole board), and
4x4 a Black win by 2. Rectangular boards up to 5x6 were solved later (van der
Werf and Winands, "Solving Go for Rectangular Boards," ICGA Journal 32(2),
2009). 6x6 and larger square boards are not solved.
