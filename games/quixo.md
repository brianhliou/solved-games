<!-- GENERATED from data/games/quixo.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Quixo

[Alignment & m,n,k games](../families/alignment.md) · [all families](../README.md#families) · [data](../data/games/quixo.yaml)

Neither player can force a win from the empty board; perfect play continues indefinitely.

| | |
|---|---|
| Result | Draw |
| Strength | Strong |
| Method | Value Iteration, Backward Induction |
| Year | 2020 |
| Solved by | Satoshi Tanaka, François Bonnet, Sébastien Tixeuil and Yasumasa Tamura |
| Source | [Tanaka et al. 2020](https://arxiv.org/abs/2007.15895v1) |
| Board | 5×5 |
| State space | 847,288,609,443 |
| Evidence | preprint |

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| 2020 | standard game | draw | Strong | Satoshi Tanaka, François Bonnet, Sébastien Tixeuil and Yasumasa Tamura | [source](https://arxiv.org/abs/2007.15895v1) |

_One row, derived from the record's year, solver and primary source; no fuller history is recorded yet._

## References

- [Quixo Is Solved (arXiv:2007.15895v1, 31 July 2020)](https://arxiv.org/abs/2007.15895v1)

## Resources

**Write-ups**

- [Full paper](https://arxiv.org/pdf/2007.15895v1)

## Notes

Quixo players remove a blank or friendly cube from the boundary of a
5×5 grid, mark it and reinsert it by sliding a row or column. Five
matching symbols in a row, column or diagonal win; creating lines for
both players awards the win to the opponent.

Tanaka and colleagues combined value iteration with backward induction,
using bitboards and compact outcome storage. They computed outcomes
for all 3^25 configurations with the player to move normalized. This
total includes unreachable configurations and does not merge board
symmetries.

The empty board is drawn. With perfect play, neither player can force
a win and play continues indefinitely.
