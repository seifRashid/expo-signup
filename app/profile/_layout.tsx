import { Stack } from "expo-router";

export default function layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Profile Page",
          headerShown: true, // Show or hide header
          gestureEnabled: true, // Enable gestures for navigation
          animation: "slide_from_right", // Optional: Customize transition animation
          headerStyle: {
            backgroundColor: "#fff", // Customize header background color
          },
          headerTintColor: "#000", // Customize header text/icon color
          headerTitleStyle: {
            fontWeight: "bold", // Customize header title font
          },
        }}
      />
      <Stack.Screen
        name="bio"
        options={{
          title: "Bio Page",
          headerShown: true, // Show or hide header
          gestureEnabled: true, // Enable gestures for navigation
          animation: "slide_from_right", // Optional: Customize transition animation
          headerStyle: {
            backgroundColor: "#fff", // Customize header background color
          },
          headerTintColor: "#000", // Customize header text/icon color
          headerTitleStyle: {
            fontWeight: "bold", // Customize header title font
          },
        }}
      />
    </Stack>
  );
}
