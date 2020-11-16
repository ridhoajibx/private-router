import {
    FETCH_EXPENSE_REQUEST,
    FETCH_EXPENSE_SUCCESS,
    FETCH_EXPENSE_FAILURE,
} from './expenseTypes';

const initialState = {
    loading: false,
    expenses: {},
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_EXPENSE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_EXPENSE_SUCCESS:
            return {
                loading: false,
                expenses: action.payload,
                error: ''
            }
        case FETCH_EXPENSE_FAILURE:
            return {
                loading: true,
                expenses: {},
                error: action.payload
            }
        default: return state
    }
}

export default reducer;