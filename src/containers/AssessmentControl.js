import React, {PropTypes} from 'react';
import AssessmentForm from '../components/AssessmentForm';
import {connect} from 'react-redux';
import * as assessmentActions from '../actions/assessmentActions';
import {bindActionCreators} from 'redux';

class AssessmentControl extends React.Component{
  constructor(props, context){
    super(props, context);
    this.state = {
      IsPhysical: null,
      header: null
    }
    this.submitAssessment = this.submitAssessment.bind(this);
  }
  componentDidMount(){
    if (this.props.routeParams.id === "1"){
        this.setState({
          IsPhysical: false,
          header: "Mentally"
        })
    } else if (this.props.routeParams.id === "2") {
        this.setState({
          IsPhysical: true,
          header: "Physically"
        })
    }
  }
  submitAssessment(value){
    const assessment = {
        AssessmentValue: value,
        IsPhysical: this.state.IsPhysical
    }
    this.props.actions.addAssessment(assessment);
    if (this.props.routeParams.id === "1"){
      this.context.router.push('/assessment/2');
    } else if (this.props.routeParams.id === "2") {
      this.context.router.push('/assessment/3');
    }
  }
  render(){
    return (
      <div>
        <AssessmentForm
          onClick={this.submitAssessment}
          header={this.state.header}
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
