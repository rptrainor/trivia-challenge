import React from 'react';
import { View, Text } from 'react-native';
import { SCREENS, CONTAINERS } from '../../styles/styleSheets';

export default function Results() {
  return (
    <View style={SCREENS.ResultsScreen} >
      <View style={CONTAINERS.A}>
        <View style={CONTAINERS.AA}>
        </View>
        <View style={CONTAINERS.AB}>
        </View>
      </View>
      <View style={CONTAINERS.B}>
      <View style={CONTAINERS.BA}>
        </View>
        <View style={CONTAINERS.BB}>
        </View>
      </View>
     </View>
  );
}