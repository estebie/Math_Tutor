import { takeLatest, put, all, call } from 'redux-saga/effects';
import userActionTypes from './user.types';
import { signInSuccess, signInFailure, signOutFailure, signOutSuccess } from './user.actions';

export function* signInWithEmail({ payload: { email, password } }) {

    try {
        console.log(email, password);

        const data = { email, password };
        console.log(data);
        const response = yield fetch('http://localhost:8000/api/auth/login/', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then(response => response.json())
            .catch((error) => {
                console.error('Error:', error);
            });
        if (response.non_field_errors === undefined) {
            yield put(signInSuccess({ response }))
        } else {
            throw response;
        }
    } catch (error) {
        yield put(signInFailure(error.message));
    }
}

export function* onEmailSignInStart() {
    yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* userSagas() {
    yield all([
        call(onEmailSignInStart),
    ]);
}