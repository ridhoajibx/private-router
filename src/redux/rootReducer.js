import { combineReducers } from 'redux';
import globalReducer from './reducer/globalReducer';
import userReducer from './user/userReducer';

const rootReducer = combineReducers({
    user: userReducer,
    global: globalReducer
})

export default rootReducer;