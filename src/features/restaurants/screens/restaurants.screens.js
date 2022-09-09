import React, { useContext, useState } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";
import styled from "styled-components/native";
import { FlatList, TouchableOpacity } from "react-native";
import { RestaurantsInfoCard } from "../componets/restruant-info.componemt-card";
import { SafeAreaViewHome } from "../../../components/safeArea";
import { Spacer } from "../componets/spacer/spacer.components";

import { RestaurantContext } from "../../../services/restaurants/restaurants.contex";
import { FavouritesContect } from "../../../services/favourites/favourites.context";

import { Search } from "../componets/search.component";
import { FavouritesBar } from "../../maps/componts/favourit/FavouritesBar";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantContext);
  const { favourits } = useContext(FavouritesContect);
  const [isToggled, setIsToggled] = useState(false);

  if (isLoading) {
    return (
      <ActivityIndicator
        size={50}
        style={{ marginLeft: -25 }}
        animating={true}
        color={Colors.blue300}
      />
    );
  }
  return (
    <SafeAreaViewHome>
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar
          favourites={favourits}
          hoTODetail={navigation.navigate}
        />
      )}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("RestaurantDetails", item)}
            >
              <Spacer position="bottom" size="large">
                <RestaurantsInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(Item) => Item.name}
      />
    </SafeAreaViewHome>
  );
};
