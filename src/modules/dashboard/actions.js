import dashboardTypes from './types';

const loadDashboard = payload => ({
  type: dashboardTypes.LOAD_DASHBOARD,
  payload,
});

const addTask = payload => ({
  type: dashboardTypes.ADD_TASK,
  payload,
});

const updateTask = (id, payload) => ({
  type: dashboardTypes.UPDATE_TASK,
  id,
  payload,
});

const deleteTask = id => ({
  type: dashboardTypes.DELETE_TASK,
  id,
});

const changeTaskStatus = (id, payload) => ({
  type: dashboardTypes.CHANGE_TASK_STATUS,
  id,
  payload,
});

const openEditTask = () => ({
  type: dashboardTypes.OPEN_EDIT_TASK
});

const closeEditTask = () => ({
  type: dashboardTypes.CLOSE_EDIT_TASK
});

export default {
  loadDashboard,
  addTask,
  updateTask,
  deleteTask,
  changeTaskStatus,
  openEditTask,
  closeEditTask,
};
