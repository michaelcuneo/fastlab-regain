<script lang="ts">
  import { onMount } from 'svelte';
  import LayoutGrid, { Cell } from '@smui/layout-grid';
  import Charts from '../../components/Charts.svelte';

  let video: HTMLVideoElement;

  // Make endTime a function of progress into 3.0 seconds.
  let progress = 97;
  let endTime = 0.60000;
  let currentTime: number;
  let slider = 100 - progress + "%";

  const checkTime = () => {
    if (currentTime >= endTime) {
      video.pause();
    } else {
      setTimeout(checkTime, 100);
    }
  };

  onMount(() => {
    checkTime();
  })
</script>

<layout>
  <LayoutGrid>
    <Cell span={6}>
      <container>
        <inside>
          <overlay style="--progress: {slider}">
            <progressor>
              <h6>Overall Progress</h6>
              {progress}%
            </progressor>
          </overlay>
          <video bind:this={video} bind:currentTime={currentTime} width="100%" height="100%" autoplay loop>
            <source src="/video/TREE.mp4" type="video/mp4">
              <track kind="captions">
            Your browser does not support the video tag.
          </video>
        </inside>
      </container>
    </Cell>
    <Cell span={6}>
      <chart-container>
        <h1>Individual Progress</h1>
        <Charts />
      </chart-container>
    </Cell>
  </LayoutGrid>
</layout>

<style>
  layout {
		display: flex;
		position: relative;
    background: rgba(255, 255, 255, 0.1);
		width: 100vw;
		height: calc(100vh - 88px);
		z-index: 0;
  }
  inside {
    margin: 10px;
    display: inline-block;
    position: relative;
  }
  progressor {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
    font-family: 'Nunito';
    font-weight: 700;
    font-size: 2em;
    color: white;
  }
  container {
    display: flex;
    flex-direction: column;
    flex-grow: 2;
    width: 100%;
    background: white;
    box-shadow: inset 0px -4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
  }
  chart-container {
    display: flex;
    flex-direction: column;
    flex-grow: 2;
    height: 100%;
    width: 100%;
    background: white;
    box-shadow: inset 0px -4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
  }
  overlay {
    position: absolute;
    left: 0px;
    top: var(--progress);
    bottom: 0px;
    right: 0px;
    font-size: 20px;
    overflow: hidden;
    background-color: rgba(50, 50, 50, 0.4);
  }
  video {
    width: 100%;
    height: 100%;
  }
  h1 {
    margin: 20px;
  }
  h6 {
    color: white;
    padding: 0;
    margin: 0
  }
</style>