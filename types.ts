// Locale 'en-US'
type Day =
  | 'Sunday'
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday';

type OpeningHours = {
  closed: boolean; // If true, it means the store is closed all day
  closesAt: string;
  day: Day;
  opensAt: string;
};

type StoreDataResult = {
  id: string;
  name: string;
  openingHours: OpeningHours[];
};

type StoreData = {
  result: StoreDataResult[];
};

export { Day, OpeningHours, StoreData };
