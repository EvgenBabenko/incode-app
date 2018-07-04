// import { authHeader } from '../_helpers';

import axios from 'axios';
import config from '../config';

axios.defaults.baseURL = config.AXIOS_URL;

const logout = () => {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
};

const handleResponse = (response) => {
  return response.json()
    .then((data) => {
      console.log(response, data);
      if (!response.ok) {
        if (response.status === 401) {
          // auto logout if 401 response returned from api
          logout();
          // location.reload(true);
        }

        const error = (data && data.error) || response.statusText;
        return Promise.reject(error);
      }

      return data;
    });
};


const register = (payload) => {
  axios.post('/auth/register', { ...payload })
    .then((user) => {
      console.log(user);
      // login successful if there's a jwt token in the response
      if (user.data.token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user.data));
      }

      return user;
    });
};


// const login = (payload) => {
//   const requestOptions = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ ...payload })
//   };

//   return fetch('/users/authenticate', requestOptions)
//     .then(handleResponse)
//     .then((user) => {
//       // login successful if there's a jwt token in the response
//       if (user.token) {
//         // store user details and jwt token in local storage to keep user logged in between page refreshes
//         localStorage.setItem('user', JSON.stringify(user));
//       }

//       return user;
//     });
// };

// function getAll() {
//   const requestOptions = {
//     method: 'GET',
//     headers: authHeader()
//   };

//   return fetch(`/users`, requestOptions).then(handleResponse);
// }

export default {
  register,
  // login,
  logout,
};
