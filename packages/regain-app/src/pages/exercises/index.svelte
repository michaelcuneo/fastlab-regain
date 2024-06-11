<script>
  import { onMount } from 'svelte';
  import { push } from 'svelte-spa-router';
  import LayoutGrid, { Cell } from '@smui/layout-grid';
  import Button from '@smui/button';
  import ExerciseLink from '../exerciselink/index.svelte';

  import { exercises, currentExercise, currentMode, user } from '../../utils/store';
  import { isEmpty }from '../../utils/aws';

  onMount( async () => {
    currentExercise.set([]);
    currentMode.set('display');
  })
</script>

<svelte:head>
	<title>Exercises</title>
</svelte:head>

{#if !isEmpty($user)}
  <header-panel>
    <div></div>
    <div>
      <Button variant="raised" on:click={() => {
        currentMode.set('add');
        push('/exercise');
      }}>
        ADD EXERCISE
      </Button>
    </div>
  </header-panel>
{/if}

<posts-panel>
  {#if $exercises}
    <LayoutGrid>
      {#each $exercises as exercise}
        <Cell spanDevices={{ phone: 12, tablet: 4, desktop: 3 }}>
          <ExerciseLink {exercise} />
        </Cell>
      {/each}
    </LayoutGrid>
  {/if}
</posts-panel>

<style>
  posts-panel {
    display: flex;
    position: relative;
    height: 100%;
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