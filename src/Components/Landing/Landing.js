import React from 'react';
import './Landing.css';
import landing from '../../Assets/Images/Landing.jpg'
import mycv from '../../Assets/Media/My-CV.docx';
import cvicon from '../../Assets/Media/Resume.svg'

const Landing = () => {
  return (
    <div id='landing'>
        <section className="section" style={{ backgroundImage: `url(${landing})` }}>
          <div className='fadeInUp-animation'>
            <p>Nice to meet you, I'm...</p>
            <h1>Ethan Butterworth</h1>
            <p>...an aspiring Web Developer.</p>
          </div>
          <div className='CV'>
            <a href={mycv} download target='_blank'><img src={cvicon}></img> Get my CV</a>
          </div>
        </section>
      </div>
  );
}

export default Landing;