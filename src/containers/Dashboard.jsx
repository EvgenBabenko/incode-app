import React, { Component } from 'react';
import { connect } from 'react-redux';
import T from 'prop-types';

import NoItems from '../components/NoItems';
import TaskList from '../components/TaskList';

import { dashboardActions } from '../modules/dashboard';
import * as mock from '../fixtures';
import RestAPI from '../utils/RestAPI';

class Dashboard extends Component {
  // componentDidMount() {
  //   const { taskList, userID } = this.props;

  //   if (taskList.length) return;

  //   this.getDashboard(userID);
  // }

  componentDidUpdate(prevProps) {
    const { isLogin, userID } = this.props;
    // Typical usage (don't forget to compare props):
    if (isLogin !== prevProps.isLogin) {
      // this.fetchData(userID);
      this.getDashboard(userID);
    }
  }

  getDashboard = (userID) => {
    const { loadDashboard } = this.props;

    const dashboard = Object.values(mock.task).filter(task => task.createdForID === userID);

    console.log('dashboard', dashboard);

    loadDashboard(dashboard);
  }

  submitCallback = (values, taskID) => {
    const {
      addTask, isEditTask, updateTask, userID
    } = this.props;
    // print the form values to the console
    console.log('submit', values, isEditTask, taskID);

    if (isEditTask) {
      updateTask(taskID, values);
    } else {
      addTask({ ...values, userID });
    }
  }

  render() {
    console.log('restAPI', RestAPI('/fixtures/users.json'));
    const { isLogin } = this.props;

    return (
      !isLogin
        ? <NoItems text="Please login for more" />
        : <TaskList {...this.props} submitCallback={this.submitCallback} />
    );
  }
}

const mapStateToProps = state => ({
  userID: state.user.userID,
  isLogin: state.user.isLogin,
  taskList: state.dashboard.taskList,
  isEditTask: state.dashboard.isEditTask,
});

const mapDispatchToProps = dispatch => ({
  loadDashboard: dashboard => dispatch(dashboardActions.loadDashboard(dashboard)),
  addTask: task => dispatch(dashboardActions.addTask(task)),
  updateTask: (id, task) => dispatch(dashboardActions.updateTask(id, task)),
  deleteTask: id => dispatch(dashboardActions.deleteTask(id)),
  changeTaskStatus: (id, status) => dispatch(dashboardActions.changeTaskStatus(id, status)),
  openEditTask: () => dispatch(dashboardActions.openEditTask()),
  closeEditTask: () => dispatch(dashboardActions.closeEditTask()),
});

Dashboard.propTypes = {
  loadDashboard: T.func.isRequired,
  taskList: T.arrayOf(T.object).isRequired,
  isLogin: T.bool.isRequired,
  isEditTask: T.bool.isRequired,
  addTask: T.func.isRequired,
  updateTask: T.func.isRequired,
  userID: T.number,
};

Dashboard.defaultProps = {
  userID: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
