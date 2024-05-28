import React from 'react';
import './Landing.css';
import landing from '../../Assets/Images/Landing.jpg'

const Landing = () => {
  return (
    <div id='landing'>
        <section className="section" style={{ backgroundImage: `url(${landing})` }}>
          <div className='fadeInUp-animation'>
          <p>Nice to meet you, I'm...</p>
          <h1>Ethan Butterworth</h1>
          <p>...an aspiring Web Developer.</p>
          </div>
        </section>
      </div>
  );
}

export default Landing;