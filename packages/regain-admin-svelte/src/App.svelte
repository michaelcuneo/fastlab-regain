<script>
	import { Amplify } from '@aws-amplify/core';
	import Router from 'svelte-spa-router';
	import Home from './routes/Home.svelte';
	import Signin from './routes/Signin.svelte';
	import Nav from './components/Nav.svelte';
	import NotFound from './routes/NotFound.svelte';

  import Banner, { Label as BannerLabel, Icon } from '@smui/banner';
	import Button from '@smui/button';

	import { error, errorMessage } from './utils/store.js';

	import aws_exports from './aws-exports';
	import Settings from './routes/Settings.svelte';
	import Overlay from './components/Overlay.svelte';
	
	Amplify.configure(aws_exports);

	const handleError = () => {
		error.set(false);
		errorMessage.set(null);
	}

	const routes = {
		'/': Home,
		'/signin': Signin,
		'/signin/:tab': Signin,
		'/settings': Settings,

		'*': NotFound,
	}
</script>

<main>
	<Overlay />
	<Banner
		bind:open={$error}
		centered
		mobileStacked
	>
		<Icon slot="icon" class="material-icons">error</Icon>
		<BannerLabel slot="label">{$errorMessage}</BannerLabel>
		<svelte:fragment slot="actions">
			<Button on:click={handleError}>OK</Button>
		</svelte:fragment>
	</Banner>
	<Nav />
	<Router {routes} restoreScrollState={true} />
</main>

<style>
	main {
		height: 100vh;
		background: #132A13;
	}
</style>
