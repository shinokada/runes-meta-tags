<script lang="ts">
  import { MetaTags, deepMerge } from 'runes-meta-tags';
  import { page } from '$app/stores';
  
  let { children, data } = $props();

  // Use $derived for reactive meta tags
  let metaTags = $derived(
    $page.data.pageMetaTags
      ? deepMerge(data.layoutMetaTags, $page.data.pageMetaTags)
      : data.layoutMetaTags
  );
</script>

<MetaTags {...metaTags} />

{@render children()}