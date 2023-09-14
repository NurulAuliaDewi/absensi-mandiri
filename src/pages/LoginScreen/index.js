import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { TextInput, Button } from "react-native-paper";

import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.page}>
      <View>
        <Image
          source={require("./../../assets/safe.png")}
          style={styles.Image}
        />
        <Text style={styles.TextHeader}>Hey</Text>
        <Text style={styles.TextHeader}>Login Now,</Text>
        <TouchableOpacity
          style={styles.descHeader}
          onPress={() => {
            navigation.navigate("register");
          }}
        >
          <Text>
            If you are new/ <Text style={styles.touchText}>Create New</Text>
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TextInput
          label="Email"
          mode="outlined"
          placeholder="masukan email"
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
        <TextInput
          style={styles.input}
          label="Password"
          mode="outlined"
          secureTextEntry
          placeholder="Masukan Passowrd"
          value={password}
          onChangeText={(password) => setPassword(password)}
          right={<TextInput.Icon style={{ color: "#000" }} name="eye" />}
        />
      </View>
      <View>
        <Text style={styles.descHeader}>
          Forget Password/ <Text style={styles.touchText}>Reset</Text>
        </Text>
      </View>
      <View style={styles.buttonSection}>
        <Button
          mode="contained"
          style={styles.button}
          onPress={() => navigation.navigate("main")}
        >
          <Text style={styles.textLogin}>Login</Text>
        </Button>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  Image: {
    alignSelf: "center",
    width: "60%",
    height: "50%",
    aspectRatio: 1,
  },
  page: {
    backgroundColor: "#ffffff",
    paddingVertical: 100,
    paddingHorizontal: 20,
  },

  TextHeader: {
    color: "#000000",
    fontSize: 30,
    fontWeight: "800",
  },
  descHeader: {
    color: "#000000",

    fontSize: 14,
    fontWeight: "300",
  },
  touchText: {
    textDecorationLine: "underline",
    color: "#000000",
    fontSize: 14,
    fontWeight: "600",
  },
  input: {
    backgroundColor: "#fff",

    borderRadius: 90,
    marginVertical: 6,
  },
  buttonSection: {
    marginTop: 35,
  },
  button: {
    padding: 8,
    borderRadius: 12,
    marginVertical: 5,
  },
});
