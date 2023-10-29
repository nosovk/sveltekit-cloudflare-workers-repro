<script lang="ts">
  import { getFileName } from '$lib/utils/getFileName';
  // assets
  import folderIcon from '$lib/components/Files/assets/folder.svg';

  export let files: string[];
  export let cols = '1';
</script>

{#if files?.length}
  <div class="list cols-{cols}">
    {#each files as file}
      <a href="/" download={getFileName(file)}>
        <div class="list-item text-6">
          <img src={folderIcon} width="16" height="16" alt="icon" />
          <span>{getFileName(file)}</span>
        </div>
      </a>
    {/each}
  </div>
{/if}

<style lang="scss">
  .list {
    display: flex;
    flex-flow: column wrap;
    align-items: flex-start;
    justify-content: flex-start;

    &.cols-2 {
      margin-top: var(--size-32);

      @media screen and (min-width: $min-width-small) {
        flex-flow: row wrap;
        margin-top: 7.75rem;
      }

      a {
        --size: calc(50% - var(--size-12));

        margin-bottom: var(--size-16);

        @media screen and (min-width: $min-width-small) {
          width: var(--size);
          flex: 1 0 var(--size);
        }
      }
    }

    a {
      padding: 0;
      margin-bottom: var(--size-22);
      background-color: var(--transparent);

      &:hover {
        background-color: var(--transparent);
      }

      .list-item {
        display: flex;
        width: fit-content;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        padding: var(--size-4) var(--size-6) var(--size-6);
        background-color: var(--color-primary);
        color: var(--color-secondary);
        text-decoration: none;

        &:hover {
          background-color: var(--color-primary-light);
        }

        img {
          margin-right: var(--size-6);
        }
      }
    }
  }
</style>
