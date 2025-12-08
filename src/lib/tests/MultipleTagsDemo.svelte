<script lang="ts">
  import RunesMetaTags from '../RunesMetaTags.svelte';
  import type { MetaProps } from '../types';

  // Test case 1: Multiple article authors and tags
  const articleMeta: MetaProps = {
    title: 'Collaborative Article on Svelte 5',
    description: 'A comprehensive guide written by multiple experts',
    og: {
      type: 'article',
      title: 'Collaborative Article on Svelte 5',
      description: 'A comprehensive guide written by multiple experts',
      image: 'https://example.com/article-image.jpg',
      localeAlternate: ['fr_FR', 'es_ES', 'de_DE', 'ja_JP'],
      article: {
        author: ['Alice Johnson', 'Bob Smith', 'Charlie Davis', 'Diana Martinez'],
        tag: ['svelte', 'javascript', 'webdev', 'frontend', 'runes', 'tutorial'],
        publishedTime: '2024-12-01T00:00:00Z',
        section: 'Technology'
      }
    }
  };

  // Test case 2: App card with IDs but no name
  const appCardMeta: MetaProps = {
    title: 'Download Our App',
    description: 'Get our mobile app from the app store',
    twitter: {
      card: 'app',
      site: '@myapp',
      appIdIphone: '929750075',
      appIdIpad: '929750075',
      appIdGooglePlay: 'com.example.myapp',
      appCountry: 'US'
    }
  };

  // Test case 3: Full app card with name and IDs
  const fullAppCardMeta: MetaProps = {
    title: 'Cannonball - Creative Stories',
    description: 'Create and share beautiful stories',
    twitter: {
      card: 'app',
      site: '@cannonball',
      appName: 'Cannonball',
      appIdIphone: '929750075',
      appIdIpad: '929750075',
      appIdGooglePlay: 'io.fabric.samples.cannonball',
      appCountry: 'US'
    }
  };

  let selectedTest = $state<'article' | 'appNoName' | 'appFull'>('article');
  let currentMeta = $derived(selectedTest === 'article' ? articleMeta : selectedTest === 'appNoName' ? appCardMeta : fullAppCardMeta);

  // For display purposes, we'll generate the tags
  import { generateOpenGraphTags, generateTwitterTags } from '../helpers';

  const displayTags = $derived(() => {
    const meta = currentMeta;
    const tags = [];

    if (meta.og) {
      tags.push(...generateOpenGraphTags(meta.og));
    }
    if (meta.twitter) {
      tags.push(...generateTwitterTags(meta.twitter));
    }

    return tags;
  });
</script>

<div class="test-container">
  <h1>Multiple Meta Tags Test</h1>

  <div class="controls">
    <h2>Select Test Case:</h2>
    <div class="button-group">
      <button class:active={selectedTest === 'article'} onclick={() => (selectedTest = 'article')}> Article with Multiple Authors & Tags </button>
      <button class:active={selectedTest === 'appNoName'} onclick={() => (selectedTest = 'appNoName')}> App Card (IDs Only, No Name) </button>
      <button class:active={selectedTest === 'appFull'} onclick={() => (selectedTest = 'appFull')}> App Card (Full with Name) </button>
    </div>
  </div>

  <!-- Apply the meta tags to the head -->
  <RunesMetaTags {...currentMeta} />

  <div class="output">
    <h2>Generated Meta Tags:</h2>
    <p class="info">
      Total tags generated: <strong>{displayTags().length}</strong>
    </p>

    <div class="tags-list">
      {#each displayTags() as tag, index (index)}
        <div class="tag-item" class:duplicate={displayTags().filter((t) => t.key === tag.key).length > 1}>
          <span class="index">{index + 1}.</span>
          <code class="meta-tag">
            &lt;meta {tag.attribute}="{tag.key}" content="{tag.content}" /&gt;
          </code>
          {#if displayTags().filter((t) => t.key === tag.key).length > 1}
            <span class="badge">Duplicate Key</span>
          {/if}
        </div>
      {/each}
    </div>
  </div>

  <div class="explanation">
    <h2>What This Tests:</h2>
    {#if selectedTest === 'article'}
      <ul>
        <li><strong>Multiple article:author tags</strong> - 4 different authors</li>
        <li><strong>Multiple article:tag tags</strong> - 6 different tags</li>
        <li><strong>Multiple og:locale:alternate tags</strong> - 4 different locales</li>
        <li>These tags have the same <code>key</code> but different <code>content</code></li>
        <li>With index-based keying, each tag renders independently</li>
      </ul>
    {:else if selectedTest === 'appNoName'}
      <ul>
        <li><strong>App IDs without app name</strong> - Tests decoupled behavior</li>
        <li>App IDs for iPhone, iPad, and Google Play are rendered</li>
        <li>App names are NOT rendered (not provided)</li>
        <li>App country is included</li>
        <li>Validates that IDs work independently from names</li>
      </ul>
    {:else}
      <ul>
        <li><strong>Full app card</strong> - Both names and IDs</li>
        <li>App names for all three platforms</li>
        <li>App IDs for all three platforms</li>
        <li>App country included</li>
        <li>Shows complete app card implementation</li>
      </ul>
    {/if}
  </div>

  <div class="inspect">
    <h2>Inspect the DOM:</h2>
    <p>Open your browser's DevTools and inspect the <code>&lt;head&gt;</code> element to see the actual rendered meta tags.</p>
    <button onclick={() => console.log('Meta tags:', displayTags())}> Log Tags to Console </button>
  </div>
</div>

<style>
  .test-container {
    max-width: 1200px;
    margin: 2rem auto;
    padding: 2rem;
    font-family:
      system-ui,
      -apple-system,
      sans-serif;
  }

  h1 {
    color: #ff3e00;
    margin-bottom: 2rem;
  }

  h2 {
    color: #333;
    margin-bottom: 1rem;
  }

  .controls {
    background: #f5f5f5;
    padding: 1.5rem;
    border-radius: 8px;
    margin-bottom: 2rem;
  }

  .button-group {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  button {
    padding: 0.75rem 1.5rem;
    border: 2px solid #ddd;
    background: white;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.95rem;
    transition: all 0.2s;
  }

  button:hover {
    border-color: #ff3e00;
    transform: translateY(-1px);
  }

  button.active {
    background: #ff3e00;
    color: white;
    border-color: #ff3e00;
  }

  .output {
    background: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1.5rem;
    margin-bottom: 2rem;
  }

  .info {
    color: #666;
    margin-bottom: 1rem;
  }

  .tags-list {
    max-height: 500px;
    overflow-y: auto;
    border: 1px solid #eee;
    border-radius: 4px;
    padding: 1rem;
  }

  .tag-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    background: #f9f9f9;
    border-radius: 4px;
  }

  .tag-item.duplicate {
    background: #fff3cd;
    border-left: 3px solid #ffc107;
  }

  .index {
    color: #999;
    font-size: 0.85rem;
    min-width: 2rem;
  }

  .meta-tag {
    flex: 1;
    font-size: 0.85rem;
    padding: 0.25rem 0.5rem;
    background: white;
    border: 1px solid #e0e0e0;
    border-radius: 3px;
    overflow-x: auto;
  }

  .badge {
    background: #ffc107;
    color: #333;
    padding: 0.25rem 0.5rem;
    border-radius: 3px;
    font-size: 0.75rem;
    font-weight: 600;
  }

  .explanation {
    background: #e7f3ff;
    border-left: 4px solid #2196f3;
    padding: 1.5rem;
    border-radius: 4px;
    margin-bottom: 2rem;
  }

  .explanation ul {
    margin-top: 0.5rem;
  }

  .explanation li {
    margin-bottom: 0.5rem;
  }

  .explanation code {
    background: rgba(0, 0, 0, 0.05);
    padding: 0.2rem 0.4rem;
    border-radius: 3px;
    font-size: 0.9em;
  }

  .inspect {
    background: #f0f0f0;
    padding: 1.5rem;
    border-radius: 8px;
    text-align: center;
  }

  .inspect button {
    margin-top: 1rem;
  }
</style>
