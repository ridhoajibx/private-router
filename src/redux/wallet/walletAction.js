import axios from 'axios';
import {
    FETCH_WALLET_REQUEST,
    FETCH_WALLET_SUCCESS,
    FETCH_WALLET_FAILURE
} from './walletTypes';

export const fetchWalletRequest = () => {
    return {
        type: FETCH_WALLET_REQUEST
    }
}

export const fetchWalletSuccess = (wallets) => {
    return {
        type: FETCH_WALLET_SUCCESS,
        payload: wallets
    }
}

export const fetchWalletFailure = (error) => {
    return {
        type: FETCH_WALLET_FAILURE,
        payload: error
    }
}

export const fetchWallet = () => {
    return (dispatch) => {
        dispatch(fetchWalletRequest)
        axios.get('https://peaceful-gorge-77974.herokuapp.com/wallet/', {
            headers: {
                'access_token': localStorage.getItem("jwtToken")
            }
        })
        .then(response => {
            const wallet = response.data;
            dispatch(fetchWalletSuccess(wallet))
        })
        .catch(error => {
            const errorMsg = error.message
            dispatch(fetchWalletFailure(errorMsg))
        })
    }
}



