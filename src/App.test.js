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
   "@atlaskit/spinner": "^15.0.5",
    "@atlaskit/tooltip": "^17.1.0",
    "@date-io/date-fns": "^1.3.13",
    "bootstrap": "^4.5.3",
    "clsx": "^1.1.1",
    "jspdf": "^2.1.1",
    "mdbreact": "^4.27.0",
    "react-csv": "^2.0.3",
    "react-select": "^3.1.0",
    "react-to-print": "^2.10.3",
    "@material-ui/core": "^4.11.0",
    "@material-ui/icons": "^4.9.1",
    "@material-ui/pickers": "^3.2.10",
    "axios": "^0.21.0",
    "date-fns": "^2.0.0-beta.5",
    "react-export-excel": "^0.5.3"
*/
}
