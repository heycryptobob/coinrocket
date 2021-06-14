import { render } from "@testing-library/react"
import { AddCoin } from './AddCoin'

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHCMS_ENDPOINT,
  cache: new InMemoryCache(),
});

const Wrapper = () => {
  return (
    <ApolloProvider client={client}>
      <AddCoin />
    </ApolloProvider>
  )
}

test('AddForm', async () => {
  render(<Wrapper />)
})