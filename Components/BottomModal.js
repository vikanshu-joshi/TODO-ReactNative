import React, { useState } from "react";
import {
  Image,
  Modal,
  Text,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import AppTextInput from "../Components/AppTextInput";
import { Octicons, SimpleLineIcons } from "@expo/vector-icons";

function BottomModal({ visible, setVisibility }) {
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View
        style={{
          bottom: 0,
          left: 0,
          right: 0,
          position: "absolute",
          backgroundColor: "red",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Image
          style={styles.backgroundImage}
          source={require("../assets/home_top.png")}
        />
        <View style={styles.appBar}>
          <TouchableWithoutFeedback
            onPress={() => {
              setVisibility(!visible);
            }}
          >
            <Text style={styles.appBarBtn}>Cancel</Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <Text
              style={styles.appBarBtn}
              onPress={() => {
                setVisibility(!visible);
              }}
            >
              Done
            </Text>
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.bodyMain}>
          <Text style={styles.head}>{`Create \nNew Task`}</Text>
          <AppTextInput
            placeholder="Task Name"
            label="Name"
            barColor="darker"
            editable={true}
          />
        </View>

        <View style={styles.bodyBottom}>
          <View>
            <Text style={styles.label}>Date</Text>
            <View style={styles.inputTextHolder}>
              <TextInput
                editable={false}
                style={styles.textInputDark}
                placeholder="dd/mm/yyyy"
              />
              <Octicons name="calendar" size={24} color="purple" />
            </View>
          </View>
          <View>
            <Text style={styles.label}>Time</Text>
            <View style={styles.inputTextHolder}>
              <TextInput
                editable={false}
                style={styles.textInputDark}
                placeholder="hh:mm"
              />
              <SimpleLineIcons name="clock" size={24} color="purple" />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  appBar: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  appBarBtn: {
    padding: 16,
    fontSize: 15,
    fontWeight: "bold",
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
  bodyMain: {
    paddingTop: 16,
    paddingHorizontal: 32,
  },
  head: {
    fontSize: 30,
    marginBottom: 24,
  },
  bodyBottom: {
    backgroundColor: "white",
    borderTopStartRadius: 32,
    borderTopEndRadius: 32,
    marginTop: 16,
    padding: 32,
  },
  bodyTextInput: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
  },
  inputTextHolder: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    borderBottomColor: "#DADADA",
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  textInputDark: {
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

export default BottomModal;
