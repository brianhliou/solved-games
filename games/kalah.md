<!-- GENERATED from data/games/kalah.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Kalah

[Mancala](../families/mancala.md) · [all families](../README.md#families) · [data](../data/games/kalah.yaml)

*Also known as: Kalaha, Kalahah, Mancala (commercial Kalah variant).*

South (the first player) wins. Kalah(6,4) is a win by 10 (kalahah difference) under the rules of Irving et al. 2000; the same authors give Kalah(6,5) as a win by 12.

| | |
|---|---|
| Result | First player wins |
| Strength | Weak |
| Method | Alpha-beta + DB, Retrograde analysis, Brute-force enumeration |
| Year | 2000 |
| Solved by | Geoffrey Irving, Jeroen Donkers, Jos Uiterwijk |
| Source | [Irving et al. 2000](https://naml.us/paper/kalah/) |
| Board | Two rows of 6 holes plus two stores (kalahah); standard commercial game starts with 4 seeds per hole — Kalah(6,4). Notation Kalah(m,n) = m holes per side, n initial seeds per hole. |
| State space | 1,800,000,000 |
| Distance to result | Kalah(6,4) average game length ~30 plies; full forced-win line published in the paper (Table 9). Exact minimax proof depth not reported as a single ply figure. |

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| 2000 | standard game | first player wins | Weak | Geoffrey Irving, Jeroen Donkers, Jos Uiterwijk | [source](https://naml.us/paper/kalah/) |

_One row, derived from the record's year, solver and primary source; no fuller history is recorded yet._

## References

- [Irving, Donkers & Uiterwijk (2000) — "Solving Kalah", ICGA Journal 23(3):139–148 (PDF on the first author's site)](https://naml.us/paper/kalah/)
- [Irving, Donkers & Uiterwijk (2000) — "Solving Kalah", ICGA Journal (publisher record)](https://journals.sagepub.com/doi/abs/10.3233/ICG-2000-23303)
- [Kalah — Chessprogramming wiki (secondary summary of solved configurations)](https://www.chessprogramming.org/Kalah)
- [Kalah — Wikipedia (secondary; distinguishes empty-capture vs standard-rules variants and the 2011/2015 follow-ups)](https://en.wikipedia.org/wiki/Kalah)

## Resources

**Tablebases**

- [Full-game databases for small Kalah instances (largest: Kalah(4,3), 4,604,996 entries) — originally hosted at www.cs.unimaas.nl](https://naml.us/paper/kalah/)

**Code**

- [girving/kalah — original solver source](https://github.com/girving/kalah)

**Write-ups**

- [naml.us project page (paper + code links)](https://naml.us/paper/kalah/)

## Notes

Kalah is a 1950s commercial Mancala variant (two rows of six holes plus two stores). It belongs to the "capture on landing the last seed in an empty hole on your own side" family. Irving, Donkers & Uiterwijk (2000) solved it for every Kalah(m,n) with m ≤ 6 and n ≤ 6 EXCEPT Kalah(6,6). Their published game values (Table 9/Table 10), seed count n increasing, for the relevant boards: Kalah(6,1)=win by 2, (6,2)=loss, (6,3)=draw, (6,4)=win by 10, (6,5)=win by 12; Kalah(5,3)=win by 8, (5,4)=12, (5,5)=2, (5,6)=2; Kalah(4,3)=win by 8, etc. So the standard commercial game Kalah(6,4) and the deeper Kalah(6,5) are first-player wins.
STRENGTH CAVEAT (important): the paper explicitly solved Kalah "strongly (per Allis' definition) for small instances using full-game databases, and WEAKLY for larger instances using game-tree search." The strongly-solved set is only the small boards whose entire game graph was enumerated and back-propagated (largest = Kalah(4,3), 4.6M entries). The headline boards Kalah(6,4) and Kalah(6,5) were solved WEAKLY — the minimax value from the start was proven by an optimized MTD(f) iterative-deepening alpha-beta search with transposition tables, futility pruning, enhanced transposition cut-off, and a retrograde endgame database (up to 20–30 active counters), not by a full tablebase for every reachable position. Hence strength is recorded as "weak" for the headline; the small instances are "strong." Calling the (6,4)/(6,5) results "strong" would be the standard over-claim error. Method tags reflect both paths: alpha-beta+db (weak, large boards) and retrograde-analysis + brute-force-enumeration (strong, small boards / endgame DBs).
RULES VARIANT: Irving et al. use a specific Kalah ruleset (own kalahah included in sowing, opponent's skipped; capture takes the opposite pit plus the landing seed; game ends when one side is empty and the other player takes all remaining seeds; the seeding hole is NOT skipped on overflow). Later authors call their capture treatment the "empty-capture" variant. Under slightly different "standard rules", Mark Rawlings (2015) computed Kalah(6,4) = win by 8 and Kalah(6,5) = win by 10 — different margins, same first-player-win verdict — which is why secondary sources quote both win-by-8/10 and win-by-10/12.
FOLLOW-UPS on the open (6,6) cell: Anders Carstensen (2011, with Kim Skak Larsen) first proved Kalah(6,6) a first-player win (without publishing winning margins per move). Mark Rawlings (2015) proved Kalah(6,6) a win by 2 for the first player (empty-capture variant) via ~106 days of computation and 55+ trillion node searches; the standard-rules Kalah(6,6) margin was still being pinned down (proven at least a win by 4). These are separate efforts and are not the headline record here.
COMPLEXITY (from the paper's Tables 1–2): Kalah(6,4) state-space ≈1.8×10^10 total configurations (the value stored here), with a conservative reachable game-graph estimate of ~1.3×10^12 and estimated game-tree complexity ~6×10^18 (comparable to Connect Four). Kalah(6,6) state-space ≈1.5×10^15, game-tree ≈2×10^33 (comparable to Checkers). Tables 2/3 show that 94%+ of the configuration space is unreachable. Three of the four sources trace to a single primary research artifact (the 2000 ICGA paper, via the author PDF and the publisher record); chessprogramming and Wikipedia are secondary corroboration.
