// Copyright © 2021 Jonathan Dean Damiani
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import withApollo from "next-with-apollo";
import { cache } from './cache';
import { typeDefs } from './typeDefs';

const GRAPHQL_URL = process.env.API_URL || 'http://localhost:4000';

const link = new HttpLink({
    fetch,
    uri: `${GRAPHQL_URL}/graphql`,
});

export default withApollo (
    ({ initialState }) => {
        return new ApolloClient({
            link: link,
            cache:  cache.restore(initialState || {}),
            typeDefs: typeDefs,
            connectToDevTools: true,
        })
    }
);
