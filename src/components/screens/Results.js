import React from 'react';
import { View, Text } from 'react-native';
import { SCREENS, CONTAINERS } from '../../styles/styleSheets';

export default function Results() {
  return (
    <View style={SCREENS.ScreenContainer}>
      <View style={CONTAINERS.A}></View>
      <View style={CONTAINERS.B}></View>
    </View>
  );
}
