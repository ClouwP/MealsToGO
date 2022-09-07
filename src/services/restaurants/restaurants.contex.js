import React, {
  useState,
  createContext,
  useEffect,
  useMemo,
  useContext,
} from "react";
import { LocationContect } from "../location/location.context";

import { restrantsTransform, restaurantsRequest } from "./restaurants.service";

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  let counter = 1;

  const { location2 } = useContext(LocationContect);

  const retriveRestaurants = (loc) => {
    setIsLoading(true);
    setRestaurants([]);
    setTimeout(() => {
      restaurantsRequest(loc)
        .then(restrantsTransform)
        .then((result) => {
          setIsLoading(false);
          setRestaurants(result);
          counter = counter + 1;
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };

  useEffect(() => {
    if (location2) {
      const locactionString = `${location2.lat},${location2.lng}`;
      retriveRestaurants(locactionString);
    }
  }, [location2]);

  return (
    <RestaurantContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};
