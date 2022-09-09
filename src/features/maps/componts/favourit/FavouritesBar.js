import React from "react";
import { ScrollView, View, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { CompactRestaurantInfo } from "../../../restaurants/componets/compact-resraurantinfo.card";

const FavouritesWrapper = styled.View`
  padding: 10px;
`;

export const FavouritesBar = ({ favourites, hoTODetail }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <FavouritesWrapper>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restraunt) => {
          const key = restraunt.name.split(" ").join(" ");
          return (
            <View key={key} style={{ marginRight: 10 }}>
              <TouchableOpacity
                onPress={() => hoTODetail("RestaurantDetails", restraunt)}
              >
                <CompactRestaurantInfo restaurant={restraunt} />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};
