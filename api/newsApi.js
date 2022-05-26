import axiosClient from './axiosClient';

const newsApi = {
  getAll({limit = 5, page = 1}) {
    return axiosClient.get('/news', {
      params: {
        page,
        limit,
      },
    });
  },
  getOne(id) {
    return axiosClient.get(`/news/${id}`);
  },
  getNewsCategory() {
    return axiosClient.get('/news-category');
  },
};

export default newsApi;
