<script lang="ts">
	import { goto } from "@roxi/routify";
	import { v4 as uuidv4 } from "uuid";
	import CircularProgress from "@smui/circular-progress";
	import SegmentedButton, { Segment, Label } from "@smui/segmented-button";
	import Button from "@smui/button";
	import { Icon } from "@smui/icon-button";
	import Textfield from "@smui/textfield";
	import Dialog, { Title, Content } from "@smui/dialog";
	import {
		currentExercise,
		currentMode,
		user,
		groups,
		type videoType,
		type imageType,
	} from "../../utils/store";
	import {
		isEmpty,
		editExercise,
		addExercise,
		addExerciseGroup,
		addVideo,
		addImage,
		uploadFile,
	} from "../../utils/aws";
	import LayoutGrid, { Cell } from "@smui/layout-grid";
	import { afterUpdate } from "svelte";
	import FilePond from "../../components/FilePond.svelte";
	import S3Image from "../../components/S3Image.svelte";
	import S3Video from "../../components/S3Video.svelte";

	let title: string = $currentExercise.title || "";
	let description: string = $currentExercise.description || "";

	let video: object = [];
	let thumbnail: object = [];
	let exerciseVideo: videoType = $currentExercise.video;
	let exerciseThumb: imageType = $currentExercise.video;

	let duration: number;
	$: duration = 0;

	let checkValid: boolean = false;
	let open: boolean = false;

	let groupChoices = $groups;
	let groupsSelected = $currentExercise.groups || [];

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
			editExercise({
				id: $currentExercise.id,
				title,
				time: duration,
			});

			open = false;
			$goto("/exercises");
		} else if ($currentMode === "add") {
			let exerciseID: string = uuidv4();
			let videoID: string = uuidv4();
			let imageID: string = uuidv4();

			// Upload the files.
			await uploadFile(video[0].file);
			await uploadFile(thumbnail[0].file);

			// Add everything to the database.
			await addVideo({
				id: videoID,
				key: video[0].file.name,
				mime: video[0].file.type,
			});

			await addImage({
				id: imageID,
				key: thumbnail[0].file.name,
				mime: thumbnail[0].file.type,
			});

			await addExercise({
				id: exerciseID,
				title,
				time: duration,
				exerciseVideoId: videoID,
				exerciseThumbnailId: imageID,
				description,
			});

			for (const [key] of Object.entries(groupsSelected)) {
				await addExerciseGroup({
					id: uuidv4(),
					exerciseID: exerciseID,
					groupID: groupsSelected[key].id,
				});
			}

			open = false;
			$goto("/exercises");
		}
	};

	afterUpdate(() => {
		checkValid = title !== "";
	});
</script>

<svelte:head>
	{#if $currentMode === "display" || "edit"}
		<title>{$currentExercise.title}</title>
	{/if}
	{#if $currentMode === "add"}
		<title>New Group</title>
	{/if}
</svelte:head>

<header-panel>
	<div />
	<div>
		{#if (!isEmpty($user) && $currentMode === "edit") || $currentMode === "add"}
			<Button on:click={handleSave} variant="raised" disabled={!checkValid}>
				SAVE CHANGES
			</Button>
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
			<Button on:click={() => $goto("/exercises")} variant="raised">
				CANCEL
			</Button>
		{/if}
	</div>
</header-panel>

<section>
	<LayoutGrid style="width: 100%;">
		<Cell span={4}>
			<column>
				<span>
					<heading>Exercise Title</heading>
					{#if $currentMode === "add" || $currentMode === "edit"}
						<required>
							<Icon class="material-icons required" on>star</Icon>
						</required>
					{/if}
				</span>
				<editor-wrap>
					{#if $currentMode === "display"}
						<group-title>{$currentExercise.title}</group-title>
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
							initialValue={$currentExercise.title}
							bind:value={title}
							label="Title"
							required
						/>
					{/if}
				</editor-wrap>
			</column>
		</Cell>
		<Cell span={5}>
			<column>
				<span>
					<heading>Exercise Groups</heading>
					{#if $currentMode === "add" || $currentMode === "edit"}
						<required>
							<Icon class="material-icons required" on>star</Icon>
						</required>
					{/if}
				</span>
				<editor-wrap>
					{#if $currentMode === "display"}
						<SegmentedButton
							segments={groupChoices}
							let:segment
							key={(segment) => segment.id}
							bind:selected={groupsSelected}
						>
							<Segment {segment}>
								<Label>{segment.title}</Label>
							</Segment>
						</SegmentedButton>
					{:else if $currentMode === "add"}
						<SegmentedButton
							segments={groupChoices}
							let:segment
							key={(segment) => segment.id}
							bind:selected={groupsSelected}
						>
							<Segment {segment}>
								<Label>{segment.title}</Label>
							</Segment>
						</SegmentedButton>
					{:else if $currentMode === "edit"}
						<SegmentedButton
							segments={groupChoices}
							let:segment
							key={(segment) => segment.id}
							bind:selected={groupsSelected}
						>
							<Segment {segment}>
								<Label>{segment.title}</Label>
							</Segment>
						</SegmentedButton>
					{/if}
				</editor-wrap>
			</column>
		</Cell>
		<Cell span={2}>
			<column>
				<span>
					<heading>Exercise Time</heading>
					{#if $currentMode === "add" || $currentMode === "edit"}
						<required>
							<Icon class="material-icons required" on>star</Icon>
						</required>
					{/if}
				</span>
				<editor-wrap>
					{#if $currentMode === "display"}
						<post-title>
							{$currentExercise.time}
						</post-title>
					{:else if $currentMode === "add"}
						<Textfield
							style="width: 100%;"
							variant="filled"
							initialValue={null}
							bind:value={duration}
							label="Time"
							required
							disabled
						/>
					{:else if $currentMode === "edit"}
						<Textfield
							style="width: 100%;"
							variant="filled"
							initialValue={$currentExercise.time}
							bind:value={duration}
							label="Title"
							required
							disabled
						/>
					{/if}
				</editor-wrap>
			</column>
		</Cell>
		<Cell span={12}>
			<span>
				<heading>Description</heading>
				{#if $currentMode === "add" || $currentMode === "edit"}
					<required>
						<Icon class="material-icons required" on>star</Icon>
					</required>
				{/if}
			</span>
			<editor-wrap>
				{#if $currentMode === "display"}
					<post-details>{@html $currentExercise.description}</post-details>
				{:else if $currentMode === "add"}
					<Textfield
						style="width: 100%;"
						variant="filled"
						initialValue={$currentExercise.description}
						bind:value={description}
						label="Description"
						required
					/>
				{:else if $currentMode === "edit"}
					<Textfield
						style="width: 100%;"
						variant="filled"
						initialValue={$currentExercise.description}
						bind:value={description}
						label="Description"
						required
					/>
				{/if}
			</editor-wrap>
		</Cell>
		<Cell span={6}>
			<column>
				<span>
					<heading>Video File</heading>
					{#if $currentMode === "add" || $currentMode === "edit"}
						<required>
							<Icon class="material-icons required" on>star</Icon>
						</required>
					{/if}
				</span>
				<editor-wrap>
					{#if $currentMode === "display"}
						<post-title>
							<S3Video
								width="525px"
								height="auto"
								key={$currentExercise.video.key}
								autoplay
							/>
						</post-title>
					{:else if $currentMode === "add"}
						<FilePond
							type="video"
							bind:duration
							multiple={false}
							bind:files={video}
							filesToLoad={null}
						/>
					{:else if $currentMode === "edit"}
						<FilePond
							type="video"
							bind:duration
							multiple={false}
							bind:files={video}
							filesToLoad={exerciseVideo.key}
						/>
					{/if}
				</editor-wrap>
			</column>
		</Cell>
		<Cell span={6}>
			<column>
				<span>
					<heading>Thumbnail</heading>
					{#if $currentMode === "add" || $currentMode === "edit"}
						<required>
							<Icon class="material-icons required" on>star</Icon>
						</required>
					{/if}
				</span>
				<editor-wrap>
					{#if $currentMode === "display"}
						<post-title>
							<S3Image image={$currentExercise.thumbnail.key} />
						</post-title>
					{:else if $currentMode === "add"}
						<FilePond
							type="thumb"
							multiple={false}
							bind:duration
							bind:files={thumbnail}
							filesToLoad={null}
						/>
					{:else if $currentMode === "edit"}
						<FilePond
							type="thumb"
							multiple={false}
							bind:duration
							bind:files={thumbnail}
							filesToLoad={exerciseThumb.key}
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
