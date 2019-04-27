import React from 'react'

// Svg
import meMosaic from '../assets/images/meMosaic.svg'

export default (props) => {
  return (
    <section id='About_Me' className='container'>
      <h2>About Me</h2>
      <div className='content flex-around'>
        <img alt='mosaic' src={meMosaic} />
        {/* <img src='/images/mosaic.png' alt='mosaic' /> */}
        <article>
          Hello, my name is José Daniel. I'm a student, guitar player, singer, developer, athlete and video games lover.
          <br />
          <br />
          Everything I do, I do it because I love doing it. Much of my time is spent experimenting and learning new trends to always offer the best to those who need my services.
          <br />
          <br />
          I do not consider myself a designer, because the art of design is something that requires a lot of time and dedication to understand it, but I do my best to offer visually pleasing solutions to my clients using some of the knowledge I have acquired by doing a little research on my own.
          <br />
          <br />
          Whenever I can I try to learn something new, that can help me to continue growing as an integral professional, capable of providing solutions to a wide range of needs.
        </article>
      </div>

    </section>
  )
}
