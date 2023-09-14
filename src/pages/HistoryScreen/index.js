import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import SearchByDate from "../../components/SearchByDate";
import { SafeAreaView } from "react-native";
import HistoryList from "../../components/HistoryList";

const HistoryScreen = () => {
  const [date, setDate] = useState({
    startDate: undefined,
    endDate: undefined,
  });
  useEffect(() => {
    console.log(date);
  }, [date]);
  return (
    <SafeAreaView style={styles.page}>
      <SearchByDate onValueChange={(e) => setDate(e)} />
      <HistoryList />
    </SafeAreaView>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    height: "100%",
    width: "100%",
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: "#F8F8F8",
  },
});
