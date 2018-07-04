import React, { Component } from 'react';
import { connect } from 'react-redux';
import T from 'prop-types';

import LoginForm from '../components/Forms/LoginForm';

import * as userActionCreators from '../actions/userActions';

class FakeRegister extends Component {
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
      <LoginForm onSubmit={this.submit} />
    );
  }
}

const mapStateToProps = state => ({
  isLogin: state.user.isLogin,
});

// FakeRegister.propTypes = {
//   userLogin: T.func.isRequired,
// };

export default connect(mapStateToProps)(FakeRegister);
