import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';
import 'whatwg-fetch';


export function loginUserSuccess(user){
  return { type: types.LOGIN_USER_SUCCESS, user};
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    console.log(error);
    throw error
  }
}

//The register method in the API will log the user in. Therefore, the login action is dispatched upon successful registration
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

export function registerUser(user) {
  return dispatch =>{
    dispatch(beginAjaxCall());
    fetch('http://localhost:5000/account/registerjson',{
      method: 'post',
      body: JSON.stringify(user),
      headers: {
        'Accept': 'application/json',
        'Content-Type': "application/json"
      },
      credentials: "include"
    })
    .then(checkStatus)
    .then(response => response.json())
        .then((responseJson) => {
        console.log("Successful Registration", responseJson);
        dispatch(loginUserSuccess(responseJson.data));
    })
    .catch(error =>{
      throw(error);
    })
  }
}

export function loginUser(user) {
  console.log("user", user);
  return dispatch =>{
    dispatch(beginAjaxCall());
    fetch('http://localhost:5000/account/LoginJson', {
      method: 'post',
      body: JSON.stringify(user),
      headers: {
        'Accept': 'application/json',
        'Content-Type': "application/json"
      },
      credentials: "include"
    })
    .then(checkStatus)
    .then(response => response.json())
      .then((responseJson) => {
      console.log("Successful Login", responseJson);
      dispatch(loginUserSuccess(responseJson));
    })
    .catch(error =>{
      throw(error);
    })
  }
}
