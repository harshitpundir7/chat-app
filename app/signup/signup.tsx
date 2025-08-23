import { useRouter } from "expo-router";
import React from "react";
import { Button, Text, View } from "react-native";

export default function SignupScreen() {
    const router = useRouter();

    function navigatLogin(){
        router.dismissAll();
    }

  return (
    <View className="flex-1 items-center justify-center bg-white" >
      <Text className="text-red-700" >Hello Signup</Text>
       <Button title="Login screen"  onPress={()=>navigatLogin()} />
    </View>
  );
}
