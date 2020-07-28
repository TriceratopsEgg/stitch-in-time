import React from 'react';
import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Route } from 'react-router-dom';

import HomeSplash from './StaticContent/HomeSplash';
import Login from './Containers/Login/Login';
import Menu from './Containers/Menu';

import { colors } from './Common/UISettings';


const theme = createMuiTheme({
	palette: {
		type: 'dark',
		primary: { 
			main: colors.primaryDark },    
		secondary: { 
			main: colors.secondaryDark },
		main: '#545454'
	},
	spacing: factor => `${0.25 * factor}rem`
});

function App() {
	return (
    
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<div className="App">
					<Route path="/" exact component={HomeSplash} />
					<Route path='/login' component={Login} />
					<Route path="/app" component={Menu} />   
				</div>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
