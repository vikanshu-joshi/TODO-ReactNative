import React, { useReducer, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableNativeFeedback,
  Alert,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Colors from "../Constants/Colors";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useDispatch } from "react-redux";
import * as TaskActions from "../store/actions/task";

const nameReducer = (state, action) => {
  return {
    ...state,
    name: action.text || state.name,
    error:
      action.text === undefined || action.text === "" ? "Name is empty" : "",
  };
};

const AddTaskScreen = (props) => {
  const [nameState, nameDispatcher] = useReducer(nameReducer, {
    name: "",
    error: "",
  });
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());
  const [pickerState, setPickerState] = useState({
    mode: "date",
    show: false,
  });
  const dispatch = useDispatch();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setPickerState({ mode: pickerState.mode, show: Platform.OS === "ios" });
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setPickerState({ mode: currentMode, show: true });
  };

  const validateTask = () => {
    if (nameState.name.length === 0) {
      Alert.alert("Error", "Enter a valid task name");
    } else {
      dispatch(
        TaskActions.addNewTask({
          title: nameState.name,
          description: description,
          date: date.toDateString(),
          time: formatAMPM(date),
        })
      );
      props.navigation.pop();
    }
  };

  return (
    <View style={styles.container}>
      <View style={[styles.input__holder, { maxWidth: "70%" }]}>
        <TextInput
          style={styles.input}
          placeholder="Task Name"
          placeholderTextColor="#5F5F5F"
          onChangeText={(value) => nameDispatcher({ text: value })}
        />
      </View>

      <View style={styles.input__holder}>
        <TextInput
          style={styles.input}
          placeholder="Description"
          placeholderTextColor="#5F5F5F"
          onChangeText={(value) => setDescription(value)}
        />
      </View>

      <View style={styles.input__container}>
        <TouchableNativeFeedback useForeground onPress={() => showMode("date")}>
          <View style={styles.input__holder}>
            <Text style={styles.input__pickers}>{date.toDateString()}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>

      <View style={styles.input__container}>
        <TouchableNativeFeedback useForeground onPress={() => showMode("time")}>
          <View style={styles.input__holder}>
            <Text style={styles.input__pickers}>{formatAMPM(date)}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>

      <TouchableNativeFeedback useForeground onPress={validateTask}>
        <View
          style={
            nameState.error === ""
              ? styles.btn__container
              : styles.btn__container_error
          }
        >
          <Text
            style={nameState.error === "" ? styles.input : styles.input__error}
          >
            {nameState.error === "" ? "Save" : nameState.error}
          </Text>
        </View>
      </TouchableNativeFeedback>
      {pickerState.show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={false}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: "white",
  },
  input__container: {
    flexDirection: "row",
  },
  input__holder: {
    backgroundColor: "#D5D5D5",
    marginBottom: 22,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 80,
    overflow: "hidden",
  },
  input: {
    fontSize: 18,
    color: "black",
  },
  input__error: {
    fontSize: 18,
    color: "white",
  },
  input__pickers: {
    fontSize: 18,
    color: "#5F5F5F",
  },
  btn__container: {
    width: "100%",
    backgroundColor: Colors.accent,
    marginBottom: 22,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 80,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  btn__container_error: {
    width: "100%",
    backgroundColor: "red",
    marginBottom: 22,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 80,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
});

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

export default AddTaskScreen;
