import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function userReducer(state = initialState.emotions, action){
  switch(action.type){
    //What the ES6 spread operator does is return a new instance of the state array. Then you can use Object.assign to create a deep copy of the array with a new item.
    case types.GET_EMOTIONS_SUCCESS:
      console.log("action", action);
      return [
        ...state,
        Object.assign({}, action.emotions)
      ]
    default:
      return state;
  }
}
