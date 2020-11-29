import * as TaskActions from "../actions/task";

const initialState = {
  allTasks: [],
  completedTasks: [],
};

const TaskReducer = (state = initialState, action) => {
  if (action.type === TaskActions.ADD_TASK) {
    state.allTasks.push({
      id: makeid(5),
      title: action.task.title,
      description: action.task.description,
      date: action.task.date,
      time: action.task.time,
    });
  } else if (action.type === TaskActions.COMPLETE_TASK) {
    const newTask = state.allTasks.find((t) => t.id === action.id);
    state.allTasks = state.allTasks.filter((item) => item !== action.id);
  } else if (action.type === TaskActions.DELETE_TASK) {
    state.allTasks = state.allTasks.filter((item) => item !== action.id);
    state.completedTasks = state.allTasks.filter((item) => item !== action.id);
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
