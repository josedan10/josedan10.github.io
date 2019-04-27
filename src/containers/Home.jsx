import React from 'react'
import Typist from 'react-typist'
import Particles from 'react-particles-js'
import ReactSVG from 'react-svg'

// Svgs
import arrowDownIcon from '../assets/icons/arrowDown.svg'


export default (props) => {
  const text = '{ Making a new world with code }'
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
        <Typist startDelay={1000}>{ text }</Typist>
      </h1>
      <a
        data-scroll
        href='#About_Me'
        onClick={e => e.preventDefault()}
      >
        <ReactSVG className='arrowDownIcon link arrowDownLink' src={arrowDownIcon} />
      </a>
    </div>
  )
}
