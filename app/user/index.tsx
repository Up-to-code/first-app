import React from 'react';
import { useUserStore } from "@/lib/store/user_store";
import { Image } from "expo-image";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { auth } from "@/firebase/Firebase_Confing";
import { User  ,updateProfile } from "firebase/auth";

const Profile: React.FC = () => {
  const { user, setUser } = useUserStore();

  const updateUser = async () => {
    if (!user) return;
    const updatedUser = {
      ...user,
      displayName: "John Doe",
      photoURL:
        "https://images.unsplash.com/photo-1499887142886-791eca5918cd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
      email: "fU5zH@example.com",
      emailVerified: true,
      phoneNumber: "01012345678",
    } as User;
    setUser(updatedUser);
  };

  const handleProfileUpdate = async () => {
    try {
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, {
          displayName: "John Doe",
          photoURL:
            "https://images.unsplash.com/photo-1499887142886-791eca5918cd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
        });
        await updateUser();
      } else {
        console.error("No authenticated user found.");
      }
    } catch (error) {
      console.error("Failed to update user:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: user?.photoURL || "" }} style={styles.image} />
      <Text style={styles.username}>{user?.displayName}</Text>
      <Text style={styles.email}>{user?.email}</Text>
      <Pressable onPress={handleProfileUpdate}>
        <Text style={{ color: "blue", fontWeight: "bold", fontSize: 20 }}>
          Set Profile
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  username: {
    fontSize: 20,
    fontWeight: "bold",
  },
  email: {
    fontSize: 16,
  },
});

export default Profile;
