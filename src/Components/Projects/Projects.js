import React from 'react'
import './Projects.css'
import oldportfoliopreview from '../../Assets/Images/Old-Portfolio-Preview.png'

const Projects = () => {
  return (
    <div id='projects'>
        <section className="section">
          <h2>Projects</h2>
          <div className='project-container'>
            <div className='project-item'>
              <a href='https://ethanbutterworth.github.io/My-Portfolio/' target='_blank' alt='A preview of my old portfolio website.'>
                <img src={oldportfoliopreview}></img>
                <p>Old Portfolio</p>
              </a>
          </div>
          <div className='project-item'>
            <a href='' target='_blank' alt=''>
              <img></img>
              <p>WIP</p>
            </a>
          </div>
          <div className='project-item hidden'>
            <a href='' target='_blank' alt=''>
              <img></img>
              <p>WIP</p>
            </a>
          </div>
          <div className='project-item hidden'>
            <a href='' target='_blank' alt=''>
              <img></img>
              <p>WIP</p>
            </a>
          </div>
          </div>
        </section>
    </div>
  )
}

export default Projects