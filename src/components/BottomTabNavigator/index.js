import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import TabItem from "../TabItem";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const BottomTabNavigator = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        const renderIcon = () => {
          if (label === "Home") {
            return isFocused ? (
              <MaterialIcons
                name="dashboard"
                size={30}
                style={{ color: "#407BFF" }}
              />
            ) : (
              <MaterialIcons
                name="dashboard"
                size={25}
                style={{ color: "#B9B9B9" }}
              />
            );
          } else if (label === "Riwayat") {
            return isFocused ? (
              <MaterialIcons
                name="history"
                size={25}
                style={{ color: "#407BFF" }}
              />
            ) : (
              <MaterialIcons
                name="history"
                size={25}
                style={{ color: "#B9B9B9" }}
              />
            );
          } else if (label === "Profile") {
            return isFocused ? (
              <MaterialIcons
                name="account-circle"
                size={25}
                style={{ color: "#407BFF" }}
              />
            ) : (
              <MaterialIcons
                name="account-circle"
                size={25}
                style={{ color: "#B9B9B9" }}
              />
            );
          }
        };

        return (
          <TabItem
            key={index}
            isFocused={isFocused}
            label={label}
            onLongPress={onLongPress}
            onPress={onPress}
            renderIcon={renderIcon}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingVertical: 12,
  },
});

export default BottomTabNavigator;
