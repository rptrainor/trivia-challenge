import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useMachine } from "@xstate/react";

import Home from "./src/components/screens/Home.js";
import Quiz from "./src/components/screens/Quiz.js";
import Results from "./src/components/screens/Results.js";
import { quizMachine } from "./src/machines/quizMachine";

export default function App() {
  const [loading, setLoading] = React.useState(true);
  const [questions, setQuestions] = React.useState([]);

  const [state, send] = useMachine(quizMachine);

  const Stack = createStackNavigator();

  const initQuiz = async () => {
    try {
      const response = await axios.get(
        "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"
      );
      setQuestions(response.data.results);
      send("RESOLVE");
    } catch (error) {
      send("REJECT");
    }
  };

  React.useMemo(() => {
    let status = state.value;
    switch (status) {
      case "loading":
        initQuiz();
      default:
        return null;
    }
  }, [state.value]);

  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // start the quiz machine
        send("FETCH");

        // load fonts
        await Font.loadAsync({
          MontserratBold: require("./assets/fonts/Montserrat-Bold.ttf"),
          MontserratMedium: require("./assets/fonts/Montserrat-Medium.ttf"),
          MontserratSemiBold: require("./assets/fonts/OpenSans-SemiBold.ttf"),
          MontserratRegular: require("./assets/fonts/Montserrat-Regular.ttf"),
          OpenSansSemiBold: require("./assets/fonts/OpenSans-SemiBold.ttf"),
          OpenSansRegular: require("./assets/fonts/OpenSans-Regular.ttf"),
        });
      } catch (error) {
        console.warn(error);
      } finally {
        setLoading(false);
        SplashScreen.hideAsync();
      }
    }
    loadResourcesAndDataAsync();
  }, []);
  console.log("state.value");
  console.log(state.value);
  if (loading) {
    return <View />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          options={{ headerShown: false }}
        >
          {props => <Home {...props} send={send} />}
        </Stack.Screen>
        <Stack.Screen
          name='Quiz'
          options={{ headerShown: false }}
          questions={questions}
        >
          {props => <Quiz {...props} send={send} questions={questions} />}
          </Stack.Screen>
        <Stack.Screen
          name='Results'
          component={Results}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
