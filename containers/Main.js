import React from 'react';
import {
    Button,
	Container,
} from '@material-ui/core';
import cookieCutter from 'cookie-cutter';

const Main = props => {
    const handleLogout = () => {
        cookieCutter.set('authToken', 0 ,{ expires: new Date(0) });
        props.setIsLoggedIn(false);
    }

    return (
        <Container>
            <Button
                size='medium'
                variant='contained'
                onClick={()=> handleLogout()}
            >
                Logout
            </Button>
        </Container>
    )
}

export default Main;
