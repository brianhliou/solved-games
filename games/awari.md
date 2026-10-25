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

Romein and Bal computed the best move and the exact final outcome for all
889,063,398,406 reachable positions, a complete tablebase and more than the
value of the start. The standard start (two rows of six pits, four seeds each,
48 seeds, capture on 2 or 3) is a draw: both sides can force the 24-24 split.

The run took about 51 hours on a 144-processor cluster (72 dual-PIII nodes)
with a Myrinet interconnect. The largest endgame database held 204 billion
entries (178 GB), and the full database on disk came to about 778 GiB, the
largest game database computed at the time. They also released an "Awari
Oracle", a Java applet for playing against the perfect database.

The 2002 "Games solved" survey by van den Herik, Uiterwijk and van Rijswijck
gives the same state-space size (about 10^12) and estimates the game tree at
about 10^32, from a branching factor of about 3.5 and an average game of about
60 plies.

Retrograde work on Awari began with Allis, van der Meulen and van den Herik
(1990) and was extended by van der Goot (2000) and Lincke (2002). Romein and
Bal's 2002 run was the computation that solved the whole game.
