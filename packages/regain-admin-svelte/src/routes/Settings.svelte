<script>
  import { user } from '../utils/store.js';
  import HumanSelector from '../components/HumanSelector.svelte';
  import Footer from '../components/Footer.svelte';
</script>

<settings>
  <selector>
    <h4>Welcome, {$user.username}</h4>
    <h4>Refine your affected areas</h4>
    <p>The areas you pick here will define the types of exercises that we suggest you partake to regain your health.</p>
    <HumanSelector />
    <Footer />
  </selector>
</settings>

<style>
  settings {
		display: flex;
		position: relative;
		height: calc(100% - 88px);
		width: 100%;
		z-index: 0;
  }
  selector {
    width: 100%;
    background: white;
    max-width: 100%;
  }
  p {
    margin: 1em;
    overflow-wrap: break-word !important;
    word-wrap: break-word !important;
  }
  h4 {
    margin-left: 1em;
  }
</style>