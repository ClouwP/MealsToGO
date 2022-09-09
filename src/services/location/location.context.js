import React, { createContext, useContext, useEffect, useState } from "react";

import { locationRequest, locationTransform } from "./locaction.service";

export const LocationContect = createContext();

export const LocationContectProvider = ({ children }) => {
  const [location2, setlocation] = useState([]);
  const [keyword, setKeyword] = useState("antwerp");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (searchKeyword) => {
    setIsLoading(true);
    setKeyword(searchKeyword);
  };

  useEffect(() => {
    if (!keyword.length) {
      return;
    }
    locationRequest(keyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setlocation(result);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, [keyword]);

  return (
    <LocationContect.Provider
      value={{
        isLoading,
        error,
        location2,
        search: onSearch,
        keyword,
      }}
    >
      {children}
    </LocationContect.Provider>
  );
};
