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
<<<<<<< HEAD
      emotions: []
    }
    this.getEmotionsInCategory = this.getEmotionsInCategory.bind(this);
    this.addEmotion = this.addEmotion.bind(this);
=======
      emotions: this.props.emotions
    }
    this.getEmotionsInCategory = this.getEmotionsInCategory.bind(this);
    this.addEmotions = this.addEmotions.bind(this);
>>>>>>> master
    this.clickEmotion = this.clickEmotion.bind(this);
  }
  componentDidMount (){
    this.props.actions.getEmotionsInCategory(1)
<<<<<<< HEAD
    this.setState({emotions: this.props.emotions})
=======
    this.setState({emotions: this.props.emotions});
  }
  componentWillReceiveProps(nextProps){
    console.log("next Props", nextProps);
    if(nextProps.emotions != this.props.emotions){
      this.setState({
        emotions: nextProps.emotions
      })
    };
>>>>>>> master
  }
  getEmotionsInCategory (CategoryId){
    this.props.actions.getEmotionsInCategory(CategoryId);
    this.setState({emotions: this.props.emotions});
  }
  clickEmotion(id){
    this.setState([
<<<<<<< HEAD
      ...emotionIds,
=======
      ...this.state.emotionIds,
>>>>>>> master
      {
        EmotionId: id
      }
    ])
  }
  addEmotions(){
    this.props.actions.addEmotions(this.state.emotionIds);
  }
  render(){
<<<<<<< HEAD
    return (
      <div>
        <EmotionForm
=======
    console.log("props", this.props);
    return (
      <div>
        <EmotionForm
          emotions={this.state.emotions}
>>>>>>> master
          getEmotions={this.getEmotionsInCategory}
          clickEmotion={this.clickEmotion}
          submitEmotions={this.addEmotions}
        />
      </div>
    )
  }
}

<<<<<<< HEAD
AssessmentControl.contextTypes = {
=======
EmotionControl.contextTypes = {
>>>>>>> master
  router: PropTypes.object
}

const mapStateToProps = (state) => ({emotions: state.emotions});

const mapDispatchToProps = (dispatch) => ({actions: bindActionCreators(assessmentActions, dispatch)});

<<<<<<< HEAD
export default connect(mapStateToProps, mapDispatchToProps)(AssessmentControl);
=======
export default connect(mapStateToProps, mapDispatchToProps)(EmotionControl);
>>>>>>> master
