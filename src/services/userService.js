// import { authHeader } from '../_helpers';

import axios from 'axios';
import config from '../config';

axios.defaults.baseURL = config.AXIOS_URL;

const register = (payload) => {
  return axios.post('/auth/register', { ...payload })
    .then((user) => {
      console.log('register', user);
      // login successful if there's a jwt token in the response
      if (user.data.token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user.data));
      }

      return user;
    });
};


// token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViM2RjNTQ5MzUwZDZlMmE3ZDg3NzE3NCIsImlhdCI6MTUzMDc3NDg1NywiZXhwIjoxNTMwODYxMjU3fQ.T2aoTSbVABFAcNo6eh4ldd53SIecsNYSAZ2ciV-rOO0

const login = (payload) => {
  return axios.post('/auth/login', { ...payload })
    .then((user) => {
      console.log('login', user);
      // login successful if there's a jwt token in the response
      if (user.data.token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user.data));
      }

      return user;
    });
};

const logout = () => {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
};

const me = () => {
  const { token } = JSON.parse(localStorage.getItem('user'));

  return axios({
    method: 'get',
    url: '/auth/me',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'x-access-token': token
    }
  })
    .then(({ data }) => {
      console.log('me', data);

      return data;
    });
};

// function getAll() {
//   const requestOptions = {
//     method: 'GET',
//     headers: authHeader()
//   };

//   return fetch(`/users`, requestOptions).then(handleResponse);
// }

export default {
  register,
  login,
  logout,
  me,
};
