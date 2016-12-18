import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';
import 'whatwg-fetch';
<<<<<<< HEAD

export function getEmotionsSuccess(emotions){
  return { type: types.GET_EMOTIONS_SUCCESS, emotions};
}
=======
>>>>>>> master

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}
export function getEmotionsSuccess(emotion){
  return {type: types.GET_EMOTIONS_SUCCESS, emotion}
}

export function addAssessment(assessment) {
  console.log(assessment);
  return dispatch =>{
    dispatch(beginAjaxCall());
<<<<<<< HEAD
    fetch('http://localhost:5000/UserAssessments', {
=======
    fetch('http://localhost:5000/UserAssessments',{
>>>>>>> master
      method: 'post',
      body: JSON.stringify(assessment),
      headers: {
        'Accept': 'application/json',
<<<<<<< HEAD
        'Access-Control-Allow-Credentials': 'true',
=======
>>>>>>> master
        'Content-Type': "application/json"
      },
      credentials: "include"
    })
<<<<<<< HEAD
    .then(checkStatus)
    .then(assessmentResponse =>{
=======
    .then(assessmentResponse => {
>>>>>>> master
        console.log("Successful Assessment Add", assessmentResponse);
    })
    .catch(error =>{
      throw(error);
    })
  }
}

export function getEmotionsInCategory(categoryId){
  return dispatch =>{
    dispatch(beginAjaxCall());
    fetch('http://localhost:5000/Emotions/'+categoryId, {
      method: 'get',
      headers: {
        'Accept': 'application/json',
<<<<<<< HEAD
        'Access-Control-Allow-Credentials': 'true',
=======
>>>>>>> master
        'Content-Type': "application/json"
      },
      credentials: "include"
    })
    .then(checkStatus)
<<<<<<< HEAD
    .then(emotions =>{
        console.log("get emotions", emotions);
        dispatch(getEmotionsSuccess(emotions));
=======
    .then(response => response.json())
        .then((responseJson) => {
        console.log("get emotions", responseJson);
        dispatch(getEmotionsSuccess(responseJson));
>>>>>>> master
    })
    .catch(error =>{
      throw(error);
    })
  }
}

export function addEmotion(emotion){
  return dispatch =>{
    dispatch(beginAjaxCall());
    fetch('http://localhost:5000/UserAssessments', {
      method: 'post',
      body: JSON.stringify(emotion),
      headers: {
        'Accept': 'application/json',
<<<<<<< HEAD
        'Access-Control-Allow-Credentials': 'true',
=======
>>>>>>> master
        'Content-Type': "application/json"
      },
      credentials: "include"
    })
    .then(checkStatus)
<<<<<<< HEAD
    .then(emotionResponse =>{
        console.log("Successful Emotion Add", emotionResponse);
        return emotionResponse;
=======
    .then(response => response.json())
        .then((responseJson) => {
        console.log("get emotions", responseJson);
        console.log("Successful Emotion Add", responseJson);
        return responseJson;
>>>>>>> master
    })
    .catch(error =>{
      throw(error);
    })
  }
}

<<<<<<< HEAD
export function addEmotions(emotions) {
  Promise.all(emotions.map(emotion =>{
    return addEmotion(emotion);
  })))
=======

export function addEmotions(emotions) {
  Promise.all(emotions.map(emotion => addEmotion(emotion)))
>>>>>>> master
  .then(emotionResponse =>{
    console.log("emotions added", emotionResponse);
  })
  .catch(error=>{
    console.log("error", error);
  })
}
<<<<<<< HEAD
=======

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
>>>>>>> master
