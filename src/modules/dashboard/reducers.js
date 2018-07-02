import dashboardTypes from './types';

const initialState = {
  taskList: [],
  isEditTask: false,
  isFetching: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case dashboardTypes.LOAD_DASHBOARD:
      return {
        ...state,
        taskList: action.payload,
      };
    case dashboardTypes.ADD_TASK:
      return {
        ...state,
        taskList: state.taskList.concat(action.payload),
      };
    case dashboardTypes.UPDATE_TASK:
      return {
        ...state,
        taskList: state.taskList.map(task => (
          task.id === action.id
            ? {
              ...task,
              title: action.payload.title,
              description: action.payload.description
            }
            : task)),
      };
    case dashboardTypes.DELETE_TASK:
      return {
        ...state,
        taskList: state.taskList.filter(task => task.id !== action.id)
      };
    case dashboardTypes.CHANGE_TASK_STATUS:
      return {
        ...state,
        taskList: state.taskList.map(task => (
          task.id === action.id
            ? { ...task, status: action.payload }
            : task)),
      };
    case dashboardTypes.OPEN_EDIT_TASK:
      return {
        ...state,
        isEditTask: true
      };
    case dashboardTypes.CLOSE_EDIT_TASK:
      return {
        ...state,
        isEditTask: initialState.isEditTask,
      };
    default:
      return state;
  }
};
