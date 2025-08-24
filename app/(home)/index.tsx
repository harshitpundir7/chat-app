import toastConfig from "@/utils/toastConfig";
import { Text, View } from "react-native";
import Toast from "react-native-toast-message";

export default function HomeScreen(){
    return(
        <View>
            <Toast config={toastConfig} />
            <Text>Hello Home Screen</Text>
        </View>
    )
}