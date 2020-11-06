import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    UPDATE_USERS_REQUEST,
    UPDATE_USERS_SUCCESS,
    UPDATE_USERS_FAILURE,
    UPDATE_AVATAR_REQUEST,
    UPDATE_AVATAR_SUCCESS,
    UPDATE_AVATAR_FAILURE,
} from './userTypes';

const initialState = {
    loading: false,
    user: {
        id:'',
        name:'',
        dateOfBirth: '',
        photo: '',
        password: ''
    },
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_AVATAR_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case UPDATE_AVATAR_SUCCESS:
            return {
                loading: false,
                user: action.payload,
                error: ''
            }
        case UPDATE_AVATAR_FAILURE:
            return {
                loading: true,
                user: {},
                error: ''
            }
        default: return state
    }
}

export default reducer;