import { takeLatest, put, all, call } from 'redux-saga/effects';
import userActionTypes from './user.types';
import { signInSuccess, signInFailure, signOutFailure, signOutSuccess, signUpSuccess, signUpFailure } from './user.actions';

export function* getAuthentication(email, password) {
    try {
        const data = { email, password };
        const response = yield fetch('http://localhost:8000/api/auth/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then(response => response.json())
            .catch((error) => {
                console.error('Error:', error);
                throw error;
            });
        if (response.non_field_errors === undefined) {
            yield put(signInSuccess(response))
        } else {
            throw response;
        }
    } catch (error) {
        yield put(signInFailure(error.message));
    }
}

export function* signInWithEmail({ payload: { email, password } }) {

    try {
        yield getAuthentication(email, password);
    } catch (error) {
        yield put(signInFailure(error.message));
    }
}

export function* onEmailSignInStart() {
    yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* userSignUp({ payload: { email, password, dob, first_name, last_name } }) {
    try {
        const is_admin = false;
        const profile = { dob, is_admin };
        const data = { email, password, first_name, last_name, profile };
        const response = yield fetch('http://localhost:8000/api/users/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then(response => {
                if (response.status !== 200 && response.status !== 201) {
                    throw new Error(response.status)
                } else {
                    response.json()
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                throw error;
            });
        console.log(response);
        yield put(signUpSuccess(email, password));
    } catch (error) {
        yield put(signUpFailure(error.message));
    }
}

export function* onUserSignUp() {
    yield takeLatest(userActionTypes.SIGN_UP_START, userSignUp);
}

export function* signInAfterSignUp({ payload: { email, password } }) {
    yield getAuthentication(email, password)
}

export function* onSignUpSuccess() {
    yield takeLatest(userActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}
export function* userSagas() {
    yield all([
        call(onEmailSignInStart),
        call(onUserSignUp),
        call(onSignUpSuccess)
    ]);
}