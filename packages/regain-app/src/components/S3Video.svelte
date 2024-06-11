<script lang="ts">
  import { onMount } from "svelte";
  import { isPaused, isHalfway, isCompleted } from "../utils/store";
  import { downloadFile } from "../utils/aws";

  let videoComponent: HTMLVideoElement;
  let time: number = 0;
  let duration: number;
  let paused: boolean = false;
  let videoSrc: string = "";
  let showControls: boolean = true;
  let showControlsTimeout: any;
  let lastMouseDown: any;

  const handleMove = (e: any) => {
    clearTimeout(showControlsTimeout);
    showControlsTimeout = setTimeout(() => (showControls = false), 2500);
    showControls;

    if (!duration) return;
    if (e.type !== "touchmove" && !(e.buttons & 1)) return;

    const clientX = e.type === "touchmove" ? e.touches[0].clientX : e.clientX;
    const { left, right } = videoComponent.getBoundingClientRect();
    time = (duration * (clientX - left)) / (right - left);
  };

  // we can't rely on the built-in click event, because it fires
  // after a drag — we have to listen for clicks ourselves
  const handleMousedown = () => {
    lastMouseDown = new Date();
  };

  const handleMouseup = (e: any) => {
    isPaused.set(false);
    let date = new Date();
    if ((date as any) - lastMouseDown < 300) {
      if (paused) e.target.play();
      else e.target.pause();
    }
  };

  onMount(async () => {
    const src: string = (await downloadFile(key)) || "";
    videoSrc = src;
  });

  $: time > duration / 2 && isHalfway.set(true);
  $: Math.round(time) == Math.round(duration) && isCompleted.set(true);
  $: paused && isPaused.set(true);
  $: !paused && isPaused.set(false);

  export let key: string;
  export let width: string;
  export let height: string;
  export let autoplay: boolean;
</script>

<container>
  <playback-animation>
    <svg class="playback-icons">
      <use class="hidden" href="#play-icon" />
      <use href="#pause" />
    </svg>
  </playback-animation>

  <video
    bind:this={videoComponent}
    on:mousemove={handleMove}
    on:touchmove|preventDefault={handleMove}
    on:mousedown={handleMousedown}
    on:mouseup={handleMouseup}
    bind:currentTime={time}
    bind:duration
    bind:paused
    src={videoSrc}
    {autoplay}
    {width}
    {height}
    controls
    loop
  >
    <track kind="captions" />
  </video>
</container>

<style>
  container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  playback-animation {
    pointer-events: none;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -40px;
    margin-top: -40px;
    width: 80px;
    height: 80px;
    border-radius: 80px;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
  }
</style>
