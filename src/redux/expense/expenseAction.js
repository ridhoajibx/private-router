import axios from 'axios';
import {
    FETCH_EXPENSE_REQUEST,
    FETCH_EXPENSE_SUCCESS,
    FETCH_EXPENSE_FAILURE,
<<<<<<< HEAD
    ADD_EXPENSE,
    UPDATE_EXPENSE
=======
>>>>>>> a3cad5890df3dc54c0be8d360e088702eb1481f0
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

export const addExpenses = (expenses) => {
    return {
        type: ADD_EXPENSE,
        payload: expenses
    }
}

export const updateExpenses = (expenses) => {
    return {
        type: UPDATE_EXPENSE,
        payload: expenses
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
<<<<<<< HEAD
    }
}

export const updateExpense = () => {
    return (dispatch) => {
    dispatch(fetchExpenseRequest)
    axios.put('https://peaceful-gorge-77974.herokuapp.com/expenses/add/{id}', {
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
=======
>>>>>>> a3cad5890df3dc54c0be8d360e088702eb1481f0
    }
}

