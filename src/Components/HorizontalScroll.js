import React from 'react';
import './HorizontalScroll.css';
import mypic from '../Assets/Images/mypic.jpg'
import mycv from '../Assets/mycv.docx'

const HorizontalScroll = () => {
  return (
    <div className="scroll-container">
      <div className="scroll-content">
        <section className="section landing">
          <p>Nice to meet you, I'm...</p>
          <h1>Ethan Butterworth</h1>
          <p>...an amateur Web Developer.</p>
          <img src={mypic} alt='A Picture of Ethan.'></img>
          <h2>I am:</h2>
          <ul>
            <li>A Support Engineer at Zuto.</li>
            <li>Self-Studying Web Development on Udemy.</li>
            <li>Passionate about designing and creating things.</li>
          </ul>
        </section>
        <section className="section about">
          <h2>Professional Summary:</h2>
          <p>With over five years in IT Support, I excel at diagnosing and resolving tech issues, ensuring smooth operations, and providing excellent customer service. I'm adept at managing installations and quickly learning new technologies to enhance user satisfaction.</p>
          <h2>Career Goals:</h2>
          <p>I'm now looking to move into a front-end developer role, using my problem-solving skills, technical know-how, and passion for building and improving web solutions.</p>
          <h2>Hobbies and Interests:</h2>
          <p>My tech fascination first began with the Halo series on Xbox, which led me to build my own PC. These days, I'm passionate about Warhammer, enjoying the assembly, painting, and strategy of the hobby.</p>
          <h2>Help yourself!</h2>
          <div className='about-links'>
            <a href='https://uk.linkedin.com/in/ethan-butterworth-012960185'>LinkedIn</a> 
            <a href='https://github.com/EthanButterworth'>Github</a>
            <a href={mycv} download>Resume</a>
          </div>
        </section>
        <section className="section">
          <h2>Projects</h2>
          <a>Work in progress.</a>
          <a>Work in progress.</a>
          <a>Work in progress.</a>
        </section>
        <section className="section">

        </section>
      </div>
      <button className="scroll-button left-button" onClick={() => scroll('left')}>&lt;</button>
      <button className="scroll-button right-button" onClick={() => scroll('right')}>&gt;</button>
    </div>
  );
}

const scroll = (direction) => {
  const container = document.querySelector('.scroll-container');
  const scrollAmount = direction === 'left' ? -window.innerWidth : window.innerWidth;
  container.scrollBy({
    left: scrollAmount,
    behavior: 'smooth'
  });
}

export default HorizontalScroll;
