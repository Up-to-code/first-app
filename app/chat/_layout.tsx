import CustomHeader from "@/components/common/CustmeHeader";
import { Stack } from "expo-router";

export default function _layout() {
  return (
    <Stack
      screenOptions={{
        header: (e) => <CustomHeader title={e.route.name} backButton={true} />,
        animation: "slide_from_right",
        animationDuration: 300,
      }}
    >
      <Stack.Screen name="[id]" options={{ title: "Chat" }} />
    </Stack>
  );
}
