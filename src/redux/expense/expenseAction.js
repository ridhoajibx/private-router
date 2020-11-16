import axios from 'axios';
import {
    FETCH_EXPENSE_REQUEST,
    FETCH_EXPENSE_SUCCESS,
    FETCH_EXPENSE_FAILURE
<<<<<<< HEAD
} from './userTypes';
=======
} from './expenseTypes';
>>>>>>> b2b21923255464ccdd626f0870b316618fd6a936

export const fetchExpenseRequest = () => {
    return {
        type: FETCH_EXPENSE_REQUEST
    }
}

<<<<<<< HEAD
export const fetchExpenseSuccess = (expense) => {
    return {
        type: FETCH_EXPENSE_SUCCESS,
        payload: expense
=======
export const fetchExpenseSuccess = (expenses) => {
    return {
        type: FETCH_EXPENSE_SUCCESS,
        payload: expenses
>>>>>>> b2b21923255464ccdd626f0870b316618fd6a936
    }
}

const fetchExpenseFailure = (error) => {
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