<!-- GENERATED from data/games, data/open and data/engines (genre: alignment) by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Alignment & *m,n,k* games

[All families](../README.md#families) · 11 solved · 1 open · 10 engines

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
| [Tic Tac Chec (4×4, original 1998 rules)](../games/tic-tac-chec.md) | Draw | Strong | Retrograde analysis | 2026 | [Liou 2026](https://github.com/brianhliou/tic-tac-chec/blob/4346eb61ff283c568ea4e0971fb85f5e419838ca/research/runs/production-2026-07-13/summary.md)\* |

\* Self-archived: the result is available only from its authors (a repository, a post, a deposit), not yet refereed, formally verified or reproduced by someone else. The mark comes off when one of those happens. It applies to this repo's own results too.

## Open problems

| Problem | Status | Next target | Latest result | Last checked |
|---|---|---|---|---|
| [Connect6 (19×19)](../games/connect6.md) | Partially solved | the value of the game from Black's first stone at the centre, covering every White reply | [Wu & Lin 2010](https://doi.org/10.1109/TCIAIG.2010.2060262) (2010) | 2026-10-25 |

## Engines

- [AlphaGomoku (Kozarzewski)](../engines/alphagomoku.md) (engine): competition result, [source](https://gomocup.org/results/gomocup-result-2026/)
- [Cloudict](../engines/cloudict.md) (engine): competition result, [source](https://www.game-ai-forum.org/icga-tournaments/tournament.php?id=244)
- [Connect 4 Game Solver](../engines/pons-connect4.md) (solver): perfect play, [source](http://blog.gamesolver.org/)
- [Galvanise Zero (gzero)](../engines/galvanise-zero.md) (engine): competition result, [source](https://github.com/richemslie/galvanise_zero)
- [GamesmanUni](../engines/gamesmanuni.md) (solver): perfect play, [source](https://www2.eecs.berkeley.edu/Pubs/TechRpts/2023/Archive/EECS-2023-186.pdf)
- [gobblet (Possibly Wrong)](../engines/gobblet-solver.md) (solver): perfect play, [source](https://possiblywrong.wordpress.com/2024/06/11/strongly-solving-gobblet-gobblers-using-retrograde-analysis/)
- [KataConnect6](../engines/kataconnect6.md) (engine): self-reported, [source](https://github.com/hzyhhzy/KataGomo/blob/master/README_old.md)
- [KataGomo](../engines/katagomo.md) (engine): competition result, [source](https://gomocup.org/results/gomocup-result-2026/)
- [pentago (Irving)](../engines/pentago.md) (solver): perfect play, [source](https://arxiv.org/abs/1404.0743)
- [Rapfi](../engines/rapfi.md) (engine): competition result, [source](https://gomocup.org/results/gomocup-result-2025/)
