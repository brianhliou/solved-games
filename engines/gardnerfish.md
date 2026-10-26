<!-- GENERATED from data/engines/gardnerfish.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Gardnerfish

[All engines](../pages/engines.md) · [data](../data/engines/gardnerfish.yaml)

- **Kind:** engine (searches)
- **Games in this list:** [Gardner minichess](../games/gardner-minichess.md)
- **Other games:** Baby chess, Jacobs-Meivoritz chess, Mallett minichess
- **Author:** Mehdi Mhalla and Frédéric Prost, based on Stockfish by its credited authors
- **License:** GPL-3.0-or-later (source notices; Copying.txt contains GPL version 3)
- **Project:** <https://github.com/MehdiMhalla/Stockfish>
- **Last checked:** 2026-10-25

## Strength

Self-reported. Mhalla and Prost report using their modified Stockfish engine to construct the draw oracles in their solution of Gardner minichess. ([source](https://arxiv.org/html/1307.7118))

## Notes

The authors' Gardnerfish page identifies this repository and describes UCI play on the b2–f6 region, with pawn promotion adjusted to that region: https://lig-membres.imag.fr/prost/MiniChessResolution/Gardner/index.html. Their no-loss argument combines supplied oracles with engine analysis; the standalone search engine is not established as an automatic perfect-play implementation. The page also describes support for other 5×5 chess variants without castling or initial double pawn moves.
