<!-- GENERATED from data/games/pangki.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Pangki

[Capture & board control](../families/capture.md) · [all families](../README.md#families) · [data](../data/games/pangki.yaml)

Of the two openings distinct under symmetry, one draws and the other loses.

| | |
|---|---|
| Result | Draw |
| Strength | Strong |
| Method | Retrograde analysis, Brute-force enumeration |
| Year | 2001 |
| Solved by | Jason Allen Doucette |
| Source | [Doucette 2001](https://jasondoucette.com/ai.html#Pangki)\* |
| Board | 4×4; six pieces per player |
| State space | 43,046,721 |
| Evidence | self-archived\* |

\* Self-archived: the result is available only from its authors (a repository, a post, a deposit), not yet refereed, formally verified or reproduced by someone else. The mark comes off when one of those happens. It applies to this repo's own results too.

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| 2001 | standard game | draw | Strong | Jason Allen Doucette | [source](https://jasondoucette.com/ai.html#Pangki) |

_One row, derived from the record's year, solver and primary source; no fuller history is recorded yet._

## References

- [Jason Doucette, Artificial Intelligence: Pangki God (primary solver writeup)](https://jasondoucette.com/ai.html#Pangki)
- [Jason Allen Doucette, Pangki God distribution: ReadMe.txt and sample solver output (primary)](https://jasondoucette.com/download/pangkigod.zip)
- [Cinc camins, Variants section (Wikipedia; secondary)](https://en.wikipedia.org/wiki/Cinc_camins#Variants)

## Resources

**Write-ups**

- [Pangki God: rules, database construction and results](https://jasondoucette.com/ai.html#Pangki)

## Notes

Pangki uses a 4×4 board with six pieces per player. Pieces move one square
orthogonally into an empty square. Two adjacent friendly pieces capture an
adjacent enemy in the same row or column when its remaining square is empty.
A player loses when reduced to one piece or left without a legal move.

Jason Doucette's Pangki God solves the game by retrograde analysis. Its
database stores a value for each of the 43,046,721 board encodings, including
illegal arrangements. This is the total encoding space, not a count of
reachable positions. Exchanging the colors gives the other player's value.

Perfect play draws. One of the two openings distinct under symmetry permits
an immediate capture and an opponent win in 15; the other draws.

Doucette reports 3,037 seconds on an Athlon XP 2500+. The bundled sample
output records 3,067 seconds on that processor.
