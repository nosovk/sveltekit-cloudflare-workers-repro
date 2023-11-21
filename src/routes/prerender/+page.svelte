<script lang="ts">
  // components
  import Seo from '$lib/components/Seo/index.svelte';
  // utils
  import { websiteSchema } from '$lib/utils/json-ld';
  import {assets, base} from "$app/paths";
  import {page} from "$app/stores";

  const title = 'prerender route';
  const description =
    'We are a coalition of civil society ' +
    'organizations made to appeal to the business ' +
    'community to support the people and territorial ' +
    'integrity of Ukraine';
</script>

<Seo {title} noindex={true} {description} schemas={[websiteSchema]} canonical="/about" />

<main>
  <h1 class="text-1">Who we are</h1>
  <div class="content">
    Prerendered page
  </div>
  <p>base: {base}</p>
  <p>assets: {assets}</p>
  <code>{@html JSON.stringify($page)}</code>
</main>

<style lang="scss">
  main {
    .content {
      display: flex;
      flex-direction: column;

      .text {
        margin-bottom: var(--size-28);

        @media screen and (min-width: $min-width-tablet) {
          margin-bottom: 0;
        }

        .bg {
          padding: var(--size-42) 1.875rem var(--size-64);
          margin: var(--size-36) -1.875rem var(--size-56);
          background-color: var(--color-primary-light);

          @media screen and (min-width: $min-width-tablet) {
            padding: 4.125rem calc(6.875rem / 2) 5.25rem;
            margin: var(--size-36) calc(-6.875rem / 2) var(--size-56);
          }
        }
      }
    }
  }
</style>
