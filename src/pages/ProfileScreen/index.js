import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Avatar, Button, Menu, TouchableRipple } from "react-native-paper";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import ImageModal from "react-native-image-modal";

const ProfileScreen = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState("farhan");
  const [email, setEmail] = useState("farhan@gmail.com");
  const [password, setPassword] = useState("farhan");
  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveClick = () => {
    // Implementasi logika penyimpanan data di sini
    // Misalnya, Anda dapat mengirim data ke server atau menyimpannya di state komponen lain
    setIsEditing(false);
  };
  const editPhoto = () => {
    console.log("edit");
    return (
      <View style={{ flex: 1, zIndex: 99 }}>
        <Menu.Item leadingIcon="redo" onPress={() => {}} title="Redo" />
        <Menu.Item leadingIcon="undo" onPress={() => {}} title="Undo" />
        <Menu.Item
          leadingIcon="content-cut"
          onPress={() => {}}
          title="Cut"
          disabled
        />
        <Menu.Item
          leadingIcon="content-copy"
          onPress={() => {}}
          title="Copy"
          disabled
        />
        <Menu.Item
          leadingIcon="content-paste"
          onPress={() => {}}
          title="Paste"
        />
      </View>
    );
  };

  return (
    <View style={styles.page}>
      <View style={styles.profilePicture}>
        <View style={styles.profilePictureContainer}>
          {isEditing ? (
            <TouchableOpacity onPress={editPhoto}>
              <Image
                resizeMode="contain"
                style={{
                  width: 150,
                  height: 150,
                  borderRadius: 180,
                }}
                source={require("./../../assets/unnamed.jpg")}
              />
            </TouchableOpacity>
          ) : (
            <ImageModal
              resizeMode="contain"
              // imageBackgroundColor="#F8F8F8"
              style={{
                width: 150,
                height: 150,
                borderRadius: 180,
              }}
              source={require("./../../assets/unnamed.jpg")}
            />
          )}
        </View>
        <Avatar.Image
          style={styles.imageIcon}
          size={50}
          source={require("./../../assets/editImage.png")}
        />
      </View>

      <View style={styles.nameContainer}>
        <Text style={styles.name}>M. Farhan </Text>
        <Text style={styles.nip}>33333333</Text>
      </View>
      <View style={styles.formContainer}>
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
        <View style={styles.formInputContainer}>
          <View style={styles.iconContainer}>
            <MaterialIcons name="mail" size={30} />
          </View>
          <View style={styles.textInputContainer}>
            <Text>Email</Text>
            <TextInput
              editable={isEditing}
              placeholder="Masukan Email"
              onChangeText={(text) => setEmail(text)}
              value={email}
              style={styles.textInput}
            />
          </View>
        </View>
        <View style={styles.formInputContainer}>
          <View style={styles.iconContainer}>
            <MaterialIcons name="lock" size={30} />
          </View>
          <View style={styles.textInputContainer}>
            <Text>Password</Text>
            <TextInput
              editable={isEditing}
              placeholder="Masukan Password"
              onChangeText={(text) => setPassword(text)}
              value={password}
              style={styles.textInput}
              secureTextEntry={true}
            />
          </View>
        </View>
        <Button
          onPress={isEditing ? handleSaveClick : handleEditClick}
          mode="contained"
        >
          {isEditing ? "Simpan" : "Edit"}
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 100,
    paddingHorizontal: 20,
    backgroundColor: "#F8F8F8",
  },
  profilePictureContainer: {
    padding: 5,
    borderRadius: 180,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    shadowOffset: { width: 5, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowColor: "#000",
  },
  nameContainer: {
    paddingVertical: 20,
    paddingHorizontal: 45,
    marginVertical: 20,
    backgroundColor: "#fff",
    borderRadius: 46,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  name: {
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
  },
  nip: {
    fontSize: 14,
    fontWeight: "200",
    textAlign: "center",
  },
  imageIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  formContainer: {
    minHeight: 200,
    paddingVertical: 40,
    paddingHorizontal: 20,
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
    marginBottom: 20,
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

export default ProfileScreen;
