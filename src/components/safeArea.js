import styled from "styled-components/native";
import { Platform, StatusBar } from "react-native";

export const SafeAreaViewHome = styled.SafeAreaView`
  flex: 1;
  margintop: ${Platform.OS === "android" ? StatusBar.currentHeight : 0}px;
`;
