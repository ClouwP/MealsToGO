import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screens";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";

import { useFonts, Oswald_400Regular } from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import { SafeAreaViewHome } from "./src/components/safeArea";
import Ionicons from "@expo/vector-icons/Ionicons";
import { RestaurantContextProvider } from "./src/services/restaurants/restaurants.contex";
import { LocationContectProvider } from "./src/services/location/location.context";

const Tab = createBottomTabNavigator();

const TabIcon = {
  Restaurants: "md-restaurant",
  Settings: "md-settings",
  Maps: "md-map",
};

const Maps = () => (
  <SafeAreaViewHome>
    <Text>Maps</Text>
  </SafeAreaViewHome>
);
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

export default function App() {
  const [oswaldLoaded] = useFonts({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <LocationContectProvider>
        <RestaurantContextProvider>
          <ThemeProvider theme={theme}>
            <NavigationContainer>
              <Tab.Navigator screenOptions={screenOptions}>
                <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
                <Tab.Screen name="Maps" component={Maps} />
                <Tab.Screen name="Settings" component={Settings} />
              </Tab.Navigator>
            </NavigationContainer>
          </ThemeProvider>
        </RestaurantContextProvider>
      </LocationContectProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
