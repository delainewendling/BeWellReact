import {combineReducers} from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import users from './userReducer';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  users,
  ajaxCallsInProgress,
  form: formReducer
});
export default rootReducer;
