import React, { useContext, useEffect, useState } from "react";
import MapView from "react-native-maps";
import styled from "styled-components";
import { Search } from "../componts/searchMap.component";
import { LocationContect } from "../../../services/location/location.context";
import { RestaurantContext } from "../../../services/restaurants/restaurants.contex";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapScreen = () => {
  const { restaurants } = useContext(RestaurantContext);
  const { location2 } = useContext(LocationContect);

  const [latDelta, setLatDelta] = useState(0);
  const { lat, lng, viewport } = location2;
  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    const latDelta = northeastLat - southwestLat;
    setLatDelta(latDelta);
  }, [location2, viewport]);

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map(() => {
          return null;
        })}
      </Map>
    </>
  );
};
