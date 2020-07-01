import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({	
    paper: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
		width: '100%',
		height: '100vh'
	},
	login: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        width: theme.spacing(120),
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
	}
}));

const Login = () => {
	const classes = useStyles();
	
	const uiConfig = {
		// Popup signin flow rather than redirect flow.
		signInFlow: 'popup',
		// Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
		signInSuccessUrl: '/app/dashboard',
		// We will display Google and Facebook as auth providers.
		signInOptions: [
			firebase.auth.EmailAuthProvider.PROVIDER_ID,
			firebase.auth.GoogleAuthProvider.PROVIDER_ID
		]
	};

	return (
		<Paper square className={classes.paper}>
			<Paper elevation={3} className={classes.login}>
				<Typography variant="h4">Welcome to Stitch In Time!</Typography>
				<Typography variant="subtitle1">Please select your sign in method</Typography>
				<StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
				<Typography variant="overline">Please note: the login controls will switch to light mode</Typography> <br/>
				<Typography variant="overline">Be careful if you're light sensitive or seizure prone</Typography>
			</Paper>
		</Paper>
	);
};

export default Login;
