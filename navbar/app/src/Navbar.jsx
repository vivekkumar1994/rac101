import React from 'react'
import LogoBakery from './LogoBakery'
import About from './About'
import Service from './Service'
import Project from './Project'
import Contact from './Contact'
import "./Navbar.css"


const Navbar = () => {
  return (
      <>
      <div className='cointainer'>
    <div className='first'>
<LogoBakery/>
    </div>
    <div className='middle'><Service/>
          <Project/>
          <About/>
    
    </div>
    <div className='last'>
        <Contact/>
    </div>
    </div>
    </>
  )
}

export default Navbar