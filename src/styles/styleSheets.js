import Constants from "expo-constants";
import { StyleSheet } from "react-native";
import { PRIMARY_COLOR, BACKGROUND_COLOR, WHITE_COLOR, SECONDARY_COLOR } from "./colors";
import { PRIMARY_BUTTON_WIDTH, PRIMARY_BUTTON_BORDER_RADIUS } from './buttons';
import { 
  CONTAINER_HEIGHT_A,
  CONTAINER_HEIGHT_B,
  CONTAINER_HEIGHT_AA,
  CONTAINER_HEIGHT_AB,
  CONTAINER_HEIGHT_BA,
  CONTAINER_HEIGHT_BB,
  HORIZONTAL_MARGIN,
  VERTICAL_MARGIN,
  HORIZONTAL_PADDING, 
  VERTICAL_PADDING,
} from './containers';
import {
  HEADER_ONE_FONT_SIZE,
  HEADER_TWO_FONT_SIZE,
  BUTTON_FONT_SIZE,
  SENTENCE_FONT_SIZE,
  HEADER_ONE_FONT_FAMILY,
  HEADER_TWO_FONT_FAMILY,
  BUTTON_FONT_FAMILY,
  SENTENCE_FONT_FAMILY,
} from "./typography";

export const SCREENS = StyleSheet.create({
  ScreenContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
});

export const TYPOGRAPHY = StyleSheet.create({
  HEADER_ONE: {
    color: PRIMARY_COLOR,
    fontSize: 30,
    fontFamily: HEADER_ONE_FONT_FAMILY,
    textAlign: 'center'
  },
  HEADER_TWO: {
    color: PRIMARY_COLOR,
    fontSize: 25,
    fontFamily: HEADER_TWO_FONT_FAMILY,
    textAlign: 'center'
  },
  HEADER_THREE: {
    color: WHITE_COLOR,
    fontSize: 25,
    fontFamily: HEADER_TWO_FONT_FAMILY,
    textAlign: 'center'
  },
  BUTTON: {
    color: PRIMARY_COLOR,
    fontSize: 32,
    padding: 10,
    fontFamily: BUTTON_FONT_FAMILY,
    textAlign: 'center'
  },
  SENTENCE: {
    color: WHITE_COLOR,
    fontSize: SENTENCE_FONT_SIZE,
    fontFamily: SENTENCE_FONT_FAMILY,
    textAlign: 'center'
  },
});

export const BUTTONS = StyleSheet.create({
  PRIMARY_BUTTON: {
    borderWidth: 3,
    borderRadius: 10,
    marginHorizontal: 20,
    borderColor: PRIMARY_COLOR,
  },
});

export const CONTAINERS = StyleSheet.create({
  A: {
    width: '100%',
    height: CONTAINER_HEIGHT_A,
    display: 'flex',
    flexDirection: "column",
    justifyContent: 'space-around'
  },
  B: {
    width: '100%',
    height: CONTAINER_HEIGHT_B,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  HEADER: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  BUTTON_GROUP: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center'

  }
});
