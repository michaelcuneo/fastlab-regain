<script lang="ts">
	import { onMount, tick } from "svelte";
	import { error } from "$lib/store";
	import { isEmpty } from "$lib/aws";

	let loaded: boolean;
	let videoLength: number | void;

	const handleAddFile = (thisFile: string) => {
		files = [
			{
				source: thisFile,
				options: {
					type: "local",
				},
			},
		];
	};

	const getVideoLength = async (thisFile: File) => {
		let vid = document.createElement("video");
		let fileURL = URL.createObjectURL(thisFile);
		vid.src = fileURL;
		vid.ondurationchange = (event: any) => {
			duration = event.path[0].duration;
		};
	};

	const handleUpdateFiles = async (thisFile: File) => {
		files = thisFile;
		if (type === "video" && !isEmpty(files))
			videoLength = await getVideoLength(files[0].file);
		if (isEmpty(files)) duration = 0;
	};

	const getFile = (file: string) => {
		Storage.get(file)
			.then((data: string) => handleAddFile(data))
			.catch((err) => {
				error.set({
					status: true,
					message: err,
				});
			});
	};

	const serverConfig = {
		load: (source: string, load: Function) => {
			const myRequest = new Request(source);

			fetch(myRequest).then((response) => {
				response.blob().then((myBlob) => load(myBlob));
			});
		},
	};

	onMount(async () => {
		await tick();

		if (filesToLoad) {
			getFile(filesToLoad);
		}
		loaded = true;
	});

	export let type: string;
	export let multiple: boolean;
	export let filesToLoad: string;
	export let files: any;
	export let duration: number;
</script>

{#if files && loaded}
	<FilePond
		name={`${type}_files`}
		id={`${type}_files`}
		key={`${type}_files`}
		server={serverConfig}
		instantUpload={false}
		upload="false"
		{files}
		allowMultiple={multiple}
		onupdatefiles={handleUpdateFiles}
	/>
{/if}
