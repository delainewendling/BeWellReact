import {combineReducers} from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import users from './userReducer';
import emotions from './emotionReducer';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  users,
  emotions,
  ajaxCallsInProgress,
  form: formReducer
});
export default rootReducer;
