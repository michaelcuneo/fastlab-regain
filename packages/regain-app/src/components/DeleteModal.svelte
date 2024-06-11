<script lang="ts">
  import { onMount } from "svelte";
  import Dialog, { Title, Content, Actions } from "@smui/dialog";
  import Button, { Label } from "@smui/button";
  import Textfield from "@smui/textfield";

  import { removeGroup, removeExercise } from "../utils/aws";
  import type { exerciseType, groupType } from "../utils/store";

  let dirty: boolean = false;
  let confirmation: string;
  $: confirmation = null;

  let invalid: boolean = false;
  let parseText: string;

  onMount(() => {
    parseText = object.title;
  });

  let disabled: Boolean;
  $: disabled = !confirmation || parseText !== confirmation;

  const handleDelete = () => {
    if (type === "group") {
      removeGroup(object);
    }
    if (type === "exercise") {
      removeExercise(object);
    }
  };

  export let object: exerciseType | groupType;
  export let type: string;
  export let open: boolean;
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
