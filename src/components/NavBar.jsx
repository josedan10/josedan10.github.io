import React from 'react'
import ReactSVG from 'react-svg'
import { Link as RouterLink } from 'react-router-dom'
import { Link } from 'react-scroll'

// Svgs
import openBracketIcon from '../assets/icons/openBracket.svg'
import closeBracketIcon from '../assets/icons/closeBracket.svg'
import pointIcon from '../assets/icons/point.svg'

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
    let sections = ['About_Me', 'Services', 'Code', 'Portfolio', 'Contact']

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

    let menuArray = (
      <div className='menuArray flex-center' onClick={e => this.toggleState()}>

        <ul className='flex-around'>
          {sections.map((title, index) => <li>
            {(title !== 'Portfolio')
              ? <Link
                activeClass='active'
                spy
                smooth
                duration={500}
                key={title + index} className='nav-link flex-center' to={title}
                onClick={e => this.toggleState()}
                >
                {(index !== sections.length - 1) ? title + ',' : title }
              </Link>
              : <RouterLink key={title + index} className='nav-link flex-center' to={title}>{title},</RouterLink>
            }</li>)}
        </ul>

      </div>
    )

    return (
      <nav className={(this.state.open) ? 'flex-center open' : 'flex-center closed'}>
        <ReactSVG className='bracket-open' src={openBracketIcon} />
        { menuArray }
        { menuIcon }
        <ReactSVG className='bracket-close' src={closeBracketIcon} />
      </nav>
    )
  }
}
