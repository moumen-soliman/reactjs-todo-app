import React, { Component } from 'react';
import './App.css';

//Components
import Header from './components/main/header.js'
import Action from './components/actions/action.js'
// import Option from './components/options/option.js'
import Options from './components/options/options.js'
import AddOptions from './components/options/addoptions.js'

class App extends Component {
  render() {
    const option = ['Thing one', 'Thing two', 'Thing four'];
    return (
      <div className="container">
        <Header />
        <Action />
        <Options option={option}/>
        <AddOptions />
      </div>
    );
  }
}


export default App;
