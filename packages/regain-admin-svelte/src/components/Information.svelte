<script>
  import IconButton from '@smui/icon-button';
  
  const handleRemoveMessage = () => {
    message.visible = false;
  };

  export let message = '';
</script>

<information>
  <message>
    <IconButton style="padding: 0; margin: 0;" class="material-icons" on:click={handleRemoveMessage}>remove_circle</IconButton>
    {message.message}
  </message>
</information>

<style>
  information {
    display: flex;
    flex-direction: row;
    height: 90px;
    align-items: center;
    justify-content: space-between;
    background: #FFFFFF;
    border: 3px solid #DADADA;
    box-sizing: border-box;
    border-radius: 25px;
  }
  message {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    line-height: 26px;
    color: #132A13;
  }
</style>