<!-- GENERATED from data/games/awari.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Awari (Oware)

[Mancala](../families/mancala.md) · [all families](../README.md#families) · [data](../data/games/awari.yaml)

*Also known as: Oware, Awale, Awele, Wari, Ouri.*

Either side can force a draw with optimal play (final score 24-24)

| | |
|---|---|
| Result | Draw |
| Strength | Strong |
| Method | Retrograde analysis |
| Year | 2002 |
| Solved by | John W. Romein & Henri E. Bal (Vrije Universiteit Amsterdam) |
| Source | [Romein et al. 2002](https://doi.org/10.1109/MC.2003.1236468) |
| Board | 2×6 pits, 4 seeds per pit (48 seeds total) |
| State space | 889,063,398,406 |

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| 2002 | standard game | draw | Strong | John W. Romein & Henri E. Bal | [source](https://doi.org/10.1109/MC.2003.1236468) |

_One row, derived from the record's year, solver and primary source; no fuller history is recorded yet._

## References

- [Romein & Bal, "Solving the Game of Awari using Parallel Retrograde Analysis," IEEE Computer 38(10):26-33, 2003 (DOI 10.1109/MC.2003.1236468)](https://doi.org/10.1109/MC.2003.1236468)
- [Solving the Game of Awari using Parallel Retrograde Analysis (Vrije Universiteit research portal)](https://research.vu.nl/en/publications/solving-the-game-of-awari-using-parallel-retrograde-analysis)
- [Awari (Chessprogramming wiki)](https://www.chessprogramming.org/Awari)
- [Oware (Wikipedia)](https://en.wikipedia.org/wiki/Oware)

## Resources

**Write-ups**

- [Solving Awari using Large-Scale Parallel Retrograde Analysis (Romein & Bal slides)](https://slideplayer.com/slide/4830255/)

## Notes

Strongly solved: Romein & Bal computed the best move and exact eventual outcome for all 889,063,398,406 reachable positions, i.e. a complete tablebase, not just the start-position value. The standard start (two rows of six pits, four seeds each, 48 seeds, capture-on-2-or-3 sowing rules) is a draw — both sides can force the 24-24 split. The computation ran ~51 hours on a 144-processor (72 dual-PIII) cluster with a Myrinet interconnect; the largest endgame database held 204 billion entries (178 GB) and the full on-disk database was ~778 GiB, the largest game database computed at the time. state_space here is the EXACT reachable-position count from the solver (≈8.89×10^11 ≈ 10^12), which is also the canonical state-space figure (log10 ≈ 12) in the Herik/Uiterwijk/Van Rijswijck 2002 "Games solved" table; that same table estimates game-tree complexity at ≈10^32 (log10 32, branching factor ≈3.5, avg game length ≈60 plies) — left null in the structured field because it is an estimate, not an exact count. Foundational retrograde work on Awari was begun by Allis, van der Meulen & van den Herik (1990) and extended by van der Goot (2000) and Lincke (2002); Romein & Bal's 2002 run was the computation that fully solved the game. They also published an "Awari Oracle" Java applet for play against the perfect database.
