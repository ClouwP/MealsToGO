import React, { useContext } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";
import styled from "styled-components/native";
import { FlatList } from "react-native";
import { RestaurantsInfoCard } from "../componets/restruant-info.componemt-card";
import { SafeAreaViewHome } from "../../../components/safeArea";
import { RestaurantContext } from "../../../services/restaurants/restaurants.contex";
import { Search } from "../componets/search.component";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => {
  const { isLoading, restaurants } = useContext(RestaurantContext);
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
      <Search />
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <>
              <RestaurantsInfoCard restaurant={item} />
            </>
          );
        }}
        keyExtractor={(Item) => Item.name}
      />
    </SafeAreaViewHome>
  );
};
