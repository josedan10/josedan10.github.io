import React from 'react'
import ContactForm from '../components/ContactForm'
import * as emailjs from 'emailjs-com'

import { EmailJSUserID } from '../config'

emailjs.init(EmailJSUserID)

export default class Contact extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: {
        name: '',
        lastname: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      },
      status: 'In progress',
      errors: [],
      completeds: {},
      msg: null
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (target) {
    this.setState(prevState => ({
      ...prevState,
      data: {
        ...prevState.data,
        [target.name]: target.value
      },
      completeds: {
        ...prevState.completeds,
        [target.name]: target.value.trim() !== ''
      }
    }))
  }

  isNotEmptyFields (fields) {
    let isAnyEmpty = false
    Object.keys(fields).forEach(field => {
      if (fields[field].trim() === '') isAnyEmpty = true
    })
    return !isAnyEmpty
  }

  isValidFields (data) {
    let validEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(data.email)
    let validPhone = /[0-9]{1,3}-[0-9]{10}/.test(data.phone)

    return validEmail && validPhone
  }

  handleSubmit (e) {
    if (e.keyCode === 13) {
      e.preventDefault()
      
      let Form = this
      
      if (!Form.isNotEmptyFields(Form.state.data)) {
        Form.setState(prevState => ({
          ...prevState,
          errors: ['Some fields are empty. Please fill all fields'],
          status: 'Error'
        }))
      }

      if (!Form.isValidFields(Form.state.data)) {
        Form.setState(prevState => ({
          ...prevState,
          errors: [...prevState.errors, 'Invalid format in email or phone'],
          status: 'Error'
        }))
      }

      if (!Form.isValidFields(Form.state.data) || !Form.isNotEmptyFields(Form.state.data)) {
        setTimeout(() => {
          Form.setState(prevState => ({
            ...prevState,
            errors: []
          }))
        }, 9000)
        return
      }

      // Send Message
      Form.setState(prevState => ({
        ...prevState,
        errors: [],
        status: 'Sending message...'
      }), () => {
        emailjs.send(
          'gmail',
          'contact-template',
          {
            ...Form.state.data
          }
        )
          .then(res => {
            console.log(res)
            Form.setState(prevState => ({
              ...prevState,
              status: 'Sent contact request',
              msg: <p className='blue'>Thanks!</p>
            }))
          })
          .catch(err => {
            console.log(err)
            Form.setState(prevState => ({
              ...prevState,
              status: 'Error',
              msg: <p className='red'>Error sending contact request.</p>
            }))
          })
      })
    }
  }

  render () {
    return (
      <div id='Contact' className='container'>
        <h2>Contact</h2>
        <div className='content flex-center'>
          <div className='schema hideOnTablet'>
            <pre>
              <code>
                <span className='blue'>function <span className='bold'>sendMessage </span>(</span>
                <br />
                &nbsp;&nbsp;{ '<name>,' } <br />
                &nbsp;&nbsp;{ '<lastname>,' } <br />
                &nbsp;&nbsp;{ '<email>,' } <br />
                &nbsp;&nbsp;{ '<phone>,' } <br />
                &nbsp;&nbsp;{ '<subject>,' } <br />
                &nbsp;&nbsp;{ '<message>' } <br />
                <span className='blue'>) {'{'} </span> <br />

                &nbsp;&nbsp;<span className='blue'><span className='bold'>if </span>(</span> <br />
                &nbsp;&nbsp;&nbsp;&nbsp;{ 'name' } <span className='blue'>!==</span> { '"" &&' } <br />
                &nbsp;&nbsp;&nbsp;&nbsp;{ 'lastname' } <span className='blue'>!==</span> { '"" &&' } <br />
                &nbsp;&nbsp;&nbsp;&nbsp;{ 'email' } <span className='blue'>!==</span> { '"" &&' } <br />
                &nbsp;&nbsp;&nbsp;&nbsp;{ 'phone' } <span className='blue'>!==</span> { '"" &&' } <br />
                &nbsp;&nbsp;&nbsp;&nbsp;{ 'subject' } <span className='blue'>!==</span> { '"" &&' } <br />
                &nbsp;&nbsp;&nbsp;&nbsp;{ 'message' } <span className='blue'>!==</span> { '""' } <br />
                &nbsp;&nbsp;<span className='blue'>) <span className='bold'>console.log</span>("Sent message") </span> <br />
                &nbsp;&nbsp;<span className='blue'><span className='bold'>else </span><span className='bold'>console.log</span>("Error sending message")</span> <br />
                <span className='blue'>{ '}' }</span>
              </code>
            </pre>
          </div>
          <ContactForm
            completeds={this.state.completeds}
            errors={this.state.errors}
            status={this.state.status}
            msg={this.state.msg}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange} />
        </div>
      </div>
    )
  }
}
