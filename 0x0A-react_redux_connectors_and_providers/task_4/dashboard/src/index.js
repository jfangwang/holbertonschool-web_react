import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { uiReducer, defaultState } from './reducers/uiReducer';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Map } from 'immutable';
// import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer, {initialState} from './reducers/rootReducer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const store = createStore(
  combineReducers(rootReducer),
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
