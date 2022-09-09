import React, { useContext } from "react";

import { List, Avatar } from "react-native-paper";
import { SafeAreaViewHome } from "../../../components/safeArea";
import { Text } from "../../restaurants/componets/typography/text.componet";
import { Spacer } from "../../restaurants/componets/spacer/spacer.components";
import styled from "styled-components/native";

const SettingsItem = styled(List.Item)`
  padding: 16px;
`;

const AvatarContainer = styled.View`
  align-items: center;
`;

export const Settings = ({ navigation }) => (
  <SafeAreaViewHome>
    <AvatarContainer>
      <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
      <Spacer position="top" size="large">
        <Text variant="label">test@gmail.com</Text>
      </Spacer>
    </AvatarContainer>
    <List.Section>
      <SettingsItem
        title="Favourites"
        description="View your favourites"
        left={(props) => <List.Icon {...props} color="black" icon="heart" />}
        onPress={() => navigation.navigate("Favourites")}
      />
      <SettingsItem
        title="Logout"
        description="Not working"
        left={(props) => <List.Icon {...props} color="black" icon="door" />}
      />
    </List.Section>
  </SafeAreaViewHome>
);
