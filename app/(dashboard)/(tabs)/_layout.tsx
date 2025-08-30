import { Tabs } from "expo-router";
import { AtSign, MessageSquareText, Phone, Settings } from "lucide-react-native";

export default function TabLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          headerStyle:{
            backgroundColor:"black",
            
          },
          headerTintColor:"white",
          headerTitleStyle:{
            color:"white",
            fontWeight:"400",
            fontSize:26,
          },
          tabBarStyle:{
            position: "absolute",
            bottom:25,
            left:20,
            right: 20,
            borderRadius: 20,
            marginHorizontal:20,
            backgroundColor: "black",
            borderTopWidth:0,
          },
          tabBarActiveTintColor: "#6aa84d",
          tabBarItemStyle: {
            justifyContent:"center",
            alignItems:"center",
            paddingTop:6
          },
          }}
      >
        <Tabs.Screen
          name="Chats/page"
          options={{
            title: "Chats",
            tabBarIcon: ({ color }) => <MessageSquareText color={color} />,
          }}
        />
          <Tabs.Screen name="Status/page"
          options={{
            title: "Status",
            tabBarIcon: ({ color }) => <AtSign color={color} />,
          }}/>
        
        <Tabs.Screen name="Calls/page"
          options={{
            title: "Calls",
            tabBarIcon: ({ color }) => <Phone color={color} />,
          }}/>
          <Tabs.Screen
            name="settings/page"
            options={{
              title: "Setting",
              tabBarIcon: ({ color }) => <Settings color={color} />,
            }}
          />
         
          
      </Tabs>
    </>
  );
}
