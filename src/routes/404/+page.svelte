<script lang="ts">
  import Seo from '$lib/components/Seo/index.svelte';
  import { websiteSchema } from '$lib/utils/json-ld';
  import data from '$lib/utils/site-data';

  export let status: number;
  export let error: Error;
  import { base, assets } from '$app/paths';
  import { page } from '$app/stores';

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
  <p>base: {base}</p>
  <p>assets: {assets}</p>
  <code>{@html JSON.stringify(page)}</code>

  <div class="container">
    <div class="wrapper-choose">
      <h1 class="title">
        {#if status}
          Error: {status}
        {:else}
          Page not found
        {/if}
      </h1>
      <p class="text-thin art">
        {#if error && error.message}
          {error.message}
        {:else}
          Requested page wasn't found
        {/if}
      </p>
      <p class="text-thin art">You will be redirected to main site in 10 seconds</p>
    </div>
  </div>
</main>

{#if dev && error && error.stack}
  <pre>{error.stack}</pre>
{/if}
