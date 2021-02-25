// Copyright © 2021 Jonathan Dean Damiani
import { useMemo } from 'react';
import { ApolloClient, HttpLink } from '@apollo/client';
import { cache } from './cache';
import { typeDefs } from './typeDefs';

const GRAPHQL_URL = process.env.API_URL || 'http://localhost:4000';

let apolloClient;

const link = new HttpLink({
    fetch,
    uri: `${GRAPHQL_URL}/graphql`,
});

const createApolloClient = () => {
    return new ApolloClient({
        ssrMode: typeof window === 'undefined',
        link: link,
        cache:  cache,
        typeDefs: typeDefs,
        connectToDevTools: true,
    })
}

export const initializeApollo = (initialState = null) => {
    const _apolloClient = apolloClient ?? createApolloClient()

    // If your page has Next.js data fetching methods that use Apollo Client, the initial state
    // gets hydrated here
    if (initialState) {
        // Get existing cache, loaded during client side data fetching
        const existingCache = _apolloClient.extract()

        // Restore the cache with the merged data
        _apolloClient.cache.restore({ ...existingCache, ...initialState });
    }

    // For SSG and SSR always create a new Apollo Client
    if (typeof window === 'undefined') return _apolloClient
    // Create the Apollo Client once in the client
    if (!apolloClient) apolloClient = _apolloClient   

    return _apolloClient
}
export const useApollo = (initialState) => {
    const store = useMemo(() => initializeApollo(initialState), [initialState]);
    return store;
}
