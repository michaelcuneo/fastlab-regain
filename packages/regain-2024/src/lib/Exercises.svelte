<script lang="ts">
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";
  import Information from "./Information.svelte";
  import VideoSelector from "./VideoSelector.svelte";
  import {
    error,
    user,
    userExercises,
    exercises,
    usersettings,
    messages,
    pain,
    difficult,
    isHalfway,
    isCompleted,
  } from "$lib/store";
	import { goto } from "$app/navigation";

  const downloadUser = () =>
    (
      API.graphql(
        graphqlOperation(getUser, {
          id: $user.attributes.sub,
        })
      ) as any
    )
      .then((res: any) => {
        usersettings.set(res.data.getUser);
      })
      .catch((err: any) => {
        error.set({
          status: true,
          message: "Error retrieving UserSettings.",
        });
      });

  const createUserExercises = () => {
    let groupExercises = [];
    console.log(exercises.value[0].exerciseGroups?.items);
    for (let i = 0; i < exercises.value.length; i++) {
      for (let j = 0; j < exercises.value[i].exerciseGroups?.items.length; j++) {
        for (let k = 0; k < usersettings.value.groups.items.length; k++) {
          if (
            usersettings.value.groups.items[k].groupID ===
            exercises.value[i].exerciseGroups?.items[j].groupID
          ) {
            groupExercises.push(exercises.value[i]);
          }
        }
      }
    }
    let uniqueExercises = [...new Set(groupExercises)];
    userExercises.value = uniqueExercises;
  };

  const addPauseMessage = () => {
    messages.value = ([
      {
        closeIcon: false,
        message:
          "Did you pause this video to catch up, or is Regain causing you discomfort or pain?",
        stayOn: true,
        buttons: [
          {
            title: "Just Catching Up",
            result: "catchup",
          },
          {
            title: "Difficulty",
            result: "difficult",
          },
          {
            title: "Pain",
            result: "pain",
          },
        ],
      },
    ]);
  };

  const addContinueMessage = () => {
    messages.value = ([
      {
        closeIcon: false,
        message: "You're doing well... carry on",
        stayOn: false,
        buttons: [],
      },
    ]);
  };

  const addComplimentMessage = (type) => {
    messages.value = ([
      {
        closeIcon: false,
        message:
          "Tell us how much " +
          type +
          " on the meter above, you'll be yourself in no time.",
        stayOn: false,
        buttons: [],
      },
    ]);
  };

  const addHalfwayMessage = () => {
    messages.value = ([
      {
        closeIcon: false,
        message:
          "You're half way there, continue doing this exercise for as long as you like!",
        stayOn: false,
        buttons: [],
      },
    ]);
    isHalfway.set(false);
  };

  let handleResult = (e) => {
    if (e.detail.button === "catchup") {
      messages.value = [];
      addContinueMessage();
    } else if (e.detail.button === "pain") {
      messages.value = [];
      pain.value = 0;
      addComplimentMessage("pain");
    } else if (e.detail.button === "difficult") {
      messages.value = [];
      difficult.value = 0;
      addComplimentMessage("difficulty");
    }
  };

  const addCompletedMessage = () => {
    messages.value = ([
      {
        closeIcon: false,
        message:
          "You did it... You completed an exercise, check out how far you've come!",
        stayOn: false,
        buttons: [],
      },
    ]);
    isCompleted.value = false;
    setTimeout(() => {
      goto("/progress");
    }, 4000);
  };

  $: halfway && addHalfwayMessage();
  $: paused && addPauseMessage();
  $: completed && addCompletedMessage();

  onMount(() => {
    downloadUser();
    createUserExercises();
  });

  export let halfway: boolean;
  export let paused: boolean;
  export let completed: boolean;
</script>

<VideoSelector />
<information-area in:fly={{ y: 200, duration: 2000 }} out:fade>
  {#each messages.value as message}
    {#if message}
      <Information bind:message on:buttonClicked={(e) => handleResult(e)} />
    {/if}
  {/each}
</information-area>

<style>
  information-area {
    position: absolute;
    background: rgba(255, 255, 255, 0.1);
    margin-top: 90px;
    bottom: 13px;
    left: 13px;
    right: 23px;
    flex-direction: column;
  }
  information-area:nth-child(1) {
    margin: 90px;
  }
</style>
