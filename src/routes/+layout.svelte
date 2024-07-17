<script lang="ts">
  import '../app.pcss';
  import { Runatics } from 'runatics';
  import { RunesMetaTags, deepMerge } from '$lib';
  import { page } from '$app/stores';
  import { Footer, removeHyphensAndCapitalize } from 'runes-webkit';
  import Nav from './utils/Nav.svelte';
  import type { MetaProps } from '$lib';

  let { children, data } = $props();
  const analyticsId = data.ANALYTICS_ID;

  let metaTags: MetaProps = $state(
    $page.data.pageMetaTags
      ? deepMerge($page.data.layoutMetaTags, $page.data.pageMetaTags)
      : data.layoutMetaTags
  );
  $effect(() => {
    metaTags = $page.data.pageMetaTags
      ? deepMerge($page.data.layoutMetaTags, $page.data.pageMetaTags)
      : data.layoutMetaTags;
    // $inspect('metaTags', metaTags)
  });
  const lis = [{ name: 'About', href: '/about' }];
  const brand = {
    name: 'codewithshin.com',
    href: 'https://codewithshin.com'
  };
  // const urlsToIncludeSwitcherAndSidebar = ['/guide/', '/guide2/', '/how-to-use'];
  const siteName = removeHyphensAndCapitalize(__NAME__);
  const twitterUrl = 'https://twitter.com/shinokada';
  const githubUrl = `https://github.com/shinokada/${__NAME__}`;
  // $inspect('metaTags', metaTags)
</script>

<Runatics {analyticsId} />
<RunesMetaTags {...metaTags} />
<Nav {lis} {siteName} {twitterUrl} {githubUrl} />
<div class="mx-auto max-w-5xl lg:flex">
  <div class="relative h-full w-full overflow-y-auto px-8">
    {@render children()}
    <Footer {brand} {lis} ulClass="dark_bg_theme" />
  </div>
</div>
