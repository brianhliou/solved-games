# Solved Games

> Games with a known result under perfect play, the open problems one step past them, and the engines and tablebases that play them.

Browse it at [solvedgames.brianhliou.com](https://solvedgames.brianhliou.com).

Perfect play known for every position, or at least from the start, computed and stored instead of searched at runtime. Each game has a page with its solution history, references, open problem where one exists, and engines. Everything is generated from the YAML in [`data/`](data/README.md).

> **Status: maintained list.** Two lists, one dataset: games with a known result, and [open problems](pages/open-problems.md) with a published partial result and a named next target. Each open entry carries a `last_checked` date, and the check fails once any entry goes 90 days without a re-check. Entries are checked for plausibility against their primary sources, not certified; a `*` marks a result that exists only as a self-archived artifact, including the maintainer's own two. Corrections are credited in the [progress log](#recent-progress). The data is CC0, fork it freely. See [VISION](VISION.md).

## What "solved" means

Three strengths, from weakest to strongest ([Wikipedia](https://en.wikipedia.org/wiki/Solved_game)):

- **Ultra-weakly solved** — the game-theoretic value of the starting position is known (who wins, or draw), but not how. Hex is ultra-weakly solved for all board sizes by a strategy-stealing argument that names no moves.
- **Weakly solved** — the value *and* a strategy to achieve it from the start are known. Checkers is weakly solved.
- **Strongly solved** — the value is known for every reachable position, not just the start. This is what a tablebase gives you.

## Families

<!-- BEGIN GENERATED:index — source of truth is data/games, data/open and data/engines; regenerate with `npm run build`. Do not hand-edit this table. -->

41 solved, 15 open, 12 engines (7 for games in this list).

| Family | Solved | Open | Engines | Games |
|---|---|---|---|---|
| [Alignment & *m,n,k* games](families/alignment.md) | 10 | [1](families/alignment.md#open-problems) | [3](families/alignment.md#engines) | [Tic-tac-toe](games/tic-tac-toe.md), [Qubic](games/qubic.md), [Gomoku (free-style)](games/gomoku-freestyle.md), [Connect Four](games/connect-four.md), [Teeko](games/teeko.md)\*, [Renju (連珠)](games/renju.md), [Pentago](games/pentago.md), [Quixo](games/quixo.md), [Quarto!](games/quarto.md), [Gobblet Gobblers](games/gobblet-gobblers.md)\* |
| [Morris / mill family](families/morris.md) | 5 | 0 | [1](families/morris.md#engines) | [Three men's morris](games/three-mens-morris.md), [Lasker Morris](games/lasker-morris.md), [Morabaraba](games/morabaraba.md), [Nine Men's Morris](games/nine-mens-morris.md), [Six men's morris](games/six-mens-morris.md)\* |
| [Connection games](families/connection.md) | 4 | [4](families/connection.md#open-problems) | [1](families/connection.md#engines) | [Hex (7×7)](games/hex-7x7.md), [Lines of Action (6×6)](games/lines-of-action-6x6.md), [Hex (9×9, all openings)](games/hex-9x9.md), [Y (side 6)](games/y.md)\* |
| [Mancala](families/mancala.md) | 2 | 0 | 0 | [Kalah](games/kalah.md), [Awari (Oware)](games/awari.md) |
| [Capture & board control](families/capture.md) | 7 | [3](families/capture.md#open-problems) | [1](families/capture.md#engines) | [Othello (6×6)](games/othello-6x6.md)\*, [Pangki](games/pangki.md)\*, [Checkers (English draughts)](games/checkers.md), [Fanorona](games/fanorona.md), [Breakthrough (6×5)](games/breakthrough-6x5.md), [Ostle](games/ostle.md), [Othello](games/othello.md) |
| [Chess & chess variants](families/chess.md) | 2 | [2](families/chess.md#open-problems) | 0 | [Gardner minichess](games/gardner-minichess.md), [Losing chess](games/losing-chess.md) |
| [Hunt & unequal forces](families/hunt.md) | 1 | 0 | 0 | [Tigers and Goats](games/tigers-and-goats.md) |
| [Combinatorial game theory](families/cgt.md) | 7 | [3](families/cgt.md#open-problems) | 0 | [Nim](games/nim.md), [Wythoff's game](games/wythoff-nim.md), [Pentominoes (two-player)](games/pentominoes.md), [Sim](games/sim.md), [Amazons (small boards)](games/amazons-small.md), [Dots and Boxes](games/dots-and-boxes.md)\*, [Domineering](games/domineering.md) |
| [Shogi variants](families/shogi.md) | 1 | 0 | [1](families/shogi.md#engines) | [Dōbutsu shōgi](games/dobutsu-shogi.md) |
| [Go](families/go.md) | 1 | [1](families/go.md#open-problems) | 0 | [Go (5×5)](games/go-5x5.md) |
| [Imperfect information](families/imperfect-info.md) | 1 | 0 | 0 | [Heads-up Limit Texas Hold'em (HULHE)](games/heads-up-limit-holdem.md) |
| [Games of chance](families/chance.md) | 0 | [1](families/chance.md#open-problems) | 0 | — |

All [open problems](pages/open-problems.md) in one table · all [engines](pages/engines.md).

\* Self-archived: the result is available only from its authors (a repository, a post, a deposit), not yet refereed, formally verified or reproduced by someone else. The mark comes off when one of those happens. It applies to this repo's own results too.
<!-- END GENERATED:index -->

## Recent progress

New results, corrections and re-checks, newest first, with credit. The full log is `data/progress.yaml`.

<!-- BEGIN GENERATED:recent-progress — source of truth is data/progress.yaml; regenerate with `npm run build`. Do not hand-edit this list. -->

- **2026-06-19** · [Y (side 6)](games/y.md): Y strongly solved for sides 1-6; the first player wins at every size and no position is a draw · Brian Liou · [source](https://github.com/brianhliou/game-solver) · _solved, self-archived_
- **2026-06-18** · [Six men's morris](games/six-mens-morris.md): Six men's morris strongly solved: a draw over 42,372,745 reachable positions (no flying) · Brian Liou · [source](https://github.com/brianhliou/game-solver) · _solved, self-archived_
- **2025-11-10** · [Kōnane (8×7 and 8×8)](games/konane.md): Kōnane weakly solved on all boards up to 7×7 and strongly up to 6×6; 8×7 and 8×8 stopped at a 21-day limit · Benedikt Siefke · [source](https://doc.neuro.tu-berlin.de/bachelor/2026-02-23-BA-BenediktSiefke.pdf) · _partial, thesis_
- **2025-09-06** · [Tak (4×4)](games/tak-4x4.md): 3×3 Tak is a first-player forced win · Joseph Marrow · [source](https://arxiv.org/abs/2509.05844) · _solved, preprint_
- **2024** · [Go (6×6)](games/go-5x5.md#open-go-6x6): 5×5 Go solved under positional superko: the first player wins the whole board · Owen Randall, Martin Müller, Ting-Han Wei & Ryan Hayward · [source](https://www.ijcai.org/proceedings/2024/774) · _solved_
- **2021** · [Kōnane (8×7 and 8×8)](games/konane.md): Narrow-board Kōnane analysed; the Triple and Quadruple cases left open · Jos W. H. M. Uiterwijk · [source](https://journals.sagepub.com/doi/pdf/10.3233/ICG-220198) · _partial_
- **2013** · [Hex (10×10, remaining openings)](games/hex-9x9.md#open-hex-10x10): All 9×9 Hex openings solved, and the first 10×10 opening (f5, 63 days) · Jakub Pawlewicz & Ryan B. Hayward · [source](https://webdocs.cs.ualberta.ca/~hayward/papers/pawlhayw.pdf) · _solved, partial_
<!-- END GENERATED:recent-progress -->

## Guides

- [Endgame tablebases](guides/tablebases.md): the formats (Syzygy, Gaviota, Nalimov, Lomonosov) and variant tablebases.
- [Retrograde analysis](guides/retrograde-analysis.md): the algorithm under every tablebase, and its literature.
- [Probe APIs and explorers](guides/probe-apis.md): query a solved position without local tables.
- [Dōbutsu shōgi, end to end](guides/dobutsu-shogi.md): one small game through solution, tablebase, probe and explorer.

## Related sites

- [GamesCrafters](https://gamescrafters.berkeley.edu/) (UC Berkeley): strong solutions of many small games, with playable explorers.
- [Chessprogramming wiki](https://www.chessprogramming.org/): the engineering reference for search, tablebases and retrograde analysis.
- [HexWiki](https://www.hexwiki.net/): Hex theory, openings and solved-position results.

## Contributing

Add a solved game only if its result is established in a citable source (paper, thesis, or a solver with published verification). Add an open problem only with a published partial result and a named next target. Link the primary source, not a summary of it, and keep the result and strength columns honest (ultra-weak / weak / strong). Corrections are the most useful pull request and get a credited line in the progress log. Details in [CONTRIBUTING](CONTRIBUTING.md).

## License

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, the contributors have waived all copyright and related rights to this work.
