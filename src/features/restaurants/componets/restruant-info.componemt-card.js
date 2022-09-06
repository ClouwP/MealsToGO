import React from "react";
import { Text } from "../componets/typography/text.componet";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import {
  RestaurantCard,
  RestaurantCover,
  Info,
  Title,
  Address,
  StarRow,
  Stats,
} from "./resrauranr-info-card.styles";

export const RestaurantsInfoCard = ({ restaurants = {} }) => {
  const {
    name = "Some Restaurant",
    photos = ["https://media.timeout.com/images/105499923/750/422/image.jpg"],
    address = "Jagerstraat 7D",
    isOpenNow = false,
    rating = 4,
  } = restaurants;

  const ratingArray = Array.from(new Array(rating));
  return (
    <RestaurantCard>
      <RestaurantCover source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Stats>
          <StarRow>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </StarRow>
          {isOpenNow ? (
            <SvgXml xml={open} width={20} height={20} />
          ) : (
            <Text variant="error">Closed</Text>
          )}
        </Stats>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
