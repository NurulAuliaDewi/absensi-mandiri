// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Router from "./src/Router";
import { Asset } from "expo-asset";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import * as SplashScreen from "expo-splash-screen";

import { registerTranslation } from "react-native-paper-dates";
registerTranslation("en", {
  save: "Save",
  selectSingle: "Select date",
  selectMultiple: "Select dates",
  selectRange: "Select period",
  notAccordingToDateFormat: (inputFormat) =>
    `Date format must be ${inputFormat}`,
  mustBeHigherThan: (date) => `Must be later then ${date}`,
  mustBeLowerThan: (date) => `Must be earlier then ${date}`,
  mustBeBetween: (startDate, endDate) =>
    `Must be between ${startDate} - ${endDate}`,
  dateIsDisabled: "Day is not allowed",
  previous: "Previous",
  next: "Next",
  typeInDate: "Type in date",
  pickDateFromCalendar: "Pick date from calendar",
  close: "Close",
});

const theme = {
  ...DefaultTheme,
  roundness: 15,
  colors: {
    ...DefaultTheme.colors,
    primary: "#407BFF",
    accent: "yellow",
  },
};

function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
