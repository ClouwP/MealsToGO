import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import { SafeAreaViewHome } from "../../components/safeArea";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MapScreen } from "../../features/maps/screens/map.screen";

import { RestaurantNavigator } from "./restaurants.navigator";

const Tab = createBottomTabNavigator();

const TabIcon = {
  Restaurants: "md-restaurant",
  Settings: "md-settings",
  Maps: "md-map",
};

const Settings = () => (
  <SafeAreaViewHome>
    <Text>Settings</Text>
  </SafeAreaViewHome>
);

const tabBarIcon =
  (iconName) =>
  ({ size, color }) => {
    return <Ionicons name={iconName} size={size} color={color} />;
  };

const screenOptions = ({ route }) => {
  const IconName = TabIcon[route.name];
  return {
    headerShown: false,
    tabBarIcon: tabBarIcon(IconName),
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
  };
};

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Restaurants" component={RestaurantNavigator} />
        <Tab.Screen name="Maps" component={MapScreen} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
