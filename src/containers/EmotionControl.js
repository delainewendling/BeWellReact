import React, {PropTypes} from 'react';
import EmotionForm from '../components/EmotionForm';
import {connect} from 'react-redux';
import * as assessmentActions from '../actions/assessmentActions';
import {bindActionCreators} from 'redux';

class EmotionControl extends React.Component{
  constructor(props, context){
    super(props, context);
    this.state = {
      emotions: []
    }
    this.getEmotionsInCategory = this.getEmotionsInCategory.bind(this);
    this.submitEmotion = this.submitEmotion.bind(this);
    this.addEmotion = this.addEmotion.bind(this);
  }
  componentDidMount (){
    this.props.actions.getEmotionsInCategory()
    //set the emotions state to happy
  }
  submitAssessment(value){
    const assessment = {
        AssessmentValue: value,
        IsPhysical: this.state.IsPhysical
    }
  }
  getEmotionsInCategory (CategoryId){

  }
  addEmotion (){

  }
  render(){
    return (
      <div>
        <EmotionForm
          getEmotions={this.getEmotionsInCategory}
          clickEmotion = {this.addEmotion}
          header={header}
        />
      </div>
    )
  }
}

AssessmentControl.contextTypes = {
  router: PropTypes.object
}

const mapDispatchToProps = (dispatch) => ({actions: bindActionCreators(assessmentActions, dispatch)});

export default connect(null, mapDispatchToProps)(AssessmentControl);
