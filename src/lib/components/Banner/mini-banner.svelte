<script lang="ts">
  import whiteLogo from '$lib/assets/white-logo.png';
  import mailIcon from '$lib/assets/icons/mail-icon.svg';
  import meetIcon from '$lib/assets/icons/meet-icon.svg';
  import respIcon from '$lib/assets/icons/resp-icon.svg';
</script>

<a class="wrapper" href="/what-we-do">
  <div class="text">
    <div class="title">B4Ukraine<br />Business Outreach</div>
    <div class="subtitle">
      We continuously engage with<br />
      companies still in Russia promoting<br />
      a responsible exit strategy
    </div>
    <img src={whiteLogo} class="logo" width="116" height="14" alt="logo" />
  </div>
  <div class="icons">
    <div class="icon-block">
      <img src={mailIcon} width="92" height="92" alt="icon" />
      <span class="red">125</span>
      <span class="white">Letters sent</span>
    </div>
    <div class="icon-block">
      <img src={respIcon} width="92" height="92" alt="icon" />
      <span class="red">41%</span>
      <span class="white">Response rate</span>
    </div>
    <div class="icon-block">
      <img src={meetIcon} width="92" height="92" alt="icon" />
      <span class="red">12%</span>
      <span class="white">Meeting rate</span>
    </div>
  </div>
</a>

<style lang="scss">
  .wrapper {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: rem(16);
    margin: 0 auto rem(50);
    background-color: var(--color-secondary);
    min-height: rem(250);

    @media screen and (min-width: $max-width-medium-extra) {
      flex-flow: row wrap;
      padding: rem(30);
    }

    .text,
    .icons {
      width: 100%;
      max-width: rem(300);

      @media screen and (min-width: $max-width-medium-extra) {
        width: auto;
        max-width: unset;
      }
    }

    .text {
      position: relative;
      margin-bottom: rem(10);

      @media screen and (min-width: $max-width-medium-extra) {
        margin-bottom: 0;
      }

      .logo {
        position: absolute;
        top: 0;
        right: 0;
        width: rem(60);

        @media screen and (min-width: $max-width-medium-extra) {
          position: relative;
          top: unset;
          right: unset;
          width: rem(92);
        }
      }

      .title {
        margin-bottom: rem(10);
        @include font(rem(20), var(--weight-700), rem(24), var(--color-primary));

        @media screen and (min-width: $max-width-medium-extra) {
          @include font(rem(32), var(--weight-700), rem(38), var(--color-primary));
        }
      }

      .subtitle {
        @include font(rem(8), var(--weight-500), rem(10), var(--color-white));

        @media screen and (min-width: $max-width-medium-extra) {
          @include font(rem(16), var(--weight-500), rem(20), var(--color-white));
        }
      }
    }

    .icons {
      display: flex;
      align-items: center;
      flex-flow: row wrap;
      justify-content: center;

      .icon-block {
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        margin: 0 rem(2);

        @media screen and (min-width: $min-width-xx-small) {
          margin: 0 rem(10);
        }

        @media screen and (min-width: $min-width-x-small) {
          margin: 0 rem(20);
        }

        &:first-child {
          margin-left: 0;
        }

        &:last-child {
          margin-right: 0;
        }

        img {
          width: rem(60);
          height: rem(60);
          margin-bottom: rem(10);

          @media screen and (min-width: $max-width-medium-extra) {
            width: rem(96);
            height: rem(96);
          }
        }

        .red {
          @include font(rem(12), var(--weight-500), rem(14), var(--banner-text-1));

          @media screen and (min-width: $max-width-medium-extra) {
            @include font(rem(24), var(--weight-500), rem(30), var(--banner-text-1));
          }
        }

        .white {
          @include font(rem(10), var(--weight-500), rem(12), var(--color-white));

          @media screen and (min-width: $max-width-medium-extra) {
            @include font(rem(16), var(--weight-500), rem(20), var(--color-white));
          }
        }
      }
    }
  }
</style>
