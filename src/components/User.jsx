import React from 'react';
import T from 'prop-types';

import Button from '@material-ui/core/Button';

import UserMenu from './UserMenu';

const User = (props) => {
  const { isLogin, authorization } = props;

  return (
    <React.Fragment>
      {!isLogin
        ? (
          <Button onClick={authorization} color="inherit">
            Login
          </Button>
        )
        : <UserMenu {...props} />
      }
    </React.Fragment>
  );
};

User.propTypes = {
  isLogin: T.bool.isRequired,
  authorization: T.func.isRequired
};

export default User;
