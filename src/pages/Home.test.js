import { render } from '@testing-library/react';
import { Home } from './Home';

const HomeWrapper = () => {
  return (
    <Home />
  )
}

test('renders', () => {
  render(<HomeWrapper />);
});
