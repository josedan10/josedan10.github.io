import React from 'react'

// Containers
import Home from '../containers/Home'
import AboutMe from '../containers/AboutMe'
import Services from '../containers/Services'
import Code from '../containers/Code'
import Contact from '../containers/Contact'

export default (props) => {
  return (
    <div id='main'>
      <Home />
      <AboutMe />
      <Services />
      <Code />
      <Contact />
    </div>
  )
}
