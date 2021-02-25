// Copyright © 2021 Jonathan Dean Damiani
import React, { useState } from 'react';
import { Login, Main } from '../containers';
import Cookies from 'cookies';

const Home = ({ isLogged }) => {
	const [isLoggedState, setIsLoggedState] = useState(isLogged);

	const handleIsLoggedState = (newLoggedState) => {
		setIsLoggedState(newLoggedState);
	}

	if (isLoggedState) { 
		return <Main
			setIsLoggedIn={handleIsLoggedState}
		/>
	}
	else {
		return <Login
			setIsLoggedIn={handleIsLoggedState}
		/>
	}
}

export async function getServerSideProps(context) {
	const cookies = new Cookies(context.req, context.res)

	return {
		props: {
			isLogged: !!cookies.get('authToken')
		},
	}
}

export default Home;
