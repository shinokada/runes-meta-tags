<script>
  import { RunesMetaTag, deepMerge } from '$lib';
  import { page } from '$app/stores';
  import Nav from './utils/Nav.svelte';

  let { children, data } = $props();

  let metaTags = $state();
  $effect(() => {
    metaTags = $page.data.pageMetaTags ? deepMerge($page.data.layoutMetaTags, $page.data.pageMetaTags ) : data.layoutMetaTags
  });
</script>

<RunesMetaTag {...metaTags}/>

{@render children()}
    