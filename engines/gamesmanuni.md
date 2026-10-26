<!-- GENERATED from data/engines/gamesmanuni.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# GamesmanUni

[All engines](../pages/engines.md) · [data](../data/engines/gamesmanuni.yaml)

- **Kind:** solver (plays from a solution)
- **Games in this list:** [Quarto!](../games/quarto.md), [Tigers and Goats](../games/tigers-and-goats.md)
- **Author:** Shein Lin Phyo and the UC Berkeley GamesCrafters group, supervised by Dan Garcia
- **License:** AGPL-3.0-or-later (README)
- **Project:** <https://github.com/GamesCrafters/GamesmanUni>
- **Last checked:** 2026-10-25

## Strength

Perfect play. Cheung (2023) documents complete Quarto and Bagh-Chal solutions and their presentation through the Gamesman infrastructure and GamesmanUni interfaces. ([source](https://www2.eecs.berkeley.edu/Pubs/TechRpts/2023/Archive/EECS-2023-186.pdf))

## Notes

Downloadable browser client for remote solution databases, playable at https://nyc.cs.berkeley.edu/uni/. The live variant inventory at https://nyc.cs.berkeley.edu/universal/v1/ includes standard Bagh-Chal, Quarto, 5×5 Quixo, standard/advanced Teeko, nine men's morris and six men's morris without flying. Smaller coverage includes Domineering through 6×6, Y sides 4–5 and Kōnane through 5×6; chess and xiangqi coverage is endgames, not solved full games. Its three-pit Mancala module omits Kalah's extra-turn rule, so it is not mapped to kalah. Othello is the 4×4 variant. Achi and Tant Fant have different rules from the catalog's three-men's-morris entry. Other supported games and puzzles do not inherit the Quarto/Bagh-Chal perfect-play claim. The GamesCrafters system also serves about sixty other small games, most outside this list.
