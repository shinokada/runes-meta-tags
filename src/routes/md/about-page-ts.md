import type { MetaProps } from 'runes-meta-tags';
import { metaTitle, metaDescription, metaImg, splitAndCapitalize } from 'runes-meta-tags';
// define **NAME** in your vite.config.ts
export const load = ({ url }) => {
const title = metaTitle(url.pathname, **NAME**);
const basicDesc = splitAndCapitalize(**NAME**);
const description = metaDescription(url.pathname, basicDesc);
const image = metaImg(url.pathname, **NAME**);

const pageMetaTags = {
title,
description,
og: {
title,
description
},
twitter: {
title,
description
}
};
return { pageMetaTags };
};
