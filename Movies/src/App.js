import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to= "/movies">Movies</Link>
      </div>
    );
  }
}

export default App;
