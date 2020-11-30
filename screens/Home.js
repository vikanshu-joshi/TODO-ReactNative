import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import ListTile from "../Components/ListTile";
import * as TaskActions from "../store/actions/task";
import { useDispatch } from "react-redux";

const HomeScreen = () => {
  const allTasks = useSelector((state) => state.tasks.allTasks);
  const dispatch = useDispatch();
  const deleteTask = (id) => {
    dispatch(TaskActions.deleteTask(id));
  };
  const completeTask = (id) => {
    dispatch(TaskActions.completeTask(id));
  };

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
          onDelete={() => deleteTask(itemData.item.id)}
          onMarkComplete={() => completeTask(itemData.item.id)}
        />
      )}
    />
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

export default HomeScreen;
