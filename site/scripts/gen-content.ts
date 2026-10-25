// Generate the site's Starlight pages from the structured data in ../data/.
// The pages are the repo's own generated pages (scripts/pages.ts, the same
// renderer behind games/*.md, families/*.md and pages/*.md on GitHub), with
// their repo-relative links rewritten to site routes. Regenerated on every
// build (predev/prebuild), gitignored, never hand-edited.
//
//   node scripts/gen-content.ts
//
// Output (under src/content/docs/):
//   games/<genre>/<id>.md     one page per game, and per open problem with no game page
//   games/index.md            every family with its games (the README index)
//   genres/<genre>.md         one page per family: solved, open, engines
//   open-problems.md, engines.md
//   ../generated/sidebar.json one sidebar group per family

import { writeFileSync, mkdirSync, rmSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, posix } from "node:path";
import { GENRE_ORDER, loadData, render } from "../../scripts/pages.ts";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..", "..");
const DOCS = join(ROOT, "site", "src", "content", "docs");
const SIDEBAR = join(ROOT, "site", "src", "generated", "sidebar.json");
const REPO = "https://github.com/brianhliou/solved-games/blob/main";
const GENERATED_DIRS = ["games", "genres"];
const GENERATED_FILES = ["open-problems.md", "engines.md"];

const RESULT_LABEL: Record<string, string> = {
  "first-player-win": "First player wins",
  "second-player-win": "Second player wins",
  draw: "Draw",
};

// Cross-links from a game page up to its family hub (a hand-written page with an explorer).
const FAMILY_BY_ID: Record<string, { label: string; href: string }> = {
  y: { label: "the Y connection family", href: "/families/y/" },
};
const FAMILY_BY_GENRE: Record<string, { label: string; href: string }> = {
  morris: { label: "the morris (mill) family", href: "/families/morris/" },
};

const data = loadData(ROOT);
const { pages, regions } = render(data, new Date().toISOString().slice(0, 10));

const genreOf = new Map<string, string>();
for (const g of data.games) genreOf.set(g.id, g.genre);
for (const e of data.open) if (!e.related_game) genreOf.set(e.id, e.genre);
const genreTitle = (slug: string) =>
  (GENRE_ORDER.find((g) => g.slug === slug)?.title ?? "Other").replace(/\*/g, "");

/** Site route for a repo path, or undefined when the path has no page on the site. */
function routeOf(repoPath: string): string | undefined {
  if (repoPath === "README.md") return "/";
  let m = repoPath.match(/^games\/([^/]+)\.md$/);
  if (m) return genreOf.has(m[1]) ? `/games/${genreOf.get(m[1])}/${m[1]}/` : undefined;
  m = repoPath.match(/^families\/([^/]+)\.md$/);
  if (m) return `/genres/${m[1]}/`;
  m = repoPath.match(/^pages\/([^/]+)\.md$/);
  if (m) return `/${m[1]}/`;
  return undefined;
}

/** Rewrite each relative Markdown link in a page written at `from` (a repo path). */
function relink(md: string, from: string): string {
  return md.replace(/\]\(([^)\s]+)\)/g, (whole, target: string) => {
    if (/^(https?:|mailto:|#|\/)/.test(target)) return whole;
    const [path, anchor] = target.split("#");
    const repoPath = posix.normalize(posix.join(posix.dirname(from), path));
    // The README's family index is the site's /games/ page.
    if (repoPath === "README.md" && anchor === "families") return "](/games/)";
    const route = routeOf(repoPath);
    if (route) return `](${route}${anchor ? `#${anchor}` : ""})`;
    return `](${REPO}/${repoPath}${anchor ? `#${anchor}` : ""})`;
  });
}

/** A repo page as a Starlight page: front matter for the title, no generated-by comment or H1. */
function sitePage(md: string, from: string, description: string, after?: string): string {
  const lines = md.split("\n");
  if (lines[0].startsWith("<!-- GENERATED")) lines.splice(0, 1);
  while (lines[0] === "") lines.shift();
  const title = lines.shift()!.replace(/^# /, "").replace(/\*/g, "");
  while (lines[0] === "") lines.shift();
  // The breadcrumb line stays first; anything extra goes right under it.
  if (after) lines.splice(1, 0, "", after);
  const front = ["---", `title: ${JSON.stringify(title)}`, `description: ${JSON.stringify(description)}`, "---", ""];
  return front.join("\n") + relink(lines.join("\n"), from);
}

function gameDescription(id: string): string {
  const g = data.games.find((x) => x.id === id);
  if (!g) {
    const e = data.open.find((x) => x.id === id)!;
    return `${e.name}: an open problem. Solved so far: ${e.solved_up_to}`;
  }
  const result = RESULT_LABEL[g.result] ?? g.result;
  return `${g.name}: ${result.toLowerCase()} — ${g.strength}${g.approximate ? ", approximate" : ""} solution${g.year ? ` (${g.year})` : ""}.`;
}

// --- generate ---
for (const d of GENERATED_DIRS) rmSync(join(DOCS, d), { recursive: true, force: true });
for (const f of GENERATED_FILES) rmSync(join(DOCS, f), { force: true });

const write = (rel: string, body: string) => {
  mkdirSync(dirname(join(DOCS, rel)), { recursive: true });
  writeFileSync(join(DOCS, rel), body);
};

let count = 0;
for (const [repoPath, md] of pages) {
  const route = routeOf(repoPath);
  if (!route) throw new Error(`no site route for generated page ${repoPath}`);
  const rel = `${route.replace(/^\/|\/$/g, "")}.md`;
  let description: string;
  let after: string | undefined;
  const game = repoPath.match(/^games\/([^/]+)\.md$/)?.[1];
  if (game) {
    description = gameDescription(game);
    const fam = FAMILY_BY_ID[game] ?? FAMILY_BY_GENRE[genreOf.get(game)!];
    if (fam) after = `Part of [${fam.label}](${fam.href}) — see the family page for the scaling table and a playable explorer.`;
    count++;
  } else if (repoPath.startsWith("families/")) {
    description = `${genreTitle(repoPath.slice(9, -3))}: which games are solved, which are open, and the engines that play them.`;
  } else if (repoPath === "pages/open-problems.md") {
    description = "Games and board sizes with a published partial result and a named next step.";
  } else {
    description = "Programs that play or solve the games listed here, each with the evidence for its strength.";
  }
  write(rel, sitePage(md, repoPath, description, after));
}

const index = regions.get("index")!;
write(
  "games/index.md",
  ["---", 'title: "All games"', 'description: "Every solved game and open problem, by family."', "---", "", relink(index.trim(), "README.md"), ""].join("\n"),
);

// Sidebar: one group per family in the repo's order, its overview first.
const sidebar = GENRE_ORDER.filter((g) => [...genreOf.values()].includes(g.slug)).map(({ slug }) => ({
  label: `${genreTitle(slug)} (${[...genreOf.values()].filter((x) => x === slug).length})`,
  collapsed: true,
  items: [{ label: "Overview", link: `/genres/${slug}/` }, { autogenerate: { directory: `games/${slug}` } }],
}));
mkdirSync(dirname(SIDEBAR), { recursive: true });
writeFileSync(SIDEBAR, JSON.stringify(sidebar, null, 2));

console.log(`[gen-content] ${count} game pages, ${pages.size - count} other pages → ${DOCS}`);
