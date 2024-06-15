import { View, Text, Image, StyleSheet } from "react-native";

interface PostProps {
  profileImage: string;
  username: string;
  postText: string;
  postImage?: string; // Optional post image
}

const Post: React.FC<PostProps> = ({
  profileImage,
  username,
  postText,
  postImage,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: profileImage }} style={styles.profileImage} />
        <Text style={styles.username}>{username}</Text>
      </View>
      <Text style={styles.postText}>{postText}</Text>
      {postImage && (
        <Image
          source={{ uri: postImage }}
          style={styles.postImage}
          resizeMode="cover"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  username: {
    fontSize: 16,
    fontWeight: "bold",
  },
  postText: {
    fontSize: 14,
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  postImage: {
    width: "100%",
    borderRadius: 10,
    aspectRatio: 1, // Maintain aspect ratio for consistent image display
  },
});

export default Post;
