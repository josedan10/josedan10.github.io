import React from 'react'
import ReactSVG from 'react-svg'
import { Link as RouterLink } from 'react-router-dom'

// Svgs
import openBracketIcon from '../assets/icons/openBracket.svg'
import closeBracketIcon from '../assets/icons/closeBracket.svg'
import pointIcon from '../assets/icons/point.svg'

export const links = ['Home', 'About_Me', 'Services', 'Code', /* 'Portfolio', */ 'Contact']

export default class NavBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false
    }
  }

  toggleState () {
    this.setState({
      open: !this.state.open
    })
  }

  render () {
    let menuIcon = (
      <div className='menuIcon flex-center' onClick={e => {
        e.preventDefault()
        this.toggleState()
      }
      }>
        <ReactSVG className='point-1' src={pointIcon} />
        <ReactSVG className='point-2' src={pointIcon} />
        <ReactSVG className='point-3' src={pointIcon} />
      </div>
    )

    let indexLinks = links.map((title, index) => <li>
      {(title !== 'Portfolio')
        ? <a
          data-scroll
          href={'/#' + title}
          key={title + index} className='nav-link flex-center'
          onClick={e => {
            this.toggleState()
            e.preventDefault()
          }}
        >
          {(index !== links.length - 1) ? title + ',' : title }
        </a>
        : <RouterLink key={title + index} className='nav-link flex-center' to={'/' + title}>{title},</RouterLink>
      }</li>)

    let menuArray = (
      <div className='menuArray flex-center' onClick={e => this.toggleState()}>

        <ul className='flex-around'>
          {/* {(window.location.pathname !== '/Portfolio') ? indexLinks : defaultLinks} */}
          {indexLinks}
        </ul>

      </div>
    )

    return (
      <nav className={(this.state.open) ? 'flex-center open' : 'flex-center closed'} onClick={e => this.toggleState()}>
        <ReactSVG className='bracket-open' src={openBracketIcon} />
        { menuArray }
        { menuIcon }
        <ReactSVG className='bracket-close' src={closeBracketIcon} />
      </nav>
    )
  }
}
