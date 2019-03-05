// Each reducer created is to be combined in the root reducer
// ie in the ./reducer/index.js

const initialState = {
    isAuthenticated: false,
    user: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        default:
            return state;
    }
}
