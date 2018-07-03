import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import T from 'prop-types';

import User from '../components/User';

import * as userActionCreators from '../modules/user/actions';
import * as mock from '../fixtures';

class Auth extends Component {
  // static propTypes = {
  //   isLogin: React.PropTypes.string.isRequired,
  // };

  constructor(props) {
    super(props);

    const { dispatch } = props;

    this.boundActionCreators = bindActionCreators(userActionCreators, dispatch);

    this.authorization = this.authorization.bind(this);
  }

  // componentDidMount() {
  //   // Injected by react-redux:
  //   const { dispatch } = this.props;

  //   // Note: this won't work:
  //   // TodoActionCreators.addTodo('Use Redux')

  //   // You're just calling a function that creates an action.
  //   // You must dispatch the action, too!

  //   // This will work:
  //   const action = userActionCreators.addTodo('Use Redux');
  //   dispatch(action);
  // }

  authorization() {
    const { dispatch } = this.props;

    const userID = 2;

    const userLogin = userActionCreators.userLogin(userID);
    dispatch(userLogin);

    // userLogin(userID);

    const loadProfile = userActionCreators.loadProfile(mock.user[userID]);
    dispatch(loadProfile);

    // loadProfile(mock.user[userID]);
  }

  render() {
    return (
      <User
        {...this.props}
        authorization={this.authorization}
        {...this.boundActionCreators}
      />
    );
  }
}

const mapStateToProps = state => ({
  isLogin: state.user.isLogin,
});

// const mapDispatchToProps = dispatch => ({
//   userLogin: id => dispatch(userActions.userLogin(id)),
//   userLogout: () => dispatch(userActions.userLogout()),
//   loadProfile: profile => dispatch(userActions.loadProfile(profile)),
// });

Auth.propTypes = {
  userLogin: T.func.isRequired,
};

export default connect(mapStateToProps)(Auth);
