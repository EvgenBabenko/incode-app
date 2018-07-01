import React, { Component } from 'react';
import { connect } from 'react-redux';
import T from 'prop-types';

import NoItems from '../components/NoItems';
import TaskList from '../components/TaskList';

import { dashboardActions } from '../modules/dashboard';
import * as mock from '../fixtures';

class Dashboard extends Component {
  // componentDidMount() {
  //   const { taskList, userID } = this.props;

  //   if (taskList.length) return;



  //   this.getDashboard(userID);
  // }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.isLogin !== prevProps.isLogin) {
      // this.fetchData(this.props.userID);
      this.getDashboard(this.props.userID);
    }
  }

  getDashboard = (userID) => {
    const { loadDashboard } = this.props;

    const dashboard = Object.values(mock.task).filter(task => task.createdForID === userID);

    console.log('dashboard', dashboard)

    loadDashboard(dashboard);
  }

  submitCallback = (values, taskID) => {
    const { addTask, isEditTask, updateTask } = this.props;
    // print the form values to the console
    console.log('submit',values, isEditTask, taskID);

    isEditTask ? updateTask(taskID, values) : addTask(values);


    // closeEditProfile();
  }

  // submit = (values) => {
  //   const { addTask } = this.props;

  //   // print the form values to the console
  //   console.log(values);

  //   addTask(values);

  //   // this.cancelEditProfile();
  // }

  render() {
    const { taskList, isLogin } = this.props;

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
  isLogin: T.bool.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
