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
    console.log("props", this.props);
    if (this.props.route.header === "Mentally"){
        this.setState({
          IsPhysical: false,
          header: "Mentally"
        })
    } else if (this.props.route.header === "Physically") {
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
    if (this.props.route.header === "Mentally"){
      this.context.router.push('/assessment/2');
    } else if (this.props.route.header === "Physically") {
      this.context.router.push('/assessment/3');
    }
  }
  render(){
    const header = this.props.route.header;
    return (
      <div>
        <AssessmentForm
          onClick={this.submitAssessment}
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
