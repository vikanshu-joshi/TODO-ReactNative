import React, { useState } from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "./screens/Home";
import CompletedScreen from "./screens/Completed";
import { NavigationContainer } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { BottomNavigation, Text } from "react-native-paper";

const Tab = createMaterialBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        initialRouteName="Tasks"
        shifting={true}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Tasks") {
              iconName = "list";
            } else if (route.name === "Completed") {
              iconName = "check";
            }
            return <Entypo name={iconName} size={24} color={color} />;
          },
          tabBarColor: (data) => console.log(data),
        })}
      >
        <Tab.Screen
          name="Tasks"
          component={HomeScreen}
          options={{ tabBarBadge: 3, tabBarColor: "#607D8B" }}
        />
        <Tab.Screen
          name="Completed"
          component={CompletedScreen}
          options={{ tabBarBadge: 3, tabBarColor: "#3F51B5" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
