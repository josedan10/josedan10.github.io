import React from 'react'
import axios from 'axios'

import { baseUrl } from '../config'

// Svgs
import LensIcon from '../assets/icons/lens.svg'
import SemiColonIcon from '../assets/icons/semicolon.svg'
import BulbIcon from '../assets/icons/bulb.svg'


export default class Services extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: null
    }
  }

  componentWillMount () {
    axios.get(`${baseUrl}/data.json`)
      .then(res => this.setState(prevState => (
        {
          ...prevState,
          data: res.data.services
        }
      )))
      .catch(err => console.error(err))
  }

  render () {
    const { data: services } = this.state
    return (
      <section id='Services' className='container'>
        <h2>Services</h2>
        <div data-aos='fade-up' data-aos-delay="200" className='content flex-around'>

          {
            services &&
            Object.keys(services).map(service => {
              let icon
              let title = service.charAt(0).toUpperCase() + service.slice(1)
              let text = services[service].map((paragraph, index) => <p key={service + index}>{ paragraph }</p>)

              switch (service) {
                case 'design':
                  icon = <img src={BulbIcon} alt='bulb design' />
                  break

                case 'development':
                  icon = <img src={SemiColonIcon} alt='semicolon development' />
                  break

                default:
                  icon = <img src={LensIcon} alt='lens seo' />
                  break
              }

              return (
                <div key={service} className='service-container flex-center'>
                  <div className='front flex-center-vertical'>
                    {icon}
                    <h3>{title}</h3>
                  </div>
                  <div className='back flex-center-vertical'>
                    {text}
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>
    )

  }
}
