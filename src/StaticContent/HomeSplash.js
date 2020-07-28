import React from 'react';
import { Grid, Typography, Fab } from '@material-ui/core';
import { VpnKey as LoginIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

import Organise from '../Assets/Dark/Organise.svg';
import Track from '../Assets/Dark/Track.svg';
import Time from '../Assets/Dark/Time.svg';
import Sync from '../Assets/Dark/Sync.svg';
import { colors } from '../Common/UISettings';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		backgroundColor: theme.palette.background.paper,
		color: theme.palette.text.primary,
		display: 'flex',
		flexDirection: 'column'
	},
	imageGridRight: {
		backgroundColor: colors.greys['30'],
		clipPath: 'polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)'
	},
	imageGridLeft: {   
		backgroundColor: colors.greys['30'],
		clipPath: 'polygon(0 0, 75% 0, 100% 100%, 0% 100%)'
	},
	image: {
		maxWidth: '50%',
		height: 'auto',
		padding: theme.spacing(20)
	},
	alignLeft: {
		textAlign: 'left',
		padding: theme.spacing(12)
	},
	functionalitySection: {
		padding: theme.spacing(3)
	},
	question: {
		fontStyle: 'italic',        
		padding: theme.spacing(3)
	},
	extendedIcon: {
		marginRight: theme.spacing(1),
	},
	fab: {
		position: 'fixed',
		alignSelf: 'flex-end',
		right: theme.spacing(1),
		top: theme.spacing(1)
	}
}));

const HomeSplash = props => {
	const classes = useStyles();

	const handleLoginClick = () => {        
		props.history.push('/login');
	};

	return (
		<div className={classes.root}>            
			<Fab onClick={handleLoginClick} variant="extended" color="primary" className={classes.fab} >
				<LoginIcon className={classes.extendedIcon} />
                Sign-up / Login
			</Fab>
			<Typography variant="h1">Stitch In Time</Typography>
			<Typography className={classes.functionalitySection}>This application is still in development - all listed features are planned but might not be available or are partially available.</Typography>
			<Typography className={classes.functionalitySection}>Manage, track and plan projects accross a wide variety of crafts - from sewing, to fibrearts such as knitting and crochet, to embroidery and cross stitch and many more.</Typography>

			<Grid container className={classes.functionalitySection}> 
				<Grid item xs={3} className={classes.imageGridLeft}>
					<img src={Organise} alt="organise" className={classes.image} />
				</Grid>
				<Grid item xs={9} className={classes.alignLeft}>
					<Typography variant="h5">Create projects and capture information against each one such as:</Typography>
					<ul>
						<li>Project name</li>
						<li>Date started and completed</li>
						<li>Materials you plan on using</li>
						<li>Upload pattern for ease of access later</li>
						<li>Whether this project is meant for someone else or yourself</li>
					</ul>
				</Grid>
			</Grid>
			<Grid container className={classes.functionalitySection}> 
				<Grid item xs={9} className={classes.alignLeft}>
					<Typography variant="h5">Track various available materials and tools:</Typography>
					<Typography>When making use of this you can easily see which materials or tools you still need to source as well as which project is holding your 4mm needles hostage.</Typography>
					<ul>
						<li>Which project is making use of which tools and materials</li>
						<li>How much of which material you have on hand</li>
						<li>Which tools you have on hand</li>
					</ul>
				</Grid>
				<Grid item xs={3} className={classes.imageGridRight}>
					<img src={Track} alt="track" className={classes.image} />
				</Grid>
			</Grid>
			<Grid container className={classes.functionalitySection}> 
				<Grid item xs={3}  className={classes.imageGridLeft}>
					<img src={Time} alt="organise" className={classes.image} />
				</Grid>
				<Grid item xs={9} className={classes.alignLeft}>
					<Typography variant="h5">Track time and cost against various projects:</Typography>
					<ul>
						<li>Manual time entry</li>
						<li>Timer based time capture</li>
						<li>Switch between manual or timer as needed</li>
						<li>Capture material cost and time cost separately against projects</li>
						<li>Generate reports to display cost of projects and time taken in order to project future projects costing</li>
					</ul>
				</Grid>
			</Grid>
			<Grid container className={classes.functionalitySection}> 
				<Grid item xs={9} className={classes.alignLeft}>
					<Typography variant="h5" className={classes.functionalitySection}>This application is available as a progressive web app accross all devices.</Typography>
					<Typography className={classes.question}>Well, what does that mean to me, you may ask.</Typography>
					<Typography className={classes.functionalitySection}>A progressive web app (PWA) means that this application is not only available in any browser on your desktop, but can also be installed on your homescreen on any Android device. Once installed it will behave just like any other mobile app and can make use of your phone or tablet&apos;s camera and send you notifications. This means that the same platform is available on all devices you use with seamless integration between them all.</Typography>
				</Grid>
				<Grid item xs={3} className={classes.imageGridRight}>
					<img src={Sync} alt="sync" className={classes.image} />
				</Grid>
			</Grid>
		</div>
	);
};

export default HomeSplash;