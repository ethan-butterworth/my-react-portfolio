import React from 'react';
import './Landing.css';
import landing from '../../Assets/Landing.jpg'

const Landing = () => {
  return (
    <div>
        <section className="section" style={{ backgroundImage: `url(${landing})` }}>
          <p>Nice to meet you, I'm...</p>
          <h1>Ethan Butterworth</h1>
          <p>...an aspiring Web Developer.</p>
        </section>
      </div>
  );
}

export default Landing;