import React from 'react'
import axios from 'axios'

import CodeElement from '../components/CodeElement'

import { baseUrl } from '../config'

export default class Code extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: {
        languages: [],
        databases: [],
        stacks: []
      },
      active: ['languages', 0]
    }
  }

  componentWillMount () {
    axios.get(`${baseUrl}/data.json`)
      .then(res => this.setState(prevState => (
        {
          ...prevState,
          data: res.data
        }
      )))
      .catch(err => console.error(err))
  }

  setActive (name, index) {
    this.setState(prevState => ({
      ...prevState,
      active: [name, index]
    }))
  }

  render () {
    let activeSection = this.state.active[0]
    let activeElement = this.state.active[1]

    let { data } = this.state

    return (
      <section id='Code'>
        <div className='container'>
          <h2>Code</h2>
          <div className='content grid-container'>
            <aside className='list'>
              { Object.keys(data).map((name, indexName) =>
                <div key={name + indexName} className='list__section'>
                  <h4 className='list__section__name'>{ name.charAt(0).toUpperCase() + name.slice(1) }</h4>
                  <ul className='list__section__elements'>
                    { data[name].map((element, indexElement) => (
                      <li
                        className={(data[activeSection][activeElement] === element) ? 'list__section__element active' : 'list__section__element'}
                        key={element.name}
                        onClick={e => this.setActive(name, indexElement)}
                      >{ element.name }</li>
                    )) }
                  </ul>
                </div>
              ) }
            </aside>
            <CodeElement element={data[activeSection][activeElement]} />
          </div>
        </div>
      </section>
    )
  }
}
