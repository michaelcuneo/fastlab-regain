<script lang="ts">
  import Overlay from '$lib/Overlay.svelte';
  import './styles.css';

  let { children }: { children: any } = $props();
</script>

<div class="root">
  <Overlay />
  {@render children?.()}
</div>

<style>
  .root {
		min-height: 100%;
		background: #132a13;
	}
</style>