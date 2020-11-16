import {
    FETCH_EXPENSE_REQUEST,
    FETCH_EXPENSE_SUCCESS,
    FETCH_EXPENSE_FAILURE,
} from './expenseTypes';

const initialState = {
    loading: false,
<<<<<<< HEAD
    expense: {
        id:'',
        name:'',
        dateOfBirth: '',
        photo: '',
        password: ''
    },
=======
    expenses: {},
>>>>>>> b2b21923255464ccdd626f0870b316618fd6a936
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
<<<<<<< HEAD
                userData: action.payload,
=======
                expenses: action.payload,
>>>>>>> b2b21923255464ccdd626f0870b316618fd6a936
                error: ''
            }
        case FETCH_EXPENSE_FAILURE:
            return {
                loading: true,
<<<<<<< HEAD
                userData: {},
=======
                expenses: {},
>>>>>>> b2b21923255464ccdd626f0870b316618fd6a936
                error: action.payload
            }
        default: return state
    }
}

export default reducer;