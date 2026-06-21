// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// One sidebar group per genre, generated from data/games/*.yaml by
// scripts/gen-content.ts (runs on predev/prebuild).
import gamesSidebar from './src/generated/sidebar.json' with { type: 'json' };

// The single place the deploy target is set. '/solved-games' for the GitHub
// Pages project path; change to '/' (and the site URL) when the subdomain's DNS
// is live. Everything below derives the right asset + link paths from this.
const SITE = 'https://brianhliou.github.io';
const BASE = '/solved-games';

// Starlight prefixes its own asset/route URLs with the base, but NOT raw links
// or `src`s written in page content. This rehype pass prefixes internal
// absolute href/src (`/foo`) with the base so content links and the embedded
// explorer iframes resolve on a project subpath. No-op when BASE is root.
function rehypeBasePrefix() {
	const base = BASE.replace(/\/$/, '');
	const fix = (url) =>
		typeof url === 'string' &&
		url.startsWith('/') &&
		!url.startsWith('//') &&
		!url.startsWith(base + '/') &&
		url !== base
			? base + url
			: url;
	const walk = (node) => {
		// Standard HTML elements (from Markdown) carry url attrs on `properties`.
		if (node.type === 'element' && node.properties) {
			if (node.properties.href) node.properties.href = fix(node.properties.href);
			if (node.properties.src) node.properties.src = fix(node.properties.src);
		}
		// Raw HTML in MDX (e.g. the explorer <iframe>) is an MDX JSX node whose
		// url attrs live in an `attributes` array instead.
		if (node.type === 'mdxJsxFlowElement' || node.type === 'mdxJsxTextElement') {
			for (const a of node.attributes ?? []) {
				if ((a.name === 'href' || a.name === 'src') && typeof a.value === 'string') {
					a.value = fix(a.value);
				}
			}
		}
		node.children?.forEach(walk);
	};
	return (tree) => {
		if (base) walk(tree);
	};
}

// https://astro.build/config
export default defineConfig({
	site: SITE,
	base: BASE,
	// GitHub Pages serves the repo's docs/ directly, so build straight into it.
	outDir: '../docs',
	build: { emptyOutDir: true },
	markdown: { rehypePlugins: [rehypeBasePrefix] },
	integrations: [
		starlight({
			title: 'Solved Games',
			description:
				'The reference for which games are solved — by whom, how strongly, and what is left. Backed by an open-source solver that ships first-published solutions.',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/brianhliou/solved-games' },
			],
			sidebar: [
				{
					label: 'Overview',
					items: [
						{ label: 'Home', link: '/' },
						{ label: 'Open frontier', link: '/frontier/' },
					],
				},
				{
					label: 'Families',
					items: [
						{ label: 'Y (connection)', link: '/families/y/' },
						{ label: 'Morris (mill games)', link: '/families/morris/' },
					],
				},
				...gamesSidebar,
			],
		}),
	],
});
