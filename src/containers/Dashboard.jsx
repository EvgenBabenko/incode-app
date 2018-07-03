import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import T from 'prop-types';

import NoItems from '../components/NoItems';
import TaskList from '../components/TaskList';

// import { dashboardActions } from '../modules/dashboard';
import * as dashboardActionCreators from '../modules/dashboard/actions';
import * as mock from '../fixtures';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = props;

    this.boundActionCreators = bindActionCreators(dashboardActionCreators, dispatch);

    this.getDashboard = this.getDashboard.bind(this);
    // this.submitCallback = this.submitCallback.bind(this);
  }

  componentDidMount() {
    const { taskList, userID } = this.props;

    const { dispatch } = this.props;

    // fetchTasks();
    const fetchTasks = dashboardActionCreators.fetchTasks();
    dispatch(fetchTasks);

    // if (taskList.length) return;


    // this.getDashboard(userID);
  }

  // componentDidUpdate(prevProps) {
  //   const { isLogin, userID } = this.props;
  //   // Typical usage (don't forget to compare props):
  //   if (isLogin !== prevProps.isLogin) {
  //     // this.fetchData(userID);
  //     this.getDashboard(userID);
  //   }
  // }

  getDashboard(userID) {
    const { loadDashboard } = this.props;

    const dashboard = Object.values(mock.task).filter(task => task.createdForID === userID);

    loadDashboard(dashboard);
  }

  // submitCallback(values, taskID) {
  //   const {
  //     isEditTask, userID
  //   } = this.props;

  //   const { dispatch } = this.props;
  //   // print the form values to the console

  //   if (isEditTask) {
  //     // updateTask(taskID, values);
  //     const updateTask = dashboardActionCreators.updateTask(taskID, values);
  //     dispatch(updateTask);
  //   }
  //   // } else {
  //   //   // addTask({ ...values, userID });
  //   //   const addTask = dashboardActionCreators.addTask({ ...values });
  //   //   dispatch(addTask);
  //   // }
  // }

  render() {
    const { isLogin } = this.props;

    return (
      !isLogin
        ? <NoItems text="Please login for more" />
        : (
          <TaskList
            {...this.props}
            {...this.boundActionCreators}
          />
        )
    );
  }
}

const mapStateToProps = state => ({
  userID: state.user.userID,
  isLogin: state.user.isLogin,
  taskList: state.dashboard.taskList,
  isEditTask: state.dashboard.isEditTask,
});

// const mapDispatchToProps = dispatch => ({
//   loadDashboard: dashboard => dispatch(dashboardActions.loadDashboard(dashboard)),
//   addTask: task => dispatch(dashboardActions.addTask(task)),
//   updateTask: (id, task) => dispatch(dashboardActions.updateTask(id, task)),
//   deleteTask: id => dispatch(dashboardActions.deleteTask(id)),
//   changeTaskStatus: (id, status) => dispatch(dashboardActions.changeTaskStatus(id, status)),
//   openEditTask: () => dispatch(dashboardActions.openEditTask()),
//   closeEditTask: () => dispatch(dashboardActions.closeEditTask()),
//   fetchTasks: () => dispatch(dashboardActions.fetchTasks()),
// });

Dashboard.propTypes = {
  // loadDashboard: T.func.isRequired,
  taskList: T.arrayOf(T.object).isRequired,
  isLogin: T.bool.isRequired,
  isEditTask: T.bool.isRequired,
  // addTask: T.func.isRequired,
  // updateTask: T.func.isRequired,
  userID: T.number,
};

Dashboard.defaultProps = {
  userID: null,
};

export default connect(mapStateToProps)(Dashboard);
