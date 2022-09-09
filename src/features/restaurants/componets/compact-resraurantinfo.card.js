import React from "react";
import styled from "styled-components/native";
import { Text } from "./typography/text.componet";
import { Platform } from "react-native";
import WebView from "react-native-webview";

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactWebImage = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px
  align-Items: center;
`;

const isAndroid = Platform.OS == "android";
export const CompactRestaurantInfo = ({ restaurant }) => {
  const Image = isAndroid ? CompactWebImage : CompactImage;
  return (
    <Item>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Text center variant="caption">
        {restaurant.name}
      </Text>
    </Item>
  );
};
