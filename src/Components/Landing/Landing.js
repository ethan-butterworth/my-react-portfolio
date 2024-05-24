import React, { useEffect, useRef } from 'react';
import './Landing.css';
import mypic from './My-Pic.jpg';

const Landing = () => {
  return (
    <div className="scroll-container">
      <div className="scroll-content">
        <section className="section landing">
          <p>Nice to meet you, I'm...</p>
          <h1>Ethan Butterworth</h1>
          <p>...an aspiring Web Developer.</p>
          <img src={mypic} alt='A Picture of Ethan.' />
          <h2>I'm a:</h2>
          <ul>
            <li>Support Engineer at Zuto.</li>
            <li>Self taught Web Developer.</li>
            <li>Passionate designer and creator.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Landing;