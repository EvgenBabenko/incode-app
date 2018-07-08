import axios from 'axios';
import config from '../config';

axios.defaults.baseURL = config.APIHost;

// const fetchDashboard = userID => axios.get(`/byUser/${userID}`).then(({ data }) => data);
const fetchDashboard = () => axios.get('/').then(({ data }) => data);

const fetchTask = id => axios.get(`/${id}`).then(({ data }) => data);

const addTask = payload => axios.post('/', { ...payload });

const updateTask = (id, payload) => axios.put(`/${id}`, { ...payload });

const deleteTask = id => axios.delete(`/${id}`);

export default {
  fetchDashboard,
  fetchTask,
  addTask,
  updateTask,
  deleteTask,
};
