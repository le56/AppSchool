import {axiosClient} from '../api';

export const setToken = token => {
  // console.log('token ' + token);
  if (token) {
    return (axiosClient.defaults.headers.common['Authorization'] =
      'Bearer ' + token);
  }
  return (axiosClient.defaults.headers.common['Authorization'] = null);
};
