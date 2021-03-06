import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import ListTile from "../Components/ListTile";
import * as TaskActions from "../store/actions/task";
import { useDispatch } from "react-redux";

const HomeScreen = ({ navigation }) => {
  //getting state from redux
  const allTasks = useSelector((state) => state.tasks.allTasks);
  const dispatch = useDispatch();
  const deleteTask = (id) => {
    dispatch(TaskActions.deleteTask(id));
  };
  const completeTask = (id) => {
    dispatch(TaskActions.completeTask(id));
  };

  //if no tasks then return text placeholder else return flatlist
  return allTasks.length === 0 ? (
    <View style={styles.container}>
      <Text style={styles.placeholder}>No upcoming tasks</Text>
    </View>
  ) : (
    <FlatList
      style={{ marginTop: 8 }}
      data={allTasks}
      renderItem={(itemData) => (
        <ListTile
          title={itemData.item.title}
          subtitle={`${itemData.item.date} - ${itemData.item.time}`}
          completed={false}
          failed={itemData.item.timestamp <= new Date().getTime()}
          onDelete={() => deleteTask(itemData.item.id)}
          onMarkComplete={() => completeTask(itemData.item.id)}
          onPress={() => navigation.push("Task", { task: itemData.item })}
        />
      )}
    />
  );
};

//styles for views
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  placeholder: {
    fontSize: 22,
    color: "black",
  },
});

export default HomeScreen;
