import React from 'react'
import './Projects.css'
import oldportfoliopreview from '../../Assets/oldportfoliopreview.png'

const Projects = () => {
  return (
    <div id='projects'>
        <section className="section">
          <h2>Projects</h2>
          <div className='project-item'>
            <a href='https://ethanbutterworth.github.io/Ethans-Minis/' target='_blank' alt='A preview of my miniature painting website.'>
              <img></img>
              <p>Ethans Minis (WIP)</p>
            </a>
          </div>
          <div className='project-item'>
            <a href='https://ethanbutterworth.github.io/My-Portfolio/' target='_blank' alt='A preview of my old portfolio website.'>
              <img src={oldportfoliopreview}></img>
              <p>Old Portfolio</p>
            </a>
          </div>
        </section>
    </div>
  )
}

export default Projects