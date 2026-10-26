<!-- GENERATED from data/engines/cepheus.yaml by `npm run build` (scripts/build-readme.ts). Edit the data, not this page. -->

# Cepheus / CFR+

[All engines](../pages/engines.md) · [data](../data/engines/cepheus.yaml)

- **Kind:** solver (plays from a solution)
- **Games in this list:** [Heads-up Limit Texas Hold'em (HULHE)](../games/heads-up-limit-holdem.md)
- **Other games:** Kuhn poker, Leduc poker, Rhode Island hold'em, Royal hold'em
- **Author:** Oskari Tammelin, Neil Burch, Michael Johanson and Michael Bowling; University of Alberta CPRG
- **License:** BSD as described by the project; archive LICENCE includes a non-endorsement clause and separate component terms
- **Project:** <https://poker.cs.ualberta.ca/cfr_plus.html>
- **Last checked:** 2026-10-25

## Strength

Match result. Bowling and colleagues (2017) report Cepheus winning 87 milli-big-blinds per game against the highest-performing fifth of human visitors in their online experiment. ([source](https://www.idi.ntnu.no/emner/it3105/materials/poker/poker-solved-2017.pdf))

## Notes

The stronger analytical result is an approximate equilibrium with exploitability 0.986 milli-big-blinds per game, documented at https://poker.cs.ualberta.ca/publications/2015-ijcai-cfrplus.pdf; this is an essentially weak solution, not exact perfect play. The downloadable CFR_plus.tar.bz2 contains the solver and game definitions, rather than a ready-to-play copy of the trained strategy. Reproducing the reported strategy required 4,800 CPUs for 68 days. The historical Cepheus play site did not respond during this check. The archive credits the CPRG and Tammelin for its main code and specifies separate RNG and public-domain compression components.
