import { ApolloClient, createNetworkInterface } from 'apollo-client';

import offline from 'apollo-offline';

export const { enhancer, networkInterface } = offline(
  createNetworkInterface({
    uri: `http://localhost:8000/graphql`,
  }),
);

export const graphqlClient = new ApolloClient({
  networkInterface,
});

networkInterface.setClient(graphqlClient);