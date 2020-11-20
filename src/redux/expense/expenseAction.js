import axios from 'axios';
import {
    FETCH_EXPENSE_REQUEST,
    FETCH_EXPENSE_SUCCESS,
    FETCH_EXPENSE_FAILURE,
} from './expenseTypes';

export const fetchExpenseRequest = () => {
    return {
        type: FETCH_EXPENSE_REQUEST
    }
}

export const fetchExpenseSuccess = (expenses) => {
    return {
        type: FETCH_EXPENSE_SUCCESS,
        payload: expenses
    }
}

export const fetchExpenseFailure = (error) => {
    return {
        type: FETCH_EXPENSE_FAILURE,
        payload: error
    }
}

export const fetchExpense = () => {
    return (dispatch) => {
        dispatch(fetchExpenseRequest)
        axios.get('https://peaceful-gorge-77974.herokuapp.com/expenses/', {
            headers: {
                'access_token': localStorage.getItem("jwtToken")
            }
        })
        .then(response => {
            const expense = response.data;
            dispatch(fetchExpenseSuccess(expense))
        })
        .catch(error => {
            const errorMsg = error.message
            dispatch(fetchExpenseFailure(errorMsg))
        })
    }
}

