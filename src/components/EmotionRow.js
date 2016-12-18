import React from 'react';

const EmotionRow = ({clickEmotions, emotion})=>{
  return(
    <div>
      <div className="col-xs-6" onClick={()=>{clickEmotions(emotion.emotionId)}}>
        {emotion.name}
      </div>
    </div>
  )
}

export default EmotionRow;
