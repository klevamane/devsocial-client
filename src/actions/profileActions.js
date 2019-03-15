import { GET_PROFILE, GET_PROFILES, PROFILE_LOADING, GET_ERRORS, SET_CURRENT_USER } from './types';

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
        .get('localhost:5000/api/v1/profile')
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
/**
 * @desc This action creates the user profile
 * and redirects to the dashboard upon successful creation
 * else it dispatches the error encounted so it can be accessed in the front end component
 * @param  profileData : It takes the user new profile data
 * @param  history : This is used tp redirect to another route (component) as implemented in the App.js
 */
export const createNewProfile = (profileData, history) => dispatch => {
    axios
        .post('/api/v1/profile', profileData)
        .then(res => history.push('/dashboard'))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }));
}

export const  addProfileExperience = (profileExperienceData, history) => dispatch => {
    axios
        .post('/api/v1/profile/experience', profileExperienceData)
        .then(res => history.push('/dashboard'))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }));
}

export const  deleteProfileExperience = (exp_id, history) => dispatch => {
    axios
        .delete(`/api/v1/profile/experience/${exp_id}`)
        .then(res => dispatch({
            type: GET_PROFILE,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }));
}

export const addProfileEducation = (profileEducationData, history) => dispatch => {
    axios
        .post('/api/v1/profile/education', profileEducationData)
        .then(res => history.push('/dashboard'))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }));
}

export const  deleteProfileEducation = (edu_id, history) => dispatch => {
    axios
        .delete(`/api/v1/profile/experience/${edu_id}`)
        .then(res => dispatch({
            type: GET_PROFILE,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }));
}

export const deleteAccount = () => dispatch => {
   
        dispatch(setProfileLoading());
        axios
        .delete('/api/v1/profile')
        .then(res => dispatch({
            type: SET_CURRENT_USER, // setting the current user to {} ensures that the user is empty which triggers rerouting to /login
            payload: {} 
        }))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }));
    
    
}

export const getAllProfiles = () => dispatch => {
    dispatch(setProfileLoading());
    axios
        .get('/api/v1/profile/all')
        .then(res =>  dispatch({
                type: GET_PROFILES,
                payload: res.data
            })
         )
        .catch(err => dispatch({
            type: GET_PROFILES,
            // if there is no profile instead of return an error just return an empty object,
            // remember that a user may /will not have a profile / unpon regisr, that is not necessarily an error
            payload: {} 
        }))

}

export const getProfileByHandle = (handle) => dispatch => {
    dispatch(setProfileLoading());
    axios
        .get(`/api/v1/profile/handle/${handle}`)
        .then(res => dispatch ({
            type: GET_PROFILE,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: GET_PROFILE,
            payload: err.response.data // make null 
        }))
}
