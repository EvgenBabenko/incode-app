import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import T from 'prop-types';

import TaskList from '../components/TaskList';

import * as dashboardActionCreators from '../actions/dashboardActions';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = props;

    this.boundActionCreators = bindActionCreators(dashboardActionCreators, dispatch);
  }

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(dashboardActionCreators.fetchDashboard());
  }

  // componentDidUpdate(prevProps) {
  //   const { isLogin, userID } = this.props;
  //   // Typical usage (don't forget to compare props):
  //   if (isLogin !== prevProps.isLogin) {
  //     // this.fetchData(userID);
  //     this.getDashboard(userID);
  //   }
  // }

  render() {
    return (
      <TaskList
        {...this.props}
        {...this.boundActionCreators}
      />
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
  dispatch: T.func.isRequired,
  taskList: T.arrayOf(T.object).isRequired,
  isLogin: T.bool.isRequired,
  isEditTask: T.bool.isRequired,
  userID: T.number,
};

Dashboard.defaultProps = {
  userID: null,
};

export default connect(mapStateToProps)(Dashboard);
