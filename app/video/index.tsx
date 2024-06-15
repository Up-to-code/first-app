import { ResizeMode, Video } from "expo-av";
import { useRef } from "react";
import { Dimensions, StyleSheet, View } from "react-native";


const Index = () => {
  const video = useRef<Video>(null);

  return (
    <View>
      <Video
        source={{
          uri:
            "https://videos.pexels.com/video-files/18724815/18724815-hd_1080_1920_40fps.mp4",
        }}
        resizeMode={ResizeMode.COVER}
        useNativeControls
        style={{
          height: Dimensions.get("screen").height,
          width: Dimensions.get("screen").width,
        }}
        isLooping
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Index;
