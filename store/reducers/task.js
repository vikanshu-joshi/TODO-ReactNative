import * as TaskActions from "../actions/task";

const initialState = {
  allTasks: [],
  completedTasks: [],
};

const TaskReducer = (state = initialState, action) => {
  console.log(action);
  if (action.type === TaskActions.ADD_TASK) {
    const newTask = {
      id: makeid(5),
      title: action.task.title,
      description: action.task.description,
      date: action.task.date,
      time: action.task.time,
      timestamp: action.task.timestamp,
    };
    return {
      ...state,
      allTasks: state.allTasks.concat(newTask),
      completedTasks: state.completedTasks,
    };
  } else if (action.type === TaskActions.COMPLETE_TASK) {
    const newTask = state.allTasks.find((t) => t.id === action.id);
    return {
      ...state,
      allTasks: state.allTasks.filter((item) => item.id !== action.id),
      completedTasks: state.completedTasks.concat(newTask),
    };
  } else if (action.type === TaskActions.DELETE_TASK) {
    return {
      ...state,
      allTasks: state.allTasks.filter((item) => item.id !== action.id),
      completedTasks: state.completedTasks.filter(
        (item) => item.id !== action.id
      ),
    };
  }
  return state;
};

function makeid(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export default TaskReducer;
