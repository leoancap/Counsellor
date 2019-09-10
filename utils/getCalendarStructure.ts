import moment from 'moment';

export const getCalendarStructure = (calendarStep: number) => [
  moment().add(calendarStep, 'd'),
  moment().add(1 + calendarStep, 'd'),
  moment().add(2 + calendarStep, 'd'),
  moment().add(3 + calendarStep, 'd'),
];
