// Each reducer created is to be combined in the root reducer
// ie in the ./reducer/index.js

import { SET_CURRENT_USER } from '../actions/types';
import { isEmpty_ } from '../helpers/helpers'
const initialState = {
    isAuthenticated: false,
    user: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty_(action.payload),
                user: action.payload
            }
        default:
            return state;
    }
}
