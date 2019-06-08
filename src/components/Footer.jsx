import React from 'react'
import logo from '../logo.svg'

import { links } from './NavBar'
import { Link as RouterLink } from 'react-router-dom'

const socialNetworks = [
  {
    name: 'Instagram',
    url: 'https://instagram.com/',
    username: 'josedanqf'
  },
  {
    name: 'Github',
    url: 'https://github.com/',
    username: 'josedan10'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/',
    username: 'jose-daniel-quintero-figueroa-a9b96813b'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/',
    username: 'josedan_music'
  }
]

export default (props) => {

  const indexLinks = (
    <ul className='navigation__container flex-center-vertical'>
      { links.map(link => {
        if (link !== 'Portfolio') {
          return (
            <li key={link} className='navigation__container__element'>
              <a
                href={link}
                data-scroll
                className='navigation__container__element__link'
              >{ link }</a>
            </li>
          )
        } else {
          return (
            <li key={link} className='navigation__container__element'>
              <RouterLink className='navigation__container__element__link' to={link}>{ link }</RouterLink>
            </li>
          )
        }
      }) }
    </ul>
  )

  return (
    <footer className='grid-container'>
      <div className='brand-container flex-center-vertical'>
        <img className='logo' alt='josedan10 logo' src={logo} />
        <p className='blue bold'>{ '{ Making a new world with code }' }</p>
      </div>

      <div className='navigation hideOnSm'>
        { indexLinks }
      </div>

      <div className='social flex-center-vertical'>
        <h4>Follow me!</h4>
        <div className='social__links flex-around'>
          { socialNetworks.map(social => (
            <a key={social.url} target='_blankAdding' href={social.url + social.username} className='flex-center social__links__link'>
              <img src={`/images/${social.name}.svg`} alt={social.name} />
            </a>
          )) }
        </div>
      </div>

      <p className='blue credits'>
        Powered with 💗 by&nbsp;<a className='blue bold' href='https://github.com'>GitHub</a>.
        All rights reserved &copy; 2019.
        Designed and developed by&nbsp;<span className='bold'>José Quintero</span>
      </p>
    </footer>
  )
}
