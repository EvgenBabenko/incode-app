import React, { Component } from 'react';
import { connect } from 'react-redux';
import T from 'prop-types';

import { userActions } from '../modules/user';
import User from '../components/User';
import * as mock from '../fixtures';

class Auth extends Component {
  authorization = () => {
    const { userLogin, loadProfile } = this.props;

    const userID = 2;

    userLogin(userID);

    loadProfile(mock.user[userID]);
  }

  render() {
    return <User {...this.props} authorization={this.authorization} />;
  }
}

const mapStateToProps = state => ({
  isLogin: state.user.isLogin,
});

const mapDispatchToProps = dispatch => ({
  userLogin: id => dispatch(userActions.userLogin(id)),
  userLogout: () => dispatch(userActions.userLogout()),
  loadProfile: profile => dispatch(userActions.loadProfile(profile)),
});

Auth.propTypes = {
  userLogin: T.func.isRequired,
  loadProfile: T.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
