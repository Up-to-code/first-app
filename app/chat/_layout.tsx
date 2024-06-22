import CustomHeader from "@/components/common/CustmeHeader";
import { Image } from "expo-image";
import { Stack } from "expo-router";

export default function _layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
        animationDuration: 300,
      }}
    >
      <Stack.Screen name="[id]" options={{ title: "Chat" }} />
    </Stack>
  );
}
