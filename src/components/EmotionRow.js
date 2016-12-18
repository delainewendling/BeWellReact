import React from 'react';

const EmotionRow = ({clickEmotions, emotion})=>{
  return(
    <div>
      <div className="col-xs-6" onClick=>
        {emotion.Name}
      </div>
    </div>
  )
}

export default EmotionRow;
