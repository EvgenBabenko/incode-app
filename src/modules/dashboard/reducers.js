import { dashboardTypes } from '.';

const defaultState = {
  taskList: [],
  taskDetails: null,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case dashboardTypes.ADD_TASK:
      return state.taskList.concat(action.payload);
    case dashboardTypes.DELETE_TASK:
      const index = state.taskList.findIndex(task => task.id === action.id);

      return {
        ...state,
        taskList: [
          ...state.taskList.slice(0, index),
          ...state.taskList.slice(index + 1),
        ]
      };
    case dashboardTypes.LOAD_DASHBOARD:
      return {
        ...state,
        taskList: action.payload,
      };
    case dashboardTypes.CHANGE_TASK_STATUS:
      return {
        ...state,
        taskList: state.taskList.map(task => task.id === action.id ? { ...task, status: action.payload } : task),
      };
    case dashboardTypes.GET_TASK_DETAIL:
      return {
        ...state,
        taskDetails: state.taskList.find(task => task.id === action.id),
      };
    default:
      return state;
  }
};
