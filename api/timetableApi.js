import axiosClient from './axiosClient';

const timeTableApi = {
  getTodayTimetable() {
    return axiosClient.get('/student/timetable/now');
  },
  getTimetables() {
    return axiosClient.get('/student/timetable');
  },
  getTimetablesByDate(start, end) {
    return axiosClient.get(`/student/timetable/bydate`, {
      params: {
        start,
        end,
      },
    });
  },
};

export default timeTableApi;
