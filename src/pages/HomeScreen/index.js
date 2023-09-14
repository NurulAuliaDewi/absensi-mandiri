import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Location from "expo-location";
import { Avatar } from "react-native-paper";
import dayjs from "dayjs";
import * as ImagePicker from "expo-image-picker";
import { format } from "date-fns";

const HomeScreen = () => {
  const [id, setId] = useState("1");
  const [date, setDate] = useState(dayjs());
  const [location, setLocation] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(dayjs());
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.error("Izin lokasi tidak diberikan");
        return;
      }
    })();
  }, []);

  const buttonClick = async () => {
    const location = await Location.getCurrentPositionAsync({});
    setLocation(location);
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      // allowsEditing: true,
      // aspect: [9, 16],
      quality: 0.5,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      const formData = new FormData();
      if (location) {
        formData.append("id", id);
        formData.append("lattitude", location.coords.latitude);
        formData.append("longitude", location.coords.longitude);
        formData.append("tanggal", date.format("DD-MMMM-YYYY"));
        formData.append("jam", date.format("HH:mm"));
        formData.append("image", {
          uri: image,
          type: "image/jpeg", // Ubah sesuai dengan jenis gambar yang Anda kirim.
          name: "gambar.jpg", // Nama file gambar yang akan dikirim.
        });
        console.log(formData);
      }
    }
  };

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hi, Farhan</Text>
        <View style={styles.profilePictureContainer}>
          <Avatar.Image
            size={40}
            source={require("./../../assets/unnamed.jpg")}
          />
        </View>
      </View>

      <View style={styles.body}>
        <Text style={styles.time}>{date.format("HH:mm")}</Text>
        <Text>{date.format("dddd, DD MMMM YYYY")}</Text>
        {/* 
        {image && (
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        )} */}

        <TouchableOpacity style={styles.button} onPress={buttonClick}>
          <Text style={styles.buttonText}>Check In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  page: {
    height: "100%",
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#F8F8F8",
  },
  header: {
    marginTop: 8,
    backgroundColor: "#f8f8f8",
    flex: 1,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 100,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 2, // Atur zIndex agar header ada di atas konten
    paddingVertical: 15, //
  },
  profilePictureContainer: {
    height: 35,
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
  greeting: {
    fontSize: 14,
    fontWeight: "600",
  },
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  time: {
    fontSize: 100,
  },
  button: {
    borderRadius: 180,
    maxHeight: 230,
    width: 230,
    flex: 1,
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    shadowOffset: {
      width: 12,
      height: 9,
    },
    shadowRadius: 35,
    shadowOpacity: 0.84,
    shadowColor: "#948E94", // Menambahkan warna bayangan
    elevation: 4,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: "600",
  },
});
