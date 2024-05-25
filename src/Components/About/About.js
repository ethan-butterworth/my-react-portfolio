import React from 'react'
import './About.css'
import mypic from '../../Assets/My-Pic.jpg'

const About = () => {
  return (
    <div>
        <section className="section">
        <img src={mypic} alt='A Picture of Ethan.' />
          <h2>I'm a:</h2>
          <ul>
            <li>Support Engineer at Zuto.</li>
            <li>Self taught Web Developer.</li>
            <li>Passionate designer and creator.</li>
          </ul>
          <h2>My Journey:</h2>
          <p>My tech fascination first began with the Halo series on Xbox, which led me to build my own PC. These days, I'm passionate about Warhammer, enjoying the assembly, painting, and strategy of the hobby.</p>
          <p>With over five years in IT Support, I excel at diagnosing and resolving tech issues, ensuring smooth operations, and providing excellent customer service. I'm adept at managing installations and quickly learning new technologies to enhance user satisfaction.</p>
          <p>I'm now looking to move into a front-end developer role, using my problem-solving skills, technical know-how, and passion for building and improving web solutions.</p>
          
        </section>
    </div>
  )
}

export default About