import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import Greetings from './components/greetings';
import SignupPage from './components/auth/signup_page'
import TodoPage from './containers/TodoPage'

export default (
  <Route path="/" component={App} >
    <IndexRoute component={Greetings} />
    <Route path="signup" component={SignupPage} />
    <Route path="todos" component={TodoPage} />
  </Route>
);
// IndexRoute - is when we have no other route, default route.
// Inside our app component we want render url specific content.
