import { SET_CURRENT_USER, GET_ERRORS } from './types';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { setTokenForEveryRequest } from '../helpers/helpers';

export const registerUser = (userData, history) => dispatch => {
    // since we are making an AJAX call and we are waiting
    // for our response, we aren't going to just return the tyoe and //#endregion
    // the payload, we need to actually call dispatch
    // that's what redux thunk lets us do
    axios
        .post('/api/v1/users/register', userData)
        .then(res => history.push('/login'))
        .catch(err => dispatch({      // redux thunk allows us to call dispacth
            type: GET_ERRORS,
            payload: err.response.data 
            // instead of waiting for the e
        }));
};

export const setCurrentUser = (decodedData) => {
    return {
        type: SET_CURRENT_USER,
        payload: decodedData
    };
}


export const loginUser = (userData) => dispatch => {
    axios
    .post('/api/v1/users/login', userData)
    .then(res => {
        const { token } = res.data
        // Set the token
        localStorage.setItem('jwtDevSocial', token)
        
        // Set Authentication Token for subsequent requests
        setTokenForEveryRequest(token);

        // decode the token to extract the user data
        const decodedTokenData = jwt_decode(token);
        
        //Set the current user
        dispatch(setCurrentUser(decodedTokenData));
        
    })
    .catch(err => dispatch({
        type: GET_ERRORS,
        payload: err.response.data
    }))
};
