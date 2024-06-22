import { FlashList } from "@shopify/flash-list";
import { useLocalSearchParams } from "expo-router";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

const ChatScreen = () => {
  const { id } = useLocalSearchParams();
  const massages = [
    { id: "1", text: "Hello" },
    { id: "2", text: "How are you?" },
    { id: "3", text: "I'm doing well, thank you!" },
    { id: "4", text: "What about you?" },
    { id: "5", text: "I'm good too" },
  ];

  return (
    <View style={styles.container}>
      <FlashList
        data={massages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.message}>
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  message: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#278c42",
    maxWidth: "80%",
    borderRadius: 10,
    alignSelf: "flex-start",
    alignItems: "flex-start",

    shadowColor: "#000",
  },
  messageText: {
    fontSize: 16,
  },
});

export default ChatScreen;
