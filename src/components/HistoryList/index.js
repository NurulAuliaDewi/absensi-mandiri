import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Surface, ThemeProvider } from "react-native-paper";

const HistoryList = () => {
  return (
    <View>
      <Surface style={styles.surface} elevation={1} theme={ThemeProvider}>
        <Text>Surface</Text>
      </Surface>
    </View>
  );
};

export default HistoryList;

const styles = StyleSheet.create({
  surface: {
    padding: 8,
    height: 80,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
