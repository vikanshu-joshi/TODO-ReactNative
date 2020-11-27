import React from "react";
import { StyleSheet, TextInput, Text, View } from "react-native";

function AppTextInput({ placeholder, label, barColor, styling, editable }) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        editable={editable}
        style={[
          { ...styling },
          barColor === "dark" ? styles.textInputDark : styles.textInputDarker,
        ]}
        placeholder={placeholder}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    marginBottom: 5,
  },
  textInputDark: {
    borderBottomColor: "#DADADA",
    borderBottomWidth: 1,
    borderBottomEndRadius: 8,
    borderBottomStartRadius: 8,
    fontSize: 18,
    color: "black",
    paddingBottom: 4,
  },
  textInputDarker: {
    borderBottomColor: "#929292",
    borderBottomWidth: 1,
    borderBottomEndRadius: 8,
    borderBottomStartRadius: 8,
    fontSize: 18,
    color: "black",
    paddingBottom: 4,
  },
});

export default AppTextInput;
