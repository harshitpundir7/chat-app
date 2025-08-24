import { Redirect } from "expo-router";
import * as secureStorage from "expo-secure-store";
import { useEffect, useState } from "react";

export default function Index(){
    const [isLoading, setLoading] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    useEffect(()=>{
        const checkSession = async()=>{
            const session = await secureStorage.getItemAsync("authToken");
            if(session){
                setIsLoggedIn(true)
            }
            setLoading(false)
        };
        checkSession();
    },[]);
    if(isLoading) return null;
    return(
        <>
        {isLoggedIn?(
            <Redirect href="/(home)"/>
        ):(
            <Redirect href="/(auth)/login/login"/>
        )}
        </>
    )
}