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
import CreateProfile from './components/Profile/CreateProfile';
import EditProfile from './components/Profile/EditProfile';
import Experience from './components/Profile/experience/Experience';
import Profiles from './components/Profile/public/Profiles';
import SingleProfile from './components/Profile/public/SingleProfile/SingleProfile';


// helper
import { setTokenForEveryRequest } from './helpers/helpers';
import PrivateRoute from './helpers/ProtectedRoute';


// actions
import { setCurrentUser, logout } from './actions/authActions';
//store
import store from './store';
import Dashboard from './components/dashboard/Dashboard';
import Education from './components/Profile/education/Education';
import NotFound from './components/Notfound/NofFound';

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
              <Switch>
              <PrivateRoute exact path="/edit-profile" component={EditProfile}></PrivateRoute>
              </Switch>
              <Switch>
              <PrivateRoute exact path="/add-experience" component={Experience}></PrivateRoute>
              </Switch>

              <Switch>
              <PrivateRoute exact path="/add-education" component={Education}></PrivateRoute>
              </Switch>
              <Route exact path="/profiles" component={Profiles} />
              <Route exact path="/profile/handle/:handle" component={SingleProfile} />
              <Route exact path="/not-found" component={NotFound} />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
