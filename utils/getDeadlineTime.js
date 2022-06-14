import * as moment from 'moment-timezone';

export const getDeadlineTime = (date, date2 = Date.now()) => {
  const _now = moment.utc(date2).tz('Asia/Saigon');
  const deadlineDate = moment.utc(date).tz('Asia/Saigon');
  const diff = moment.duration(deadlineDate.diff(_now), 'milliseconds');

  if (Math.abs(diff.asDays()) >= 1) {
    return {
      time: diff.asDays(),
      stringTime: `${Math.floor(Math.abs(diff.asDays()))} days`,
    };
  }
  if (Math.abs(diff.asHours() >= 1)) {
    return {
      time: diff.asHours(),
      stringTime: `${Math.floor(Math.abs(diff.asHours()))} hours`,
    };
  }

  if (Number(Math.abs(diff.asMinutes()) >= 1)) {
    return {
      time: diff.asMinutes(),
      stringTime: `${Math.floor(Math.abs(diff.asMinutes()))} minutes`,
    };
  }

  if (Number(Math.abs(diff.asMilliseconds()) >= 1)) {
    return {
      time: diff.asMilliseconds(),
      stringTime: `${Math.floor(Math.abs(diff.asMilliseconds()))} milliseconds`,
    };
  }
  return {
    time: 5,
    stringTime: `5c milliseconds`,
  };
};
