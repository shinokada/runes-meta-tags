<script lang="ts">
  const example = import.meta.glob('./+page.ts', {
    query: '?raw',
    import: 'default',
    eager: true
  }) as Record<string, string>;

  import { HighlightCompo } from 'svelte-rune-highlight';
</script>

<h1>About</h1>

<p>Check meta tags using the developer tools.</p>

<HighlightCompo code={example['./+page.ts'] as string} />
