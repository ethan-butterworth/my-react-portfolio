import React from 'react'
import './About.css'
import mypic from '../../Assets/My-Pic.jpg'

const About = () => {
  return (
    <div id='about'>
        <section className="section">
        <img className='mypic' src={mypic} alt='A Picture of Ethan.' />
          <h2>I'm a:</h2>
          <ul>
            <li>Support Engineer at Zuto.</li>
            <li>Self taught Web Developer.</li>
            <li>Passionate designer and creator.</li>
          </ul>
        </section>
    </div>
  )
}

export default About