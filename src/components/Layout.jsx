import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import Header from './Header';
import Routing from './Routing';

const styles = {
  container: {
    flexGrow: 1,
  },
};

const Layuot = ({ classes }) => (
  <React.Fragment>
    <Header />
    <Routing />
  </React.Fragment>
);

export default withStyles(styles)(Layuot);
