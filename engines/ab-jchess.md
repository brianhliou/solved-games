<!-- GENERATED from data/engines/ab-jchess.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# AB-JChess

[All engines](../pages/engines.md) · [data](../data/engines/ab-jchess.yaml)

- **Kind:** engine (searches)
- **Games in this list:** none
- **Other games:** Jieqi (dark xiangqi)
- **Author:** Huorongrong and Laoxu (Kouza), derived from Pikafish
- **License:** GPL-3.0 in README; source headers permit later versions; runtime banner also prohibits resale; separate NNUE license not stated
- **Project:** <https://github.com/lxsgx23/AB-JChess>
- **Last checked:** 2026-10-25

## Strength

Match result. Mistboard reports that AB-JChess with its September 11 network scored 248 wins, 16 draws and 136 losses against Mistboard's Pikafish Jieqi bot over 400 games at four seconds per move. ([source](https://mistboard.com/blog/ab-jchess))

## Notes

The opponent was Mistboard's classical Jieqi build, not the official xiangqi NNUE engine. Mistboard subsequently fixed a reveal-evaluation bug in that opponent. The cited match does not measure newer AB-JChess releases. Author credits and the resale restriction appear in [misc.cpp](https://github.com/lxsgx23/AB-JChess/blob/main/abjchess/src/misc.cpp). The [README](https://github.com/lxsgx23/AB-JChess#license) states GPL version 3. Engine binaries and networks are downloadable from the project's releases; current source expects a matching ABJCHESSV11 network package. The match was run and published by Mistboard, which this list's maintainer runs.
