import { combineReducers } from 'redux';
import globalReducer from './reducer/globalReducer';
import userReducer from './user/userReducer';
import expenseReducer from './expense/expenseReducer';
import totalReducer from './expense/totalReducer';
import budgetReducer from './budget/budgetReducer';
import walletReducer from './wallet/walletReducer';

const rootReducer = combineReducers({
    user: userReducer,
    global: globalReducer,
    expense: expenseReducer,
    total: totalReducer,
    budget: budgetReducer,
    wallet: walletReducer
})

export default rootReducer;