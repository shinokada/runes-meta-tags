<script>
  import { MetaTags, deepMerge } from 'runes-meta-tags';

  let { children, data } = $props();

  function buildMetaTags() {
    return $page.data.pageMetaTags
      ? deepMerge($page.data.layoutMetaTags, $page.data.pageMetaTags)
      : data.layoutMetaTags;
  }

  let metaTags = $state(buildMetaTags());
  $effect(() => {
    metaTags = buildMetaTags();
  });
</script>

<MetaTags {...metaTags} />

{@render children()}
