import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProfileDetail from '../components/ProfileDetail';
import fixtures from '../fixtures.json';
import { userActions } from '../modules/user';

class ProfileWrapper extends Component {
  componentDidMount() {
    const { profile, loadProfile } = this.props;

    if (profile) return;

    loadProfile(fixtures);
  }

  render() {
    const { profile } = this.props;

    return (
      profile
        ? <ProfileDetail {...this.props} />
        : null
    );
  }
}

const mapStateToProps = state => ({
  profile: state.user.profile,
});

const mapDispatchToProps = dispatch => ({
  loadProfile: profile => dispatch(userActions.loadProfile(profile)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileWrapper);
