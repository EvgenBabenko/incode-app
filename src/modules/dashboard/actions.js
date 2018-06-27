import { dashboardTypes } from '.';

const addTask = task => ({
  type: dashboardTypes.ADD_TASK,
  task,
});

const editTask = id => ({
  type: dashboardTypes.EDIT_TASK,
  id,
});

const completeTask = id => ({
  type: dashboardTypes.COMPLETE_TASK,
  id,
});

const deleteTask = id => ({
  type: dashboardTypes.DELETE_TASK,
  id,
});

export default {
  addTask,
  editTask,
  completeTask,
  deleteTask,
};
