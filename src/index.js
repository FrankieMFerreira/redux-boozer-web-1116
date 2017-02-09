import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'; //gives us wide store access
import App from './components/app.js' //renders everything in the app

import rootReducer from './reducers/index.js' //all our combined reducers

const store = createStore(rootReducer) //create a store with ALL our reducers

//render everything to the DOM
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('rachelIsSoHot')
)
//provider makes store accessible everywhere
//container for the whole app, coming from index.html
