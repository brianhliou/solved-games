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

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| 2002 | standard game | draw | Strong | John W. Romein & Henri E. Bal | [source](https://doi.org/10.1109/MC.2003.1236468) |

_One row, derived from the record's year, solver and primary source; no fuller history is recorded yet._

## Engines

- [Aalina](../engines/aalina.md) (engine): match result, [source](https://48stones.com/research-games-benchmark/)
- [Awari-Python database prober](../engines/awari-python.md) (solver): perfect play, [source](https://github.com/keesverstoep/Awari/blob/main/Awari-Python/README.md)

## References

- [Romein & Bal, "Solving the Game of Awari using Parallel Retrograde Analysis," Computer 36(10):26–33 (2003), DOI 10.1109/MC.2003.1236468](https://doi.org/10.1109/MC.2003.1236468)
- [Romein & Bal, Awari Is Solved, ICGA Journal 25(3):162–165 (2002)](https://icga.org/icga/journal/contents/content25-3.htm#AWARI%20IS%20SOLVED)
- [Solving the Game of Awari using Parallel Retrograde Analysis (full text; configuration indexing and Table 1)](https://citeseerx.ist.psu.edu/document?doi=e560230c0ac039f6e1c194d5067a21467f444547&repid=rep1&type=pdf)
- [Van den Herik, Uiterwijk & van Rijswijck, Games Solved: Now and in the Future (2002), Table 6](https://web.mit.edu/6.034/wwwbob/GamesSolved.pdf)
- [Allis, Searching for Solutions in Games and Artificial Intelligence (1994), §6.3.5](https://cris.maastrichtuniversity.nl/ws/files/588458/guid-36b5cf0a-cf06-4602-afdb-1af04d65c23b-ASSET1.0.pdf)
- [Solving the Game of Awari using Parallel Retrograde Analysis (Vrije Universiteit research portal)](https://research.vu.nl/en/publications/solving-the-game-of-awari-using-parallel-retrograde-analysis)
- [Awari (Chessprogramming wiki)](https://www.chessprogramming.org/Awari)
- [Oware (Wikipedia)](https://en.wikipedia.org/wiki/Oware)

## Resources

**Write-ups**

- [Solving Awari using Large-Scale Parallel Retrograde Analysis (Romein & Bal slides)](https://slideplayer.com/slide/4830255/)

## Notes

Romein and Bal's tablebase gives the best moves and exact outcomes for all
reachable positions under their computer-science Awari rules. It indexes
889,063,398,406 normalized pit configurations after excluding specified
impossible configurations. This is an upper bound on reachable positions.
The start (two rows of six pits, four seeds each, 48 seeds, capture on 2 or 3)
is a draw with a 24-24 split. The result applies to the authors' ruleset;
traditional Oware rules can differ.

The run took about 51 hours on a 144-processor cluster (72 dual-PIII nodes)
with a Myrinet interconnect. The largest endgame database held 204 billion
entries (178 GB), and the full database on disk came to about 778 GB. They
also released an "Awari Oracle", a Java applet for playing against the
database.

The 2002 "Games solved" survey by van den Herik, Uiterwijk and van Rijswijck
estimates the state space at about 10^12 and the game tree at about 10^32.
Allis's 1994 thesis discusses a branching factor of about 3.5 and an average
game length of about 60 plies as complexity-estimation assumptions.

Retrograde work on Awari began with Allis, van der Meulen and van den Herik
(1990) and was extended by van der Goot (2000) and Lincke (2002). Romein and
Bal's 2002 run was the computation that solved the whole game.
