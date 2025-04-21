<script lang="ts">
	import '../app.css';
	import { Runatics } from 'runatics';
	import { RunesMetaTags, type MetaProps, deepMerge } from '$lib';
	import { page } from '$app/state';
	import { Footer, removeHyphensAndCapitalize } from 'runes-webkit';
	import Nav from './utils/Nav.svelte';

	let { children, data } = $props();
	const analyticsId = data.ANALYTICS_ID;

	let metaTags = $state<MetaProps>(
		page.data.pageMetaTags
			? deepMerge<MetaProps>(data.layoutMetaTags, page.data.pageMetaTags)
			: data.layoutMetaTags
	);

	$effect(() => {
		metaTags = page.data.pageMetaTags
			? deepMerge<MetaProps>(data.layoutMetaTags, page.data.pageMetaTags)
			: data.layoutMetaTags;
	});

	// $inspect('metaTags', typeof metaTags);

	const lis = [{ name: 'About', href: '/about' }];
	const brand = {
		name: 'codewithshin.com',
		href: 'https://codewithshin.com'
	};
	// const urlsToIncludeSwitcherAndSidebar = ['/guide/', '/guide2/', '/how-to-use'];
	/*eslint no-undef: "off"*/
	const siteName = removeHyphensAndCapitalize(__NAME__);
	const twitterUrl = 'https://twitter.com/shinokada';
	const githubUrl = `https://github.com/shinokada/${__NAME__}`;
	const blueskyUrl = 'https://bsky.app/profile/codewithshin.com';

	// $inspect('metaTags', metaTags)
</script>

<Runatics {analyticsId} />
<RunesMetaTags {...metaTags} />
<Nav {lis} {siteName} {twitterUrl} {githubUrl} {blueskyUrl} />
<div class="mx-auto mb-16 max-w-5xl lg:flex">
	<div class="relative h-full w-full overflow-y-auto px-8">
		{@render children()}
	</div>
</div>
<Footer {brand} {lis} ulClass="dark_bg_theme" divClass="max-w-5xl" />
