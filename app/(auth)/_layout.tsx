import { Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function AuthLayout() {
  return (
    <View style={styles.container}>
    <Stack>
      {/* <StatusBar backgroundColor="black" /> */}
      <Stack.Screen
        name="login/login"
        options={{
          title: "Login",
          animation : "slide_from_left",
        }}
      />
      <Stack.Screen
        name="signup/signup"
        options={{
          title: "Signup",
          animation: "slide_from_right",
        }}
        />
    </Stack>
        </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black", // 👈 fallback background for the navigator
  },
});
