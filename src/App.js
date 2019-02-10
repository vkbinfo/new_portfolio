import React, { Component } from 'react';
import HomeComponent from './home/homeComponent';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return <Switch>
      <Route path='/' component={HomeComponent}></Route>
      <Redirect from='/' to='/' />
    </Switch>;
  }
}

export default App;
