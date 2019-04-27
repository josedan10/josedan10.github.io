import React from 'react'

export default (props) => {
  let {
    handleChange,
    handleSubmit,
    completeds,
    errors,
    status,
    msg
  } = props

  let totalCompleteds = Object.keys(completeds).filter(field => completeds[field]).length

  let statusClass = () => {
    switch (status) {
      case 'Error':
        return 'red'
      case 'Sent contact request':
        return 'green'
      default:
        return 'blue'
    }
  }

  return (
    <form data-aos='fade-left' data-aos-delay='200' className='console' onKeyDown={handleSubmit}>
      <b className='blue'>sendMessage(</b>
      <div className='input-group'>
        &nbsp;&nbsp;
        <label htmlFor='name' className='blue'>name: </label>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <input id='name' name='name'
          onChange={e => handleChange(e.target)} type='text'
          placeholder='Jose' />
      </div>

      <div className='input-group'>
        &nbsp;&nbsp;
        <label htmlFor='lastname' className='blue'>lastname: </label>
        <input id='lastname' name='lastname'
          onChange={e => handleChange(e.target)} type='text'
          placeholder='Quintero' />
      </div>

      <div className='input-group'>
        &nbsp;&nbsp;
        <label htmlFor='email' className='blue'>email: </label>
        &nbsp;&nbsp;&nbsp;
        <input id='email' name='email'
          onChange={e => handleChange(e.target)} type='email'
          placeholder='user@mail.com' />
      </div>

      <div className='input-group'>
        &nbsp;&nbsp;
        <label htmlFor='phone' className='blue'>phone: </label>
        &nbsp;&nbsp;&nbsp;
        <input id='phone' name='phone'
          onChange={e => handleChange(e.target)} type='tel' pattern='[0-9]{1,3}-[0-9]{10}'
          placeholder='58-4122353124' />
      </div>

      <div className='input-group'>
        &nbsp;&nbsp;
        <label htmlFor='subject' className='blue'>subject: </label>
        &nbsp;
        <input id='subject' name='subject'
          onChange={e => handleChange(e.target)} type='text'
          placeholder='Web responsive' />
      </div>

      <div className='input-group'>
        &nbsp;&nbsp;
        <label htmlFor='message' className='blue'>message: </label>
        &nbsp;
        <textarea id='message' name='message'
          onChange={e => handleChange(e.target)} type='text'
          placeholder='Tell me your idea...' />
      </div>
      <b className='blue'>)</b>
      <br /><br />
      <p className="bold blue">Please, press enter to send the message...</p>
      <br/>
      <p className='blue'>
        { totalCompleteds }/6 completed fields
      </p>
      <div className={statusClass()}>
        <b>Status: </b>{ status }
      </div>
      { errors.length > 0 ? errors.map((error, index) => <p key={error + index} className='red'>{ error }</p>) : ''}
      { (msg) ? msg : '' }
    </form>
  )
}
