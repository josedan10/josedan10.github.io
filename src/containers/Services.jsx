import React from 'react'

// Svgs
import LensIcon from '../assets/icons/lens.svg'
import SemiColonIcon from '../assets/icons/semicolon.svg'
import BulbIcon from '../assets/icons/bulb.svg'


export default (props) => {
  return (
    <section id='Services' className='container'>
      <h2>Services</h2>
      <div data-aos='fade-up' data-aos-delay="200" className='content flex-around'>
      
        <div className='service-container flex-center'>
          <div className='front flex-center-vertical'>
            <img src={BulbIcon} alt='bulb' />
            <h3>Design</h3>
          </div>
          <div className='back'>
            Esse veniam in occaecat dolor nostrud. Mollit commodo Lorem irure do eiusmod do voluptate exercitation. Non cillum nostrud sint dolor sint sunt eiusmod Lorem elit voluptate commodo ipsum voluptate ad. Culpa ut deserunt laboris incididunt culpa excepteur nulla labore. Esse labore minim dolore amet nisi laborum consequat tempor Lorem consectetur nisi do fugiat minim. Occaecat est velit minim eiusmod irure deserunt minim qui ut sit. Ipsum Lorem laboris velit cillum.
          </div>
        </div>

        <div className='service-container flex-center'>
          <div className='front flex-center-vertical'>
            <img src={SemiColonIcon} alt='semicolor' />
            <h3>Development</h3>
          </div>
          <div className='back'>
            Sint incididunt labore voluptate laboris ut culpa tempor nisi nulla anim veniam est. Nisi excepteur ipsum qui fugiat do ullamco consectetur nulla. Consequat quis ut ad et elit sunt id ipsum. Labore ad officia ipsum labore adipisicing veniam irure reprehenderit do. Labore non Lorem dolor dolor ut ex cupidatat sit officia ea minim elit. Eiusmod eu officia consequat Lorem minim quis in excepteur Lorem sint pariatur ut dolore esse. Cupidatat velit veniam laborum excepteur sit proident quis ipsum ad proident proident.
          </div>
        </div>

        <div className='service-container flex-center'>
          <div className='front flex-center-vertical'>
            <img src={LensIcon} alt='lens' />
            <h3>SEO</h3>
          </div>
          <div className='back'>
            Ut consectetur non consequat est mollit labore fugiat duis. Ut excepteur est voluptate mollit quis qui aute id consectetur sunt nulla magna. Elit irure ipsum deserunt laborum elit sunt tempor. Sint id enim officia incididunt non. Nulla ipsum elit excepteur ut voluptate sit. Sint veniam ipsum nulla excepteur ea aliquip irure esse qui voluptate proident mollit aute.
          </div>
        </div>
      </div>
    </section>
  )
}
