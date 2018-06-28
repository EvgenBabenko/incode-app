import React from 'react';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Auth from '../containers/Auth';

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
          <Link to="/">
            <Button color="default" children="Home" />
          </Link>
          <Typography variant="title" color="inherit" className={classes.flex}>
            InCode-App
          </Typography>
          <Auth />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(Header);
