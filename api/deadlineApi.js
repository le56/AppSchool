import axiosClient from './axiosClient';

const deadlineApi = {
  getAll() {
    return axiosClient.get('/student/deadline');
  },
};

export default deadlineApi;
