import { render } from '@testing-library/react';
import App from './App';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHCMS_ENDPOINT,
  cache: new InMemoryCache(),
});

const AppWrapper = () => {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  )
}

test('renders name and slogan', () => {
  render(<AppWrapper />);
});
