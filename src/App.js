import React from 'react';
import Landing from './Components/Landing/Landing.js'
import Nav from './Components/Navbar/Nav.js'
import About from './Components/About/About.js'
import Journey from './Components/Journey/Journey.js'
import Projects from './Components/Projects/Projects.js'
import Footer from './Components/Footer/Footer.js'
import Quote from './Components/Quote/Quote.js'

const App = () => {
  return (
    <div className="App">
      <Landing />
      <Nav />
      <About />
      <Quote />
      <Journey />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;