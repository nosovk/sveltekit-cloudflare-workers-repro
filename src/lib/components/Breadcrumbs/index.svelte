<script lang="ts">
  export let url = '';
  export let title = '';
  export let current = '';

  const divider = '>';
</script>

<div class="breadcrumbs">
  <a href="/" class="text-breadcrumbs">Home</a>
  {#if url.length && title.length}
    <span class="text-breadcrumbs">{divider}</span>
    <a href={url} class="text-breadcrumbs">
      {title}
    </a>
  {/if}
  {#if current.length}
    <span class="text-breadcrumbs">{divider}</span>
    <h1 class="text-breadcrumbs">{current}</h1>
  {/if}
</div>

<style lang="scss">
  .breadcrumbs {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: var(--size-12) 0 var(--size-44);

    span,
    h1,
    a {
      display: contents;
      margin: 0 var(--size-6) 0 0;
      color: var(--color-secondary-light);
    }

    a {
      &:hover {
        color: var(--color-secondary);
      }
    }
  }
</style>
