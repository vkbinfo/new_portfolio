import React, { Component } from 'react';
import HomeComponent from './home/homeComponent';
import { Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return <Route path='/' component={HomeComponent}></Route>;
  }
}

export default App;
