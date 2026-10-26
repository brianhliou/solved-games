<!-- GENERATED from data/engines/*.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Engines

55 programs that play or solve games, grouped by family, strongest evidence first. A solver plays from a solution; an engine searches. Each name opens the record: the strength claim, its source, the author and the full license terms. Records are in `data/engines/`; `npm run check` rejects a strength claim without a source.

Evidence, strongest first: perfect play, competition result, rating, match result, third-party assessment, self-reported, no claim. A self-reported number is the author's own and has not been reproduced here. An engine that plays games in several families appears under each.

## Alignment & *m,n,k* games

| Engine | Kind | Games | Evidence | License |
|---|---|---|---|---|
| <a id="engine-pons-connect4"></a>[Connect 4 Game Solver](../engines/pons-connect4.md) | solver | [Connect Four](../games/connect-four.md) | [perfect play](http://blog.gamesolver.org/) | AGPL-3.0 |
| <a id="engine-gamesmanuni"></a>[GamesmanUni](../engines/gamesmanuni.md) | solver | [Quarto!](../games/quarto.md) | [perfect play](https://www2.eecs.berkeley.edu/Pubs/TechRpts/2023/Archive/EECS-2023-186.pdf) | AGPL-3.0-or-later |
| <a id="engine-gobblet-solver"></a>[gobblet (Possibly Wrong)](../engines/gobblet-solver.md) | solver | [Gobblet Gobblers](../games/gobblet-gobblers.md) | [perfect play](https://possiblywrong.wordpress.com/2024/06/11/strongly-solving-gobblet-gobblers-using-retrograde-analysis/) | Unlicense |
| <a id="engine-pentago"></a>[pentago (Irving)](../engines/pentago.md) | solver | [Pentago](../games/pentago.md) | [perfect play](https://arxiv.org/abs/1404.0743) | BSD |
| <a id="engine-alphagomoku"></a>[AlphaGomoku (Kozarzewski)](../engines/alphagomoku.md) | engine | [Gomoku (free-style)](../games/gomoku-freestyle.md), [Renju (連珠)](../games/renju.md) | [competition result](https://gomocup.org/results/gomocup-result-2026/) | GPL-3.0-or-later |
| <a id="engine-cloudict"></a>[Cloudict](../engines/cloudict.md) | engine | [Connect6 (19×19)](../games/connect6.md) | [competition result](https://www.game-ai-forum.org/icga-tournaments/tournament.php?id=244) | BSD-style |
| <a id="engine-galvanise-zero"></a>[Galvanise Zero (gzero)](../engines/galvanise-zero.md) | engine | [Connect6 (19×19)](../games/connect6.md) | [competition result](https://github.com/richemslie/galvanise_zero) | MIT |
| <a id="engine-katagomo"></a>[KataGomo](../engines/katagomo.md) | engine | [Gomoku (free-style)](../games/gomoku-freestyle.md), [Renju (連珠)](../games/renju.md) | [competition result](https://gomocup.org/results/gomocup-result-2026/) | MIT |
| <a id="engine-rapfi"></a>[Rapfi](../engines/rapfi.md) | engine | [Gomoku (free-style)](../games/gomoku-freestyle.md), [Renju (連珠)](../games/renju.md) | [competition result](https://gomocup.org/results/gomocup-result-2025/) | GPL-3.0 |
| <a id="engine-kataconnect6"></a>[KataConnect6](../engines/kataconnect6.md) | engine | [Connect6 (19×19)](../games/connect6.md) | [self-reported](https://github.com/hzyhhzy/KataGomo/blob/master/README_old.md) | MIT |

## Morris / mill family

| Engine | Kind | Games | Evidence | License |
|---|---|---|---|---|
| <a id="engine-malom"></a>[Malom](../engines/malom.md) | solver | [Nine Men's Morris](../games/nine-mens-morris.md), [Lasker Morris](../games/lasker-morris.md), [Morabaraba](../games/morabaraba.md) | [perfect play](https://arxiv.org/abs/1408.0032) | GPL-3.0 |
| <a id="engine-sanmill"></a>[Sanmill](../engines/sanmill.md) | solver | [Nine Men's Morris](../games/nine-mens-morris.md), [Lasker Morris](../games/lasker-morris.md), [Morabaraba](../games/morabaraba.md) | [perfect play](https://github.com/calcitem/Sanmill/wiki/Perfect-Database) | AGPL-3.0-or-later |

## Connection games

| Engine | Kind | Games | Evidence | License |
|---|---|---|---|---|
| <a id="engine-mia"></a>[MIA and MC-LOA](../engines/mia.md) | engine | [Lines of Action (8×8)](../games/lines-of-action-6x6.md#open-lines-of-action-8x8) | [competition result](https://dke.maastrichtuniversity.nl/m.winands/loa/download.html) | Proprietary |
| <a id="engine-mohex"></a>[MoHex 2.0 and Wolve (Benzene)](../engines/mohex.md) | engine | [Hex (7×7)](../games/hex-7x7.md), [Hex (9×9, all openings)](../games/hex-9x9.md), [Hex (10×10, remaining openings)](../games/hex-9x9.md#open-hex-10x10) | [competition result](https://webdocs.cs.ualberta.ca/~hayward/hex/) | LGPL-3.0 |
| <a id="engine-tiltak"></a>[Tiltak](../engines/tiltak.md) | engine | [Tak (4×4)](../games/tak-4x4.md) | [match result](https://github.com/MortenLohne/tiltak) | GPL-3.0-or-later |
| <a id="engine-katahex"></a>[KataHex](../engines/katahex.md) | engine | [Hex (7×7)](../games/hex-7x7.md), [Hex (9×9, all openings)](../games/hex-9x9.md), [Hex (10×10, remaining openings)](../games/hex-9x9.md#open-hex-10x10) | [third-party assessment](https://www.hexwiki.net/index.php/KataHex) | MIT |

## Mancala

| Engine | Kind | Games | Evidence | License |
|---|---|---|---|---|
| <a id="engine-awari-python"></a>[Awari-Python database prober](../engines/awari-python.md) | solver | [Awari (Oware)](../games/awari.md) | [perfect play](https://github.com/keesverstoep/Awari/blob/main/Awari-Python/README.md) | Apache-2.0 |
| <a id="engine-irving-kalah"></a>[kalah (Irving)](../engines/irving-kalah.md) | solver | [Kalah](../games/kalah.md) | [perfect play](https://naml.us/paper/irving2000_kalah.pdf) | BSD-3-Clause |
| <a id="engine-aalina"></a>[Aalina](../engines/aalina.md) | engine | [Awari (Oware)](../games/awari.md) | [match result](https://48stones.com/research-games-benchmark/) | GPL-3.0-or-later |

## Capture & board control

| Engine | Kind | Games | Evidence | License |
|---|---|---|---|---|
| <a id="engine-ostle-solver"></a>[ostle_solver](../engines/ostle-solver.md) | solver | [Ostle](../games/ostle.md) | [perfect play](https://pmc.ncbi.nlm.nih.gov/articles/PMC10557503/) | MIT |
| <a id="engine-pangki-god"></a>[Pangki God](../engines/pangki-god.md) | solver | [Pangki](../games/pangki.md) | [perfect play](https://jasondoucette.com/download/pangkigod.zip) | Not stated |
| <a id="engine-takizawa-othello-6x6"></a>[Takizawa 6×6 Othello tablebase and query tool](../engines/takizawa-othello-6x6.md) | solver | [Othello (6×6)](../games/othello-6x6.md) | [perfect play](https://arxiv.org/abs/2411.01029) | CC-BY-4.0 |
| <a id="engine-cake"></a>[Cake](../engines/cake.md) | engine | [Checkers (English draughts)](../games/checkers.md) | [competition result](https://www.fierz.ch/cake186.php) | Not stated |
| <a id="engine-dragon-draughts"></a>[Dragon Draughts](../engines/dragon-draughts.md) | engine | [International draughts (10×10)](../games/international-draughts-10x10.md) | [competition result](https://www.mdgsoftware.nl/draughts/tournament.html) | Freeware |
| <a id="engine-egaroucid"></a>[Egaroucid](../engines/egaroucid.md) | engine | [Othello](../games/othello.md) | [competition result](https://www.egaroucid.nyanyan.dev/en/) | GPL-3.0-or-later |
| <a id="engine-fairy-stockfish"></a>[Fairy-Stockfish](../engines/fairy-stockfish.md) | engine | [Breakthrough (8×8)](../games/breakthrough-6x5.md#open-breakthrough-8x8), [Othello](../games/othello.md) | [competition result](https://github.com/fairy-stockfish/Fairy-Stockfish/wiki/Tournament-results) | GPL-3.0-or-later |
| [Galvanise Zero (gzero)](../engines/galvanise-zero.md) | engine | [Breakthrough (8×8)](../games/breakthrough-6x5.md#open-breakthrough-8x8), [Othello](../games/othello.md) | [competition result](https://github.com/richemslie/galvanise_zero) | MIT |
| <a id="engine-kingsrow"></a>[Kingsrow](../engines/kingsrow.md) | engine | [Checkers (English draughts)](../games/checkers.md), [International draughts (10×10)](../games/international-draughts-10x10.md) | [competition result](https://www.uwccpi2023.draughtsprograms.eu/conclusion.html) | Freeware |
| <a id="engine-scan"></a>[Scan](../engines/scan.md) | engine | [International draughts (10×10)](../games/international-draughts-10x10.md) | [competition result](https://hjetten.home.xs4all.nl/scan/scan.html) | GPL-3.0 |
| <a id="engine-edax"></a>[Edax](../engines/edax.md) | engine | [Othello](../games/othello.md) | [third-party assessment](https://arxiv.org/abs/2310.19387) | GPL-3.0 |
| <a id="engine-guinn-checkers"></a>[GuiNN Checkers](../engines/guinn-checkers.md) | engine | [Checkers (English draughts)](../games/checkers.md) | [third-party assessment](https://www.fierz.ch/checkers.htm) | CC-BY-NC-SA-3.0 |

## Chess & chess variants

| Engine | Kind | Games | Evidence | License |
|---|---|---|---|---|
| <a id="engine-fathom"></a>[Fathom](../engines/fathom.md) | solver | [Chess (8×8)](../games/chess-8x8.md) | [perfect play](https://github.com/jdart1/Fathom#readme) | MIT |
| <a id="engine-losing-loeser"></a>[LosingLoeser](../engines/losing-loeser.md) | solver | [Losing chess](../games/losing-chess.md) | [perfect play](https://magma.maths.usyd.edu.au/~watkins/LOSING_CHESS/) | Not stated |
| [Fairy-Stockfish](../engines/fairy-stockfish.md) | engine | [Chess (8×8)](../games/chess-8x8.md), [Xiangqi (Chinese chess)](../games/xiangqi-9x10.md), [Losing chess](../games/losing-chess.md), [Gardner minichess](../games/gardner-minichess.md) | [competition result](https://github.com/fairy-stockfish/Fairy-Stockfish/wiki/Tournament-results) | GPL-3.0-or-later |
| <a id="engine-stockfish"></a>[Stockfish](../engines/stockfish.md) | engine | [Chess (8×8)](../games/chess-8x8.md) | [competition result](https://www.chessdom.com/stockfish-claims-its-19th-tcec-title-defeating-reckless-in-the-superfinal/) | GPL-3.0 |
| <a id="engine-pikafish"></a>[Pikafish](../engines/pikafish.md) | engine | [Xiangqi (Chinese chess)](../games/xiangqi-9x10.md) | [rating](https://www.pikafish.com/wiki/faq/vs-commercial-engines.html) | GPL-3.0 |
| <a id="engine-gardnerfish"></a>[Gardnerfish](../engines/gardnerfish.md) | engine | [Gardner minichess](../games/gardner-minichess.md) | [self-reported](https://arxiv.org/html/1307.7118) | GPL-3.0-or-later |

## Hunt & unequal forces

| Engine | Kind | Games | Evidence | License |
|---|---|---|---|---|
| [GamesmanUni](../engines/gamesmanuni.md) | solver | [Tigers and Goats](../games/tigers-and-goats.md) | [perfect play](https://www2.eecs.berkeley.edu/Pubs/TechRpts/2023/Archive/EECS-2023-186.pdf) | AGPL-3.0-or-later |

## Combinatorial game theory

| Engine | Kind | Games | Evidence | License |
|---|---|---|---|---|
| <a id="engine-obsequi"></a>[Obsequi](../engines/obsequi.md) | solver | [Domineering](../games/domineering.md), [Domineering (12×12)](../games/domineering.md#open-domineering-12x12) | [perfect play](https://doi.org/10.3233/ICG-2002-25202) | GPL-2.0-or-later |
| [Fairy-Stockfish](../engines/fairy-stockfish.md) | engine | [Amazons (10×10)](../games/amazons-small.md#open-amazons-10x10) | [competition result](https://github.com/fairy-stockfish/Fairy-Stockfish/wiki/Tournament-results) | GPL-3.0-or-later |
| [Galvanise Zero (gzero)](../engines/galvanise-zero.md) | engine | [Amazons (10×10)](../games/amazons-small.md#open-amazons-10x10) | [competition result](https://github.com/richemslie/galvanise_zero) | MIT |
| <a id="engine-invader"></a>[Invader](../engines/invader.md) | engine | [Amazons (10×10)](../games/amazons-small.md#open-amazons-10x10) | [competition result](https://www.csun.edu/~lorentz/amazon.htm) | Not stated |
| <a id="engine-dabble"></a>[Dabble](../engines/dabble.md) | engine | [Dots and Boxes](../games/dots-and-boxes.md), [Dots and Boxes (5×6 boxes)](../games/dots-and-boxes.md#open-dots-and-boxes-5x6) | [match result](https://www.dianneandpaul.net/PRsBoxes/) | GPL-2.0 |
| <a id="engine-prsboxes"></a>[PRsBoxes](../engines/prsboxes.md) | engine | [Dots and Boxes](../games/dots-and-boxes.md) | [match result](https://www.dianneandpaul.net/PRsBoxes/) | Not stated |

## Shogi variants

| Engine | Kind | Games | Evidence | License |
|---|---|---|---|---|
| <a id="engine-clausecker-dobutsu"></a>[dobutsu (Clausecker)](../engines/clausecker-dobutsu.md) | engine | [Dōbutsu shōgi](../games/dobutsu-shogi.md) | [perfect play](https://github.com/clausecker/dobutsu) | BSD-2-Clause |
| [Fairy-Stockfish](../engines/fairy-stockfish.md) | engine | [Dōbutsu shōgi](../games/dobutsu-shogi.md) | [competition result](https://github.com/fairy-stockfish/Fairy-Stockfish/wiki/Tournament-results) | GPL-3.0-or-later |

## Go

| Engine | Kind | Games | Evidence | License |
|---|---|---|---|---|
| <a id="engine-sanko"></a>[Sanko](../engines/sanko.md) | engine | [Go (5×5)](../games/go-5x5.md), [Go (6×6)](../games/go-5x5.md#open-go-6x6) | [perfect play](https://arxiv.org/abs/2610.29414) | Apache-2.0 |
| <a id="engine-katago"></a>[KataGo](../engines/katago.md) | engine | [Go (5×5)](../games/go-5x5.md), [Go (6×6)](../games/go-5x5.md#open-go-6x6) | [rating](https://github.com/breakwa11/GoAIRatings) | MIT |

## Imperfect information

| Engine | Kind | Games | Evidence | License |
|---|---|---|---|---|
| <a id="engine-slumbot"></a>[Slumbot](../engines/slumbot.md) | engine | [Heads-up Limit Texas Hold'em (HULHE)](../games/heads-up-limit-holdem.md) | [competition result](https://poker.cs.ualberta.ca/news.html) | MIT |
| <a id="engine-cepheus"></a>[Cepheus / CFR+](../engines/cepheus.md) | solver | [Heads-up Limit Texas Hold'em (HULHE)](../games/heads-up-limit-holdem.md) | [match result](https://www.idi.ntnu.no/emner/it3105/materials/poker/poker-solved-2017.pdf) | BSD |

## Games of chance

| Engine | Kind | Games | Evidence | License |
|---|---|---|---|---|
| <a id="engine-bgblitz"></a>[BGBlitz](../engines/bgblitz.md) | engine | [Backgammon](../games/backgammon.md) | [competition result](https://www.bgblitz.com/olympiad_2016.html) | Proprietary |
| <a id="engine-gnu-backgammon"></a>[GNU Backgammon](../engines/gnu-backgammon.md) | engine | [Backgammon](../games/backgammon.md) | [competition result](https://www.bgblitz.com/olympiad_2006.html) | GPL-3.0-or-later |
| <a id="engine-extreme-gammon"></a>[eXtreme Gammon](../engines/extreme-gammon.md) | engine | [Backgammon](../games/backgammon.md) | [rating](https://www.extremegammon.com/studies.aspx) | Proprietary |

## For games outside this list

| Engine | Kind | Games | Evidence | License |
|---|---|---|---|---|
| <a id="engine-ab-jchess"></a>[AB-JChess](../engines/ab-jchess.md) | engine | Jieqi (dark xiangqi) | [match result](https://mistboard.com/blog/ab-jchess) | GPL-3.0 |
| <a id="engine-katago-animalchess"></a>[KataGo-AnimalChess](../engines/katago-animalchess.md) | engine | Dou Shou Qi (Jungle) | [match result](https://mistboard.com/blog/katago-jungle) | MIT |
| <a id="engine-jqe"></a>[jqe](../engines/jqe.md) | engine | Jieqi (dark xiangqi) | [self-reported](https://github.com/devinokeefe/jieqi/blob/main/REPORT.md) | MIT |
| <a id="engine-misty-banqi"></a>[MistyBanqi](../engines/misty-banqi.md) | engine | Banqi (Chinese dark chess) | [self-reported](https://github.com/brianhliou/misty-banqi#strength) | MIT |
| <a id="engine-misty-flip-jungle"></a>[MistyFlipJungle](../engines/misty-flip-jungle.md) | engine | Flip Jungle (hidden-identity animal chess, 4×4) | [self-reported](https://github.com/brianhliou/misty-flip-jungle#strength) | MIT |
| <a id="engine-misty-jungle"></a>[MistyJungle](../engines/misty-jungle.md) | engine | Dou Shou Qi (Jungle) | [self-reported](https://github.com/brianhliou/misty-jungle#strength) | MIT |
| <a id="engine-pikafish-jieqi-wasm"></a>[PikaJieQi (Mistboard build)](../engines/pikafish-jieqi-wasm.md) | engine | Jieqi (xiangqi with face-down pieces) | [self-reported](https://github.com/brianhliou/pikafish-jieqi-wasm#strength-and-an-open-challenge) | GPL-3.0-or-later |
| <a id="engine-misty"></a>[Misty](../engines/misty.md) | engine | Fog-of-war chess (dark chess) | [no claim](https://github.com/brianhliou/misty) | GPL-3.0 |
