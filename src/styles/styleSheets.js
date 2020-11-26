import Constants from "expo-constants";
import { StyleSheet } from "react-native";
import { PRIMARY_COLOR, BACKGROUND_COLOR, WHITE_COLOR } from "./colors";
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
  HEADER_ONE_HORIZONTAL_PADDING,
  HEADER_TWO_HORIZONTAL_PADDING,
  BUTTON_HORIZONTAL_PADDING,
  SENTENCE_HORIZONTAL_PADDING,
  HEADER_ONE_VERTICAL_PADDING,
  HEADER_TWO_VERTICAL_PADDING,
  BUTTON_VERTICAL_PADDING,
  SENTENCE_VERTICAL_PADDING,
  HEADER_ONE_HORIZONTAL_MARGIN,
  HEADER_TWO_HORIZONTAL_MARGIN,
  BUTTON_HORIZONTAL_MARGIN,
  SENTENCE_HORIZONTAL_MARGIN,
  HEADER_ONE_VERTICAL_MARGIN,
  HEADER_TWO_VERTICAL_MARGIN,
  BUTTON_VERTICAL_MARGIN,
  SENTENCE_VERTICAL_MARGIN,
} from "./typography";

export const SCREENS = StyleSheet.create({
  HomeScreen: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: BACKGROUND_COLOR,
  },
  QuizScreen: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: BACKGROUND_COLOR,
  },
  ResultsScreen: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: BACKGROUND_COLOR,
  },
});

export const TYPOGRAPHY = StyleSheet.create({
  HEADER_ONE: {
    backgroundColor: BACKGROUND_COLOR,
    color: PRIMARY_COLOR,
    fontSize: HEADER_ONE_FONT_SIZE,
    fontFamily: HEADER_ONE_FONT_FAMILY,
    marginHorizontal: HEADER_ONE_HORIZONTAL_MARGIN,
    paddingHorizontal: HEADER_ONE_HORIZONTAL_PADDING,
    marginVertical: HEADER_ONE_VERTICAL_MARGIN,
    paddingVertical: HEADER_ONE_VERTICAL_PADDING,
    textAlign: 'center'
  },
  HEADER_TWO: {
    backgroundColor: BACKGROUND_COLOR,
    color: PRIMARY_COLOR,
    fontSize: HEADER_TWO_FONT_SIZE,
    fontFamily: HEADER_TWO_FONT_FAMILY,
    marginHorizontal: HEADER_TWO_HORIZONTAL_MARGIN,
    paddingHorizontal: HEADER_TWO_HORIZONTAL_PADDING,
    marginVertical: HEADER_TWO_VERTICAL_MARGIN,
    paddingVertical: HEADER_TWO_VERTICAL_PADDING,
    textAlign: 'center'
  },
  BUTTON: {
    backgroundColor: BACKGROUND_COLOR,
    color: PRIMARY_COLOR,
    fontSize: BUTTON_FONT_SIZE,
    fontFamily: BUTTON_FONT_FAMILY,
    marginHorizontal: BUTTON_HORIZONTAL_MARGIN,
    paddingHorizontal: BUTTON_HORIZONTAL_PADDING,
    marginVertical: BUTTON_VERTICAL_MARGIN,
    paddingVertical: BUTTON_VERTICAL_PADDING,
    textAlign: 'center'
  },
  SENTENCE: {
    backgroundColor: BACKGROUND_COLOR,
    color: WHITE_COLOR,
    fontSize: SENTENCE_FONT_SIZE,
    fontFamily: SENTENCE_FONT_FAMILY,
    marginHorizontal: SENTENCE_HORIZONTAL_MARGIN,
    paddingHorizontal: SENTENCE_HORIZONTAL_PADDING,
    marginVertical: SENTENCE_VERTICAL_MARGIN,
    paddingVertical: SENTENCE_VERTICAL_PADDING,
    textAlign: 'center'
  },
});

export const BUTTONS = StyleSheet.create({
  primary_button: {
    width: PRIMARY_BUTTON_WIDTH,
    borderRadius: PRIMARY_BUTTON_BORDER_RADIUS,
    backgroundColor: PRIMARY,
    marginHorizontal: BUTTON_HORIZONTAL_MARGIN,
    paddingHorizontal: BUTTON_HORIZONTAL_PADDING,
    marginVertical: BUTTON_VERTICAL_MARGIN,
    paddingVertical: BUTTON_VERTICAL_PADDING,
    textAlign: 'center'
  },
});

export const CONTAINERS = StyleSheet.create({
  A: {
    width: '100%',
    height: CONTAINER_HEIGHT_A,
    marginVertical: VERTICAL_MARGIN,
    marginHorizontal: HORIZONTAL_MARGIN,
    paddingVertical: VERTICAL_PADDING,
    paddingHorizontal: HORIZONTAL_PADDING,
  },
  B: {
    width: '100%',
    height: CONTAINER_HEIGHT_B,
    marginVertical: VERTICAL_MARGIN,
    marginHorizontal: HORIZONTAL_MARGIN,
    paddingVertical: VERTICAL_PADDING,
    paddingHorizontal: HORIZONTAL_PADDING,
  },
  AA: {
    width: '100%',
    height: CONTAINER_HEIGHT_AA,
    marginVertical: VERTICAL_MARGIN,
    marginHorizontal: HORIZONTAL_MARGIN,
    paddingVertical: VERTICAL_PADDING,
    paddingHorizontal: HORIZONTAL_PADDING,
  },
  AB: {
    width: '100%',
    height: CONTAINER_HEIGHT_AB,
    marginVertical: VERTICAL_MARGIN,
    marginHorizontal: HORIZONTAL_MARGIN,
    paddingVertical: VERTICAL_PADDING,
    paddingHorizontal: HORIZONTAL_PADDING,
  },
  BA: {
    width: '100%',
    height: CONTAINER_HEIGHT_BA,
    marginVertical: VERTICAL_MARGIN,
    marginHorizontal: HORIZONTAL_MARGIN,
    paddingVertical: VERTICAL_PADDING,
    paddingHorizontal: HORIZONTAL_PADDING,
  },
  BB: {
    width: '100%',
    height: CONTAINER_HEIGHT_BB,
    marginVertical: VERTICAL_MARGIN,
    marginHorizontal: HORIZONTAL_MARGIN,
    paddingVertical: VERTICAL_PADDING,
    paddingHorizontal: HORIZONTAL_PADDING,
  },
});
