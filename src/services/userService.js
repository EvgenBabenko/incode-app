import axios from 'axios';
import config from '../config';

axios.defaults.baseURL = config.APIHost;

const register = payload => axios.post('/auth/register', { ...payload })
  .then((user) => {
    console.log('register', user);
    // login successful if there's a jwt token in the response
    if (user.data.token) {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem(config.StorageKey, JSON.stringify(user.data));
    }

    return user;
  });

const login = payload => axios.post('/auth/login', { ...payload })
  .then((user) => {
    console.log('login', user);
    // login successful if there's a jwt token in the response
    if (user.data.token) {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem(config.StorageKey, JSON.stringify(user.data));
    }

    return user;
  });

const logout = () => {
  // remove user from local storage to log user out
  localStorage.removeItem(config.StorageKey);
};

const me = () => {
  const { token } = JSON.parse(localStorage.getItem(config.StorageKey));

  return axios({
    method: 'get',
    url: '/auth/me',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'x-access-token': token,
    },
  })
    .then(({ data }) => {
      console.log('me', data);

      return data;
    });
};

const updateProfile = (id, payload) => axios.put(`/user/${id}`, { ...payload });

export default {
  register,
  login,
  logout,
  me,
  updateProfile,
};
