import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const FormProfile = (props) => {
  const [username, setUsername] = useState(props.username);
  return (
    <View style={styles.formInputContainer}>
      <View style={styles.iconContainer}>
        <MaterialIcons name="verified-user" size={30} />
      </View>
      <View style={styles.textInputContainer}>
        <Text>Username</Text>
        <TextInput
          editable={isEditing}
          placeholder="Masukan Username"
          onChangeText={(text) => setUsername(text)}
          value={username}
          style={styles.textInput}
        />
      </View>
    </View>
  );
};

export default FormProfile;

const styles = StyleSheet.create({
  formContainer: {
    minHeight: 200,
    padding: 20,
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 41,
  },
  formInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
    paddingBottom: 3,
    marginBottom: 10,
  },
  iconContainer: {
    marginRight: 10,
  },
  textInputContainer: {
    flex: 1,
  },
  textInput: {
    padding: 0,
  },
});
