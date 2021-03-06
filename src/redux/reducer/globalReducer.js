import isEmpty from 'lodash/isEmpty';
const globalState = {
    show: false,
    showExpense: false,
    isAuthenticated: false,
    isLoading: false,
    user: {}
}

const globalReducer = (state = globalState, action) => {
    if(action.type === 'SHOW') {
        return {
            ...state,
            show: !state.show
        }
    }
    if(action.type === 'SHOW_EXPENSE') {
        return {
            ...state,
            showExpense: !state.showExpense
        }
    }
    if(action.type === 'SET_CURRENT_USER') {
        return {
            ...state,
            isAuthenticated: !isEmpty(action.user),
            user: action.user,
            show: false
        }
    }
    if(action.type === 'SHOW_LOADER') {
        return {
            ...state,
            isLoading: true
        }
    }
    if(action.type === 'HIDE_LOADER') {
        return {
            ...state,
            isLoading: false
        }
    }
    return state;
}

export default globalReducer;