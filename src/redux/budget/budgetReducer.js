import {
    FETCH_BUDGET_REQUEST,
    FETCH_BUDGET_SUCCESS,
    FETCH_BUDGET_FAILURE
} from './budgetTypes';

const initialState = {
    loading: false,
    budgets: {},
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BUDGET_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_BUDGET_SUCCESS:
            return {
                loading: false,
                budgets: action.payload,
                error: ''
            }
        case FETCH_BUDGET_FAILURE:
            return {
                loading: true,
                budgets: {},
                error: action.payload
            }
                
        default: return state
    }
}

export default reducer;