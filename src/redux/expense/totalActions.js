import axios from 'axios';
import {
    GET_TOTAL_REQUEST,
    GET_TOTAL_SUCCESS,
    GET_TOTAL_FAILURE
} from './totalTypes';

export const getTotalRequest = () => {
    return {
        type: GET_TOTAL_REQUEST
    }
}

export const getTotalSuccess = (total) => {
    return {
        type: GET_TOTAL_SUCCESS,
        payload: total
    }
}

export const getTotalFailure = (error) => {
    return {
        type: GET_TOTAL_FAILURE,
        payload: error
    }
}

export const getTotalExpenses = () => {
    let url = 'https://peaceful-gorge-77974.herokuapp.com/expenses/totalbybudget'
    let header = {
        headers: {
            'Content-Type': 'application/json',
            'access_token': localStorage.getItem("jwtToken")
        }
    }
    return (dispatch) => {
        dispatch(getTotalRequest)
        axios.get(url, header)
            .then(response => {
                console.log(response,'cek response total');
                const total = response.data;
                dispatch(getTotalSuccess(total))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(getTotalFailure(errorMsg))
            })
    }
}