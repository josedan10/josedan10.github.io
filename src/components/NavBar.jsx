import React from 'react'

// Svgs
import openBracketIcon from '../assets/icons/openBracket.svg'
import closeBracketIcon from '../assets/icons/closeBracket.svg'
import pointIcon from '../assets/icons/point.svg'

export default class NavBar extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      open: false
    }
  }

  toggleState () {
    this.setState({
      open: !this.state.open
    })
  }

  toggleClass () {
    this.classList.toggle('bounce')
  }
  
  render () {

    let menuIcon = (
      <div className="menuIcon flex-center" onClick={e => {
          e.preventDefault()
          this.toggleState()
        }
      }>
        <img className='bracketIcon' src={openBracketIcon} alt="open bracket"/>
        <img className='pointIcon' onMouseEnter={this.toggleClass} onMouseLeave={this.toggleClass} src={pointIcon} alt="point-icon"/>
        <img className='pointIcon' onMouseEnter={this.toggleClass} onMouseLeave={this.toggleClass} src={pointIcon} alt="point-icon"/>
        <img className='pointIcon' onMouseEnter={this.toggleClass} onMouseLeave={this.toggleClass} src={pointIcon} alt="point-icon"/>
        <img className='bracketIcon' src={closeBracketIcon} alt="close bracket"/>
      </div>
    )

    let menuArray = (
      <div className="menuIcon flex-center" onClick={e => this.toggleState()}>
        <img onClick={e => this.toggleState()} className='bracketIcon' src={openBracketIcon} alt="open bracket"/>
        Services
        <img onClick={e => this.toggleState()} className='bracketIcon' src={closeBracketIcon} alt="close bracket"/>
      </div>
    )

    return (
      <nav className={(this.state.open) ? 'open' : 'closed'}>
        { (this.state.open) ? menuArray : menuIcon }
      </nav>
    )
  }
}
