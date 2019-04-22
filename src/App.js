import React, { Component } from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Index from './pages'
class App extends Component {
  render() {
    return (
      <Router history={ createBrowserHistory() }>
        <div className="App">
          <Route exact path='/' component={Index} />
        </div>
      </Router>
    );
  }
}

export default App;
