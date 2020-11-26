import React from 'react';
import { StatusBar } from 'expo-status-bar';
import * as Font from "expo-font";
import { SplashScreen } from "expo";
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/components/screens/Home.js';
import Quiz from './src/components/screens/Quiz.js';
import Results from './src/components/screens/Results.js';

export default function App() {
  const [loading, setLoading] = React.useState(true)

  const Stack = createStackNavigator();

  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // load fonts
        await Font.loadAsync({
          MontserratBold: require("./assets/fonts/Montserrat-Bold.ttf"),
          // MontserratMedium: require("./assets/fonts/Montserrat-Medium.ttf"),
          MontserratSemiBold: require("./assets/fonts/OpenSans-SemiBold.ttf"),
          MontserratRegular: require("./assets/fonts/Montserrat-Regular.ttf"),
          // OpenSansSemiBold: require("./assets/fonts/OpenSans-SemiBold.ttf"),
          OpenSansRegular: require("./assets/fonts/OpenSans-Regular.ttf"),
        });
      } catch (error) {
        console.warn(error);
      } finally {
        setLoading(true);
        SplashScreen.hide();
      }
    }
    loadResourcesAndDataAsync();
  }, []);

  return (
    <Stack.Navigator>
      <StatusBar style="auto" />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Quiz" component={Quiz} />
      <Stack.Screen name="Results" component={Results} />
    </Stack.Navigator>
  );
}

