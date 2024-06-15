import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

interface HeaderProps {
  title: string;
  leftIcon?: string; // Optional left icon source (URI)
  rightIcon?: string; // Optional right icon source (URI)
  onPressLeft?: () => void; // Optional callback for left icon press
  onPressRight?: () => void; // Optional callback for right icon press
  backButton?: boolean;
}

const CustomHeader: React.FC<HeaderProps> = ({
  title,
  leftIcon,
  rightIcon,
  onPressLeft,
  onPressRight,
  backButton,
}) => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      {leftIcon && (
        <TouchableOpacity style={styles.iconButton} onPress={onPressLeft}>
          <Image source={{ uri: leftIcon }} style={styles.icon} />
        </TouchableOpacity>
      )}
      {backButton && (
       <TouchableOpacity style={styles.iconButton} onPress={(e) => router.back()}>
        <Text style={styles.title} onPress={(e) => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </Text>
    </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
      {rightIcon && (
        <TouchableOpacity style={styles.iconButton} onPress={onPressRight}>
          <Image source={{ uri: rightIcon }} style={styles.icon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#FFF",
  },
  iconButton: {
    padding: 5,
  },
  icon: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CustomHeader;
