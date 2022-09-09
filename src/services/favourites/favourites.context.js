import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const FavouritesContect = createContext();

export const FavouritesContectProvider = ({ children }) => {
  const [favourits, setFavourits] = useState([]);

  const saveFavourites = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@favourites", jsonValue);
    } catch (e) {
      console.log("error storing", e);
    }
  };

  const loadFavourites = async () => {
    try {
      const value = await AsyncStorage.getItem("@favourites");
      if (value !== null) {
        setFavourits(JSON.parse(value));
      }
    } catch (e) {
      console.log("error loading", e);
    }
  };

  const add = (restaurant) => {
    setFavourits([...favourits, restaurant]);
  };

  const remove = (restaurant) => {
    const newFavourites = favourits.filter(
      (x) => x.placeId !== restaurant.placeId
    );
    setFavourits(newFavourites);
  };

  useEffect(() => {
    loadFavourites();
  }, []);

  useEffect(() => {
    saveFavourites(favourits);
  }, [favourits]);

  return (
    <FavouritesContect.Provider
      value={{
        favourits,
        addToFavourites: add,
        removeFromFavourites: remove,
      }}
    >
      {children}
    </FavouritesContect.Provider>
  );
};
