import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import DoneIcon from '@material-ui/icons/Done';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
};

const EmptyTaskList = ({ classes }) => (
  <div className={classes.root}>
    <DoneIcon />
    <p>
      No tasks for today
    </p>
  </div>
);

export default withStyles(styles)(EmptyTaskList);
