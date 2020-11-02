import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE
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
        default: return state
    }
}

export default reducer;