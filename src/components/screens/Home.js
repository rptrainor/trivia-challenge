import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useMachine } from "@xstate/react";

import {
  SCREENS,
  CONTAINERS,
  TYPOGRAPHY,
  BUTTONS,
} from "../../styles/styleSheets";

export default function Home({ navigation, send }) {

  const handleBegin = () => {
    navigation.navigate("Quiz");
    send('BEGIN');
  };
  return (
    <View style={SCREENS.ScreenContainer}>
      <View style={CONTAINERS.A}>
        <View style={CONTAINERS.HEADER}>
          <Text style={TYPOGRAPHY.HEADER_TWO}>Welcome to the</Text>
          <Text style={TYPOGRAPHY.HEADER_ONE}>Trivia Challenge</Text>
        </View>
        <Text style={TYPOGRAPHY.HEADER_THREE}>
          You will be presented with 10 True or False questions
        </Text>
      </View>
      <View style={CONTAINERS.B}>
        <Text style={TYPOGRAPHY.HEADER_THREE}>Can you score 100%?</Text>
        <TouchableOpacity style={BUTTONS.PRIMARY_BUTTON} onPress={handleBegin}>
          <Text style={TYPOGRAPHY.BUTTON}>BEGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
