import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BottomTabNavigator from "../components/BottomTabNavigator";
import HomeScreen from "../pages/HomeScreen";
import SplashScreen from "../pages/SplashScreen";
import LoginScreen from "../pages/LoginScreen";
import ProfileScreen from "../pages/ProfileScreen";
import HistoryScreen from "../pages/HistoryScreen";
import RegisterScreen from "../pages/RegisterScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainRoute = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={(props) => <BottomTabNavigator {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Riwayat" component={HistoryScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />

      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="splash" component={SplashScreen} />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="register" component={RegisterScreen} />
      <Stack.Screen name="main" component={MainRoute} />
    </Stack.Navigator>
  );
};

export default Router;
