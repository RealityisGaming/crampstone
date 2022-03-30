import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/home"
import Battles from './pages/battle';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/battles" component={Battles} />
          </Switch>
        </Router>
      </div>
    );
  }
}
