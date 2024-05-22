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
            <li>Currently a Support Engineer at Zuto.</li>
            <li>Self-Studying Web Development on Udemy.</li>
            <li>Passionate about designing and creating things.</li>
          </ul>
        </section>
        <section className="section about">
          <h2>Professional Summary:</h2>
          <p>I've been working in IT Support for over five years, helping people solve all sorts of tech problems. I'm good at figuring out what's wrong, fixing issues, and keeping things running smoothly. I also have a knack for providing great customer service, managing installations, and making sure everything works seamlessly. I pick up new technologies quickly and love improving systems to make users happy.</p>
          <h2>Career Goals:</h2>
          <p>I'm now looking to move into a front-end developer role, using my problem-solving skills, technical know-how, and passion for building and improving web solutions.</p>
          <h2>Hobbies and Interests:</h2>
          <p>Outside of work, you can often find me immersed in the world of Warhammer. Whether it's meticulously assembling and painting miniatures or strategizing over the tabletop, it's my go-to hobby for unwinding and socializing. My fascination with technology traces back to my early days, fueled by adventures in the Halo series. I was introduced to it through the Xbox and eventually, took it a step further by building my own PC.</p>
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
      <button className="scroll-button" onClick={() => scroll('left')}>&lt;</button>
      <button className="scroll-button" onClick={() => scroll('right')}>&gt;</button>
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
