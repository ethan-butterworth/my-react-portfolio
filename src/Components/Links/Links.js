import React from 'react'
import './Links.css'
import mycv from '../../Assets/My-Cv.docx';
import linkedinicon from '../../Assets/linkedin.svg'
import githubicon from '../../Assets/github.svg'
import cvicon from '../../Assets/file-earmark-person-fill.svg'

const Links = () => {
  return (
    <div>
        <section className="section">
            <h2>Help yourself!</h2>
            <div className='about-links'>
                <a href='https://uk.linkedin.com/in/ethan-butterworth-012960185' target='_blank'><img src={linkedinicon}></img> LinkedIn</a> 
                <a href='https://github.com/EthanButterworth' target='_blank'><img src={githubicon}></img> Github</a>
                <a href={mycv} download target='_blank'><img src={cvicon}></img> Resume</a>
            </div>
        </section>
    </div>
  )
}

export default Links