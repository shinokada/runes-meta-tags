export const load = ({ url }) => {
const layoutMetaTags: MetaProps = {
title: 'Runes Meta Tags',
description: 'Meta tags for Runes.',
keywords: 'runes, meta, tags',
twitter: {
card: 'summary_large_image',
site: '@johndoe',
handle: '@johndoe',
title: 'Runes meta tags',
description: 'Meta tags for Runes.',
image: 'https://open-graph-vercel.vercel.app/api/runes-meta-tags',
imageAlt: 'Runes meta'
},
og: {
type: 'website',
title: 'Runes meta tags',
description: 'Meta tags for Runes.',
url: url.href,
image: 'https://open-graph-vercel.vercel.app/api/runes-meta-tags',
imageAlt: 'Runes meta tags',
siteName: 'Runes meta tags',
imageWidth: '1200',
imageHeight: '630'
}
};
return {
layoutMetaTags
};
};
