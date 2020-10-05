import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import userActionTypes from "./user.types"

const INITIAL_STATE = {
    userToken: null,
    currentUser: null,
    error: null,
    error_page: null,
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                userToken: action.payload.token,
                currentUser: action.payload.user,
                error: null
            }
        case userActionTypes.SiGN_OUT_SUCCESS:
            return {
                ...state,
                userToken: null,
                currentUser: null,
                error: null
            }
        case userActionTypes.SIGN_IN_FAILURE:
        case userActionTypes.SIGN_UP_FAILURE:
            return {
                ...state,
                error_page: action.type,
                error: action.payload
            }
        case userActionTypes.CLEAR_USER_ERROR:
            return {
                ...state,
                error_page: null,
                error: null
            }
        case userActionTypes.SiGN_OUT_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}

const userConfig = {
    key: 'user',
    storage,
    blacklist: ['error', 'error_page', 'token'],
    stateReconciler: hardSet,
}

export default persistReducer(userConfig, userReducer);