import CustomHeader from "@/components/common/CustmeHeader";
import { Image } from "expo-image";
import { Link, Stack, usePathname, useRouter } from "expo-router";
import React from "react";
import { Pressable, Text } from "react-native";

const Layout = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <Stack
      screenOptions={{
        header: (e) => (
          <CustomHeader
            title="up-to-code"
            leftIcon={
              <Pressable onPress={() => router.push("/user")}>
                <Image
                  source={{
                    uri:
                      "https://images.unsplash.com/photo-1499887142886-791eca5918cd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
                  }}
                  style={{ width: 24, height: 24, borderRadius: 12 }}
                />
              </Pressable>
            }
            {...(pathname.split("/chat/").length > 1 || pathname === "/user"
              ? { backButton: true, onPressLeft: () => router.back() }
              : {})}
          />
        ),
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Layout;
