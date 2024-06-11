<script lang="ts">
	import { onMount } from "svelte";
	import Landing from "../components/Landing.svelte";
	import Onboard from "../components/Onboard.svelte";
	import Signin from "./signin/index.svelte";
	import Exercises from "../components/Exercises.svelte";
	import {
		user,
		usersettings,
		landing,
		isPaused,
		isHalfway,
		isCompleted,
	} from "../utils/store";

	import { isEmpty } from "../utils/aws"

	onMount(() => {
		if ($landing === true) {
			isPaused.set(false);
			isHalfway.set(false);
			isCompleted.set(false);
		}
	})
</script>

<svelte:head>
	<title>Regain Home</title>
</svelte:head>

<wrapper>
	{#if $landing === true}
		<!-- We've hit the landing. -->
		<Landing />
	{:else if $landing === false && isEmpty($user)}
		<!-- We're not on the landing, and we have not logged in yet? -->
		<Signin />
	{:else if $landing === false && !isEmpty($user) && $usersettings.onboard === true}
		<!-- Users first time, send them to onboarding. -->
		<Onboard />
	{:else if $landing === false && !isEmpty($user) && $usersettings.onboard === false}
		<!-- We are not on the landing, not logged in, and we've onboarded already -->
		<Exercises
			paused={$isPaused}
			halfway={$isHalfway}
			completed={$isCompleted}
		/>
	{/if}
</wrapper>

<style>
	wrapper {
		display: block;
		height: 100%;
	}
</style>
