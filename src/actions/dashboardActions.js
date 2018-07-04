import axios from 'axios';

import config from '../config';
import dashboardTypes from '../constants/dashboardTypes';

axios.defaults.baseURL = config.AXIOS_URL;

export const requestTasks = () => ({
  type: dashboardTypes.REQUEST_TASKS
});

export const reseiveTasks = payload => ({
  type: dashboardTypes.RECEIVE_TASKS,
  payload,
});

export const reseiveTask = payload => ({
  type: dashboardTypes.RECEIVE_TASK,
  payload,
});

export const fetchTasks = () => (dispatch) => {
  dispatch(requestTasks());

  axios.get('/')
    .then(({ data }) => dispatch(reseiveTasks(data)));
};

export const fetchTask = id => (dispatch) => {
  dispatch(requestTasks());

  axios.get(`/${id}`)
    .then(({ data }) => dispatch(reseiveTask(data)));
};

export const addItem = payload => ({
  type: dashboardTypes.ADD_TASK,
  payload
});

export const addTask = payload => (dispatch) => {
  axios.post('/', { ...payload })
    .then(() => dispatch(fetchTasks()));
};

// export const updateTask = (id, payload) => ({
//   type: dashboardTypes.UPDATE_TASK,
//   id,
//   payload,
// });

export const updateTask = (id, payload) => (dispatch) => {
  axios.put(`/${id}`, { ...payload })
    .then(() => dispatch(fetchTasks()))
    .then(() => dispatch(fetchTask()));
};

// export const deleteTask = id => ({
//   type: dashboardTypes.DELETE_TASK,
//   id,
// });

export const deleteTask = id => (dispatch) => {
  axios.delete(`/${id}`)
    .then(() => dispatch(fetchTasks()));
};

// export const changeTaskStatus = (id, payload) => ({
//   type: dashboardTypes.CHANGE_TASK_STATUS,
//   id,
//   payload,
// });

export const openEditTask = () => ({
  type: dashboardTypes.OPEN_EDIT_TASK
});

export const closeEditTask = () => ({
  type: dashboardTypes.CLOSE_EDIT_TASK
});
