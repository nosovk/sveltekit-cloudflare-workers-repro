<script lang="ts">
  import Seo from '$lib/components/Seo/index.svelte';
  import { websiteSchema } from '$lib/utils/json-ld';
  import data from '$lib/utils/site-data';

  export let status: number;
  export let error: Error;

  const dev = process.env.NODE_ENV === 'development';
</script>

<Seo
  title="Page not found"
  noindex={true}
  description={'Page not found: 404'}
  schemas={[websiteSchema]}
  canonical="/"
/>

<svelte:head>
  <meta http-equiv="refresh" content="5;{data.siteUrl}" />
</svelte:head>

<main>
 Page 1 <a href={base}>back</a>
</main>

{#if dev && error && error.stack}
  <pre>{error.stack}</pre>
{/if}
