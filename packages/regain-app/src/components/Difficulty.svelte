<script lang="ts">
  import Card, { Actions, Content } from "@smui/card";
  import Button from "@smui/button";
  import { difficult, type exerciseType } from "../utils/store";

  const handleDifficult = (difficulty) => {
    // console.log(difficulty, video);
    // Set the difficulty for this video for this timestamp for the client.
    difficult.set(false);
  };

  $: console.log(video);

  export let video: exerciseType; 
</script>

<Card style="border-radius: 16px;">
  <h2 class="mdc-typography--headline6" style="margin: 1em;">Complexity</h2>
  <Content>
    <p>How hard was it to perform this task today?</p>
  </Content>
  <Actions fullBleed>
    <Button style="background: #69B34C" on:click={() => handleDifficult(1)}
      >Easy</Button
    >
    <Button style="background: #ACB334" on:click={() => handleDifficult(2)}
      >2</Button
    >
    <Button style="background: #FAB733" on:click={() => handleDifficult(3)}
      >3</Button
    >
    <Button style="background: #FF8E15" on:click={() => handleDifficult(4)}
      >4</Button
    >
    <Button style="background: #FF4E11" on:click={() => handleDifficult(5)}
      >5</Button
    >
    <Button style="background: #FF0D0D" on:click={() => handleDifficult(6)}
      >Hard</Button
    >
  </Actions>
</Card>
<spacer />

<style>
  spacer {
    display: flex;
    padding: 1em;
  }
</style>
