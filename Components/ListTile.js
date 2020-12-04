import React from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import {
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";

//custom component for showing tasks in list

const ListTile = ({
  title,
  subtitle,
  onDelete,
  onMarkComplete,
  completed,
  failed,
  onPress,
}) => {
  return (
    <View style={styles.card}>
      <View style={{ flexDirection: "column", flex: 1 }}>
        <TouchableWithoutFeedback style={{ width: "100%" }} onPress={onPress}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.actions}>
        {failed && (
          <TouchableNativeFeedback
            useForeground
            onPress={() => Alert.alert("Warning", "Task Deadline Reached")}
          >
            <Entypo style={styles.check} name="warning" size={24} color="red" />
          </TouchableNativeFeedback>
        )}
        {!completed && (
          <TouchableNativeFeedback useForeground onPress={onMarkComplete}>
            <Entypo style={styles.check} name="check" size={24} color="green" />
          </TouchableNativeFeedback>
        )}
        <TouchableNativeFeedback useForeground onPress={onDelete}>
          <Entypo name="trash" size={24} color="red" />
        </TouchableNativeFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 3,
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  subtitle: {
    color: "#5F5F5F",
    marginTop: 6,
    fontSize: 14,
  },
  check: {
    marginEnd: 16,
  },
  actions: {
    flexDirection: "row",
  },
});

export default ListTile;
