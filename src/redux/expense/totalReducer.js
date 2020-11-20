import {
    GET_TOTAL_REQUEST,
    GET_TOTAL_SUCCESS,
    GET_TOTAL_FAILURE
} from './totalTypes';

const initialState = {
    loading: false,
    totalExpenses: {},
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TOTAL_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_TOTAL_SUCCESS:
            return {
                loading: false,
                totalExpenses: action.payload,
                error: ''
            }
        case GET_TOTAL_FAILURE:
            return {
                loading: true,
                totalExpenses: {},
                error: action.payload
            }
        default: return state
    }
}

export default reducer;