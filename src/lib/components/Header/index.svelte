<script lang="ts">
  import { afterUpdate } from 'svelte';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  // components
  import Search from '$lib/components/Search/index.svelte';
  // assets
  import logoBlack from '$lib/components/Header/assets/BfU-logo-b.svg';
  import searchIcon from '$lib//assets/icons/search.svg';
  // utils
  import { menu, socials } from '$lib/utils/menu';
  import { searchQuery } from '$lib/utils/search';

  let openMenu = false;
  let openSearch = false;

  const search = (event: CustomEvent) => {
    searchQuery.set(event.detail.searchQuery);
    openSearch = false;
    openMenu = false;
    goto('/search');
  };

  const keyPress = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && openMenu) openMenu = false;
  };

  afterUpdate(() => {
    if (document?.body?.parentElement) {
      document.body.parentElement.style.overflow = openMenu ? 'hidden' : 'hidden auto';
      document.body.parentElement.style.height = openMenu ? '100vh' : '100%';
    }
  });
</script>

<svelte:window on:keyup={keyPress} />

<header>
  <div class="wrapper-header" class:fixed={openMenu}>
    <a class="logo" href="/" title="home page" on:click={() => (openMenu = false)}>
      <img src={logoBlack} width="200" height="24" alt="B4Ukraine logo" />
    </a>
    <div class="header-navigation">
      {#if openSearch}
        <div class="search-wrapper">
          <Search on:search={search} bordered={true} />
        </div>
      {:else}
        <nav class="header-nav">
          <a class="nav-link uppercase" title={menu[0].title} href={menu[0].url}>
            What's<br />New
          </a>
          <a class="nav-link uppercase" title={menu[1].title} href={menu[1].url}>
            What<br />We Do
          </a>
          <a class="nav-link uppercase" title={menu[2].title} href={menu[2].url}>
            Take<br />Action
          </a>
          <a class="nav-link uppercase" title={menu[3].title} href={menu[3].url}>
            Letters From<br /> Ukraine
          </a>
          <a class="nav-link uppercase" title={menu[4].title} href={menu[4].url}>
            About<br />Us
          </a>
        </nav>
      {/if}
      <button
        class="burger-wrapper"
        class:open-menu={openMenu}
        on:click={() => (openMenu = !openMenu)}
        id="burger"
      >
        <span class="burger" />
      </button>
    </div>
    <div class="icons">
      {#if $page.url.pathname !== '/search'}
        <a
          class="nav-link close-wrapper open-menu"
          class:open-search={openSearch}
          href="/"
          on:click|preventDefault={() => (openSearch = !openSearch)}
        >
          <span class="burger" />

          <img src={searchIcon} width="40" height="40" alt="Search" />
        </a>
      {/if}
      {#each socials as item}
        <a class="nav-link" target="_blank" rel="noreferrer" title={item.title} href={item.url}>
          <img src={item.icon} width="40" height="40" alt="Youtube" />
        </a>
      {/each}
    </div>
  </div>
</header>

<!--Mobile menu-->
<nav class="mobile-menu" class:open-menu={openMenu}>
  {#each menu as menuItem}
    <a
      class="nav-link mobile-menu-links"
      title={menuItem.title}
      href={menuItem.url}
      on:click={() => (openMenu = false)}>{menuItem.title}</a
    >
  {/each}

  <div class="search-wrapper">
    <Search on:search={search} bordered={false} />
  </div>

  <div class="social">
    {#each socials as item}
      <a class="nav-link" target="_blank" rel="noreferrer" title={item.title} href={item.url}>
        {item.title}
      </a>
    {/each}
  </div>
</nav>

<style lang="scss">
  .wrapper-header {
    display: flex;
    height: var(--size-64);
    align-items: center;
    justify-content: space-between;
    padding: 0 var(--size-30);

    @media screen and (min-width: $min-width-tablet) {
      max-width: 76.25rem;
      height: 7.5rem;
      padding: 0 6.875rem;
      margin: 0 auto;
    }

    .header-navigation {
      @extend %flex-center;

      flex: 1 0 auto;

      .search-wrapper {
        width: 90%;
      }

      @media screen and (min-width: $min-width-medium) {
        margin-left: var(--size-20);
      }
    }

    .header-nav {
      display: none;

      @media screen and (min-width: $min-width-large) {
        display: flex;
        margin: 0 auto;
      }

      .nav-link {
        margin-right: rem(14);
        text-align: center;

        @include font(rem(14), var(--weight-700), rem(24), var(--color-secondary));

        &:last-child {
          margin-right: 0;
        }

        &:hover {
          color: var(--color-secondary-light);
        }
      }
    }

    .logo {
      z-index: 101;
      max-width: 12.5rem;
      flex: 1 0 auto;

      @media screen and (min-width: $min-width-tablet) {
        max-width: 20.625rem;
      }

      img {
        width: 100%;
      }
    }

    &.fixed {
      .logo {
        position: fixed;
        top: 0;
        left: 0;
        margin: 1.0625rem 0 0 var(--size-30);
      }
    }

    .icons {
      display: none;
      width: 11rem;
      flex: 0 0 11rem;
      align-items: center;
      justify-content: flex-end;

      .nav-link {
        @extend %flex-center;

        width: var(--size-30);
        height: var(--size-30);
        margin-left: var(--size-12);
        filter: brightness(1);

        &:hover {
          filter: brightness(2);
        }

        &.close-wrapper {
          @extend %burger;

          position: relative !important;
          z-index: 1;
          top: 0;
          bottom: 0;
          margin-right: 0;

          &.open-search {
            @extend %flex-center;

            display: flex !important;
            width: var(--size-20);

            .burger {
              display: block;
              width: var(--size-20);

              &::before,
              &::after {
                width: var(--size-20);
              }
            }

            img {
              display: none;
            }
          }

          &.open-menu {
            position: fixed;
            display: block;
            background: var(--transparent);

            .burger {
              background-color: var(--transparent);

              &::after {
                top: 0;
                transform: rotate(-45deg);
              }

              &::before {
                top: 0;
                transform: rotate(45deg);
              }
            }
          }
        }
      }

      @media screen and (min-width: $min-width-large) {
        display: flex;
      }
    }
  }

  .burger-wrapper {
    @extend %burger;

    &.open-menu {
      position: fixed;
      display: block;
      background: var(--transparent);

      .burger {
        background-color: var(--transparent);

        &::after {
          top: 0;
          transform: rotate(-45deg);
        }

        &::before {
          top: 0;
          transform: rotate(45deg);
        }
      }
    }
  }

  .mobile-menu {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 100%;
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
    background-color: var(--color-red);
    transition: all var(--transition-long) ease;

    &.open-menu {
      left: 0;

      :global(body) {
        overflow: hidden;
      }
    }

    &-links {
      text-align: center;

      @include font(var(--size-28), var(--weight-700), var(--size-46), var(--color-white));

      &:hover {
        color: var(--color-secondary-light);
      }
    }

    .search-wrapper {
      margin-top: var(--size-80);
    }

    .social {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: var(--size-38);

      .nav-link {
        @include font(var(--size-16), var(--weight-400), var(--size-30), var(--color-secondary));

        &:hover {
          color: var(--color-secondary-light);
        }
      }
    }
  }
</style>
