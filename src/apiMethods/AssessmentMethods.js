import axios from 'axios';

export function addAssessment (assessment) {
  console.log("assessment in api method", assessment);
  return axios({
    method: 'post',
    url: 'http://bewellapi20161212034630.azurewebsites.net/UserAssessments',
    data: assessment,
    responseType: 'json'
  })
  // .then(response =>{
  //   console.log("response data", response);
  // })
  // .catch(error=>{
  //   console.log("there was an error", error);
  //   throw(error);
  // })
}

export function addEmotion (emotion) {
  console.log(emotion);
  axios({
    method: 'post',
    url: 'http://bewellapi20161212034630.azurewebsites.net/Emotion',
    data: emotion,
    responseType: 'json'
  })
  // .then(response =>{
  //   console.log("response data", response);
  // })
  // .catch(error=>{
  //   console.log("there was an error", error);
  //   throw(error);
  // })
}
