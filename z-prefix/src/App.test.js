import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getAllByTestId('navigation');
  const linkElement =screen.getAllByTestId('post') 
  expect(linkElement).toBeInTheDocument();
});
