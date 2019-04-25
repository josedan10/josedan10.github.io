import React from 'react'
import Typist from 'react-typist'
import TypistLoop from 'react-typist-loop'
import Particles from 'react-particles-js'
import { Link } from 'react-scroll'
import ReactSVG from 'react-svg'

// Svgs
import arrowDownIcon from '../assets/icons/arrowDown.svg'


export default (props) => {
  return (
    <div id='Home' className='banner home flex-center'>
      <Particles className='particles' params={
        {
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: '#dbdbdb'
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000"
              },
              polygon: {
                nb_sides: 5
              }
            },
            size: {
              value: 3,
              random: true
            }
          },
          interactivity: {
            detect_on: "window",
            events: {
              onhover: {
                enable: true,
                mode: "repulse"
              },
            }
          },
          retina_detect: true
        }
      }/>

      <h1 className='text-code'>
        <TypistLoop interval={2000}>
          <Typist startDelay={1000}>{ '{ Making a new world with code }' }</Typist>
        </TypistLoop>
      </h1>
      <Link
        spy
        smooth
        duration={500}
        to='Services'>
        <ReactSVG className='arrowDownIcon link' src={arrowDownIcon} />
      </Link>
    </div>
  )
}
