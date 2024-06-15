import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";

const Story = () => {
  return <>
  <Link href="/video">
  <View style={styles.storyContainer}>

    
  </View>
  </Link>
  
  </>;
};

const styles = StyleSheet.create({
  storyContainer: {
    width: 50,
    height: 50,
    overflow: "hidden",
    borderRadius: 30,
    borderColor: "green",
    borderWidth: 2,
    backgroundColor: "#000",
  },
});

export default Story;
