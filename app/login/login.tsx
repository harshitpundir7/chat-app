//toast implementation
import { loginValidation } from "@/utils/zod";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AtSign, Lock, MoveRight } from "lucide-react-native";
import React, { useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";
import Toast from 'react-native-toast-message';

export default function LoginScreen() {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const passwordInputField = useRef<TextInput>(null);

  async function Login(){
    const {data,error} = loginValidation.safeParse({email,password});
    if(error||!data){
      // console.error(error);
      // ToastAndroid.showWithGravity("invalid credentials",5000,ToastAndroid.TOP)
      Toast.show({
        type : "error",
        text1 : "invalid credetials",
         text2: 'An error occurred while saving your item.',
      });
    }
    try{
    const res = await fetch(`${process.env.EXPO_PUBLIC_AUTH_API_URL}/api/auth/login`,{method : "POST",headers:{"Content-Type" : "Application/json"},body : JSON.stringify(data)});
    const resData = await res.json();
    const token = resData.cookie;
    await AsyncStorage.setItem('authToken',token);
    } catch(err){
      console.error(err);
    }

  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "android" ? "padding" : "height"}
      style={styles.loginPage}
    >
      <View style={styles.container}>
        <Text style={styles.textHeading}>Welcome Back!</Text>
        <Text style={styles.text}>Get started with the Chat app</Text>
        <Text style={styles.label}>Email</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your email here"
            autoCapitalize="none"
            keyboardType="email-address"
            placeholderTextColor="#7e8295"
            value={email}
            onSubmitEditing={()=>{
              passwordInputField.current?.focus();
            }}
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
          />
          <View style={styles.iconContainer}>
            <Lock size="18" color="#7e8295" />
          </View>
        </View>
        <Pressable onPress={()=>Login()} style={styles.submitButton}>
          <Text style={styles.submitText}>Login to Continue</Text>
          <View>
            <MoveRight color={"white"} size={22}  />
          </View>
        </Pressable>
        <View style={styles.footerText}>
          <Text style={styles.footerContent}>
            Don't have an account?
          </Text>
          <Text style={styles.footerLink}>
            {" "}Start Your Journey
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
    paddingBottom:33,
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
  textInputContainer: {
    width: 275,
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
    marginTop:12,
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
  footerText:{
    marginTop:16,
    flexDirection: "row",
  },
  footerContent:{
    color:"white",
    fontWeight:"400"
  },
  footerLink:{
    color: "#6aa84d",
    fontWeight: 500,    
  }
});
