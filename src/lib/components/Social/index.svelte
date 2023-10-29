<script lang="ts">
  // assets
  import downloadIcon from '$lib/components/Preview/assets/download.svg';
  import facebookIcon from '$lib/components/Preview/assets/facebook.svg';
  import twitterIcon from '$lib/components/Preview/assets/twitter.svg';
  import linkedinIcon from '$lib/components/Preview/assets/linkedin.svg';
  import linkIcon from '$lib/components/Preview/assets/link.svg';
  import siteData from '$lib/utils/site-data';

  export let thumbnail = '';
  export let title = '';
  export let url = '';
  export let filename = '';
  const shareUrl = siteData.siteUrl + url;
  let showHint = false;

  const copy = () => {
    navigator.clipboard
      .writeText(shareUrl)
      .then(() => {
        showHint = true;
        const timer = setTimeout(() => {
          showHint = false;
          clearTimeout(timer);
        }, 3000);
      })
      .catch(() => console.warn('Copy error!'));
  };

  const facebookLink = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;

  const twitterLink = `https://twitter.com/share?url=${shareUrl}&text=${title}`;

  const linkedinLink = `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`;
</script>

<div class="icons">
  <a href={thumbnail} download={filename}>
    <img src={downloadIcon} width="20" height="20" alt="download" />
  </a>
  <a href={facebookLink} target="_blank" rel="noreferrer">
    <img src={facebookIcon} width="20" height="20" alt="facebook" />
  </a>
  <a href={twitterLink} target="_blank" rel="noreferrer">
    <img src={twitterIcon} width="20" height="20" alt="twitter" />
  </a>
  <a href={linkedinLink} target="_blank" rel="noreferrer">
    <img src={linkedinIcon} width="20" height="20" alt="linkedin" />
  </a>
  <a
    on:click|preventDefault={copy}
    href={shareUrl}
    class="hinted"
    title="copy link"
    class:show={showHint}
  >
    <img src={linkIcon} width="20" height="20" alt="link" />
  </a>
</div>

<style lang="scss">
  .icons {
    @extend %flex-center;

    a {
      width: var(--size-20);
      height: var(--size-20);
      padding: 0;
      border-radius: var(--br-rounded);
      margin-right: var(--size-6);
      background-color: var(--transparent);
      line-height: var(--size-20);

      &:hover,
      &:active,
      &:focus {
        background-color: var(--color-primary);
      }

      &:last-child {
        margin-right: 0;
      }

      &.hinted {
        position: relative;

        &::after {
          position: absolute;
          top: rem(32);
          right: 0;
          display: none;
          padding: var(--size-6) var(--size-10);
          border-radius: var(--size-6);
          background-color: var(--color-secondary);
          color: var(--color-primary);
          content: 'Copied!';
        }

        &.show {
          &::after {
            z-index: 2;
            display: block;
          }
        }
      }
    }
  }
</style>
