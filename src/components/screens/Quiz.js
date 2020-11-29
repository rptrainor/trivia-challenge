import React from "react";
import axios from "axios";
import { View, Text, TouchableOpacity } from "react-native";
import {
  SCREENS,
  CONTAINERS,
  TYPOGRAPHY,
  BUTTONS,
} from "../../styles/styleSheets";

export default function Quiz({ navigation, questions }) {

  const handleAnswer = (answer) => {
    if (answer === questions[0].correct_answer) {
    } else {
      setQuestionCounter(0 + 1)
    }
  };

  console.log(questions)
  if (!questions) {
    return <View />
  }
  return (
    <View style={SCREENS.ScreenContainer}>
      <View style={CONTAINERS.A}>
        {/* <View style={CONTAINERS.HEADER}>
          <Text style={TYPOGRAPHY.HEADER_TWO}>
            {questions[0].category}
          </Text>
        </View>
      <Text style={TYPOGRAPHY.HEADER_THREE}>{questions[0].question.replace(/(&#039;|&Aring;|&quot;|&ocirc;)/gi, '')}</Text>
      <Text style={TYPOGRAPHY.HEADER_THREE}>{questions[0].question.replace(/(|[^0-9]|[^a-z]|[^A-Z])/gi, '')}</Text> */}
      </View>
      <View style={CONTAINERS.B}>
        <Text style={TYPOGRAPHY.HEADER_THREE}>{0} of 10</Text>
        <View style={CONTAINERS.BUTTON_GROUP}>
          <TouchableOpacity
            style={BUTTONS.PRIMARY_BUTTON}
            onPress={() => handleAnswer("True")}
          >
            <Text style={TYPOGRAPHY.BUTTON}>TRUE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={BUTTONS.PRIMARY_BUTTON}
            onPress={() => handleAnswer("False")}
          >
            <Text style={TYPOGRAPHY.BUTTON}>FALSE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
