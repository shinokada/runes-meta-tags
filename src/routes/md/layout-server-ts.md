import type { MetaProps } from 'runes-meta-tags';
import { metaTitle, metaDescription, metaImg } from 'runes-meta-tags';
// define **NAME** in your vite.config.ts
export const load = ({ url }) => {
const title = metaTitle(url.pathname, **NAME**);
const basicDesc = 'Meta tags for Runes.';
const description = metaDescription(url.pathname, basicDesc);
const image = metaImg(url.pathname, **NAME**);

const layoutMetaTags: MetaProps = {
title,
description,
keywords: 'runes, meta, tags',
twitter: {
card: 'summary_large_image',
site: '@johndoe',
handle: '@johndoe',
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
layoutMetaTags
};
};
