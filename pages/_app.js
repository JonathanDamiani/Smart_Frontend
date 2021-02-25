// Copyright © 2021 Jonathan Dean Damiani
import React, { useEffect } from 'react';
import Head from 'next/head';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from "../apollo/apollo";
import { ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { lightTheme, darkTheme } from '../styles/theme';
import { ThemeSwitcher, Query } from '../components';
import { USER_CONFIG } from '../apollo/queries';
import cookieCutter from 'cookie-cutter';
import { isDarkThemeVar } from '../apollo';

const App = ({ Component, pageProps }) => {
	const apolloClient = useApollo(pageProps.initialApolloState);

	useEffect(() => {
		let checkIsDarkTheme = false;
		if (!!cookieCutter.get('isDarkTheme') && cookieCutter.get('isDarkTheme') == 'true') {
			checkIsDarkTheme = true;
		}
		isDarkThemeVar(checkIsDarkTheme);
	}, []);

	return ( 
		<ApolloProvider client={apolloClient}>
			<Head>
				<title>APP</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" href="/favicon.ico" />
			</Head>
			<Query query={USER_CONFIG}>
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

export default App;
