import React, { Component } from 'react';
import { connect } from 'react-redux'

import TaskList from '../components/TaskList'
import { dashboardActions } from '../modules/dashboard'

const TaskListWrapper = (props) => {
    console.log(props)
    return (
        <TaskList {...props} />
    )
}

const mapStateToProps = (state) => ({
    dashboard: state.dashboard.tasks
})

const mapDispatchToProps = dispatch => ({
    deleteTask: id => dispatch(dashboardActions.deleteTask(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskListWrapper)