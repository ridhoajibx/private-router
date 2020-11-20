import { combineReducers } from 'redux';
import globalReducer from './reducer/globalReducer';
import userReducer from './user/userReducer';
import expenseReducer from './expense/expenseReducer';
import totalReducer from './expense/totalReducer';

const rootReducer = combineReducers({
    user: userReducer,
    global: globalReducer,
    expense: expenseReducer,
    total: totalReducer,
})

export default rootReducer;