<!-- GENERATED from data/games, data/open and data/engines (genre: alignment) by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Alignment & *m,n,k* games

[All families](../README.md#families) · 10 solved · 1 open · 3 engines

## Solved

| Game | Result under perfect play | Strength | Method | Year | Source |
|---|---|---|---|---|---|
| [Tic-tac-toe](../games/tic-tac-toe.md) | Draw | Strong | Brute-force enumeration | — | [folklore](https://web.archive.org/web/20130628112339/http://www.mathrec.org/old/2002jan/solutions.html) |
| [Qubic](../games/qubic.md) | First player wins | Weak | Knowledge-based | 1980 | [Patashnik 1980](https://www.jstor.org/stable/2689613) |
| [Gomoku (free-style)](../games/gomoku-freestyle.md) | First player wins | Weak | Threat-space search | 1992 | [Allis et al. 1992](https://aaai.org/papers/0001-go-moku-solved-by-new-search-techniques/) |
| [Connect Four](../games/connect-four.md) | First player wins | Strong | Brute-force enumeration | 1993 | [Tromp 1993](https://tromp.github.io/c4/connect4_thesis.pdf) |
| [Teeko](../games/teeko.md) | Draw | Strong | Retrograde analysis | 1998 | [Steele 1998](https://pcarrier.com/teeko/archives/text/teeko-analysis-gls.foo.html)\* |
| [Renju (連珠)](../games/renju.md) | First player wins | Weak | Threat-space search | 2000 | [Wágner et al. 2000](https://journals.sagepub.com/doi/abs/10.3233/ICG-2001-24104) |
| [Pentago](../games/pentago.md) | First player wins | Strong | Retrograde analysis | 2014 | [Irving 2014](https://arxiv.org/abs/1404.0743) |
| [Quixo](../games/quixo.md) | Draw | Strong | Value Iteration | 2020 | [Tanaka et al. 2020](https://arxiv.org/abs/2007.15895v1) |
| [Quarto!](../games/quarto.md) | Draw | Strong | Alpha-beta + DB | 2023 | [Goossens 2023](https://www2.eecs.berkeley.edu/Pubs/TechRpts/2023/Archive/EECS-2023-186.pdf) |
| [Gobblet Gobblers](../games/gobblet-gobblers.md) | First player wins | Strong | Retrograde analysis | 2024 | [possiblywrong 2024](https://possiblywrong.wordpress.com/2024/06/11/strongly-solving-gobblet-gobblers-using-retrograde-analysis/)\* |

\* Self-archived: the result is available only from its authors (a repository, a post, a deposit), not yet refereed, formally verified or reproduced by someone else. The mark comes off when one of those happens. It applies to this repo's own results too.

## Open problems

| Problem | Status | Next target | Latest result | Last checked |
|---|---|---|---|---|
| [Connect6 (19×19)](../games/connect6.md) | Partially solved | the value of the game from Black's first stone at the centre, covering every White reply | [Wu & Lin 2010](https://doi.org/10.1109/TCIAIG.2010.2060262) (2010) | 2026-10-25 |

## Engines

- [Connect 4 Game Solver](../pages/engines.md#engine-pons-connect4) (solver): perfect play, [source](http://blog.gamesolver.org/)
- [pentago (Irving)](../pages/engines.md#engine-pentago) (solver): perfect play, [source](https://arxiv.org/abs/1404.0743)
- [Rapfi](../pages/engines.md#engine-rapfi) (engine): competition result, [source](https://gomocup.org/results/gomocup-result-2025/)
