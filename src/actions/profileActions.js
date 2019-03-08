import { GET_PROFILE, PROFILE_LOADING, GET_ERRORS } from './types';

// axios
import axios from 'axios';

export const setProfileLoading = () => {
    return {
        type: PROFILE_LOADING
    }
}

export const getCurrentUserProfile = () => dispatch => {
    dispatch(setProfileLoading());
    
    axios
        .get('api/v1/profile')
        .then(res => dispatch({
            type: GET_PROFILE,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: GET_PROFILE,
            // if there is no profile instead of return an error just return an empty object,
            // remember that a user may /will not have a profile / unpon regisr, that is not necessarily an error
            payload: {} 
        }))

}
