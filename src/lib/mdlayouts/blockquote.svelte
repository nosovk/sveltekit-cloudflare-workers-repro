<div class="flex">
  <slot />
</div>

<style lang="scss">
  .flex {
    :global(p) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    @media screen and (min-width: 992px) {
      :global(p) {
        flex-direction: row;
      }
    }
  }
</style>
