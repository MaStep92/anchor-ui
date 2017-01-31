/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './app';
import Loader from './loader';
import Dialog from './dialog';
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/loading" component={Loader} />
    <Route path="/dialog" component={Dialog} />
  </Router>,
  document.getElementById('root')
);
