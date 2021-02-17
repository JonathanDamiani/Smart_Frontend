// Copyright © 2021 Jonathan Dean Damiani
import { 
	makeStyles,
	Avatar,
	Button,
	Container,
	Checkbox,
	FormControlLabel,
	Grid,
	Link,
	TextField,
	Typography

} from '@material-ui/core';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

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

const Home = () => {
	const classes = useStyles();

	return (
		<Container maxWidth='xs'>
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign In
				</Typography>
				<form className={classes.form} noValidate>
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
export default Home;