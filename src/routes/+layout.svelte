<script>
  import '../app.pcss';
  import { Runatics } from 'runatics';
  import { RunesMeta, deepMerge } from '$lib';
  import { page } from '$app/stores';
  import {
    Footer,
    OnThisPage,
    extract,
    Sidebar,
    removeHyphensAndCapitalize
  } from 'runes-webkit';
  import Nav from './utils/Nav.svelte';
  import extend from 'just-extend';
  import Mycompo from '$lib/Mycompo.svelte';
  let { children, data } = $props();
  const analyticsId = data.ANALYTICS_ID
  const layoutMetaTags = data.layoutMetaTags
  // console.log('data', data)
  // console.log('analyticsId', analyticsId)
  let currentUrl = $state($page.url.pathname);
  // let metaTags = $derived(extend(true, {}, layoutMetaTags, $page.data.pageMetaTags));
  // $inspect('$page.data', $page.data)
  let metaTags = $state();
  $effect(() => {
    currentUrl = $page.url.pathname;
    metaTags = $page.data.pageMetaTags ? deepMerge($page.data.layoutMetaTags, $page.data.pageMetaTags ) : data.layoutMetaTags
    $inspect('metaTags', metaTags)
  });
  const lis = [
    { name: 'Guide', href: '/guide/svelte-4/getting-started' },
    { name: 'Icons', href: '/icons' },
    { name: 'Icon sets', href: 'https://svelte-svg-icons.codewithshin.com/' }
  ];
  const brand = {
    name: 'codewithshin.com',
    href: 'https://codewithshin.com'
  };
  const urlsToIncludeSwitcherAndSidebar = ['/guide/', '/guide2/', '/how-to-use'];
  const siteName = removeHyphensAndCapitalize(__NAME__);
  const twitterUrl = 'https://twitter.com/shinokada';
  const githubUrl = `https://github.com/shinokada/${__NAME__}`;

</script>

<Runatics {analyticsId} />
<RunesMeta {...metaTags}/>
<Nav
  {lis}
  {siteName}
  {twitterUrl}
  {githubUrl}
  urlsToIncludeSwitcher={urlsToIncludeSwitcherAndSidebar}
/>
<div class="lg:flex">
  {#if urlsToIncludeSwitcherAndSidebar.some((path) => currentUrl.startsWith(path))}
    <Sidebar />
    <div class="relative">
      <OnThisPage {extract} headingSelector="#mainContent > :where(h2, h3)" />
    </div>
  {/if}
  <div class="relative h-full w-full overflow-y-auto px-8">
    {@render children()}
    <Footer {brand} {lis} ulClass="dark_bg_theme" />
  </div>
</div>
