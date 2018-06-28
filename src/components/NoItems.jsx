import React from 'react';

import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
};

const NoItems = ({ text, children, classes }) => (
  <div className={classes.root}>
    <p>
      {text}
    </p>
    {children}
  </div>
);

export default withStyles(styles)(NoItems);
