import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';
import 'whatwg-fetch';

export function addEmotionSuccess(emotion){
  return { type: types.ADD_EMOTION_SUCCESS, emotion};
}
export function getEmotionsSuccess(emotion){
  return {type: types.GET_EMOTIONS_SUCCESS, emotion}
}

export function addAssessment(assessment) {
  console.log(assessment);
  return dispatch =>{
    dispatch(beginAjaxCall());
    fetch('http://localhost:5000/UserAssessments',{
      method: 'post',
      body: JSON.stringify(assessment),
      headers: {
        'Accept': 'application/json',
        'Content-Type': "application/json"
      },
      credentials: "include"
    })
    .then(assessmentResponse => {
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
        'Content-Type': "application/json"
      },
      credentials: "include"
    })
    .then(checkStatus)
    .then(response => response.json())
        .then((responseJson) => {
        console.log("get emotions", responseJson);
        dispatch(getEmotionsSuccess(responseJson));
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
        'Content-Type': "application/json"
      },
      credentials: "include"
    })
    .then(checkStatus)
    .then(response => response.json())
        .then((responseJson) => {
        console.log("get emotions", responseJson);
        console.log("Successful Emotion Add", responseJson);
        return responseJson;
    })
    .catch(error =>{
      throw(error);
    })
  }
}


export function addEmotions(emotions) {
  Promise.all(emotions.map(emotion => addEmotion(emotion)))
  .then(emotionResponse =>{
    console.log("emotions added", emotionResponse);
  })
  .catch(error=>{
    console.log("error", error);
  })
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
