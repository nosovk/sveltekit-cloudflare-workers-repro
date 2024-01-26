<script lang="ts">
  // components
  import Banner from '$lib/components/Banner/banner.svelte';
  import MiniBanner from '$lib/components/Banner/mini-banner.svelte';
  import Seo from '$lib/components/Seo/index.svelte';
  import {assets, base} from '$app/paths';
  // utils
  import { websiteSchema, organizationSchema } from '$lib/utils/json-ld';
  // types
  import type { PageData } from './$types';
  import {page} from "$app/stores";

  export let data: PageData;
</script>


<Seo title="Home" schemas={[websiteSchema, organizationSchema]} />

<main>
  <Banner></Banner>
  <section>
    <p>relative link:</p>
    <a href="{base}/about" class="text-2">What We Do</a>
    <a href="{base}/prerender" class="text-2">Prerender</a>
  </section>
  <p>base: {base}</p>
  <p>assets: {assets}</p>
  <a href={base+"/1"}>Page 1</a>
  <a href={base+"/2"}>Page 2</a>
  <a href={base+"/3"}>Page 3</a>
  <a href={base+"/4"}>Page 4</a>

  <code>{@html JSON.stringify($page)}</code>
</main>

<style lang="scss">
  main {
    & > .text-2 {
      display: block;
      margin: var(--size-32) 0 0;

      @media screen and (min-width: $min-width-medium) {
        margin-bottom: var(--size-10);
      }
    }

    hr {
      height: var(--size-2);
      border: none;
      margin: 0 0 var(--size-12);
      background-color: var(--color-red);

      @media screen and (min-width: $min-width-medium) {
        height: var(--size-4);
        margin-bottom: var(--size-36);
      }
    }

    .list {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;

      @media screen and (min-width: $min-width-large) {
        flex-flow: row wrap;
        align-items: flex-start;
      }
    }

    .btn {
      margin: var(--size-32) auto var(--size-64);
    }
  }
</style>
