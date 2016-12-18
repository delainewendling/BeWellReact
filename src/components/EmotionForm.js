import React from 'react';
import EmotionRow from './components/EmotionRow';

const EmotionForm = ({emotions, getEmotions, clickEmotion, submitEmotions})=>{
  render(){
    return (
      //Tabs at the top to signify emotions
      <div>
        <div className="row">
          What Emotions are you Feeling?
        </div>
        <div className="row">
          <div className="col-xs-offset-1 col-xs-2" onClick={()=>{getEmotions(1)}}>
            Happy
          </div>
          <div className="col-xs-2" onClick={()=>{getEmotions(4)}}>
            Content
          </div>
          <div className="col-xs-2" onClick={()=>{getEmotions(2)}}>
            Sad
          </div>
          <div className="col-xs-2" onClick={()=>{getEmotions(5)}}>
            Afraid
          </div>
          <div className="col-xs-2" onClick={()=>{getEmotions(3)}}>
            Angry
          </div>
        </div>
        //Rows of emotions
        {emotions.length > 0 && emotions.map((emotion, index) =>
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
}

export default EmotionForm;
