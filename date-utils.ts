import { Day } from './types';

const US_LOCALE = 'en-US';

const getNameOfCurrentDay = () =>
  new Intl.DateTimeFormat(US_LOCALE, {
    weekday: 'long',
  }).format(new Date()) as Day;

export { getNameOfCurrentDay };
