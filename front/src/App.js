import React, { Component } from 'react';
import './App.css';

// Router
import { BrowserRouter } from "react-router-dom";

// Components
import Main from "./components/Main/Main";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Main></Main>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
