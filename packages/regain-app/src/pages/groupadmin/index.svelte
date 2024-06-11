<script>
	import { goto } from "@roxi/routify";
	import { v4 as uuidv4 } from "uuid";
	import CircularProgress from "@smui/circular-progress";
	import Button from "@smui/button";
	import { Icon } from "@smui/icon-button";
	import Textfield from "@smui/textfield";
	import Dialog, { Title, Content } from "@smui/dialog";
	import { currentGroup, currentMode, user } from "../../utils/store";
	import { isEmpty, addGroup, editGroup } from "../../utils/aws";
	import LayoutGrid, { Cell } from "@smui/layout-grid";

	import { afterUpdate } from "svelte";

	let title = $currentGroup.title || "";
	let checkValid = false;

	let open = false;

	const handleEdit = () => {
		if ($currentMode === "display") {
			currentMode.set("edit");
		} else {
			currentMode.set("display");
		}
	};

	const handleSave = async () => {
		open = true;
		if ($currentMode === "edit") {
			open = false;
			$goto("/groups");

			editGroup({
				id: $currentGroup.id,
				title: title,
			});
		} else if ($currentMode === "add") {
			open = false;
			$goto("/groups");

			addGroup({
				id: uuidv4(),
				title: title,
			});
		}
	};

	afterUpdate(() => {
		checkValid = title !== "";
	});
</script>

<svelte:head>
	{#if $currentMode === "display" || "edit"}
		<title>{$currentGroup.title}</title>
	{/if}
	{#if $currentMode === "add"}
		<title>New Group</title>
	{/if}
</svelte:head>

<header-panel>
	<div />
	<div>
		{#if (!isEmpty($user) && $currentMode === "edit") || $currentMode === "add"}
			<Button on:click={handleSave} disabled={!checkValid}>SAVE CHANGES</Button>
		{/if}
		{#if (!isEmpty($user) && $currentMode === "display") || $currentMode === "edit"}
			<Button on:click={handleEdit} variant="raised">
				{#if $currentMode === "display"}
					EDIT
				{:else}
					CANCEL
				{/if}
			</Button>
		{/if}
		{#if $currentMode === "add" || $currentMode === "display"}
			<Button on:click={() => $goto("/groups")} variant="raised">CANCEL</Button>
		{/if}
	</div>
</header-panel>

<section>
	<LayoutGrid style="width: 100%;">
		<Cell span={12}>
			<column>
				<span>
					<heading>Group Title</heading>
					{#if $currentMode === "add" || $currentMode === "edit"}
						<required>
							<Icon class="material-icons required" on>star</Icon>
						</required>
					{/if}
				</span>
				<editor-wrap>
					{#if $currentMode === "display"}
						<group-title>{$currentGroup.title}</group-title>
					{:else if $currentMode === "add"}
						<Textfield
							style="width: 100%;"
							variant="filled"
							initialValue={null}
							bind:value={title}
							label="Title"
							required
						/>
					{:else if $currentMode === "edit"}
						<Textfield
							style="width: 100%;"
							variant="filled"
							initialValue={$currentGroup.title}
							bind:value={title}
							label="Title"
							required
						/>
					{/if}
				</editor-wrap>
			</column>
		</Cell>
	</LayoutGrid>
</section>

<Dialog bind:open scrimClickAction="" escapeKeyAction="">
	<Title id="simple-title">SAVING CHANGES</Title>
	<Content id="simple-content">
		<div style="display: flex; justify-content: center">
			<CircularProgress style="height: 32px; width: 32px;" indeterminate />
		</div>
	</Content>
</Dialog>

<style>
	header-panel {
		display: flex;
		position: relative;
		flex-direction: row;
		justify-content: space-between;
		width: 100vw;
	}
	editor-wrap {
		padding: 1em 0em 1em 0em;
	}
	section {
		display: flex;
		flex-direction: column;
		position: relative;
		background: white;
		padding: 0.5em;
		margin: 0.5em;
	}
	column {
		display: flex;
		flex-direction: column;
	}
	heading {
		font-size: 16px;
		font-weight: 600;
		padding: 1em 0em 1em 0em;
	}
	group-title {
		display: flex;
		position: relative;
		padding: 1em 0em 1em 0em;
	}
</style>
