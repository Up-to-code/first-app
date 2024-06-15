import Post from "@/components/Home/Post";
import Story from "@/components/Home/Story";
import { FlashList } from "@shopify/flash-list";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const a = [
  {
    name: "Ahmed one",
  },

  {
    name: "Ahmed",
  },

  {
    name: "Ahmed",
  },

  {
    name: "Ahmed",
  },

  {
    name: "Ahmed",
  },

  {
    name: "Ahmed",
  },
];

const posts = [
  {
    profileImage:
      "https://ahmedmansour.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FmeA.dd711c74.png&w=256&q=75",
    username: "John Doe",
    postText: "This is my first post!",
    postImage:
      "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    profileImage:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "Jane Smith",
    postText: "Here's a post without an image.",
  },
  {
    profileImage:
      "https://ahmedmansour.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FmeA.dd711c74.png&w=256&q=75",
    username: "John Doe",
    postText: "This is my first post!",
    postImage:
      "https://images.unsplash.com/photo-1576836165612-8bc9b07e7778?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    profileImage:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "Jane Smith",
    postText: "Here's a post without an image.",
  },
];

const Home = () => {
  return (
    <View style={styles.Continer}>
      <FlashList
        estimatedItemSize={400}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={[1, 2]}
        renderItem={({ index, item }) => (
          <View key={item}>
            {index == 0 && (
              <View
                style={{
                  paddingTop: 20,
                }}
              >
                <FlashList
                  estimatedItemSize={100}
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  data={a}
                  renderItem={({ item, index }) => (
                    <View
                      key={index}
                      style={{
                        paddingHorizontal: 15,
                        paddingVertical: 5,
                      }}
                    >
                      <Story />
                    </View>
                  )}
                />
              </View>
            )}
            {index == 1 && (
              <View style={{ paddingTop: 25 }}>
                <FlashList
                  estimatedItemSize={400}
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                  data={posts}
                  renderItem={({ item, index }) => (
                    <View key={index}>
                      <Post
                        postText={item.postText}
                        profileImage={item.profileImage}
                        username={item.username}
                        postImage={item.postImage}
                      />
                    </View>
                  )}
                />
              </View>
            )}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Continer: {
    flex: 1,
    paddingHorizontal: 8,
 backgroundColor :"#FFF"
  },
});

export default Home;
