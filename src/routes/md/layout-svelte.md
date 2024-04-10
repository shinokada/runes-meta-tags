<script>
  import { RunesMetaTag, deepMerge } from 'runes-meta-tags';
  import { page } from '$app/stores';

  let { children, data } = $props();

  let metaTags = $state(
    $page.data.pageMetaTags
      ? deepMerge($page.data.layoutMetaTags, $page.data.pageMetaTags)
      : data.layoutMetaTags
  );
  $effect(() => {
    metaTags = $page.data.pageMetaTags ? deepMerge($page.data.layoutMetaTags, $page.data.pageMetaTags ) : data.layoutMetaTags
  });
</script>

<RunesMetaTag {...metaTags}/>

{@render children()}
