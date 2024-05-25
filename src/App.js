import React from 'react';
import Landing from './Components/Landing/Landing.js';
import Nav from './Components/Navbar/Nav.js'
import About from './Components/About/About.js'
import Projects from './Components/Projects/Projects.js'
import Links from './Components/Links/Links.js'

const App = () => {
  return (
    <div className="App">
      <Landing />
      <Nav />
      <About />
      <Projects />
      <Links />
    </div>
  );
}

export default App;