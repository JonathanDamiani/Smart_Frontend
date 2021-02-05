import '../styles/globals.css';
import Head from 'next/head';
import { ApolloProvider } from '@apollo/client';
import { withApollo } from "../apollo";


const App = ({ Component, pageProps, apollo }) => {
	return ( 
		<ApolloProvider client={apollo}>
			<Head>
				<title>APP</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Component {...pageProps} /> 
		</ApolloProvider>
	)
}

export default withApollo(App);
