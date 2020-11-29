import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabScreen from "./screens/TabScreen";
import AddTaskScreen from "./screens/AddTask";
import Colors from "./Constants/Colors";
import { Platform } from "react-native";

const AppNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TabScreen"
        screenOptions={{
          headerStyle: {
            backgroundColor: Platform.OS === "android" ? Colors.primary : "",
          },
          headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
        }}
      >
        <Stack.Screen
          name="TabScreen"
          component={TabScreen}
          options={{
            headerTitle: "DoneWithIt",
          }}
        />
        <Stack.Screen
          name="AddTask"
          component={AddTaskScreen}
          options={{ headerTitle: "Add New Task" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
