import React, { Component } from 'react';
import { connect } from 'react-redux';
import T from 'prop-types';

import LoginForm from '../components/Forms/LoginForm';

import * as userActionCreators from '../actions/userActions';

class Login extends Component {
  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
  }

  submit(values) {
    const { dispatch } = this.props;

    dispatch(userActionCreators.login(values));
  }

  render() {
    return (
      <LoginForm onSubmit={this.submit} title="Please login" primaryTitle="Login" secondaryTitle="Register" action="/register" />
    );
  }
}

const mapStateToProps = state => ({
  isLogin: state.user.isLogin,
});

Login.propTypes = {
  dispatch: T.func.isRequired,
};

export default connect(mapStateToProps)(Login);
