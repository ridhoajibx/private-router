import {
    FETCH_EXPENSE_REQUEST,
    FETCH_EXPENSE_SUCCESS,
    FETCH_EXPENSE_FAILURE,
} from './expenseTypes';

const initialState = {
    loading: false,
    expense: {
        id:'',
        name:'',
        dateOfBirth: '',
        photo: '',
        password: ''
    },
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
                userData: action.payload,
                expenses: action.payload,
                error: ''
            }
        case FETCH_EXPENSE_FAILURE:
            return {
                loading: true,
                userData: {},
                expenses: {},
                error: action.payload
            }
        default: return state
    }
}

export default reducer;