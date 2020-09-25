import userActionTypes from "./user.types";

export const emailSignInStart = (email, password) => ({
    type: userActionTypes.EMAIL_SIGN_IN_START,
    payload: { email, password }
});

export const signInSuccess = (response) => ({
    type: userActionTypes.SIGN_IN_SUCCESS,
    payload: response
});

export const signInFailure = (error) => ({
    type: userActionTypes.SIGN_IN_FAILURE,
    payload: error
});

export const signOutSuccess = () => ({
    type: userActionTypes.SiGN_OUT_SUCCESS
});

export const signOutFailure = (error) => ({
    type: userActionTypes.SiGN_OUT_FAILURE,
    payload: error
});

export const signUpStart = (form) => ({
    type: userActionTypes.SIGN_UP_START,
    payload: form
});

export const signUpSuccess = (email, password) => ({
    type: userActionTypes.SIGN_UP_SUCCESS,
    payload: { email, password }
});

export const signUpFailure = (error) => ({
    type: userActionTypes.SIGN_UP_FAILURE,
    payload: error
});

export const clearUserError = () => ({
    type: userActionTypes.CLEAR_USER_ERROR
});