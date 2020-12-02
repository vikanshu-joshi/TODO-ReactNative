import React from "react";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import AppNavigator from "./AppNavigator";
import TaskReducer from "./store/reducers/task";
import { LogBox } from "react-native";

const rootReducer = combineReducers({
  tasks: TaskReducer,
});

const store = createStore(rootReducer);

const App = () => {
  LogBox.ignoreAllLogs();
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
