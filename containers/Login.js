// Copyright © 2021 Jonathan Dean Damiani
import React from 'react';
import PropTypes from 'prop-types';
import { 
	makeStyles,
	Button,
	Container,
	Checkbox,
	FormControlLabel,
	Grid,
	Link,
	TextField,
	Typography

} from '@material-ui/core';

import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../apollo/mutations';
import cookieCutter from 'cookie-cutter';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

const Login = (props) => {
    const classes = useStyles();

    const [ loginUser ] = useMutation(LOGIN_USER, {
		onCompleted: (data) => {
			cookieCutter.set('authToken', data.loginUser.token);
            props.setIsLoggedIn(true);
		},
        onError: (error) => {
            console.log(error);
        }
	});
	
	const handleLogin = (event) => {
		event.preventDefault();
		loginUser({
			variables: {
				email: event.target.email.value, 
				password:event.target.password.value
			}
		});
	}

    return (
        <Container maxWidth='xs'>
			<div className={classes.paper}>
				<Typography component="h1" variant="h5">
					Sign In
				</Typography>
				<form className={classes.form} onSubmit={handleLogin} noValidate>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email"
						name="email"
						autoComplete="email"
						autoFocus
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="password"
						label="Password"
						type="password"
						autoComplete="current-password"
						autoFocus
					/>
					<FormControlLabel 
						control={<Checkbox value="remember" color="primary"/>}
						label="Remember me"
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						Sign In
					</Button>
					<Grid container>
						<Grid item xs>
							<Link href="#" variant="body2">
								Forget Password
							</Link>
						</Grid>
						<Grid item xs>
							<Link href="#" variant="body2">
								Don't Have Password? Sign up
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
		</Container>
    )
}

Login.propTypes = {

}

export default Login;
