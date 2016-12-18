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
      emotions: this.props.emotions
    }
    this.getEmotionsInCategory = this.getEmotionsInCategory.bind(this);
    this.addEmotions = this.addEmotions.bind(this);
    this.clickEmotion = this.clickEmotion.bind(this);
  }
  componentDidMount (){
    this.props.actions.getEmotionsInCategory(1);
  }
  componentWillReceiveProps(nextProps){
    console.log("next Props", nextProps);
    if(nextProps.emotions !== this.props.emotions){
      this.setState({
        emotions: nextProps.emotions
      })
    };
  }
  getEmotionsInCategory (CategoryId){
    this.props.actions.getEmotionsInCategory(CategoryId);
    this.setState({emotions: this.props.emotions});
  }
  clickEmotion(id){
    this.setState([
      ...this.state.EmotionIds,
      {
        EmotionId: id
      }
    ])
  }
  addEmotions(){
    this.props.actions.addEmotions(this.state.emotionIds);
  }
  render(){
    console.log("state", this.state.emotions);
    return (
      <div>
        <EmotionForm
          emotions={this.state.emotions}
          getEmotions={this.getEmotionsInCategory}
          clickEmotion={this.clickEmotion}
          submitEmotions={this.addEmotions}
        />
      </div>
    )
  }
}


EmotionControl.contextTypes = {
  router: PropTypes.object
}

const mapStateToProps = (state) => ({emotions: state.emotions});

const mapDispatchToProps = (dispatch) => ({actions: bindActionCreators(assessmentActions, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(EmotionControl);
