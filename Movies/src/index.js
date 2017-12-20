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
import Movies from './components/Movies';
import MovieDetails from './components/MovieDetails';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore); //??

function NavBar(){
  return <div>Navigation Bar</div>
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <div>
        <NavBar />
        <Route exact path="/" component={Movies} />
        <Route path="/movies/:id" component={MovieDetails} />
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);  

