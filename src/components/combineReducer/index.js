import { combineReducers } from 'redux';
import editReducer from './editReducer';
import userReducer from './userReducer'

 const rootReducer = 
  combineReducers({
    editReducer,
    userReducer
});
export default rootReducer;