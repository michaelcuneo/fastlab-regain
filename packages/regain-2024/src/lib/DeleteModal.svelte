<script lang="ts">
  import { onMount } from "svelte";

  import { removeGroup, removeExercise } from "$lib/aws";

  let dirty: boolean = $state(false);
  let confirmation: string | undefined = $state();
  let disabled: boolean | undefined = $state();
  let invalid: boolean = $state(false);
  let parseText: string;

  onMount(() => {
    parseText = object.title;
    disabled = !confirmation || parseText !== confirmation;
  });

  const handleDelete = () => {
    if (type === "group") {
      removeGroup(object);
    }
    if (type === "exercise") {
      removeExercise(object);
    }
  };

  let { object, type, open }: { object: exerciseType | groupType; type: string; open: boolean} = $props();
</script>

<Dialog
  bind:open
  aria-labelledby="default-focus-title"
  aria-describedby="default-focus-content"
>
  <Title id="default-focus-title">WARNING</Title>
  <Content id="default-focus-content">
    <p>Are you sure you want to delete <warning>{object.title}</warning>?</p>
    <p>
      To confirm that you understand what you are doing, type the entire title
      as you see it into the input box.
    </p>
    <Textfield
      variant="filled"
      type="text"
      bind:dirty
      bind:invalid
      updateInvalid
      bind:value={confirmation}
      label="Title"
      style="width: 100%;"
    />
  </Content>
  <Actions>
    <Button {disabled} on:click={handleDelete}>
      <Label>DELETE</Label>
    </Button>
  </Actions>
</Dialog>

<style>
  warning {
    color: red;
  }
</style>
