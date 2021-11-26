import { render, screen } from '@testing-library/react';
import App from './App';

test('text is in the app', () => {
  render(<App />);
  const linkElement = screen.getByText("Todo List");
  expect(linkElement).toBeInTheDocument();
});
