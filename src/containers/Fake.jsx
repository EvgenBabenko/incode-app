import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import T from 'prop-types';

import Sigin from '../components/Sigin';

import * as userActionCreators from '../actions/userActions';

class Fake extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = props;

    this.boundActionCreators = bindActionCreators(userActionCreators, dispatch);
  }

  render() {
    return (
      <Sigin
        {...this.props}
        {...this.boundActionCreators}
      />
    );
  }
}

const mapStateToProps = state => ({
  isLogin: state.user.isLogin,
});

// Fake.propTypes = {
//   userLogin: T.func.isRequired,
// };

export default connect(mapStateToProps)(Fake);
