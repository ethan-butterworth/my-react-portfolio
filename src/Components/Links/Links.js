import React from 'react'
import './Links.css'
import mycv from '../../Assets/My-Cv.docx';

const Links = () => {
  return (
    <div>
        <section className="section links">
            <h2>Help yourself!</h2>
            <div className='about-links'>
                    <a href='https://uk.linkedin.com/in/ethan-butterworth-012960185' target='_blank'>LinkedIn</a> 
                    <a href='https://github.com/EthanButterworth' target='_blank'>Github</a>
                    <a href={mycv} download target='_blank'>Resume</a>
            </div>
        </section>
    </div>
  )
}

export default Links