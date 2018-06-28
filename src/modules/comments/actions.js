import { dashboardTypes } from '.';

const addTask = payload => ({
  type: dashboardTypes.ADD_TASK,
  payload,
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

const loadDashboard = payload => ({
  type: dashboardTypes.LOAD_DASHBOARD,
  payload,
});

const changeTaskStatus = (id, payload) => ({
  type: dashboardTypes.CHANGE_TASK_STATUS,
  id,
  payload,
});

const getTaskDetails = id => ({
  type: dashboardTypes.GET_TASK_DETAIL,
  id,
});

export default {
  addTask,
  editTask,
  completeTask,
  deleteTask,
  loadDashboard,
  changeTaskStatus,
  getTaskDetails,
};
