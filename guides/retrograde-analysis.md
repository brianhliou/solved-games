# Retrograde analysis

[Back to the index](../README.md)

The algorithm under every tablebase: start from positions with a known result (mate, capture, terminal), then walk backward, marking predecessors until the value stops changing.

- [Retrograde Analysis (Chessprogramming wiki)](https://www.chessprogramming.org/Retrograde_Analysis) — the algorithm, variants, and references.
- **Bellman, 1965** — proposed using a database and backward induction to solve chess and checkers endgames.
- **Ströhlein, 1970** — first implementation, in a doctoral thesis; solved KQK, KRK, KPK, and other small endgames.
- **Thompson, 1986** — *Retrograde Analysis of Certain Endgames*; the KQKR work that beat a grandmaster from the database.
- **[Schaeffer et al., 2007](https://www.science.org/doi/10.1126/science.1144079)** — *Checkers Is Solved* (Science). Retrograde endgame DBs meeting a forward proof tree.
- **[Endgame Analysis of Dou Shou Qi, 2016](https://arxiv.org/abs/1604.07312)** — retrograde analysis applied to the Jungle-game family, a close cousin of Dōbutsu shōgi.
