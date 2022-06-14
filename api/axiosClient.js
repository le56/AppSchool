import axios from 'axios';
export const BASE_URL = 'https://nguyenngockhanh.xyz/api';
export const BASE_URL_IMAGE = 'https://nguyenngockhanh.xyz/images';
export const BASE_URL_RESOURCE = 'https://nguyenngockhanh.xyz/resource';

// export const BASE_URL = 'http://192.168.1.10:5000/api';
// export const BASE_URL_IMAGE = 'http://192.168.1.10:5000/images';
// export const BASE_URL_RESOURCE = 'http://192.168.1.10:5000/resource';

const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

axiosClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    throw error.response.data;
  },
);

export default axiosClient;
