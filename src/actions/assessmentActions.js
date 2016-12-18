import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';
import 'whatwg-fetch';

export function getEmotionsSuccess(emotions){
  return { type: types.GET_EMOTIONS_SUCCESS, emotions};
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

export function addAssessment(assessment) {
  console.log(assessment);
  return dispatch =>{
    dispatch(beginAjaxCall());
    fetch('http://localhost:5000/UserAssessments', {
      method: 'post',
      body: JSON.stringify(assessment),
      headers: {
        'Accept': 'application/json',
        'Access-Control-Allow-Credentials': 'true',
        'Content-Type': "application/json"
      },
      credentials: "include"
    })
    .then(checkStatus)
    .then(assessmentResponse =>{
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
        'Access-Control-Allow-Credentials': 'true',
        'Content-Type': "application/json"
      },
      credentials: "include"
    })
    .then(checkStatus)
    .then(emotions =>{
        console.log("get emotions", emotions);
        dispatch(getEmotionsSuccess(emotions));
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
        'Access-Control-Allow-Credentials': 'true',
        'Content-Type': "application/json"
      },
      credentials: "include"
    })
    .then(checkStatus)
    .then(emotionResponse =>{
        console.log("Successful Emotion Add", emotionResponse);
        return emotionResponse;
    })
    .catch(error =>{
      throw(error);
    })
  }
}

export function addEmotions(emotions) {
  Promise.all(emotions.map(emotion =>{
    return addEmotion(emotion);
  })))
  .then(emotionResponse =>{
    console.log("emotions added", emotionResponse);
  })
  .catch(error=>{
    console.log("error", error);
  })
}
