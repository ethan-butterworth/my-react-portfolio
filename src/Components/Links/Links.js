import React from 'react'
import './Links.css'
import mycv from '../../Assets/Media/My-CV.docx';
import linkedinicon from '../../Assets/Media/Linked-In.svg'
import githubicon from '../../Assets/Media/Git-Hub.svg'
import cvicon from '../../Assets/Media/Resume.svg'

const Links = () => {
  return (
    <div id='links'>
        <section className="section">
            <h2>Professional Links:</h2>
            <div className='about-links'>
                <a href='https://uk.linkedin.com/in/ethan-butterworth-012960185' target='_blank'><img src={linkedinicon}></img> LinkedIn</a> 
                <a href={mycv} download target='_blank'><img src={cvicon}></img> Resume</a>
                <a href='https://github.com/EthanButterworth' target='_blank'><img src={githubicon}></img> Github</a>
            </div>
        </section>
    </div>
  )
}

export default Links