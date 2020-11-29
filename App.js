import React from "react";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import TabScreen from "./screens/TabScreen";
import TaskReducer from "./store/reducers/task";

const rootReducer = combineReducers({
  tasks: TaskReducer,
});

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <TabScreen />
    </Provider>
  );
};

export default App;
