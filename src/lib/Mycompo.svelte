<script context="module" lang="ts">
  export interface TwitterType {
    card?: 'summary' | 'summary_large_image' | 'app' | 'player';
    site?: string;
    handle?: string;
    title?: string;
    description?: string;
    image?: string;
    imageAlt?: string;
  }
  export interface OgType{
    type?: string;
    title?: string;
    description?: string;
    url?: string;
    image?: string;
    imageAlt?: string;
    siteName?: string;
    imageWidth?: string;
    imageHeight?: string;
  }
  export interface MetaProps {
    title?: string;
    robots?: boolean;
    description?: string;
    keywords?: string;
    twitter?: TwitterType;
    og?: OgType;
    url?: string;
    imageWidth?: string;
    imageHeight?: string;
  }
</script>

<script lang="ts" >
  // type AnyObject = { [key: string]: any };
  import { deepMerge } from '$lib'
  // import { page } from '$app/stores';
  let { data } = $props();

  console.log('data', data)
  // let pageData = $state($page.data)
  // let mergedObject: MetaProps = $derived(pageData.pageMetaTags ? deepMerge(pageData.layoutMetaTags,  pageData.pageMetaTags ) : pageData.layoutMetaTags);
  // $effect(() => {
  //   pageData = $page.data
  // })
</script>

hi