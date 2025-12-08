<script lang="ts">
  import type { MetaProps, GenericMetaTag } from './types';
  import { generateRobotsTags, generateTwitterTags, generateOpenGraphTags } from './helpers';

  let { title, robots, description, keywords, twitter, og, canonical, author, viewport }: MetaProps = $props();

  // Compute derived tag arrays
  const robotTags = $derived(robots ? generateRobotsTags(robots) : []);
  const twitterTags = $derived(twitter ? generateTwitterTags(twitter) : []);
  const ogTags = $derived(og ? generateOpenGraphTags(og) : []);

  // Combine all tags into a single reactive array for a single loop
  const allMetaTags = $derived([...robotTags, ...twitterTags, ...ogTags]);

  /**
   * Helper function to create the dynamic attribute object for the spread syntax.
   * e.g., transforms { attribute: 'name', key: 'twitter:card' }
   * to { name: 'twitter:card' }
   */
  function createDynamicAttribute(tag: GenericMetaTag) {
    // We dynamically create a new object where the key is tag.attribute ('name' or 'property')
    // and the value is tag.key ('og:title' or 'twitter:card').
    return { [tag.attribute]: tag.key };
  }
</script>

<svelte:head>
  {#if title}
    <title>{title}</title>
  {/if}

  {#if description}
    <meta name="description" content={description} />
  {/if}

  {#if keywords}
    <meta name="keywords" content={typeof keywords === 'string' ? keywords : keywords.join(', ')} />
  {/if}

  {#if author}
    <meta name="author" content={author} />
  {/if}

  {#if viewport}
    <meta name="viewport" content={viewport} />
  {/if}

  {#if canonical}
    <link rel="canonical" href={canonical} />
  {/if}

  {#each allMetaTags as tag, i (i)}
    <meta {...createDynamicAttribute(tag)} content={tag.content} />
  {/each}
</svelte:head>
