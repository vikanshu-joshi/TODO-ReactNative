import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ParticularTask = ({ route, navigation }) => {
  const task = route.params.task;
  return (
    <View style={styles.container}>
      {task.description !== "" && (
        <Text style={styles.description}>{task.description}</Text>
      )}
      <View style={styles.divider}></View>
      <Text style={styles.description}>{`Added On: ${new Date(
        task.added
      ).toDateString()} - ${formatAMPM(new Date(task.added))}`}</Text>
      <View style={styles.divider}></View>
      <Text style={styles.description}>{`Scheduled date: ${task.date}`}</Text>
      <View style={styles.divider}></View>
      <Text style={styles.description}>{`Scheduled time: ${task.time}`}</Text>
      <View style={styles.divider}></View>
      {task.completedTimeStamp && (
        <View>
          <Text
            style={styles.description}
          >{`Marked completed on: \n\n${new Date(
            task.completedTimeStamp
          ).toDateString()} - ${formatAMPM(
            new Date(task.completedTimeStamp)
          )}`}</Text>
          <View style={styles.divider} />
        </View>
      )}
    </View>
  );
};

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  description: {
    fontSize: 18,
    marginBottom: 3,
  },
  divider: {
    height: 1,
    width: "100%",
    backgroundColor: "#D5D5D5",
    marginVertical: 16,
  },
});

export default ParticularTask;
