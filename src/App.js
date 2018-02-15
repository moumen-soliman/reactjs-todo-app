import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Components
import Header from './components/main/header.js'
import Action from './components/actions/action.js'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Action />
      </div>
    );
  }
}


export default App;
