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
| Source | [Irving et al. 2000](https://naml.us/paper/irving2000_kalah.pdf) |
| Board | Two rows of 6 holes plus two stores (kalahah); standard commercial game starts with 4 seeds per hole — Kalah(6,4). Notation Kalah(m,n) = m holes per side, n initial seeds per hole. |
| State space | 13,100,000,000,000 |

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| 2000 | standard game | first player wins | Weak | Geoffrey Irving, Jeroen Donkers, Jos Uiterwijk | [source](https://naml.us/paper/irving2000_kalah.pdf) |

_One row, derived from the record's year, solver and primary source; no fuller history is recorded yet._

## References

- [Irving, Donkers & Uiterwijk (2000) — "Solving Kalah", ICGA Journal 23(3):139–147 (PDF on the first author's site)](https://naml.us/paper/irving2000_kalah.pdf)
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

Kalah is a 1950s commercial Mancala variant with two rows of six holes and two
stores. It belongs to the family where landing the last seed in an empty hole
on your own side makes a capture. Irving, Donkers and Uiterwijk (2000) solved
it for every Kalah(m,n) with m ≤ 6 holes per side and n ≤ 6 seeds per hole,
except Kalah(6,6). The standard commercial game Kalah(6,4) and the deeper
Kalah(6,5) are first-player wins.

Their game values for the main boards are: Kalah(6,1) a win by 2, (6,2) a
win by 10, (6,3) a win by 2, (6,4) a win by 10 and (6,5) a win by 12;
Kalah(5,3) a win by 8, (5,4) by 12, (5,5) by 2 and (5,6) by 2; and
Kalah(4,3) a win by 8.

The paper solved Kalah "strongly (per Allis' definition) for small instances
using full-game databases, and weakly for larger instances using game-tree
search." The strong set is only the small boards whose entire game graph was
enumerated and back-propagated, the largest being Kalah(4,3) with 4.6M
entries. Kalah(6,4) and Kalah(6,5) were solved weakly: an optimized MTD(f)
iterative-deepening alpha-beta search proved the value from the start, with
transposition tables, futility pruning, enhanced transposition cut-off and a
retrograde endgame database computed through 20 active counters. Table 1
reports an average game length of 30.75 plies for Kalah(6,4) in its sampled
games; this is not a minimax distance to the result.

Irving et al. use a specific ruleset. Sowing includes your own store and skips
the opponent's, a capture takes the opposite pit plus the landing seed, the
game ends when one side is empty and the other player takes all remaining
seeds, and the seeding hole is not skipped on overflow. Later authors call
this capture rule the "empty-capture" variant. Under slightly different
"standard rules," Wikipedia reports wins by 8 for Kalah(6,4) and by 10 for
Kalah(6,5), attributed to Mark Rawlings (2015). These figures and their
attribution remain unverified against a primary report.

Kalah(6,6) was settled later, in separate efforts. Anders Carstensen (2011,
with Kim Skak Larsen) first proved it a first-player win, without publishing
winning margins per move. Wikipedia attributes a win by 2 under empty-capture
rules to Rawlings (2015), with about 106 days of computation and over 55
trillion searched nodes, and a standard-rules lower bound of a win by 4.
These later margins and computation figures remain unverified against a
primary report.

Kalah(6,4) has approximately 1.31×10^13 total configurations (Table 2), a
conservative reachable game-graph estimate of ~1.3×10^12, and an estimated
game-tree complexity of ~6×10^18, comparable to Connect Four. Kalah(6,6) has a state space of
≈1.5×10^15 and a game tree of ≈2×10^33, comparable to checkers. The paper's
tables show that at least 94% of the total configuration space is unreachable
for the enumerated nontrivial small instances; they do not establish that
percentage for Kalah(6,4).
