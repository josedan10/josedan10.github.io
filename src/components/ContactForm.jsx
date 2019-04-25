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

  return (
    <form action='' className='console' onKeyDown={handleSubmit}>
      <b className='blue'>sendMessage(</b>
      <div className='input-group'>
        &nbsp;&nbsp;
        <label for='name' className='blue'>name: </label>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <input id='name' name='name'
          onChange={e => handleChange(e.target)} type='text'
          placeholder='Jose' />
      </div>

      <div className='input-group'>
        &nbsp;&nbsp;
        <label for='lastname' className='blue'>lastname: </label>
        <input id='lastname' name='lastname'
          onChange={e => handleChange(e.target)} type='text'
          placeholder='Quintero' />
      </div>

      <div className='input-group'>
        &nbsp;&nbsp;
        <label for='email' className='blue'>email: </label>
        &nbsp;&nbsp;&nbsp;
        <input id='email' name='email'
          onChange={e => handleChange(e.target)} type='email'
          placeholder='user@mail.com' />
      </div>

      <div className='input-group'>
        &nbsp;&nbsp;
        <label for='phone' className='blue'>phone: </label>
        &nbsp;&nbsp;&nbsp;
        <input id='phone' name='phone'
          onChange={e => handleChange(e.target)} type='tel' pattern='[0-9]{1,3}-[0-9]{10}'
          placeholder='58-4122353124' />
      </div>

      <div className='input-group'>
        &nbsp;&nbsp;
        <label for='subject' className='blue'>subject: </label>
        &nbsp;
        <input id='subject' name='subject'
          onChange={e => handleChange(e.target)} type='text'
          placeholder='Web responsive' />
      </div>

      <div className='input-group'>
        &nbsp;&nbsp;
        <label for='message' className='blue'>message: </label>
        &nbsp;
        <textarea id='message' name='message'
          onChange={e => handleChange(e.target)} type='text'
          placeholder='Tell me your idea...' />
      </div>
      <b className='blue'>)</b>
      <br /><br />
      <p className='blue'>
        <b>Status:</b> { status }
      </p>
      <p className='blue'>
        { totalCompleteds }/6 completed fields
      </p>
      { errors.length > 0 && errors.map(error => <p className='red'>{ error }</p>) }
      { msg }
    </form>
  )
}
