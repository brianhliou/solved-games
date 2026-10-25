// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// One sidebar group per genre, generated from data/games/*.yaml by
// scripts/gen-content.ts (runs on predev/prebuild).
import gamesSidebar from './src/generated/sidebar.json' with { type: 'json' };

// The single place the deploy target is set: the solvedgames.brianhliou.com
// subdomain on Vercel, served from the root (was the GitHub Pages project path
// '/solved-games' until 2026-10-25). Everything below derives the right asset + link paths from this.
const SITE = 'https://solvedgames.brianhliou.com';
const BASE = '';

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
	markdown: { rehypePlugins: [rehypeBasePrefix] },
	integrations: [
		starlight({
			title: 'Solved Games',
			// GA4, the same property as brianhliou.com (filter by hostname). The loader
			// is brianhliou.com's, with its ?notrack owner opt-out.
			head: [
				{ tag: 'script', attrs: { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-XX833SP2K2' } },
				{ tag: 'script', attrs: { src: '/google-analytics.js', defer: true, 'data-ga-id': 'G-XX833SP2K2' } },
			],
			description:
				'A structured record of which games are solved — by whom, how strongly, and what is left. Maintained, with open problems and the engines that play them.',
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
