import React, { Component } from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Index from './pages'
import Portfolio from './pages/portfolio'
import NavBar from './components/NavBar'
class App extends Component {
  render() {
    return (
      <Router history={ createBrowserHistory() }>
        <header>
          <NavBar />
        </header>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Index} />
            <Route exatc path='/portfolio' component={Portfolio} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
