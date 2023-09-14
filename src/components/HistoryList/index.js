import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Surface } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const HistoryList = () => {
  return (
    <View>
      <Surface style={styles.surface}>
        <View style={{ flex: 1 }}>
          <MaterialCommunityIcons
            name="check-decagram"
            size={30}
            style={{ color: "#22bb33" }}
          />
        </View>
        <View style={{ flex: 5 }}>
          <Text style={styles.status}>Hadir</Text>
          <Text>Senin, 6 Oktober 2023</Text>
        </View>
      </Surface>
    </View>
  );
};

export default HistoryList;

const styles = StyleSheet.create({
  surface: {
    borderRadius: 36,
    backgroundColor: "#fff",
    padding: 8,
    paddingLeft: 40,
    height: 80,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  status: {
    fontWeight: "700",
    fontSize: 20,
  },
});
