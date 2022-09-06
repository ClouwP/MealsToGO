import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;

const RestaurantCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const StarRow = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
`;

const Stats = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

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
            <Text>Closed</Text>
          )}
        </Stats>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
