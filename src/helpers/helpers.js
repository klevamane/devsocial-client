import axios from 'axios';

/**
 * @desc Sets the token generated for subsequent access after successful
 * @param  {} token
 */
export const setTokenForEveryRequest = (token) => {
    if(token) {
        // Apply the token for every request
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        
    }
    else {
        delete axios.defaults.headers.common['Authorization']; 
    }
}

/**
 * @desc Checks if the value passed is empty or undefined
 * @param  {} value
 */
export const isEmpty_ = (value) => {
    if (value === undefined ||
          value === 'undefined' ||
          value === null ||
          (typeof value === 'object' && Object.keys(value).length === 0) ||
          (typeof value === 'string' && value.trim().length === 0)
    ) {
      return true;
    }
  };

export const profileStatusOptions = [
    { label: '* Select Professional Status',  value: 0},
    { label: 'Developer',  value: 'Developer'},
    { label: 'Intern',  value: 'Intern'},
    { label: 'Student',  value: 'Student'},
    { label: 'Senior Software Developer',  value: 'Senior Software Developer'},
    { label: 'Technical Team Lead',  value: 'Technical Team Lead'},
];
