import { TEST_DISPATCH } from './types';

export const registerUser = (newUserData) => {
    return {
        type: TEST_DISPATCH,
        payload: newUserData
    };
};
