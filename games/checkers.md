<!-- GENERATED from data/games/checkers.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Checkers (English draughts)

[Capture & board control](../families/capture.md) · [all families](../README.md#families) · [data](../data/games/checkers.yaml)

*Also known as: English draughts, American checkers, Straight checkers.*

Draw with perfect play by both sides (Black to play and draw from the standard opening)

| | |
|---|---|
| Result | Draw |
| Strength | Weak |
| Method | Retrograde analysis, Proof-number search, Alpha-beta + DB |
| Year | 2007 |
| Solved by | Jonathan Schaeffer, Neil Burch, Yngvi Björnsson, Akihiro Kishimoto, Martin Müller, Robert Lake, Paul Lu, Steve Sutphen (University of Alberta; Chinook project) |
| Source | [Schaeffer et al. 2007](https://www.science.org/doi/10.1126/science.1144079) |
| Board | 8x8 board, pieces on dark squares only (32 playable squares) |
| State space | 500,995,484,682,338,700,000 |
| Distance to result | Longest line analyzed in the proof was 154 ply; a typical game lasts roughly 70 ply |

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| 2007 | standard game | draw | Weak | Jonathan Schaeffer, Neil Burch, Yngvi Björnsson, Akihiro Kishimoto, Martin Müller, Robert Lake, Paul Lu, Steve Sutphen | [source](https://www.science.org/doi/10.1126/science.1144079) |

_One row, derived from the record's year, solver and primary source; no fuller history is recorded yet._

## References

- [Checkers Is Solved — J. Schaeffer et al., Science 317, 1518–1522 (2007)](https://www.science.org/doi/10.1126/science.1144079)
- [Checkers Is Solved (full text PDF, Science 2007)](https://webdocs.cs.ualberta.ca/~jonathan/publications/ai_publications/checksolved.pdf)
- [Solving Checkers — J. Schaeffer et al., IJCAI 2005 (earlier milestone: White Doctor opening proven a draw)](https://webdocs.cs.ualberta.ca/~mmueller/ps/ijcai05checkers.pdf)
- [Chinook endgame databases (University of Alberta)](http://webdocs.cs.ualberta.ca/~chinook/databases/)
- [Checkers, Solved! — IEEE Spectrum (secondary, July 2007)](https://spectrum.ieee.org/checkers-solved)

## Resources

**Explorers**

- <http://webdocs.cs.ualberta.ca/~chinook/databases/>

**Write-ups**

- <https://webdocs.cs.ualberta.ca/~jonathan/publications/ai_publications/checksolved.pdf>

## Notes

English draughts is played on the dark squares of an 8x8 board (32 playable
squares) with 12 pieces a side, and captures are forced. The Chinook team at
the University of Alberta worked on it from 1989 and finished in 2007, after
about 18 years: with perfect play by both sides the game is a draw.

The solution is weak. It proves a drawing strategy from the standard opening
without storing a value for every reachable position. It has two parts.
Retrograde analysis built endgame databases of 3.9 x 10^13 positions covering
every position with 10 or fewer pieces, and that subset is strongly solved. A
forward best-first search, with proof-number search at the top and Chinook's
alpha-beta search (nominal depth 17-23 ply) below, called into those
databases.

Checkers has about 5 x 10^20 reachable positions
(500,995,484,682,338,672,639), but the proof needed to evaluate only on the
order of 10^14 of them. Nineteen tournament openings were proven, all draws,
and with symmetry and transpositions they cover the standard start. The paper
gives only a rough alpha-beta estimate of the game tree, about 10^31 under
optimistic assumptions.

The Science paper reports that the proof was checked for internal consistency,
and that an independent 10-piece database position requiring a 279-ply forced
win was confirmed.
