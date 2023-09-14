import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect } from "react";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("login");
    }, 2000);
  }, []);
  return (
    <View style={styles.page}>
      <Image source={require("./../../assets/Task.gif")} style={styles.Image} />
      <Text style={styles.caption}>
        <Text style={{ fontWeight: "bold" }}>Absensi </Text>Mandiri
      </Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  Image: {
    width: "15%",
    height: "35%",
    aspectRatio: 1,
  },
  caption: {
    fontSize: 30,
  },
});
