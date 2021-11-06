import { render } from '@testing-library/react';
import { HomePage } from './HomePage';

const HomePageWrapper = () => {
  return (
    <HomePage />
  )
}

test('renders', () => {
  render(<HomePageWrapper />);
});
