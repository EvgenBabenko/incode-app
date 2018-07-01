import React from 'react';
import T from 'prop-types';

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

NoItems.propTypes = {
  text: T.string,
  children: T.element,
  classes: T.objectOf(T.string)
};

NoItems.defaultProps = {
  text: '',
  children: null,
  classes: ''
};

export default withStyles(styles)(NoItems);
