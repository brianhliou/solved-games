# Endgame tablebases

[Back to the index](../README.md)

Precomputed perfect play for positions with few pieces. Chess is the deep end; the formats differ in what they store and how they compress it.

- [Endgame tablebase (Wikipedia)](https://en.wikipedia.org/wiki/Endgame_tablebase) — the history and the metrics (DTM, DTZ, WDL).
- [Endgame Tablebases (Chessprogramming wiki)](https://www.chessprogramming.org/Endgame_Tablebases) — the engineering reference.
- **[Syzygy](https://www.chessprogramming.org/Syzygy_Bases)** (Ronald de Man, 2013) — WDL + DTZ50, 7 pieces, the compact modern default (~18 GB for 6-piece, ~17 TB for 7-piece). What most engines and Lichess use.
- **Gaviota** (Miguel Ballicora) — distance-to-mate, ignores the 50-move rule. Good for analysis that wants the shortest forced mate.
- **Nalimov** (Eugene Nalimov, ~2000) — distance-to-mate, 6 pieces, large (~1.2 TB for 6-piece). The format everything before Syzygy used.
- **Lomonosov** (Moscow State University, 2012) — full 7-piece, distance-to-mate, ~140 TB.
- **8-piece** — in progress; Lichess hosts a [partial 8-piece tablebase](https://lichess.org/@/Lichess/blog/op1-partial-8-piece-tablebase-available/1ptPBDpC).

Variant and small-game tablebases:

- [clausecker/dobutsu](https://github.com/clausecker/dobutsu) — C tablebase and engine for Dōbutsu shōgi.
- Lichess hosts variant tablebases for antichess (4-piece) and atomic (6-piece) alongside standard.
