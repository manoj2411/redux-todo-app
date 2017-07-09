import React from 'react';
import {render} from 'react-dom'
// import App from './components/app'
import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import todoApp from './reducers'

import routes from './routes'

// render(<App />, document.getElementById('app'))

// const store = createStore((state = {}) => state, applyMiddleware(thunk))

let store = createStore(todoApp);

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app'))
