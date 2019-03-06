// Each reducer created is to be combined in the root reducer
// ie in the ./reducer/index.js
import { GET_ERRORS } from '../actions/types'
const initialState = {}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ERRORS:
            // return the action payload, because the payload is going to include
            // the errors object which comes from the server
            return action.payload;
        default:
            return state;
    }
}
