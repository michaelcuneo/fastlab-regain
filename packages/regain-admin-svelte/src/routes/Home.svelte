<script>
	import Landing from '../components/Landing.svelte';
	import Onboard from '../components/Onboard.svelte';
	import Signin from '../routes/Signin.svelte';
	import App from '../components/App.svelte';

	import { isEmpty } from '../utils/aws.js';
	import { user , onboard, landing } from '../utils/store.js';
</script>

<svelte:head>
	<title>Regain Home</title>
</svelte:head>

<main-wrapper>
	{#if $landing === true}
		<Landing />
	{:else if $landing === false && isEmpty($user)}
		<Signin />
	{:else if $onboard === true} <!-- Users first time, send them to onboarding. -->
		<Onboard />
	{:else}
		<App />
	{/if}
</main-wrapper>

<style>
	main-wrapper {
		display: flex;
		position: relative;
		height: calc(100 - 88px);
		width: 100%;
		z-index: 0;
	}
</style>