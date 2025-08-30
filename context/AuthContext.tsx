import { User } from "@/types/user";
import { authApi } from "@/utils/constants";
import * as SecureStorage from "expo-secure-store";
import { createContext, ReactNode, useEffect, useState } from "react";
import { Text } from "react-native";

export const authContext = createContext<User | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  async function getUserData() {
    try {
        const token = await SecureStorage.getItemAsync("authToken");
        const resData = await fetch(`${authApi}/api/user`, {
          headers: {
            "Content-Type": "Application/json",
            Cookie: `session=${token}`,
          },
        });
        const data = await resData.json();
        setUser(data.data);
        
    } catch (error) {
        console.error(error)
    }finally{
        setIsLoading(false)
    }
  }
  useEffect(()=>{
    getUserData()
  },[])
  if(isLoading){
    return (
    <>
    <Text>
        Loading...
    </Text>
    </>
    )
  }
  return(
    <authContext.Provider value={user}>
        {children}
    </authContext.Provider>
  )
}
