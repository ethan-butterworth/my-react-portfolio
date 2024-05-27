import React from 'react'
import './Nav.css'

const Nav = () => {
  return (
    <div className='Nav'>
        <nav>
        <a className='logo' href='landing'>EB</a>
        <p>|</p>
        <a href='about'>About</a>
        <a href='journey'>Journey</a>
        <a href='projects'>Projects</a>
        <a href='links'>Links</a>
        <p>|</p>
        </nav>
    </div>
  )
}

export default Nav