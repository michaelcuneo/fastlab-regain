<script>
  import { onMount } from "svelte";
  import Card, {
    Actions,
    Content,
    ActionIcons,
    Media,
    PrimaryAction,
    MediaContent,
  } from "@smui/card";
  import DeleteModal from "../../components/DeleteModal.svelte";
  import IconButton, { Icon } from "@smui/icon-button";
  import { goto } from "@roxi/routify";
  import { currentExercise, currentMode, user } from "../../utils/store";
  import { isEmpty } from "../../utils/aws";
  import { getURL } from "../../components/getURL";

  $: open = false;

  let url;

  onMount(async () => {
    url = await getURL(exercise.thumbnail.key);
  });

  export let exercise;
</script>

<Card class="card-display" style="min-width: auto;">
  <PrimaryAction
    on:click={() => {
      currentMode.set("display");
      currentExercise.set(exercise);
      $goto(`/exerciseadmin`);
    }}
  >
    <Media class="card-media-square" aspectRatio="square">
      <MediaContent>
        <post-wrapper>
          <feature style="background-image: url({url});" />
        </post-wrapper>
      </MediaContent>
    </Media>
    <Content>
      <h2>
        {exercise.title}
      </h2>
    </Content>
  </PrimaryAction>
  {#if !isEmpty($user)}
    <Actions>
      <ActionIcons>
        <IconButton
          on:click={() => (open = !open)}
          aria-label="Delete Exercise"
          title="Delete Exercise"
        >
          <Icon class="material-icons" primary>delete</Icon>
        </IconButton>
      </ActionIcons>
    </Actions>
  {/if}
</Card>

<DeleteModal object={exercise} type="exercise" bind:open />
