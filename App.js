import React from "react";
import {View, TouchableOpacity, SafeAreaView, Text} from "react-native";
// import {createDrawerNavigator} from "@react-navigation/drawer";
import {NavigationContainer} from "@react-navigation/native";
import {Ionicons} from "@expo/vector-icons";
import CustomDrawerMenu from "./src/components/Topbar";
import HomeMenu from "./src/screens/Home";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

function HomeScreen({navigation}) {
  return (
    <SafeAreaView>
      <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
        <HomeMenu />
        <TouchableOpacity
          title="Go to notifications"
          onPress={() => navigation.navigate("Details")}
        />
      </View>
    </SafeAreaView>
  );
}

function NotificationsScreen({navigation}) {
  return (
    <SafeAreaView>
      <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
        <TouchableOpacity
          title="Go back home"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    </SafeAreaView>
  );
}

// const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <CustomDrawerMenu />
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "ios-home";
            } else if (route.name === "DMs") {
              iconName = "ios-chatbubbles";
            } else if (route.name === "Mentions") {
              iconName = "ios-at";
            } else if (route.name === "You") {
              iconName = "ios-happy";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "black",
          inactiveTintColor: "grey",
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="DMs" component={NotificationsScreen} />
        <Tab.Screen name="Mentions" component={NotificationsScreen} />
        <Tab.Screen name="You" component={NotificationsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
