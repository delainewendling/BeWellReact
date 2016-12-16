import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';
import 'whatwg-fetch';

export function addAssessmentSuccess(assessment){
  return { type: types.ADD_ASSESSMENT_SUCCESS, assessment};
}

export function addEmotionSuccess(emotion){
  return { type: types.ADD_EMOTION_SUCCESS, emotion};
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
        dispatch(addAssessmentSuccess(assessmentResponse));
    })
    .catch(error =>{
      throw(error);
    })
  }
}

export function addEmotion(emotion) {
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
        dispatch(addEmotionSuccess(emotionResponse));
    })
    .catch(error =>{
      throw(error);
    })
  }
}
