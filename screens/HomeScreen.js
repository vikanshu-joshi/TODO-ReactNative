import React, { useState } from "react";
import {
  Alert,
  Button,
  Image,
  Modal,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import BottomModal from "../Components/BottomModal";

const HomeScreen = () => {
  const [modalVisible, setmodalVisible] = useState(false);
  return (
    <View>
      <BottomModal visible={modalVisible} setVisibility={setmodalVisible} />
      <Text style={{ marginTop: StatusBar.currentHeight }}>
        Press this button
      </Text>
      <Button
        title="Open Modal"
        onPress={() => {
          setmodalVisible(!modalVisible);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
