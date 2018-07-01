import React from 'react';
import { connect } from 'react-redux';
import T from 'prop-types';

import ProfileDetails from '../components/ProfileDetails';
import EditProfileForm from '../components/Forms/EditProfileForm';
import { userActions } from '../modules/user';

const Profile = (props) => {
  const { updateProfile, closeEditProfile, isEditProfile } = props;

  function submit(values) {
    // print the form values to the console
    console.log(values);

    updateProfile(values);

    closeEditProfile();
  }

  return (
    isEditProfile
      ? <EditProfileForm {...props} onSubmit={submit} />
      : <ProfileDetails {...props} />
  );
};

const mapStateToProps = state => ({
  profile: state.user.profile.profile,
  isEditProfile: state.user.isEditProfile,
  initialValues: state.user.profile.profile,
});

const mapDispatchToProps = dispatch => ({
  updateProfile: profile => dispatch(userActions.updateProfile(profile)),
  openEditProfile: () => dispatch(userActions.openEditProfile()),
  closeEditProfile: () => dispatch(userActions.closeEditProfile()),
});

Profile.propTypes = {
  updateProfile: T.func.isRequired,
  closeEditProfile: T.func.isRequired,
  profile: T.objectOf(T.string).isRequired,
  isEditProfile: T.bool.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
