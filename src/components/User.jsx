import React from 'react';

import Button from '@material-ui/core/Button';

import UserMenu from './UserMenu';

export default (props) => {
  const { isLogin, authorization } = props;

  return (
    <React.Fragment>
      {!isLogin
        ? <Button onClick={authorization} color="inherit" children="Login" />
        : <UserMenu {...props} />
      }
    </React.Fragment>
  );
};
