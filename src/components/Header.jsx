import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

import UserContainer from '../containers/UserContainer';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const Header = (props) => {
  const { classes } = props

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/" className={classes.flex}>
            <Typography variant="title" color="inherit" children="Home" />
          </Link>
          <Typography variant="title" color="inherit" className={classes.flex} children="InCode-App" />
          <UserContainer />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(Header);
