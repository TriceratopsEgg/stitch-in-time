import React from 'react';
import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Route } from 'react-router-dom';
import firebase from 'firebase';

import HomeSplash from './StaticContent/HomeSplash';
import Login from './Containers/Login';
import Menu from './Containers/Menu';

import { colors } from './Common/UISettings';

const firebaseConfig = {
  apiKey: "AIzaSyCI-SXl4FQm9MTk9PAUC4VYvqXcCP7pan4",
  authDomain: "stitchintime-fdc17.firebaseapp.com",
  databaseURL: "https://stitchintime-fdc17.firebaseio.com",
  projectId: "stitchintime-fdc17",
  storageBucket: "stitchintime-fdc17.appspot.com",
  messagingSenderId: "785916868104",
  appId: "1:785916868104:web:163e5545865f13193ec3bd",
  measurementId: "G-3V9MFJGLZP"
};


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
  firebase.initializeApp(firebaseConfig);
  //var db = firebase.firestore();

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
