// Copyright © 2021 Jonathan Dean Damiani
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import withApollo from "next-with-apollo";

const GRAPHQL_URL = process.env.API_URL || 'http://localhost:4000';

const link = new HttpLink({
    uri: `${GRAPHQL_URL}/graphql`,
    fetch
});

export default withApollo (
    ({ initialState }) => {
        return new ApolloClient({
            link: link,
            cache:  new InMemoryCache().restore(initialState || {})
        })
    }
);
