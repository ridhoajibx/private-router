import axios from 'axios';
import {
    FETCH_BUDGET_REQUEST,
    FETCH_BUDGET_SUCCESS,
    FETCH_BUDGET_FAILURE
} from './budgetTypes';

export const fetchBudgetRequest = () => {
    return {
        type: FETCH_BUDGET_REQUEST
    }
}

export const fetchBudgetSuccess = (budgets) => {
    return {
        type: FETCH_BUDGET_SUCCESS,
        payload: budgets
    }
}

export const fetchBudgetFailure = (error) => {
    return {
        type: FETCH_BUDGET_FAILURE,
        payload: error
    }
}

export const fetchBudget = () => {
    return (dispatch) => {
        dispatch(fetchBudgetRequest)
        axios.get('https://peaceful-gorge-77974.herokuapp.com/budget/', {
            headers: {
                'access_token': localStorage.getItem("jwtToken")
            }
        })
        .then(response => {
            const budget = response.data;
            dispatch(fetchBudgetSuccess(budget))
        })
        .catch(error => {
            const errorMsg = error.message
            dispatch(fetchBudgetFailure(errorMsg))
        })
    }
}



