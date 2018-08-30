import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './Components/Post.js'
import Postform from './Components/Postform.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to this sample blog thing</h1>
        </header>
        <Postform />
        <hr />
        <Posts />
      </div>
    );
  }
}

export default App;
