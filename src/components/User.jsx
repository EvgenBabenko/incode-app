import React from 'react';
import Button from '@material-ui/core/Button';
import UserMenu from './UserMenu';

export default (props) => {
    const { userLogin, isLogin } = props

    return (
        <React.Fragment>
            {!isLogin
                ? <Button onClick={userLogin} color="inherit" children="Login" />
                : <UserMenu {...props} />
            }
        </React.Fragment>
    )
}