import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

import { setContext } from "@apollo/client/link/context";
import { useMemo } from "react";

let apolloClient: ApolloClient<InMemoryCache>;

const apolloUri = process.env.NEXT_PUBLIC_APOLLO_URI;

const authLink = setContext(async (_, { headers }) => {
  return {
    headers: {
      ...headers,
      "x-hasura-admin-secret": "password",
    },
  };
});

export default function createApolloClient() {
  const client = new ApolloClient({
    uri: apolloUri,
    cache: new InMemoryCache(),
    ssrMode: typeof window === "undefined", // set to true for SSR
    link: authLink.concat(
      new HttpLink({
        uri: apolloUri,
      })
    ),
  });

  return client;
}

export function initializeApollo(initialState = null as any) {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client,
  // the initial state gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    // Restore the cache using the data passed from
    // getStaticProps/getServerSideProps combined with the existing cached data
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;

  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}

export function useApollo(initialState: any) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
