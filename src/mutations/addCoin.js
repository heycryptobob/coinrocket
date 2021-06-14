import { gql } from "@apollo/client";

export const ADD_COIN = gql`
  mutation AddCoin($data: CoinCreateInput!) {
    createCoin(data: $data) {
      id
      name
      symbol
      description
      launch
      contract
      social
      logo {
        url
      }
    }
  }
`;
