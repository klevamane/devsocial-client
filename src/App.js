import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import jwt_decode from 'jwt-decode';
import './App.css';

// components
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Landing from './components/layouts/Landing';
import Register from './components/authentication/Register';
import Login from './components/authentication/Login';
import Profile from './components/dashboard/Dashboard';
import CreateProfile from './components/Profile/CreateProfile';


// helper
import { setTokenForEveryRequest } from './helpers/helpers';
import PrivateRoute from './helpers/ProtectedRoute';


// actions
import { setCurrentUser, logout } from './actions/authActions';
//store
import store from './store';
import Dashboard from './components/dashboard/Dashboard';

// check for token in local storage
if (localStorage.jwtDevSocial) {
  // set auth token header
  
  setTokenForEveryRequest(localStorage.jwtDevSocial);
  // Decode the token to obtain user details and token expiry
  const decoded = jwt_decode(localStorage.jwtDevSocial)
  // set current user with the decoded data
  // note that the store can dispatch action also
  store.dispatch(setCurrentUser(decoded));


  // Authomatically log the user out if the token has expired
  // note the time is in ms
const currentTime = Date.now() / 1000;
if (currentTime > decoded.exp) {
  // log the user out
  store.dispatch(logout);

 // TODO: Clear current profile

 // redirect to the login page
 window.location.href = '/login';
}

}



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/register" component={Register}></Route>
              <Route exact path="/login" component={Login}></Route>
              <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard}></PrivateRoute>
              </Switch>
              <Switch>
              <PrivateRoute exact path="/create-profile" component={CreateProfile}></PrivateRoute>
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
