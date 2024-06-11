import React from "react";
import {
  Button,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text, 
  View
} from "react-native";

import Util from 'App/Utils/Util';

import Video from 'react-native-video';

import Video1 from "App/Assets/Video/01-Neck-Stretch-1080p.mp4";
import Video2 from "App/Assets/Video/02-Shoulder-Circles-1080p.mp4";
import Video3 from "App/Assets/Video/03-Seated-Row-1080p.mp4";

// Hard code videos into sample to test video playback and alignment.
const videos = [
  {
    key: 1,
    name: "Neck Stretch",
    video: Video1,
  },
  {
    key: 2,
    name: "Shoulder Circles",
    video: Video2,
  },
  {
    key: 3,
    name: "Seated Row",
    video: Video3,
  },
];

export default class TaskScrollView extends React.Component {
  constructor(props) {
    super(props)

    this.onLayout = this.onLayout.bind(this);
  }

  componentWillMount() {
    this.resizeVideoPlayer();
  }

  resizeVideoPlayer() {
    // Always in 16 /9 aspect ratio
    let {width, height} = Dimensions.get('window');
    if (Util.isPortrait()) {
      this.setState({
        orientationWidth: width * 1,
        orientationHeight: width * 1 * 0.56,
      });
    } else {
      this.setState({
        orientationHeight: height * 1,
        orientationWidth: height * 1 * 1.77
      });
    }
  }

  onLayout(e) {
    this.resizeVideoPlayer();
  }

  onEnd() {
    // Place the finished a video areas here... so we can add to the count of how many times it was played, how long for, etc... 
    console.log(`We're done`);
  }

  render() {
    return <View styles={styles.container}>
      <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
        {videos.map(({ key, name, video }) => (
          <View key={key}>
            <Text style={{ textAlign: 'center', fontSize: 22, marginTop: 22 }}>{name}</Text>
            <Video
              source={video}
              style={{width: this.state.orientationWidth, height: this.state.orientationHeight }}
              ref={p => { this.videoPlayer = p; }}
              controls={true}
              paused={true}
              onEnd={this.onEnd}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
});


