import React from 'react';
import {Route, IndexRoute } from 'react-router';
import App from './App.js';
import RegisterView from './containers/RegisterView';
import LoginView from './containers/LoginView';
import AssessmentControl from './containers/AssessmentControl';
import EmotionControl from './containers/EmotionControl';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={LoginView} />
    <Route path="login" component={LoginView}/>
    <Route path="register" component={RegisterView}/>
    <Route path="assessment/:id" component={AssessmentControl}/>
  </Route>
)

  //<Route path="assessment/3" component={EmotionControl}/>
