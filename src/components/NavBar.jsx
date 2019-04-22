import React from 'react'
import ReactSVG from 'react-svg'

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
        <ReactSVG className='bracket-open' src={openBracketIcon} />
        <ReactSVG className='point-1' src={pointIcon} />
        <ReactSVG className='point-2' src={pointIcon} />
        <ReactSVG className='point-3' src={pointIcon} />
        <ReactSVG className='bracket-close' src={closeBracketIcon} />
      </div>
    )

    let menuArray = (
      <div className="menuIcon flex-center" onClick={e => this.toggleState()}>
        <ReactSVG className='bracket-open' src={openBracketIcon} />
          Services
        <ReactSVG className='bracket-close' src={closeBracketIcon} />
      </div>
    )

    return (
      <nav className={(this.state.open) ? 'open' : 'closed'}>
        { (this.state.open) ? menuArray : menuIcon }
      </nav>
    )
  }
}
