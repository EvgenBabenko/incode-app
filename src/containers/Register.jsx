import React, { Component } from 'react';
import { connect } from 'react-redux';
import T from 'prop-types';

import LoginForm from '../components/Forms/LoginForm';

import * as userActionCreators from '../actions/userActions';

class Register extends Component {
  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
  }

  submit(values) {
    const { dispatch } = this.props;
    console.log(this.props)

    dispatch(userActionCreators.register(values));
  }

  render() {
    return (
      <LoginForm onSubmit={this.submit} title="Please register" primaryTitle="Register" secondaryTitle="Login" action="/login" />
    );
  }
}

const mapStateToProps = state => ({
  isLogin: state.user.isLogin,
});

Register.propTypes = {
  dispatch: T.func.isRequired,
};

export default connect(mapStateToProps)(Register);
