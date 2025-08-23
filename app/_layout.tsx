import { Stack } from "expo-router";
import { StyleSheet } from "react-native";
import "./global.css";

export default function RootLayout() {
  return (
    <Stack >
      {/* <StatusBar backgroundColor="black" /> */}
      <Stack.Screen  name="login/login" options={{title : "Login"}} />
      <Stack.Screen name="signup/signup" options={{title: "Signup"}} />
    </Stack>
  );
}

const styles =StyleSheet.create({
statusBar: {
  color: "White",
  backgroundColor: "black"
}
})