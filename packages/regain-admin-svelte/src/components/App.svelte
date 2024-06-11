<script>
  import { fade, fly } from 'svelte/transition';
  import LayoutGrid, { Cell } from '@smui/layout-grid';

  import GrowthFrame from './GrowthFrame.svelte';
  import Information from './Information.svelte';
  import VideoArea from './VideoArea.svelte';

  import { messages } from '../utils/store';
</script>

<div id="layout">
  <LayoutGrid>
    <Cell span={6}>
      <feedback>
        <GrowthFrame />
        <information-area in:fly="{{ y: 200, duration: 2000 }}" out:fade>
          {#each $messages as message}
            {#if message.visible}
              <Information bind:message={message} />
            {/if}
          {/each}
        </information-area>
      </feedback>
    </Cell>
    <Cell span={6}>
      <VideoArea />
    </Cell>
  </LayoutGrid>
</div>

<style>
	#layout {
		position: relative;
		background: white;
	}
  feedback {
    display: flex;
    position: relative;
    width: 100%;
    box-shadow: inset 0px -4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
  }
  information-area {
    position: absolute;
    top: 13px;
    left: 13px;
    right: 23px;
    flex-direction: column;
  }
</style>