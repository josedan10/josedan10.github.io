import React, { Component } from 'react'
import ReactSVG from 'react-svg'

// svg
import arrowDownIcon from '../assets/icons/arrowDown.svg'

export default class ArrowDown extends Component {
  render() {
    return (
      <a href="#About_Me" className='arrowDownLink'>
        <ReactSVG className='arrowDownIcon link' src={arrowDownIcon} />
      </a>
    )
  }
}
