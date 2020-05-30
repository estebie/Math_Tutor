import userActionTypes from "./user.types"

const INITIAL_STATE = {
    token: null,
    currentUser: null,
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
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
        case userActionTypes.SiGN_OUT_FAILURE:
        case userActionTypes.SIGN_UP_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}

export default userReducer;