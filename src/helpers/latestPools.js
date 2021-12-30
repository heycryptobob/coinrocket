import { GraphQLClient, gql } from "graphql-request";

const endpoint =
  "https://api-eu-central-1.graphcms.com/v2/ckxeqd10s5d0701xi94xu26za/master";

const query = gql`
  {
    pools {
      id
      isPrivate
      isDistributed
      title
      subtitle
      hardCap
      currency
      openingTime
      closingTime
      contractAddress
      description
      poolImage(locales: [en]) {
        url
      }
    }
  }
`;

export async function latestPools(i18n) {

  const headers = {
    "Content-Type": "application/json",
    "gcms-locales": i18n.language,
  };

  const graphQLClient = new GraphQLClient(endpoint, { headers });
  const { pools } = await graphQLClient.request(query);
  return pools
}