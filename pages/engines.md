<!-- GENERATED from data/engines/*.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Engines

Programs that play or solve games, each with the evidence for its strength and a link to it. A solver plays from a solution; an engine searches. Records are in `data/engines/`; `npm run check` rejects a strength claim without a source.

Strength evidence, strongest first: `perfect-play`, `competition`, `rating`, `match-result`, `third-party`, `self-reported`, `none`. A self-reported number is the author's own and has not been reproduced here.

## For games in this list (7)

<a id="engine-pons-connect4"></a>

### Connect 4 Game Solver

- **Games:** [Connect Four](../games/connect-four.md)
- **Kind:** solver · **License:** AGPL-3.0 · **Author:** Pascal Pons
- **Strength (perfect-play):** A solver for any Connect Four position; the companion tutorial, "Solving Connect 4: how to build a perfect AI", builds it step by step. ([source](http://blog.gamesolver.org/))
- **Repository:** <https://github.com/PascalPons/connect4> · last checked 2026-10-17
- **Notes:** A web front end runs at https://connect4.gamesolver.org/.

<a id="engine-clausecker-dobutsu"></a>

### dobutsu (Clausecker)

- **Games:** [Dōbutsu shōgi](../games/dobutsu-shogi.md)
- **Kind:** engine · **License:** BSD-2-Clause (two-clause BSD text in the README; GitHub reports no SPDX match) · **Author:** Robert Clausecker
- **Strength (perfect-play):** "It uses a comprehensive endgame table base to achieve perfect play from any position." ([source](https://github.com/clausecker/dobutsu))
- **Repository:** <https://github.com/clausecker/dobutsu> · last checked 2026-10-17

<a id="engine-edax"></a>

### Edax

- **Games:** [Othello](../games/othello.md)
- **Kind:** engine · **License:** GPL-3.0 · **Author:** Richard Delorme
- **Strength (third-party):** Takizawa (2023), which used a modified Edax to solve the 36-empty-square positions in the weak solution of Othello, describes Edax as "among the strongest software under typical match rules". ([source](https://arxiv.org/abs/2310.19387))
- **Repository:** <https://github.com/abulmo/edax-reversi> · last checked 2026-10-17
- **Notes:** The modified Edax used for the solution is linked from the paper's data-availability section.

<a id="engine-malom"></a>

### Malom

- **Games:** [Nine Men's Morris](../games/nine-mens-morris.md), [Lasker Morris](../games/lasker-morris.md), [Morabaraba](../games/morabaraba.md)
- **Kind:** solver · **License:** GPL-3.0 (stated in the repository's "License (gpl-3.0).txt") · **Author:** Gábor E. Gévay & Gábor Danner
- **Strength (perfect-play):** Plays nine men's morris, Lasker morris and Morabaraba perfectly from the authors' strong-solution databases, and can compute those databases. ([source](https://arxiv.org/abs/1408.0032))
- **Repository:** <https://github.com/ggevay/malom> · last checked 2026-10-17
- **Notes:** Windows only (Visual Studio solution). The released build is on the authors' page, https://www.inf.u-szeged.hu/~danner/mills/.

<a id="engine-mohex"></a>

### MoHex 2.0 and Wolve (Benzene)

- **Games:** [Hex (7×7)](../games/hex-7x7.md), [Hex (9×9, all openings)](../games/hex-9x9.md), [Hex (10×10, remaining openings)](../games/hex-9x9.md#open-hex-10x10)
- **Kind:** engine · **License:** LGPL-3.0 · **Author:** University of Alberta Hex group (Benzene); this CMake repository maintained by cgao3
- **Strength (competition):** Hayward's Hex page: "Versions of MoHex have won gold respectively at every Computer Games Olympiad since 2009" (gold listed for 2009, 2010, 2011, 2013 and 2015). ([source](https://webdocs.cs.ualberta.ca/~hayward/hex/))
- **Repository:** <https://github.com/cgao3/benzene-vanilla-cmake> · last checked 2026-10-17
- **Notes:** This repository is a CMake port of Benzene with development to 2015, including the parallel DFPN solver behind the 9×9 and 10×10 f5 results (Pawlewicz & Hayward 2013). The Olympiad results are for 11×11 and 13×13 play, not the solved board sizes.

<a id="engine-pentago"></a>

### pentago (Irving)

- **Games:** [Pentago](../games/pentago.md)
- **Kind:** solver · **License:** BSD (stated in the README; variant not named) · **Author:** Geoffrey Irving
- **Strength (perfect-play):** A strong solution: perfect play can be computed from any position, from a 3.7 TB database for 17 or fewer stones and by search from scratch above that. ([source](https://arxiv.org/abs/1404.0743))
- **Repository:** <https://github.com/girving/pentago> · last checked 2026-10-17
- **Notes:** The solution can be browsed at https://perfect-pentago.net.

<a id="engine-rapfi"></a>

### Rapfi

- **Games:** [Gomoku (free-style)](../games/gomoku-freestyle.md), [Renju (連珠)](../games/renju.md)
- **Kind:** engine · **License:** GPL-3.0 · **Author:** Haobin Duan and contributors (AUTHORS file)
- **Strength (competition):** Won the freestyle 15×15, freestyle 20×20 and renju leagues at Gomocup 2025. ([source](https://gomocup.org/results/gomocup-result-2025/))
- **Repository:** <https://github.com/dhbloo/rapfi> · last checked 2026-10-17

## For other games (5)

<a id="engine-misty"></a>

### Misty

- **Games:** Fog-of-war chess (dark chess)
- **Kind:** engine · **License:** GPL-3.0 · **Author:** Brian Liou
- **Strength (none):** No rating or match result published. The README says strength is gauged against humans on mistboard.com, and engine-vs-engine results only gate development. ([source](https://github.com/brianhliou/misty))
- **Repository:** <https://github.com/brianhliou/misty> · last checked 2026-10-17
- **Notes:** Maintained by this list's maintainer.

<a id="engine-misty-banqi"></a>

### MistyBanqi

- **Games:** Banqi (Chinese dark chess)
- **Kind:** engine · **License:** MIT · **Author:** Brian Liou
- **Strength (self-reported):** Tuned by paired-deal self-play bakeoffs. The README makes no state-of-the-art claim: it has not played CLAP_CDC, DarkKnight or other top programs, so there is no head-to-head result. ([source](https://github.com/brianhliou/misty-banqi#strength))
- **Repository:** <https://github.com/brianhliou/misty-banqi> · last checked 2026-10-17
- **Notes:** Maintained by this list's maintainer.

<a id="engine-misty-flip-jungle"></a>

### MistyFlipJungle

- **Games:** Flip Jungle (hidden-identity animal chess, 4×4)
- **Kind:** engine · **License:** MIT · **Author:** Brian Liou
- **Strength (self-reported):** Matches its own exact tablebase 99 to 100% of the time on endgames of up to five pieces, and agreed with a forward solver on all 200 midgame test positions; opening play is unverified. ([source](https://github.com/brianhliou/misty-flip-jungle#strength))
- **Repository:** <https://github.com/brianhliou/misty-flip-jungle> · last checked 2026-10-17
- **Notes:** Maintained by this list's maintainer.

<a id="engine-misty-jungle"></a>

### MistyJungle

- **Games:** Dou Shou Qi (Jungle)
- **Kind:** engine · **License:** MIT · **Author:** Brian Liou
- **Strength (self-reported):** W11-L2-D187 over 200 games (about +16 Elo) against the strongest open-source Dou Shou Qi engine the author found and ran; four-piece endgame play matches exact retrograde tablebases. ([source](https://github.com/brianhliou/misty-jungle#strength))
- **Repository:** <https://github.com/brianhliou/misty-jungle> · last checked 2026-10-17
- **Notes:** Maintained by this list's maintainer. The opponent engine is not named in the README.

<a id="engine-pikafish-jieqi-wasm"></a>

### PikaJieQi (Mistboard build)

- **Games:** Jieqi (xiangqi with face-down pieces)
- **Kind:** engine · **License:** GPL-3.0-or-later · **Author:** The Pikafish authors (upstream jieqi_old branch); three commits by Brian Liou
- **Strength (self-reported):** "A strong player beats it." Classical hand-written evaluation; no jieqi network with weights exists upstream. ([source](https://github.com/brianhliou/pikafish-jieqi-wasm#strength-and-an-open-challenge))
- **Repository:** <https://github.com/brianhliou/pikafish-jieqi-wasm> · last checked 2026-10-17
- **Notes:** A pinned snapshot of Pikafish's jieqi_old branch with two engine fixes and a WebAssembly build; maintained by this list's maintainer.
