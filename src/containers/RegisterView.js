import React, {PropTypes} from 'react';
import RegisterForm from '../components/RegisterForm';
import {connect} from 'react-redux';
import * as userActions from '../actions/userActions';
import {bindActionCreators} from 'redux';

class RegisterView extends React.Component {
  constructor(props, context){
    super (props, context);
    this.state = {
      user: {},
      errors: {}
    };
    this.updateUserState = this.updateUserState.bind(this);
    this.registerUser = this.registerUser.bind(this);
  }
  updateUserState (e){
    const field = e.target.name;
    let user = this.state.user;
    user[field] = e.target.value;
    return this.setState({user: user});
  }
  registerUser (e){
    e.preventDefault();
    this.props.actions.registerUser(this.state.user);
    this.context.router.push('/assessment/1');
  }
  render(){
    return (
      <div>
        <RegisterForm
          onChange={this.updateUserState}
          onSubmit={this.registerUser}
          user={this.state.user}
        />
      </div>
    )
  }
}

RegisterView.propTypes = {
  user: PropTypes.object,
  actions: PropTypes.object.isRequired
};

RegisterView.contextTypes = {
  router: PropTypes.object
}

const mapStateToProps = (state)=> ({user: state.user});

const mapDispatchToProps = (dispatch) => ({actions: bindActionCreators(userActions, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterView);
