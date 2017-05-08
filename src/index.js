import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, browserHistory } from 'react-router';
import { createDevTools } from 'redux-devtools';
import promise from 'redux-promise';
import DockMonitor from 'redux-devtools-dock-monitor';
import LogMonitor from 'redux-devtools-log-monitor';
import routes from './routes';
import reducers from './reducers';

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey='ctrl-h'
             changePositionKey='ctrl-q'
             defaultIsVisible={false}>
    <LogMonitor theme='tomorrow' />
  </DockMonitor>
);

const enhancer = compose(
  applyMiddleware(promise),
  DevTools.instrument(),
);

ReactDOM.render(
  <Provider store={createStore(reducers, {}, enhancer)}>
    <div>
      <Router history={ browserHistory } routes={ routes } />
      <DevTools />
    </div>
  </Provider>
  , document.querySelector('.container'));
