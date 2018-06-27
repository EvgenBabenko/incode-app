import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

import Task from './Task';

const styles = {
    taskList: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'start'
    },
};

const TaskList = (props) => {
    const { classes, dashboard } = props
    
    return (
        <div className={classes.root}>
            <List component="div" className={classes.taskList} >
                {dashboard.map((task) =>
                    <Task key={task.id} {...task} {...props} />
                )}
            </List>
        </div>
    )
}

export default withStyles(styles)(TaskList);