import { takeLatest, put, all, call } from 'redux-saga/effects';
import lessonActionTypes from "./lesson.types";
import { lessonCreateSuccess, lessonCreateFailure } from '../../redux/lesson/lesson.actions';

export function* lessonCreate({ payload: { title, formula, level } }) {
    try {
        const data = { title, formula, level };
        const response = yield fetch('http://localhost:8000/api/lessons/', {
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
                    console.log(response.json());
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                throw error;
            });
        console.log(response);
        //yield put(lessonCreateSuccess(email, password));
    } catch (error) {
        yield put(lessonCreateFailure(error.message));
    }
}

export function* onLessonCreate() {
    yield takeLatest(lessonActionTypes.LESSON_CREATE_START, lessonCreate);
}

export function* lessonSagas() {
    yield all([
        call(onLessonCreate),

    ]);
}