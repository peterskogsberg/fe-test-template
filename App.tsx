import * as React from 'react';
import { XXLLogo } from './components/XXLLogo';
import { getNameOfCurrentDay } from './date-utils';

import './style.css';

export default function App() {
  const currentDay = getNameOfCurrentDay();
  const greetingMessage = `Hello fellow frontender! Today is ${currentDay}`;

  return (
    <div>
      <XXLLogo />
      <h1>Opening hours indicator</h1>
      <p>{greetingMessage}</p>
      <p>
        <pre>&lt;Here would be a great place to add your component!&gt;</pre>{' '}
      </p>
    </div>
  );
}
