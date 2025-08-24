import { AuthProvider } from "@/context/AuthContext";
import { Stack } from "expo-router";

export default function HomeLayout(){
    return(
        <AuthProvider>
            <Stack>

            </Stack>
        </AuthProvider>
    )
}