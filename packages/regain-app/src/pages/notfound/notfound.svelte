<script lang="ts">
	import { link } from 'svelte-spa-router';
	import Button from '@smui/button';

	export let params;
</script>

<style>
	error {
		display: flex;
		height: calc(100vh - 120px);
		position: relative;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	h1 {
		font-size: 2.8em;
		font-weight: 700;
		margin: 0 0 0.5em 0;
		color: #132A13;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>Not Found</title>
</svelte:head>

<error>
	<h1>{params.wild} does not exist</h1>
	<h3>Please go back to the start</h3>
	<a href="/" use:link>
		<Button type="submit" variant="raised">Home</Button>
	</a>
</error>
