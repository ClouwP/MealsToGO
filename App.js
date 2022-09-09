import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";

import { useFonts, Oswald_400Regular } from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { RestaurantContextProvider } from "./src/services/restaurants/restaurants.contex";
import { LocationContectProvider } from "./src/services/location/location.context";
import { IndexNavigation } from "./src/infrastructure/navigation/index.mavigator";
import { FavouritesContectProvider } from "./src/services/favourites/favourites.context";

export default function App() {
  const [isAUthenticated, setIsAUthenticated] = useState(false);

  const [oswaldLoaded] = useFonts({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <FavouritesContectProvider>
        <LocationContectProvider>
          <RestaurantContextProvider>
            <ThemeProvider theme={theme}>
              <IndexNavigation />
            </ThemeProvider>
          </RestaurantContextProvider>
        </LocationContectProvider>
      </FavouritesContectProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
