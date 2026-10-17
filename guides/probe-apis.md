# Probe APIs and explorers

[Back to the index](../README.md)

Query a solved position right now, no local tables required.

- **[Lichess tablebase API](https://github.com/lichess-org/lila-tablebase)** — `GET https://tablebase.lichess.ovh/standard?fen=...` returns WDL/DTZ for standard (7-piece), antichess, and atomic. Rate-limited; be polite.
- **[syzygy-tables.info](https://syzygy-tables.info)** ([source](https://github.com/niklasf/syzygy-tables.info)) — browser UI and public API over the 7-piece Syzygy bases.
- **[python-chess Syzygy probing](https://python-chess.readthedocs.io/en/latest/syzygy.html)** — read Syzygy bases directly from Python.
- **[Fathom](https://github.com/jdart1/Fathom)** — standalone C library for probing Syzygy from an engine.
