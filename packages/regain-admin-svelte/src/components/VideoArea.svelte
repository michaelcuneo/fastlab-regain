<script>
  import LayoutGrid, { Cell } from '@smui/layout-grid';
  import Card, { Media, MediaContent, PrimaryAction } from '@smui/card';
	import IconButton, { Icon } from '@smui/icon-button';
	import { testData } from './testData.js';

  let fullSize = false;
  let currentVideo = [];
  $:display = 'none';

  const openFullScreen = elem => {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
      elem.msRequestFullscreen();
    }
    display = 'flex';
  }

  const closeFullScreen = () => {
    document.exitFullscreen().then(() => {
      display = 'none';
    });
  }
</script>

<videoarea>
  <LayoutGrid style="padding: 1em; overflow: scroll;">
    {#if fullSize}
      {currentVideo}
    {/if}
    {#each testData as video, index (video.id)}
      <Cell span={4} style="padding: 0.5em;">
        <Card style="background: #d7dedf; border-radius: 16px;">
          <PrimaryAction on:click={() => openFullScreen(currentVideo[index])}>
            <Media class="card-media-16x9" aspectRatio="16x9">
              <MediaContent>
                <div id="video_box" bind:this={currentVideo[index]}>
                  <overlay style="--display-overlay: {display}" id="video_overlays">
                    <IconButton class="material-icons" on:click={() => closeFullScreen()}>
                      close
                    </IconButton>
                  </overlay>
                  <video width="100%" src={video.videoUrl} autoPlay loop>
                    <track kind="captions">
                  </video>
                </div>
              </MediaContent>
            </Media>
            <subtitle style="padding: 1rem;">
              <h2 class="mdc-typography--headline6">
                {video.title}
              </h2>
              <time>
                {video.time}<Icon class="material-icons">timer</Icon>
              </time>
            </subtitle>
          </PrimaryAction>
        </Card>
      </Cell>
    {/each}
  </LayoutGrid>
</videoarea>

<style>
  videoarea {
    display: inline-flex;
    position: relative;
    max-width: 50vw;
    background: #FFFEF2;
    box-shadow: inset 0px -4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
  }
  time {
		display: flex;
		width: 80px;
		justify-content: space-between;
		align-items: center;
	}
	overlay {
		display: var(--display-overlay);
	}
	#video_box{
    float:left;
    background: #d7dedf;
    border-radius: 16px;
	}
	subtitle {
		display: flex;
		width: 100%;
		flex-direction: column;
		align-items: center;
	}
	#video_overlays {
		position: absolute;
		float: left;
		width: 640px;
		min-height: 370px;
		background-color: rgba(0, 0, 0, 0);
		z-index: 300000;
	}
</style>