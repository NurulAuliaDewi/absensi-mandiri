import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Button, TouchableRipple } from "react-native-paper";
import { DatePickerModal } from "react-native-paper-dates";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { format } from "date-fns";

export default function SearchByDate({ onValueChange }) {
  const [range, setRange] = React.useState({
    startDate: undefined,
    endDate: undefined,
  });
  const [rangeFormat, setRangeFormat] = React.useState({
    startDate: undefined,
    endDate: undefined,
  });
  const [open, setOpen] = React.useState(false);

  const onDismiss = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirm = React.useCallback(
    ({ startDate, endDate }) => {
      setOpen(false);
      setRange({ startDate, endDate });
    },
    [setOpen, setRange]
    // onValueChange(() => {
    //   if (range.startDate) {
    //     let startDate = format(new Date(range.startDate), "dd-MM-yyyy");
    //     let endDate = format(new Date(range.endDate), "dd-MM-yyyy");
    //     return { startDate, endDate };
    //   }
    // })
  );

  useEffect(() => {
    onValueChange(() => {
      let startDate = undefined;
      let endDate = undefined;

      if (range.startDate) {
        startDate = format(new Date(range.startDate), "dd-MM-yyyy");
      }
      if (range.endDate) {
        endDate = format(new Date(range.endDate), "dd-MM-yyyy");
      }
      setRangeFormat({ startDate, endDate });

      return { startDate, endDate };
    });
  }, [range]);

  return (
    <View>
      {/* <View style={{ justifyContent: "center", flex: 1, alignItems: "center" }}> */}
      <View style={{ flexDirection: "row" }}>
        <TouchableRipple onPress={() => setOpen(true)} style={styles.input}>
          <Text style={styles.inputText}>
            {range.startDate
              ? rangeFormat.startDate + " - " + rangeFormat.endDate
              : "Cari Berdasarkan Tanggal"}
          </Text>
        </TouchableRipple>
        <Button
          onPress={() =>
            setRange({
              startDate: undefined,
              endDate: undefined,
            })
          }
        >
          Clear
        </Button>
      </View>
      <DatePickerModal
        locale="en"
        mode="range"
        visible={open}
        onDismiss={onDismiss}
        startDate={range.startDate}
        endDate={range.endDate}
        onConfirm={onConfirm}
      />
      {/* </View> */}
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
  },
  input: {
    padding: 10,
    paddingLeft: 15,
    flex: 3, // Menggunakan 75% dari lebar
    borderRadius: 30, // Gaya rounded
    marginRight: 8, // Jarak antara elemen
    borderWidth: 1,
    backgroundColor: "#fff",
    borderColor: "#000",
  },
  inputText: {
    fontWeight: "600",
    // marginTop: 10,
  },
});
