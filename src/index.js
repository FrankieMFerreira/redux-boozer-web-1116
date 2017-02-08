import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/app.js'
import { fetchCocktails } from './actions/index.js'

import cocktailsReducer from './reducers/cocktails_reducer.js'

const store = createStore(cocktailsReducer)
store.dispatch(fetchCocktails())
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('rachelIsSoHot')
)
