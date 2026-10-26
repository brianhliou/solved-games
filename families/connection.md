<!-- GENERATED from data/games, data/open and data/engines (genre: connection) by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Connection games

[All families](../README.md#families) · 4 solved · 4 open · 4 engines

## Solved

| Game | Result under perfect play | Strength | Method | Year | Source |
|---|---|---|---|---|---|
| [Hex (7×7)](../games/hex-7x7.md) | First player wins | Weak | Strategy-stealing | 2003 | [Yang et al. 2003](https://webdocs.cs.ualberta.ca/~hayward/papers/solving7x7hex.pdf) |
| [Lines of Action (6×6)](../games/lines-of-action-6x6.md) | First player wins | Weak | Proof-number search | 2008 | [Winands 2008](https://dke.maastrichtuniversity.nl/m.winands/documents/LoaNote.pdf) |
| [Hex (9×9, all openings)](../games/hex-9x9.md) | First player wins | Weak | Depth-first PNS | 2012 | [Pawlewicz et al. 2012](https://webdocs.cs.ualberta.ca/~hayward/papers/pawlhayw.pdf) |
| [Y (side 6)](../games/y.md) | First player wins | Strong | Retrograde analysis | 2026 | [Liou 2026](https://github.com/brianhliou/game-solver/blob/447f644826998390e3fd9b494e5944a6bdc5e64f/README.md)\* |

\* Self-archived: the result is available only from its authors (a repository, a post, a deposit), not yet refereed, formally verified or reproduced by someone else. The mark comes off when one of those happens. It applies to this repo's own results too.

Hex is also *ultra-weakly* solved for every board size: the first player wins by strategy stealing ([Nash, 1952](https://en.wikipedia.org/wiki/Hex_(board_game))), with no explicit strategy. On 10×10 one opening (f5) was solved in 2013; the rest are tracked as an open problem below.

## Open problems

| Problem | Status | Next target | Latest result | Last checked |
|---|---|---|---|---|
| [Hex (10×10, remaining openings)](../games/hex-9x9.md#open-hex-10x10) | Partially solved | The current table of solved 10×10 opening cells from Hayward's group | [Pawlewicz & Hayward 2013](https://webdocs.cs.ualberta.ca/~hayward/papers/pawlhayw.pdf) (2013) | 2026-10-17 |
| [Lines of Action (8×8)](../games/lines-of-action-6x6.md#open-lines-of-action-8x8) | Smaller board solved | The standard 8×8 start under Computer Olympiad rules, with 7×7 as an intermediate target | [Winands 2008](https://dke.maastrichtuniversity.nl/m.winands/documents/LoaNote.pdf) (2008-12) | 2026-10-25 |
| [Tak (4×4)](../games/tak-4x4.md) | Smaller board solved | 4×4 | [Marrow 2025](https://arxiv.org/abs/2509.05844) (2025-09-06) | 2026-10-17 |
| [Y (side 7)](../games/y.md#open-y-side-7) | Smaller board solved | Side 7 (28 cells), slice by slice | [Liou 2026](https://github.com/brianhliou/game-solver) (2026-06-19)\* | 2026-10-17 |

## Engines

- [KataHex](../engines/katahex.md) (engine): third-party assessment, [source](https://www.hexwiki.net/index.php/KataHex)
- [MIA and MC-LOA](../engines/mia.md) (engine): competition result, [source](https://dke.maastrichtuniversity.nl/m.winands/loa/download.html)
- [MoHex 2.0 and Wolve (Benzene)](../engines/mohex.md) (engine): competition result, [source](https://webdocs.cs.ualberta.ca/~hayward/hex/)
- [Tiltak](../engines/tiltak.md) (engine): match result, [source](https://github.com/MortenLohne/tiltak)
