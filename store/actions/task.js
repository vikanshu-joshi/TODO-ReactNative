export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const COMPLETE_TASK = "COMPLETE_TASK";

export const addNewTask = (task) => {
  return { type: ADD_TASK, task: task };
};

export const deleteTask = (id) => {
  return { type: DELETE_TASK, id: id };
};

export const completeTask = (id) => {
  return { type: COMPLETE_TASK, id: id };
};
