import { gql } from "@apollo/client";

export const GET_COINS = gql`
  query Coins {
    coins {
      id
      name
      symbol
      website
      description
      launch
      logo {
        url
      }
      contract
      social
    }
  }
`;
