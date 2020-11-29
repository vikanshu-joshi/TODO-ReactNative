import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import HomeScreen from "./Home";
import CompletedScreen from "./Completed";
import Colors from "../Constants/Colors";

const Tab = createMaterialBottomTabNavigator();

const TabScreen = (props) => {
  const TaskState = useSelector((state) => state.tasks);
  return (
    <NavigationContainer>
      <Tab.Navigator
        activeColor="#FFFFFF"
        inactiveColor="#D5D5D5"
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
          options={
            TaskState.allTasks.length === 0
              ? { tabBarColor: Colors.primary }
              : {
                  tabBarBadge: TaskState.allTasks.length,
                  tabBarColor: Colors.primary,
                }
          }
        />
        <Tab.Screen
          name="Completed"
          component={CompletedScreen}
          options={
            TaskState.completedTasks.length === 0
              ? { tabBarColor: Colors.primary }
              : {
                  tabBarBadge: TaskState.completedTasks.length,
                  tabBarColor: Colors.primary,
                }
          }
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabScreen;
