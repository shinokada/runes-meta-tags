import { ANALYTICS_ID } from '$env/static/private';
import type { MetaProps } from '$lib';

const title = 'Runes Meta Tags';
const description = 'Meta tag for Svelte Runes';
const image = 'https://open-graph-vercel.vercel.app/api/runes-meta-tags';

export const load = ({ url }) => {
	const layoutMetaTags: MetaProps = {
		title,
		description,
		keywords: 'runes, meta, tags',
		twitter: {
			card: 'summary_large_image',
			site: '@shinokada',
			creator: '@shinokada',
			title,
			description,
			image,
			imageAlt: title
		},
		og: {
			type: 'website',
			title,
			description,
			url: url.href,
			image,
			imageAlt: title,
			siteName: 'Runes meta',
			imageWidth: '1200',
			imageHeight: '630'
		}
	};
	return {
		layoutMetaTags,
		ANALYTICS_ID
	};
};
