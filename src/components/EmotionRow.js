import React from 'react';

const EmotionRow = ({clickEmotion, emotion})=>{
  return(
    <div>
      <div className="col-xs-6" onClick={()=>{clickEmotion(emotion.emotionId)}}>
        {emotion.name}
      </div>
    </div>
  )
}

export default EmotionRow;
