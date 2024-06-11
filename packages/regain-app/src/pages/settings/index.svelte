<script lang="ts">
  import LayoutGrid, { Cell } from '@smui/layout-grid';
  import { user } from '../../utils/store';
  import HumanSelector from '../../components/HumanSelector.svelte';
</script>

<settings>
  <LayoutGrid>
    <Cell span={6}>
      <settingsarea>
        <HumanSelector />
      </settingsarea>
    </Cell>
    <Cell span={6}>
      <credits>
        <h3>Welcome, {$user.username}</h3>
        <p>Regain was designed and developed by FASTlab, at the University of Newcastle, for Medical Research.</p>
        <p>Stroke is the second highest cause of death and disability worldwide.</p>
        <p>While rehabilitation programs are intended to support stroke survivors, and promote recovery after they leave the hospital, current rehabilitation programs typically provide only static written instructions and lack the ability to keep them engaged with the program.</p>
        <p>We present an mHealth artifact that builds on behavior change theory to increase stroke survivors` engagement in rehabilitation programs.</p>
        <p>We employed a co-design methodology to identify design requirements for the stroke rehabilitation mHealth artifact, addressing stroke survivors` needs and incorporating expertise of healthcare providers.</p>
        <p>Guided by these requirements, we developed design principles for the artifact pertaining to visual assets that are essential in immersing users in the design. We carried out a two-stage development process by having workshops and interviews with experts.
        <p>Following this, a prototype was developed and evaluated in a series of workshops with multiple stakeholders</p>
        <p>This is the second iteration.</p>
        <wrap>
          <a href="https://www.newcastle.edu.au/"><img src="/UoN_Black.svg" alt="UoN_Logo" height="140px" /></a>
          <a href="https://fastlab.soci.org.au/"><img src="/Fastlab_LLR.svg" alt="Fastlab_Logo" height="140px" /></a>
          v1.0.0
        </wrap>
      </credits>
    </Cell>
  </LayoutGrid>
</settings>

<style>
  settings {
		display: flex;
		position: relative;
		height: calc(100vh - 88px);
    background: rgba(255, 255, 255, 0.1);
		width: 100vw;
		z-index: 0;
  }
  img {
    padding: 1em;
  }
  wrap {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 2em;
  }
  credits {
    display: flex;
    flex-direction: column;
    flex-grow: 2;
    width: 100%;
    background: white;
    box-shadow: inset 0px -4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
  }
  settingsarea {
    display: flex;
    flex-direction: column;
    flex-grow: 2;
    width: 100%;
    background: white;
    box-shadow: inset 0px -4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
  }
  p {
    margin: 1em;
    overflow-wrap: break-word !important;
    word-wrap: break-word !important;
  }
  h3 {
    margin-left: 1em;
  }
</style>