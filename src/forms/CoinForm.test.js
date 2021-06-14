import { fireEvent, render } from "@testing-library/react"
import { CoinForm } from "./CoinForm"
import moment from 'moment'

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHCMS_ENDPOINT,
  cache: new InMemoryCache(),
});

const data = {
  name: "Bitcoin",
  symbol: "BTC",
  website: 'https://bitcoin.com',
  'logo.url': "https://via.placeholder.com/512.png",
  'launch': moment().format('YYYY-MM-DDTHH:mm'),
  description: "Bitcoin is a decentralized digital currency.",
  'contract.chain': "bsc",
  'contract.address': "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
  'social.telegram.url': "https://t.me/",
  'social.twitter.url': "https://twitter.com/",
  'social.discord.url': "https://discord.com/",
  'social.medium.url': "https://medium.com/",
}

const Wrapper = () => {
  return (
    <ApolloProvider client={client}>
      <CoinForm />
    </ApolloProvider>
  )
}

test('CoinForm', async () => {
  const utils = render(<Wrapper />)
  Object.keys(data).forEach(key => {
    const input = utils.getByTestId(key)
    fireEvent.change(input, { target: { value: data[key] }})
    expect(input.value).toBe(data[key])
    // fireEvent submit
  })
})