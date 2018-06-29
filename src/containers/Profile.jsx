import React, { Component } from 'react';
import { connect } from 'react-redux';
import T from 'prop-types';

import ProfileDetail from '../components/ProfileDetail';
import ProfileEdit from '../components/ProfileEdit';
// import fixtures from '../fixtures.json';
import { userActions } from '../modules/user';

class ProfileWrapper extends Component {
  state = {
    isEditProfile: false
  }

  toggleEditProfile = () => {
    this.setState({ isEditProfile: !this.state.isEditProfile });
  }

  cancelEditProfile = () => {
    this.setState({ isEditProfile: false });
  }

  submit = (values) => {
    const { editProfile } = this.props;

    // print the form values to the console
    console.log(values);

    editProfile(values);

    this.cancelEditProfile();
  }

  render() {
    const { profile } = this.props;
    const { isEditProfile } = this.state;

    if (profile && isEditProfile) {
      return <ProfileEdit {...this.props} onSubmit={this.submit} cancelEditProfile={this.cancelEditProfile} />
    } else if (profile) {
      return <ProfileDetail {...this.props} toggleEditProfile={this.toggleEditProfile} />
    }
  }
}

const mapStateToProps = state => ({
  profile: state.user.profile,
  initialValues: state.user.profile,
});

const mapDispatchToProps = dispatch => ({
  editProfile: profile => dispatch(userActions.editProfile(profile))
});

ProfileWrapper.propTypes = {
  editProfile: T.func.isRequired,
  profile: T.objectOf(T.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileWrapper);
