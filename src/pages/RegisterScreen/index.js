import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [employeeId, setEmployeeId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.TextHeader}>Hey</Text>
        <Text style={styles.TextHeader}>Register Now,</Text>
        <TouchableOpacity
          style={styles.descHeader}
          onPress={() => {
            navigation.navigate("login");
          }}
        >
          <Text>
            If you have an account / <Text style={styles.touchText}>Login</Text>
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TextInput
          label="Employee ID"
          mode="outlined"
          placeholder="Masukan Id Karyawan"
          value={employeeId}
          onChangeText={(id) => setEmployeeId(id)}
          style={styles.input}
        />
        <View style={styles.nameInputContainer}>
          <TextInput
            label="First Name"
            mode="outlined"
            placeholder="Masukan Nama Depan"
            value={firstName}
            onChangeText={(name) => setFirstName(name)}
            style={styles.nameInput}
          />
          <TextInput
            label="Last Name"
            mode="outlined"
            placeholder="Masukan Nama Belakang"
            value={lastName}
            onChangeText={(name) => setLastName(name)}
            style={styles.nameInput}
          />
        </View>
        <TextInput
          label="User Name"
          mode="outlined"
          placeholder="Masukan User Name"
          value={userName}
          onChangeText={(name) => setUserName(name)}
          style={styles.input}
        />
        <TextInput
          label="Email"
          mode="outlined"
          placeholder="masukan email"
          value={email}
          onChangeText={(email) => setEmail(email)}
          style={styles.input}
        />
        <TextInput
          style={styles.input}
          label="Password"
          mode="outlined"
          secureTextEntry
          placeholder="Masukan Password"
          value={password}
          onChangeText={(password) => setPassword(password)}
          right={<TextInput.Icon style={{ color: "#000" }} name="eye" />}
        />
      </View>
      <View style={styles.buttonSection}>
        <Button
          mode="contained"
          style={styles.button}
          onPress={() => navigation.navigate("main")}
        >
          <Text style={styles.textLogin}>Register</Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
    paddingVertical: 110,
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 30,
    marginBottom: 50,
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
    borderRadius: 40,
    marginVertical: 6,
  },
  nameInputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  nameInput: {
    flex: 1,
    marginRight: 6,
  },
  buttonSection: {
    marginTop: 40, // Ubah margin top sesuai kebutuhan
  },
  button: {
    padding: 8,
    borderRadius: 12,
    marginVertical: 5,
  },
  textLogin: {
    color: "white",
  },
});

export default RegisterScreen;
