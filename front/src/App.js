import React, { Component } from 'react';
import './App.css';
import Login from './components/Main/Login';
import Graphics from './components/Main/graphics';

class App extends Component {
  render() {
    return (
      <div>
        <Login></Login>
        <Graphics/>
      </div>
    );
  }
}

export default App;
