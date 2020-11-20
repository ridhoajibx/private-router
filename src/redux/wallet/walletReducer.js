import {
    FETCH_WALLET_REQUEST,
    FETCH_WALLET_SUCCESS,
    FETCH_WALLET_FAILURE
} from './walletTypes';

const initialState = {
    loading: false,
    wallets: {},
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_WALLET_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_WALLET_SUCCESS:
            return {
                loading: false,
                wallets: action.payload,
                error: ''
            }
        case FETCH_WALLET_FAILURE:
            return {
                loading: true,
                wallets: {},
                error: action.payload
            }
                
        default: return state
    }
}

export default reducer;