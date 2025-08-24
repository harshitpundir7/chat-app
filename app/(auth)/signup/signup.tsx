import { authApi } from "@/utils/constants";
import { signupValidation } from "@/utils/zod";
import { useRouter } from "expo-router";
import * as secureStorage from 'expo-secure-store';
import { AtSign, Lock, MoveRight, User } from "lucide-react-native";
import React, { useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Toast from "react-native-toast-message";

export default function SignupScreen() {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const passwordInputField = useRef<TextInput>(null);
  const emailInputField = useRef<TextInput>(null);
  const router = useRouter();

  function navigateBack() {
    router.dismissAll();
  }

  async function Signup() {
    const { data, error } = signupValidation.safeParse({
      name,
      email,
      password,
    });
    if (error || !data) {
      console.error(error);
      // ToastAndroid.showWithGravity("invalid credentials",5000,ToastAndroid.TOP)
      Toast.show({
        type: "error",
        text1: "invalid credetials",
        text2: "An error occurred while saving your item.",
      });
    }
    try {
      
      const res = await fetch(`${authApi}/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify(data),
      });
      const resData = await res.json();
      const token = resData.cookie;
      console.log(resData)
     await secureStorage.setItemAsync("authToken", token)
     router.push("/(home)")
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "android" ? "padding" : "height"}
      style={styles.loginPage}
    >
      <View style={styles.container}>
        <Text style={styles.textHeading}>Welcome User!</Text>
        <Text style={styles.text}>Get started with the Chat app</Text>
        <Text style={styles.label}>Name</Text>
        <View>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your name"
            autoCapitalize="none"
            keyboardType="default"
            placeholderTextColor="#7e8295"
            value={name}
            onSubmitEditing={() => {
              emailInputField.current?.focus();
            }}
            returnKeyType="next"
            submitBehavior="submit"
            onChangeText={setName}
          />
          <View style={styles.iconContainer}>
            <User size="18" color="#7e8295" />
          </View>
        </View>
        <Text style={styles.label}>Email</Text>
        <View>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your email here"
            autoCapitalize="none"
            keyboardType="email-address"
            placeholderTextColor="#7e8295"
            value={email}
            onSubmitEditing={() => {
              passwordInputField.current?.focus();
            }}
            ref={emailInputField}
            returnKeyType="next"
            submitBehavior="submit"
            onChangeText={setEmail}
          />
          <View style={styles.iconContainer}>
            <AtSign size="18" color="#7e8295" />
          </View>
        </View>
        <Text style={styles.label}>Password</Text>
        <View>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your Password"
            placeholderTextColor="#7e8295"
            value={password}
            ref={passwordInputField}
            onChangeText={setPassword}
            secureTextEntry
            returnKeyType="go"
            onSubmitEditing={() => Signup()}
          />
          <View style={styles.iconContainer}>
            <Lock size="18" color="#7e8295" />
          </View>
        </View>
        <Pressable onPress={() => Signup()} style={styles.submitButton}>
          <Text style={styles.submitText}>Create new Account</Text>

          <View>
            <MoveRight color={"white"} size={22} />
          </View>
        </Pressable>
        <View style={styles.footerText}>
          <Text style={styles.footerContent}>Already have an account?</Text>

          <Text style={styles.footerLink} onPress={() => navigateBack()}>
            {" "}
            Return to base
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  loginPage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  container: {
    backgroundColor: "#1f2229",
    paddingTop: 40,
    paddingBottom: 33,
    justifyContent: "center",
    paddingHorizontal: 30,
    borderRadius: 15,
  },
  text: {
    color: "#e3e3e3",
    marginBottom: 30,
    fontSize: 18,
    textAlign: "center",
    fontWeight: 500,
  },
  textHeading: {
    color: "#e3e3e3",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 6,
    textAlign: "center",
  },
  label: {
    color: "white",
    fontWeight: 500,
    marginBottom: 8,
  },

  textInput: {
    marginBottom: 30,
    paddingLeft: 37,
    // paddingRight: 40,
    paddingBottom: 10,
    color: "white",
    borderColor: "grey",
    borderWidth: 0.6,
    borderRadius: 5,
    backgroundColor: "#1b1b1d",
  },
  iconContainer: {
    position: "absolute",
    top: 12,
    left: 11,
  },
  submitButton: {
    flexDirection: "row",
    marginTop: 12,
    backgroundColor: "#6aa84d",
    paddingVertical: 13,
    gap: 15,
    paddingHorizontal: 30,
    borderRadius: 7,
  },
  submitText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
  pressableContainer: {
    flex: 1,
    flexDirection: "row",
  },
  footerText: {
    marginTop: 16,
    flexDirection: "row",
  },
  footerContent: {
    color: "white",
    fontWeight: "400",
  },
  footerLink: {
    color: "#6aa84d",
    fontWeight: 500,
  },
});
