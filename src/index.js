// Set up your application entry point here...
import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import * as bookActions from './actions/bookActions';
import configureStore from './store/configureStore';

const store = configureStore();
store.dispatch(bookActions.fetchBooks());

render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory}/>
  </Provider>,
  document.getElementById('app')
);
