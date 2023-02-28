import * as React from 'react';
import { getNameOfCurrentDay } from './date-utils';

import './style.css';

export default function App() {
  const currentDay = getNameOfCurrentDay();
  const greetingMessage = `Hello fellow frontender! Today is ${currentDay}`;

  return (
    <div>
      <h1>XXL - store indicator</h1>
      {greetingMessage}
      <br />
      <p>Here would be a great place to add your component!</p>
    </div>
  );
}
