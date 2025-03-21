import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function _layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#ffd33d",
        headerStyle: {
          backgroundColor: "#25292e",
          
        },
        headerShadowVisible: false,
        headerTintColor: "#fff",
        tabBarStyle: {
            backgroundColor: "#25292e",
            borderRadius: 20, // Rounded corners
            margin: 10, // Add margin to separate the tab bar from the screen edges
            position: "absolute", // Ensures floating effect
            left: 10, // Adjust left and right to match margin
            right: 10,
            bottom: 10, // Adjust bottom spacing
            height:64,
            alignItems: 'center',
            paddingTop:8,
          
            // Shadow for iOS
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.3,
            shadowRadius: 4,
          
            // Shadow for Android
            elevation: 5,
          },
          
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
        //   tabBarShowLabel: false,
        tabBarLabelStyle: {
            fontSize: 12,
            // fontFamily: 'Georgia',
            fontWeight: 300,
          },
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "add-circle" : "add-circle-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "compass" : "compass-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}
