<script lang="ts">
  import '../app.css';
  import { Runatics } from 'runatics';
  import { MetaTags, type MetaProps, deepMerge } from '$lib';
  import { page } from '$app/state';
  import { Footer } from 'runes-webkit';
  import Nav from './utils/Nav.svelte';

  let { children, data } = $props();
  const analyticsId = $derived(data.ANALYTICS_ID);

  let metaTags = $derived<MetaProps>(page.data.pageMetaTags ? deepMerge<MetaProps>(data.layoutMetaTags, page.data.pageMetaTags) : data.layoutMetaTags);

  const lis = [{ name: 'About', href: '/about' }];
  const brand = {
    name: 'codewithshin.com',
    href: 'https://codewithshin.com'
  };
</script>

<Runatics {analyticsId} />
<MetaTags {...metaTags} />
<Nav />
<div class="mx-auto mb-16 max-w-5xl lg:flex">
  <div class="relative h-full w-full overflow-y-auto px-8">
    {@render children()}
  </div>
</div>
<Footer {brand} {lis} footerClass="dark:bg-stone-900" divClass="max-w-5xl" />
