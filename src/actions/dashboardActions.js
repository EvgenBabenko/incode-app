import dashboardTypes from '../constants/dashboardTypes';
import services from '../services';

const dashboardRequest = () => ({ type: dashboardTypes.DASHBOARD_REQUEST });
const dashboardSuccess = dashboard => ({ type: dashboardTypes.DASHBOARD_SUCCESS, dashboard });
const dashboardFailure = () => ({ type: dashboardTypes.DASHBOARD_FAILURE });

export const fetchDashboard = () => (dispatch) => {
  dispatch(dashboardRequest());

  services.dashboardService.fetchDashboard()
    .then(
      data => dispatch(dashboardSuccess(data)),
      error => dispatch(dashboardFailure())
    );
};

const taskDetailsSuccess = taskDetails => ({ type: dashboardTypes.TASK_DETAILS_SUCCESS, taskDetails });
const taskDetailsFailure = () => ({ type: dashboardTypes.TASK_DETAILS_FAILURE });

export const fetchTask = id => (dispatch) => {
  dispatch(dashboardRequest());

  services.dashboardService.fetchTask(id)
    .then(
      data => dispatch(taskDetailsSuccess(data)),
      error => dispatch(taskDetailsFailure())
    );
};

export const addItem = payload => ({
  type: dashboardTypes.ADD_TASK,
  payload
});

export const addTask = payload => (dispatch) => {
  services.dashboardService.addTask(payload)
    .then(() => dispatch(fetchDashboard()));
};

export const updateTask = (id, payload) => (dispatch) => {
  services.dashboardService.updateTask(id, payload)
    .then(() => dispatch(fetchDashboard()))
    .then(() => dispatch(fetchTask(id)));
};

export const deleteTask = id => (dispatch) => {
  services.dashboardService.deleteTask(id)
    .then(() => dispatch(fetchDashboard()));
};

export const openEditTask = () => ({
  type: dashboardTypes.OPEN_EDIT_TASK
});

export const closeEditTask = () => ({
  type: dashboardTypes.CLOSE_EDIT_TASK
});
