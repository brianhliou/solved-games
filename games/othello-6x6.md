<!-- GENERATED from data/games/othello-6x6.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Othello (6×6)

[Capture & board control](../families/capture.md) · [all families](../README.md#families) · [data](../data/games/othello-6x6.yaml)

White wins 20–16 from the standard start under perfect play; the alternative Reversi start gives White a 19–17 win.

| | |
|---|---|
| Result | Second player wins |
| Strength | Weak |
| Method | Alpha Beta Search |
| Year | 1993 |
| Solved by | Joel Feinstein |
| Source | [Feinstein 1993](https://www.maths.nottingham.ac.uk/plp/pmzjff/Othello/6x6sol.html)\* |
| Board | 6×6; standard diagonal four-disc start |
| Evidence | self-archived\* |

\* Self-archived: the result is available only from its authors (a repository, a post, a deposit), not yet refereed, formally verified or reproduced by someone else. The mark comes off when one of those happens. It applies to this repo's own results too.

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| 1993 | 6×6 | second player wins | Weak | Joel Feinstein | [source](https://www.maths.nottingham.ac.uk/plp/pmzjff/Othello/6x6sol.html) |

_One row, derived from the record's year, solver and primary source; no fuller history is recorded yet._

## Engines

- [Takizawa 6×6 Othello tablebase and query tool](../engines/takizawa-othello-6x6.md) (solver): perfect play, [source](https://arxiv.org/abs/2411.01029)

## References

- [Joel Feinstein, Perfect play in 6×6 Othello from two alternative starting positions](https://www.maths.nottingham.ac.uk/plp/pmzjff/Othello/6x6sol.html)
- [Joel Feinstein, Amenor wins World 6×6 championships! (British Othello Federation newsletter, July 1993; author-hosted republication)](https://www.maths.nottingham.ac.uk/plp/pmzjff/Othello/Amenor.html)
- [Yuki Takeshita, Makoto Sakamoto, Takao Ito and Satoshi Ikeda, Perfect Play in Miniature Othello (2016 proceedings chapter; abstract confirms Feinstein's sequence)](https://link.springer.com/chapter/10.1007/978-3-319-23207-2_28)
- [World Othello Federation, Official rules for the game Othello](https://www.worldothello.org/about/about-othello/othello-rules/official-rules/english)

## Notes

This is Othello on a 6×6 board, starting with four central discs arranged
diagonally. Black moves first. Players place discs to bracket and flip
opposing discs, aiming to finish with more discs of their own colour.
These are the usual [Othello rules](https://www.worldothello.org/about/about-othello/othello-rules/official-rules/english)
applied to the smaller board.

Joel Feinstein solved the game in 1993 with his program Modot. It used
exhaustive alpha-beta search, ordering moves through short midgame searches.
His account reports about 40 billion searched positions and two weeks of
processor time for the standard start. White wins 20–16. The alternative
Reversi starting arrangement gives White a 19–17 win; Feinstein publishes
[perfect-play sequences for both starts](https://www.maths.nottingham.ac.uk/plp/pmzjff/Othello/6x6sol.html).

Feinstein reported the analysis in the July 1993 British Othello Federation
newsletter. His scoring convention credits empty squares to the winner.
Takeshita, Sakamoto, Ito and Ikeda later confirmed that his standard-start
sequence is a perfect play, as stated in their
[2016 chapter abstract](https://link.springer.com/chapter/10.1007/978-3-319-23207-2_28).
