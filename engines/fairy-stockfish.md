<!-- GENERATED from data/engines/fairy-stockfish.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Fairy-Stockfish

[All engines](../pages/engines.md) · [data](../data/engines/fairy-stockfish.yaml)

- **Kind:** engine (searches)
- **Games in this list:** [Chess (8×8)](../games/chess-8x8.md), [Xiangqi (Chinese chess)](../games/xiangqi-9x10.md), [Losing chess](../games/losing-chess.md), [Gardner minichess](../games/gardner-minichess.md), [Dōbutsu shōgi](../games/dobutsu-shogi.md), [Amazons (10×10)](../games/amazons-small.md#open-amazons-10x10), [Breakthrough (8×8)](../games/breakthrough-6x5.md#open-breakthrough-8x8), [Othello](../games/othello.md)
- **Other games:** Shogi, Minishogi, EuroShogi, Judkins shogi, Kyoto shogi, Microshogi, Goro goro shogi, Tori shogi, Yari shogi, Okisaki shogi, Sho shogi, Janggi, Manchu chess, Minixiangqi, Supply chess, Makruk, ASEAN chess, Makpong, Ai-Wok, Ouk Chatrang, Kar Ouk, Sittuyin, Shatar, Jeson Mor, Shatranj, Courier chess, Raazuvaa, Capablanca chess, Janus chess, Modern chess, Chancellor chess, Embassy chess, Gothic chess, Capablanca random chess, Grand chess, Shako, Centaur chess, Tencubed, Opulent chess, Chess960, Placement chess, Crazyhouse, Loop chess, Chessgi, Pocket Knight, Capablanca-Crazyhouse, Bughouse, Koedem, Seirawan chess, Seirawan-Crazyhouse, Dragon chess, Amazon chess, Chigorin chess, Almost chess, Hoppel-Poppel, New Zealand chess, Losers chess, Codrus, Extinction chess, Kinglet, Three Kings, Coregal chess, King of the Hill, Racing Kings, Three-check chess, Five-check chess, Los Alamos chess, Atomic chess, Horde chess, Knightmate, Nightrider chess, Grasshopper chess, Duck chess, Omicron chess, Gustav III chess, Berolina chess, Pawn-Sideways chess, Pawn-Back chess, Torpedo chess, Legan chess, Spartan chess, Wolf chess, Troitzky chess, Ataxx, Clobber, Reversi (Flipersi, empty-board start), Othello (10×10), Five Field Kono, Fox and Hounds, Isolation, Joust, Snailtrail
- **Author:** Fabian Fichter and contributors (AUTHORS file)
- **License:** GPL-3.0-or-later (source headers; README states GPL version 3)
- **Project:** <https://github.com/fairy-stockfish/Fairy-Stockfish>
- **Last checked:** 2026-10-25

## Strength

Competition result. The project's tournament-results page reports first place in the UEC Cup for Minishogi in 2019, 2021 and 2022. ([source](https://github.com/fairy-stockfish/Fairy-Stockfish/wiki/Tournament-results))

## Notes

The competition evidence concerns Minishogi. For xiangqi, the [strength wiki](https://github.com/fairy-stockfish/Fairy-Stockfish/wiki/Playing-strength) reports roughly +100 Elo over Elephant Eye 3.31 and Cyclone 0.55 with classical evaluation, cautioning that estimates without uncertainty use fewer than 100 games. Catalog coverage includes built-in games and examples in [variants.ini](https://github.com/fairy-stockfish/Fairy-Stockfish/blob/master/src/variants.ini). Small-board Amazons and 6×5 Breakthrough require custom board-size and starting-position configurations; disable Black pawn promotion for the catalog's Maharajah rules. Amazons requires an ALLVARS build with large-board support. Nim support uses a bounded board encoding of heaps. Credits are in [AUTHORS](https://github.com/fairy-stockfish/Fairy-Stockfish/blob/master/AUTHORS).
