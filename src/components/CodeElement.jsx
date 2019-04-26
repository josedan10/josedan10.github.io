import React from 'react'
import ReactSVG from 'react-svg'

import ArrowDownIcon from '../assets/icons/arrowDown.svg'
import ArrowUpIcon from '../assets/icons/arrowUp.svg'
import PointIcon from '../assets/icons/point.svg'

export default ({ element }) => {
  let xpIcon = () => {
    if (element) {
      switch (element.level) {
        case 1:
          return <ReactSVG className='arrowDownIcon code-item__icon__level' src={ArrowDownIcon} />
  
        case 2:
          return <ReactSVG className='pointIcon code-item__icon__level' src={PointIcon} />
        
        default:
          return <ReactSVG className='arrowUpIcon code-item__icon__level' src={ArrowUpIcon} />
      }
    } else return null
  }

  return (
    element ? <div className='code-item grid-container'>
      <div className='code-item__icon flex-center-vertical'>
        { xpIcon() }
        <img data-aos="zoom-in" alt={element.name + ' icon'} className='code-item__icon__image' src={`/images/${element.icon}`} />
      </div>
      <div className='code-item__description'>
        { element.description }
      </div>
    </div> : 'Loading...'
  )
}
