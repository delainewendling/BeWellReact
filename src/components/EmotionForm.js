import React from 'react';
import EmotionRow from './EmotionRow';

const EmotionForm = ({emotions, getEmotions, clickEmotion, submitEmotions})=>{
    return (
      <div>
        <div className="row">
          What Emotions are you Feeling?
        </div>
        <div className="row">
          <div className="col-xs-offset-1 col-xs-2" onClick={()=>{getEmotions(1)}}>
            <h5> Happy </h5>
          </div>
          <div className="col-xs-2" onClick={()=>{getEmotions(4)}}>
            <h5> Content </h5>
          </div>
          <div className="col-xs-2" onClick={()=>{getEmotions(2)}}>
            <h5> Sad </h5>
          </div>
          <div className="col-xs-2" onClick={()=>{getEmotions(5)}}>
            <h5> Afraid </h5>
          </div>
          <div className="col-xs-2" onClick={()=>{getEmotions(3)}}>
            <h5> Angry </h5>
          </div>
        </div>
        {emotions && emotions.map((emotion, index) => 
          <EmotionRow
            key={index}
            emotion={emotion}
            clickEmotion={clickEmotion}
          />
        )}
        <button onClick={submitEmotions}> Submit </button>
      </div>
    )
}

export default EmotionForm;
