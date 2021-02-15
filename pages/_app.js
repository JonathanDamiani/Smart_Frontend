// Copyright © 2021 Jonathan Dean Damiani
import Head from 'next/head';
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { withApollo } from "../apollo";
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../styles/theme';

const App = ({ Component, pageProps, apollo }) => {
	return ( 
		<ApolloProvider client={apollo}>
			<Head>
				<title>APP</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" href="/favicon.ico" />
			</Head>
			<ThemeProvider theme={theme}> 
				<CssBaseline />
				<Component {...pageProps} /> 
			</ThemeProvider>
		</ApolloProvider>
	)
}

export default withApollo(App);
