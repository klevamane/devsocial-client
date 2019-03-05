// This combined reducer will be imported in the store.js ass a rootreducer
// note that it will be imported as ./reducers because of the index.js file
// it can also be imported as ./reducers/index

import { combineReducers } from 'redux';
import authReducer from './authReducer';

// add all reducers here to combine them into one to be used
export default combineReducers({
    authenticate: authReducer
})
