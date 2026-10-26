<!-- GENERATED from data/games, data/open and data/engines (genre: capture) by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Capture & board control

[All families](../README.md#families) · 7 solved · 3 open · 12 engines

## Solved

| Game | Result under perfect play | Strength | Method | Year | Source |
|---|---|---|---|---|---|
| [Othello (6×6)](../games/othello-6x6.md) | Second player wins | Weak | Alpha Beta Search | 1993 | [Feinstein 1993](https://www.maths.nottingham.ac.uk/plp/pmzjff/Othello/6x6sol.html)\* |
| [Pangki](../games/pangki.md) | Draw | Strong | Retrograde analysis | 2001 | [Doucette 2001](https://jasondoucette.com/ai.html#Pangki)\* |
| [Checkers (English draughts)](../games/checkers.md) | Draw | Weak | Retrograde analysis | 2007 | [Schaeffer et al. 2007](https://www.science.org/doi/10.1126/science.1144079) |
| [Fanorona](../games/fanorona.md) | Draw | Weak | Proof-number search | 2007 | [Schadd et al. 2007](https://dke.maastrichtuniversity.nl/m.winands/documents/Fanorona.pdf) |
| [Breakthrough (6×5)](../games/breakthrough-6x5.md) | Second player wins | Weak | Proof-number search | 2011 | [Saffidine et al. 2011](https://www.lamsade.dauphine.fr/~cazenave/papers/solving.pdf) |
| [Ostle](../games/ostle.md) | Draw | Strong | Retrograde analysis | 2022 | [Takizawa 2023](https://pmc.ncbi.nlm.nih.gov/articles/PMC10557503/) |
| [Othello](../games/othello.md) | Draw | Weak | Alpha-beta + DB | 2023 | [Takizawa 2023](https://arxiv.org/abs/2310.19387) |

\* Self-archived: the result is available only from its authors (a repository, a post, a deposit), not yet refereed, formally verified or reproduced by someone else. The mark comes off when one of those happens. It applies to this repo's own results too.

## Open problems

| Problem | Status | Next target | Latest result | Last checked |
|---|---|---|---|---|
| [Breakthrough (8×8)](../games/breakthrough-6x5.md#open-breakthrough-8x8) | Smaller board solved | The standard 8×8 starting position, with two rows of pawns per player | [Björnsson et al. 2026](https://journals.sagepub.com/doi/abs/10.1177/13896911261430592) (2026-03-25) | 2026-10-25 |
| [International draughts (10×10)](../games/international-draughts-10x10.md) | Partially solved | every 10-piece ending with five pieces a side; 18.9% of its non-capture positions are resolved | [Grimminck 2026](https://damforum.nl/viewtopic.php?t=8907) (2026-10-19)\* | 2026-10-25 |
| [Kōnane (8×7 and 8×8)](../games/konane.md) | Smaller board solved | 8×7 | [Siefke 2025](https://doc.neuro.tu-berlin.de/bachelor/2026-02-23-BA-BenediktSiefke.pdf) (2025-11-10) | 2026-10-17 |

## Engines

- [Cake](../engines/cake.md) (engine): competition result, [source](https://www.fierz.ch/cake186.php)
- [Dragon Draughts](../engines/dragon-draughts.md) (engine): competition result, [source](https://www.mdgsoftware.nl/draughts/tournament.html)
- [Edax](../engines/edax.md) (engine): third-party assessment, [source](https://arxiv.org/abs/2310.19387)
- [Egaroucid](../engines/egaroucid.md) (engine): competition result, [source](https://www.egaroucid.nyanyan.dev/en/)
- [Fairy-Stockfish](../engines/fairy-stockfish.md) (engine): competition result, [source](https://github.com/fairy-stockfish/Fairy-Stockfish/wiki/Tournament-results)
- [Galvanise Zero (gzero)](../engines/galvanise-zero.md) (engine): competition result, [source](https://github.com/richemslie/galvanise_zero)
- [GuiNN Checkers](../engines/guinn-checkers.md) (engine): third-party assessment, [source](https://www.fierz.ch/checkers.htm)
- [Kingsrow](../engines/kingsrow.md) (engine): competition result, [source](https://www.uwccpi2023.draughtsprograms.eu/conclusion.html)
- [ostle_solver](../engines/ostle-solver.md) (solver): perfect play, [source](https://pmc.ncbi.nlm.nih.gov/articles/PMC10557503/)
- [Pangki God](../engines/pangki-god.md) (solver): perfect play, [source](https://jasondoucette.com/download/pangkigod.zip)
- [Scan](../engines/scan.md) (engine): competition result, [source](https://hjetten.home.xs4all.nl/scan/scan.html)
- [Takizawa 6×6 Othello tablebase and query tool](../engines/takizawa-othello-6x6.md) (solver): perfect play, [source](https://arxiv.org/abs/2411.01029)

## Not yet verified

- [Mū tōrere](../games/mu-torere.md): not yet checked against its primary source
