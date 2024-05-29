import React from 'react'
import './Footer.css'
import linkedinicon from '../../Assets/Media/Linked-In.svg'
import githubicon from '../../Assets/Media/Git-Hub.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='links'>
        <a href='https://uk.linkedin.com/in/ethan-butterworth-012960185' target='_blank'><img src={linkedinicon}></img> LinkedIn</a> 
        <a href='https://github.com/EthanButterworth' target='_blank'><img src={githubicon}></img> Github</a>
      </div>
      <p><span>Designed and developed by</span> Ethan Butterworth.</p>
    </div>
  )
}

export default Footer