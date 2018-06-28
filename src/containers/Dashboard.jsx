import React, { Component } from 'react';
import { connect } from 'react-redux';

import DoneIcon from '@material-ui/icons/Done';

import TaskList from '../components/TaskList';
import NoItems from '../components/NoItems';
import { dashboardActions } from '../modules/dashboard';
import * as mock from '../fixtures';

class Dashboard extends Component {
  componentDidMount() {
    const { taskList } = this.props;

    console.log(taskList, !!taskList)

    if (taskList.length) return;

    this.getDashboard()
  }

  getDashboard = () => {
    this.props.loadDashboard(mock.dashboard)
  }

  render() {
    const { taskList, isLogin } = this.props;

    return(
      !isLogin
        ? <NoItems text={'Please login for more'}/>
        : taskList.length
          ? <TaskList {...this.props} />
          : <NoItems text={'No tasks for today'} children={<DoneIcon />}/>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
