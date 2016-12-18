import React, {PropTypes} from 'react';
import EmotionForm from '../components/EmotionForm';
import {connect} from 'react-redux';
import * as assessmentActions from '../actions/assessmentActions';
import {bindActionCreators} from 'redux';

class EmotionControl extends React.Component{
  constructor(props, context){
    super(props, context);
    this.state = {
      emotionIds: [],
      emotions: []
    }
    this.getEmotionsInCategory = this.getEmotionsInCategory.bind(this);
    this.addEmotion = this.addEmotion.bind(this);
    this.clickEmotion = this.clickEmotion.bind(this);
  }
  componentDidMount (){
    this.props.actions.getEmotionsInCategory(1)
    this.setState({emotions: this.props.emotions})
  }
  getEmotionsInCategory (CategoryId){
    this.props.actions.getEmotionsInCategory(CategoryId);
    this.setState({emotions: this.props.emotions});
  }
  clickEmotion(id){
    this.setState([
      ...emotionIds,
      {
        EmotionId: id
      }
    ])
  }
  addEmotions(){
    this.props.actions.addEmotions(this.state.emotionIds);
  }
  render(){
    return (
      <div>
        <EmotionForm
          getEmotions={this.getEmotionsInCategory}
          clickEmotion={this.clickEmotion}
          submitEmotions={this.addEmotions}
        />
      </div>
    )
  }
}

AssessmentControl.contextTypes = {
  router: PropTypes.object
}

const mapStateToProps = (state) => ({emotions: state.emotions});

const mapDispatchToProps = (dispatch) => ({actions: bindActionCreators(assessmentActions, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(AssessmentControl);
