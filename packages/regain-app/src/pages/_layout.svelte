<script lang="ts">
	import Nav from "../components/Nav.svelte";
	import Overlay from "../components/Overlay.svelte";
	import { error } from "../utils/store";

	import Banner, { Label as BannerLabel, Icon } from "@smui/banner";
	import Button from "@smui/button";
	import { handleErrors } from "../utils/aws";
</script>

<main>
	<Overlay />
	<!-- Top banner allows dropdown error control -->
	<Banner bind:open={$error.status} centered mobileStacked>
		<Icon slot="icon" class="material-icons">error</Icon>
		<BannerLabel slot="label">{$error.message}</BannerLabel>
		<svelte:fragment slot="actions">
			<Button on:click={handleErrors}>OK</Button>
		</svelte:fragment>
	</Banner>
	<Nav />
	<slot />
</main>

<style>
	main {
		min-height: 100%;
		background: #132a13;
	}
</style>
