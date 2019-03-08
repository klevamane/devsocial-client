import React from 'react';
import {Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// In the area of calling / using the PrivateRoute, it must be enclosed in
// a switch tag to prevent unwanted behavious
// swith is imported as destructuring fro, react-router-dom

const PrivateRoute = ({ component: Component, auth, ...rest}) => (
    <Route 
        {...rest}
        render = {props => auth.isAuthenticated === true ? ( <Component {...props} />) : (<Redirect to="/login" />)
}
            />
);



PrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth
})
export default connect(mapStateToProps)(PrivateRoute)
