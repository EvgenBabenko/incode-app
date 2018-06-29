import React, { Component } from 'react';
import { connect } from 'react-redux';
import T from 'prop-types';

import { userActions } from '../modules/user';
import User from '../components/User';
import * as mock from '../fixtures';

class UserContainer extends Component {
  authorization = () => {
    const { userLogin, loadProfile } = this.props;

    userLogin();

    loadProfile(mock.userProfile);
  }

  render() {
    return <User {...this.props} authorization={this.authorization} />;
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

UserContainer.propTypes = {
  userLogin: T.func.isRequired,
  loadProfile: T.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
