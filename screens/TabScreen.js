import React, { useEffect } from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import HomeScreen from "./Home";
import CompletedScreen from "./Completed";
import Colors from "../Constants/Colors";
import { View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const Tab = createMaterialBottomTabNavigator();

const TabScreen = (props) => {
  const allTasks = useSelector((state) => state.tasks.allTasks);
  const completedTasks = useSelector((state) => state.tasks.completedTasks);

  useEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <View style={{ marginEnd: 16 }}>
          <TouchableWithoutFeedback
            onPress={() => props.navigation.push("AddTask")}
          >
            <Entypo name="add-to-list" size={24} color="white" />
          </TouchableWithoutFeedback>
        </View>
      ),
    });
  }, []);

  return (
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
      })}
    >
      <Tab.Screen
        name="Tasks"
        component={HomeScreen}
        options={
          allTasks.length === 0
            ? { tabBarColor: Colors.primary, title: "Upcoming Tasks" }
            : {
                tabBarBadge: allTasks.length,
                tabBarColor: Colors.primary,
                title: "Upcoming Tasks",
              }
        }
      />
      <Tab.Screen
        name="Completed"
        component={CompletedScreen}
        options={
          completedTasks.length === 0
            ? { tabBarColor: Colors.primary, title: "Completed Tasks" }
            : {
                tabBarBadge: completedTasks.length,
                tabBarColor: Colors.primary,
                title: "Completed Tasks",
              }
        }
      />
    </Tab.Navigator>
  );
};

export default TabScreen;
