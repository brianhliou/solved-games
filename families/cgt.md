<!-- GENERATED from data/games, data/open and data/engines (genre: cgt) by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Combinatorial game theory

[All families](../README.md#families) · 7 solved · 3 open · 0 engines

## Solved

| Game | Result under perfect play | Strength | Method | Year | Source |
|---|---|---|---|---|---|
| [Nim](../games/nim.md) | First player wins | Strong | Mathematical proof | 1901 | [Bouton 1901](https://www.jstor.org/stable/1967631) |
| [Wythoff's game](../games/wythoff-nim.md) | First player wins | Strong | Mathematical proof | 1907 | [Wythoff 1907](https://archive.org/details/nieuwarchiefvoo02genogoog/page/n220/mode/2up) |
| [Pentominoes (two-player)](../games/pentominoes.md) | First player wins | Weak | Brute-force enumeration | 1994 | [Orman 1994](https://library.slmath.org/books/Book29/files/orman.pdf) |
| [Sim](../games/sim.md) | Second player wins | Strong | Brute-force enumeration | 1999 | [Mead et al. 1999](https://arxiv.org/abs/cs/9911004) |
| [Amazons (small boards)](../games/amazons-small.md) | First player wins | Weak | Alpha-beta + DB | 2012 | [Song et al. 2012](https://webdocs.cs.ualberta.ca/~mmueller/ps/2014/2014-TCIAIG-amazons_solver-preprint.pdf) |
| [Dots and Boxes](../games/dots-and-boxes.md) | First player wins | Weak | Alpha-beta + DB | 2014 | [Fraser 2014](https://groups.google.com/g/rec.games.abstract/c/-z5Y9JRlZJ8)\* |
| [Domineering](../games/domineering.md) | First player wins | Weak | Alpha-beta + DB | 2016 | [Uiterwijk 2016](https://arxiv.org/abs/1602.05404) |

\* Self-archived: the result is available only from its authors (a repository, a post, a deposit), not yet refereed, formally verified or reproduced by someone else. The mark comes off when one of those happens. It applies to this repo's own results too.

## Open problems

| Problem | Status | Next target | Latest result | Last checked |
|---|---|---|---|---|
| [Amazons (10×10)](../games/amazons-small.md#open-amazons-10x10) | Smaller board solved | The standard 10×10 start, with the 6×5 and 6×6 starts as intermediate targets | [Song & Müller 2015](https://web.archive.org/web/2025/https://webdocs.cs.ualberta.ca/~mmueller/ps/2015/2015-Solve-Amazons.pdf) (2015-03) | 2026-10-25 |
| [Domineering (12×12)](../games/domineering.md#open-domineering-12x12) | Smaller board solved | The empty 12×12 square under normal play | [Uiterwijk 2016](https://link.springer.com/chapter/10.1007/978-3-319-50935-8_12) (2016) | 2026-10-25 |
| [Dots and Boxes (5×6 boxes)](../games/dots-and-boxes.md#open-dots-and-boxes-5x6) | Smaller board solved | The empty 5×6-box board: determine its perfect-play score and a strategy attaining it | [Fraser 2014](https://groups.google.com/g/rec.games.abstract/c/-z5Y9JRlZJ8) (2014-01-17)\* | 2026-10-25 |
