import React from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { Platform, StatusBar } from "react-native";
import { RestaurantsInfoCard } from "../componets/restruant-info.componemt-card";

const SafeAreaViewHome = styled.SafeAreaView`
  flex: 1;
  margintop: ${Platform.OS === "android" ? StatusBar.currentHeight : 0}px;
`;
const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const ListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen = () => {
  return (
    <SafeAreaViewHome>
      <SearchContainer>
        <Searchbar placeholder="Search" />
      </SearchContainer>
      <ListContainer>
        <RestaurantsInfoCard />
      </ListContainer>
    </SafeAreaViewHome>
  );
};
