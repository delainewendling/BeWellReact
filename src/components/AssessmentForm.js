import React from 'react';

const AssessmentForm = ({onClick, header})=>{
  return (
    <div>
      <h1> How are you feeling {header}? </h1>
      <div>
        <h5 onClick={()=>{onClick(2)}}> Amazing! </h5>
      </div>
        <hr/>
      <div>
        <h5 onClick={()=>{onClick(1)}}> Alright </h5>
      </div>
        <hr/>
      <div>
        <h5 onClick={()=>{onClick(0)}}> Meh </h5>
      </div>
        <hr/>
      <div>
        <h5 onClick={()=>{onClick(-1)}}> Not so hot </h5>
      </div>
        <hr/>
      <div>
        <h5 onClick={()=>{onClick(-2)}}> Rough </h5>
      </div>
    </div>
  )
}

export default AssessmentForm;
