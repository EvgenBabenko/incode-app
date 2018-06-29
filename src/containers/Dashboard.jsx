import React, { Component } from 'react';
import { connect } from 'react-redux';
import T from 'prop-types';

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

    this.getDashboard();
  }

  getDashboard = () => {
    const { loadDashboard } = this.props;

    loadDashboard(mock.dashboard);
  }

  render() {
    const { taskList, isLogin } = this.props;

    return (
      !isLogin
        ? <NoItems text="Please login for more" />
        : taskList.length
          ? <TaskList {...this.props} />
          : (
            <NoItems text="No tasks for today">
              {<DoneIcon />}
            </NoItems>
          )
    );
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

Dashboard.propTypes = {
  loadDashboard: T.func.isRequired,
  taskList: T.arrayOf(T.object).isRequired,
  isLogin: T.bool.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
