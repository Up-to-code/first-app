import { FC } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { PropsWithChat } from "./types";

export const ChatListItem: FC<PropsWithChat> = ({ item, onPress }) => (
  <TouchableOpacity style={styles.chatItem} onPressIn={(e) => onPress(item)}>
    <Image source={{ uri: item.profileImage }} style={styles.profileImage} />
    <View style={styles.chatInfo}>
      <Text style={styles.chatName}>{item.name}</Text>
      {item.unreadCount != undefined && item.unreadCount > 0 && (
        <Text style={styles.unreadCount}>({item.unreadCount})</Text>
      )}
      <Text style={styles.lastMessage}>{item.lastMessage}</Text>
    </View>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chatItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  chatInfo: {
    flex: 1,
  },
  chatName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  unreadCount: {
    fontSize: 12,
    color: "red",
    marginLeft: 5,
  },
  lastMessage: {
    fontSize: 14,
  },
});
