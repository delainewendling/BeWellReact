import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';
import axios from 'axios';

export function loginUserSuccess(user){
  return { type: types.LOGIN_USER_SUCCESS, user};
}

//The register method in the API will log the user in. Therefore, the login action is dispatched upon successful registration
export function registerUser(user) {
  return dispatch =>{
    dispatch(beginAjaxCall());
    return axios({
      method: 'post',
      url: 'http://bewellapi20161212034630.azurewebsites.net/account/RegisterJson',
      data: user,
      responseType: 'json'
    })
    .then(userResponse =>{
        console.log("Successful Registration", userResponse);
        dispatch(loginUserSuccess(userResponse.data));
    })
    .catch(error =>{
      throw(error);
    })
  }
}

export function loginUser(user) {
  return dispatch =>{
    dispatch(beginAjaxCall());
    return axios({
      method: 'post',
      url: 'http://bewellapi20161212034630.azurewebsites.net/account/LoginJson',
      data: user,
      responseType: 'json'
    })
    .then(userResponse =>{
      console.log("Successful Login", userResponse);
      dispatch(loginUserSuccess(userResponse.data));
    })
    .catch(error =>{
      throw(error);
    })
  }
}
