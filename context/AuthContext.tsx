import { User } from "@/types/user";
import { authApi } from "@/utils/constants";
import * as securestorage from "expo-secure-store";
import React, { createContext, useState } from "react";
import { Text, View } from "react-native";

export const AuthContext = createContext<User | null>(null);


export const AuthProvider = ({children}:{children:React.ReactNode})=>{
    const [data,setData] = useState<User|null>(null);
    const [loading,setLoading] = useState(true);
    React.useEffect(()=>{
        async function fetchData() {
            try {
                
                const token = await securestorage.getItemAsync("authToken");
                const res = await fetch(`${authApi}/api/user`,{
                    headers : {
                        "Content-Type":"Application/json",
                        "Cookie" : `session=${token}`
                    }
                })
                const resData = await res.json();
                setData(resData.data);
            } catch (error) {
                console.log(error)
            }finally{
                setLoading(false)
            }
        }
        fetchData();
    },[]);

    if(loading){
        return(
            <View>
                <Text>loading...</Text>
            </View>
        )
    }

    return(
        <AuthContext.Provider value={data} >
            {children}
        </AuthContext.Provider>
    )
}