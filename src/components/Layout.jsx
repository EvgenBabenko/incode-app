import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import Header from './Header';
import Routes from './Routes';

const styles = {
  container: {
    flexGrow: 1,
  },
};

const Layuot = () => (
  <React.Fragment>
    <Header />
    <Routes />
  </React.Fragment>
);

export default withStyles(styles)(Layuot);
