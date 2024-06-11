<script>
  import { onMount } from 'svelte';
  import { push } from 'svelte-spa-router';
  import LayoutGrid, { Cell } from '@smui/layout-grid';
  import Button from '@smui/button';
  import GroupLink from '../grouplink/index.svelte';

  import { groups, currentGroup, currentMode, user } from '../../utils/store';
  import { isEmpty }from '../../utils/aws';

  onMount( async () => {
    currentGroup.set([]);
    currentMode.set('display');
  })
</script>

<svelte:head>
	<title>Groups</title>
</svelte:head>

{#if !isEmpty($user)}
  <header-panel>
    <div></div>
    <div>
      <Button variant="raised" on:click={() => {
        currentMode.set('add');
        push('/group');
      }}>
        ADD GROUP
      </Button>
    </div>
  </header-panel>
{/if}

<posts-panel>
  {#if $groups}
    <LayoutGrid>
      {#each $groups as group}
        <Cell spanDevices={{ phone: 12, tablet: 4, desktop: 3 }}>
          <GroupLink {group} />
        </Cell>
      {/each}
    </LayoutGrid>
  {/if}
</posts-panel>

<style>
  posts-panel {
    display: flex;
    position: relative;
    height: 100vh;
    width: 100vw;
  }
  header-panel {
		display: flex;
		position: relative;
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
	}
</style>