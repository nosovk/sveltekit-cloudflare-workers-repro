<script lang="ts">
  import GTM from '$lib/components/GTM/index.svelte';
  import '../app.scss';
</script>

<GTM />

<slot />


<style lang="scss">
  // Pagination
  :global(.pagination-nav) {
    background: var(--transparent);
    box-shadow: none;
    display: flex;
    align-items: center;
    flex-flow: row wrap;
    justify-content: center;
  }

  :global(.pagination-nav .option) {
    width: var(--size-30);
    height: var(--size-30);
    padding: 0;
    margin-left: var(--size-8);
  }

  :global(.pagination-nav .option .img-wrapper) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--size-30);
    height: var(--size-30);
    color: var(--color-white);
    background-color: var(--color-red);
  }

  :global(.pagination-nav .option .img-wrapper:hover) {
    background-color: var(--color-red-light);
    color: var(--color-primary);
  }

  :global(.pagination-nav .option .img-wrapper:visited:hover) {
    background-color: var(--color-red-light);
    color: var(--color-primary);
  }

  :global(.pagination-nav .option .img-wrapper:visited) {
    background-color: var(--color-red);
    color: var(--color-white);
  }

  :global(.pagination-nav .option.active .img-wrapper) {
    background-color: var(--color-red-light);
    color: var(--color-primary);
  }

  :global(.pagination-nav .option.active .img-wrapper:hover) {
    background-color: var(--color-red);
    color: var(--color-white);
  }

  :global(.pagination-nav .option.ellipsis) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :global(.pagination-nav .option.ellipsis span) {
    line-height: rem(1);
    height: rem(10);
  }

  :global(.pagination-nav .option.disabled) {
    pointer-events: none;
  }

  :global(.pagination-nav .option.disabled .img-wrapper) {
    background-color: var(--color-red);
    color: var(--color-white);
    pointer-events: none;
  }

  :global(.pagination-nav .option.disabled .img-wrapper img) {
    pointer-events: none;
  }
</style>
