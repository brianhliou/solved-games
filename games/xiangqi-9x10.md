<!-- GENERATED from data/open/xiangqi-9x10.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Xiangqi (Chinese chess)

[Chess & chess variants](../families/chess.md) · [open problems](../pages/open-problems.md) · [data](../data/open/xiangqi-9x10.yaml)

<a id="open-xiangqi-9x10"></a>

## Open problem: Xiangqi (Chinese chess)

| | |
|---|---|
| Status | Partially solved (unverified) |
| Solved so far | selected endgames: 8,705 material combinations, up to 13 pieces, in a public database |
| Next target | every ending up to a fixed piece count, as chess has through 7 pieces |
| Barrier | compute, memory: Material classes require the subgames reached by captures. Wu and Beal's 2002 results include a selected 10-piece class with 1,004,157,000 indexed entries. Their retrograde algorithm reduces memory use, but larger classes still require more positions to be indexed and evaluated. Repetition is decided by rules on chasing and checking rather than a simple draw, which the cloud database's documentation handles as Asian rules. |
| Latest result | [Chinese Chess Cloud Database](https://www.chessdb.cn/egtb_info.html)\* |
| Last checked | 2026-10-25 |
| Record | [data/open/xiangqi-9x10.yaml](../data/open/xiangqi-9x10.yaml) |

**Unverified:** The database's inventory pages are undated and name no author; the 8,705 count is a row count of those pages on 2026-10-25. Completion dates and independent correctness of the tables are not established, nor whether any piece count is covered completely. No source names the next target; it is this catalog's framing, by analogy with chess.

Searches for newer work:

- 2026-10-25: looked for "xiangqi endgame tablebases seven eight pieces solved 2025", "Chinese chess tablebases complete 2026", and "象棋 残局库"; read both chessdb.cn inventories.; found No published complete set of xiangqi endgame tables for any piece count, and no solution of the starting position. Felicity EGTB (restarted 2024) is a work in progress..

## Solution history

| Date | Size or opening | Result | Strength | Credit | Source |
|---|---|---|---|---|---|
| 2002 | selected attacking-force versus defensive-force endgames and their subgames | 378 databases, about 35 billion entries, including a 10-piece ending that is a theoretical win | — | Ren Wu and Donald F. Beal | [source](https://library.slmath.org/books/Book42/files/wu.pdf) |
| 2026-10-25 | public database of endgame tables | 8,705 material combinations listed, up to 13 pieces (counted on this date; the pages are undated) | — | Chinese Chess Cloud Database; its documentation credits Cyclone for the integrated tables | [source](https://www.chessdb.cn/egtb_info.html) |

_Superseded rows stay in the table._

## Engines

- [Fairy-Stockfish](../engines/fairy-stockfish.md) (engine): competition result, [source](https://github.com/fairy-stockfish/Fairy-Stockfish/wiki/Tournament-results)
- [Pikafish](../engines/pikafish.md) (engine): rating, [source](https://www.pikafish.com/wiki/faq/vs-commercial-engines.html)

## References

- [Chinese Chess Cloud Database, DTC endgame-table inventory; undated, checked 2026-10-25](https://www.chessdb.cn/egtb_info.html)
- [Chinese Chess Cloud Database, DTM endgame-table inventory; undated](https://www.chessdb.cn/egtb_info_dtm.html)
- [Chinese Chess Cloud Database documentation: integrated Cyclone tables and Asian rules](https://www.chessdb.cn/cloudbook_info.html)
- [Ren Wu and Donald F. Beal, A Memory Efficient Retrograde Algorithm and Its Application To Chinese Chess Endgames, More Games of No Chance](https://library.slmath.org/books/Book42/files/wu.pdf) (2002)
- [Xiangqi.com, How to Play Chinese Chess: board dimensions and pieces](https://www.xiangqi.com/how-to-play-xiangqi)

\* Self-archived: the result is available only from its authors (a repository, a post, a deposit), not yet refereed, formally verified or reproduced by someone else. The mark comes off when one of those happens. It applies to this repo's own results too.

## Notes

Xiangqi, or Chinese chess, is played on the points of a board nine lines
wide and ten deep. Published retrograde analyses solve selected endgames by
working backward from wins and losses, using the smaller endings reached by
captures to evaluate larger ones.

Wu and Beal's 2002 work built 378 such databases. The Chinese Chess Cloud
Database now lists tables for 8,705 combinations of material, from 3 to 13
pieces, most of them between 7 and 10. Neither amounts to every ending of
a given size, the step chess reached for seven pieces in 2018.
