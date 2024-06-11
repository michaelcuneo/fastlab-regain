<script>
  import Card, {
    Actions,
    Content,
    ActionIcons,
    PrimaryAction,
  } from "@smui/card";
  import DeleteModal from "../../components/DeleteModal.svelte";
  import IconButton, { Icon } from "@smui/icon-button";
  import { goto } from "@roxi/routify";
  import { currentGroup, currentMode, user } from "../../utils/store";
  import { isEmpty } from "../../utils/aws";

  $: open = false;

  export let group;
</script>

<Card class="card-display" style="min-width: auto;">
  <PrimaryAction
    on:click={() => {
      currentMode.set("display");
      currentGroup.set(group);
      $goto(`/groupadmin`);
    }}
  >
    <Content>
      <h2>
        {group.title}
      </h2>
    </Content>
  </PrimaryAction>
  {#if !isEmpty($user)}
    <Actions>
      <ActionIcons>
        <IconButton
          on:click={() => (open = !open)}
          aria-label="Delete Group"
          title="Delete Group"
        >
          <Icon class="material-icons" primary>delete</Icon>
        </IconButton>
      </ActionIcons>
    </Actions>
  {/if}
</Card>

<DeleteModal object={group} type="group" bind:open />
