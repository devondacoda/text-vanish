import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './app.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import WriteScreen from './components/WriteScreen';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/write" component={WriteScreen} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    );
  }
}

export default App;
