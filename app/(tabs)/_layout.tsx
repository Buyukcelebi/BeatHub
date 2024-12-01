import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      initialRouteName="Discover"
      screenOptions={{
        tabBarActiveTintColor: "#2cbece",
        headerShown: true,
        tabBarStyle: {
          backgroundColor: "rgba(31, 40, 125, 0.8)",
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          position: "absolute",
          borderRadius: 10,
        },
        headerStyle: {
          backgroundColor: "#071e4a",
        },
        headerTitleStyle: {
          color: "white",
          fontSize: 30,
          fontWeight: "bold",
        },
        headerTitleAlign: "left",
        headerLeftContainerStyle: {
          paddingLeft: 10,
        },
      }}
    >
      <Tabs.Screen
        name="Discover"
        options={{
          title: "Discover",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "compass" : "compass-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Create"
        options={{
          title: "Create",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "musical-notes" : "musical-notes-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Library"
        options={{
          title: "Library",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "albums" : "albums-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
