import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';
import axios from 'axios';

export function addAssessmentSuccess(assessment){
  return { type: types.ADD_ASSESSMENT_SUCCESS, assessment};
}

export function addEmotionSuccess(emotion){
  return { type: types.ADD_EMOTION_SUCCESS, emotion};
}

export function addAssessment(assessment) {
  console.log(assessment);
  return dispatch =>{
    dispatch(beginAjaxCall());
    return axios({
      method: 'post',
      url: 'http://bewellapi20161212034630.azurewebsites.net/UserAssessments',
      data: assessment,
      responseType: 'json'
    })
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
    return axios({
        method: 'post',
        url: 'http://bewellapi20161212034630.azurewebsites.net/Emotion',
        data: emotion,
        responseType: 'json'
    })
    .then(emotionResponse =>{
        console.log("Successful Emotion Add", emotionResponse);
        dispatch(addEmotionSuccess(emotionResponse));
    })
    .catch(error =>{
      throw(error);
    })
  }
}
