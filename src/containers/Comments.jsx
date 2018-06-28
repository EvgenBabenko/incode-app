import React, { Component } from 'react';
import { connect } from 'react-redux';

import TaskList from '../components/TaskList';
import EmptyDashboard from '../components/EmptyDashboard';
import EmptyTaskList from '../components/EmptyTaskList';
import { dashboardActions } from '../modules/dashboard';
import * as mock from '../fixtures';

class Dashboard extends Component {
  componentDidMount() {
    const { taskList } = this.props;

    console.log(taskList, !!taskList)

    if (taskList.length) return;

    this.getDashboard(mock.dashboard)
  }

  getDashboard = () => {
    this.props.loadDashboard(mock.dashboard)
  }

  render() {
    const { taskList, isLogin } = this.props;

    return(
      !isLogin
        ? <EmptyDashboard />
        : taskList.length
          ? <TaskList {...this.props} />
          : <EmptyTaskList />
    )
  }
}

const mapStateToProps = state => ({
  taskList: state.dashboard.taskList,
  isLogin: state.user.isLogin,
});

const mapDispatchToProps = dispatch => ({
  deleteTask: id => dispatch(dashboardActions.deleteTask(id)),
  loadDashboard: dashboard => dispatch(dashboardActions.loadDashboard(dashboard)),
  changeTaskStatus: (id, status) => dispatch(dashboardActions.changeTaskStatus(id, status)),
  // getTaskDetails: id => dispatch(dashboardActions.getTaskDetails(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
