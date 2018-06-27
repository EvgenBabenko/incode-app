import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../modules/user';

import User from '../components/User';

const UserContainer = props => <User {...props} />;

const mapStateToProps = state => ({
  isLogin: state.user.isLogin,
});

const mapDispatchToProps = dispatch => ({
  userLogin: () => dispatch(userActions.userLogin()),
  userLogout: () => dispatch(userActions.userLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
