import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import Greetings from './components/greetings';
import SignupPage from './components/auth/signup_page'


export default (
  <Route path="/" component={App} >
    // 2 things required here, 1 is path and other is component.
    <IndexRoute component={Greetings} />
    <Route path="signup" component={SignupPage} />
  </Route>
);
// IndexRoute - is when we have no other route, default route.
// Inside our app component we want render url specific content.
