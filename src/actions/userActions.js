import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';
import axios from 'axios';
import 'whatwg-fetch';

export function loginUserSuccess(user){
  return { type: types.LOGIN_USER_SUCCESS, user};
}

//The register method in the API will log the user in. Therefore, the login action is dispatched upon successful registration
// export function registerUser(user) {
//   return dispatch =>{
//     dispatch(beginAjaxCall());
//     return axios({
//       method: 'post',
//       url: 'http://bewellapi20161212034630.azurewebsites.net/account/RegisterJson',
//       data: user,
//       responseType: 'json'
//     })
//     .then(userResponse =>{
//         console.log("Successful Registration", userResponse);
//         dispatch(loginUserSuccess(userResponse.data));
//     })
//     .catch(error =>{
//       throw(error);
//     })
//   }
// }

export function registerUser(user) {
  return dispatch =>{
    dispatch(beginAjaxCall());
    return axios({
      method: 'post',
      url: 'http://localhost:5000/account/RegisterJson',
      data: user,
      responseType: 'json',
      xsrfCookieName: 'XSRF-TOKEN',
      xsrfHeaderName: 'X-XSRF-TOKEN'
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


// export function loginUser(user) {
//   return dispatch =>{
//     dispatch(beginAjaxCall());
//     return axios({
//       method: 'post',
//       url: 'http://bewellapi20161212034630.azurewebsites.net/account/LoginJson',
//       data: user,
//       responseType: 'json'
//     })
//     .then(userResponse =>{
//       console.log("Successful Login", userResponse);
//       dispatch(loginUserSuccess(userResponse.data));
//     })
//     .catch(error =>{
//       throw(error);
//     })
//   }
// }

// export function loginUser(user) {
//   return dispatch =>{
//     dispatch(beginAjaxCall());
//     return axios({
//       method: 'post',
//       url: 'http://localhost:5000/account/LoginJson',
//       data: user,
//       responseType: 'json',
//       xsrfCookieName: 'XSRF-TOKEN',
//       xsrfHeaderName: 'X-XSRF-TOKEN'
//     })
//     .then(userResponse =>{
//       console.log("Successful Login", userResponse);
//       dispatch(loginUserSuccess(userResponse.data));
//     })
//     .catch(error =>{
//       throw(error);
//     })
//   }
// }

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
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
    .then(userResponse =>{
      console.log("Successful Login", userResponse);
      dispatch(loginUserSuccess(userResponse));
    })
    .catch(error =>{
      throw(error);
    })
  }
}
