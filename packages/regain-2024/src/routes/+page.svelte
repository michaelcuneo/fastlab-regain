<script lang="ts">
	import Landing from "$lib/Landing.svelte";
	import Onboard from "$lib/Onboard.svelte";
	import Exercises from "$lib/Exercises.svelte";
	import { user, usersettings, landing, isPaused, isHalfway, isCompleted } from "$lib/store";
	import { isEmpty } from "$lib/aws"

</script>

<svelte:head>
	<title>Regain Landing</title>
</svelte:head>

<wrapper>
	{#if landing.value === true}
		<!-- We've hit the landing. -->
		<Landing />
	{:else if landing.value === false && isEmpty(user.value)}
		<!-- We're not on the landing, and we have not logged in yet? -->
		<!-- <Signin /> -->
	{:else if landing.value === false && !isEmpty(user.value) && usersettings.value.onboard === true}
		<!-- Users first time, send them to onboarding. -->
		<Onboard />
	{:else if landing.value === false && !isEmpty(user.value) && usersettings.value.onboard === false}
		<!-- We are not on the landing, not logged in, and we've onboarded already -->
		<Exercises
			paused={isPaused.value}
			halfway={isHalfway.value}
			completed={isCompleted.value}
		/>
	{/if}
</wrapper>

<style>
	wrapper {
		display: block;
		height: 100%;
	}
</style>
