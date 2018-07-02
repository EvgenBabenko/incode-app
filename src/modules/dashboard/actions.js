import axios from 'axios';

import dashboardTypes from './types';

axios.defaults.baseURL = 'http://localhost:3001/';

const newTask = payload => ({
  id: Date.now(),
  title: payload.title,
  description: payload.description,
  status: 'To do',
  createdAt: Date.now(),
  createdForID: payload.userID,
});

const requestTasks = payload => ({
  type: dashboardTypes.REQUEST_TASKS,
  payload
});

const reseiveTasks = payload => ({
  type: dashboardTypes.RECEIVE_TASKS,
  payload,
});

const loadDashboard = payload => ({
  type: dashboardTypes.LOAD_DASHBOARD,
  payload,
});

const addTask = payload => ({
  type: dashboardTypes.ADD_TASK,
  payload: newTask(payload),
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

const fetchTasks = () => (dispatch) => {
  dispatch(requestTasks());

  axios.get('/')
    .then(({ data }) => dispatch(reseiveTasks(data)));
};

export default {
  loadDashboard,
  addTask,
  updateTask,
  deleteTask,
  changeTaskStatus,
  openEditTask,
  closeEditTask,
  fetchTasks,
};
