import React from 'react';
<<<<<<< HEAD
import EmotionRow from './components/EmotionRow';

const EmotionForm = ({emotions, getEmotions, clickEmotion, submitEmotions})=>{
  render(){
    return (
      //Tabs at the top to signify emotions
=======
import EmotionRow from './EmotionRow';

const EmotionForm = ({emotions, getEmotions, clickEmotion, submitEmotions})=>{
    return (
>>>>>>> master
      <div>
        <div className="row">
          What Emotions are you Feeling?
        </div>
        <div className="row">
          <div className="col-xs-offset-1 col-xs-2" onClick={()=>{getEmotions(1)}}>
<<<<<<< HEAD
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
=======
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
        {emotions && emotions.length > 0 && emotions.map((emotion, index) =>
>>>>>>> master
          <EmotionRow
            key={index}
            emotion={emotion}
            clickEmotion={clickEmotion}
          />
        )}
        <button onClick={submitEmotions}> Submit </button>
      </div>
    )
<<<<<<< HEAD
  }
=======
>>>>>>> master
}

export default EmotionForm;
