import React from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { Platform, StatusBar, FlatList } from "react-native";
import { RestaurantsInfoCard } from "../componets/restruant-info.componemt-card";

const SafeAreaViewHome = styled.SafeAreaView`
  flex: 1;
  margintop: ${Platform.OS === "android" ? StatusBar.currentHeight : 0}px;
`;
const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => {
  return (
    <SafeAreaViewHome>
      <SearchContainer>
        <Searchbar placeholder="Search" />
      </SearchContainer>
      <RestaurantList
        data={[{ name: 1 }, { name: 2 }, { name: 3 }]}
        renderItem={() => <RestaurantsInfoCard />}
        keyExtractor={(Item) => Item.name}
      />
    </SafeAreaViewHome>
  );
};
