import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    UPDATE_USERS_REQUEST,
    UPDATE_USERS_SUCCESS,
    UPDATE_USERS_FAILURE,
    UPDATE_AVATAR_REQUEST,
} from './userTypes';

const initialState = {
    loading: false,
    userData: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                userData: action.payload,
                error: ''
            }
        case FETCH_USERS_FAILURE:
            return {
                loading: true,
                userData: [],
                error: action.payload
            }
        case UPDATE_USERS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case UPDATE_USERS_SUCCESS:
            return {
                loading: true,
                userData: action.payload,
                error: ''
            }
        case UPDATE_USERS_FAILURE:
            return {
                loading: true,
                userData: [],
                error: action.payload
            }
        case UPDATE_AVATAR_REQUEST:
            return {
                ...state,
                loading: false,
                userData: action.payload
            }
        default: return state
    }
}

export default reducer;