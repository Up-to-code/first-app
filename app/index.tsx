import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { useEffect } from "react";
import { useRouter } from "expo-router";
import { useUserStore } from "@/lib/store/user_store";
import { auth } from "@/firebase/Firebase_Confing";
import { onAuthStateChanged } from "firebase/auth";

const Index = () => {
  const router = useRouter();

  const { user, setUser } = useUserStore();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setTimeout(() => {
          router.replace("/chat");
        }, 3000);
      } else {
        setTimeout(() => {
          router.replace("/Sign-in");
        }, 3000);
      }
    });
  }, [user]);
  return (
    <View style={styles.Liner}>
      <Image source={require("@/assets/logo_blank.png")} style={styles.image} />
      <Text style={styles.text}>App </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Liner: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 64,
    height: 64,
  },
  text: {
    marginTop: 20,
    fontWeight: "bold",
  },
});

export default Index;
