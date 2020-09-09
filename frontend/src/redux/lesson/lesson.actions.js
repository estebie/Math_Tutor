import lessonActionTypes from "./lesson.types";

export const lessonCreateStart = (form) => ({
    type: lessonActionTypes.LESSON_CREATE_START,
    payload: form
});

export const lessonCreateSuccess = (form) => ({
    type: lessonActionTypes.LESSON_CREATE_SUCCESS,
    payload: { form }
});

export const lessonCreateFailure = (error) => ({
    type: lessonActionTypes.LESSON_CREATE_FAILURE,
    payload: error
});