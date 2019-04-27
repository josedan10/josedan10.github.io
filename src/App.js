import React, { Component } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import AOS from 'aos'
import SmoothScroll from 'smooth-scroll'

import Index from './pages'
import Portfolio from './pages/portfolio'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

import 'aos/dist/aos.css'

AOS.init()

const scroll = new SmoothScroll('a[href*="#"]', {
  easing: 'easeInQuad',
  speed: 100,
  speedAsDuration: false
})

class App extends Component {
  render () {
    return (
      <HashRouter history={createBrowserHistory()}>
        <header>
          <NavBar />
        </header>
        <div className='App'>
          <Switch>
            <Route exatc path='/portfolio' component={Portfolio} />
            <Route path='/' component={Index} />
          </Switch>
        </div>
        <Footer />
      </HashRouter>
    );
  }
}

export default App;
