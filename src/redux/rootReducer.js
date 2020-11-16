import { combineReducers } from 'redux';
import globalReducer from './reducer/globalReducer';
import userReducer from './user/userReducer';
import expenseReducer from './expense/expenseReducer';

const rootReducer = combineReducers({
    user: userReducer,
    global: globalReducer,
    expense: expenseReducer
})

export default rootReducer;