import {
  createClient,
  cacheExchange,
  fetchExchange,
  subscriptionExchange,
} from "@urql/core";
import { SubscriptionClient } from "subscriptions-transport-ws";

const client = createClient({
  url: import.meta.env.GRAPHQL_ENDPOINT,
  exchanges: [
    cacheExchange,
    fetchExchange,
    // subscriptionExchange({
    //   forwardSubscription: (operation) =>
    //     subscriptionClient.request(operation) as any,
    // }),
  ],
});

export default client;
