import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import T from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const styles = {
  link: {
    textDecoration: 'none',
    '&:focus': {
      outline: 'none',
    }
  },
};

class UserMenu extends Component {
  state = {
    anchorEl: null,
  };

  handleOpenMenu = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleCloseMenu = () => {
    this.setState({ anchorEl: null });
  };

  handleLogout = () => {
    const { userLogout } = this.props;

    userLogout();

    this.handleCloseMenu();
  }

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
        <IconButton
          aria-owns={open ? 'menu-appbar' : null}
          aria-haspopup="true"
          onClick={this.handleOpenMenu}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          onClose={this.handleCloseMenu}
        >
          <Link to="/profile" className={classes.link}>
            <MenuItem onClick={this.handleCloseMenu}>
              Profile
            </MenuItem>
          </Link>
          <MenuItem onClick={this.handleLogout}>
            Logout
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

UserMenu.propTypes = {
  userLogout: T.func.isRequired,
  classes: T.objectOf(T.object)
};

UserMenu.defaultProps = {
  classes: null
};

export default withStyles(styles)(UserMenu)