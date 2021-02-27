import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

{
  /*
    "@date-io/date-fns": "^1.3.13",
    "@material-ui/core": "^4.11.0",
    "@material-ui/icons": "^4.9.1",
    "@material-ui/pickers": "^3.2.10",
    "axios": "^0.21.0",
    "date-fns": "^2.0.0-beta.5",
    "react-export-excel": "^0.5.3",
*/
}
