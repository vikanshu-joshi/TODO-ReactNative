import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>All Tasks</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
});

export default HomeScreen;
