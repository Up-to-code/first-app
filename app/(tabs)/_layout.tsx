import { Tabs } from "expo-router";
import { Colors } from "@/constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CustomHeader from "@/components/common/CustmeHeader";
import { Image } from "expo-image";

export default function TabLayout() {
  return (
    <Tabs
      initialRouteName="chat"
      screenOptions={{
        tabBarActiveTintColor: "light",
  headerShown : false
      }}
    >
      <Tabs.Screen
        name="news"
        options={{
          title: "News",

          tabBarIcon: (e) =>
            e.focused ? (
              <MaterialCommunityIcons
                name="home-variant"
                size={24}
                color={Colors.light.tabIconDefault}
              />
            ) : (
              <MaterialCommunityIcons
                name="home-variant-outline"
                size={24}
                color={Colors.light.tabIconSelected}
              />
            ),
        }}
      />

      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          tabBarIcon: (e) =>
            e.focused ? (
              <MaterialCommunityIcons
                name="chat"
                size={24}
                color={Colors.light.tabIconDefault}
              />
            ) : (
              <MaterialCommunityIcons
                name="chat-outline"
                size={24}
                color={Colors.light.tabIconSelected}
              />
            ),
        }}
      />
    </Tabs>
  );
}
{
  /* 
 
      <Tabs.Screen
        name="reales"
        options={{
          title: "Reales",
          headerShown : false,
          tabBarIcon: (e) =>
            e.focused ? (
              <MaterialCommunityIcons
                name="video"
                size={24}
                color={Colors.light.tabIconDefault}
              />
            ) : (
              <MaterialCommunityIcons
                name="video-outline"
                size={24}
                color={Colors.light.tabIconSelected}
              />
            ),
        }}
      />
 
 
  */
}
