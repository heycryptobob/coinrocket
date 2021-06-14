import { fireEvent, render } from "@testing-library/react"
import { CoinList } from "./CoinList"

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
      <CoinList />
    </ApolloProvider>
  )
}

test('CoinForm', async () => {
  const utils = render(<Wrapper />)
})