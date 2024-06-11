<script>
  import { push } from 'svelte-spa-router'
  import { afterUpdate, onMount } from 'svelte';
  import { user, mfa, signupConfirm, transitionUser } from '../utils/store.js';
  import { isEmpty, signIn, signUp, confirmMFA, confirmSignUp } from '../utils/aws.js';

  import Dialog, { Title, Content, Actions } from '@smui/dialog';
  import HelperText from '@smui/textfield/helper-text/index';
  import Textfield from '@smui/textfield';
  import Button from '@smui/button';
  import Card from '@smui/card';
  import Tab, { Label } from '@smui/tab';
  import TabBar from '@smui/tab-bar';
  
  let username = "";
  let code = "";
  let password = "";
  let phonenumber = "";
  let email = "";
  let validation = "";

  $: open = false;
  $: confirmResult = null;

  let focused = false;
  let dirty = false;
  let invalid = false;
  
  let tab = 'Sign in';

  const handleSignin = () => {
    signIn(username, password)
      .then(() => push('/'));
  }

  const handleMFA = () => {
    confirmMFA($transitionUser, code);
  }

  const handleSignup = () => {
    signUp(username, password, phonenumber, email);
  }

  const handleConfirm = () => {
    open = true;
    confirmSignUp(username, validation)
      .then(result => {
        confirmResult = result;
        signupConfirm.set(false);
      })
      .catch(err => err);
  }

  afterUpdate(async () => {
    if (!isEmpty($user)) {
      push('/');
    }
  })

	onMount(async () => {
    if (params.tab) {
      tab = params.tab === 'in' ? 'Sign in' : 'Sign up';
    }

		if (!isEmpty($user)) {
      mfa.set(false);
      signupConfirm.set(false);
      push('/');
    }
	});

  export let params = {};
</script>

<div>
  <form-wrapper>
    <TabBar tabs={['Sign in', 'Sign up']} style="background: white;" bind:active={tab} let:tab>
      <Tab {tab}>
        <Label>{tab}</Label>
      </Tab>
    </TabBar>
    {#if tab == 'Sign in'}
      {#if $mfa === false}
        <form on:submit|preventDefault={handleSignin}>
          <Card>
            <p>
              <Textfield
                type="text"
                bind:dirty
                bind:invalid
                updateInvalid
                bind:value = {username}
                label="Username"
                style="min-width: 100%;"
                input$autocomplete="text"
                on:focus={() => (focused = true)}
                on:blur={() => (focused = false)}
              />
            </p>
            <p>
              <Textfield
                type="password"
                bind:dirty
                bind:invalid
                updateInvalid
                bind:value = {password}
                label="Password"
                style="min-width: 100%;"
                input$autocomplete="password"
                on:focus={() => (focused = true)}
                on:blur={() => (focused = false)}
              />
            </p>
            <button-wrap>
              <Button type="submit" variant="raised" class="button-shaped-round">Submit</Button>
            </button-wrap>
          </Card>
        </form>
      {:else}
        <form on:submit|preventDefault={handleMFA}>
          <Card>
            <p>Please enter the authentication code sent via SMS to your mobile device.</p>
            <p>
              <Textfield 
                type="text"
                bind:dirty
                bind:invalid
                updateInvalid
                bind:value = {code}
                label="Authentication Code"
                style="min-width: 100%;"
                on:focus={() => (focused = true)}
                on:blur={() => (focused = false)}
              />
            </p>
            <button-wrap>
              <Button type="submit" variant="raised" class="button-shaped-round">Submit</Button>
            </button-wrap>
          </Card>
        </form>
      {/if}
    {:else}
      {#if !$signupConfirm}
        <form on:submit|preventDefault={handleSignup}>
          <Card>
            <p>
              <Textfield
                required
                type="text"
                bind:dirty
                bind:invalid
                updateInvalid
                bind:value = {username}
                label="Username"
                style="min-width: 100%;"
                on:focus={() => (focused = true)}
                on:blur={() => (focused = false)}
              >
                <svelte:fragment slot="helper">
                  <HelperText>This will be used as your login!</HelperText>
                </svelte:fragment>
              </Textfield>
            </p>
            <p>
              <Textfield
                required
                type="password"
                bind:dirty
                bind:invalid
                updateInvalid
                bind:value = {password}
                label="Password"
                style="min-width: 100%;"
                on:focus={() => (focused = true)}
                on:blur={() => (focused = false)}
              >
                <svelte:fragment slot="helper">
                  <HelperText>Make it a good one!</HelperText>
                </svelte:fragment>
              </Textfield>
            </p>
            <p>
              <Textfield
                required
                type="tel"
                bind:dirty
                bind:invalid
                updateInvalid
                prefix="+61 (0)"
                bind:value = {phonenumber}
                label="Mobile Phone number"
                style="min-width: 100%;"
                input$maxLength={9}
                on:focus={() => (focused = true)}
                on:blur={() => (focused = false)}
              >
                <svelte:fragment slot="helper">
                  <HelperText>9 Digits only, drop the first 0</HelperText>
                </svelte:fragment>
              </Textfield>
            </p>
            <p>
              <Textfield
                required
                type="text"
                bind:dirty
                bind:invalid
                updateInvalid
                bind:value = {email}
                label="Email Address"
                style="min-width: 100%;"
                on:focus={() => (focused = true)}
                on:blur={() => (focused = false)}
              >
                <svelte:fragment slot="helper">
                  <HelperText>Full valid email address</HelperText>
                </svelte:fragment>
              </Textfield>
            </p>
            <button-wrap>
              <Button type="submit" variant="raised" class="button-shaped-round">Submit</Button>
            </button-wrap>
          </Card>
        </form>
      {:else}
        <form on:submit|preventDefault={handleConfirm}>
          <Card>
            <p>Please enter the confirmation code that we have sent to the email address you signed up with.</p>
            <p>
              <Textfield
                type="numbers"
                bind:dirty
                bind:invalid
                updateInvalid
                bind:value = {validation}
                label="Confirmation Code"
                style="min-width: 100%;"
                on:focus={() => (focused = true)}
                on:blur={() => (focused = false)}
              />
            </p>
            <button-wrap>
              <Button type="submit" variant="raised" class="button-shaped-round">Submit</Button>
            </button-wrap>
          </Card>
        </form>
      {/if}
    {/if}
  </form-wrapper>
</div>

<Dialog
  bind:open
  aria-labelledby="default-focus-title"
  aria-describedby="default-focus-content"
>
  <Title id="default-focus-title">WARNING </Title>
  <Content id="default-focus-content">
    {#if confirmResult === null}
      <p>Confirming Code</p>
    {:else}
      <p>Signed up successful, you may now Login.</p>
    {/if}
  </Content>
  <Actions>
    <Button disabled={confirmResult} on:click={() => tab = 'Sign in'}>
      <Label>OK</Label>
    </Button>
  </Actions>
</Dialog>

<style>
  div {
		display: flex;
    min-height: calc(100vh - 88px);
    width: 100%;
		position: relative;
		flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  form-wrapper {
    width: 300px;
  }
  p {
    padding: 0em 1em;
  }
  button-wrap {
    display: flex;
    padding: 1em 1em;
    justify-content: flex-end;
  }
  form {
    width: 300px;
  }
</style>
