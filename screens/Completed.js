import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const CompletedScreen = () => {
  const TaskState = useSelector((state) => state.tasks);
  return TaskState.completedTasks.length === 0 ? (
    <View style={styles.container}>
      <Text style={styles.placeholder}>No tasks completed so far</Text>
    </View>
  ) : (
    <View>
      <Text>{TaskState.completedTasks.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  placeholder: {
    fontSize: 22,
    color: "black",
  },
});

export default CompletedScreen;
