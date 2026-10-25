<!-- GENERATED from data/open/chess-8x8.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Chess (8×8)

[Chess & chess variants](../families/chess.md) · [open problems](../pages/open-problems.md) · [data](../data/open/chess-8x8.yaml)

<a id="open-chess-8x8"></a>

## Open problem: Chess (8×8)

| | |
|---|---|
| Status | Partially solved (unverified) |
| Solved so far | every position with up to 7 pieces (2018); some 8-piece endings (2021–2026) |
| Next target | Complete 8-piece win/draw/loss and DTZ50 tables, without castling rights |
| Barrier | compute, storage, memory: Ronald de Man's tb8gen documentation estimates 1,500–2,000 TB for a complete compressed 8-piece WDL/DTZ set, with individual tables taking "many weeks, if not months" to generate, and 64–128 GB of RAM per pawnless table with that generator. These are estimates for this implementation. |
| Latest result | [Bourzutschky & Fiekas 2026](https://github.com/lichess-org/op1) (2026)\* |
| Last checked | 2026-10-25 |
| Record | [data/open/chess-8x8.yaml](../data/open/chess-8x8.yaml) |

**Unverified:** The June 2026 KQQQvKQQQ announcement reports agreement with Bourzutschky's counts, but says the new WDL/DTZ verification code had not yet been run on that table. No later verification report was located. The Lichess blog post announcing op1 could not be retrieved directly (403); its coverage claims here rest on the op1 repository's README.

Searches for newer work:

- 2026-10-25: looked for "chess seven man eight man tablebases 2025 2026 Lomonosov Syzygy", "8-piece tablebases 2026 complete", and "chess tablebases complete October 2026"; checked the Lichess release, tb8gen documentation and subsequent TalkChess discussion.; found Found the February 2026 op1 release and de Man's June 2026 KQQQvKQQQ result. No newer published complete 8-piece set or proof of the standard starting position's value was located..

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| 2012 | 7-piece Lomonosov endgames | distance-to-mate tables computed at Moscow State University | — | Lomonosov project, Computer Science department of Moscow State University | [source](https://tb7.chessok.com/about-site) |
| 2018-08-19 | all endgames through 7 pieces, without castling rights | Syzygy WDL/DTZ tables completed for every 7-piece ending | Strong | Bojun Guo and Ronald de Man | [source](https://lichess.org/@/lichess/blog/7-piece-syzygy-tablebases-are-complete/W3WeMyQA) |
| 2021-04-12 | selected pawnless 8-piece classes | one-sided distance-to-conversion tables; castling and the 50-move rule excluded | — | Marc Bourzutschky | [source](https://www.arves.org/arves/index.php/en/endgamestudies/theory/1509-8-men-tablebase-first-explorations) |
| 2026-02-07 | 8-piece endings with at least one pair of opposing pawns on the same file (op1) | distance-to-conversion tables published and probeable on Lichess | — | Marc Bourzutschky and Niklas Fiekas, with Lichess | [source](https://github.com/lichess-org/op1) |
| 2026-06-20 | 8-piece KQQQvKQQQ | WDL/DTZ tables generated; counts reported to agree with Bourzutschky | — | Ronald de Man | [source](https://talkchess.com/viewtopic.php?start=30&t=86313) |

_Superseded rows stay in the table._

## References

- [Lichess, op1: Marc Bourzutschky's partial 8-piece tablebase (every 8-piece ending with at least one pair of opposing pawns on the same file)](https://github.com/lichess-org/op1) (2026)
- [Ronald de Man, KQQQvKQQQ result, disk-based 8-piece TB generator thread](https://talkchess.com/viewtopic.php?start=30&t=86313) (2026-06-20)
- [Lichess, Op1 - Partial 8-piece tablebase available](https://lichess.org/@/lichess/blog/op1-partial-8-piece-tablebase-available/1ptPBDpC) (2026-02-07)
- [Lichess, 7-piece Syzygy tablebases are complete](https://lichess.org/@/lichess/blog/7-piece-syzygy-tablebases-are-complete/W3WeMyQA) (2018-08-19)
- [Marc Bourzutschky, 8-men Tablebase: first explorations](https://www.arves.org/arves/index.php/en/endgamestudies/theory/1509-8-men-tablebase-first-explorations) (2021)
- [Ronald de Man, tb8gen documentation and resource estimates](https://github.com/syzygy1/tb8gen/blob/master/README.md)
- [Niklas Fiekas, python-chess Syzygy probing documentation](https://python-chess.readthedocs.io/en/latest/syzygy.html)
- [Lomonosov tablebase publisher, About Lomonosov tablebases](https://tb7.chessok.com/about-site)

\* Self-archived: the result is available only from its authors (a repository, a post, a deposit), not yet refereed, formally verified or reproduced by someone else. The mark comes off when one of those happens. It applies to this repo's own results too.

## Notes

Standard chess is played on an 8×8 board. Endgame tablebases work backward
from terminal positions, assigning exact values to the positions they cover.
Piece counts include both kings. Complete seven-piece coverage excludes
castling rights; Syzygy supports play under the 50-move rule.

The op1 extension covers eight-piece positions with opposing white and
black pawns on the same file, subject to its material exclusions. Neither
pawn can promote before a capture, so this subset can be built from known
smaller endings. Lichess says the subset accounts for more than half of
the eight-piece positions reached in practical play there. Its DTC results
ignore the 50-move rule.

Full eight-piece coverage must account for captures and every possible
promotion, including underpromotions. Endgame solutions do not establish
the value of the standard starting position.
