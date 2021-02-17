// Copyright © 2021 Jonathan Dean Damiani
import Head from 'next/head';
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { withApollo } from "../apollo";
import { ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { lightTheme, darkTheme } from '../styles/theme';
import { ThemeSwitcher, Query } from '../components';
import { GET_IS_DARK_THEME } from '../apollo/queries';

const App = ({ Component, pageProps, apollo }) => {
	return ( 
		<ApolloProvider client={apollo}>
			<Head>
				<title>APP</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" href="/favicon.ico" />
			</Head>
			<Query query={GET_IS_DARK_THEME} id={null}>
				{({data}) => {
					let currentTheme = createMuiTheme(data.isDarkTheme ? darkTheme : lightTheme);
					return (
						<ThemeProvider theme={currentTheme}> 
							<CssBaseline />
							<ThemeSwitcher/>
							<Component {...pageProps} /> 
						</ThemeProvider>
					)
				}}
			</Query>
		
		</ApolloProvider>
	)
}

export default withApollo(App);
