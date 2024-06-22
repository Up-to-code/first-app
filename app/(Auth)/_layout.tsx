import { Stack } from "expo-router";

export default function _layout() {
  return (
    <Stack screenOptions={{ }}>
      <Stack.Screen name="Sign-in" options={{ headerShown: false ,  animation: "slide_from_left"}} />
      <Stack.Screen name="Sign-up" options={{ headerShown: false , animation: "slide_from_right" }} />
    </Stack>
  );
}
