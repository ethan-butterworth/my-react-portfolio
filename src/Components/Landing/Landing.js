import React from 'react';
import './Landing.css';
import mypic from '../../Assets/My-Pic.jpg'

const Landing = () => {
  return (
    <div>
        <section className="section">
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
  );
}

export default Landing;