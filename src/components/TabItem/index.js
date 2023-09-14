import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";

const TabItem = ({ label, isFocused, onLongPress, onPress, renderIcon }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={isFocused ? styles.containerFocus : styles.container}
    >
      {renderIcon()}
      {isFocused && <Text style={styles.text}>{label}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    paddingVertical: 7,
    paddingHorizontal: 30,
  },
  containerFocus: {
    flexDirection: "row",
    alignContent: "center",
    paddingVertical: 7,
    paddingHorizontal: 10,
    backgroundColor: "#F2F2F2",
    borderRadius: 10,
  },
  text: {
    color: "#B9B9B9",
    fontSize: 14,
    marginTop: 5,
    marginLeft: 8,
    fontWeight: "400",
  },
});

export default TabItem;
