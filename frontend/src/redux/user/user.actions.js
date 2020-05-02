import userActionTypes from "./user.types";

export const emailSignInStart = (email, password) => ({
    type: userActionTypes.EMAIL_SIGN_IN_START,
    payload: { email, password }
});

export const signInSuccess = (user) => ({
    type: userActionTypes.SIGN_IN_SUCCESS,
    payload: user
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