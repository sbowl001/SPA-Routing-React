import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';  


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore); //??

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/movies" component={Movies} />
        <Route path="/movies/:id" component={MovieDetail} />
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);  