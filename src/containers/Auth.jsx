import React, { Component } from 'react';
import { connect } from 'react-redux';

import { userActions } from '../modules/user';
import User from '../components/User';
import * as mock from '../fixtures';

class UserContainer extends Component {
  authorization = () => {
    this.props.userLogin()

    this.props.loadProfile(mock.userProfile);
  }

  render() {
    return <User {...this.props} authorization={this.authorization}  />
  }
}

const mapStateToProps = state => ({
  isLogin: state.user.isLogin,
});

const mapDispatchToProps = dispatch => ({
  userLogin: () => dispatch(userActions.userLogin()),
  userLogout: () => dispatch(userActions.userLogout()),
  loadProfile: profile => dispatch(userActions.loadProfile(profile)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
