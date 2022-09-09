import React from "react";
import { Text } from "../componets/typography/text.componet";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Favourite } from "../../maps/componts/favourit/favourite.Icon";
import { View } from "react-native";
import {
  RestaurantCard,
  RestaurantCover,
  Info,
  Title,
  Address,
  StarRow,
  Stats,
} from "./resrauranr-info-card.styles";

export const RestaurantsInfoCard = ({ restaurant }) => {
  const ratingArray = Array.from(new Array(5));
  return (
    <RestaurantCard elevation={5}>
      <View>
        <Favourite restaurant={restaurant} />
        <RestaurantCover source={{ uri: restaurant.photos[0] }} />
      </View>
      <Info>
        <Title>{restaurant.name}</Title>
        <Stats>
          <StarRow>
            {ratingArray.map((_, index) => (
              <SvgXml
                key={`Star-${restaurant.placeId}-${index}`}
                xml={star}
                width={20}
                height={20}
              />
            ))}
          </StarRow>
          {restaurant.isOpenNow ? (
            <SvgXml xml={open} width={20} height={20} />
          ) : (
            <Text variant="error">Closed</Text>
          )}
        </Stats>
        <Address>{restaurant.vicinity}</Address>
      </Info>
    </RestaurantCard>
  );
};
