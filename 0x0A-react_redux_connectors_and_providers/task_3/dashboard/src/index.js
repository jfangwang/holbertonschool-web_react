import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { uiReducer, defaultState } from './reducers/uiReducer';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Map } from 'immutable';
import { composeWithDevTools } from 'redux-composeWithDevTools';

const store = createStore(
  uiReducer, Map(defaultState),
  applyMiddleware(thunk),
  composeEnhancers(applyMiddleware(thunk))
);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
